<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('modul_belajars', function (Blueprint $table) {
            $table->id();
            $table->string('mapel');        // untuk identify (Matematika, Pancasila, dll)
            $table->string('judul');        // judul modul
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('modul_belajars');
    }
};
