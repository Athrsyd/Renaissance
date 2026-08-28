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
        'starting_bab',
        'xp',
        'level',
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
            'starting_bab'      => 'integer',
            'xp'                => 'integer',
            'level'             => 'integer',
        ];
    }

    // ── XP helpers ───────────────────────────────────────────────────────────

    /** Hitung level dari total XP. Tiap 1000 XP = 1 level. */
    public static function xpToLevel(int $xp): int
    {
        return (int) floor($xp / 1000) + 1;
    }

    /** XP tersisa menuju level berikutnya. */
    public static function xpToNextLevel(int $xp): int
    {
        return (self::xpToLevel($xp) * 1000) - $xp;
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