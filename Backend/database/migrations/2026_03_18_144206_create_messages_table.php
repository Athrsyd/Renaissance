<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('sender_id')
                ->constrained('users')
                ->onDelete('cascade');
            // Sebelumnya: unsignedBigInteger('community_id')->nullable() — tidak ada foreign key
            // Sekarang: foreignId dengan constrained agar integritas data terjaga
            $table->foreignId('community_id')
                ->constrained('communities')
                ->onDelete('cascade');
            $table->text('chat');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
