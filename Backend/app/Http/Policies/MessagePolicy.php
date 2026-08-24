<?php

namespace App\Http\Policies;

use App\Models\Message;
use App\Models\User;

class MessagePolicy
{
    /**
     * Hanya pengirim pesan yang boleh menghapusnya.
     */
    public function delete(User $user, Message $message): bool
    {
        return $user->id === $message->sender_id;
    }
}
