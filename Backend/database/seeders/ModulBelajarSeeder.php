<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ModulBelajar;

class ModulBelajarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seed Modul PKN
        ModulBelajar::create([
            'id_mapel' => 1,
            'judul' => "Latar Sejarah Kelahiran Pancasila"
        ]);
        ModulBelajar::create([
            'id_mapel' => 1,
            'judul' => "Kelahiran Pancasila dalam Sidang BPUPKI"
        ]);
        ModulBelajar::create([
            'id_mapel' => 1,
            'judul' => "Proses Perumusan Pancasila"
        ]);
        ModulBelajar::create([
            'id_mapel' => 1,
            'judul' => "Penetapan Pancasila sebagai dasar Negara"
        ]);
        ModulBelajar::create([
            'id_mapel' => 1,
            'judul' => "Meneladanni Pendiri Bangsa"
        ]);

        // Seed Modul Matematika
        ModulBelajar::create([
            'id_mapel' => 2,
            'judul' => "Mengenal Bangun Ruang"
        ]);
        ModulBelajar::create([
            'id_mapel' => 2,
            'judul' => "Teorema Pythagoras"
        ]);
        ModulBelajar::create([
            'id_mapel' => 2,
            'judul' => "Mengenal Aljabar"
        ]);
        ModulBelajar::create([
            'id_mapel' => 2,
            'judul' => "Operasi Aljabar"
        ]);
        ModulBelajar::create([
            'id_mapel' => 2,
            'judul' => "Matematika dalam Kehidupan"
        ]);
    }
}
