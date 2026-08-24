<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserStreak extends Model
{
    protected $table = 'user_streaks';

    protected $fillable = [
        'user_id',
        'current_streak',
        'longest_streak',
        'last_activity_date',
        'streak_started_at',
    ];

    protected $casts = [
        'current_streak'    => 'integer',
        'longest_streak'    => 'integer',
        'last_activity_date' => 'date',
        'streak_started_at'  => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
