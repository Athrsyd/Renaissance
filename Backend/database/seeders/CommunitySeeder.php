<?php

namespace Database\Seeders;

use App\Models\Community;
use App\Models\CommunityMember;
use App\Models\Message;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

/**
 * CommunitySeeder
 *
 * Membuat komunitas belajar yang realistis menggunakan user dari
 * LeaderboardUserSeeder (25 user) + user lain yang ada di DB.
 *
 * Struktur:
 *   - 10 komunitas dengan tema mapel & kelas berbeda
 *   - Tiap komunitas punya 4-15 member
 *   - Tiap komunitas punya 8-20 pesan percakapan yang natural
 *   - Waktu pesan tersebar 7-30 hari ke belakang (tidak semua langsung)
 *
 * Urutan seeder yang benar:
 *   1. ModulBelajarSeeder
 *   2. SoalSeeder
 *   3. LeaderboardUserSeeder  ← harus jalan dulu agar user tersedia
 *   4. CommunitySeeder        ← seeder ini
 *
 * Cara jalankan:
 *   php artisan db:seed --class=CommunitySeeder
 */
class CommunitySeeder extends Seeder
{
    // ── Definisi komunitas ────────────────────────────────────────────────────

    /**
     * Setiap komunitas:
     *   name          – nama grup
     *   theme         – tema untuk memilih pesan yang relevan
     *   creator_email – email user yang menjadi creator
     *   members       – email user yang ikut bergabung (creator otomatis masuk)
     */
    private array $communities = [
        [
            'name'          => 'Pejuang Matematika Kelas 10 🔢',
            'theme'         => 'matematika',
            'creator_email' => 'naresha@example.com',
            'members'       => [
                'rizky@example.com', 'mega@example.com', 'rendra@example.com',
                'annisa@example.com', 'arya@example.com', 'intan@example.com',
                'miko@example.com', 'kirana@example.com',
            ],
        ],
        [
            'name'          => 'IPA Seru — Kelas 11 🔬',
            'theme'         => 'ipa',
            'creator_email' => 'aldi@example.com',
            'members'       => [
                'dewi@example.com', 'hendra@example.com', 'gilang@example.com',
                'farah@example.com', 'cantika@example.com', 'joko@example.com',
                'nadia@example.com',
            ],
        ],
        [
            'name'          => 'Diskusi Sejarah Kelas 12 🏛️',
            'theme'         => 'sejarah',
            'creator_email' => 'anindya@example.com',
            'members'       => [
                'yoga@example.com', 'salsabila@example.com', 'siti@example.com',
                'bagas@example.com', 'farel@example.com', 'laila@example.com',
            ],
        ],
        [
            'name'          => 'PPKN & Pancasila Squad 🇮🇩',
            'theme'         => 'ppkn',
            'creator_email' => 'kirana@example.com',
            'members'       => [
                'rizky@example.com', 'aldi@example.com', 'anindya@example.com',
                'naresha@example.com', 'gilang@example.com', 'siti@example.com',
            ],
        ],
        [
            'name'          => 'Pejuang SNBT 2027 📚',
            'theme'         => 'snbt',
            'creator_email' => 'arya@example.com',
            'members'       => [
                'cantika@example.com', 'farel@example.com', 'intan@example.com',
                'anindya@example.com', 'yoga@example.com', 'kirana@example.com',
                'aldi@example.com', 'dewi@example.com', 'mega@example.com',
                'rizky@example.com', 'hendra@example.com',
            ],
        ],
        [
            'name'          => 'IPS Kelas 10 — Geografi & Ekonomi 🌍',
            'theme'         => 'ips',
            'creator_email' => 'rendra@example.com',
            'members'       => [
                'annisa@example.com', 'dimas@example.com', 'miko@example.com',
                'intan@example.com', 'arya@example.com',
            ],
        ],
        [
            'name'          => 'Bahasa & Sastra Indonesia ✍️',
            'theme'         => 'bahasa',
            'creator_email' => 'farah@example.com',
            'members'       => [
                'salsabila@example.com', 'laila@example.com', 'nadia@example.com',
                'annisa@example.com', 'dewi@example.com', 'siti@example.com',
            ],
        ],
        [
            'name'          => 'Study Group Kelas 11 — All Mapel 📖',
            'theme'         => 'umum',
            'creator_email' => 'gilang@example.com',
            'members'       => [
                'farah@example.com', 'bagas@example.com', 'aldi@example.com',
                'dewi@example.com', 'hendra@example.com', 'cantika@example.com',
                'joko@example.com', 'nadia@example.com',
            ],
        ],
        [
            'name'          => 'Tips Belajar & Streak Hunters 🔥',
            'theme'         => 'motivasi',
            'creator_email' => 'naresha@example.com',
            'members'       => [
                'gilang@example.com', 'siti@example.com', 'kirana@example.com',
                'aldi@example.com', 'anindya@example.com', 'arya@example.com',
                'cantika@example.com', 'yoga@example.com',
            ],
        ],
        [
            'name'          => 'XP Grind — Siapa Paling Tinggi? ⚡',
            'theme'         => 'xp',
            'creator_email' => 'cantika@example.com',
            'members'       => [
                'arya@example.com', 'farel@example.com', 'intan@example.com',
                'joko@example.com', 'laila@example.com', 'miko@example.com',
                'nadia@example.com',
            ],
        ],
    ];

