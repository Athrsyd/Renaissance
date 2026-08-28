<?php

namespace App\Http\Controllers;

use App\Models\QuizTimeLog;
use Illuminate\Http\Request;

/**
 * QuizTimeController
 *
 * Mengelola log waktu pengerjaan soal/quiz.
 *
 * Endpoint:
 *   POST /api/v1/quiz-time   — simpan durasi pengerjaan satu soal atau satu bab
 *   GET  /api/v1/quiz-time   — ambil ringkasan waktu belajar user
 */
class QuizTimeController extends Controller
{
    /**
     * POST /api/v1/quiz-time
     *
     * Body (array, bisa kirim batch sekaligus):
     * [
     *   {
     *     "modul_id":     5,
     *     "soal_id":      12,     // opsional
     *     "durasi_detik": 47
     *   },
     *   ...
     * ]
     *
     * Atau single object:
     * {
     *   "modul_id":     5,
     *   "durasi_detik": 47
     * }
     */
    public function store(Request $request)
    {
        $user = $request->user();

        // Support single atau batch
        $items = $request->input('logs') ?? [$request->all()];

        $request->merge(['_items' => $items]);
        $request->validate([
            '_items'                  => 'required|array|min:1',
            '_items.*.modul_id'       => 'required|integer|exists:modul_belajars,id',
            '_items.*.soal_id'        => 'sometimes|nullable|integer',
            '_items.*.durasi_detik'   => 'required|integer|min:0|max:86400',
        ]);

        $created = [];
        foreach ($items as $item) {
            $log = QuizTimeLog::create([
                'user_id'       => $user->id,
                'modul_id'      => $item['modul_id'],
                'soal_id'       => $item['soal_id'] ?? null,
                'durasi_detik'  => max(0, (int) $item['durasi_detik']),
                'selesai_at'    => now(),
            ]);
            $created[] = $log->id;
        }

        return response()->json([
            'message' => 'Waktu pengerjaan berhasil disimpan.',
            'count'   => count($created),
        ], 201);
    }

    /**
     * GET /api/v1/quiz-time
     *
     * Ringkasan waktu belajar user:
     * - Total detik hari ini
     * - Total detik minggu ini
     * - Total detik keseluruhan
     * - Per-modul (7 hari terakhir)
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $allLogs = QuizTimeLog::where('user_id', $user->id)->get();

        $today     = now()->startOfDay();
        $thisWeek  = now()->startOfWeek();

        $todayTotal    = $allLogs->where('selesai_at', '>=', $today)->sum('durasi_detik');
        $weekTotal     = $allLogs->where('selesai_at', '>=', $thisWeek)->sum('durasi_detik');
        $allTimeTotal  = $allLogs->sum('durasi_detik');

        // Per-hari untuk 7 hari terakhir (untuk grafik di Progress page)
        $weekly = [];
        for ($i = 6; $i >= 0; $i--) {
            $day   = now()->subDays($i)->startOfDay();
            $dayEnd = now()->subDays($i)->endOfDay();
            $label = now()->subDays($i)->locale('id')->isoFormat('ddd');
            $weekly[] = [
                'day'     => $label,
                'detik'   => $allLogs->whereBetween('selesai_at', [$day, $dayEnd])->sum('durasi_detik'),
            ];
        }

        return response()->json([
            'data' => [
                'today_detik'    => $todayTotal,
                'week_detik'     => $weekTotal,
                'all_time_detik' => $allTimeTotal,
                'weekly'         => $weekly,
            ],
        ]);
    }
}
