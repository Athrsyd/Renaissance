<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Mapel;

class ModulBelajar extends Model
{
    protected $fillable = [
        'id_mapel',
        'judul',
    ];

    public function mapel()
    {
        return $this->belongsTo(Mapel::class);
    }
}
