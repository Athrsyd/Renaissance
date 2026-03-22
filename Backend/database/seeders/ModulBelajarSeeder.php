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
            'judul' => "Latar Sejarah Kelahiran Pancasila"
        ]);
        ModulBelajar::create([
            'mapel' => 'Pendidikan Pancasila' ,
            'judul' => "Kelahiran Pancasila dalam Sidang BPUPKI"
        ]);
        ModulBelajar::create([
            'mapel' => 'Pendidikan Pancasila',
            'judul' => "Proses Perumusan Pancasila"
        ]);
        ModulBelajar::create([
            'mapel' => 'Pendidikan Pancasila',
            'judul' => "Penetapan Pancasila sebagai dasar Negara"
        ]);
        ModulBelajar::create([
            'mapel' => 'Pendidikan Pancasila',
            'judul' => "Meneladanni Pendiri Bangsa"
        ]);

        // Seed Modul Matematika
        ModulBelajar::create([
            'mapel' => 'Matematika',
            'judul' => "Mengenal Bangun Ruang"
        ]);
        ModulBelajar::create([
            'mapel' => 'Matematika',
            'judul' => "Teorema Pythagoras"
        ]);
        ModulBelajar::create([
            'mapel' => 'Matematika',
            'judul' => "Mengenal Aljabar"
        ]);
        ModulBelajar::create([
            'mapel' => 'Matematika',
            'judul' => "Operasi Aljabar"
        ]);
        ModulBelajar::create([
            'mapel' => 'Matematika',
            'judul' => "Matematika dalam Kehidupan"
        ]);
    }
}
