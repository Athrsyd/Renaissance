<?php

namespace App\Http\Controllers;

use App\Models\ModulBelajar;
use Illuminate\Http\Request;

/**
 * PlacementController
 *
 * Menangani alur placement test setelah registrasi:
 *   1. GET  placement/soal?kelas={10|11|12}
 *      → Ambil soal dari maks 3 bab pertama, semua mapel untuk kelas tertentu.
 *
 *   2. PUT  placement/kelas
 *      → Simpan pilihan kelas user (dari step "Pilih Kelas").
 *
 *   3. GET  placement/status
 *      → Cek apakah user sudah punya kelas (sudah selesai placement).
 */
class PlacementController extends Controller
{
    /**
     * GET /api/v1/placement/soal?kelas={10|11|12}
     *
     * Kembalikan soal placement:
     *   - Semua mapel yang tersedia di kelas tersebut
     *   - Maks 3 bab pertama per mapel
     *   - Semua soal dalam bab tersebut (semua tipe)
     *
     * Response shape:
     * {
     *   "data": [
     *     {
     *       "mapel": "Matematika",
     *       "bab": [
     *         {
     *           "modul_id": 1,
     *           "bab": 1,
     *           "judul": "Eksponen dan Logaritma",
     *           "soal": [ { id, judul, type, narasi, pertanyaan, pilihan, jawaban } ]
     *         }
     *       ]
     *     }
     *   ]
     * }
     */
    public function getSoal(Request $request)
    {
        $kelas = (int) $request->query('kelas', 10);

        if (!in_array($kelas, [7, 8, 9, 10, 11, 12])) {
            return response()->json(['message' => 'Kelas tidak valid.'], 422);
        }

        // Ambil semua modul untuk kelas ini, max 3 bab per mapel
        $moduls = ModulBelajar::with(['soals' => fn($q) => $q->orderBy('urutan')])
            ->where('kelas', $kelas)
            ->orderBy('mapel')
            ->orderBy('bab')
            ->get();

        // Group by mapel, ambil maks 3 bab
        $grouped = $moduls->groupBy('mapel')->map(function ($babList) {
            return $babList->take(3)->map(function ($modul) {
                return [
                    'modul_id' => $modul->id,
                    'bab'      => $modul->bab,
                    'judul'    => $modul->judul,
                    'soal'     => $modul->soals->map(fn($s) => [
                        'id'         => $s->id,
                        'judul'      => $s->judul,
                        'type'       => $s->type,
                        'narasi'     => $s->narasi,
                        'pertanyaan' => is_array($s->pertanyaan) && count($s->pertanyaan) === 1
                            ? $s->pertanyaan[0]
                            : $s->pertanyaan,
                        'ilustrasi'  => $s->ilustrasi,
                        'pilihan'    => $s->pilihan,
                        'jawaban'    => is_array($s->jawaban) && count($s->jawaban) === 1
                            ? $s->jawaban[0]
                            : $s->jawaban,
                    ])->values(),
                ];
            })->values();
        });

        // Bentuk array final: [ { mapel, bab: [...] } ]
        $result = $grouped->map(fn($babs, $mapelName) => [
            'mapel' => $mapelName,
            'bab'   => $babs,
        ])->values();

        return response()->json([
            'message' => 'Soal placement berhasil diambil.',
            'kelas'   => $kelas,
            'data'    => $result,
        ], 200);
    }

    /**
     * PUT /api/v1/placement/kelas
     *
     * Simpan pilihan kelas user.
     * Body: { "kelas": 10 }
     */
    public function setKelas(Request $request)
    {
        $request->validate([
            'kelas' => 'required|integer|in:7,8,9,10,11,12',
        ]);

        $user = $request->user();
        $user->update(['kelas' => $request->kelas]);

        return response()->json([
            'message' => 'Kelas berhasil disimpan.',
            'kelas'   => $user->kelas,
        ], 200);
    }

    /**
     * PUT /api/v1/placement/starting-bab
     *
     * Simpan starting_bab hasil kalkulasi placement test di frontend.
     * Body: { "starting_bab": 1|2|3 }
     *
     * Kalkulasi dilakukan di frontend:
     *   0–50%  benar → bab 1
     *   51–75% benar → bab 2
     *   76–100% benar → bab 3
     */
    public function setStartingBab(Request $request)
    {
        $request->validate([
            'starting_bab' => 'required|integer|in:1,2,3',
        ]);

        $user = $request->user();
        $user->update(['starting_bab' => $request->starting_bab]);

        return response()->json([
            'message'      => 'Starting bab berhasil disimpan.',
            'starting_bab' => $user->starting_bab,
        ], 200);
    }

    /**
     * GET /api/v1/placement/status
     *
     * Kembalikan apakah user sudah menyelesaikan placement (sudah punya kelas),
     * dan berapa starting_bab-nya.
     */
    public function status(Request $request)
    {
        $user = $request->user();

        return response()->json([
            'kelas'             => $user->kelas,
            'starting_bab'      => $user->starting_bab ?? 1,
            'placement_selesai' => $user->kelas !== null && $user->starting_bab !== null,
        ], 200);
    }
}