<?php

namespace App\Services;

use App\Models\LeaderboardSnapshot;
use App\Models\Soal;
use App\Models\UserModulProgress;
use App\Models\UserStreak;
use Illuminate\Support\Facades\DB;

/**
 * LeaderboardService
 *
 * Menangani pembaruan dan pengambilan data leaderboard.
 *
 * Dipanggil dari UserModulProgressController::upsertProgress()
 * setiap kali user menyelesaikan sesi belajar.
 *
 * Dua kategori:
 *   - 'streak'   : current_streak user, global lintas kelas, top 10
 *   - 'progress' : % soal selesai di kelas user, per kelas, top 10
 */
class LeaderboardService
{
    /**
     * Perbarui snapshot leaderboard untuk seorang user.
     * Dipanggil setiap selesai upsertProgress.
     */
    public function updateSnapshot(int $userId, string $userName, ?int $kelas): void
    {
        // ── 1. Streak snapshot (global) ──────────────────────────────────────
        $streak = UserStreak::where('user_id', $userId)->first();
        $currentStreak = $streak?->current_streak ?? 0;

        LeaderboardSnapshot::updateOrCreate(
            ['user_id' => $userId, 'category' => 'streak', 'kelas' => null],
            [
                'user_name'  => $userName,
                'score'      => $currentStreak,
                'updated_at' => now(),
            ]
        );

        // ── 2. Progress snapshot (per kelas) ─────────────────────────────────
        if ($kelas !== null) {
            $progressScore = $this->calculateClassProgress($userId, $kelas);

            LeaderboardSnapshot::updateOrCreate(
                ['user_id' => $userId, 'category' => 'progress', 'kelas' => $kelas],
                [
                    'user_name'  => $userName,
                    'score'      => $progressScore,
                    'updated_at' => now(),
                ]
            );
        }
    }

    /**
     * Hitung persentase progress user di satu kelas.
     *
     * Formula: (total soal selesai di semua modul kelas ini) /
     *          (total soal tersedia di semua modul kelas ini) × 100
     *
     * Menggunakan soal_selesai_count (integer) agar tidak perlu parse JSON.
     */
    public function calculateClassProgress(int $userId, int $kelas): int
    {
        // Total soal yang sudah diselesaikan di semua modul kelas ini
        $soalSelesai = UserModulProgress::join('modul_belajars', 'modul_belajars.id', '=', 'user_modul_progress.modul_id')
            ->where('user_modul_progress.user_id', $userId)
            ->where('modul_belajars.kelas', $kelas)
            ->sum('user_modul_progress.soal_selesai_count');

        // Total soal yang tersedia di semua modul kelas ini
        $totalSoal = Soal::join('modul_belajars', 'modul_belajars.id', '=', 'soals.modul_id')
            ->where('modul_belajars.kelas', $kelas)
            ->count();

        if ($totalSoal === 0) {
            return 0;
        }

        return (int) round(($soalSelesai / $totalSoal) * 100);
    }

    /**
     * Ambil top 10 leaderboard streak (global, lintas kelas).
     * Mengembalikan ranking + flag apakah user sendiri masuk top 10.
     */
    public function getStreakLeaderboard(int $userId): array
    {
        $rows = LeaderboardSnapshot::where('category', 'streak')
            ->orderByDesc('score')
            ->orderBy('updated_at')   // tiebreaker: siapa lebih dulu capai skor ini
            ->limit(10)
            ->get(['user_id', 'user_name', 'score', 'updated_at']);

        $top10 = $rows->map(fn($r, $i) => [
            'rank'       => $i + 1,
            'user_id'    => $r->user_id,
            'name'       => $r->user_name,
            'score'      => $r->score,
            'is_me'      => $r->user_id === $userId,
        ])->values()->toArray();

        // Jika user tidak masuk top 10, sertakan posisi mereka
        $myEntry = $this->getUserRank($userId, 'streak', null);

        return [
            'top10'   => $top10,
            'my_rank' => $myEntry,
        ];
    }

    /**
     * Ambil top 10 leaderboard progress untuk kelas tertentu.
     */
    public function getProgressLeaderboard(int $userId, int $kelas): array
    {
        $rows = LeaderboardSnapshot::where('category', 'progress')
            ->where('kelas', $kelas)
            ->orderByDesc('score')
            ->orderBy('updated_at')
            ->limit(10)
            ->get(['user_id', 'user_name', 'score', 'updated_at']);

        $top10 = $rows->map(fn($r, $i) => [
            'rank'   => $i + 1,
            'user_id' => $r->user_id,
            'name'   => $r->user_name,
            'score'  => $r->score,
            'is_me'  => $r->user_id === $userId,
        ])->values()->toArray();

        $myEntry = $this->getUserRank($userId, 'progress', $kelas);

        return [
            'top10'   => $top10,
            'my_rank' => $myEntry,
        ];
    }

    /**
     * Hitung posisi (rank) user di leaderboard tertentu.
     * Digunakan saat user tidak masuk top 10.
     */
    private function getUserRank(int $userId, string $category, ?int $kelas): ?array
    {
        $mySnapshot = LeaderboardSnapshot::where('user_id', $userId)
            ->where('category', $category)
            ->where('kelas', $kelas)
            ->first();

        if (!$mySnapshot) {
            return null;
        }

        // Hitung berapa orang yang scorenya lebih tinggi
        $rank = LeaderboardSnapshot::where('category', $category)
            ->where('kelas', $kelas)
            ->where('score', '>', $mySnapshot->score)
            ->count() + 1;

        return [
            'rank'  => $rank,
            'name'  => $mySnapshot->user_name,
            'score' => $mySnapshot->score,
            'is_me' => true,
        ];
    }
}
