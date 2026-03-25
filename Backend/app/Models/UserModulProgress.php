<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserModulProgress extends Model
{
    protected $table = 'user_modul_progress';
    
    protected $fillable = [
        'user_id', 
        'modul_id',
        'bab',
        'progress_persen', 
        'is_selesai', 
        'last_accessed', 
        'completed_at',
        'soal_selesai',
    ];
    
    protected $casts = [
        'bab' => 'integer',
        'progress_persen' => 'integer',
        'is_selesai' => 'boolean',
        'soal_selesai' => 'array',
        'last_accessed' => 'datetime',
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
}
