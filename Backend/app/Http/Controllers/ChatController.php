<?php

namespace App\Http\Controllers;

use App\Http\Requests\SendMessageRequest;
use App\Models\Community;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

/**
 * Pengecekan membership dipindah ke middleware EnsureCommunityMember
 * yang terdaftar di bootstrap/app.php dan dipakai di routes/api.php.
 * ChatController tidak lagi perlu mengulang logika yang sama di setiap method.
 */
class ChatController extends Controller
{
    /**
     * Ambil semua pesan di sebuah komunitas (dengan pagination).
     * Sebelumnya: Message::get() — semua pesan dimuat sekaligus.
     * Sekarang: paginate(50) — muat 50 pesan terakhir per halaman.
     */
    public function getMessages(Request $request, Community $community)
    {
        $messages = Message::where('community_id', $community->id)
            ->with('sender:id,name')
            ->orderBy('created_at', 'asc')
            ->paginate(50);

        return response()->json([
            'message' => 'Pesan komunitas.',
            'data'    => $messages->items(),
            'meta'    => [
                'current_page' => $messages->currentPage(),
                'last_page'    => $messages->lastPage(),
                'total'        => $messages->total(),
            ],
        ], 200);
    }

    /**
     * Kirim pesan ke komunitas.
     */
    public function sendMessage(SendMessageRequest $request, Community $community)
    {
        $message = Message::create([
            'sender_id'    => Auth::id(),
            'community_id' => $community->id,
            'chat'         => $request->chat,
        ]);

        $message->load('sender:id,name');

        return response()->json([
            'message' => 'Pesan terkirim.',
            'data'    => $message,
        ], 201);
    }

    /**
     * Hapus pesan — hanya pengirim yang boleh.
     * Otorisasi via policy MessagePolicy::delete().
     */
    public function destroy(Message $message)
    {
        if ($message->sender_id !== Auth::id()) {
            return response()->json(['message' => 'Anda tidak dapat menghapus pesan ini.'], 403);
        }

        $message->delete();

        return response()->json(['message' => 'Pesan dihapus.'], 200);
    }
}