    // ── Pesan per tema ────────────────────────────────────────────────────────

    /**
     * Kumpulan pesan realistis per tema.
     * Format: [nama_pengirim_alias, teks_pesan]
     * Alias akan di-resolve ke user berdasarkan komunitas.
     */
    private array $messages = [

        'matematika' => [
            ['creator',   'Hai semua! Ini grup belajar Matematika kelas 10 ya. Yuk kita saling bantu 💪'],
            ['member_0',  'Siap kak! Btw aku masih bingung soal eksponen, ada yang bisa jelasin?'],
            ['member_1',  'Eksponen itu intinya perkalian berulang. Misal 2³ = 2×2×2 = 8'],
            ['member_0',  'Oh gitu, berarti 5⁰ = 1 karena aturan eksponen ya?'],
            ['creator',   'Betul! a⁰ = 1 untuk semua a ≠ 0. Ini salah satu sifat dasar eksponen'],
            ['member_2',  'Numpang tanya, soal fungsi kuadrat yang kemarin itu gimana caranya?'],
            ['member_1',  'Yang mana? Pakai rumus abc atau cara lain?'],
            ['member_2',  'Yang diminta vertex-nya. Aku selalu bingung'],
            ['creator',   'Vertex = (-b/2a, f(-b/2a)). Masukkan x = -b/2a ke fungsi untuk cari y-nya'],
            ['member_3',  'Makasih kak! Udah aku coba dan bener 🎉'],
            ['member_0',  'Btw kalian udah nyoba modul trigonometri belum? Lumayan susah'],
            ['member_1',  'Udah dong. Sin, cos, tan itu hafal aja dulu perbandingannya. SOH-CAH-TOA'],
            ['creator',   'Nah, SOH-CAH-TOA itu mnemonic yang bagus. Sine = Opposite/Hypotenuse dst'],
            ['member_4',  'Streak aku putus gara-gara lupa buka app kemarin 😭'],
            ['member_2',  'Aduh sayang banget. Ayo semangat lagi, mulai streak baru!'],
            ['creator',   'Jangan patah semangat! Yang penting konsisten dari sekarang 💪'],
            ['member_3',  'Fyi modul statistika udah aku selesaiin semua. XP-nya lumayan banyak!'],
            ['member_0',  'Wahh serius? Aku baru 60% nih. Gas ah 🔥'],
        ],

        'ipa' => [
            ['creator',   'Selamat datang di grup IPA Kelas 11! 🔬 Mari belajar bersama'],
            ['member_0',  'Kak, soal sistem peredaran darah itu ada di bab berapa?'],
            ['creator',   'Bab 3 kalau tidak salah. Ada soal drag drop yang seru tentang alur darah'],
            ['member_1',  'Iya aku tadi ngerjain itu. Yang susah bagian kapiler vs vena'],
            ['member_0',  'Bedanya kapiler itu dinding 1 sel, vena lebih tebal dan punya katup'],
            ['creator',   'Tepat sekali! Kapiler fungsinya pertukaran O₂ dan CO₂ dengan sel'],
            ['member_2',  'Ada yang bisa bantu soal TTS sel kemarin? Aku nyangkut di 7 mendatar'],
            ['member_1',  'Yang organel penghasil energi? ATP! Mitokondria jawabannya 😄'],
            ['member_2',  'Ohhh iya makasih!! Aku salah nulis tadi'],
            ['member_0',  'Btw soal pencernaan seru banget, kayak game beneran'],
            ['creator',   'Hehe iya, format drag-drop itu emang bikin belajar lebih fun'],
            ['member_3',  'Kalian udah coba soal koordinasi saraf? Pusinggg'],
            ['member_1',  'Udah! Kuncinya hafal dulu neuron: dendrit → badan sel → akson → sinapsis'],
            ['creator',   'Betul. Dan ingat: impuls = listrik, bukan benda fisik'],
            ['member_2',  'Akhirnya aku selesaiin semua bab IPA!! XP naik drastis 🎉'],
            ['member_0',  'Gilaaaa selamat!! Berapa total XP-mu sekarang?'],
            ['member_2',  'Sekitar 4100 hehe. Mau kejar Kak Aldi nih'],
        ],

        'sejarah' => [
            ['creator',   'Halo semua! Grup Sejarah Kelas 12 resmi dibuka 🏛️'],
            ['member_0',  'Kak, materi Orde Baru banyak banget ya. Yang penting apa aja?'],
            ['creator',   'Fokus ke: Tritura, Supersemar, Pembangunan Lima Tahun (Pelita), dan Reformasi 1998'],
            ['member_1',  'Iya, terutama kronologi peristiwa 1965-1966 yang sering keluar'],
            ['member_0',  'Soal timeline drag-drop tadi aku sering salah urutannya 😭'],
            ['member_2',  'Sama! Aku hafal pakai tabel dulu, baru ngerjain'],
            ['creator',   'Tips: buat timeline sendiri di kertas dulu. Tulis tahun & peristiwa, hafal urutannya'],
            ['member_1',  'Perang Dunia II juga keluar banyak di tes kemampuan awal ya'],
            ['member_3',  'Betul. 1939 mulai, 1942 Jepang masuk Indonesia, 1945 selesai'],
            ['member_0',  'Makasih kak! Aku udah bisa jawab semua soal timeline sekarang 🎉'],
            ['creator',   'Bagus! Jangan lupa Proklamasi 17 Agustus 1945. Sering keluar'],
            ['member_2',  'Soal TTS Sejarah lucu banget, ada yang jawabnya nama pahlawan'],
            ['member_1',  'Iya! Yang 8 mendatar itu Diponegoro kan? Hampir salah nulis aku'],
            ['creator',   'Haha betul. Kalau soal puzzle biasanya nama-nama tokoh sejarah'],
            ['member_3',  'Progress-ku udah 90% nih! Tinggal bab terakhir. Semangat!'],
        ],

        'ppkn' => [
            ['creator',   'Selamat datang di grup PPKN & Pancasila! 🇮🇩'],
            ['member_0',  'Kak, aku masih bingung beda UUD 1945 sebelum & sesudah amandemen'],
            ['member_1',  'Intinya: setelah amandemen ada MK, DPD, dan presiden dipilih langsung'],
            ['creator',   'Tepat! Plus periode presiden jadi 2 periode maksimal & HAM lebih detail'],
            ['member_2',  'Soal nilai-nilai Pancasila itu implementasinya yang sering keluar'],
            ['member_0',  'Contohnya gimana kak?'],
            ['creator',   'Misal sila ke-4: musyawarah mufakat. Bisa diimplementasikan di kerja kelompok'],
            ['member_1',  'Oh jadi harus bisa kasih contoh konkret, bukan cuma hafal bunyinya'],
            ['creator',   'Betul! Soal isian biasanya minta contoh penerapan, bukan definisi'],
            ['member_2',  'Soal tarik benang tentang lembaga negara kemarin susah banget'],
            ['member_0',  'Yang pasangkan fungsi-fungsinya? Aku browsing dulu baru bisa 😅'],
            ['member_1',  'Coba hafal: MPR ubah UUD, DPR buat UU, MA adili, MK uji UU'],
            ['creator',   'Nah itu sudah betul. Tambah: DPD wakili daerah, Presiden eksekutif'],
            ['member_2',  'Makasih kak! Langsung aku coba lagi modulnya'],
        ],

        'snbt' => [
            ['creator',   'Halo pejuang SNBT 2027! Mari kita belajar bareng dari sekarang 🔥'],
            ['member_0',  'Kak, SNBT itu ngambil materi dari kelas 10-12 semua?'],
            ['creator',   'Iya! TPS (Tes Potensi Skolastik) + TKA (Tes Kemampuan Akademik) sesuai jurusan'],
            ['member_1',  'TPS itu kayak apa? Logika, verbal, numerik?'],
            ['creator',   'Ada penalaran umum, pemahaman bacaan, pengetahuan umum & kuantitatif'],
            ['member_2',  'Berarti matematika penting banget ya buat TPS'],
            ['member_3',  'Iya. Renaissance bagus nih buat latihan, soalnya bervariasi'],
            ['member_0',  'Aku udah selesaiin semua modul matematika kelas 10. Nantangin diri sendiri 💪'],
            ['member_1',  'Keren! Aku masih kelas 11, jadi fokus IPA & Sejarah dulu'],
            ['member_2',  'Tips dari aku: kerjain soal dari yang gampang dulu, biar confidence naik'],
            ['creator',   'Setuju! Dan manfaatin AI Aureus kalau ada yang kurang paham'],
            ['member_4',  'Oh ada chatbot AI di sini? Baru tau hehe'],
            ['member_3',  'Ada! Di menu Chatbot. Bisa tanya materi apa aja, responsnya cepat'],
            ['member_0',  'Aku tanya soal integral kemarin, langsung dikasih contoh step-by-step 👍'],
            ['creator',   'Inget ya teman-teman: konsisten > ngebut. Streak tiap hari lebih efektif'],
            ['member_1',  'Bener kak. Streak-ku udah 35 hari nih, pantang putus!'],
            ['member_2',  'Mantap! Aku baru 12 hari, tapi mau terus jaga 💪'],
            ['member_4',  'Ayo semua jaga streak! Kita bisa masuk leaderboard bareng'],
        ],

        'ips' => [
            ['creator',   'Halo teman-teman! Ini grup IPS Kelas 10 🌍'],
            ['member_0',  'Kak, geografi itu susah banget buat aku. Banyak hafalan'],
            ['creator',   'IPS memang banyak konsep, tapi coba sambungkan dengan kehidupan nyata'],
            ['member_1',  'Iya, misal letak geografis Indonesia itu lebih gampang kalau lihat peta'],
            ['member_0',  'Oh betul ya! Aku biasanya langsung hafal tanpa visualisasi'],
            ['member_2',  'Soal TTS IPS kemarin ada yang tentang jenis tanah. Aku nyangkut'],
            ['creator',   'Tanah vulkanik itu paling subur, banyak di Jawa & Bali karena gunung berapi'],
            ['member_1',  'Nah itu yang sering keluar! Hubungan gunung berapi dengan kesuburan tanah'],
            ['member_0',  'Ekonomi dasarnya juga banyak ya. Supply, demand, harga keseimbangan'],
            ['creator',   'Hukum permintaan: harga naik → permintaan turun (ceteris paribus)'],
            ['member_2',  'Ceteris paribus itu artinya apa kak?'],
            ['creator',   '"Hal lain dianggap tetap" — istilah Latin dalam ekonomi'],
            ['member_1',  'Oh oke! Jadi kalau faktor lain berubah, hukum itu tidak otomatis berlaku'],
            ['member_0',  'Progress IPS-ku naik ke 70% tadi setelah ngerjain bab 3. Lumayan!'],
        ],

        'bahasa' => [
            ['creator',   'Selamat datang di grup Bahasa & Sastra Indonesia! ✍️'],
            ['member_0',  'Kak, aku selalu bingung bedain teks LHO sama teks eksposisi'],
            ['creator',   'LHO: berdasarkan observasi nyata, bersifat deskriptif-informatif. Eksposisi: argumentatif'],
            ['member_1',  'Jadi kalau ada kalimat "menurut pendapat saya" itu eksposisi ya?'],
            ['creator',   'Betul! LHO itu objektif, tidak ada opini personal penulis'],
            ['member_2',  'Soal isian tentang struktur teks itu yang aku sering salah'],
            ['member_0',  'Sama! Terutama urutan: orientasi, komplikasi, resolusi itu buat teks apa?'],
            ['member_1',  'Itu struktur cerpen/novel. Kalau eksposisi: tesis-argumentasi-penegasan'],
            ['creator',   'Keren Salsabila! Tepat sekali 👏'],
            ['member_2',  'Soal puisi di Renaissance seru, ada yang disuruh identifikasi majas'],
            ['member_0',  'Iya! Aku masih bingung bedain metafora sama personifikasi'],
            ['creator',   'Metafora: perbandingan langsung tanpa kata seperti. Personifikasi: benda hidup layaknya manusia'],
            ['member_1',  'Contoh: "hidupku adalah petualangan" (metafora) vs "angin berbisik" (personifikasi)'],
            ['member_0',  'Ohh ngerti sekarang! Makasih kak dan Salsabila 🙏'],
        ],

        'umum' => [
            ['creator',   'Halo Kelas 11! Ini grup belajar semua mapel ya 📖'],
            ['member_0',  'Siap! Btw ada yang mau jadwal belajar bareng minggu ini?'],
            ['member_1',  'Boleh! Aku lagi fokus IPA sama Sejarah'],
            ['member_2',  'Aku Matematika & PPKN. Bisa bareng nih'],
            ['creator',   'Oke, gimana kalau kita bagi: Senin-Rabu IPA, Kamis-Sabtu Matematika?'],
            ['member_0',  'Setuju! Minggu istirahat atau review'],
            ['member_3',  'Kalian pakai fitur AI Aureus gak? Aku sering tanya soal yang susah'],
            ['member_1',  'Pakai dong! Berguna banget terutama buat konsep yang abstrak'],
            ['member_2',  'Lebih enak AI atau tanya di sini?'],
            ['creator',   'Dua-duanya! AI buat jawaban cepat, di sini buat diskusi dan sharing tips'],
            ['member_0',  'Setuju. Kadang dari diskusi teman justru dapat insight baru'],
            ['member_3',  'Btw siapa yang streak-nya masih jalan? Aku udah 9 hari nih'],
            ['member_1',  'Aku 15 hari! Hampir putus kemarin gara-gara ketiduran 😅'],
            ['creator',   'Wah hampir! Untung masih sempet. Keep going semua! 💪'],
            ['member_2',  'Aku mau kejar XP minggu ini. Target masuk top 5 leaderboard!'],
            ['member_0',  'Gas! Kita kompetisi sehat ya hehe 🏆'],
        ],

        'motivasi' => [
            ['creator',   'Hai semua! Grup ini buat sharing tips belajar & jaga streak 🔥'],
            ['member_0',  'Kak Naresha streak 90 hari, tips-nya apa kak?'],
            ['creator',   'Haha! Rahasianya: belajar di waktu yang sama tiap hari. Jadi kebiasaan'],
            ['member_1',  'Oh jadi kayak jadwal tetap? Aku sering random waktunya'],
            ['creator',   'Iya, konsistensi lebih penting dari durasi. 15 menit tiap hari > 2 jam seminggu sekali'],
            ['member_2',  'Aku punya tips: matiin notif medsos dulu waktu belajar, itu game changer'],
            ['member_3',  'Bener banget! HP di tempat lain, fokus langsung naik'],
            ['member_0',  'Aku biasanya dengerin musik lo-fi waktu belajar. Bantuin konsentrasi'],
            ['creator',   'Bagus! Asal bukan musik yang ada liriknya biar otak tidak terbagi'],
            ['member_1',  'Tips dari aku: tulis target sebelum belajar. Misal "Selesaikan bab 2 hari ini"'],
            ['member_2',  'Goal setting itu emang penting ya. Jadi ada arah yang jelas'],
            ['creator',   'Kalau streak putus, jangan self-blame. Reset & mulai lagi. Progress > perfection'],
            ['member_3',  'Ini yang aku butuhkan dengar. Streak-ku baru putus kemarin 😢'],
            ['member_0',  'Semangat! Aku juga pernah putus di hari ke-40. Sekarang sudah jauh lebih panjang'],
            ['member_1',  'Yang penting masih mau coba lagi! 💪'],
            ['creator',   'Betul. Renaissance ada di sini buat bantu kalian. Tetap semangat!'],
        ],

        'xp' => [
            ['creator',   'Halo para pemburu XP! Siapa yang mau grind bareng? ⚡'],
            ['member_0',  'Siap! Aku lagi 8000 XP nih. Mau terus nambah'],
            ['member_1',  'Gila 8000! Aku baru 6800. Kejar nih 👀'],
            ['member_0',  'Hehe ayo! Tips-ku: selesaiin bab tanpa salah, bonus XP-nya lumayan'],
            ['member_2',  'Oh ada bonus kalau jawab benar semua? Aku gak tau itu'],
            ['creator',   'Iya! Makin sedikit salah, makin banyak XP yang didapat per bab'],
            ['member_1',  'Pantesan XP-ku kurang, sering retry berkali-kali 😅'],
            ['member_3',  'Tips: baca soal baik-baik dulu sebelum jawab. Jangan buru-buru'],
            ['member_0',  'Setuju! Dan kalau gak yakin, skip dulu, kerjain yang yakin'],
            ['creator',   'Betul. Soal isian biasanya kuncinya ada di pertanyaannya sendiri'],
            ['member_2',  'Aku baru tau kalau XP ngaruh ke level juga. Levelku masih 1 😭'],
            ['member_1',  'Level naik itu butuh XP berapa ya?'],
            ['creator',   'Tiap level beda. Makin tinggi makin banyak XP yang dibutuhkan'],
            ['member_0',  'Aku level 2 sekarang. Rasanya puas banget waktu naik level!'],
            ['member_3',  'Gas semua! Siapa yang paling duluan level 3? 🏆'],
            ['creator',   'Ayo kompetisi! Yang menang dapat title "XP Master" hehe'],
        ],
    ];

