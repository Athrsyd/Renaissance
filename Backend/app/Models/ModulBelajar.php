<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Mapel;
use App\Models\Bab;

class ModulBelajar extends Model
{
    protected $fillable = [
        'mapel',
        'judul',
    ];



    public function userProgress()
    {
        return $this->hasMany(UserModulProgress::class, 'modul_id');
    }
}
