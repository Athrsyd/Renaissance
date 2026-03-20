<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserModulProgress;
use App\Models\User;
use App\Models\ModulBelajar;
use App\Models\Bab;
use App\Models\LayarMateri;

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
                
                // Get bab from current modul
                $bab = Bab::where('id_modul', $modul->id)->first();
                $layarMateri = null;
                
                if ($bab) {
                    $layarMateri = LayarMateri::where('id_bab', $bab->id)->first();
                }
                
                $completedAt = now()->subDays(rand(0, 30));
                
                UserModulProgress::create([
                    'user_id' => $user->id,
                    'modul_id' => $modul->id,
                    'id_bab_terakhir' => $bab?->id,
                    'id_layar_terakhir' => $layarMateri?->id,
                    'progress_persen' => $progressPersen,
                    'is_selesai' => $progressPersen === 100,
                    'last_accessed' => now()->subDays(rand(0, 30)),
                    'completed_at' => $completedAt,
                ]);
            }
        }
    }
}