    // ── Main ─────────────────────────────────────────────────────────────────

    public function run(): void
    {
        // Ambil semua user yang sudah ada di DB (dari LeaderboardUserSeeder + user lain)
        $allUsers    = User::all()->keyBy('email');
        $userCount   = $allUsers->count();

        if ($userCount === 0) {
            $this->command->error('Tidak ada user di database. Jalankan LeaderboardUserSeeder dulu!');
            return;
        }

        // Hapus data lama agar idempotent
        Message::query()->delete();
        CommunityMember::query()->delete();
        Community::query()->delete();

        $this->command->info("Ditemukan {$userCount} user. Mulai seeding komunitas...");
        $this->command->newLine();

        foreach ($this->communities as $commDef) {
            // Cari creator
            $creator = $allUsers->get($commDef['creator_email']);
            if (!$creator) {
                $this->command->warn("  ⚠ Creator {$commDef['creator_email']} tidak ditemukan, skip.");
                continue;
            }

            // ── Buat komunitas ────────────────────────────────────────────
            $community = Community::create([
                'name'       => $commDef['name'],
                'image_path' => null,   // Tidak ada upload di seeder
                'created_by' => $creator->id,
                'created_at' => Carbon::now()->subDays(rand(20, 45)),
                'updated_at' => Carbon::now()->subDays(rand(1, 5)),
            ]);

            // ── Daftarkan creator sebagai member pertama ──────────────────
            $members = collect([$creator]);
            CommunityMember::create([
                'community_id' => $community->id,
                'user_id'      => $creator->id,
                'joined_at'    => $community->created_at,
                'created_at'   => $community->created_at,
                'updated_at'   => $community->created_at,
            ]);

            // ── Daftarkan member lain ─────────────────────────────────────
            foreach ($commDef['members'] as $email) {
                $user = $allUsers->get($email);
                if (!$user || $user->id === $creator->id) continue;

                $joinedAt = Carbon::now()->subDays(rand(5, 30));
                CommunityMember::create([
                    'community_id' => $community->id,
                    'user_id'      => $user->id,
                    'joined_at'    => $joinedAt,
                    'created_at'   => $joinedAt,
                    'updated_at'   => $joinedAt,
                ]);
                $members->push($user);
            }

            // ── Buat pesan-pesan ──────────────────────────────────────────
            $theme    = $commDef['theme'];
            $msgList  = $this->messages[$theme] ?? $this->messages['umum'];

            // Build sender map: creator, member_0, member_1, ...
            $senderMap = ['creator' => $creator];
            $nonCreator = $members->filter(fn($u) => $u->id !== $creator->id)->values();
            foreach ($nonCreator as $i => $u) {
                $senderMap["member_{$i}"] = $u;
            }

            // Timestamp pesan: tersebar dari 7 hari lalu sampai sekarang
            $msgBase = Carbon::now()->subDays(7);
            $msgGap  = (7 * 24 * 60) / max(count($msgList), 1); // menit

            foreach ($msgList as $idx => [$alias, $text]) {
                $sender = $senderMap[$alias]
                    ?? $nonCreator->get(0)
                    ?? $creator;

                $msgTime = $msgBase->copy()->addMinutes((int)($idx * $msgGap) + rand(0, (int)($msgGap * 0.8)));

                Message::create([
                    'sender_id'    => $sender->id,
                    'community_id' => $community->id,
                    'chat'         => $text,
                    'created_at'   => $msgTime,
                    'updated_at'   => $msgTime,
                ]);
            }

            $memberCount = $members->count();
            $msgCount    = count($msgList);
            $this->command->line("  ✓ {$commDef['name']} — {$memberCount} member, {$msgCount} pesan");
        }

        $this->command->newLine();
        $this->command->info('CommunitySeeder selesai!');
        $this->command->table(
            ['Statistik', 'Jumlah'],
            [
                ['Total Komunitas',      Community::count()],
                ['Total Member Records', CommunityMember::count()],
                ['Total Pesan',          Message::count()],
            ]
        );
    }
}
