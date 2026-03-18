<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserModulProgress extends Model
{
    protected $table = 'user_modul_progress';
    protected $fillable = [
        'user_id', 'modul_id', 'id_bab_terakhir', 'id_layar_terakhir', 'progress_persen', 'is_selesai', 'last_accessed_at', 'completed_at',
    ];
    protected $casts = [
        'progress_persen' => 'integer',
        'is_selesai' => 'boolean',
        'last_accessed_at' => 'datetime',
        'completed_at' => 'datetime',
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function modul()
    {
        return $this->belongsTo(ModulBelajar::class, 'modul_id');
    }
    public function babTerakhir()
    {
        return $this->belongsTo(Bab::class, 'id_bab_terakhir');
    }
    public function layarTerakhir()
    {
        return $this->belongsTo(LayarMateri::class, 'id_layar_terakhir');
    }
}
