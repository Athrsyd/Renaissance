<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    protected $fillable = [
        'name',
        'email',
        'kelas',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password'          => 'hashed',
            'kelas'             => 'integer',
        ];
    }

    // ── Relasi ──────────────────────────────────────────────────────────────

    public function streak()
    {
        return $this->hasOne(UserStreak::class);
    }

    public function modulProgress()
    {
        return $this->hasMany(UserModulProgress::class);
    }

    public function leaderboardSnapshots()
    {
        return $this->hasMany(LeaderboardSnapshot::class);
    }
}
