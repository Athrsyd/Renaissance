<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class QuizTimeLog extends Model
{
    protected $fillable = [
        'user_id',
        'modul_id',
        'soal_id',
        'durasi_detik',
        'selesai_at',
    ];

    protected $casts = [
        'selesai_at'    => 'datetime',
        'durasi_detik'  => 'integer',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function modul()
    {
        return $this->belongsTo(ModulBelajar::class, 'modul_id');
    }
}
