<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Soal extends Model
{
    protected $table = 'soals';

    protected $fillable = [
        'modul_id',
        'urutan',
        'judul',
        'type',
        'narasi',
        'pertanyaan',
        'ilustrasi',
        'pilihan',
        'jawaban',
    ];

    protected $casts = [
        // pertanyaan bisa string atau array — JSON menangani keduanya
        'pertanyaan' => 'array',
        'pilihan'    => 'array',
        'jawaban'    => 'array',
    ];

    // ── Relasi ──────────────────────────────────────────────────────────────

    public function modul()
    {
        return $this->belongsTo(ModulBelajar::class, 'modul_id');
    }
}
