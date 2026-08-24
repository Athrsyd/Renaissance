<?php

namespace App\Http\Controllers;

use App\Services\StreakService;
use Illuminate\Http\Request;

class StreakController extends Controller
{
    public function __construct(private StreakService $streakService) {}

    /**
     * GET /api/v1/streak
     *
     * Kembalikan data streak user yang sedang login beserta
     * indikator mingguan (Sen–Min) untuk ditampilkan di dashboard.
     *
     * Response:
     * {
     *   "data": {
     *     "current_streak": 19,
     *     "longest_streak": 19,
     *     "last_activity_date": "2026-08-23",
     *     "weekly": [
     *       { "day": "Sen", "active": true },
     *       { "day": "Sel", "active": true },
     *       ...
     *     ]
     *   }
     * }
     */
    public function show(Request $request)
    {
        $streak = $this->streakService->get($request->user()->id);

        return response()->json([
            'message' => 'Data streak berhasil diambil.',
            'data'    => [
                'current_streak'    => $streak->current_streak,
                'longest_streak'    => $streak->longest_streak,
                'last_activity_date' => $streak->last_activity_date?->toDateString(),
                'streak_started_at'  => $streak->streak_started_at?->toDateString(),
                'weekly'            => $this->streakService->weeklyIndicator($streak),
            ],
        ]);
    }
}
