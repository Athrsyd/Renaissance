<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

/**
 * XpController
 *
 * Mengelola sistem XP dan Level.
 *
 * Aturan XP per bab:
 *   - Maksimum 100 XP jika 0 kesalahan
 *   - Setiap kesalahan: -5 XP
 *   - Minimum 0 XP (tidak bisa minus)
 *   - Bonus soal: maks 25 XP tambahan dari performa soal
 *
 * Level: setiap 1000 XP akumulasi = naik 1 level
 */
class XpController extends Controller
{
    /**
     * POST /api/v1/xp/tambah
     *
     * Tambahkan XP ke user berdasarkan hasil penyelesaian 1 bab.
     *
     * Body:
     * {
     *   "jumlah_salah": 3,     // jumlah jawaban salah dalam bab ini
     *   "total_soal":   10,    // total soal dalam bab ini
     *   "modul_id":     5      // opsional, untuk log
     * }
     *
     * Response:
     * {
     *   "xp_didapat":    85,
     *   "xp_total":      285,
     *   "level_sekarang": 1,
     *   "level_naik":    false,
     *   "xp_to_next":    715
     * }
     */
    public function tambah(Request $request)
    {
        $request->validate([
            'jumlah_salah' => 'required|integer|min:0',
            'total_soal'   => 'sometimes|integer|min:1',
            'modul_id'     => 'sometimes|integer',
        ]);

        $user         = $request->user();
        $jumlahSalah  = (int) $request->jumlah_salah;

        // Hitung XP yang didapat: max 100, -5 per salah, min 0
        $xpDapat = max(0, 100 - ($jumlahSalah * 5));

        $levelSebelum = $user->level ?? 1;
        $xpBaru       = ($user->xp ?? 0) + $xpDapat;
        $levelBaru    = User::xpToLevel($xpBaru);
        $levelNaik    = $levelBaru > $levelSebelum;

        $user->update([
            'xp'    => $xpBaru,
            'level' => $levelBaru,
        ]);

        return response()->json([
            'xp_didapat'     => $xpDapat,
            'xp_total'       => $xpBaru,
            'level_sekarang' => $levelBaru,
            'level_naik'     => $levelNaik,
            'level_sebelum'  => $levelSebelum,
            'xp_to_next'     => User::xpToNextLevel($xpBaru),
        ], 200);
    }

    /**
     * GET /api/v1/xp
     *
     * Ambil info XP dan level user saat ini.
     */
    public function info(Request $request)
    {
        $user = $request->user();
        $xp   = $user->xp ?? 0;

        return response()->json([
            'xp'          => $xp,
            'level'       => $user->level ?? 1,
            'xp_to_next'  => User::xpToNextLevel($xp),
            'xp_in_level' => $xp - (($user->level - 1) * 1000),  // XP dalam level sekarang
            'xp_per_level'=> 1000,
        ], 200);
    }
}
