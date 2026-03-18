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

        $items = UserModulProgress::with(['modul.mapel', 'babTerakhir'])
            ->where('user_id', $user->id)
            ->orderBy('last_accessed', 'desc')
            ->get()

            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'modul_id' => $item->modul_id,
                    'date' => optional($item->last_accessed_at)->format('M d, Y'),
                    'materi' => $item->modul->judul ?? null,
                    'subject' => $item->modul->mapel->name ?? null,
                    'bab' => $item->babTerakhir->urutan ?? null,
                    'progress' => $item->progress_persen,
                    'is_selesai' => $item->is_selesai,
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
            'id_bab_terakhir' => 'nullable|exists:babs,id',
            'id_layar_terakhir' => 'nullable|exists:layar_materis,id',
            'progress_persen' => 'required|integer|min:0|max:100',
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
                'id_bab_terakhir' => $validated['id_bab_terakhir'] ?? null,
                'id_layar_terakhir' => $validated['id_layar_terakhir'] ?? null,
                'progress_persen' => (int) $validated['progress_persen'],
                'is_selesai' => $is_selesai,
                'last_accessed_at' => Carbon::now(),
                'completed_at' => $completed_at,
            ]
        );

        return response()->json([
            'status' => 'Progress modul berhasil diperbarui',
            'data' => $progress,
        ]);
    }
}
