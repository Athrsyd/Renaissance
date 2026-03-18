<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable =[
        'sender_id',
        'community_id',
        'chat',
    ];

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }

    public function community()
    {
        return $this->belongsTo(Community::class, 'community_id');
    }
}   
