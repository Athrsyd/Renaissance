<?php

namespace Database\Seeders;

use App\Models\LeaderboardSnapshot;
use App\Models\ModulBelajar;
use App\Models\User;
use App\Models\UserModulProgress;
use App\Models\UserStreak;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

/**
 * LeaderboardUserSeeder
 *
 * Membuat 25 user fiktif yang tersebar di 3 kategori leaderboard:
 *
 *  Kategori A — "Streak Warriors" (8 user, semua kelas)
 *    Fokus konsistensi: current_streak tinggi (14–90 hari),
 *    XP sedang, progress sedang. Mewakili user yang rajin login tiap hari
 *    tapi belum tentu menyelesaikan banyak materi.
 *
 *  Kategori B — "Progress Champions" (9 user, kelas 10/11/12 @ 3 user/kelas)
 *    Fokus ketuntasan: progress tinggi (60–100%),
 *    streak sedang, XP proporsional dengan progress.
 *    Mewakili user yang fokus menyelesaikan seluruh modul kelasnya.
 *
 *  Kategori C — "XP Hunters" (8 user, semua kelas)
 *    Fokus poin: XP tinggi (1500–8000), streak rendah-sedang,
 *    progress bervariasi. Mewakili user yang aktif mengulang soal
 *    untuk mengumpulkan XP sebanyak-banyaknya.
 *
 * Setiap user juga mendapat snapshot leaderboard (streak, progress, xp)
 * agar langsung terlihat di halaman Leaderboard tanpa perlu menyelesaikan sesi.
 *
 * Cara jalankan (setelah migrate):
 *   php artisan db:seed --class=LeaderboardUserSeeder
 *
 * Atau tambahkan ke DatabaseSeeder:
 *   $this->call([LeaderboardUserSeeder::class]);
 */
class LeaderboardUserSeeder extends Seeder
{
    // ── Data 25 user ─────────────────────────────────────────────────────────

    /**
     * Format setiap user:
     * [name, email, kelas, category, current_streak, longest_streak, xp, progress_pct]
     *
     * progress_pct = rata-rata % progress di semua modul kelasnya (0–100)
     */
    private array $users = [

        // ── Kategori A: Streak Warriors ───────────────────────────────────
        // Streak tinggi (14-90 hari), XP sedang, progress sedang
        ['Naresha Ardelia',   'naresha@example.com',   10, 'streak',   90, 90,  3200, 45],
        ['Gilang Prasetyo',   'gilang@example.com',    11, 'streak',   72, 75,  2800, 38],
        ['Siti Rahayu',       'siti@example.com',      12, 'streak',   60, 60,  2100, 50],
        ['Rendra Kusuma',     'rendra@example.com',    10, 'streak',   45, 50,  1750, 30],
        ['Farah Nabilah',     'farah@example.com',     11, 'streak',   35, 40,  1400, 42],
        ['Bagas Wicaksono',   'bagas@example.com',     12, 'streak',   28, 30,  1200, 35],
        ['Annisa Putri',      'annisa@example.com',    10, 'streak',   21, 25,   950, 25],
        ['Dimas Aryanto',     'dimas@example.com',     11, 'streak',   14, 14,   600, 20],

        // ── Kategori B: Progress Champions ───────────────────────────────
        // Progress tinggi (60-100%), streak sedang, XP proporsional
        // Kelas 10 — 3 user
        ['Kirana Dewi',       'kirana@example.com',    10, 'progress', 12, 20,  4500, 100],
        ['Rizky Firmansyah',  'rizky@example.com',     10, 'progress',  8, 15,  3800,  85],
        ['Mega Cahyani',      'mega@example.com',      10, 'progress',  5, 10,  2900,  70],
        // Kelas 11 — 3 user
        ['Aldi Nugroho',      'aldi@example.com',      11, 'progress', 15, 22,  5200, 100],
        ['Dewi Anggraeni',    'dewi@example.com',      11, 'progress',  9, 12,  4100,  80],
        ['Hendra Saputra',    'hendra@example.com',    11, 'progress',  6,  8,  2600,  65],
        // Kelas 12 — 3 user
        ['Anindya Kusuma',    'anindya@example.com',   12, 'progress', 18, 25,  6100, 100],
        ['Yoga Pratama',      'yoga@example.com',      12, 'progress', 10, 14,  4700,  90],
        ['Salsabila Nur',     'salsabila@example.com', 12, 'progress',  4,  7,  3100,  62],

        // ── Kategori C: XP Hunters ────────────────────────────────────────
        // XP tinggi (1500-8000), streak rendah-sedang, progress bervariasi
        ['Arya Mahendra',     'arya@example.com',      10, 'xp',        7, 10,  8000, 55],
        ['Cantika Lestari',   'cantika@example.com',   11, 'xp',        5,  8,  6800, 48],
        ['Farel Gunawan',     'farel@example.com',     12, 'xp',        3,  6,  5900, 40],
        ['Intan Permata',     'intan@example.com',     10, 'xp',        9, 12,  5100, 62],
        ['Joko Widodo',       'joko@example.com',      11, 'xp',        2,  5,  4200, 33],
        ['Laila Fitriana',    'laila@example.com',     12, 'xp',        6,  9,  3500, 44],
        ['Miko Santoso',      'miko@example.com',      10, 'xp',        1,  3,  2300, 28],
        ['Nadia Ramadhani',   'nadia@example.com',     11, 'xp',        4,  7,  1500, 20],
    ];

