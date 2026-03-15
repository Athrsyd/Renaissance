<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Bab;
use App\Models\Quiz;
use App\Models\OpsiJawaban;

class LayarMateri extends Model
{
    protected $fillable = [
        'id_bab',
        'tipe_layar',
        'judul',
        'deskripsi_teks',
        'urutan',
        'perlu_audio',
        'path_audio'
    ];

    public function Bab()
    {
        return $this->belongsTo(Bab::class, 'id_bab');
    }
    public function quizzes()
    {
        return $this->hasMany(Quiz::class, 'id_layar_materi');
    }
}
