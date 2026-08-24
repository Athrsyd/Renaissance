<?php

namespace App\Http\Controllers;

use App\Models\Teman;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TemanController extends Controller
{
    /**
     * Daftar teman user yang sedang login.
     */
    public function index()
    {
        $teman = Teman::where('user_id', Auth::id())
            ->with('teman:id,name,email')
            ->get();

        return response()->json($teman, 200);
    }

    /**
     * Tambah teman baru.
     */
    public function store(Request $request)
    {
        $request->validate([
            'teman_id' => 'required|exists:users,id',
        ]);

        // Cegah user menambah diri sendiri sebagai teman
        if ((int) $request->teman_id === Auth::id()) {
            return response()->json(['message' => 'Tidak dapat menambah diri sendiri.'], 422);
        }

        // Cegah duplikasi pertemanan
        $exists = Teman::where('user_id', Auth::id())
            ->where('teman_id', $request->teman_id)
            ->exists();

        if ($exists) {
            return response()->json(['message' => 'Sudah menjadi teman.'], 409);
        }

        $teman = Teman::create([
            'user_id'  => Auth::id(),
            'teman_id' => $request->teman_id,
        ]);

        return response()->json([
            'message' => 'Teman berhasil ditambahkan.',
            'data'    => $teman,
        ], 201);
    }

    /**
     * Hapus pertemanan — hanya pemilik relasi yang boleh menghapus.
     * Sebelumnya: tidak ada pengecekan kepemilikan (IDOR).
     */
    public function destroy(Teman $teman)
    {
        if ($teman->user_id !== Auth::id()) {
            return response()->json(['message' => 'Anda tidak berhak menghapus data ini.'], 403);
        }

        $teman->delete();

        return response()->json(['message' => 'Teman dihapus.'], 200);
    }
}
