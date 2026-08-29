<?php

namespace App\Http\Controllers;

use App\Models\ModulBelajar;
use App\Models\UserModulProgress;
use App\Services\LeaderboardService;
use App\Services\StreakService;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class UserModulProgressController extends Controller
{
    public function __construct(
        private StreakService      $streakService,
        private LeaderboardService $leaderboardService,
    ) {}

    /**
     * GET /api/v1/progress
     * Kembalikan semua progress modul user beserta data streak dan progress kelas.
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $items = UserModulProgress::with('modul')
            ->where('user_id', $user->id)
            ->orderBy('last_accessed', 'desc')
            ->get()
            ->map(fn($item) => [
                'id'               => $item->id,
                'modul_id'         => $item->modul_id,
                'bab'              => $item->bab,
                'date'             => optional($item->last_accessed)->format('M d, Y'),
                'materi'           => $item->modul->judul ?? null,
                'mapel'            => $item->modul->mapel ?? null,
                'kelas'            => $item->modul->kelas ?? null,
                'progress'         => $item->progress_persen,
                'is_selesai'       => $item->is_selesai,
                'soal_selesai'     => $item->soal_selesai ?? [],
                'soal_selesai_count' => $item->soal_selesai_count,
            ])->values();

        // Sertakan streak dan progress kelas langsung di response index
        $streak = $this->streakService->get($user->id);
        $classProgress = $user->kelas
            ? $this->leaderboardService->calculateClassProgress($user->id, $user->kelas)
            : 0;

        return response()->json([
            'status' => 'Data Progress Modul Pengguna',
            'data'   => $items,
            'streak' => [
                'current_streak' => $streak->current_streak,
                'longest_streak' => $streak->longest_streak,
                'weekly'         => $this->streakService->weeklyIndicator($streak),
            ],
            'class_progress' => [
                'kelas'          => $user->kelas,
                'progress_persen' => $classProgress,
            ],
        ]);
    }

    /**
     * PUT /api/v1/progress/{modul_id}
     *
     * Perbarui progress satu modul.
     * Setelah update, secara otomatis:
     *   1. Catat streak hari ini (jika ada soal yang diselesaikan)
     *   2. Perbarui leaderboard snapshot
     */
    public function upsertProgress(Request $request, $modul_id)
    {
        $validated = $request->validate([
            'bab'              => 'sometimes|integer',
            'progress_persen'  => 'required|integer|min:0|max:100',
            'soal_selesai'     => 'sometimes|array',
            'soal_selesai.*'   => 'integer',
            'is_selesai'       => 'sometimes|boolean',
        ]);

        $user = $request->user();

        $is_selesai = (bool) ($validated['is_selesai'] ?? false);
        if ((int) $validated['progress_persen'] === 100) {
            $is_selesai = true;
        }

        $existing = UserModulProgress::where('user_id', $user->id)
            ->where('modul_id', $modul_id)
            ->first();

        $completed_at = null;
        if ($is_selesai) {
            $completed_at = $existing?->completed_at ?? Carbon::now();
        }

        $modul = ModulBelajar::find($modul_id);
        $bab   = $validated['bab'] ?? $modul?->bab ?? 1;

        $soalSelesai      = $validated['soal_selesai'] ?? [];
        $soalSelesaiCount = count($soalSelesai);

        $progress = UserModulProgress::updateOrCreate(
            ['user_id' => $user->id, 'modul_id' => $modul_id],
            [
                'soal_selesai'       => $soalSelesai,
                'soal_selesai_count' => $soalSelesaiCount,
                'progress_persen'    => (int) $validated['progress_persen'],
                'is_selesai'         => $is_selesai,
                'last_accessed'      => Carbon::now(),
                'completed_at'       => $completed_at,
                'bab'                => $bab,
            ]
        );

        // ── Streak: catat aktivitas hari ini jika ada soal selesai ──────────
        if ($soalSelesaiCount > 0) {
            $this->streakService->record($user->id);
        }

        // ── Leaderboard: perbarui snapshot setelah setiap sesi ──────────────
        $this->leaderboardService->updateSnapshot($user->id, $user->name, $user->kelas);

        return response()->json([
            'status' => 'Progress modul berhasil diperbarui',
            'data'   => $progress,
        ]);
    }
}
