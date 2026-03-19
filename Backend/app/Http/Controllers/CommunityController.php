<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Community;
use App\Models\CommunityMember;


class CommunityController extends Controller
{
    public function index(Request $request)
    {
        $userId = Auth::id();

        $communities = Community::whereHas('members', function ($query) use ($userId) {
            $query->where('user_id', $userId);
        })
        ->with('creator', 'members')
        ->get();

        return response()->json([
            'message' => 'List komunitas berhasil diambil',
            'data' => $communities
        ], 200);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'image_path' => 'nullable|string',
        ]);

        $userId = Auth::id();
        $community = Community::create([
            'name' => $validatedData['name'],
            'image_path' => $validatedData['image_path'] ?? null,
            'created_by' => $userId,
        ]);

        // Tambahkan pembuat komunitas sebagai anggota
        CommunityMember::create([
            'community_id' => $community->id,
            'user_id' => $userId,
            'joined_at' => now(),
        ]);

        return response()->json([
            'message' => 'Komunitas berhasil dibuat',
            'data' => $community
        ], 201);
    }

    public function search(Request $request)
    {
        $search = $request->query('name', '');
        $userId = Auth::id();

        $communities = Community::where('name', 'like', '%' . $search . '%')
        ->whereDoesntHave('members', function ($query) use ($userId) {
            $query->where('user_id', $userId);
        })
            ->with('creator')
            ->withCount('members')
            ->get();

        return response()->json([
            'message' => 'Hasil pencarian komunitas',
            'data' => $communities
        ], 200);
    }

    public function join(Request $request, Community $community)
    {
        $userId = Auth::id();

        // Cek apakah user sudah menjadi member
        $isMember = CommunityMember::where('community_id', $community->id)
            ->where('user_id', $userId)
            ->exists();

        if ($isMember) {
            return response()->json(['message' => 'Anda sudah menjadi member'], 400);
        }

        CommunityMember::create([
            'community_id' => $community->id,
            'user_id' => $userId,
            'joined_at' => now(),
        ]);

        return response()->json(['message' => 'Berhasil bergabung dengan komunitas'], 200);
    }

    // public function

    public function leave(Request $request, Community $community)
    {
        $userId = Auth::id();

        $membership = CommunityMember::where('community_id', $community->id)
            ->where('user_id', $userId)
            ->first();

        if (!$membership) {
            return response()->json(['message' => 'Anda bukan member komunitas ini'], 400);
        }

        $membership->delete();

        return response()->json(['message' => 'Berhasil keluar dari komunitas'], 200);
    }

}
