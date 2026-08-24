<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ModulBelajar extends Model
{
    protected $fillable = [
        'mapel',
        'kelas',
        'bab',
        'judul',
    ];

    protected $casts = [
        'kelas' => 'integer',
        'bab'   => 'integer',
    ];

    // ── Relasi ──────────────────────────────────────────────────────────────

    public function soals()
    {
        return $this->hasMany(Soal::class, 'modul_id')->orderBy('urutan');
    }

    public function userProgress()
    {
        return $this->hasMany(UserModulProgress::class, 'modul_id');
    }
}
