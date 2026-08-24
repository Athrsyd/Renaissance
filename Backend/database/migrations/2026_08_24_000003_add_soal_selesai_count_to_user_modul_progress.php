<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tambah kolom soal_selesai_count ke user_modul_progress.
 *
 * Kolom ini menyimpan cacah (integer) soal yang sudah diselesaikan
 * pada modul bersangkutan. Disimpan terpisah dari kolom soal_selesai (JSON)
 * agar query progress kelas tidak perlu menghitung panjang array JSON
 * di setiap baris — cukup SUM(soal_selesai_count) tanpa parsing JSON.
 *
 * Nilai diperbarui setiap kali upsertProgress dipanggil.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('user_modul_progress', function (Blueprint $table) {
            if (!Schema::hasColumn('user_modul_progress', 'soal_selesai_count')) {
                $table->unsignedSmallInteger('soal_selesai_count')
                    ->default(0)
                    ->after('soal_selesai')
                    ->comment('Cacah soal yang sudah diselesaikan — mirror dari count(soal_selesai)');
            }
        });
    }

    public function down(): void
    {
        Schema::table('user_modul_progress', function (Blueprint $table) {
            $table->dropColumn('soal_selesai_count');
        });
    }
};
