<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * ALTER TABLE modul_belajars:
 *   - Tambah kolom `kelas` (10/11/12) — untuk membedakan materi per jenjang
 *   - Pastikan kolom `bab` ada (sudah ada di migration sebelumnya, guard pakai hasColumn)
 *
 * Tidak menghapus data lama — aman dijalankan di database yang sudah berisi data.
 * Data lama (PKN & MTK lama) akan memiliki kelas = NULL sampai diisi manual atau di-seed ulang.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('modul_belajars', function (Blueprint $table) {
            // Guard: tambah bab hanya jika belum ada (migration lama mungkin sudah tambah)
            if (!Schema::hasColumn('modul_belajars', 'bab')) {
                $table->unsignedTinyInteger('bab')->default(1)->after('mapel');
            }

            // Kolom kelas — 10, 11, atau 12
            if (!Schema::hasColumn('modul_belajars', 'kelas')) {
                $table->unsignedTinyInteger('kelas')->nullable()->after('mapel')
                    ->comment('Jenjang kelas: 10, 11, atau 12');
            }
        });
    }

    public function down(): void
    {
        Schema::table('modul_belajars', function (Blueprint $table) {
            $table->dropColumn(['kelas']);
            // Tidak drop bab karena mungkin sudah ada dari migration lain
        });
    }
};
