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
        Schema::create('user_modul_progress', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
            ->constrained('users')
            ->onDelete('cascade');

            $table->foreignId('modul_id')
            ->constrained('modul_belajars')
            ->onDelete('cascade');

            $table->unsignedTinyInteger('progress_persen')->default(0);
            $table->boolean('is_selesai')->default(false);

            $table->timestamp('last_accessed')->nullable();
            $table->timestamp('completed_at')->nullable();

            $table->json('soal_selesai')->nullable();

            $table->unique(['user_id','modul_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_modul_progress');
    }
};
