<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserModulProgress;
use App\Models\User;
use App\Models\ModulBelajar;

class UserModulProgressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $moduls = ModulBelajar::all();

        // Create progress records for each user with each modul
        foreach ($users as $user) {
            foreach ($moduls as $key => $modul) {
                // Vary the progress for different modules
                $progressPercentages = [25, 50, 75, 100];
                $progressPersen = $progressPercentages[$key % count($progressPercentages)];
                
                // Simulate soal yang sudah diselesaikan
                // Contoh: jika progress 50%, user sudah selesai ~50% dari soal
                $soalSelesai = [];
                if ($progressPersen >= 25) $soalSelesai[] = 1;
                if ($progressPersen >= 50) $soalSelesai[] = 2;
                if ($progressPersen >= 75) $soalSelesai[] = 3;
                if ($progressPersen >= 100) $soalSelesai[] = 4;
                
                $completedAt = $progressPersen === 100 ? now()->subDays(rand(0, 30)) : null;
                
                UserModulProgress::create([
                    'user_id' => $user->id,
                    'modul_id' => $modul->id,
                    'soal_selesai' => $soalSelesai,  // ← NEW
                    'progress_persen' => $progressPersen,
                    'is_selesai' => $progressPersen === 100,
                    'last_accessed' => now()->subDays(rand(0, 30)),
                    'completed_at' => $completedAt,
                ]);
            }
        }
    }
}
