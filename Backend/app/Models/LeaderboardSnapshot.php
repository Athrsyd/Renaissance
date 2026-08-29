<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LeaderboardSnapshot extends Model
{
    protected $table = 'leaderboard_snapshots';

    // updated_at dikelola DB (useCurrentOnUpdate), created_at tidak ada
    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'category',
        'kelas',
        'user_name',
        'score',
        'meta',
        'updated_at',
    ];

    protected $casts = [
        'kelas'      => 'integer',
        'score'      => 'integer',
        'meta'       => 'array',
        'updated_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
