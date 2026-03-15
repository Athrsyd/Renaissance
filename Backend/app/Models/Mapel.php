<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\ModulBelajar;

class Mapel extends Model
{
        protected $fillable =[
        'name'
    ];

        public function modules()
    {
        return $this->hasMany(ModulBelajar::class);
    }
}

