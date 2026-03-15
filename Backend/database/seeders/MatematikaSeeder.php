<?php

namespace Database\Seeders;

use App\Models\Bab;
use App\Models\LayarMateri;
use App\Models\OpsiJawaban;
use App\Models\Quiz;
use Illuminate\Database\Seeder;

class MatematikaSeeder extends Seeder
{
    public function run(): void
    {
        // Catatan: Seeder ini murni create(), jadi jalankan di database fresh
        // agar tidak duplikat data.
        $data = [
            [
                'id_modul' => 6,
                'judul_bab' => 'Mengenal Bangun Ruang',
                'layar' => [
                    [
                        'judul' => 'Bangun Ruang di Sekitar Kita',
                        'deskripsi' => 'Bangun ruang adalah bangun tiga dimensi yang memiliki panjang, lebar, dan tinggi. Banyak benda di sekitar kita yang memiliki bentuk bangun ruang.',
                        'quiz' => [
                            'jenis' => 'dragDrop',
                            'pertanyaan' => 'Cocokkan benda dengan bangun ruangnya',
                            'opsi' => [
                                ['teks' => 'Dadu -> Kubus', 'benar' => true],
                                ['teks' => 'Kaleng -> Tabung', 'benar' => true],
                                ['teks' => 'Bola sepak -> Bola', 'benar' => true],
                            ],
                        ],
                    ],
                    [
                        'judul' => 'Jenis Bangun Ruang',
                        'deskripsi' => 'Setiap bangun ruang memiliki bentuk, sisi, rusuk, dan titik sudut yang berbeda.',
                        'quiz' => [
                            'jenis' => 'pilgan',
                            'pertanyaan' => 'Bangun ruang yang memiliki 6 sisi sama besar adalah...',
                            'opsi' => [
                                ['teks' => 'Balok', 'benar' => false],
                                ['teks' => 'Kubus', 'benar' => true],
                                ['teks' => 'Tabung', 'benar' => false],
                            ],
                        ],
                    ],
                    [
                        'judul' => 'Unsur Bangun Ruang',
                        'deskripsi' => 'Bangun ruang memiliki unsur seperti sisi, rusuk, dan titik sudut yang membentuk strukturnya.',
                        'quiz' => [
                            'jenis' => 'tts',
                            'pertanyaan' => 'Kata kunci: Kubus, Rusuk, Sisi',
                            'opsi' => [
                                ['teks' => 'Kubus', 'benar' => true],
                                ['teks' => 'Rusuk', 'benar' => true],
                                ['teks' => 'Sisi', 'benar' => true],
                            ],
                        ],
                    ],
                ],
            ],
            [
                'id_modul' => 7,
                'judul_bab' => 'Teorema Pythagoras',
                'layar' => [
                    [
                        'judul' => 'Segitiga Siku-Siku',
                        'deskripsi' => 'Teorema Pythagoras digunakan untuk menghitung panjang sisi pada segitiga siku-siku.',
                        'quiz' => [
                            'jenis' => 'pilgan',
                            'pertanyaan' => 'Rumus Teorema Pythagoras adalah...',
                            'opsi' => [
                                ['teks' => 'a + b = c', 'benar' => false],
                                ['teks' => 'a^2 + b^2 = c^2', 'benar' => true],
                                ['teks' => 'a^2 - b^2 = c^2', 'benar' => false],
                            ],
                        ],
                    ],
                    [
                        'judul' => 'Contoh Perhitungan',
                        'deskripsi' => 'Jika dua sisi segitiga diketahui, kita dapat mencari sisi miring menggunakan rumus Pythagoras. 3^2 + 4^2 = 5^2.',
                    ],
                    [
                        'judul' => 'Penerapan Pythagoras',
                        'deskripsi' => 'Teorema Pythagoras sering digunakan untuk menghitung jarak atau panjang benda dalam kehidupan sehari-hari.',
                        'quiz' => [
                            'jenis' => 'pilgan',
                            'pertanyaan' => 'Jika a = 5 dan b = 12, berapa nilai c?',
                            'opsi' => [
                                ['teks' => '13', 'benar' => true],
                                ['teks' => '15', 'benar' => false],
                                ['teks' => '17', 'benar' => false],
                            ],
                        ],
                    ],
                ],
            ],
            [
                'id_modul' => 8,
                'judul_bab' => 'Mengenal Aljabar',
                'layar' => [
                    [
                        'judul' => 'Apa itu Aljabar',
                        'deskripsi' => 'Aljabar adalah cabang matematika yang menggunakan huruf atau simbol untuk mewakili angka yang belum diketahui. Contoh: x + 3 = 7.',
                        'quiz' => [
                            'jenis' => 'dragDrop',
                            'pertanyaan' => 'Cocokkan istilah dengan artinya',
                            'opsi' => [
                                ['teks' => 'x -> variabel', 'benar' => true],
                                ['teks' => '5 -> konstanta', 'benar' => true],
                                ['teks' => 'x + 2 -> bentuk aljabar', 'benar' => true],
                            ],
                        ],
                    ],
                    [
                        'judul' => 'Menyelesaikan Persamaan',
                        'deskripsi' => 'Untuk mencari nilai x, kita memindahkan angka ke sisi lain dengan operasi berlawanan. Contoh: x + 4 = 10, jadi x = 6.',
                        'quiz' => [
                            'jenis' => 'puzzle',
                            'pertanyaan' => 'Susun langkah: Kurangi kedua sisi dengan 4, lalu x = 6',
                            'opsi' => [
                                ['teks' => 'Kurangi kedua sisi dengan 4', 'benar' => true],
                                ['teks' => 'x = 6', 'benar' => true],
                            ],
                        ],
                    ],
                ],
            ],
            [
                'id_modul' => 9,
                'judul_bab' => 'Operasi Aljabar',
                'layar' => [
                    [
                        'judul' => 'Penjumlahan Aljabar',
                        'deskripsi' => 'Suku dengan variabel sama dapat dijumlahkan atau dikurangkan. Contoh: 2x + 3x = 5x.',
                        'quiz' => [
                            'jenis' => 'isian',
                            'pertanyaan' => '3x + 4x = ?',
                            'opsi' => [
                                ['teks' => '7x', 'benar' => true],
                            ],
                        ],
                    ],
                    [
                        'judul' => 'Perkalian Aljabar',
                        'deskripsi' => 'Perkalian aljabar dilakukan dengan mendistribusikan angka ke dalam tanda kurung. 2(x + 3) = 2x + 6.',
                        'quiz' => [
                            'jenis' => 'pilgan',
                            'pertanyaan' => 'Hasil dari 3(x + 2) adalah...',
                            'opsi' => [
                                ['teks' => '3x + 2', 'benar' => false],
                                ['teks' => '3x + 6', 'benar' => true],
                                ['teks' => 'x + 6', 'benar' => false],
                            ],
                        ],
                    ],
                ],
            ],
            [
                'id_modul' => 10,
                'judul_bab' => 'Matematika dalam Kehidupan',
                'layar' => [
                    [
                        'judul' => 'Belajar Bersama',
                        'deskripsi' => 'Matematika membantu kita memahami bentuk, menghitung jarak, dan memecahkan masalah dalam kehidupan sehari-hari.',
                        'quiz' => [
                            'jenis' => 'isian',
                            'pertanyaan' => 'Jika menemukan soal matematika sulit, apa yang sebaiknya kamu lakukan?',
                            'opsi' => [
                                ['teks' => 'Mencoba kembali langkahnya', 'benar' => true],
                                ['teks' => 'Berdiskusi dengan teman', 'benar' => true],
                                ['teks' => 'Bertanya kepada guru', 'benar' => true],
                            ],
                        ],
                    ],
                ],
            ],
        ];

        foreach ($data as $indexBab => $babItem) {
            $bab = Bab::create([
                'id_modul' => $babItem['id_modul'],
                'judul' => $babItem['judul_bab'],
                'urutan' => $indexBab + 1,
            ]);

            foreach ($babItem['layar'] as $indexLayar => $layarItem) {
                $layar = LayarMateri::create([
                    'id_bab' => $bab->id,
                    'tipe_layar' => 'materi',
                    'judul' => $layarItem['judul'],
                    'deskripsi_teks' => $layarItem['deskripsi'],
                    'urutan' => $indexLayar + 1,
                    'perlu_audio' => false,
                    'path_audio' => null,
                ]);

                if (!isset($layarItem['quiz'])) {
                    continue;
                }

                $quiz = Quiz::create([
                    'id_layar_materi' => $layar->id,
                    'jenis_quiz' => $layarItem['quiz']['jenis'],
                    'pertanyaan' => $layarItem['quiz']['pertanyaan'],
                    'urutan' => 1,
                ]);

                foreach ($layarItem['quiz']['opsi'] as $indexOpsi => $opsi) {
                    OpsiJawaban::create([
                        'id_quiz' => $quiz->id,
                        'teks_opsi' => $opsi['teks'],
                        'jawaban_benar' => $opsi['benar'],
                        'urutan' => $indexOpsi + 1,
                    ]);
                }
            }
        }
    }
}
