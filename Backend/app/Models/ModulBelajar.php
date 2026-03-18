<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Mapel;
use App\Models\Bab;

class ModulBelajar extends Model
{
    protected $fillable = [
        'id_mapel',
        'judul',
    ];

    public function mapel()
    {
        return $this->belongsTo(Mapel::class, 'id_mapel');
    }

    public function babs()
    {
        return $this->hasMany(Bab::class, 'id_modul');
    }

    public function userProgress()
    {
        return $this->hasMany(UserModulProgress::class, 'modul_id');
    }
}
