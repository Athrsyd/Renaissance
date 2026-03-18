<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Community extends Model
{
    protected $fillable = [
        'name',
        'image_path',
        'created_by',
    ];

    public function members()
    {
        return $this->hasMany(CommunityMember::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}
