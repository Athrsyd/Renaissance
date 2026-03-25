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
            'mapel' => 'Pendidikan Pancasila',
            'bab' => 1,
            'judul' => "Sejarah Perumusan Pancasila"
        ]);
        ModulBelajar::create([
            'mapel' => 'Pendidikan Pancasila',
            'bab' => 2,
            'judul' => "Kelahiran Pancasila dalam Sidang BPUPK"
        ]);
        ModulBelajar::create([
            'mapel' => 'Pendidikan Pancasila',
            'bab' => 3,
            'judul' => "Proses Perumusan Pancasila"
        ]);
        ModulBelajar::create([
            'mapel' => 'Pendidikan Pancasila',
            'bab' => 4,
            'judul' => "Penetapan Pancasila sebagai dasar Negara"
        ]);
        ModulBelajar::create([
            'mapel' => 'Pendidikan Pancasila',
            'bab' => 5,
            'judul' => "Meneladanni Pendiri Bangsa"
        ]);

        // Seed Modul Matematika
        ModulBelajar::create([
            'mapel' => 'Matematika',
            'bab' => 1,
            'judul' => "Bangun Ruang"
        ]);
        ModulBelajar::create([
            'mapel' => 'Matematika',
            'bab' => 2,
            'judul' => "Teorema Pythagoras"
        ]);
        ModulBelajar::create([
            'mapel' => 'Matematika',
            'bab' => 3,
            'judul' => "Mengenal Aljabar"
        ]);
        ModulBelajar::create([
            'mapel' => 'Matematika',
            'bab' => 4,
            'judul' => "Operasi Aljabar"
        ]);
        ModulBelajar::create([
            'mapel' => 'Matematika',
            'bab' => 5,
            'judul' => "Matematika dalam Kehidupan Sehari-hari"
        ]);
    }
}
