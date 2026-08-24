<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabel user_streaks
 *
 * Menyimpan data streak harian per user.
 *
 * Logika streak (ditangani di StreakService):
 *   - Streak bertambah jika user menyelesaikan ≥1 soal dalam sehari
 *   - Toleransi 1 hari skip: streak tidak putus jika last_activity_date = hari ini - 2
 *   - Jika skip > 1 hari, current_streak direset ke 1 (hari ini dihitung)
 *   - longest_streak diperbarui setiap kali current_streak melewati rekor lama
 *   - last_activity_date: tanggal terakhir user menyelesaikan ≥1 soal (DATE only, bukan datetime)
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_streaks', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
                ->unique()
                ->constrained('users')
                ->onDelete('cascade');

            // Streak yang sedang berjalan
            $table->unsignedSmallInteger('current_streak')->default(0);

            // Rekor streak terpanjang — disimpan permanen di DB
            $table->unsignedSmallInteger('longest_streak')->default(0);

            // Tanggal (DATE) terakhir user menyelesaikan ≥1 soal
            $table->date('last_activity_date')->nullable();

            // Tanggal saat streak saat ini mulai (untuk audit)
            $table->date('streak_started_at')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_streaks');
    }
};
