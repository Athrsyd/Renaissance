<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * Perbarui tabel leaderboard_snapshots untuk mendukung kategori 'xp':
 *   1. Ubah enum category menjadi string agar bisa menampung 'xp' tanpa ALTER TABLE yang rumit.
 *   2. Tambah kolom meta (JSON nullable) untuk menyimpan data tambahan seperti level.
 *   3. Update index rank agar mencakup kategori baru.
 */
return new class extends Migration
{
    public function up(): void
    {
        // 1. Ubah enum → string (lebih fleksibel untuk kategori baru)
        DB::statement("ALTER TABLE leaderboard_snapshots MODIFY COLUMN category VARCHAR(20) NOT NULL");

        Schema::table('leaderboard_snapshots', function (Blueprint $table) {
            // 2. Kolom meta untuk data tambahan (misal: level user di XP leaderboard)
            $table->json('meta')->nullable()->after('score');
        });
    }

    public function down(): void
    {
        Schema::table('leaderboard_snapshots', function (Blueprint $table) {
            $table->dropColumn('meta');
        });

        DB::statement("ALTER TABLE leaderboard_snapshots MODIFY COLUMN category ENUM('streak','progress') NOT NULL");
    }
};
