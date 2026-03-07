<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ChatController extends Controller
{
    public function index(Request $request, $userId)
    {

        $message = Message::where(function ($q) use ($userId) {
            $q->where('sender_id', Auth::id())
                ->where('receiver_id', $userId);
        })
            ->orWhere(function ($q) use ($userId) {
                $q->where('sender_id', $userId)
                    ->where('receiver_id', Auth::id());
            })
            ->orderBy('created_at', 'asc')->get();

        return response()->json($message);
    }

    public function sendText(Request $request)
    {
        $validasi = Validator::make($request->all(), [
            'receiver_id' => 'required|exists:users,id',
            'chat' => 'required|string|max:5000',
        ]);

        if ($validasi->fails()) {
            return response()->json([
                'message' => 'Validasi gagal',
                'error' => $validasi->errors()
            ], 422);
        }

        $message = Message::create([
            'sender_id' => Auth::id(),
            'receiver_id' => $request->receiver_id,
            'chat' => $request->chat,
        ]);

        return response()->json([
            'message'=>'Pesan Terkirim',
            'data'=>$message
        ]);
    }

    public function destroy(Message $message)
    {
        if($message->sender_id !== Auth::id()){
            return response()->json([
                'message'=>'Unauthorized'
            ],403);
        }

        $message->delete();
        return response()->json([
            'message'=>'pesan terhapus'
        ]);
    }
}
