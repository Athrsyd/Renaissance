<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ModulBelajar;
use App\Models\Soal;
use Database\Seeders\SoalDataKelas10;
use Database\Seeders\SoalDataKelas11;
use Database\Seeders\SoalDataKelas12;

/**
 * SoalSeeder
 *
 * Menanam semua soal untuk 18 kombinasi (6 mapel × 3 kelas).
 * Setiap panggilan $this->seedMapel() akan:
 *   1. Membuat/memperbarui baris di modul_belajars (per bab)
 *   2. Menghapus soal lama di bab itu (idempotent — aman dijalankan ulang)
 *   3. Menyisipkan soal baru
 *
 * Jalankan dengan: php artisan db:seed --class=SoalSeeder
 */
class SoalSeeder extends Seeder
{
    public function run(): void
    {
        $dataKelas = [
            10 => SoalDataKelas10::class,
            11 => SoalDataKelas11::class,
            12 => SoalDataKelas12::class,
        ];

        $mapel = [
            'Matematika' => 'mtk',
            'IPA' => 'ipa',
            'IPS' => 'ips',
            'Sejarah' => 'sejarah',
            'Bahasa dan Sastra' => 'bahasa',
            'Pendidikan Pancasila' => 'pkn',
        ];

        foreach ($dataKelas as $kelas => $dataClass) {
            foreach ($mapel as $namaMapel => $method) {
                $this->seedMapel($namaMapel, $kelas, $dataClass::$method());
            }
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Helper: buat modul + soal-soalnya
    // $data format: [ ['bab'=>1,'judul'=>'...','soal'=>[...]], ... ]
    // ─────────────────────────────────────────────────────────────────────────
    private function seedMapel(string $mapel, int $kelas, array $data): void
    {
        foreach ($data as $babData) {
            $modul = ModulBelajar::updateOrCreate(
                ['mapel' => $mapel, 'kelas' => $kelas, 'bab' => $babData['bab']],
                ['judul' => $babData['judul']]
            );

            // Hapus soal lama agar idempotent
            Soal::where('modul_id', $modul->id)->delete();

            foreach ($babData['soal'] as $urutan => $s) {
                Soal::create([
                    'modul_id'   => $modul->id,
                    'urutan'     => $urutan + 1,
                    'judul'      => $s['judul'],
                    'type'       => $s['type'],
                    'narasi'     => $s['narasi'] ?? null,
                    'pertanyaan' => is_array($s['pertanyaan']) ? $s['pertanyaan'] : [$s['pertanyaan']],
                    'ilustrasi'  => $s['ilustrasi'] ?? null,
                    'pilihan'    => $s['pilihan'] ?? null,
                    'jawaban'    => is_array($s['jawaban']) ? $s['jawaban'] : [$s['jawaban']],
                ]);
            }
        }
    }

    // =========================================================================
    // DATA — KELAS 10
    // =========================================================================

    private function mtkKelas10(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Eksponen dan Logaritma', 'soal' => [
                ['judul' => 'Mengenal Bilangan Eksponen', 'type' => 'quiz', 'narasi' => 'Eksponen adalah operasi matematika yang menyatakan perkalian berulang suatu bilangan. Bentuk aⁿ berarti bilangan a dikalikan sebanyak n kali.', 'pertanyaan' => 'Berapa hasil dari 3⁴?', 'ilustrasi' => null, 'pilihan' => ['A. 12', 'B. 64', 'C. 81', 'D. 27'], 'jawaban' => 'C. 81'],
                ['judul' => 'Sifat-Sifat Eksponen', 'type' => 'drag and drop', 'narasi' => 'Eksponen memiliki sifat penting: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐˣⁿ.', 'pertanyaan' => 'Pasangkan operasi eksponen dengan hasilnya', 'ilustrasi' => null, 'pilihan' => ['2³ × 2²', '3⁵ ÷ 3²', '(2²)³'], 'jawaban' => ['2⁵ = 32', '3³ = 27', '2⁶ = 64']],
                ['judul' => 'Dasar Logaritma', 'type' => 'quiz', 'narasi' => 'Logaritma adalah kebalikan dari eksponen. Jika aⁿ = b, maka ⁰log b = n.', 'pertanyaan' => 'Jika 2ˣ = 32, maka nilai x adalah...', 'ilustrasi' => null, 'pilihan' => ['A. 4', 'B. 5', 'C. 6', 'D. 16'], 'jawaban' => 'B. 5'],
                ['judul' => 'Istilah Logaritma', 'type' => 'TTS', 'narasi' => 'Logaritma digunakan dalam berbagai bidang ilmu.', 'pertanyaan' => ['Kebalikan dari operasi eksponen', 'Logaritma berbasis e disebut logaritma...', 'Basis logaritma umum adalah angka...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Logaritma', 'Natural', 'Sepuluh']],
            ]],
            ['bab' => 2, 'judul' => 'Fungsi Kuadrat', 'soal' => [
                ['judul' => 'Bentuk Umum Fungsi Kuadrat', 'type' => 'quiz', 'narasi' => 'Fungsi kuadrat adalah fungsi dengan bentuk umum f(x) = ax² + bx + c, di mana a ≠ 0. Grafiknya berbentuk parabola.', 'pertanyaan' => 'Manakah yang merupakan bentuk fungsi kuadrat?', 'ilustrasi' => null, 'pilihan' => ['A. f(x) = 3x + 2', 'B. f(x) = 2x² - 5x + 1', 'C. f(x) = x³ + 1', 'D. f(x) = 1/x'], 'jawaban' => 'B. f(x) = 2x² - 5x + 1'],
                ['judul' => 'Titik Puncak Parabola', 'type' => 'quiz', 'narasi' => 'Titik puncak (vertex) parabola berada di koordinat (-b/2a, f(-b/2a)).', 'pertanyaan' => 'Untuk fungsi f(x) = x² - 4x + 3, nilai x pada titik puncak adalah...', 'ilustrasi' => null, 'pilihan' => ['A. x = -2', 'B. x = 2', 'C. x = 4', 'D. x = 3'], 'jawaban' => 'B. x = 2'],
                ['judul' => 'Diskriminan', 'type' => 'drag and drop', 'narasi' => 'Diskriminan D = b² - 4ac menentukan jumlah akar persamaan kuadrat.', 'pertanyaan' => 'Pasangkan nilai diskriminan dengan kondisi akarnya', 'ilustrasi' => null, 'pilihan' => ['D > 0', 'D = 0', 'D < 0'], 'jawaban' => ['Dua akar real berbeda', 'Dua akar real sama', 'Tidak ada akar real']],
            ]],
            ['bab' => 3, 'judul' => 'Trigonometri Dasar', 'soal' => [
                ['judul' => 'Sisi Segitiga Siku-Siku', 'type' => 'drag and drop', 'narasi' => 'Dalam segitiga siku-siku: sin θ = depan/miring, cos θ = samping/miring, tan θ = depan/samping.', 'pertanyaan' => 'Pasangkan fungsi trigonometri dengan definisinya', 'ilustrasi' => null, 'pilihan' => ['sin θ', 'cos θ', 'tan θ'], 'jawaban' => ['depan/miring', 'samping/miring', 'depan/samping']],
                ['judul' => 'Nilai Trigonometri Sudut Istimewa', 'type' => 'quiz', 'narasi' => 'Sudut istimewa (0°, 30°, 45°, 60°, 90°) memiliki nilai trigonometri yang perlu dihafal.', 'pertanyaan' => 'Berapakah nilai sin 30°?', 'ilustrasi' => null, 'pilihan' => ['A. 1', 'B. ½', 'C. ½√2', 'D. ½√3'], 'jawaban' => 'B. ½'],
                ['judul' => 'Identitas Trigonometri', 'type' => 'TTS', 'narasi' => 'Identitas dasar: sin²θ + cos²θ = 1. Berlaku untuk semua nilai sudut θ.', 'pertanyaan' => ['Identitas dasar: sin²θ + cos²θ = ...', 'Perbandingan sin/cos disebut fungsi ...', 'Kebalikan dari sin disebut ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Satu', 'Tangen', 'Kosekan']],
            ]],
            ['bab' => 4, 'judul' => 'Statistika Dasar', 'soal' => [
                ['judul' => 'Mean, Median, Modus', 'type' => 'drag and drop', 'narasi' => 'Ukuran pemusatan: mean (rata-rata), median (nilai tengah), modus (nilai paling sering muncul).', 'pertanyaan' => 'Pasangkan ukuran pemusatan dengan definisinya', 'ilustrasi' => null, 'pilihan' => ['Mean', 'Median', 'Modus'], 'jawaban' => ['Rata-rata hitung', 'Nilai tengah data', 'Nilai paling sering muncul']],
                ['judul' => 'Menghitung Mean', 'type' => 'quiz', 'narasi' => 'Mean dihitung dengan menjumlahkan semua data lalu dibagi banyaknya data. Rumus: x̄ = Σx / n.', 'pertanyaan' => 'Data nilai ulangan: 70, 80, 90, 60, 100. Berapakah mean-nya?', 'ilustrasi' => null, 'pilihan' => ['A. 75', 'B. 80', 'C. 85', 'D. 90'], 'jawaban' => 'B. 80'],
                ['judul' => 'Jangkauan dan Simpangan', 'type' => 'quiz', 'narasi' => 'Jangkauan (range) adalah selisih data terbesar dan terkecil.', 'pertanyaan' => 'Data: 5, 8, 3, 12, 7. Berapakah jangkauan datanya?', 'ilustrasi' => null, 'pilihan' => ['A. 7', 'B. 8', 'C. 9', 'D. 10'], 'jawaban' => 'C. 9'],
            ]],
            ['bab' => 5, 'judul' => 'Peluang', 'soal' => [
                ['judul' => 'Konsep Dasar Peluang', 'type' => 'quiz', 'narasi' => 'Peluang suatu kejadian adalah perbandingan banyaknya kejadian yang diharapkan dengan total seluruh kemungkinan. Nilai peluang antara 0 dan 1.', 'pertanyaan' => 'Sebuah dadu dilempar sekali. Peluang munculnya angka genap adalah...', 'ilustrasi' => null, 'pilihan' => ['A. 1/6', 'B. 1/3', 'C. 1/2', 'D. 2/3'], 'jawaban' => 'C. 1/2'],
                ['judul' => 'Frekuensi Relatif', 'type' => 'quiz', 'narasi' => 'Frekuensi relatif adalah perbandingan frekuensi suatu kejadian terhadap total percobaan.', 'pertanyaan' => 'Dalam 100 pelemparan koin, muncul gambar 48 kali. Frekuensi relatifnya adalah...', 'ilustrasi' => null, 'pilihan' => ['A. 0,48', 'B. 0,50', 'C. 0,52', 'D. 48'], 'jawaban' => 'A. 0,48'],
                ['judul' => 'Istilah Peluang', 'type' => 'TTS', 'narasi' => 'Memahami istilah-istilah peluang sangat penting.', 'pertanyaan' => ['Himpunan semua hasil yang mungkin disebut ruang ...', 'Nilai peluang kejadian pasti terjadi adalah ...', 'Peluang kejadian tidak mungkin bernilai ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Sampel', 'Satu', 'Nol']],
            ]],
        ];
    }

    private function ipaKelas10(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Hakikat Ilmu Sains', 'soal' => [
                ['judul' => 'Metode Ilmiah', 'type' => 'drag and drop', 'narasi' => 'Metode ilmiah adalah cara sistematis untuk menemukan jawaban atas pertanyaan tentang alam.', 'pertanyaan' => 'Urutkan langkah metode ilmiah dengan benar', 'ilustrasi' => null, 'pilihan' => ['Hipotesis', 'Observasi', 'Eksperimen', 'Kesimpulan'], 'jawaban' => ['Observasi', 'Hipotesis', 'Eksperimen', 'Kesimpulan']],
                ['judul' => 'Besaran dan Satuan', 'type' => 'quiz', 'narasi' => 'Besaran pokok adalah besaran dasar yang tidak bergantung pada besaran lain, seperti panjang (meter), massa (kilogram), dan waktu (detik).', 'pertanyaan' => 'Manakah yang BUKAN besaran pokok dalam SI?', 'ilustrasi' => null, 'pilihan' => ['A. Panjang', 'B. Kecepatan', 'C. Waktu', 'D. Massa'], 'jawaban' => 'B. Kecepatan'],
                ['judul' => 'Alat Ukur Sains', 'type' => 'drag and drop', 'narasi' => 'Setiap besaran memiliki alat ukur yang tepat untuk menghasilkan data akurat.', 'pertanyaan' => 'Pasangkan besaran dengan alat ukurnya', 'ilustrasi' => null, 'pilihan' => ['Panjang', 'Massa', 'Suhu', 'Waktu'], 'jawaban' => ['Penggaris', 'Neraca', 'Termometer', 'Stopwatch']],
            ]],
            ['bab' => 2, 'judul' => 'Zat dan Perubahannya', 'soal' => [
                ['judul' => 'Wujud Zat', 'type' => 'drag and drop', 'narasi' => 'Zat dapat berwujud padat, cair, atau gas. Setiap wujud memiliki susunan partikel dan sifat yang berbeda.', 'pertanyaan' => 'Pasangkan wujud zat dengan sifatnya', 'ilustrasi' => null, 'pilihan' => ['Padat', 'Cair', 'Gas'], 'jawaban' => ['Bentuk & volume tetap', 'Bentuk berubah, volume tetap', 'Bentuk & volume berubah']],
                ['judul' => 'Perubahan Fisika dan Kimia', 'type' => 'quiz', 'narasi' => 'Perubahan fisika tidak menghasilkan zat baru. Perubahan kimia menghasilkan zat baru dengan sifat berbeda.', 'pertanyaan' => 'Manakah contoh perubahan KIMIA?', 'ilustrasi' => null, 'pilihan' => ['A. Gula larut dalam air', 'B. Es mencair', 'C. Besi berkarat', 'D. Lilin meleleh'], 'jawaban' => 'C. Besi berkarat'],
                ['judul' => 'Campuran dan Pemisahan', 'type' => 'TTS', 'narasi' => 'Campuran dapat dipisahkan berdasarkan sifat fisik komponen-komponennya.', 'pertanyaan' => ['Metode pemisahan berdasarkan perbedaan titik didih', 'Pemisahan campuran dengan menyaring', 'Campuran yang terlihat seragam disebut campuran ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Destilasi', 'Filtrasi', 'Homogen']],
            ]],
            ['bab' => 3, 'judul' => 'Energi dalam Kehidupan', 'soal' => [
                ['judul' => 'Bentuk-Bentuk Energi', 'type' => 'drag and drop', 'narasi' => 'Energi hadir dalam berbagai bentuk dan dapat berubah dari satu bentuk ke bentuk lain.', 'pertanyaan' => 'Pasangkan contoh dengan bentuk energinya', 'ilustrasi' => null, 'pilihan' => ['Batu di ketinggian', 'Air panas', 'Pegas tertekan', 'Lampu menyala'], 'jawaban' => ['Energi potensial', 'Energi panas', 'Energi elastis', 'Energi cahaya']],
                ['judul' => 'Hukum Kekekalan Energi', 'type' => 'quiz', 'narasi' => 'Energi tidak dapat diciptakan atau dimusnahkan, hanya dapat diubah bentuknya.', 'pertanyaan' => 'Pada panel surya, terjadi perubahan energi dari...', 'ilustrasi' => null, 'pilihan' => ['A. Kimia → Listrik', 'B. Cahaya → Listrik', 'C. Panas → Gerak', 'D. Listrik → Cahaya'], 'jawaban' => 'B. Cahaya → Listrik'],
                ['judul' => 'Sumber Energi', 'type' => 'quiz', 'narasi' => 'Sumber energi terbagi menjadi terbarukan dan tak terbarukan.', 'pertanyaan' => 'Manakah sumber energi TERBARUKAN?', 'ilustrasi' => null, 'pilihan' => ['A. Minyak bumi', 'B. Batu bara', 'C. Gas alam', 'D. Energi angin'], 'jawaban' => 'D. Energi angin'],
            ]],
            ['bab' => 4, 'judul' => 'Bumi dan Alam Semesta', 'soal' => [
                ['judul' => 'Lapisan Bumi', 'type' => 'drag and drop', 'narasi' => 'Bumi tersusun dari beberapa lapisan: kerak, mantel, inti luar cair, dan inti dalam padat.', 'pertanyaan' => 'Urutkan lapisan bumi dari luar ke dalam', 'ilustrasi' => null, 'pilihan' => ['Mantel', 'Inti luar', 'Kerak', 'Inti dalam'], 'jawaban' => ['Kerak', 'Mantel', 'Inti luar', 'Inti dalam']],
                ['judul' => 'Tata Surya', 'type' => 'quiz', 'narasi' => 'Tata Surya terdiri dari Matahari sebagai pusatnya dan delapan planet yang bergerak dalam orbit elips.', 'pertanyaan' => 'Planet manakah yang paling dekat dengan Matahari?', 'ilustrasi' => null, 'pilihan' => ['A. Venus', 'B. Bumi', 'C. Merkurius', 'D. Mars'], 'jawaban' => 'C. Merkurius'],
                ['judul' => 'Istilah Alam Semesta', 'type' => 'TTS', 'narasi' => 'Alam semesta sangat luas dan masih terus dieksplorasi para ilmuwan.', 'pertanyaan' => ['Benda langit yang mengelilingi planet disebut ...', 'Galaksi tempat Bumi berada bernama ...', 'Bintang yang menjadi pusat tata surya kita'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Satelit', 'Bimasakti', 'Matahari']],
            ]],
            ['bab' => 5, 'judul' => 'Makhluk Hidup dan Lingkungan', 'soal' => [
                ['judul' => 'Ciri-Ciri Makhluk Hidup', 'type' => 'drag and drop', 'narasi' => 'Makhluk hidup memiliki ciri: bernapas, tumbuh, berkembang biak, memerlukan nutrisi, bergerak, dan merespons rangsangan.', 'pertanyaan' => 'Pasangkan ciri makhluk hidup dengan contohnya', 'ilustrasi' => null, 'pilihan' => ['Bernapas', 'Tumbuh', 'Berkembang biak'], 'jawaban' => ['Menghirup O₂, mengeluarkan CO₂', 'Bertambah besar dan tinggi', 'Menghasilkan keturunan']],
                ['judul' => 'Ekosistem', 'type' => 'quiz', 'narasi' => 'Ekosistem adalah kesatuan antara makhluk hidup (biotik) dan lingkungannya (abiotik) yang saling berinteraksi.', 'pertanyaan' => 'Manakah yang merupakan komponen ABIOTIK dalam ekosistem?', 'ilustrasi' => null, 'pilihan' => ['A. Pohon', 'B. Serangga', 'C. Air', 'D. Jamur'], 'jawaban' => 'C. Air'],
                ['judul' => 'Rantai dan Jaring Makanan', 'type' => 'quiz', 'narasi' => 'Rantai makanan menggambarkan aliran energi dari produsen ke konsumen.', 'pertanyaan' => 'Dalam rantai: rumput → belalang → katak → ular. Siapakah produsen?', 'ilustrasi' => null, 'pilihan' => ['A. Belalang', 'B. Katak', 'C. Rumput', 'D. Ular'], 'jawaban' => 'C. Rumput'],
            ]],
        ];
    }

    private function ipsKelas10(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Manusia dan Ruang Kebumian', 'soal' => [
                ['judul' => 'Konsep Geografi', 'type' => 'drag and drop', 'narasi' => 'Geografi mempelajari hubungan manusia dengan lingkungannya melalui sepuluh konsep dasar.', 'pertanyaan' => 'Pasangkan konsep geografi dengan contohnya', 'ilustrasi' => null, 'pilihan' => ['Lokasi', 'Jarak', 'Morfologi'], 'jawaban' => ['Letak suatu tempat di bumi', 'Jauh-dekat antar tempat', 'Bentuk relief permukaan bumi']],
                ['judul' => 'Peta dan Komponennya', 'type' => 'quiz', 'narasi' => 'Peta adalah gambaran permukaan bumi pada bidang datar dengan skala tertentu.', 'pertanyaan' => 'Komponen peta yang menjelaskan arti simbol-simbol disebut...', 'ilustrasi' => null, 'pilihan' => ['A. Skala', 'B. Legenda', 'C. Judul', 'D. Grid'], 'jawaban' => 'B. Legenda'],
                ['judul' => 'Istilah Keruangan', 'type' => 'TTS', 'narasi' => 'Pemahaman konsep keruangan sangat penting dalam geografi.', 'pertanyaan' => ['Gambaran bumi pada bidang datar disebut ...', 'Perbandingan jarak di peta dengan jarak sebenarnya', 'Garis khayal pemisah utara-selatan bumi'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Peta', 'Skala', 'Khatulistiwa']],
            ]],
            ['bab' => 2, 'judul' => 'Keragaman Budaya Indonesia', 'soal' => [
                ['judul' => 'Faktor Keberagaman Budaya', 'type' => 'drag and drop', 'narasi' => 'Indonesia memiliki keberagaman budaya yang sangat kaya akibat berbagai faktor geografis, historis, dan eksternal.', 'pertanyaan' => 'Pasangkan faktor dengan pengaruhnya terhadap keberagaman budaya', 'ilustrasi' => null, 'pilihan' => ['Kepulauan', 'Letak strategis', 'Kondisi alam berbeda'], 'jawaban' => ['Isolasi menghasilkan budaya unik', 'Masuknya pengaruh asing', 'Adaptasi menghasilkan tradisi berbeda']],
                ['judul' => 'Bhinneka Tunggal Ika', 'type' => 'quiz', 'narasi' => 'Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu.', 'pertanyaan' => 'Semboyan Bhinneka Tunggal Ika diambil dari kitab...', 'ilustrasi' => null, 'pilihan' => ['A. Negarakertagama', 'B. Sutasoma', 'C. Ramayana', 'D. Mahabarata'], 'jawaban' => 'B. Sutasoma'],
                ['judul' => 'Suku dan Bahasa Daerah', 'type' => 'quiz', 'narasi' => 'Indonesia memiliki lebih dari 1.300 suku bangsa dan 700 bahasa daerah.', 'pertanyaan' => 'Provinsi dengan jumlah bahasa daerah terbanyak di Indonesia adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Jawa Barat', 'B. Papua', 'C. Sulawesi Selatan', 'D. Kalimantan'], 'jawaban' => 'B. Papua'],
            ]],
            ['bab' => 3, 'judul' => 'Sejarah Awal Masyarakat Indonesia', 'soal' => [
                ['judul' => 'Masa Praaksara', 'type' => 'drag and drop', 'narasi' => 'Masa praaksara adalah masa sebelum manusia mengenal tulisan.', 'pertanyaan' => 'Pasangkan zaman praaksara dengan ciri-cirinya', 'ilustrasi' => null, 'pilihan' => ['Paleolitikum', 'Mesolitikum', 'Neolitikum'], 'jawaban' => ['Alat batu kasar, nomaden', 'Kjokkenmoddinger, semi-nomaden', 'Alat batu halus, pertanian awal']],
                ['judul' => 'Manusia Purba di Indonesia', 'type' => 'quiz', 'narasi' => 'Indonesia kaya akan fosil manusia purba yang ditemukan di berbagai lokasi.', 'pertanyaan' => 'Manusia purba yang fosilnya ditemukan di Trinil, Jawa Timur adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Homo sapiens', 'B. Pithecanthropus erectus', 'C. Meganthropus', 'D. Homo floresiensis'], 'jawaban' => 'B. Pithecanthropus erectus'],
                ['judul' => 'Peninggalan Praaksara', 'type' => 'TTS', 'narasi' => 'Peninggalan masa praaksara memberikan petunjuk tentang kehidupan manusia purba.', 'pertanyaan' => ['Lukisan di dinding gua peninggalan manusia purba disebut ...', 'Tumpukan sampah dapur masa praaksara disebut ...', 'Alat dari batu yang sudah diasah halus disebut alat ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Seni cadas', 'Kjokkenmoddinger', 'Neolitik']],
            ]],
            ['bab' => 4, 'judul' => 'Kehidupan Sosial Masyarakat', 'soal' => [
                ['judul' => 'Struktur Sosial', 'type' => 'drag and drop', 'narasi' => 'Struktur sosial adalah tatanan sosial dalam masyarakat yang terdiri dari status, peran, dan kelompok sosial.', 'pertanyaan' => 'Pasangkan konsep dengan definisinya', 'ilustrasi' => null, 'pilihan' => ['Status sosial', 'Peran sosial', 'Kelompok sosial'], 'jawaban' => ['Kedudukan seseorang dalam masyarakat', 'Perilaku yang diharapkan dari status tertentu', 'Kumpulan individu yang berinteraksi']],
                ['judul' => 'Lembaga Sosial', 'type' => 'quiz', 'narasi' => 'Lembaga sosial adalah sistem norma untuk mengatur kegiatan masyarakat dalam memenuhi kebutuhan.', 'pertanyaan' => 'Lembaga sosial pertama dan utama dalam membentuk kepribadian individu adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Sekolah', 'B. Keluarga', 'C. Agama', 'D. Pemerintah'], 'jawaban' => 'B. Keluarga'],
                ['judul' => 'Mobilitas Sosial', 'type' => 'quiz', 'narasi' => 'Mobilitas sosial adalah perpindahan posisi seseorang dari satu lapisan sosial ke lapisan lain.', 'pertanyaan' => 'Seorang petani yang menjadi pengusaha sukses merupakan contoh mobilitas sosial...', 'ilustrasi' => null, 'pilihan' => ['A. Horizontal', 'B. Vertikal ke bawah', 'C. Vertikal ke atas', 'D. Lateral'], 'jawaban' => 'C. Vertikal ke atas'],
            ]],
            ['bab' => 5, 'judul' => 'Ekonomi Dasar', 'soal' => [
                ['judul' => 'Kebutuhan dan Kelangkaan', 'type' => 'drag and drop', 'narasi' => 'Kebutuhan manusia tidak terbatas sementara alat pemuas kebutuhan terbatas — inilah yang disebut kelangkaan.', 'pertanyaan' => 'Klasifikasikan kebutuhan berdasarkan tingkat kepentingannya', 'ilustrasi' => null, 'pilihan' => ['Makan dan minum', 'Pakaian dan rumah', 'Hiburan dan rekreasi'], 'jawaban' => ['Kebutuhan primer', 'Kebutuhan sekunder', 'Kebutuhan tersier']],
                ['judul' => 'Sistem Ekonomi', 'type' => 'quiz', 'narasi' => 'Sistem ekonomi adalah cara suatu negara mengatur kegiatan ekonominya.', 'pertanyaan' => 'Sistem ekonomi yang dianut Indonesia berdasarkan Pancasila dan UUD 1945 adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Sistem ekonomi pasar', 'B. Sistem ekonomi komando', 'C. Sistem ekonomi campuran', 'D. Sistem ekonomi tradisional'], 'jawaban' => 'C. Sistem ekonomi campuran'],
                ['judul' => 'Istilah Ekonomi Dasar', 'type' => 'TTS', 'narasi' => 'Memahami istilah ekonomi dasar membantu memahami fenomena ekonomi sehari-hari.', 'pertanyaan' => ['Kondisi kebutuhan lebih besar dari alat pemuas disebut ...', 'Kegiatan menggunakan barang atau jasa disebut ...', 'Kegiatan menghasilkan barang atau jasa disebut ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Kelangkaan', 'Konsumsi', 'Produksi']],
            ]],
        ];
    }

    private function sejarahKelas10(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Pengertian dan Ruang Lingkup Sejarah', 'soal' => [
                ['judul' => 'Hakikat Sejarah', 'type' => 'quiz', 'narasi' => 'Sejarah berasal dari kata Arab syajaratun yang berarti pohon — menggambarkan perkembangan dari akar ke cabang.', 'pertanyaan' => 'Kata sejarah berasal dari bahasa Arab yang berarti...', 'ilustrasi' => null, 'pilihan' => ['A. Batu', 'B. Pohon', 'C. Sungai', 'D. Tanah'], 'jawaban' => 'B. Pohon'],
                ['judul' => 'Konsep Waktu dalam Sejarah', 'type' => 'drag and drop', 'narasi' => 'Sejarah memiliki empat konsep waktu: perkembangan, kesinambungan, pengulangan, dan perubahan.', 'pertanyaan' => 'Pasangkan konsep waktu dengan contohnya', 'ilustrasi' => null, 'pilihan' => ['Perkembangan', 'Kesinambungan', 'Perubahan'], 'jawaban' => ['Teknologi dari batu ke digital', 'Tradisi turun-temurun', 'Reformasi mengubah sistem pemerintahan']],
                ['judul' => 'Sumber Sejarah', 'type' => 'drag and drop', 'narasi' => 'Sumber sejarah dibagi menjadi sumber primer (langsung dari pelaku) dan sumber sekunder.', 'pertanyaan' => 'Klasifikasikan sumber sejarah berikut', 'ilustrasi' => null, 'pilihan' => ['Buku harian pelaku', 'Prasasti', 'Buku teks sejarah'], 'jawaban' => ['Sumber primer', 'Sumber primer', 'Sumber sekunder']],
            ]],
            ['bab' => 2, 'judul' => 'Peradaban Awal Dunia', 'soal' => [
                ['judul' => 'Peradaban Mesopotamia', 'type' => 'quiz', 'narasi' => 'Mesopotamia (tanah di antara dua sungai) adalah salah satu pusat peradaban tertua di dunia.', 'pertanyaan' => 'Peradaban Mesopotamia berkembang di lembah sungai...', 'ilustrasi' => null, 'pilihan' => ['A. Nil dan Kongo', 'B. Tigris dan Efrat', 'C. Gangga dan Indus', 'D. Huang He dan Yangtze'], 'jawaban' => 'B. Tigris dan Efrat'],
                ['judul' => 'Peradaban Sungai Nil', 'type' => 'quiz', 'narasi' => 'Peradaban Mesir Kuno berkembang di sepanjang Sungai Nil yang banjir tahunannya menyuburkan tanah.', 'pertanyaan' => 'Bangunan monumental peninggalan Mesir Kuno yang masih berdiri adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Koloseum', 'B. Piramida Giza', 'C. Tembok Besar', 'D. Colosseum Roma'], 'jawaban' => 'B. Piramida Giza'],
                ['judul' => 'Peradaban Kuno', 'type' => 'TTS', 'narasi' => 'Peradaban-peradaban awal dunia memberikan warisan besar bagi manusia modern.', 'pertanyaan' => ['Tulisan kuno bangsa Mesir yang menggunakan gambar disebut ...', 'Hukum tertulis pertama di dunia diciptakan oleh raja ...', 'Bangunan piramida di Mesir berfungsi sebagai ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Hieroglif', 'Hammurabi', 'Makam']],
            ]],
            ['bab' => 3, 'judul' => 'Kerajaan Hindu-Buddha di Indonesia', 'soal' => [
                ['judul' => 'Masuknya Hindu-Buddha ke Indonesia', 'type' => 'drag and drop', 'narasi' => 'Agama Hindu dan Buddha masuk ke Indonesia melalui jalur perdagangan dengan beberapa teori penjelasan.', 'pertanyaan' => 'Pasangkan teori masuknya Hindu-Buddha dengan pencetusnya', 'ilustrasi' => null, 'pilihan' => ['Teori Waisya', 'Teori Brahmana', 'Teori Ksatria'], 'jawaban' => ['N.J. Krom', 'J.C. van Leur', 'R.C. Majumdar']],
                ['judul' => 'Kerajaan Sriwijaya', 'type' => 'quiz', 'narasi' => 'Sriwijaya adalah kerajaan maritim Buddha berpusat di Sumatera, mencapai puncak kejayaan abad ke-7 hingga ke-9 M.', 'pertanyaan' => 'Kerajaan Sriwijaya terkenal sebagai kerajaan...', 'ilustrasi' => null, 'pilihan' => ['A. Agraris Hindu', 'B. Maritim Buddha', 'C. Agraris Buddha', 'D. Maritim Hindu'], 'jawaban' => 'B. Maritim Buddha'],
                ['judul' => 'Kerajaan Majapahit', 'type' => 'quiz', 'narasi' => 'Majapahit adalah kerajaan Hindu-Buddha terbesar di Nusantara berpusat di Jawa Timur.', 'pertanyaan' => 'Patih Majapahit yang terkenal dengan Sumpah Palapa-nya adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Hayam Wuruk', 'B. Ken Arok', 'C. Gajah Mada', 'D. Raden Wijaya'], 'jawaban' => 'C. Gajah Mada'],
            ]],
            ['bab' => 4, 'judul' => 'Kerajaan Islam di Indonesia', 'soal' => [
                ['judul' => 'Masuknya Islam ke Indonesia', 'type' => 'quiz', 'narasi' => 'Islam masuk ke Indonesia melalui jalur perdagangan para pedagang Arab, Persia, dan India.', 'pertanyaan' => 'Islam masuk ke Indonesia pertama kali melalui...', 'ilustrasi' => null, 'pilihan' => ['A. Peperangan', 'B. Jalur perdagangan', 'C. Kolonialisme', 'D. Migrasi'], 'jawaban' => 'B. Jalur perdagangan'],
                ['judul' => 'Wali Songo', 'type' => 'drag and drop', 'narasi' => 'Wali Songo menyebarkan Islam di Jawa menggunakan pendekatan budaya lokal.', 'pertanyaan' => 'Pasangkan Wali Songo dengan karyanya', 'ilustrasi' => null, 'pilihan' => ['Sunan Kalijaga', 'Sunan Giri', 'Sunan Bonang'], 'jawaban' => ['Wayang dan tembang', 'Gending dan tembang dolanan', 'Gamelan dan tembang tombo ati']],
                ['judul' => 'Kerajaan Islam Nusantara', 'type' => 'TTS', 'narasi' => 'Kerajaan-kerajaan Islam di Nusantara memainkan peran penting dalam penyebaran Islam.', 'pertanyaan' => ['Kerajaan Islam pertama di Nusantara berlokasi di ...', 'Kerajaan Islam terbesar di Jawa pada abad ke-15 adalah ...', 'Pusat perdagangan Islam yang ramai di Selat Malaka'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Samudra Pasai', 'Demak', 'Malaka']],
            ]],
            ['bab' => 5, 'judul' => 'Kolonialisme dan Imperialisme', 'soal' => [
                ['judul' => 'Latar Belakang Penjelajahan Samudra', 'type' => 'drag and drop', 'narasi' => 'Bangsa Eropa melakukan penjelajahan samudra karena motivasi Gold, Glory, dan Gospel.', 'pertanyaan' => 'Pasangkan motivasi 3G dengan maknanya', 'ilustrasi' => null, 'pilihan' => ['Gold', 'Glory', 'Gospel'], 'jawaban' => ['Mencari kekayaan/rempah', 'Mencari kejayaan/nama besar', 'Menyebarkan agama Kristen']],
                ['judul' => 'VOC di Indonesia', 'type' => 'quiz', 'narasi' => 'VOC (Vereenigde Oostindische Compagnie) adalah kongsi dagang Belanda yang berkuasa di Nusantara hampir dua abad.', 'pertanyaan' => 'VOC didirikan pada tahun...', 'ilustrasi' => null, 'pilihan' => ['A. 1511', 'B. 1602', 'C. 1619', 'D. 1799'], 'jawaban' => 'B. 1602'],
                ['judul' => 'Perlawanan terhadap Kolonial', 'type' => 'quiz', 'narasi' => 'Berbagai daerah melakukan perlawanan terhadap penjajahan Belanda yang menjadi cikal bakal nasionalisme.', 'pertanyaan' => 'Perang Diponegoro (1825-1830) dipimpin oleh...', 'ilustrasi' => null, 'pilihan' => ['A. Sultan Agung', 'B. Pangeran Diponegoro', 'C. Imam Bonjol', 'D. Teuku Umar'], 'jawaban' => 'B. Pangeran Diponegoro'],
            ]],
        ];
    }

    private function bahasaKelas10(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Teks Laporan Hasil Observasi', 'soal' => [
                ['judul' => 'Pengertian Teks LHO', 'type' => 'quiz', 'narasi' => 'Teks LHO berisi informasi tentang sesuatu berdasarkan hasil pengamatan langsung. Bersifat objektif, faktual, dan tidak memihak.', 'pertanyaan' => 'Ciri utama teks laporan hasil observasi adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Bersifat subjektif dan opini', 'B. Berisi pendapat penulis', 'C. Objektif berdasarkan fakta', 'D. Bersifat imajinasi'], 'jawaban' => 'C. Objektif berdasarkan fakta'],
                ['judul' => 'Struktur Teks LHO', 'type' => 'drag and drop', 'narasi' => 'Teks LHO memiliki struktur: pernyataan umum, deskripsi bagian, dan deskripsi manfaat.', 'pertanyaan' => 'Urutkan struktur teks LHO yang benar', 'ilustrasi' => null, 'pilihan' => ['Deskripsi manfaat', 'Pernyataan umum', 'Deskripsi bagian'], 'jawaban' => ['Pernyataan umum', 'Deskripsi bagian', 'Deskripsi manfaat']],
                ['judul' => 'Ciri Kebahasaan Teks LHO', 'type' => 'TTS', 'narasi' => 'Teks LHO menggunakan bahasa khusus untuk menyampaikan hasil pengamatan secara akurat.', 'pertanyaan' => ['Kata yang digunakan untuk mengklasifikasikan disebut kata ...', 'Penggunaan kata ilmiah dan teknis disebut ...', 'Kalimat yang menyatakan fakta disebut kalimat ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Hubungan', 'Istilah', 'Fakta']],
            ]],
            ['bab' => 2, 'judul' => 'Teks Eksposisi', 'soal' => [
                ['judul' => 'Pengertian Teks Eksposisi', 'type' => 'quiz', 'narasi' => 'Teks eksposisi bertujuan menyampaikan pendapat atau argumen penulis disertai fakta-fakta pendukung.', 'pertanyaan' => 'Tujuan utama teks eksposisi adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Menghibur pembaca', 'B. Meyakinkan dengan argumen', 'C. Menceritakan kisah nyata', 'D. Memberi instruksi'], 'jawaban' => 'B. Meyakinkan dengan argumen'],
                ['judul' => 'Struktur Teks Eksposisi', 'type' => 'drag and drop', 'narasi' => 'Teks eksposisi tersusun atas tesis, argumentasi, dan penegasan ulang.', 'pertanyaan' => 'Urutkan struktur teks eksposisi', 'ilustrasi' => null, 'pilihan' => ['Argumentasi', 'Penegasan ulang', 'Tesis'], 'jawaban' => ['Tesis', 'Argumentasi', 'Penegasan ulang']],
                ['judul' => 'Jenis Pola Pengembangan', 'type' => 'quiz', 'narasi' => 'Teks eksposisi dapat dikembangkan dengan pola definisi, ilustrasi, perbandingan, sebab-akibat, dan proses.', 'pertanyaan' => 'Pola eksposisi yang menjelaskan hubungan sebab dan akibat disebut pola...', 'ilustrasi' => null, 'pilihan' => ['A. Ilustrasi', 'B. Definisi', 'C. Kausalitas', 'D. Perbandingan'], 'jawaban' => 'C. Kausalitas'],
            ]],
            ['bab' => 3, 'judul' => 'Teks Anekdot', 'soal' => [
                ['judul' => 'Mengenal Teks Anekdot', 'type' => 'quiz', 'narasi' => 'Teks anekdot adalah cerita singkat yang mengandung humor dengan tujuan mengkritik keadaan sosial secara tidak langsung.', 'pertanyaan' => 'Fungsi utama teks anekdot adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Menghibur saja', 'B. Mengkritik melalui humor', 'C. Memberi informasi ilmiah', 'D. Menjelaskan prosedur'], 'jawaban' => 'B. Mengkritik melalui humor'],
                ['judul' => 'Struktur Teks Anekdot', 'type' => 'drag and drop', 'narasi' => 'Teks anekdot memiliki struktur: abstrak, orientasi, krisis, reaksi, dan koda.', 'pertanyaan' => 'Pasangkan bagian struktur anekdot dengan fungsinya', 'ilustrasi' => null, 'pilihan' => ['Abstrak', 'Krisis', 'Koda'], 'jawaban' => ['Gambaran umum cerita', 'Masalah/konflik yang muncul', 'Penutup berisi pesan moral']],
                ['judul' => 'Unsur Humor dalam Anekdot', 'type' => 'TTS', 'narasi' => 'Humor dalam anekdot biasanya muncul dari perbedaan antara ekspektasi dan kenyataan.', 'pertanyaan' => ['Bagian paling lucu dalam anekdot disebut ...', 'Tujuan humor dalam anekdot adalah untuk ...', 'Kritik yang disampaikan secara halus melalui humor disebut ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Punchline', 'Mengkritik', 'Sindiran']],
            ]],
            ['bab' => 4, 'judul' => 'Puisi Lama dan Baru', 'soal' => [
                ['judul' => 'Jenis Puisi Lama', 'type' => 'drag and drop', 'narasi' => 'Puisi lama terikat aturan baku seperti jumlah baris, suku kata, dan rima.', 'pertanyaan' => 'Pasangkan jenis puisi lama dengan ciri-cirinya', 'ilustrasi' => null, 'pilihan' => ['Pantun', 'Syair', 'Gurindam'], 'jawaban' => ['4 baris, 2 sampiran 2 isi', 'Semua baris adalah isi, berima aaaa', '2 baris, bersifat nasihat, berima aa']],
                ['judul' => 'Puisi Baru', 'type' => 'quiz', 'narasi' => 'Puisi baru tidak terikat aturan ketat seperti puisi lama, lebih bebas dalam bentuk.', 'pertanyaan' => 'Puisi baru yang mengutamakan kebebasan ekspresi tanpa aturan baku disebut puisi...', 'ilustrasi' => null, 'pilihan' => ['A. Soneta', 'B. Balada', 'C. Bebas', 'D. Ode'], 'jawaban' => 'C. Bebas'],
                ['judul' => 'Unsur Pembangun Puisi', 'type' => 'TTS', 'narasi' => 'Puisi dibangun oleh unsur-unsur yang membentuk keindahan dan kedalaman maknanya.', 'pertanyaan' => ['Pemilihan kata yang tepat dalam puisi disebut ...', 'Perulangan bunyi di akhir baris puisi disebut ...', 'Makna tersembunyi dalam puisi disebut makna ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Diksi', 'Rima', 'Konotasi']],
            ]],
            ['bab' => 5, 'judul' => 'Teks Negosiasi', 'soal' => [
                ['judul' => 'Pengertian Negosiasi', 'type' => 'quiz', 'narasi' => 'Negosiasi adalah proses tawar-menawar dua pihak atau lebih untuk mencapai kesepakatan yang saling menguntungkan.', 'pertanyaan' => 'Tujuan negosiasi adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Mengalahkan lawan', 'B. Mencapai kesepakatan bersama', 'C. Memaksakan kehendak', 'D. Menghindari konflik'], 'jawaban' => 'B. Mencapai kesepakatan bersama'],
                ['judul' => 'Struktur Teks Negosiasi', 'type' => 'drag and drop', 'narasi' => 'Teks negosiasi memiliki struktur yang menggambarkan proses tawar-menawar hingga kesepakatan.', 'pertanyaan' => 'Urutkan struktur teks negosiasi', 'ilustrasi' => null, 'pilihan' => ['Penawaran', 'Persetujuan', 'Orientasi'], 'jawaban' => ['Orientasi', 'Penawaran', 'Persetujuan']],
                ['judul' => 'Strategi Negosiasi', 'type' => 'quiz', 'narasi' => 'Negosiasi efektif memerlukan kemampuan mendengarkan, menyampaikan argumen, dan mencari solusi win-win.', 'pertanyaan' => 'Hasil negosiasi yang paling ideal adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Satu pihak menang total', 'B. Tidak ada kesepakatan', 'C. Kedua pihak puas (win-win)', 'D. Pihak yang kuat menang'], 'jawaban' => 'C. Kedua pihak puas (win-win)'],
            ]],
        ];
    }

    private function pknKelas10(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Pancasila sebagai Dasar Negara', 'soal' => [
                ['judul' => 'Kedudukan Pancasila', 'type' => 'quiz', 'narasi' => 'Pancasila memiliki kedudukan sebagai dasar negara, pandangan hidup bangsa, ideologi nasional, dan kepribadian bangsa.', 'pertanyaan' => 'Pancasila sebagai dasar negara berarti Pancasila menjadi...', 'ilustrasi' => null, 'pilihan' => ['A. Simbol negara', 'B. Landasan penyelenggaraan negara', 'C. Lambang persatuan', 'D. Slogan pemerintah'], 'jawaban' => 'B. Landasan penyelenggaraan negara'],
                ['judul' => 'Lima Sila Pancasila', 'type' => 'drag and drop', 'narasi' => 'Pancasila terdiri dari lima sila yang merupakan satu kesatuan utuh, setiap sila memiliki lambang.', 'pertanyaan' => 'Pasangkan sila Pancasila dengan lambangnya', 'ilustrasi' => null, 'pilihan' => ['Sila 1', 'Sila 2', 'Sila 3', 'Sila 4', 'Sila 5'], 'jawaban' => ['Bintang', 'Rantai', 'Pohon Beringin', 'Kepala Banteng', 'Padi dan Kapas']],
                ['judul' => 'Makna Setiap Sila', 'type' => 'TTS', 'narasi' => 'Setiap sila Pancasila mengandung nilai-nilai luhur sebagai pedoman kehidupan berbangsa.', 'pertanyaan' => ['Sila pertama berhubungan dengan nilai ...', 'Sila ketiga menekankan pentingnya ...', 'Sila kelima berkaitan dengan nilai ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Ketuhanan', 'Persatuan', 'Keadilan']],
            ]],
            ['bab' => 2, 'judul' => 'UUD NRI Tahun 1945', 'soal' => [
                ['judul' => 'Sejarah UUD 1945', 'type' => 'quiz', 'narasi' => 'UUD 1945 disahkan oleh PPKI pada 18 Agustus 1945, sehari setelah Proklamasi Kemerdekaan.', 'pertanyaan' => 'UUD 1945 disahkan oleh PPKI pada tanggal...', 'ilustrasi' => null, 'pilihan' => ['A. 17 Agustus 1945', 'B. 18 Agustus 1945', 'C. 1 Juni 1945', 'D. 22 Juni 1945'], 'jawaban' => 'B. 18 Agustus 1945'],
                ['judul' => 'Sistematika UUD 1945', 'type' => 'drag and drop', 'narasi' => 'UUD 1945 setelah amandemen terdiri dari Pembukaan dan Batang Tubuh (21 bab, 73 pasal).', 'pertanyaan' => 'Pasangkan bagian UUD 1945 dengan isinya', 'ilustrasi' => null, 'pilihan' => ['Pembukaan', 'Batang Tubuh', 'Pasal 1 ayat 1'], 'jawaban' => ['Tujuan negara & dasar negara', 'Pasal-pasal pengaturan negara', 'Indonesia adalah negara kesatuan berbentuk republik']],
                ['judul' => 'Amandemen UUD 1945', 'type' => 'quiz', 'narasi' => 'UUD 1945 diamandemen sebanyak 4 kali (1999-2002) oleh MPR untuk memperkuat demokrasi.', 'pertanyaan' => 'Amandemen UUD 1945 dilakukan sebanyak...', 'ilustrasi' => null, 'pilihan' => ['A. 2 kali', 'B. 3 kali', 'C. 4 kali', 'D. 5 kali'], 'jawaban' => 'C. 4 kali'],
            ]],
            ['bab' => 3, 'judul' => 'Bentuk dan Kedaulatan Negara', 'soal' => [
                ['judul' => 'Bentuk Negara Indonesia', 'type' => 'quiz', 'narasi' => 'Berdasarkan Pasal 1 Ayat 1 UUD 1945, Indonesia adalah negara kesatuan yang berbentuk republik.', 'pertanyaan' => 'Indonesia menganut bentuk negara...', 'ilustrasi' => null, 'pilihan' => ['A. Federal', 'B. Kesatuan', 'C. Konfederasi', 'D. Monarki'], 'jawaban' => 'B. Kesatuan'],
                ['judul' => 'Teori Kedaulatan', 'type' => 'drag and drop', 'narasi' => 'Kedaulatan adalah kekuasaan tertinggi yang dimiliki negara. Ada teori kedaulatan Tuhan, raja, negara, hukum, dan rakyat.', 'pertanyaan' => 'Pasangkan teori kedaulatan dengan tokohnya', 'ilustrasi' => null, 'pilihan' => ['Kedaulatan Rakyat', 'Kedaulatan Hukum', 'Kedaulatan Negara'], 'jawaban' => ['John Locke & Rousseau', 'Hugo de Groot & Hans Kelsen', 'George Jellinek & Hegel']],
                ['judul' => 'Demokrasi Pancasila', 'type' => 'quiz', 'narasi' => 'Indonesia menganut demokrasi Pancasila yang berlandaskan nilai-nilai Pancasila dengan ciri khas musyawarah mufakat.', 'pertanyaan' => 'Ciri khas demokrasi Pancasila adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Voting selalu diutamakan', 'B. Musyawarah mufakat', 'C. Keputusan oleh pemimpin saja', 'D. Aturan mayoritas mutlak'], 'jawaban' => 'B. Musyawarah mufakat'],
            ]],
            ['bab' => 4, 'judul' => 'Hak dan Kewajiban Warga Negara', 'soal' => [
                ['judul' => 'Hak Warga Negara', 'type' => 'drag and drop', 'narasi' => 'Hak warga negara dijamin dalam UUD 1945 dan berbagai peraturan perundang-undangan.', 'pertanyaan' => 'Klasifikasikan hak-hak berikut', 'ilustrasi' => null, 'pilihan' => ['Hak mendapat pendidikan', 'Hak memilih dalam pemilu', 'Hak atas pekerjaan yang layak'], 'jawaban' => ['Hak sosial-budaya', 'Hak politik', 'Hak ekonomi']],
                ['judul' => 'Kewajiban Warga Negara', 'type' => 'quiz', 'narasi' => 'Setiap warga negara memiliki kewajiban yang harus dipenuhi demi kepentingan negara dan masyarakat.', 'pertanyaan' => 'Manakah yang merupakan kewajiban warga negara Indonesia?', 'ilustrasi' => null, 'pilihan' => ['A. Menerima bantuan sosial', 'B. Membayar pajak', 'C. Mendapat jaminan kesehatan', 'D. Mendapat perlindungan hukum'], 'jawaban' => 'B. Membayar pajak'],
                ['judul' => 'Keseimbangan Hak dan Kewajiban', 'type' => 'TTS', 'narasi' => 'Hak dan kewajiban harus berjalan beriringan untuk keseimbangan kehidupan bermasyarakat.', 'pertanyaan' => ['Dokumen yang menjamin hak-hak warga negara disebut ...', 'Lembaga yang berwenang menguji UU terhadap UUD disebut ...', 'Hak yang tidak dapat dikurangi dalam keadaan apapun disebut hak ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Konstitusi', 'Mahkamah Konstitusi', 'Asasi']],
            ]],
            ['bab' => 5, 'judul' => 'Integrasi Nasional', 'soal' => [
                ['judul' => 'Pengertian Integrasi Nasional', 'type' => 'quiz', 'narasi' => 'Integrasi nasional adalah proses penyatuan berbagai perbedaan menjadi satu kesatuan yang utuh dan harmonis.', 'pertanyaan' => 'Integrasi nasional bertujuan untuk...', 'ilustrasi' => null, 'pilihan' => ['A. Menghilangkan perbedaan', 'B. Menyatukan keberagaman demi persatuan', 'C. Memenangkan suku mayoritas', 'D. Menghapus budaya lokal'], 'jawaban' => 'B. Menyatukan keberagaman demi persatuan'],
                ['judul' => 'Faktor Pembentuk Integrasi', 'type' => 'drag and drop', 'narasi' => 'Integrasi nasional terbentuk karena faktor internal (dari dalam) dan eksternal (dari luar masyarakat).', 'pertanyaan' => 'Klasifikasikan faktor-faktor berikut', 'ilustrasi' => null, 'pilihan' => ['Rasa senasib sepenanggungan', 'Ancaman dari luar negeri', 'Semangat Sumpah Pemuda'], 'jawaban' => ['Faktor internal', 'Faktor eksternal', 'Faktor internal']],
                ['judul' => 'Ancaman terhadap Integrasi', 'type' => 'quiz', 'narasi' => 'Integrasi nasional dapat terancam oleh separatisme, konflik SARA, kemiskinan, dan ketidakadilan.', 'pertanyaan' => 'Gerakan yang berusaha memisahkan diri dari NKRI disebut gerakan...', 'ilustrasi' => null, 'pilihan' => ['A. Nasionalisme', 'B. Federalisme', 'C. Separatisme', 'D. Liberalisme'], 'jawaban' => 'C. Separatisme'],
            ]],
        ];
    }

    // =========================================================================
    // DATA — KELAS 11 (ringkas — struktur sama, konten berbeda)
    // =========================================================================

    private function mtkKelas11(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Limit Fungsi', 'soal' => [
                ['judul' => 'Konsep Limit', 'type' => 'quiz', 'narasi' => 'Limit fungsi f(x) saat x→a adalah nilai yang didekati f(x) ketika x semakin dekat ke a.', 'pertanyaan' => 'Limit fungsi f(x) = 2x + 3 saat x→2 adalah...', 'ilustrasi' => null, 'pilihan' => ['A. 5', 'B. 6', 'C. 7', 'D. 8'], 'jawaban' => 'C. 7'],
                ['judul' => 'Sifat-Sifat Limit', 'type' => 'drag and drop', 'narasi' => 'Limit memiliki sifat operasi: jumlah, selisih, perkalian, pembagian, dan pangkat.', 'pertanyaan' => 'Pasangkan operasi limit dengan sifatnya', 'ilustrasi' => null, 'pilihan' => ['lim[f(x)+g(x)]', 'lim[f(x)·g(x)]', 'lim[f(x)/g(x)]'], 'jawaban' => ['lim f(x) + lim g(x)', 'lim f(x) · lim g(x)', 'lim f(x) / lim g(x), g≠0']],
                ['judul' => 'Limit Tak Tentu', 'type' => 'quiz', 'narasi' => 'Bentuk tak tentu 0/0 diselesaikan dengan pemfaktoran atau substitusi.', 'pertanyaan' => 'Nilai dari lim (x²-9)/(x-3) saat x→3 adalah...', 'ilustrasi' => null, 'pilihan' => ['A. 0', 'B. 3', 'C. 6', 'D. 9'], 'jawaban' => 'C. 6'],
                ['judul' => 'Istilah Limit', 'type' => 'TTS', 'narasi' => 'Limit adalah konsep dasar kalkulus sebagai fondasi turunan dan integral.', 'pertanyaan' => ['Bentuk 0/0 dalam limit disebut bentuk ...', 'Metode menyelesaikan limit dengan memecah ekspresi disebut ...', 'Limit yang hasilnya tak hingga berarti fungsi ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Tak tentu', 'Pemfaktoran', 'Divergen']],
            ]],
            ['bab' => 2, 'judul' => 'Turunan Fungsi', 'soal' => [
                ['judul' => 'Konsep Turunan', 'type' => 'quiz', 'narasi' => 'Turunan f\'(x) menyatakan laju perubahan fungsi f(x) terhadap x.', 'pertanyaan' => 'Turunan dari f(x) = x³ adalah...', 'ilustrasi' => null, 'pilihan' => ['A. f\'(x) = x²', 'B. f\'(x) = 3x', 'C. f\'(x) = 3x²', 'D. f\'(x) = 2x³'], 'jawaban' => 'C. f\'(x) = 3x²'],
                ['judul' => 'Aturan Turunan', 'type' => 'drag and drop', 'narasi' => 'Aturan turunan: pangkat, perkalian, pembagian, dan rantai.', 'pertanyaan' => 'Pasangkan fungsi dengan turunannya', 'ilustrasi' => null, 'pilihan' => ['f(x) = sin x', 'f(x) = cos x', 'f(x) = eˣ'], 'jawaban' => ['f\'(x) = cos x', 'f\'(x) = -sin x', 'f\'(x) = eˣ']],
                ['judul' => 'Aplikasi Turunan', 'type' => 'quiz', 'narasi' => 'Turunan digunakan untuk mencari nilai maksimum/minimum fungsi. Pada titik kritis f\'(x) = 0.', 'pertanyaan' => 'Fungsi f(x) = -x² + 4x memiliki nilai maksimum pada x = ...', 'ilustrasi' => null, 'pilihan' => ['A. x = 1', 'B. x = 2', 'C. x = 4', 'D. x = 0'], 'jawaban' => 'B. x = 2'],
            ]],
            ['bab' => 3, 'judul' => 'Integral', 'soal' => [
                ['judul' => 'Integral sebagai Anti-Turunan', 'type' => 'quiz', 'narasi' => 'Integral adalah operasi kebalikan dari turunan. ∫f(x)dx = F(x) + C.', 'pertanyaan' => 'Hasil dari ∫3x² dx adalah...', 'ilustrasi' => null, 'pilihan' => ['A. 6x + C', 'B. x³ + C', 'C. 3x³ + C', 'D. x² + C'], 'jawaban' => 'B. x³ + C'],
                ['judul' => 'Integral Tertentu', 'type' => 'quiz', 'narasi' => 'Integral tertentu ∫ₐᵇ f(x)dx = F(b) - F(a).', 'pertanyaan' => 'Nilai dari ∫₀² 2x dx adalah...', 'ilustrasi' => null, 'pilihan' => ['A. 2', 'B. 4', 'C. 6', 'D. 8'], 'jawaban' => 'B. 4'],
                ['judul' => 'Aplikasi Integral', 'type' => 'drag and drop', 'narasi' => 'Integral tertentu dapat menghitung luas daerah, volume benda putar, dan panjang busur.', 'pertanyaan' => 'Pasangkan aplikasi integral dengan kegunaannya', 'ilustrasi' => null, 'pilihan' => ['Integral luas', 'Integral volume', 'Integral panjang busur'], 'jawaban' => ['Luas daerah di bawah kurva', 'Volume benda yang diputar', 'Panjang kurva dalam interval']],
            ]],
            ['bab' => 4, 'judul' => 'Matriks', 'soal' => [
                ['judul' => 'Pengertian Matriks', 'type' => 'quiz', 'narasi' => 'Matriks adalah susunan bilangan dalam baris dan kolom. Ordo dinyatakan sebagai m×n.', 'pertanyaan' => 'Matriks dengan 3 baris dan 2 kolom memiliki ordo...', 'ilustrasi' => null, 'pilihan' => ['A. 2×3', 'B. 3×2', 'C. 6×1', 'D. 2×2'], 'jawaban' => 'B. 3×2'],
                ['judul' => 'Operasi Matriks', 'type' => 'drag and drop', 'narasi' => 'Penjumlahan memerlukan ordo sama. Perkalian A×B memerlukan kolom A = baris B.', 'pertanyaan' => 'Pasangkan operasi matriks dengan syaratnya', 'ilustrasi' => null, 'pilihan' => ['Penjumlahan A+B', 'Perkalian A×B', 'Transpose Aᵀ'], 'jawaban' => ['Ordo A = Ordo B', 'Kolom A = Baris B', 'Baris jadi kolom, kolom jadi baris']],
                ['judul' => 'Determinan dan Invers', 'type' => 'quiz', 'narasi' => 'Determinan matriks 2×2 [a b; c d] = ad - bc. Invers ada jika det(A) ≠ 0.', 'pertanyaan' => 'Determinan matriks [2 3; 1 4] adalah...', 'ilustrasi' => null, 'pilihan' => ['A. 5', 'B. 6', 'C. 8', 'D. 11'], 'jawaban' => 'A. 5'],
            ]],
            ['bab' => 5, 'judul' => 'Barisan dan Deret', 'soal' => [
                ['judul' => 'Barisan Aritmetika', 'type' => 'quiz', 'narasi' => 'Barisan aritmetika: Uₙ = a + (n-1)b, di mana a = suku pertama dan b = beda.', 'pertanyaan' => 'Barisan: 3, 7, 11, 15, ... Suku ke-10 adalah...', 'ilustrasi' => null, 'pilihan' => ['A. 35', 'B. 39', 'C. 40', 'D. 43'], 'jawaban' => 'B. 39'],
                ['judul' => 'Barisan Geometri', 'type' => 'quiz', 'narasi' => 'Barisan geometri: Uₙ = a × rⁿ⁻¹, di mana r adalah rasio.', 'pertanyaan' => 'Barisan: 2, 6, 18, 54, ... Rasio barisannya adalah...', 'ilustrasi' => null, 'pilihan' => ['A. 2', 'B. 3', 'C. 4', 'D. 6'], 'jawaban' => 'B. 3'],
                ['judul' => 'Deret dan Sigma', 'type' => 'drag and drop', 'narasi' => 'Deret adalah jumlah suku-suku barisan. Notasi sigma (Σ) menyatakan jumlah secara ringkas.', 'pertanyaan' => 'Pasangkan jenis deret dengan rumus jumlahnya', 'ilustrasi' => null, 'pilihan' => ['Deret aritmetika', 'Deret geometri terbatas', 'Deret geometri tak terbatas (|r|<1)'], 'jawaban' => ['Sₙ = n/2 × (2a + (n-1)b)', 'Sₙ = a(rⁿ-1)/(r-1)', 'S∞ = a/(1-r)']],
            ]],
        ];
    }

    private function ipaKelas11(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Sel: Unit Terkecil Kehidupan', 'soal' => [
                ['judul' => 'Organel Sel', 'type' => 'drag and drop', 'narasi' => 'Sel eukariotik memiliki membran inti dan berbagai organel dengan fungsi khusus.', 'pertanyaan' => 'Pasangkan organel dengan fungsinya', 'ilustrasi' => null, 'pilihan' => ['Mitokondria', 'Ribosom', 'Nukleus', 'Kloroplas'], 'jawaban' => ['Respirasi sel/energi', 'Sintesis protein', 'Pusat informasi genetik', 'Fotosintesis']],
                ['judul' => 'Sel Prokariotik vs Eukariotik', 'type' => 'quiz', 'narasi' => 'Sel prokariotik tidak memiliki membran inti (bakteri). Sel eukariotik memiliki membran inti (hewan, tumbuhan).', 'pertanyaan' => 'Organisme yang selnya bersifat prokariotik adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Jamur', 'B. Alga', 'C. Bakteri', 'D. Tumbuhan'], 'jawaban' => 'C. Bakteri'],
                ['judul' => 'Transport Membran', 'type' => 'drag and drop', 'narasi' => 'Zat masuk dan keluar sel melalui difusi, osmosis, dan transport aktif.', 'pertanyaan' => 'Pasangkan mekanisme transport dengan cirinya', 'ilustrasi' => null, 'pilihan' => ['Difusi', 'Osmosis', 'Transport aktif'], 'jawaban' => ['Dari konsentrasi tinggi ke rendah', 'Perpindahan air melalui membran', 'Memerlukan energi/ATP']],
            ]],
            ['bab' => 2, 'judul' => 'Sistem Gerak Manusia', 'soal' => [
                ['judul' => 'Tulang dan Fungsinya', 'type' => 'drag and drop', 'narasi' => 'Sistem rangka tersusun dari tulang keras dan tulang rawan dengan berbagai fungsi penting.', 'pertanyaan' => 'Pasangkan jenis tulang dengan contohnya', 'ilustrasi' => null, 'pilihan' => ['Tulang pipa', 'Tulang pipih', 'Tulang pendek'], 'jawaban' => ['Tulang paha, lengan atas', 'Tulang tengkorak, tulang dada', 'Tulang pergelangan tangan']],
                ['judul' => 'Sendi dan Jenis-Jenisnya', 'type' => 'quiz', 'narasi' => 'Sendi adalah hubungan antara dua tulang. Ada sendi engsel, pelana, putar, peluru, dan geser.', 'pertanyaan' => 'Sendi yang memungkinkan gerakan ke segala arah (contoh: bahu) adalah sendi...', 'ilustrasi' => null, 'pilihan' => ['A. Engsel', 'B. Putar', 'C. Peluru', 'D. Pelana'], 'jawaban' => 'C. Peluru'],
                ['judul' => 'Otot dan Kontraksi', 'type' => 'TTS', 'narasi' => 'Otot adalah alat gerak aktif. Ada tiga jenis: rangka (lurik), polos, dan jantung.', 'pertanyaan' => ['Otot yang bekerja di bawah kesadaran disebut otot ...', 'Protein otot yang berperan dalam kontraksi adalah ...', 'Sumber energi kontraksi otot adalah ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Rangka', 'Aktin dan miosin', 'ATP']],
            ]],
            ['bab' => 3, 'judul' => 'Sistem Peredaran Darah', 'soal' => [
                ['judul' => 'Komponen Darah', 'type' => 'drag and drop', 'narasi' => 'Darah terdiri dari plasma (55%) dan sel darah (45%): eritrosit, leukosit, trombosit.', 'pertanyaan' => 'Pasangkan komponen darah dengan fungsinya', 'ilustrasi' => null, 'pilihan' => ['Eritrosit', 'Leukosit', 'Trombosit'], 'jawaban' => ['Membawa oksigen (hemoglobin)', 'Pertahanan tubuh/imun', 'Pembekuan darah']],
                ['judul' => 'Sirkulasi Darah', 'type' => 'quiz', 'narasi' => 'Peredaran darah manusia bersifat ganda dan tertutup: sirkulasi kecil (paru-paru) dan besar (seluruh tubuh).', 'pertanyaan' => 'Sirkulasi darah yang membawa darah dari jantung ke paru-paru disebut sirkulasi...', 'ilustrasi' => null, 'pilihan' => ['A. Besar', 'B. Kecil', 'C. Portal', 'D. Limfa'], 'jawaban' => 'B. Kecil'],
                ['judul' => 'Golongan Darah', 'type' => 'quiz', 'narasi' => 'Golongan O disebut donor universal, golongan AB disebut resipien universal.', 'pertanyaan' => 'Golongan darah yang dapat menerima transfusi dari semua golongan adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Golongan A', 'B. Golongan B', 'C. Golongan O', 'D. Golongan AB'], 'jawaban' => 'D. Golongan AB'],
            ]],
            ['bab' => 4, 'judul' => 'Sistem Pencernaan', 'soal' => [
                ['judul' => 'Organ Pencernaan', 'type' => 'drag and drop', 'narasi' => 'Sistem pencernaan terdiri dari saluran dan kelenjar pencernaan yang bekerja mekanik dan kimiawi.', 'pertanyaan' => 'Urutkan organ pencernaan dari mulut ke anus', 'ilustrasi' => null, 'pilihan' => ['Usus besar', 'Lambung', 'Usus halus', 'Mulut'], 'jawaban' => ['Mulut', 'Lambung', 'Usus halus', 'Usus besar']],
                ['judul' => 'Enzim Pencernaan', 'type' => 'drag and drop', 'narasi' => 'Enzim adalah katalis biologi yang mempercepat reaksi pencernaan, bekerja spesifik pada substrat.', 'pertanyaan' => 'Pasangkan enzim dengan zat yang dicernanya', 'ilustrasi' => null, 'pilihan' => ['Amilase', 'Pepsin', 'Lipase'], 'jawaban' => ['Karbohidrat (amilum)', 'Protein', 'Lemak']],
                ['judul' => 'Nutrisi Penting', 'type' => 'quiz', 'narasi' => 'Nutrisi dibagi menjadi makronutrien (karbohidrat, protein, lemak) dan mikronutrien (vitamin, mineral).', 'pertanyaan' => 'Kekurangan vitamin C menyebabkan penyakit...', 'ilustrasi' => null, 'pilihan' => ['A. Anemia', 'B. Skorbut', 'C. Rakitis', 'D. Beri-beri'], 'jawaban' => 'B. Skorbut'],
            ]],
            ['bab' => 5, 'judul' => 'Sistem Koordinasi dan Indra', 'soal' => [
                ['judul' => 'Sistem Saraf', 'type' => 'drag and drop', 'narasi' => 'Sistem saraf terdiri dari SSP (otak dan sumsum tulang belakang) dan sistem saraf tepi.', 'pertanyaan' => 'Pasangkan bagian otak dengan fungsinya', 'ilustrasi' => null, 'pilihan' => ['Serebrum', 'Serebelum', 'Batang otak'], 'jawaban' => ['Berpikir dan kesadaran', 'Keseimbangan dan koordinasi gerak', 'Mengatur fungsi vital (napas, jantung)']],
                ['judul' => 'Hormon dan Kelenjar', 'type' => 'quiz', 'narasi' => 'Sistem endokrin mengatur fungsi tubuh melalui hormon yang dikeluarkan langsung ke darah.', 'pertanyaan' => 'Hormon yang mengatur kadar gula darah dihasilkan oleh...', 'ilustrasi' => null, 'pilihan' => ['A. Tiroid', 'B. Pankreas', 'C. Adrenal', 'D. Hipofisis'], 'jawaban' => 'B. Pankreas'],
                ['judul' => 'Alat Indra', 'type' => 'TTS', 'narasi' => 'Alat indra menangkap rangsangan dari lingkungan dan mengirimkannya ke otak melalui saraf sensorik.', 'pertanyaan' => ['Reseptor cahaya pada retina mata disebut sel ...', 'Bagian telinga berisi cairan untuk mendeteksi suara adalah ...', 'Indra yang mendeteksi bau adalah ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Fotoreseptor', 'Koklea', 'Hidung']],
            ]],
        ];
    }

    private function ipsKelas11(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Kondisi Geografis Indonesia', 'soal' => [
                ['judul' => 'Posisi Strategis Indonesia', 'type' => 'quiz', 'narasi' => 'Indonesia terletak di antara dua benua (Asia dan Australia) dan dua samudra (Hindia dan Pasifik).', 'pertanyaan' => 'Indonesia terletak di antara dua samudra yaitu...', 'ilustrasi' => null, 'pilihan' => ['A. Atlantik dan Arktik', 'B. Hindia dan Pasifik', 'C. Pasifik dan Atlantik', 'D. Hindia dan Arktik'], 'jawaban' => 'B. Hindia dan Pasifik'],
                ['judul' => 'Iklim Indonesia', 'type' => 'drag and drop', 'narasi' => 'Indonesia beriklim tropis dengan dua musim utama yang dipengaruhi angin muson.', 'pertanyaan' => 'Pasangkan faktor dengan pengaruhnya terhadap iklim Indonesia', 'ilustrasi' => null, 'pilihan' => ['Angin muson barat', 'Angin muson timur', 'Arus laut'], 'jawaban' => ['Musim hujan (Oktober-April)', 'Musim kemarau (April-Oktober)', 'Mengatur suhu dan curah hujan']],
                ['judul' => 'Potensi Alam Indonesia', 'type' => 'TTS', 'narasi' => 'Indonesia kaya sumber daya alam terbarukan dan tak terbarukan.', 'pertanyaan' => ['Hutan hujan tropis Indonesia dikenal sebagai paru-paru ...', 'Indonesia merupakan negara kepulauan terbesar', 'Sumber daya laut Indonesia yang bernilai ekonomis disebut sumber daya ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Dunia', 'Kepulauan', 'Kelautan']],
            ]],
            ['bab' => 2, 'judul' => 'Dinamika Penduduk Indonesia', 'soal' => [
                ['judul' => 'Pertumbuhan Penduduk', 'type' => 'quiz', 'narasi' => 'Pertumbuhan penduduk dipengaruhi oleh kelahiran (natalitas), kematian (mortalitas), dan migrasi.', 'pertanyaan' => 'Faktor yang MENGURANGI jumlah penduduk adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Natalitas tinggi', 'B. Mortalitas tinggi', 'C. Imigrasi', 'D. Fertilitas tinggi'], 'jawaban' => 'B. Mortalitas tinggi'],
                ['judul' => 'Persebaran Penduduk', 'type' => 'quiz', 'narasi' => 'Penduduk Indonesia tidak tersebar merata — Pulau Jawa (7% wilayah) dihuni ~57% penduduk.', 'pertanyaan' => 'Upaya pemerintah meratakan persebaran penduduk disebut...', 'ilustrasi' => null, 'pilihan' => ['A. Urbanisasi', 'B. Transmigrasi', 'C. Emigrasi', 'D. Imigrasi'], 'jawaban' => 'B. Transmigrasi'],
                ['judul' => 'Kualitas Penduduk', 'type' => 'drag and drop', 'narasi' => 'Kualitas penduduk diukur menggunakan Indeks Pembangunan Manusia (IPM).', 'pertanyaan' => 'Pasangkan dimensi IPM dengan indikatornya', 'ilustrasi' => null, 'pilihan' => ['Dimensi kesehatan', 'Dimensi pendidikan', 'Dimensi ekonomi'], 'jawaban' => ['Angka harapan hidup', 'Rata-rata lama sekolah', 'Pengeluaran per kapita']],
            ]],
            ['bab' => 3, 'judul' => 'Pembangunan Ekonomi', 'soal' => [
                ['judul' => 'Konsep Pembangunan Ekonomi', 'type' => 'quiz', 'narasi' => 'Pembangunan ekonomi adalah proses peningkatan pendapatan per kapita jangka panjang disertai perubahan struktural.', 'pertanyaan' => 'Perbedaan pembangunan dan pertumbuhan ekonomi adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Tidak ada perbedaan', 'B. Pembangunan lebih luas, mencakup perubahan struktural', 'C. Pertumbuhan lebih luas', 'D. Pembangunan hanya soal GNP'], 'jawaban' => 'B. Pembangunan lebih luas, mencakup perubahan struktural'],
                ['judul' => 'Sektor Ekonomi', 'type' => 'drag and drop', 'narasi' => 'Sektor ekonomi dibagi menjadi primer (pertanian), sekunder (industri), dan tersier (jasa).', 'pertanyaan' => 'Klasifikasikan kegiatan ekonomi berikut', 'ilustrasi' => null, 'pilihan' => ['Bertani padi', 'Pabrik tekstil', 'Perbankan'], 'jawaban' => ['Sektor primer', 'Sektor sekunder', 'Sektor tersier']],
                ['judul' => 'Masalah Ekonomi Indonesia', 'type' => 'TTS', 'narasi' => 'Indonesia menghadapi berbagai masalah ekonomi yang perlu diatasi.', 'pertanyaan' => ['Kondisi tidak punya pekerjaan dan mencari kerja disebut ...', 'Kenaikan harga barang secara terus-menerus disebut ...', 'Ketimpangan pendapatan diukur dengan indeks ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Pengangguran', 'Inflasi', 'Gini']],
            ]],
            ['bab' => 4, 'judul' => 'Globalisasi dan Perdagangan Internasional', 'soal' => [
                ['judul' => 'Pengertian Globalisasi', 'type' => 'quiz', 'narasi' => 'Globalisasi adalah proses integrasi internasional didorong kemajuan teknologi komunikasi dan transportasi.', 'pertanyaan' => 'Faktor utama pendorong globalisasi adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Perang dunia', 'B. Kemajuan teknologi komunikasi', 'C. Bencana alam', 'D. Perbedaan budaya'], 'jawaban' => 'B. Kemajuan teknologi komunikasi'],
                ['judul' => 'Perdagangan Internasional', 'type' => 'drag and drop', 'narasi' => 'Perdagangan internasional terjadi karena setiap negara tidak dapat memenuhi semua kebutuhannya sendiri.', 'pertanyaan' => 'Pasangkan istilah dengan definisinya', 'ilustrasi' => null, 'pilihan' => ['Ekspor', 'Impor', 'Neraca perdagangan'], 'jawaban' => ['Menjual ke luar negeri', 'Membeli dari luar negeri', 'Selisih ekspor dan impor']],
                ['judul' => 'Dampak Globalisasi', 'type' => 'quiz', 'narasi' => 'Globalisasi membawa dampak positif dan negatif bagi kehidupan masyarakat.', 'pertanyaan' => 'Upaya tepat menghadapi dampak negatif globalisasi adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Menolak semua produk asing', 'B. Menutup diri dari dunia luar', 'C. Selektif menyaring pengaruh asing', 'D. Menerima semua pengaruh asing'], 'jawaban' => 'C. Selektif menyaring pengaruh asing'],
            ]],
            ['bab' => 5, 'judul' => 'Perubahan Sosial', 'soal' => [
                ['judul' => 'Pengertian Perubahan Sosial', 'type' => 'quiz', 'narasi' => 'Perubahan sosial adalah perubahan pada lembaga-lembaga kemasyarakatan yang mempengaruhi sistem sosialnya.', 'pertanyaan' => 'Teori yang menyatakan perubahan sosial bergerak maju secara bertahap adalah teori...', 'ilustrasi' => null, 'pilihan' => ['A. Siklus', 'B. Evolusi', 'C. Konflik', 'D. Fungsional'], 'jawaban' => 'B. Evolusi'],
                ['judul' => 'Faktor Perubahan Sosial', 'type' => 'drag and drop', 'narasi' => 'Perubahan sosial dipengaruhi faktor internal (dari dalam) dan eksternal (dari luar masyarakat).', 'pertanyaan' => 'Klasifikasikan faktor-faktor berikut', 'ilustrasi' => null, 'pilihan' => ['Penemuan baru (inovasi)', 'Pengaruh kebudayaan asing', 'Konflik dalam masyarakat'], 'jawaban' => ['Faktor internal', 'Faktor eksternal', 'Faktor internal']],
                ['judul' => 'Modernisasi', 'type' => 'TTS', 'narasi' => 'Modernisasi adalah proses perubahan dari masyarakat tradisional ke modern.', 'pertanyaan' => ['Proses pengambilalihan unsur budaya asing disebut ...', 'Perpaduan dua kebudayaan berbeda menjadi kebudayaan baru disebut ...', 'Proses perubahan cepat dan mendasar dalam masyarakat disebut ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Akulturasi', 'Asimilasi', 'Revolusi']],
            ]],
        ];
    }

    private function sejarahKelas11(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Perang Dunia I dan Dampaknya', 'soal' => [
                ['judul' => 'Latar Belakang PD I', 'type' => 'drag and drop', 'narasi' => 'PD I (1914-1918) disebabkan faktor MAIN: Militerisme, Aliansi, Imperialisme, Nasionalisme.', 'pertanyaan' => 'Pasangkan faktor MAIN dengan maknanya', 'ilustrasi' => null, 'pilihan' => ['Militerisme', 'Aliansi', 'Nasionalisme'], 'jawaban' => ['Perlombaan senjata antar negara', 'Pakta pertahanan bersama', 'Semangat kebangsaan yang berlebihan']],
                ['judul' => 'Blok Perang Dunia I', 'type' => 'quiz', 'narasi' => 'PD I melibatkan Sekutu (Inggris, Prancis, Rusia) melawan Blok Sentral (Jerman, Austria-Hungaria).', 'pertanyaan' => 'Jerman termasuk dalam blok...', 'ilustrasi' => null, 'pilihan' => ['A. Sekutu', 'B. Sentral', 'C. Netral', 'D. Non-blok'], 'jawaban' => 'B. Sentral'],
                ['judul' => 'Dampak PD I', 'type' => 'TTS', 'narasi' => 'PD I mengubah peta dunia secara drastis dan melahirkan lembaga internasional baru.', 'pertanyaan' => ['Organisasi internasional yang dibentuk setelah PD I disebut ...', 'Perjanjian yang mengakhiri PD I adalah Perjanjian ...', 'Kehancuran ekonomi Jerman akibat PD I memicu munculnya ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Liga Bangsa-Bangsa', 'Versailles', 'Fasisme']],
            ]],
            ['bab' => 2, 'judul' => 'Perang Dunia II', 'soal' => [
                ['judul' => 'Latar Belakang PD II', 'type' => 'quiz', 'narasi' => 'PD II (1939-1945) dipicu invasi Jerman ke Polandia pada 1 September 1939.', 'pertanyaan' => 'PD II dimulai ketika Jerman menginvasi...', 'ilustrasi' => null, 'pilihan' => ['A. Prancis', 'B. Uni Soviet', 'C. Polandia', 'D. Inggris'], 'jawaban' => 'C. Polandia'],
                ['judul' => 'Blok Sekutu vs Poros', 'type' => 'drag and drop', 'narasi' => 'PD II: Blok Sekutu (AS, Inggris, Soviet) melawan Blok Poros (Jerman, Italia, Jepang).', 'pertanyaan' => 'Pasangkan negara dengan bloknya dalam PD II', 'ilustrasi' => null, 'pilihan' => ['Amerika Serikat', 'Jerman Nazi', 'Jepang', 'Inggris'], 'jawaban' => ['Sekutu', 'Poros', 'Poros', 'Sekutu']],
                ['judul' => 'Akhir PD II', 'type' => 'quiz', 'narasi' => 'PD II berakhir 1945: Jerman menyerah 8 Mei, Jepang menyerah 15 Agustus setelah bom atom.', 'pertanyaan' => 'Jepang menyerah dalam PD II setelah bom atom dijatuhkan di...', 'ilustrasi' => null, 'pilihan' => ['A. Tokyo dan Osaka', 'B. Hiroshima dan Nagasaki', 'C. Kyoto dan Kobe', 'D. Yokohama dan Sendai'], 'jawaban' => 'B. Hiroshima dan Nagasaki'],
            ]],
            ['bab' => 3, 'judul' => 'Pergerakan Nasional Indonesia', 'soal' => [
                ['judul' => 'Kebangkitan Nasional', 'type' => 'quiz', 'narasi' => 'Kebangkitan Nasional ditandai berdirinya Budi Utomo pada 20 Mei 1908.', 'pertanyaan' => 'Organisasi yang menandai kebangkitan nasional Indonesia adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Sarekat Islam', 'B. Budi Utomo', 'C. Indische Partij', 'D. PKI'], 'jawaban' => 'B. Budi Utomo'],
                ['judul' => 'Sumpah Pemuda 1928', 'type' => 'drag and drop', 'narasi' => 'Sumpah Pemuda diikrarkan 28 Oktober 1928 dalam Kongres Pemuda II.', 'pertanyaan' => 'Lengkapi isi Sumpah Pemuda (satu tumpah darah, satu bangsa, satu bahasa...)', 'ilustrasi' => null, 'pilihan' => ['Satu nusa', 'Satu bangsa', 'Satu bahasa'], 'jawaban' => ['Indonesia', 'Indonesia', 'Indonesia']],
                ['judul' => 'Tokoh Pergerakan', 'type' => 'TTS', 'narasi' => 'Para tokoh pergerakan nasional berjuang melalui berbagai cara untuk meraih kemerdekaan.', 'pertanyaan' => ['Pendiri Budi Utomo yang juga dokter terkenal adalah Dr. ...', 'Tokoh PNI yang menjadi presiden pertama RI adalah ...', 'Tokoh Sarekat Islam yang terkenal adalah H.O.S. ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Soetomo', 'Soekarno', 'Cokroaminoto']],
            ]],
            ['bab' => 4, 'judul' => 'Proklamasi dan Revolusi Kemerdekaan', 'soal' => [
                ['judul' => 'Peristiwa Rengasdengklok', 'type' => 'quiz', 'narasi' => 'Pada 16 Agustus 1945, golongan muda membawa Soekarno-Hatta ke Rengasdengklok untuk mendesak proklamasi segera.', 'pertanyaan' => 'Tujuan golongan muda membawa Soekarno-Hatta ke Rengasdengklok adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Menyembunyikan dari Belanda', 'B. Mendesak proklamasi segera', 'C. Berunding dengan Jepang', 'D. Menghindari tentara Jepang'], 'jawaban' => 'B. Mendesak proklamasi segera'],
                ['judul' => 'Proklamasi 17 Agustus 1945', 'type' => 'drag and drop', 'narasi' => 'Teks proklamasi dibacakan Soekarno-Hatta di Jl. Pegangsaan Timur No. 56, Jakarta.', 'pertanyaan' => 'Susun kronologi peristiwa proklamasi', 'ilustrasi' => null, 'pilihan' => ['Pembacaan teks proklamasi', 'Rengasdengklok', 'Perumusan teks di rumah Maeda'], 'jawaban' => ['Rengasdengklok', 'Perumusan teks di rumah Maeda', 'Pembacaan teks proklamasi']],
                ['judul' => 'Pasca Proklamasi', 'type' => 'TTS', 'narasi' => 'Setelah proklamasi, Indonesia menghadapi perjuangan mempertahankan kemerdekaan.', 'pertanyaan' => ['Pertempuran dahsyat di Surabaya 10 November 1945 melawan ...', 'Tokoh pemuda Surabaya terkenal dalam pertempuran 10 November adalah ...', 'Perjanjian yang mengakui kemerdekaan Indonesia ditandatangani tahun ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Inggris dan Belanda', 'Bung Tomo', '1949']],
            ]],
            ['bab' => 5, 'judul' => 'Indonesia di Era Perang Dingin', 'soal' => [
                ['judul' => 'Perang Dingin', 'type' => 'quiz', 'narasi' => 'Perang Dingin (1947-1991) adalah ketegangan ideologi antara AS (kapitalisme) dan Uni Soviet (komunisme).', 'pertanyaan' => 'Perang Dingin adalah konflik antara...', 'ilustrasi' => null, 'pilihan' => ['A. AS dan Inggris', 'B. AS dan Uni Soviet', 'C. NATO dan Uni Soviet', 'D. AS dan Cina'], 'jawaban' => 'B. AS dan Uni Soviet'],
                ['judul' => 'Gerakan Non-Blok', 'type' => 'quiz', 'narasi' => 'Indonesia menjadi pendiri GNB melalui Konferensi Asia-Afrika (1955) di Bandung.', 'pertanyaan' => 'Konferensi Asia-Afrika cikal bakal GNB diadakan di...', 'ilustrasi' => null, 'pilihan' => ['A. Jakarta', 'B. Bandung', 'C. Surabaya', 'D. Yogyakarta'], 'jawaban' => 'B. Bandung'],
                ['judul' => 'Politik Luar Negeri Indonesia', 'type' => 'drag and drop', 'narasi' => 'Politik luar negeri Indonesia bersifat bebas-aktif: bebas dari pengaruh blok manapun, aktif menjaga perdamaian.', 'pertanyaan' => 'Pasangkan prinsip bebas-aktif dengan maknanya', 'ilustrasi' => null, 'pilihan' => ['Bebas', 'Aktif'], 'jawaban' => ['Tidak memihak blok manapun', 'Ikut serta menjaga perdamaian dunia']],
            ]],
        ];
    }

    private function bahasaKelas11(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Teks Prosedur', 'soal' => [
                ['judul' => 'Pengertian Teks Prosedur', 'type' => 'quiz', 'narasi' => 'Teks prosedur berisi langkah-langkah atau tahapan untuk melakukan sesuatu secara berurutan.', 'pertanyaan' => 'Ciri utama teks prosedur adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Bersifat naratif', 'B. Berisi langkah-langkah berurutan', 'C. Mengandung opini penulis', 'D. Bersifat deskriptif'], 'jawaban' => 'B. Berisi langkah-langkah berurutan'],
                ['judul' => 'Struktur Teks Prosedur', 'type' => 'drag and drop', 'narasi' => 'Teks prosedur memiliki struktur: tujuan, material/alat, dan langkah-langkah.', 'pertanyaan' => 'Urutkan struktur teks prosedur', 'ilustrasi' => null, 'pilihan' => ['Langkah-langkah', 'Material/alat', 'Tujuan'], 'jawaban' => ['Tujuan', 'Material/alat', 'Langkah-langkah']],
                ['judul' => 'Konjungsi Temporal', 'type' => 'TTS', 'narasi' => 'Teks prosedur banyak menggunakan konjungsi temporal untuk menunjukkan urutan langkah.', 'pertanyaan' => ['Kata penghubung urutan waktu disebut konjungsi ...', 'Contoh konjungsi temporal pertama adalah ...', 'Kata kemudian dan lalu termasuk konjungsi ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Temporal', 'Pertama', 'Temporal']],
            ]],
            ['bab' => 2, 'judul' => 'Teks Ceramah', 'soal' => [
                ['judul' => 'Pengertian Ceramah', 'type' => 'quiz', 'narasi' => 'Ceramah adalah pidato yang disampaikan kepada khalayak luas berisi nilai-nilai moral, agama, atau pengetahuan.', 'pertanyaan' => 'Perbedaan ceramah dengan pidato terletak pada...', 'ilustrasi' => null, 'pilihan' => ['A. Tidak ada perbedaan', 'B. Ceramah lebih pada nilai moral/agama, pidato lebih formal', 'C. Pidato lebih informal', 'D. Ceramah tidak menggunakan teks'], 'jawaban' => 'B. Ceramah lebih pada nilai moral/agama, pidato lebih formal'],
                ['judul' => 'Struktur Ceramah', 'type' => 'drag and drop', 'narasi' => 'Ceramah yang baik memiliki struktur pembuka, isi, dan penutup dengan fungsi masing-masing.', 'pertanyaan' => 'Pasangkan bagian ceramah dengan fungsinya', 'ilustrasi' => null, 'pilihan' => ['Pembuka', 'Isi', 'Penutup'], 'jawaban' => ['Salam dan menarik perhatian', 'Paparan materi pokok', 'Simpulan dan doa/harapan']],
                ['judul' => 'Teknik Ceramah', 'type' => 'quiz', 'narasi' => 'Penceramah yang baik menggunakan berbagai teknik termasuk intonasi, gestur, dan kontak mata.', 'pertanyaan' => 'Variasi naik-turunnya suara saat berbicara disebut...', 'ilustrasi' => null, 'pilihan' => ['A. Diksi', 'B. Intonasi', 'C. Artikulasi', 'D. Tempo'], 'jawaban' => 'B. Intonasi'],
            ]],
            ['bab' => 3, 'judul' => 'Novel dan Unsur-Unsurnya', 'soal' => [
                ['judul' => 'Unsur Intrinsik Novel', 'type' => 'drag and drop', 'narasi' => 'Novel dibangun oleh unsur intrinsik yang membentuk kesatuan cerita yang utuh.', 'pertanyaan' => 'Pasangkan unsur intrinsik dengan definisinya', 'ilustrasi' => null, 'pilihan' => ['Tema', 'Alur', 'Penokohan', 'Latar'], 'jawaban' => ['Gagasan pokok cerita', 'Rangkaian peristiwa', 'Penggambaran karakter tokoh', 'Waktu, tempat, suasana cerita']],
                ['judul' => 'Jenis Alur', 'type' => 'quiz', 'narasi' => 'Alur bisa maju (kronologis), mundur (flashback), atau campuran.', 'pertanyaan' => 'Novel yang menceritakan masa lalu lalu kembali ke masa kini menggunakan alur...', 'ilustrasi' => null, 'pilihan' => ['A. Maju', 'B. Mundur', 'C. Campuran', 'D. Progresif'], 'jawaban' => 'C. Campuran'],
                ['judul' => 'Teknik Penokohan', 'type' => 'TTS', 'narasi' => 'Pengarang memperkenalkan karakter tokoh melalui berbagai teknik yang membuat tokoh terasa hidup.', 'pertanyaan' => ['Penggambaran tokoh melalui deskripsi langsung disebut teknik ...', 'Penggambaran tokoh melalui dialog dan tindakan disebut teknik ...', 'Tokoh yang memiliki sifat baik disebut tokoh ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Analitik', 'Dramatik', 'Protagonis']],
            ]],
            ['bab' => 4, 'judul' => 'Drama dan Pementasan', 'soal' => [
                ['judul' => 'Pengertian Drama', 'type' => 'quiz', 'narasi' => 'Drama adalah karya sastra ditulis dalam bentuk dialog dan dirancang untuk dipentaskan.', 'pertanyaan' => 'Unsur yang membedakan drama dari karya sastra lain adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Memiliki tema', 'B. Ditulis dalam dialog untuk dipentaskan', 'C. Memiliki tokoh', 'D. Menggunakan bahasa yang indah'], 'jawaban' => 'B. Ditulis dalam dialog untuk dipentaskan'],
                ['judul' => 'Unsur Drama', 'type' => 'drag and drop', 'narasi' => 'Drama memiliki unsur-unsur yang saling mendukung untuk menciptakan pertunjukan bermakna.', 'pertanyaan' => 'Pasangkan unsur drama dengan definisinya', 'ilustrasi' => null, 'pilihan' => ['Babak', 'Adegan', 'Prolog', 'Dialog'], 'jawaban' => ['Bagian besar dalam drama', 'Bagian kecil dalam babak', 'Kata pembuka drama', 'Percakapan antar tokoh']],
                ['judul' => 'Konflik Drama', 'type' => 'quiz', 'narasi' => 'Konflik adalah pertentangan yang menjadi inti drama. Ada konflik internal dan eksternal.', 'pertanyaan' => 'Konflik yang terjadi dalam batin seorang tokoh disebut konflik...', 'ilustrasi' => null, 'pilihan' => ['A. Eksternal', 'B. Sosial', 'C. Internal', 'D. Fisik'], 'jawaban' => 'C. Internal'],
            ]],
            ['bab' => 5, 'judul' => 'Resensi Buku', 'soal' => [
                ['judul' => 'Pengertian Resensi', 'type' => 'quiz', 'narasi' => 'Resensi adalah penilaian atau ulasan terhadap sebuah buku mencakup identitas, isi, kelebihan, dan kekurangan.', 'pertanyaan' => 'Tujuan utama penulisan resensi adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Meringkas isi buku', 'B. Menilai dan memberikan informasi tentang karya', 'C. Menceritakan kembali isi buku', 'D. Melarang orang membaca buku'], 'jawaban' => 'B. Menilai dan memberikan informasi tentang karya'],
                ['judul' => 'Struktur Resensi', 'type' => 'drag and drop', 'narasi' => 'Resensi yang baik memiliki struktur lengkap agar pembaca mendapat gambaran menyeluruh.', 'pertanyaan' => 'Urutkan struktur resensi buku', 'ilustrasi' => null, 'pilihan' => ['Penilaian (kelebihan/kekurangan)', 'Identitas buku', 'Ringkasan isi'], 'jawaban' => ['Identitas buku', 'Ringkasan isi', 'Penilaian (kelebihan/kekurangan)']],
                ['judul' => 'Kalimat Penilaian', 'type' => 'TTS', 'narasi' => 'Dalam resensi, penulis menggunakan kalimat penilaian yang objektif berdasarkan analisis terhadap karya.', 'pertanyaan' => ['Ulasan terhadap sebuah karya disebut ...', 'Penilaian yang tidak memihak dan berdasarkan fakta disebut ...', 'Bagian resensi yang berisi simpulan nilai karya disebut ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Resensi', 'Objektif', 'Penutup']],
            ]],
        ];
    }

    private function pknKelas11(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Sistem Pemerintahan Indonesia', 'soal' => [
                ['judul' => 'Sistem Presidensial', 'type' => 'quiz', 'narasi' => 'Indonesia menganut sistem presidensial: presiden adalah kepala negara sekaligus kepala pemerintahan, masa jabatan 5 tahun.', 'pertanyaan' => 'Ciri khas sistem presidensial adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Presiden dipilih parlemen', 'B. Presiden dan parlemen terpisah kewenangannya', 'C. Presiden bisa dijatuhkan parlemen kapan saja', 'D. Kabinet bertanggung jawab kepada parlemen'], 'jawaban' => 'B. Presiden dan parlemen terpisah kewenangannya'],
                ['judul' => 'Lembaga Negara', 'type' => 'drag and drop', 'narasi' => 'Indonesia memiliki lembaga negara utama yang menjalankan fungsi pemerintahan berdasarkan UUD 1945.', 'pertanyaan' => 'Pasangkan lembaga negara dengan fungsinya', 'ilustrasi' => null, 'pilihan' => ['DPR', 'MA', 'KPK', 'BPK'], 'jawaban' => ['Legislasi dan pengawasan', 'Peradilan tertinggi', 'Pemberantasan korupsi', 'Audit keuangan negara']],
                ['judul' => 'Trias Politica', 'type' => 'TTS', 'narasi' => 'Konsep Trias Politica membagi kekuasaan negara menjadi tiga untuk mencegah penyalahgunaan.', 'pertanyaan' => ['Kekuasaan membuat undang-undang disebut kekuasaan ...', 'Kekuasaan menjalankan pemerintahan disebut kekuasaan ...', 'Kekuasaan mengadili disebut kekuasaan ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Legislatif', 'Eksekutif', 'Yudikatif']],
            ]],
            ['bab' => 2, 'judul' => 'Pemilihan Umum di Indonesia', 'soal' => [
                ['judul' => 'Prinsip Pemilu', 'type' => 'drag and drop', 'narasi' => 'Pemilu di Indonesia berlandaskan asas LUBER JURDIL: Langsung, Umum, Bebas, Rahasia, Jujur, dan Adil.', 'pertanyaan' => 'Pasangkan asas pemilu dengan maknanya', 'ilustrasi' => null, 'pilihan' => ['Langsung', 'Bebas', 'Rahasia'], 'jawaban' => ['Pemilih memilih tanpa perantara', 'Tidak ada paksaan dalam memilih', 'Pilihan tidak diketahui orang lain']],
                ['judul' => 'Lembaga Penyelenggara Pemilu', 'type' => 'quiz', 'narasi' => 'Pemilu diselenggarakan oleh KPU yang bersifat nasional, tetap, dan mandiri.', 'pertanyaan' => 'Lembaga yang bertugas mengawasi pelaksanaan pemilu adalah...', 'ilustrasi' => null, 'pilihan' => ['A. KPU', 'B. DKPP', 'C. Bawaslu', 'D. Mahkamah Konstitusi'], 'jawaban' => 'C. Bawaslu'],
                ['judul' => 'Partisipasi Pemilu', 'type' => 'quiz', 'narasi' => 'Partisipasi warga dalam pemilu adalah wujud nyata pelaksanaan demokrasi.', 'pertanyaan' => 'Usia minimal warga negara yang berhak memilih dalam pemilu adalah...', 'ilustrasi' => null, 'pilihan' => ['A. 15 tahun', 'B. 17 tahun', 'C. 18 tahun', 'D. 20 tahun'], 'jawaban' => 'B. 17 tahun'],
            ]],
            ['bab' => 3, 'judul' => 'Otonomi Daerah', 'soal' => [
                ['judul' => 'Pengertian Otonomi Daerah', 'type' => 'quiz', 'narasi' => 'Otonomi daerah adalah hak, wewenang, dan kewajiban daerah untuk mengatur dan mengurus sendiri urusan pemerintahan.', 'pertanyaan' => 'Tujuan utama otonomi daerah adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Memisahkan diri dari pusat', 'B. Meningkatkan kesejahteraan dan pelayanan masyarakat', 'C. Mengurangi pendapatan daerah', 'D. Menambah birokrasi'], 'jawaban' => 'B. Meningkatkan kesejahteraan dan pelayanan masyarakat'],
                ['judul' => 'Pembagian Urusan Pemerintahan', 'type' => 'drag and drop', 'narasi' => 'Urusan pemerintahan dibagi antara pusat dan daerah sesuai sifatnya.', 'pertanyaan' => 'Klasifikasikan urusan pemerintahan berikut', 'ilustrasi' => null, 'pilihan' => ['Pertahanan dan keamanan', 'Pendidikan dasar', 'Kebijakan luar negeri'], 'jawaban' => ['Urusan pusat', 'Urusan daerah', 'Urusan pusat']],
                ['judul' => 'Desentralisasi', 'type' => 'TTS', 'narasi' => 'Desentralisasi adalah pelimpahan wewenang dari pusat ke daerah.', 'pertanyaan' => ['Penyerahan urusan dari pusat ke daerah disebut ...', 'Kepala pemerintahan daerah tingkat provinsi disebut ...', 'Dana yang diberikan pusat ke daerah disebut ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Desentralisasi', 'Gubernur', 'Transfer daerah']],
            ]],
            ['bab' => 4, 'judul' => 'Hukum dan Penegakan Hukum', 'soal' => [
                ['judul' => 'Pengertian Hukum', 'type' => 'quiz', 'narasi' => 'Hukum adalah sistem aturan yang mengikat masyarakat dan memiliki sanksi tegas bagi pelanggarnya.', 'pertanyaan' => 'Ciri hukum yang membedakannya dari norma sosial adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Bersifat sukarela', 'B. Dibuat masyarakat', 'C. Memiliki sanksi yang tegas', 'D. Tidak tertulis'], 'jawaban' => 'C. Memiliki sanksi yang tegas'],
                ['judul' => 'Lembaga Penegak Hukum', 'type' => 'drag and drop', 'narasi' => 'Penegakan hukum dilakukan oleh berbagai lembaga dengan kewenangan masing-masing.', 'pertanyaan' => 'Pasangkan lembaga dengan fungsinya', 'ilustrasi' => null, 'pilihan' => ['Kepolisian', 'Kejaksaan', 'Kehakiman'], 'jawaban' => ['Penyelidikan dan penyidikan', 'Penuntutan perkara', 'Pengadilan dan pemutus perkara']],
                ['judul' => 'Peradilan di Indonesia', 'type' => 'quiz', 'narasi' => 'Sistem peradilan Indonesia: peradilan umum, agama, militer, dan tata usaha negara. MA adalah pengadilan tertinggi.', 'pertanyaan' => 'Pengadilan yang menangani sengketa antara warga negara dengan pemerintah adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Pengadilan Negeri', 'B. Pengadilan Agama', 'C. Pengadilan Tata Usaha Negara', 'D. Pengadilan Militer'], 'jawaban' => 'C. Pengadilan Tata Usaha Negara'],
            ]],
            ['bab' => 5, 'judul' => 'Hubungan Internasional', 'soal' => [
                ['judul' => 'Pengertian Hubungan Internasional', 'type' => 'quiz', 'narasi' => 'Hubungan internasional adalah interaksi antarnegara mencakup aspek politik, ekonomi, sosial, dan budaya.', 'pertanyaan' => 'Faktor yang mendorong terjadinya hubungan internasional adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Semua negara sudah mandiri', 'B. Keterbatasan setiap negara', 'C. Tidak ada konflik antarnegara', 'D. Semua negara kaya'], 'jawaban' => 'B. Keterbatasan setiap negara'],
                ['judul' => 'Organisasi Internasional', 'type' => 'drag and drop', 'narasi' => 'Indonesia aktif dalam berbagai organisasi internasional sebagai wujud politik bebas-aktif.', 'pertanyaan' => 'Pasangkan organisasi internasional dengan bidangnya', 'ilustrasi' => null, 'pilihan' => ['PBB', 'ASEAN', 'IMF'], 'jawaban' => ['Perdamaian dan keamanan dunia', 'Kerjasama Asia Tenggara', 'Keuangan dan ekonomi internasional']],
                ['judul' => 'Peran Indonesia di Dunia', 'type' => 'TTS', 'narasi' => 'Indonesia aktif berkontribusi dalam menjaga perdamaian dan stabilitas dunia.', 'pertanyaan' => ['Pasukan perdamaian Indonesia yang dikirim ke luar negeri disebut ...', 'Indonesia menjadi anggota pendiri organisasi negara berkembang yaitu ...', 'Prinsip politik luar negeri Indonesia adalah bebas dan ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Garuda', 'G77', 'Aktif']],
            ]],
        ];
    }

    // =========================================================================
    // DATA — KELAS 12
    // =========================================================================

    private function mtkKelas12(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Statistika Lanjutan', 'soal' => [
                ['judul' => 'Distribusi Normal', 'type' => 'quiz', 'narasi' => 'Distribusi normal adalah distribusi probabilitas simetris berbentuk lonceng dengan mean = median = modus.', 'pertanyaan' => 'Pada kurva normal, sekitar berapa persen data berada di antara µ-σ dan µ+σ?', 'ilustrasi' => null, 'pilihan' => ['A. 50%', 'B. 68%', 'C. 95%', 'D. 99%'], 'jawaban' => 'B. 68%'],
                ['judul' => 'Regresi Linear', 'type' => 'quiz', 'narasi' => 'Regresi linear menentukan hubungan linier antara variabel bebas (x) dan terikat (y). Persamaan: ŷ = a + bx.', 'pertanyaan' => 'Dalam persamaan regresi ŷ = a + bx, huruf b merupakan...', 'ilustrasi' => null, 'pilihan' => ['A. Konstanta', 'B. Intersep', 'C. Koefisien regresi/kemiringan', 'D. Nilai rata-rata'], 'jawaban' => 'C. Koefisien regresi/kemiringan'],
                ['judul' => 'Korelasi', 'type' => 'drag and drop', 'narasi' => 'Korelasi mengukur kekuatan dan arah hubungan antara dua variabel. Nilai r antara -1 hingga 1.', 'pertanyaan' => 'Pasangkan nilai korelasi dengan interpretasinya', 'ilustrasi' => null, 'pilihan' => ['r = 1', 'r = 0', 'r = -1'], 'jawaban' => ['Korelasi positif sempurna', 'Tidak ada korelasi', 'Korelasi negatif sempurna']],
            ]],
            ['bab' => 2, 'judul' => 'Kalkulus Lanjutan', 'soal' => [
                ['judul' => 'Integral Parsial', 'type' => 'quiz', 'narasi' => 'Integral parsial digunakan untuk mengintegralkan perkalian dua fungsi. Rumus: ∫u dv = uv - ∫v du.', 'pertanyaan' => 'Metode integrasi untuk mengintegralkan perkalian dua fungsi adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Substitusi', 'B. Parsial', 'C. Trigonometri', 'D. Numerik'], 'jawaban' => 'B. Parsial'],
                ['judul' => 'Volume Benda Putar', 'type' => 'quiz', 'narasi' => 'Volume benda putar: V = π ∫ₐᵇ [f(x)]² dx (metode cakram/disk).', 'pertanyaan' => 'Rumus volume benda putar terhadap sumbu x menggunakan metode...', 'ilustrasi' => null, 'pilihan' => ['A. Prisma', 'B. Cakram (disk)', 'C. Kulit tabung', 'D. Irisan'], 'jawaban' => 'B. Cakram (disk)'],
                ['judul' => 'Persamaan Diferensial', 'type' => 'drag and drop', 'narasi' => 'Persamaan diferensial memuat turunan dari suatu fungsi, digunakan dalam fisika dan teknik.', 'pertanyaan' => 'Pasangkan jenis persamaan diferensial dengan contohnya', 'ilustrasi' => null, 'pilihan' => ['Orde satu', 'Orde dua', 'Linier'], 'jawaban' => ['dy/dx = f(x)', 'd²y/dx² + y = 0', 'ay\'\' + by\' + cy = f(x)']],
            ]],
            ['bab' => 3, 'judul' => 'Program Linear', 'soal' => [
                ['judul' => 'Model Program Linear', 'type' => 'quiz', 'narasi' => 'Program linear mengoptimalkan fungsi tujuan linear dengan kendala-kendala yang juga linear.', 'pertanyaan' => 'Dalam program linear, fungsi yang ingin dioptimalkan disebut...', 'ilustrasi' => null, 'pilihan' => ['A. Fungsi kendala', 'B. Fungsi tujuan', 'C. Fungsi linear', 'D. Fungsi objektif parabola'], 'jawaban' => 'B. Fungsi tujuan'],
                ['judul' => 'Metode Grafik', 'type' => 'drag and drop', 'narasi' => 'Metode grafik digunakan untuk menyelesaikan program linear dua variabel.', 'pertanyaan' => 'Urutkan langkah penyelesaian program linear dengan metode grafik', 'ilustrasi' => null, 'pilihan' => ['Uji titik pojok', 'Gambar daerah feasible', 'Tentukan fungsi tujuan'], 'jawaban' => ['Tentukan fungsi tujuan', 'Gambar daerah feasible', 'Uji titik pojok']],
                ['judul' => 'Titik Optimal', 'type' => 'quiz', 'narasi' => 'Nilai optimal program linear selalu terjadi di salah satu titik pojok (vertex) dari daerah feasible.', 'pertanyaan' => 'Nilai optimal program linear terdapat pada...', 'ilustrasi' => null, 'pilihan' => ['A. Sembarang titik', 'B. Titik tengah daerah feasible', 'C. Salah satu titik pojok daerah feasible', 'D. Titik asal (0,0)'], 'jawaban' => 'C. Salah satu titik pojok daerah feasible'],
            ]],
            ['bab' => 4, 'judul' => 'Kombinatorika', 'soal' => [
                ['judul' => 'Permutasi', 'type' => 'quiz', 'narasi' => 'Permutasi adalah susunan elemen di mana urutan diperhatikan. P(n,r) = n!/(n-r)!', 'pertanyaan' => 'Banyaknya cara menyusun 3 buku dari 5 buku berbeda (urutan penting) adalah...', 'ilustrasi' => null, 'pilihan' => ['A. 10', 'B. 20', 'C. 60', 'D. 120'], 'jawaban' => 'C. 60'],
                ['judul' => 'Kombinasi', 'type' => 'quiz', 'narasi' => 'Kombinasi adalah pemilihan elemen di mana urutan TIDAK diperhatikan. C(n,r) = n!/[r!(n-r)!]', 'pertanyaan' => 'Banyaknya cara memilih 3 orang dari 5 orang untuk satu tim adalah...', 'ilustrasi' => null, 'pilihan' => ['A. 6', 'B. 10', 'C. 20', 'D. 60'], 'jawaban' => 'B. 10'],
                ['judul' => 'Permutasi vs Kombinasi', 'type' => 'drag and drop', 'narasi' => 'Permutasi memperhatikan urutan, kombinasi tidak — pilih berdasarkan konteks soal.', 'pertanyaan' => 'Klasifikasikan masalah berikut', 'ilustrasi' => null, 'pilihan' => ['Menyusun password 4 digit', 'Memilih 3 pemenang undian', 'Memilih delegasi dari 10 siswa'], 'jawaban' => ['Permutasi', 'Kombinasi', 'Kombinasi']],
            ]],
            ['bab' => 5, 'judul' => 'Peluang Lanjutan', 'soal' => [
                ['judul' => 'Peluang Bersyarat', 'type' => 'quiz', 'narasi' => 'Peluang bersyarat P(A|B) adalah peluang terjadinya A dengan syarat B sudah terjadi. Rumus: P(A|B) = P(A∩B)/P(B).', 'pertanyaan' => 'Notasi P(A|B) dibaca sebagai...', 'ilustrasi' => null, 'pilihan' => ['A. Peluang A dan B', 'B. Peluang A atau B', 'C. Peluang A jika B terjadi', 'D. Peluang B jika A terjadi'], 'jawaban' => 'C. Peluang A jika B terjadi'],
                ['judul' => 'Kejadian Bebas', 'type' => 'quiz', 'narasi' => 'Dua kejadian A dan B independen jika P(A∩B) = P(A) × P(B).', 'pertanyaan' => 'Dua kejadian A dan B independen jika P(A∩B) = ...', 'ilustrasi' => null, 'pilihan' => ['A. P(A) + P(B)', 'B. P(A) × P(B)', 'C. P(A) - P(B)', 'D. P(A) / P(B)'], 'jawaban' => 'B. P(A) × P(B)'],
                ['judul' => 'Konsep Peluang Lanjut', 'type' => 'drag and drop', 'narasi' => 'Berbagai konsep peluang lanjutan digunakan dalam statistika dan probabilitas.', 'pertanyaan' => 'Pasangkan konsep peluang dengan penggunaannya', 'ilustrasi' => null, 'pilihan' => ['Peluang bersyarat', 'Kejadian saling lepas', 'Komplemen kejadian'], 'jawaban' => ['Satu kejadian bergantung pada kejadian lain', 'P(A∪B) = P(A)+P(B)', 'P(Aᶜ) = 1 - P(A)']],
            ]],
        ];
    }

    private function ipaKelas12(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Genetika dan Pewarisan Sifat', 'soal' => [
                ['judul' => 'Hukum Mendel', 'type' => 'drag and drop', 'narasi' => 'Gregor Mendel menemukan hukum pewarisan sifat melalui percobaan kacang ercis.', 'pertanyaan' => 'Pasangkan Hukum Mendel dengan isinya', 'ilustrasi' => null, 'pilihan' => ['Hukum I Mendel', 'Hukum II Mendel'], 'jawaban' => ['Alel memisah saat pembentukan gamet', 'Alel mengelompok secara bebas']],
                ['judul' => 'Genotip dan Fenotip', 'type' => 'quiz', 'narasi' => 'Genotip adalah susunan genetik organisme. Fenotip adalah sifat yang tampak.', 'pertanyaan' => 'Individu yang memiliki genotip Aa disebut...', 'ilustrasi' => null, 'pilihan' => ['A. Homozigot dominan', 'B. Homozigot resesif', 'C. Heterozigot', 'D. Mutan'], 'jawaban' => 'C. Heterozigot'],
                ['judul' => 'Mutasi', 'type' => 'TTS', 'narasi' => 'Mutasi adalah perubahan pada materi genetik (DNA) yang dapat diturunkan.', 'pertanyaan' => ['Perubahan pada urutan basa DNA disebut mutasi ...', 'Penyebab mutasi dari luar disebut ...', 'Mutasi yang menguntungkan dimanfaatkan dalam bidang ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Gen', 'Mutagen', 'Pertanian']],
            ]],
            ['bab' => 2, 'judul' => 'Evolusi', 'soal' => [
                ['judul' => 'Teori Evolusi Darwin', 'type' => 'quiz', 'narasi' => 'Darwin mengemukakan teori evolusi berdasarkan seleksi alam: yang beradaptasi bertahan, yang tidak punah.', 'pertanyaan' => 'Mekanisme utama evolusi menurut Darwin adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Pewarisan sifat yang diperoleh', 'B. Seleksi alam', 'C. Mutasi acak', 'D. Rekombinasi genetik'], 'jawaban' => 'B. Seleksi alam'],
                ['judul' => 'Bukti Evolusi', 'type' => 'drag and drop', 'narasi' => 'Evolusi didukung berbagai bukti ilmiah dari berbagai cabang ilmu pengetahuan.', 'pertanyaan' => 'Pasangkan bukti evolusi dengan bidang ilmunya', 'ilustrasi' => null, 'pilihan' => ['Fosil', 'Homologi organ', 'Embriologi perbandingan'], 'jawaban' => ['Paleontologi', 'Anatomi perbandingan', 'Embriologi']],
                ['judul' => 'Spesiasi', 'type' => 'quiz', 'narasi' => 'Spesiasi adalah proses terbentuknya spesies baru dari spesies yang sudah ada.', 'pertanyaan' => 'Spesiasi karena pemisahan populasi oleh penghalang geografis disebut spesiasi...', 'ilustrasi' => null, 'pilihan' => ['A. Simpatrik', 'B. Parapatrik', 'C. Alopatrik', 'D. Peripatrik'], 'jawaban' => 'C. Alopatrik'],
            ]],
            ['bab' => 3, 'judul' => 'Bioteknologi', 'soal' => [
                ['judul' => 'Bioteknologi Konvensional vs Modern', 'type' => 'drag and drop', 'narasi' => 'Bioteknologi konvensional menggunakan cara tradisional, modern memanfaatkan rekayasa genetika.', 'pertanyaan' => 'Klasifikasikan contoh bioteknologi berikut', 'ilustrasi' => null, 'pilihan' => ['Pembuatan tempe', 'Kloning domba Dolly', 'Insulin rekombinan'], 'jawaban' => ['Konvensional', 'Modern', 'Modern']],
                ['judul' => 'Rekayasa Genetika', 'type' => 'quiz', 'narasi' => 'Rekayasa genetika adalah teknik manipulasi gen untuk mengubah karakteristik organisme.', 'pertanyaan' => 'Teknik yang digunakan untuk memperbanyak fragmen DNA secara in vitro adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Elektroforesis', 'B. PCR (Polymerase Chain Reaction)', 'C. Sentrifugasi', 'D. Kromatografi'], 'jawaban' => 'B. PCR (Polymerase Chain Reaction)'],
                ['judul' => 'Aplikasi Bioteknologi', 'type' => 'TTS', 'narasi' => 'Bioteknologi diaplikasikan dalam berbagai bidang kehidupan manusia.', 'pertanyaan' => ['Tanaman yang gennya dimodifikasi disebut tanaman ...', 'Penggunaan organisme untuk membersihkan polutan disebut ...', 'Produksi insulin dengan bakteri menggunakan teknik ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Transgenik', 'Bioremediasi', 'Rekayasa genetika']],
            ]],
            ['bab' => 4, 'judul' => 'Fisika Modern', 'soal' => [
                ['judul' => 'Teori Relativitas', 'type' => 'quiz', 'narasi' => 'Einstein: kecepatan cahaya konstan bagi semua pengamat, massa dapat diubah menjadi energi (E=mc²).', 'pertanyaan' => 'Persamaan Einstein yang menyatakan kesetaraan massa dan energi adalah...', 'ilustrasi' => null, 'pilihan' => ['A. E = mv²', 'B. E = mc²', 'C. E = ½mv²', 'D. E = mgh'], 'jawaban' => 'B. E = mc²'],
                ['judul' => 'Fisika Kuantum', 'type' => 'quiz', 'narasi' => 'Max Planck menemukan bahwa energi dipancarkan dalam paket-paket diskrit yang disebut kuanta.', 'pertanyaan' => 'Satuan energi diskrit dalam fisika kuantum disebut...', 'ilustrasi' => null, 'pilihan' => ['A. Foton', 'B. Elektron', 'C. Kuantum', 'D. Neutron'], 'jawaban' => 'C. Kuantum'],
                ['judul' => 'Radioaktivitas', 'type' => 'drag and drop', 'narasi' => 'Radioaktivitas adalah peluruhan spontan inti atom tidak stabil dengan memancarkan radiasi: alfa, beta, gamma.', 'pertanyaan' => 'Pasangkan jenis radiasi dengan sifatnya', 'ilustrasi' => null, 'pilihan' => ['Radiasi alfa (α)', 'Radiasi beta (β)', 'Radiasi gamma (γ)'], 'jawaban' => ['Partikel berat, daya tembus rendah', 'Elektron, daya tembus sedang', 'Gelombang EM, daya tembus tinggi']],
            ]],
            ['bab' => 5, 'judul' => 'Kimia Organik', 'soal' => [
                ['judul' => 'Hidrokarbon', 'type' => 'drag and drop', 'narasi' => 'Hidrokarbon adalah senyawa organik yang hanya mengandung atom C dan H.', 'pertanyaan' => 'Pasangkan jenis hidrokarbon dengan contohnya', 'ilustrasi' => null, 'pilihan' => ['Alkana', 'Alkena', 'Alkuna', 'Benzena'], 'jawaban' => ['CH₄ (metana)', 'C₂H₄ (etena)', 'C₂H₂ (etuna)', 'C₆H₆ (benzena)']],
                ['judul' => 'Reaksi Organik', 'type' => 'quiz', 'narasi' => 'Reaksi organik meliputi substitusi, adisi, eliminasi, dan oksidasi-reduksi.', 'pertanyaan' => 'Reaksi penggantian atom/gugus dalam senyawa organik disebut reaksi...', 'ilustrasi' => null, 'pilihan' => ['A. Adisi', 'B. Eliminasi', 'C. Substitusi', 'D. Kondensasi'], 'jawaban' => 'C. Substitusi'],
                ['judul' => 'Polimer', 'type' => 'TTS', 'narasi' => 'Polimer adalah makromolekul dari pengulangan unit monomer. Ada polimer alami dan buatan.', 'pertanyaan' => ['Unit ulang pembentuk polimer disebut ...', 'Polimer dari minyak bumi biasanya digunakan sebagai ...', 'Reaksi pembentukan polimer dari monomer disebut reaksi ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Monomer', 'Plastik', 'Polimerisasi']],
            ]],
        ];
    }

    private function ipsKelas12(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Ekonomi Makro', 'soal' => [
                ['judul' => 'Pendapatan Nasional', 'type' => 'drag and drop', 'narasi' => 'Pendapatan nasional mengukur total nilai barang dan jasa yang diproduksi negara melalui tiga pendekatan.', 'pertanyaan' => 'Pasangkan pendekatan pendapatan nasional dengan rumusnya', 'ilustrasi' => null, 'pilihan' => ['Pendekatan produksi', 'Pendekatan pendapatan', 'Pendekatan pengeluaran'], 'jawaban' => ['Jumlah nilai tambah semua sektor', 'W + R + I + P', 'C + I + G + (X-M)']],
                ['judul' => 'Inflasi dan Pengangguran', 'type' => 'quiz', 'narasi' => 'Inflasi adalah kenaikan harga umum secara terus-menerus. Ada demand-pull dan cost-push inflation.', 'pertanyaan' => 'Inflasi yang disebabkan oleh kenaikan biaya produksi disebut...', 'ilustrasi' => null, 'pilihan' => ['A. Demand-pull inflation', 'B. Cost-push inflation', 'C. Stagflasi', 'D. Hiperinflasi'], 'jawaban' => 'B. Cost-push inflation'],
                ['judul' => 'Kebijakan Ekonomi Makro', 'type' => 'drag and drop', 'narasi' => 'Pemerintah dan bank sentral menggunakan kebijakan fiskal dan moneter untuk menstabilkan perekonomian.', 'pertanyaan' => 'Pasangkan jenis kebijakan dengan instrumennya', 'ilustrasi' => null, 'pilihan' => ['Kebijakan fiskal', 'Kebijakan moneter'], 'jawaban' => ['Pajak dan belanja pemerintah', 'Suku bunga dan jumlah uang beredar']],
            ]],
            ['bab' => 2, 'judul' => 'Pasar Modal dan Keuangan', 'soal' => [
                ['judul' => 'Pasar Modal', 'type' => 'quiz', 'narasi' => 'Pasar modal adalah tempat bertemunya penjual dan pembeli instrumen keuangan jangka panjang (saham, obligasi, reksa dana).', 'pertanyaan' => 'Instrumen pasar modal yang mewakili kepemilikan dalam suatu perusahaan adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Obligasi', 'B. Deposito', 'C. Saham', 'D. SBI'], 'jawaban' => 'C. Saham'],
                ['judul' => 'Lembaga Keuangan', 'type' => 'drag and drop', 'narasi' => 'Sistem keuangan Indonesia terdiri dari lembaga perbankan dan non-perbankan yang diawasi OJK.', 'pertanyaan' => 'Pasangkan lembaga keuangan dengan fungsi utamanya', 'ilustrasi' => null, 'pilihan' => ['Bank Umum', 'Asuransi', 'Pegadaian'], 'jawaban' => ['Simpan pinjam dan pembayaran', 'Perlindungan risiko', 'Pinjaman dengan jaminan barang']],
                ['judul' => 'Investasi', 'type' => 'TTS', 'narasi' => 'Investasi adalah penanaman modal dengan harapan mendapat keuntungan di masa depan.', 'pertanyaan' => ['Keuntungan dari kepemilikan saham disebut ...', 'Surat utang yang diterbitkan pemerintah/perusahaan disebut ...', 'Investasi yang dikelola secara kolektif oleh manajer investasi disebut ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Dividen', 'Obligasi', 'Reksa dana']],
            ]],
            ['bab' => 3, 'judul' => 'Kerjasama Ekonomi Internasional', 'soal' => [
                ['judul' => 'Organisasi Ekonomi Internasional', 'type' => 'drag and drop', 'narasi' => 'Berbagai organisasi ekonomi internasional dibentuk untuk mendorong kerjasama dan mengatur perdagangan antarnegara.', 'pertanyaan' => 'Pasangkan organisasi dengan perannya', 'ilustrasi' => null, 'pilihan' => ['WTO', 'IMF', 'World Bank'], 'jawaban' => ['Mengatur perdagangan internasional', 'Stabilitas keuangan internasional', 'Pembiayaan pembangunan negara']],
                ['judul' => 'Neraca Pembayaran', 'type' => 'quiz', 'narasi' => 'Neraca pembayaran adalah catatan semua transaksi ekonomi antara penduduk suatu negara dengan penduduk negara lain.', 'pertanyaan' => 'Komponen utama neraca pembayaran yang mencatat perdagangan barang disebut...', 'ilustrasi' => null, 'pilihan' => ['A. Neraca jasa', 'B. Neraca perdagangan', 'C. Neraca modal', 'D. Neraca finansial'], 'jawaban' => 'B. Neraca perdagangan'],
                ['judul' => 'Nilai Tukar', 'type' => 'quiz', 'narasi' => 'Nilai tukar (kurs) adalah harga suatu mata uang dalam mata uang negara lain, mempengaruhi ekspor dan impor.', 'pertanyaan' => 'Melemahnya rupiah terhadap dolar akan berdampak pada...', 'ilustrasi' => null, 'pilihan' => ['A. Ekspor semakin murah bagi pembeli asing', 'B. Impor semakin murah', 'C. Utang luar negeri berkurang', 'D. Harga dalam negeri turun'], 'jawaban' => 'A. Ekspor semakin murah bagi pembeli asing'],
            ]],
            ['bab' => 4, 'judul' => 'Pembangunan Berkelanjutan', 'soal' => [
                ['judul' => 'SDGs', 'type' => 'quiz', 'narasi' => 'SDGs (Sustainable Development Goals) adalah 17 tujuan pembangunan berkelanjutan yang disepakati PBB pada 2015.', 'pertanyaan' => 'SDGs merupakan agenda pembangunan yang disepakati oleh...', 'ilustrasi' => null, 'pilihan' => ['A. G20', 'B. PBB', 'C. IMF', 'D. ASEAN'], 'jawaban' => 'B. PBB'],
                ['judul' => 'Ekonomi Hijau', 'type' => 'drag and drop', 'narasi' => 'Ekonomi hijau berupaya meningkatkan kesejahteraan manusia sekaligus mengurangi risiko lingkungan.', 'pertanyaan' => 'Pasangkan konsep ekonomi hijau dengan contohnya', 'ilustrasi' => null, 'pilihan' => ['Energi terbarukan', 'Ekonomi sirkular', 'Pertanian organik'], 'jawaban' => ['Menggantikan bahan bakar fosil', 'Daur ulang dan penggunaan kembali', 'Tanpa pestisida kimia berbahaya']],
                ['judul' => 'Kesenjangan Ekonomi', 'type' => 'TTS', 'narasi' => 'Kesenjangan ekonomi adalah perbedaan mencolok antara kelompok kaya dan miskin dalam masyarakat.', 'pertanyaan' => ['Indeks yang mengukur ketimpangan pendapatan disebut indeks ...', 'Program pemerintah untuk mengurangi kemiskinan melalui bantuan langsung disebut ...', 'Kondisi tidak mampu memenuhi kebutuhan dasar disebut ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Gini', 'Bansos', 'Kemiskinan']],
            ]],
            ['bab' => 5, 'judul' => 'Kewirausahaan', 'soal' => [
                ['judul' => 'Konsep Kewirausahaan', 'type' => 'quiz', 'narasi' => 'Wirausahawan menciptakan usaha baru dengan menanggung risiko untuk mendapat keuntungan dan pertumbuhan.', 'pertanyaan' => 'Karakteristik utama wirausahawan yang sukses adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Menghindari risiko', 'B. Bergantung pada orang lain', 'C. Berani mengambil risiko terukur', 'D. Meniru usaha yang sudah ada'], 'jawaban' => 'C. Berani mengambil risiko terukur'],
                ['judul' => 'Rencana Bisnis', 'type' => 'drag and drop', 'narasi' => 'Rencana bisnis (business plan) menggambarkan tujuan bisnis, strategi, dan langkah-langkah pencapaiannya.', 'pertanyaan' => 'Pasangkan komponen rencana bisnis dengan isinya', 'ilustrasi' => null, 'pilihan' => ['Analisis SWOT', 'Target pasar', 'Proyeksi keuangan'], 'jawaban' => ['Kekuatan, kelemahan, peluang, ancaman', 'Segmen pelanggan yang dituju', 'Perkiraan pendapatan dan biaya']],
                ['judul' => 'Strategi Pemasaran', 'type' => 'TTS', 'narasi' => 'Strategi pemasaran yang efektif mencakup bauran pemasaran (marketing mix) 4P.', 'pertanyaan' => ['Empat elemen bauran pemasaran disebut ...P', 'Penetapan harga dalam bauran pemasaran disebut ...', 'Strategi mempromosikan produk ke pasar disebut ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Empat', 'Price', 'Promosi']],
            ]],
        ];
    }

    private function sejarahKelas12(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Indonesia Masa Orde Lama', 'soal' => [
                ['judul' => 'Demokrasi Liberal 1950-1959', 'type' => 'quiz', 'narasi' => 'Masa Demokrasi Liberal (1950-1959) ditandai sistem multipartai dan 7 kabinet yang berganti dalam 9 tahun.', 'pertanyaan' => 'Penyebab utama sering bergantinya kabinet pada Demokrasi Liberal adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Bencana alam', 'B. Sistem multipartai dan mosi tidak percaya parlemen', 'C. Tekanan militer', 'D. Intervensi asing'], 'jawaban' => 'B. Sistem multipartai dan mosi tidak percaya parlemen'],
                ['judul' => 'Dekrit Presiden 5 Juli 1959', 'type' => 'quiz', 'narasi' => 'Dekrit Presiden 5 Juli 1959 membubarkan Konstituante dan memberlakukan kembali UUD 1945.', 'pertanyaan' => 'Isi Dekrit Presiden 5 Juli 1959 adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Membubarkan parlemen', 'B. Kembali ke UUD 1945 dan bubarkan Konstituante', 'C. Menyatakan keadaan darurat', 'D. Membentuk kabinet baru'], 'jawaban' => 'B. Kembali ke UUD 1945 dan bubarkan Konstituante'],
                ['judul' => 'Demokrasi Terpimpin', 'type' => 'TTS', 'narasi' => 'Masa Demokrasi Terpimpin (1959-1966) ditandai dominasi Presiden Soekarno.', 'pertanyaan' => ['Konsep Soekarno yang menyatukan Nasionalis, Agama, dan Komunis disebut ...', 'Gerakan 30 September 1965 yang menewaskan jenderal-jenderal TNI disebut ...', 'Tahun berakhirnya kekuasaan Soekarno adalah ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['NASAKOM', 'G30S/PKI', '1966']],
            ]],
            ['bab' => 2, 'judul' => 'Indonesia Masa Orde Baru', 'soal' => [
                ['judul' => 'Awal Orde Baru', 'type' => 'quiz', 'narasi' => 'Orde Baru dimulai setelah Supersemar (Surat Perintah Sebelas Maret 1966) yang diberikan kepada Soeharto.', 'pertanyaan' => 'Supersemar diberikan kepada Soeharto pada tanggal...', 'ilustrasi' => null, 'pilihan' => ['A. 1 Maret 1966', 'B. 11 Maret 1966', 'C. 5 Juli 1966', 'D. 17 Agustus 1966'], 'jawaban' => 'B. 11 Maret 1966'],
                ['judul' => 'Pembangunan Ekonomi Orde Baru', 'type' => 'drag and drop', 'narasi' => 'Orde Baru berhasil mencapai pertumbuhan ekonomi signifikan melalui program Repelita dan Revolusi Hijau.', 'pertanyaan' => 'Pasangkan program Orde Baru dengan hasilnya', 'ilustrasi' => null, 'pilihan' => ['Repelita', 'Revolusi Hijau', 'KB (Keluarga Berencana)'], 'jawaban' => ['Pembangunan bertahap 5 tahunan', 'Swasembada pangan', 'Pengendalian laju pertumbuhan penduduk']],
                ['judul' => 'Runtuhnya Orde Baru', 'type' => 'quiz', 'narasi' => 'Orde Baru runtuh Mei 1998 akibat krisis ekonomi Asia 1997-1998 dan demonstrasi mahasiswa besar-besaran.', 'pertanyaan' => 'Peristiwa yang menjadi pemicu demonstrasi besar menjelang kejatuhan Soeharto adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Bom Bali', 'B. Tragedi Trisakti', 'C. Peristiwa Tanjung Priok', 'D. Peristiwa Semanggi'], 'jawaban' => 'B. Tragedi Trisakti'],
            ]],
            ['bab' => 3, 'judul' => 'Reformasi dan Indonesia Modern', 'soal' => [
                ['judul' => 'Era Reformasi', 'type' => 'drag and drop', 'narasi' => 'Era Reformasi dimulai setelah Soeharto mundur. Agenda reformasi mencakup demokratisasi, desentralisasi, dan penegakan hukum.', 'pertanyaan' => 'Pasangkan agenda reformasi dengan wujud nyatanya', 'ilustrasi' => null, 'pilihan' => ['Demokratisasi', 'Desentralisasi', 'Kebebasan pers'], 'jawaban' => ['Pemilu langsung presiden', 'Otonomi daerah', 'Pencabutan SIUPP media']],
                ['judul' => 'Amandemen UUD 1945', 'type' => 'quiz', 'narasi' => 'Amandemen UUD 1945 sebanyak 4 kali (1999-2002) memperkuat checks and balances dan HAM.', 'pertanyaan' => 'Perubahan terpenting dari amandemen UUD 1945 adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Presiden dipilih parlemen', 'B. Presiden dipilih langsung rakyat', 'C. Menghapus DPR', 'D. Kembali ke UUD sementara'], 'jawaban' => 'B. Presiden dipilih langsung rakyat'],
                ['judul' => 'Indonesia di Abad 21', 'type' => 'TTS', 'narasi' => 'Indonesia terus berkembang sebagai negara demokrasi terbesar di Asia Tenggara.', 'pertanyaan' => ['Pemilu presiden langsung pertama di Indonesia dilaksanakan tahun ...', 'Indonesia menjadi anggota kelompok negara ekonomi besar yang disebut ...', 'Presiden Indonesia yang terpilih dua periode 2014 dan 2019 adalah ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['2004', 'G20', 'Jokowi']],
            ]],
            ['bab' => 4, 'judul' => 'Sejarah Asia dan Pasifik', 'soal' => [
                ['judul' => 'Kebangkitan Asia Timur', 'type' => 'quiz', 'narasi' => 'Asia Timur mengalami pertumbuhan ekonomi pesat pada abad 20-21 yang disebut keajaiban ekonomi Asia Timur.', 'pertanyaan' => 'Negara Asia yang menjadi kekuatan ekonomi terbesar kedua dunia adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Jepang', 'B. Korea Selatan', 'C. China', 'D. India'], 'jawaban' => 'C. China'],
                ['judul' => 'Konflik di Asia Pasifik', 'type' => 'drag and drop', 'narasi' => 'Kawasan Asia Pasifik mengalami berbagai konflik sejak abad 20, baik bersenjata maupun ketegangan politik.', 'pertanyaan' => 'Pasangkan konflik dengan negara/kawasannya', 'ilustrasi' => null, 'pilihan' => ['Perang Korea', 'Perang Vietnam', 'Konflik Laut China Selatan'], 'jawaban' => ['Korea Utara vs Korea Selatan', 'AS vs Vietnam Utara', 'Klaim teritorial China vs negara ASEAN']],
                ['judul' => 'ASEAN', 'type' => 'TTS', 'narasi' => 'ASEAN (Association of Southeast Asian Nations) didirikan 8 Agustus 1967 di Bangkok oleh 5 negara pendiri.', 'pertanyaan' => ['ASEAN didirikan oleh ... negara pendiri', 'Negara pendiri ASEAN dari Asia Tenggara daratan adalah ...', 'Visi ASEAN 2025 adalah ASEAN ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Lima', 'Thailand', 'Community']],
            ]],
            ['bab' => 5, 'judul' => 'Sejarah Kontemporer Dunia', 'soal' => [
                ['judul' => 'Runtuhnya Uni Soviet', 'type' => 'quiz', 'narasi' => 'Uni Soviet runtuh 25 Desember 1991, menandai berakhirnya Perang Dingin dan lahirnya 15 negara merdeka baru.', 'pertanyaan' => 'Perang Dingin berakhir dengan runtuhnya...', 'ilustrasi' => null, 'pilihan' => ['A. Tembok Berlin saja', 'B. Uni Soviet', 'C. NATO', 'D. Pakta Warsawa'], 'jawaban' => 'B. Uni Soviet'],
                ['judul' => 'Konflik Timur Tengah', 'type' => 'drag and drop', 'narasi' => 'Timur Tengah sering dilanda konflik akibat perebutan sumber daya minyak dan persaingan pengaruh.', 'pertanyaan' => 'Pasangkan peristiwa dengan tahun terjadinya', 'ilustrasi' => null, 'pilihan' => ['Invasi AS ke Irak', 'Revolusi Iran', 'Arab Spring'], 'jawaban' => ['2003', '1979', '2010-2011']],
                ['judul' => 'Globalisasi Abad 21', 'type' => 'TTS', 'narasi' => 'Abad 21 ditandai percepatan globalisasi didorong internet, media sosial, dan revolusi industri 4.0.', 'pertanyaan' => ['Revolusi industri yang ditandai komputerisasi dan otomasi disebut Revolusi Industri ...', 'Teknologi kecerdasan buatan dalam bahasa Inggris adalah ...', 'Platform perdagangan digital disebut ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Empat point nol', 'Artificial Intelligence', 'E-commerce']],
            ]],
        ];
    }

    private function bahasaKelas12(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Teks Editorial', 'soal' => [
                ['judul' => 'Pengertian Teks Editorial', 'type' => 'quiz', 'narasi' => 'Teks editorial adalah artikel surat kabar yang menyatakan sikap redaksi terhadap isu terkini. Bersifat persuasif dan argumentatif.', 'pertanyaan' => 'Yang membedakan editorial dari berita biasa adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Editorial berisi fakta murni', 'B. Editorial mencerminkan pendapat redaksi', 'C. Editorial tidak boleh ada argumen', 'D. Editorial hanya tentang olahraga'], 'jawaban' => 'B. Editorial mencerminkan pendapat redaksi'],
                ['judul' => 'Struktur Editorial', 'type' => 'drag and drop', 'narasi' => 'Editorial memiliki struktur: pernyataan pendapat (tesis), argumentasi, dan rekomendasi/penegasan ulang.', 'pertanyaan' => 'Urutkan struktur teks editorial', 'ilustrasi' => null, 'pilihan' => ['Rekomendasi', 'Tesis/pernyataan pendapat', 'Argumentasi'], 'jawaban' => ['Tesis/pernyataan pendapat', 'Argumentasi', 'Rekomendasi']],
                ['judul' => 'Kalimat Persuasif', 'type' => 'TTS', 'narasi' => 'Editorial menggunakan kalimat persuasif untuk mempengaruhi pembaca agar setuju dengan pendapat redaksi.', 'pertanyaan' => ['Kalimat yang bertujuan mengajak/membujuk disebut kalimat ...', 'Kata-kata yang menunjukkan kesimpulan seperti oleh karena itu disebut ...', 'Gaya bahasa yang membandingkan dua hal berbeda disebut ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Persuasif', 'Konjungsi simpulan', 'Metafora']],
            ]],
            ['bab' => 2, 'judul' => 'Surat Lamaran Pekerjaan', 'soal' => [
                ['judul' => 'Komponen Surat Lamaran', 'type' => 'drag and drop', 'narasi' => 'Surat lamaran pekerjaan adalah surat formal yang dikirim pelamar kepada perusahaan untuk melamar posisi tertentu.', 'pertanyaan' => 'Pasangkan komponen surat lamaran dengan posisinya', 'ilustrasi' => null, 'pilihan' => ['Tempat dan tanggal', 'Salam pembuka', 'Isi/tubuh surat', 'Penutup'], 'jawaban' => ['Pojok kanan atas', 'Setelah perihal', 'Paragraf utama', 'Hormat kami/saya']],
                ['judul' => 'Bahasa Surat Lamaran', 'type' => 'quiz', 'narasi' => 'Surat lamaran yang baik menggunakan bahasa formal, sopan, dan langsung ke inti.', 'pertanyaan' => 'Kalimat pembuka yang tepat dalam surat lamaran pekerjaan adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Halo, saya mau melamar pekerjaan', 'B. Dengan hormat, saya yang bertanda tangan di bawah ini...', 'C. Hey, saya tertarik dengan lowongan...', 'D. Kepada siapa pun yang membaca ini...'], 'jawaban' => 'B. Dengan hormat, saya yang bertanda tangan di bawah ini...'],
                ['judul' => 'Curriculum Vitae', 'type' => 'TTS', 'narasi' => 'CV (Curriculum Vitae) berisi informasi lengkap tentang identitas, pendidikan, pengalaman, dan keahlian pelamar.', 'pertanyaan' => ['Singkatan dari Curriculum Vitae adalah ...', 'Bagian CV yang menjelaskan pencapaian terbaik disebut ...', 'CV yang hanya berisi keahlian dan portofolio disebut CV ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['CV', 'Prestasi', 'Fungsional']],
            ]],
            ['bab' => 3, 'judul' => 'Karya Ilmiah', 'soal' => [
                ['judul' => 'Pengertian Karya Ilmiah', 'type' => 'quiz', 'narasi' => 'Karya ilmiah dibuat berdasarkan hasil penelitian dengan mengikuti metode ilmiah dan kaidah penulisan ilmiah.', 'pertanyaan' => 'Ciri utama karya ilmiah adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Subjektif dan imajinatif', 'B. Objektif, sistematis, dan berdasar data', 'C. Bebas tanpa aturan', 'D. Hanya berisi pendapat pribadi'], 'jawaban' => 'B. Objektif, sistematis, dan berdasar data'],
                ['judul' => 'Struktur Karya Ilmiah', 'type' => 'drag and drop', 'narasi' => 'Karya ilmiah memiliki struktur baku: pendahuluan, kajian teori, metode, hasil, simpulan.', 'pertanyaan' => 'Urutkan bagian karya ilmiah secara benar', 'ilustrasi' => null, 'pilihan' => ['Simpulan dan saran', 'Pendahuluan', 'Hasil dan pembahasan', 'Metode penelitian'], 'jawaban' => ['Pendahuluan', 'Metode penelitian', 'Hasil dan pembahasan', 'Simpulan dan saran']],
                ['judul' => 'Penulisan Daftar Pustaka', 'type' => 'TTS', 'narasi' => 'Daftar pustaka berisi semua sumber yang digunakan dalam karya ilmiah, disusun secara alfabetis.', 'pertanyaan' => ['Sistem penulisan referensi ilmiah yang paling umum di Indonesia disebut ...', 'Sumber yang dikutip secara langsung dari teks asli disebut kutipan ...', 'Penulisan daftar pustaka dimulai dari nama ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['APA style', 'Langsung', 'Belakang']],
            ]],
            ['bab' => 4, 'judul' => 'Sastra Angkatan dan Perkembangannya', 'soal' => [
                ['judul' => 'Periodisasi Sastra Indonesia', 'type' => 'drag and drop', 'narasi' => 'Sastra Indonesia berkembang melalui beberapa periode/angkatan yang masing-masing memiliki ciri dan tokoh khas.', 'pertanyaan' => 'Pasangkan angkatan sastra dengan tokohnya', 'ilustrasi' => null, 'pilihan' => ['Angkatan Balai Pustaka', 'Angkatan Pujangga Baru', 'Angkatan 45'], 'jawaban' => ['Marah Rusli (Siti Nurbaya)', 'Sutan Takdir Alisjahbana', 'Chairil Anwar']],
                ['judul' => 'Ciri Angkatan 45', 'type' => 'quiz', 'narasi' => 'Angkatan 45 menandai semangat revolusi dan kebebasan berekspresi dalam sastra Indonesia.', 'pertanyaan' => 'Puisi Aku yang terkenal ditulis oleh penyair Angkatan 45...', 'ilustrasi' => null, 'pilihan' => ['A. WS Rendra', 'B. Sapardi Djoko Damono', 'C. Chairil Anwar', 'D. Rendra'], 'jawaban' => 'C. Chairil Anwar'],
                ['judul' => 'Sastra Modern', 'type' => 'TTS', 'narasi' => 'Sastra Indonesia modern terus berkembang mengikuti zaman dengan tema semakin beragam.', 'pertanyaan' => ['Novel tetralogi Bumi Manusia ditulis oleh ...', 'Penulis perempuan Indonesia terkenal dengan novel-novel feminis adalah ...', 'Sastra yang ditulis dan disebarkan di internet disebut sastra ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Pramoedya Ananta Toer', 'Dee Lestari', 'Digital']],
            ]],
            ['bab' => 5, 'judul' => 'Teks Artikel Ilmiah Populer', 'soal' => [
                ['judul' => 'Artikel Ilmiah vs Ilmiah Populer', 'type' => 'quiz', 'narasi' => 'Artikel ilmiah populer menyajikan informasi ilmiah dengan bahasa yang lebih mudah dipahami masyarakat umum.', 'pertanyaan' => 'Perbedaan utama artikel ilmiah populer dengan artikel ilmiah adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Artikel ilmiah populer tidak berdasar fakta', 'B. Bahasa ilmiah populer lebih mudah dipahami umum', 'C. Artikel ilmiah populer lebih panjang', 'D. Artikel ilmiah tidak butuh referensi'], 'jawaban' => 'B. Bahasa ilmiah populer lebih mudah dipahami umum'],
                ['judul' => 'Teknik Penyajian', 'type' => 'drag and drop', 'narasi' => 'Artikel ilmiah populer menggunakan berbagai teknik untuk menyajikan informasi ilmiah agar menarik dan mudah dipahami.', 'pertanyaan' => 'Pasangkan teknik penyajian dengan tujuannya', 'ilustrasi' => null, 'pilihan' => ['Analogi', 'Data statistik', 'Contoh konkret'], 'jawaban' => ['Menjelaskan konsep sulit dengan perbandingan', 'Memperkuat argumen dengan angka', 'Membuat konsep abstrak lebih nyata']],
                ['judul' => 'Menulis Artikel Ilmiah Populer', 'type' => 'TTS', 'narasi' => 'Menulis artikel ilmiah populer memerlukan kemampuan mensintesis informasi ilmiah dan menyajikannya dengan menarik.', 'pertanyaan' => ['Bagian awal artikel yang menarik minat pembaca disebut ...', 'Paragraf yang berisi inti gagasan disebut paragraf ...', 'Kesimpulan yang mengajak pembaca bertindak disebut penutup yang ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Lead/teras', 'Utama', 'Persuasif']],
            ]],
        ];
    }

    private function pknKelas12(): array
    {
        return [
            ['bab' => 1, 'judul' => 'Ancaman terhadap NKRI', 'soal' => [
                ['judul' => 'Jenis Ancaman', 'type' => 'drag and drop', 'narasi' => 'Ancaman terhadap NKRI bisa datang dari dalam maupun luar negeri, bersifat militer maupun non-militer.', 'pertanyaan' => 'Klasifikasikan jenis ancaman berikut', 'ilustrasi' => null, 'pilihan' => ['Invasi militer asing', 'Terorisme', 'Korupsi'], 'jawaban' => ['Ancaman militer dari luar', 'Ancaman non-militer dari dalam/luar', 'Ancaman non-militer dari dalam']],
                ['judul' => 'Bela Negara', 'type' => 'quiz', 'narasi' => 'Bela negara adalah sikap dan perilaku warga negara yang dijiwai kecintaan kepada NKRI berdasarkan Pancasila.', 'pertanyaan' => 'Contoh bela negara di era modern yang dapat dilakukan pelajar adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Memanggul senjata', 'B. Berprestasi dan menjaga nama baik bangsa', 'C. Menjadi tentara', 'D. Ikut demonstrasi'], 'jawaban' => 'B. Berprestasi dan menjaga nama baik bangsa'],
                ['judul' => 'Sistem Pertahanan', 'type' => 'TTS', 'narasi' => 'Indonesia menganut sistem pertahanan semesta yang melibatkan seluruh komponen bangsa.', 'pertanyaan' => ['Komponen utama pertahanan negara adalah ...', 'Komponen cadangan pertahanan negara adalah ...', 'Doktrin pertahanan Indonesia yang melibatkan seluruh rakyat disebut ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['TNI', 'Polri dan warga terlatih', 'Sishankamrata']],
            ]],
            ['bab' => 2, 'judul' => 'Demokrasi dan Hak Asasi Manusia', 'soal' => [
                ['judul' => 'Perkembangan HAM', 'type' => 'drag and drop', 'narasi' => 'Pengakuan HAM berkembang dari Magna Carta (1215) hingga UDHR PBB (1948).', 'pertanyaan' => 'Urutkan perkembangan dokumen HAM internasional', 'ilustrasi' => null, 'pilihan' => ['UDHR PBB', 'Magna Carta', 'Bill of Rights'], 'jawaban' => ['Magna Carta', 'Bill of Rights', 'UDHR PBB']],
                ['judul' => 'HAM di Indonesia', 'type' => 'quiz', 'narasi' => 'HAM di Indonesia dijamin UUD 1945 (Pasal 27-34) dan UU No. 39 Tahun 1999. Komnas HAM mengawasi pelaksanaannya.', 'pertanyaan' => 'Lembaga negara yang bertugas mengawasi pelaksanaan HAM di Indonesia adalah...', 'ilustrasi' => null, 'pilihan' => ['A. KPK', 'B. Komnas HAM', 'C. Ombudsman', 'D. OJK'], 'jawaban' => 'B. Komnas HAM'],
                ['judul' => 'Pelanggaran HAM', 'type' => 'quiz', 'narasi' => 'Pelanggaran HAM adalah perbuatan yang mengurangi atau mencabut hak dasar seseorang. Pelanggaran berat: genosida.', 'pertanyaan' => 'Pemusnahan suatu kelompok etnis atau agama secara sistematis disebut...', 'ilustrasi' => null, 'pilihan' => ['A. Diskriminasi', 'B. Genosida', 'C. Apartheid', 'D. Intimidasi'], 'jawaban' => 'B. Genosida'],
            ]],
            ['bab' => 3, 'judul' => 'Konstitusi dan Sistem Hukum', 'soal' => [
                ['judul' => 'Hierarki Peraturan Perundangan', 'type' => 'drag and drop', 'narasi' => 'Indonesia memiliki hierarki peraturan perundang-undangan. Peraturan lebih rendah tidak boleh bertentangan dengan yang lebih tinggi.', 'pertanyaan' => 'Urutkan hierarki peraturan dari tertinggi ke terendah', 'ilustrasi' => null, 'pilihan' => ['PP (Peraturan Pemerintah)', 'UUD 1945', 'UU/Perppu', 'Perda'], 'jawaban' => ['UUD 1945', 'UU/Perppu', 'PP (Peraturan Pemerintah)', 'Perda']],
                ['judul' => 'Mahkamah Konstitusi', 'type' => 'quiz', 'narasi' => 'MK dibentuk 2003 melalui amandemen UUD. Berwenang menguji UU, memutus sengketa kewenangan, dan membubarkan partai.', 'pertanyaan' => 'Kewenangan utama Mahkamah Konstitusi adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Mengadili koruptor', 'B. Menguji UU terhadap UUD', 'C. Membuat undang-undang', 'D. Memilih presiden'], 'jawaban' => 'B. Menguji UU terhadap UUD'],
                ['judul' => 'Lembaga Peradilan', 'type' => 'TTS', 'narasi' => 'Sistem peradilan yang independen adalah pilar penting negara hukum yang demokratis.', 'pertanyaan' => ['Prinsip bahwa semua orang sama di hadapan hukum disebut ...', 'Putusan pengadilan yang tidak dapat diganggu gugat lagi disebut ...', 'Hak tersangka untuk mendapat pendampingan hukum disebut hak ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Equality before the law', 'Inkracht', 'Bantuan hukum']],
            ]],
            ['bab' => 4, 'judul' => 'Globalisasi dan Identitas Nasional', 'soal' => [
                ['judul' => 'Identitas Nasional', 'type' => 'quiz', 'narasi' => 'Identitas nasional adalah ciri khas yang membedakan suatu bangsa dari bangsa lain: bahasa, bendera, lambang, lagu kebangsaan.', 'pertanyaan' => 'Identitas nasional yang paling utama sebagai alat pemersatu adalah...', 'ilustrasi' => null, 'pilihan' => ['A. Suku bangsa', 'B. Bahasa Indonesia', 'C. Agama', 'D. Tradisi daerah'], 'jawaban' => 'B. Bahasa Indonesia'],
                ['judul' => 'Globalisasi dan Pancasila', 'type' => 'quiz', 'narasi' => 'Di era globalisasi, Pancasila berperan sebagai filter untuk menyaring pengaruh asing yang masuk.', 'pertanyaan' => 'Peran Pancasila di era globalisasi adalah sebagai...', 'ilustrasi' => null, 'pilihan' => ['A. Penolak semua hal asing', 'B. Filter/penyaring pengaruh asing', 'C. Alat menguasai negara lain', 'D. Pengganti hukum internasional'], 'jawaban' => 'B. Filter/penyaring pengaruh asing'],
                ['judul' => 'Wawasan Nusantara', 'type' => 'TTS', 'narasi' => 'Wawasan Nusantara adalah cara pandang bangsa Indonesia tentang diri dan lingkungannya berdasarkan Pancasila dan UUD 1945.', 'pertanyaan' => ['Wawasan kebangsaan Indonesia yang memandang nusantara sebagai satu kesatuan disebut ...', 'Prinsip yang menyatakan Indonesia sebagai negara kepulauan adalah ...', 'Zona ekonomi eksklusif Indonesia sejauh ... mil laut'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Wawasan Nusantara', 'Archipelago', '200']],
            ]],
            ['bab' => 5, 'judul' => 'Mewujudkan Masyarakat Berkeadilan', 'soal' => [
                ['judul' => 'Keadilan Sosial', 'type' => 'quiz', 'narasi' => 'Keadilan sosial adalah kondisi di mana setiap warga negara mendapat hak-haknya secara seimbang tanpa diskriminasi.', 'pertanyaan' => 'Keadilan sosial dalam konteks Pancasila berarti...', 'ilustrasi' => null, 'pilihan' => ['A. Semua orang mendapat sama rata', 'B. Hak setiap warga terpenuhi secara proporsional', 'C. Hanya orang kaya yang mendapat keadilan', 'D. Pemerintah yang tentukan keadilan'], 'jawaban' => 'B. Hak setiap warga terpenuhi secara proporsional'],
                ['judul' => 'Peran Warga Negara', 'type' => 'drag and drop', 'narasi' => 'Setiap warga negara memiliki peran penting dalam mewujudkan masyarakat yang adil dan makmur.', 'pertanyaan' => 'Pasangkan peran warga negara dengan bentuk kontribusinya', 'ilustrasi' => null, 'pilihan' => ['Di bidang ekonomi', 'Di bidang sosial', 'Di bidang lingkungan'], 'jawaban' => ['Membayar pajak, berwirausaha', 'Bergotong royong, membantu sesama', 'Menjaga kebersihan, tidak membuang sampah']],
                ['judul' => 'Cita-Cita Bangsa', 'type' => 'TTS', 'narasi' => 'Cita-cita bangsa Indonesia termaktub dalam Pembukaan UUD 1945 alinea keempat.', 'pertanyaan' => ['Tujuan nasional mencerdaskan kehidupan bangsa berkaitan dengan bidang ...', 'Melindungi segenap bangsa Indonesia adalah tugas utama ...', 'Wujud nyata keadilan sosial yang sedang dibangun pemerintah adalah program ...'], 'ilustrasi' => null, 'pilihan' => null, 'jawaban' => ['Pendidikan', 'Negara', 'Jaminan sosial']],
            ]],
        ];
    }
}
