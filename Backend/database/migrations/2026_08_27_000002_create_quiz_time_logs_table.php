<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * quiz_time_logs
 *
 * Menyimpan waktu pengerjaan soal/quiz per sesi bab.
 *
 * Kolom:
 *   user_id      – FK ke users
 *   modul_id     – FK ke modul_belajars
 *   soal_id      – ID soal yang dikerjakan (nullable, null = keseluruhan bab)
 *   durasi_detik – berapa detik user mengerjakan soal ini
 *   selesai_at   – timestamp saat soal selesai dikerjakan
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('quiz_time_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('modul_id')->constrained('modul_belajars')->onDelete('cascade');
            $table->unsignedBigInteger('soal_id')->nullable(); // soal ID dari frontend data (bukan FK)
            $table->unsignedInteger('durasi_detik')->default(0);
            $table->timestamp('selesai_at')->useCurrent();
            $table->timestamps();

            $table->index(['user_id', 'modul_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('quiz_time_logs');
    }
};
