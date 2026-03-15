<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    protected $fillable = [
        'id_layar_materi',
        'jenis_quiz',
        'pertanyaan',
        'urutan'
    ];

    public function LayarMateri()
    {
        return $this->belongsTo(LayarMateri::class, 'id_layar_materi');
    }
    public function OpsiJawaban()
    {
        return $this->hasMany(OpsiJawaban::class, 'id_quiz');
    }
    public function opsiJawabans()
    {
        return $this->hasMany(OpsiJawaban::class, 'id_quiz');
    }
}
