<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommunityRequest;
use App\Models\Community;
use App\Models\CommunityMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommunityController extends Controller
{
    /**
     * Daftar komunitas yang diikuti user yang sedang login.
     */
    public function index()
    {
        $communities = Community::whereHas('members', fn($q) => $q->where('user_id', Auth::id()))
            ->with('creator:id,name', 'members')
            ->get();

        return response()->json([
            'message' => 'List komunitas berhasil diambil.',
            'data'    => $communities,
        ], 200);
    }

    /**
     * Buat komunitas baru dan otomatis jadikan creator sebagai member.
     */
    public function store(StoreCommunityRequest $request)
    {
        $userId    = Auth::id();
        $community = Community::create([
            'name'       => $request->name,
            'image_path' => $request->image_path,
            'created_by' => $userId,
        ]);

        CommunityMember::create([
            'community_id' => $community->id,
            'user_id'      => $userId,
            'joined_at'    => now(),
        ]);

        return response()->json([
            'message' => 'Komunitas berhasil dibuat.',
            'data'    => $community,
        ], 201);
    }

    /**
     * Cari komunitas yang belum diikuti user.
     */
    public function search(Request $request)
    {
        $search = $request->query('name', '');
        $userId = Auth::id();

        $communities = Community::where('name', 'like', '%' . $search . '%')
            ->whereDoesntHave('members', fn($q) => $q->where('user_id', $userId))
            ->with('creator:id,name')
            ->withCount('members')
            ->get();

        return response()->json([
            'message' => 'Hasil pencarian komunitas.',
            'data'    => $communities,
        ], 200);
    }

    /**
     * Bergabung ke komunitas.
     * Unique constraint di DB sudah mencegah double join,
     * tapi kita tetap cek lebih dulu agar pesan error ramah.
     */
    public function join(Community $community)
    {
        $userId = Auth::id();

        $alreadyMember = CommunityMember::where('community_id', $community->id)
            ->where('user_id', $userId)
            ->exists();

        if ($alreadyMember) {
            return response()->json(['message' => 'Anda sudah menjadi member.'], 409);
        }

        CommunityMember::create([
            'community_id' => $community->id,
            'user_id'      => $userId,
            'joined_at'    => now(),
        ]);

        return response()->json(['message' => 'Berhasil bergabung dengan komunitas.'], 200);
    }

    /**
     * Keluar dari komunitas.
     */
    public function leave(Community $community)
    {
        $deleted = CommunityMember::where('community_id', $community->id)
            ->where('user_id', Auth::id())
            ->delete();

        if (!$deleted) {
            return response()->json(['message' => 'Anda bukan member komunitas ini.'], 404);
        }

        return response()->json(['message' => 'Berhasil keluar dari komunitas.'], 200);
    }

    /**
     * Hapus komunitas (hanya oleh creator).
     */
    public function destroy(Community $community)
    {
        if ($community->created_by !== Auth::id()) {
            return response()->json(['message' => 'Anda tidak berhak menghapus komunitas ini.'], 403);
        }

        $community->delete();

        return response()->json(['message' => 'Komunitas berhasil dihapus.'], 200);
    }
}
