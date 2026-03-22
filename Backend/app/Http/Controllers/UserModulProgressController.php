<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserModulProgress;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Carbon;

class UserModulProgressController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        $items = UserModulProgress::with('modul')
            ->where('user_id', $user->id)
            ->orderBy('last_accessed', 'desc')
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'modul_id' => $item->modul_id,
                    'date' => optional($item->last_accessed)->format('M d, Y'),
                    'materi' => $item->modul->judul ?? null,
                    'mapel' => $item->modul->mapel ?? null, 
                    'progress' => $item->progress_persen,
                    'is_selesai' => $item->is_selesai,
                    'soal_selesai' => $item->soal_selesai ?? [],
                ];
            })->values();

            return response()->json([
                'status' => 'Data Progress Modul Pengguna',
                'data' => $items,
            ]);
    }
    public function upsertProgress(Request $request, $modul_id)
    {
        $validated = $request->validate([
            'progress_persen' => 'required|integer|min:0|max:100',
            'soal_selesai' => 'sometimes|array',  
            'soal_selesai.*' => 'integer',        
            'is_selesai' => 'sometimes|boolean',
        ]);

        $user= $request->user();

        $is_selesai = (bool) ($validated['is_selesai'] ?? false);
        if((int) $validated['progress_persen'] === 100){
            $is_selesai = true;
        }

        $existing = UserModulProgress::where('user_id', $user->id)
            ->where('modul_id', $modul_id)
            ->first();

        $completed_at = null;
        if($is_selesai){
            $completed_at = $existing?->completed_at ?? Carbon::now();
        }

        $progress = UserModulProgress::updateOrCreate(
            [
                'user_id' => $user->id,
                'modul_id' => $modul_id,
            ],
            [
                'soal_selesai' => $validated['soal_selesai'] ?? [],
                'progress_persen' => (int) $validated['progress_persen'],
                'is_selesai' => $is_selesai,
                'last_accessed' => Carbon::now(),
                'completed_at' => $completed_at,
            ]
        );

        return response()->json([
            'status' => 'Progress modul berhasil diperbarui',
            'data' => $progress,
        ]);
    }
}
