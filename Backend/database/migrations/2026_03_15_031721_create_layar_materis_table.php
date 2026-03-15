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
        Schema::create('layar_materis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_bab')->constrained('babs')->onDelete('cascade');
            $table->enum('tipe_layar',['materi', 'quiz','interaktif'])->default('materi');
            $table->string('judul');
            $table->text('deskripsi_teks')->nullable();
            $table->integer('urutan');
            $table->boolean('perlu_audio')->default(false);
            $table->string('path_audio')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('layar_materis');
    }
};
