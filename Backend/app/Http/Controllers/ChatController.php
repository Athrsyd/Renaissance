<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\Community;
use App\Models\CommunityMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    // Ambil pesan per komunitas
    public function getMessages(Request $request, Community $community)
    {
        // Cek apakah user adalah member komunitas
        $isMember = CommunityMember::where('community_id', $community->id)
            ->where('user_id', Auth::id())
            ->exists();

        if (!$isMember) {
            return response()->json(['message' => 'Anda bukan member'], 403);
        }

        $messages = Message::where('community_id', $community->id)
            ->with('sender')
            ->orderBy('created_at', 'asc')
            ->get();

        return response()->json([
            'message' => 'Pesan komunitas',
            'data' => $messages,
        ]);
    }

    // Kirim pesan ke komunitas
    public function sendMessage(Request $request, Community $community)
    {
        // Cek member
        $isMember = CommunityMember::where('community_id', $community->id)
            ->where('user_id', Auth::id())
            ->exists();

        if (!$isMember) {
            return response()->json(['message' => 'Anda bukan member'], 403);
        }

        $validated = $request->validate([
            'chat' => 'required|string|max:5000',
        ]);

        $message = Message::create([
            'sender_id' => Auth::id(),
            'community_id' => $community->id,
            'chat' => $validated['chat'],
        ]);

        $message->load('sender');

        return response()->json([
            'message' => 'Pesan terkirim',
            'data' => $message,
        ], 201);
    }

    // Hapus pesan
    public function destroy(Message $message)
    {
        $isSender = $message->sender_id === Auth::id();

        if (!$isSender ) {
            return response()->json(['message' => 'Anda tidak bisa hapus pesan ini'], 403);
        }

        $message->delete();
        return response()->json(['message' => 'Pesan dihapus']);
    }
}
