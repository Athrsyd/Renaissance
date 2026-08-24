<?php

namespace App\Http\Controllers;

use App\Models\ModulBelajar;
use Illuminate\Http\Request;

class SoalController extends Controller
{
    /**
     * GET /api/v1/modules/{modul}/soal
     *
     * Kembalikan semua soal dalam satu modul, terurut berdasarkan kolom `urutan`.
     * Digunakan frontend sebagai pengganti import file JS data soal.
     *
     * Response shape (kompatibel dengan PopUpModul.jsx):
     * {
     *   "data": {
     *     "id": 101,
     *     "bab": 1,
     *     "judul": "Eksponen dan Logaritma",
     *     "soal": [
     *       {
     *         "id": 1,
     *         "judul": "Mengenal Bilangan Eksponen",
     *         "type": "quiz",
     *         "narasi": "...",
     *         "pertanyaan": "...",
     *         "ilustrasi": null,
     *         "pilihan": ["A. 12", "B. 64", "C. 81", "D. 27"],
     *         "jawaban": ["C. 81"]
     *       },
     *       ...
     *     ]
     *   }
     * }
     */
    public function index(ModulBelajar $modul)
    {
        $modul->load('soals');

        return response()->json([
            'message' => 'Soal berhasil diambil.',
            'data'    => [
                'id'    => $modul->id,
                'bab'   => $modul->bab,
                'judul' => $modul->judul,
                'soal'  => $modul->soals->map(fn($s) => [
                    'id'         => $s->id,
                    'judul'      => $s->judul,
                    'type'       => $s->type,
                    'narasi'     => $s->narasi,
                    // pertanyaan: kembalikan string jika array berisi 1 elemen (quiz/isian),
                    // array jika lebih (TTS)
                    'pertanyaan' => is_array($s->pertanyaan) && count($s->pertanyaan) === 1
                        ? $s->pertanyaan[0]
                        : $s->pertanyaan,
                    'ilustrasi'  => $s->ilustrasi,
                    'pilihan'    => $s->pilihan,
                    // jawaban: kembalikan string jika array berisi 1 elemen (quiz),
                    // array jika lebih (drag&drop, TTS)
                    'jawaban'    => is_array($s->jawaban) && count($s->jawaban) === 1
                        ? $s->jawaban[0]
                        : $s->jawaban,
                ])->values(),
            ],
        ], 200);
    }

    /**
     * GET /api/v1/mapel/{mapel}/kelas/{kelas}/modules
     *
     * Kembalikan semua modul (tanpa soal) untuk satu kombinasi mapel + kelas.
     * Digunakan frontend untuk membangun PathTimeline.
     */
    public function modulsByMapelKelas(Request $request, string $mapel, int $kelas)
    {
        $moduls = \App\Models\ModulBelajar::where('mapel', $mapel)
            ->where('kelas', $kelas)
            ->orderBy('bab')
            ->get(['id', 'bab', 'judul']);

        return response()->json([
            'message' => 'Daftar modul berhasil diambil.',
            'data'    => $moduls,
        ], 200);
    }
}
