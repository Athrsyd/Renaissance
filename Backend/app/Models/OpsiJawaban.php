<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OpsiJawaban extends Model
{
    protected $fillable = [
        'id_quiz',
        'teks_opsi',
        'jawaban_benar',
        'urutan'
    ];

    public function Quiz()
    {
        return $this->belongsTo(Quiz::class, 'id_quiz');
    }
}
