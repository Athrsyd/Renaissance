<?php

namespace Database\Seeders;

use App\Models\Bab;
use App\Models\LayarMateri;
use App\Models\OpsiJawaban;
use App\Models\Quiz;
use Illuminate\Database\Seeder;

class PknSeeder extends Seeder
{
    public function run(): void
    {
        // Catatan: Seeder ini murni create(), jadi jalankan di database fresh
        // agar tidak duplikat data.
        $data = [
            [
                'id_modul' => 1,
                'judul_bab' => 'Latar Sejarah Kelahiran Pancasila',
                'layar' => [
                    [
                        'judul' => 'Masa Praaksara',
                        'deskripsi' => 'Sejak masa praaksara, masyarakat Nusantara sudah memiliki nilai-nilai yang mirip dengan Pancasila, seperti percaya kepada kekuatan Tuhan, saling membantu, dan hidup rukun dalam kelompok.',
                        'quiz' => [
                            'jenis' => 'dragDrop',
                            'pertanyaan' => 'Cocokkan nilai dengan contoh perilaku',
                            'opsi' => [
                                'Berdoa kepada roh leluhur -> Ketuhanan',
                                'Membantu berburu bersama -> Kemanusiaan',
                                'Hidup dalam kelompok -> Persatuan',
                            ],
                        ],
                    ],
                    [
                        'judul' => 'Kerajaan Nusantara',
                        'deskripsi' => 'Pada masa kerajaan Nusantara, nilai persatuan dan kerja sama sudah terlihat dalam kehidupan masyarakat dan pemerintahan.',
                        'quiz' => [
                            'jenis' => 'pilgan',
                            'pertanyaan' => 'Kerajaan yang terkenal dengan semboyan Bhinneka Tunggal Ika adalah...',
                            'opsi' => [
                                ['teks' => 'Sriwijaya', 'benar' => false],
                                ['teks' => 'Majapahit', 'benar' => true],
                                ['teks' => 'Mataram', 'benar' => false],
                            ],
                        ],
                    ],
                ],
            ],
            [
                'id_modul' => 2,
                'judul_bab' => 'Kelahiran Pancasila dalam Sidang BPUPKI',
                'layar' => [
                    [
                        'judul' => 'Pembentukan BPUPK',
                        'deskripsi' => 'BPUPK dibentuk untuk mempersiapkan kemerdekaan Indonesia, termasuk merumuskan dasar negara.',
                        'quiz' => [
                            'jenis' => 'pilgan',
                            'pertanyaan' => 'Tujuan BPUPK adalah...',
                            'opsi' => [
                                ['teks' => 'Mempersiapkan kemerdekaan', 'benar' => true],
                                ['teks' => 'Membentuk tentara', 'benar' => false],
                                ['teks' => 'Membuat kerajaan', 'benar' => false],
                            ],
                        ],
                    ],
                    [
                        'judul' => 'Istilah Pancasila',
                        'deskripsi' => 'Dalam pidato tersebut, Soekarno menyebut istilah Pancasila yang berarti lima prinsip sebagai dasar negara Indonesia.',
                        'quiz' => [
                            'jenis' => 'pilgan',
                            'pertanyaan' => 'Pancasila berasal dari bahasa...',
                            'opsi' => [
                                ['teks' => 'Arab', 'benar' => false],
                                ['teks' => 'Sanskerta', 'benar' => true],
                                ['teks' => 'Belanda', 'benar' => false],
                            ],
                        ],
                    ],
                ],
            ],
            [
                'id_modul' => 3,
                'judul_bab' => 'Proses Perumusan Pancasila',
                'layar' => [
                    [
                        'judul' => 'Panitia 9',
                        'deskripsi' => 'Panitia Sembilan dibentuk untuk merumuskan dasar negara Indonesia.',
                    ],
                    [
                        'judul' => 'Piagam Jakarta',
                        'deskripsi' => 'Pada 22 Juni 1945, Panitia Sembilan menghasilkan rumusan dasar negara yang disebut Piagam Jakarta.',
                    ],
                ],
            ],
            [
                'id_modul' => 4,
                'judul_bab' => 'Penetapan Pancasila sebagai dasar Negara',
                'layar' => [
                    [
                        'judul' => 'Penetapan PPKI',
                        'deskripsi' => 'Setelah Indonesia merdeka, PPKI mengesahkan Pancasila sebagai dasar negara pada tanggal 18 Agustus 1945.',
                    ],
                    [
                        'judul' => 'Perubahan Sila Pertama',
                        'deskripsi' => 'Sila pertama dalam Piagam Jakarta diubah menjadi Ketuhanan Yang Maha Esa agar dapat diterima oleh seluruh rakyat Indonesia.',
                    ],
                ],
            ],
            [
                'id_modul' => 5,
                'judul_bab' => 'Meneladanni Pendiri Bangsa',
                'layar' => [
                    [
                        'judul' => 'Teladan Pendiri Bangsa',
                        'deskripsi' => 'Para pendiri bangsa menunjukkan sikap saling menghargai, musyawarah, dan toleransi dalam merumuskan dasar negara.',
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
                    if (is_array($opsi)) {
                        $teks = $opsi['teks'];
                        $benar = $opsi['benar'];
                    } else {
                        $teks = $opsi;
                        $benar = true;
                    }

                    OpsiJawaban::create([
                        'id_quiz' => $quiz->id,
                        'teks_opsi' => $teks,
                        'jawaban_benar' => $benar,
                        'urutan' => $indexOpsi + 1,
                    ]);
                }
            }
        }
    }
}
