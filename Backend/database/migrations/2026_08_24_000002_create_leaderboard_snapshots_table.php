<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabel leaderboard_snapshots
 *
 * Menyimpan snapshot leaderboard yang diperbarui setiap kali user
 * menyelesaikan sesi belajar (dipanggil dari upsertProgress).
 *
 * Dua kategori leaderboard:
 *   - 'streak'   : peringkat berdasarkan current_streak, lintas kelas (global)
 *   - 'progress' : peringkat berdasarkan % soal selesai, per kelas
 *
 * `kelas` diisi NULL untuk kategori streak (global).
 * `score`  untuk streak   = current_streak (jumlah hari)
 * `score`  untuk progress = persen soal selesai di kelas user (0-100)
 *
 * Satu user punya tepat 2 baris (1 streak + 1 progress per kelas).
 * Baris diperbarui (updateOrCreate) bukan ditambah setiap sesi.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('leaderboard_snapshots', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
                ->constrained('users')
                ->onDelete('cascade');

            // 'streak' atau 'progress'
            $table->enum('category', ['streak', 'progress']);

            // NULL untuk streak (global), 10/11/12 untuk progress
            $table->unsignedTinyInteger('kelas')->nullable();

            // Nama user — di-denormalize agar query leaderboard tidak perlu JOIN
            $table->string('user_name');

            // Skor: jumlah hari streak, atau persentase progress (0-100)
            $table->unsignedSmallInteger('score')->default(0);

            // Timestamp snapshot terakhir diperbarui
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();

            // Unique: satu user punya satu baris per kategori+kelas
            $table->unique(['user_id', 'category', 'kelas'], 'uq_leaderboard_user_cat_kelas');

            // Index untuk query leaderboard cepat
            $table->index(['category', 'kelas', 'score'], 'idx_leaderboard_rank');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('leaderboard_snapshots');
    }
};