    // ── Main ─────────────────────────────────────────────────────────────────

    public function run(): void
    {
        $moduls = ModulBelajar::all()->groupBy('kelas'); // ['10' => [...], '11' => [...], '12' => [...]]

        foreach ($this->users as $data) {
            [$name, $email, $kelas, $category, $currentStreak, $longestStreak, $xp, $progressPct] = $data;

            // ── 1. Buat / update User ────────────────────────────────────
            $user = User::updateOrCreate(
                ['email' => $email],
                [
                    'name'         => $name,
                    'password'     => Hash::make('password'),
                    'kelas'        => $kelas,
                    'starting_bab' => 1,
                    'xp'           => $xp,
                    'level'        => User::xpToLevel($xp),
                ]
            );

            // ── 2. Streak ────────────────────────────────────────────────
            // last_activity_date: user streak warriors dianggap aktif hari ini,
            // progress champions kemarin, xp hunters 2-3 hari lalu
            $lastActivity = match ($category) {
                'streak'   => Carbon::today(),
                'progress' => Carbon::yesterday(),
                'xp'       => Carbon::today()->subDays(rand(1, 3)),
                default    => Carbon::today(),
            };

            UserStreak::updateOrCreate(
                ['user_id' => $user->id],
                [
                    'current_streak'     => $currentStreak,
                    'longest_streak'     => $longestStreak,
                    'last_activity_date' => $lastActivity->toDateString(),
                    'streak_started_at'  => $lastActivity->copy()
                                               ->subDays($currentStreak - 1)
                                               ->toDateString(),
                ]
            );

            // ── 3. Progress modul ────────────────────────────────────────
            // Ambil modul sesuai kelas user; bagi progress_pct secara berurutan:
            //   modul awal → selesai 100%, modul akhir → sesuai sisa pct
            $kelasModuls = $moduls->get($kelas, collect());

            if ($kelasModuls->isNotEmpty()) {
                $totalModuls   = $kelasModuls->count();
                $modulesSelesai = (int) floor($totalModuls * $progressPct / 100);

                foreach ($kelasModuls as $i => $modul) {
                    // Ambil soal_ids yang ada di modul ini
                    $soalIds  = $modul->soals()->pluck('id')->toArray();
                    $totalSoal = count($soalIds);

                    if ($i < $modulesSelesai) {
                        // Modul selesai penuh
                        $persen        = 100;
                        $soalSelesai   = $soalIds;
                        $isSelesai     = true;
                        $completedAt   = Carbon::now()->subDays(rand(1, 60));
                    } elseif ($i === $modulesSelesai && $progressPct % (100 / max($totalModuls, 1)) > 0) {
                        // Modul sedang berjalan — selesai sebagian
                        $persen        = rand(20, 80);
                        $soalSelesai   = array_slice($soalIds, 0, (int) round($totalSoal * $persen / 100));
                        $isSelesai     = false;
                        $completedAt   = null;
                    } else {
                        // Modul belum dimulai
                        $persen        = 0;
                        $soalSelesai   = [];
                        $isSelesai     = false;
                        $completedAt   = null;
                    }

                    UserModulProgress::updateOrCreate(
                        ['user_id' => $user->id, 'modul_id' => $modul->id],
                        [
                            'bab'                => $modul->bab,
                            'progress_persen'    => $persen,
                            'is_selesai'         => $isSelesai,
                            'soal_selesai'       => $soalSelesai,
                            'soal_selesai_count' => count($soalSelesai),
                            'last_accessed'      => Carbon::now()->subDays(rand(0, 14)),
                            'completed_at'       => $completedAt,
                        ]
                    );
                }
            }

            // ── 4. Leaderboard Snapshots ─────────────────────────────────

            // Streak snapshot (global, kelas = null)
            LeaderboardSnapshot::updateOrCreate(
                ['user_id' => $user->id, 'category' => 'streak', 'kelas' => null],
                [
                    'user_name'  => $name,
                    'score'      => $currentStreak,
                    'meta'       => null,
                    'updated_at' => now(),
                ]
            );

            // Progress snapshot (per kelas)
            LeaderboardSnapshot::updateOrCreate(
                ['user_id' => $user->id, 'category' => 'progress', 'kelas' => $kelas],
                [
                    'user_name'  => $name,
                    'score'      => $progressPct,
                    'meta'       => null,
                    'updated_at' => now(),
                ]
            );

            // XP snapshot (global, kelas = null)
            LeaderboardSnapshot::updateOrCreate(
                ['user_id' => $user->id, 'category' => 'xp', 'kelas' => null],
                [
                    'user_name'  => $name,
                    'score'      => $xp,
                    'meta'       => json_encode(['level' => User::xpToLevel($xp)]),
                    'updated_at' => now(),
                ]
            );

            $this->command->line("  ✓ [{$category}] {$name} (Kelas {$kelas}) — streak:{$currentStreak}d xp:{$xp} progress:{$progressPct}%");
        }

        $this->command->newLine();
        $this->command->info('LeaderboardUserSeeder selesai: 25 user dibuat.');
        $this->command->table(
            ['Kategori', 'Jumlah User', 'Kelas'],
            [
                ['Streak Warriors',      8, 'Semua kelas'],
                ['Progress Champions',   9, '10 / 11 / 12 (3 each)'],
                ['XP Hunters',           8, 'Semua kelas'],
            ]
        );
    }
}
