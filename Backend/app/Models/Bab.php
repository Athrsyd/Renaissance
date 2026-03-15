<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\ModulBelajar;
use App\Models\LayarMateri;

class Bab extends Model
{
    protected $fillable = [
        'id_modul','judul','urutan'
    ];

    public function Modul(){
        return $this->belongsTo(ModulBelajar::class, 'id_modul');
    }
    public function layarMateris()
    {
        return $this->hasMany(LayarMateri::class, 'id_bab');
    }
}
