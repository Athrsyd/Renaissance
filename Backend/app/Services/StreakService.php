<?php

namespace App\Services;

use App\Models\UserStreak;
use Illuminate\Support\Carbon;

/**
 * StreakService
 *
 * Menangani seluruh logika streak harian.
 *
 * Aturan:
 *   - Streak bertambah jika user menyelesaikan ≥1 soal dalam sehari
 *   - Toleransi 1 hari skip: jika last_activity_date = kemarin -1 (2 hari lalu),
 *     streak tetap berlanjut, tidak reset
 *   - Jika absen > 1 hari, streak direset ke 1 (hari ini dihitung sebagai awal baru)
 *   - Jika sudah aktif hari ini, tidak ada perubahan (idempotent dalam satu hari)
 *   - longest_streak diperbarui otomatis jika current_streak melewati rekor
 */
class StreakService
{
    /**
     * Dipanggil setiap kali user menyelesaikan ≥1 soal.
     * Mengembalikan record UserStreak yang sudah diperbarui.
     */
    public function record(int $userId): UserStreak
    {
        $today = Carbon::today()->toDateString();

        $streak = UserStreak::firstOrCreate(
            ['user_id' => $userId],
            [
                'current_streak'    => 0,
                'longest_streak'    => 0,
                'last_activity_date' => null,
                'streak_started_at'  => null,
            ]
        );

        // Sudah dicatat hari ini — tidak perlu update apa-apa
        if ($streak->last_activity_date?->toDateString() === $today) {
            return $streak;
        }

        $yesterday   = Carbon::yesterday()->toDateString();
        $twoDaysAgo  = Carbon::today()->subDays(2)->toDateString();
        $lastDate    = $streak->last_activity_date?->toDateString();

        if ($lastDate === null) {
            // User baru pertama kali belajar
            $streak->current_streak   = 1;
            $streak->streak_started_at = $today;
        } elseif ($lastDate === $yesterday) {
            // Belajar kemarin → lanjutkan streak
            $streak->current_streak += 1;
        } elseif ($lastDate === $twoDaysAgo) {
            // Skip 1 hari (toleransi) → tetap lanjutkan streak
            $streak->current_streak += 1;
        } else {
            // Skip > 1 hari → reset streak, mulai dari 1
            $streak->current_streak   = 1;
            $streak->streak_started_at = $today;
        }

        $streak->last_activity_date = $today;

        // Perbarui rekor terpanjang jika perlu
        if ($streak->current_streak > $streak->longest_streak) {
            $streak->longest_streak = $streak->current_streak;
        }

        $streak->save();

        return $streak;
    }

    /**
     * Ambil data streak user, buat default jika belum ada.
     */
    public function get(int $userId): UserStreak
    {
        return UserStreak::firstOrCreate(
            ['user_id' => $userId],
            [
                'current_streak'    => 0,
                'longest_streak'    => 0,
                'last_activity_date' => null,
                'streak_started_at'  => null,
            ]
        );
    }

    /**
     * Kembalikan array indikator hari (Sen–Min) untuk ditampilkan di UI.
     * true = aktif/hijau, false = tidak aktif.
     *
     * Logika: tampilkan 7 hari ke belakang dari hari ini.
     * Hari yang last_activity_date-nya jatuh di range ini dianggap aktif
     * jika streak pada hari itu sedang berjalan.
     *
     * Catatan: implementasi detail per-hari memerlukan tabel activity log
     * tersendiri. Untuk saat ini, kita return state minggu ini berdasarkan
     * last_activity_date dan current_streak — cukup untuk tampilan dashboard.
     */
    public function weeklyIndicator(UserStreak $streak): array
    {
        $days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
        $today = Carbon::today();
        // Senin minggu ini sebagai awal
        $monday = $today->copy()->startOfWeek(Carbon::MONDAY);

        $result = [];
        for ($i = 0; $i < 7; $i++) {
            $day  = $monday->copy()->addDays($i);
            $label = $days[$i];

            // Hari yang belum tiba selalu false
            if ($day->isFuture()) {
                $result[] = ['day' => $label, 'active' => false];
                continue;
            }

            // Aktif jika last_activity_date >= hari ini - current_streak
            // dan hari ini jatuh dalam rentang streak
            $streakStart = $streak->last_activity_date
                ? Carbon::parse($streak->last_activity_date)->subDays($streak->current_streak - 1)
                : null;

            $active = $streakStart
                && $day->gte($streakStart)
                && $day->lte(Carbon::parse($streak->last_activity_date));

            $result[] = ['day' => $label, 'active' => $active];
        }

        return $result;
    }
}
