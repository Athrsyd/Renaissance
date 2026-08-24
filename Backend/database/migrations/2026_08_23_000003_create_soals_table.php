<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Tabel soal — menyimpan semua soal per modul/bab.
 *
 * Kolom JSON digunakan untuk `pilihan` dan `jawaban` karena:
 *   - quiz       : pilihan = ["A. ...", "B. ..."], jawaban = "A. ..."
 *   - drag&drop  : pilihan = ["x","y","z"],       jawaban = ["a","b","c"]
 *   - TTS        : pilihan = null,                jawaban = ["kata1","kata2"]
 *   - isian      : pilihan = null,                jawaban = "teks jawaban"
 *   - tarik benang: pilihan = ["x","y"],          jawaban = ["a","b"]
 *
 * `narasi` bisa berupa string biasa ATAU JSON object {teks, poin:[]}
 * disimpan sebagai TEXT, di-cast ke array di Model bila perlu.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('soals', function (Blueprint $table) {
            $table->id();

            // Relasi ke modul
            $table->foreignId('modul_id')
                ->constrained('modul_belajars')
                ->onDelete('cascade');

            // Urutan soal dalam satu modul (untuk sorting)
            $table->unsignedSmallInteger('urutan')->default(1);

            // Judul soal / nama tampilan
            $table->string('judul');

            // Tipe: quiz | drag and drop | TTS | isian | puzzle | tarik benang | materi | timeline
            $table->string('type');

            // Narasi/penjelasan — bisa string atau JSON {teks, poin:[]}
            $table->text('narasi')->nullable();

            // Pertanyaan — bisa string atau JSON array (untuk TTS yang punya banyak pertanyaan)
            $table->json('pertanyaan')->nullable();

            // URL gambar ilustrasi
            $table->string('ilustrasi')->nullable();

            // Pilihan jawaban — JSON array atau null
            $table->json('pilihan')->nullable();

            // Kunci jawaban — JSON (string atau array)
            $table->json('jawaban');

            $table->timestamps();

            // Index untuk query "semua soal dalam satu modul terurut"
            $table->index(['modul_id', 'urutan']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('soals');
    }
};
