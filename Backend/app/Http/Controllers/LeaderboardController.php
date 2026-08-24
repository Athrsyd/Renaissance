<?php

namespace App\Http\Controllers;

use App\Services\LeaderboardService;
use Illuminate\Http\Request;

class LeaderboardController extends Controller
{
    public function __construct(private LeaderboardService $leaderboardService) {}

    /**
     * GET /api/v1/leaderboard/streak
     *
     * Top 10 streak global (lintas kelas) + posisi user sendiri.
     *
     * Response:
     * {
     *   "data": {
     *     "top10": [
     *       { "rank": 1, "user_id": 5, "name": "Naresha", "score": 42, "is_me": false },
     *       ...
     *     ],
     *     "my_rank": { "rank": 14, "name": "Aku", "score": 19, "is_me": true }
     *   }
     * }
     */
    public function streak(Request $request)
    {
        $data = $this->leaderboardService->getStreakLeaderboard($request->user()->id);

        return response()->json([
            'message' => 'Leaderboard streak berhasil diambil.',
            'data'    => $data,
        ]);
    }

    /**
     * GET /api/v1/leaderboard/progress
     *
     * Top 10 progress per kelas user yang sedang login.
     * Kelas diambil dari profil user — tidak perlu query parameter.
     *
     * Response:
     * {
     *   "data": {
     *     "kelas": 10,
     *     "top10": [ ... ],
     *     "my_rank": { ... }
     *   }
     * }
     */
    public function progress(Request $request)
    {
        $user  = $request->user();
        $kelas = $user->kelas;

        if (!$kelas) {
            return response()->json([
                'message' => 'Kelas user belum diatur.',
                'data'    => null,
            ], 422);
        }

        $data = $this->leaderboardService->getProgressLeaderboard($user->id, $kelas);

        return response()->json([
            'message' => 'Leaderboard progress berhasil diambil.',
            'data'    => array_merge(['kelas' => $kelas], $data),
        ]);
    }

    /**
     * GET /api/v1/progress/kelas
     *
     * Kembalikan persentase progress user di kelasnya sendiri.
     * Digunakan untuk indikator progress di sidebar kiri bawah dashboard.
     *
     * Response:
     * {
     *   "data": {
     *     "kelas": 10,
     *     "progress_persen": 65
     *   }
     * }
     */
    public function classProgress(Request $request)
    {
        $user  = $request->user();
        $kelas = $user->kelas;

        if (!$kelas) {
            return response()->json([
                'message' => 'Kelas user belum diatur.',
                'data'    => ['kelas' => null, 'progress_persen' => 0],
            ], 422);
        }

        $persen = $this->leaderboardService->calculateClassProgress($user->id, $kelas);

        return response()->json([
            'message' => 'Progress kelas berhasil diambil.',
            'data'    => [
                'kelas'          => $kelas,
                'progress_persen' => $persen,
            ],
        ]);
    }
}
