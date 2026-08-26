/**
 * placementSoal.js
 *
 * Soal hardcode untuk placement test.
 * 5 soal per mapel per kelas (10, 11, 12).
 * Tipe soal: 'quiz' (pilihan ganda A-E) — bisa mix dengan tipe lain.
 *
 * Struktur per soal:
 * {
 *   id       : string unik
 *   type     : 'quiz' | 'isian' | dll (sesuai komponen ModulComponent)
 *   narasi   : string | null          (teks soal / pertanyaan)
 *   pertanyaan: string                (khusus quiz: kalimat tanya)
 *   pilihan  : string[]               (khusus quiz: opsi jawaban)
 *   jawaban  : string                 (jawaban benar)
 * }
 *
 * MAPEL: Matematika | IPA | IPS | Sejarah | Sastra | PPKN
 */

const PLACEMENT_SOAL = {

  // ══════════════════════════════════════════════════════
  //  KELAS 10
  // ══════════════════════════════════════════════════════
  10: [
    // ── Matematika ──────────────────────────────────────
    {
      mapel: 'Matematika',
      soal: [
        {
          id: 'mtk10-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Nilai dari 2³ × 2⁴ adalah ...',
          pilihan: ['2⁶', '2⁷', '2⁸', '4⁷', '4¹²'],
          jawaban: '2⁷',
        },
        {
          id: 'mtk10-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Hasil dari log₂ 32 adalah ...',
          pilihan: ['3', '4', '5', '6', '8'],
          jawaban: '5',
        },
        {
          id: 'mtk10-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Akar-akar persamaan x² − 5x + 6 = 0 adalah ...',
          pilihan: ['x = 1 dan x = 6', 'x = 2 dan x = 3', 'x = −2 dan x = −3', 'x = −1 dan x = −6', 'x = 2 dan x = −3'],
          jawaban: 'x = 2 dan x = 3',
        },
        {
          id: 'mtk10-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Nilai sin 30° adalah ...',
          pilihan: ['½', '√2/2', '√3/2', '1', '0'],
          jawaban: '½',
        },
        {
          id: 'mtk10-5', type: 'quiz',
          narasi: 'Data ulangan 5 siswa: 70, 80, 75, 90, 85.',
          pertanyaan: 'Rata-rata nilai ulangan tersebut adalah ...',
          pilihan: ['78', '79', '80', '81', '82'],
          jawaban: '80',
        },
      ],
    },

    // ── IPA ─────────────────────────────────────────────
    {
      mapel: 'IPA',
      soal: [
        {
          id: 'ipa10-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Perubahan es menjadi air termasuk perubahan ...',
          pilihan: ['Kimia', 'Fisika', 'Biologi', 'Termal', 'Nuklir'],
          jawaban: 'Fisika',
        },
        {
          id: 'ipa10-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Satuan kecepatan dalam SI adalah ...',
          pilihan: ['km/jam', 'm/s', 'cm/s', 'km/s', 'm/menit'],
          jawaban: 'm/s',
        },
        {
          id: 'ipa10-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Proses fotosintesis menghasilkan ...',
          pilihan: ['CO₂ dan H₂O', 'O₂ dan glukosa', 'CO₂ dan glukosa', 'O₂ dan H₂O', 'H₂O dan glukosa'],
          jawaban: 'O₂ dan glukosa',
        },
        {
          id: 'ipa10-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Rumus kimia air adalah ...',
          pilihan: ['CO₂', 'NaCl', 'H₂O', 'O₂', 'H₂SO₄'],
          jawaban: 'H₂O',
        },
        {
          id: 'ipa10-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Gaya gravitasi bumi memengaruhi benda dengan cara ...',
          pilihan: [
            'Mendorong benda ke atas',
            'Menarik benda ke pusat bumi',
            'Menolak benda ke samping',
            'Membuat benda melayang',
            'Tidak berpengaruh pada benda',
          ],
          jawaban: 'Menarik benda ke pusat bumi',
        },
      ],
    },

    // ── IPS ─────────────────────────────────────────────
    {
      mapel: 'IPS',
      soal: [
        {
          id: 'ips10-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Letak astronomis Indonesia berada di antara ...',
          pilihan: [
            '6°LU–11°LS dan 95°BT–141°BT',
            '6°LU–11°LS dan 95°BT–141°BB',
            '11°LU–6°LS dan 95°BT–141°BT',
            '6°LU–11°LU dan 95°BT–141°BT',
            '6°LS–11°LS dan 95°BT–141°BT',
          ],
          jawaban: '6°LU–11°LS dan 95°BT–141°BT',
        },
        {
          id: 'ips10-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Kegiatan ekonomi yang menghasilkan barang dari bahan mentah disebut ...',
          pilihan: ['Distribusi', 'Konsumsi', 'Produksi', 'Investasi', 'Ekspor'],
          jawaban: 'Produksi',
        },
        {
          id: 'ips10-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Permintaan hukum ekonomi menyatakan bahwa jika harga naik maka ...',
          pilihan: [
            'Permintaan naik',
            'Permintaan turun',
            'Penawaran turun',
            'Permintaan tetap',
            'Penawaran naik',
          ],
          jawaban: 'Permintaan turun',
        },
        {
          id: 'ips10-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Suku Dayak merupakan penduduk asli pulau ...',
          pilihan: ['Sumatera', 'Jawa', 'Kalimantan', 'Sulawesi', 'Papua'],
          jawaban: 'Kalimantan',
        },
        {
          id: 'ips10-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Interaksi sosial yang bersifat positif dan membangun disebut ...',
          pilihan: ['Konflik', 'Kompetisi', 'Akomodasi', 'Asimilasi', 'Kerja sama'],
          jawaban: 'Kerja sama',
        },
      ],
    },

    // ── Sejarah ─────────────────────────────────────────
    {
      mapel: 'Sejarah',
      soal: [
        {
          id: 'sej10-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Ilmu yang mempelajari peristiwa masa lampau disebut ...',
          pilihan: ['Geografi', 'Sosiologi', 'Sejarah', 'Antropologi', 'Arkeologi'],
          jawaban: 'Sejarah',
        },
        {
          id: 'sej10-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Kerajaan Hindu pertama di Indonesia adalah ...',
          pilihan: ['Sriwijaya', 'Majapahit', 'Kutai', 'Tarumanegara', 'Mataram'],
          jawaban: 'Kutai',
        },
        {
          id: 'sej10-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Bangsa Eropa pertama yang datang ke Nusantara adalah ...',
          pilihan: ['Inggris', 'Spanyol', 'Belanda', 'Portugis', 'Prancis'],
          jawaban: 'Portugis',
        },
        {
          id: 'sej10-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Peradaban Mesir kuno berkembang di lembah sungai ...',
          pilihan: ['Tigris', 'Eufrat', 'Nil', 'Indus', 'Yangtze'],
          jawaban: 'Nil',
        },
        {
          id: 'sej10-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Prasasti tertua di Indonesia ditemukan di kerajaan ...',
          pilihan: ['Sriwijaya', 'Tarumanegara', 'Kutai', 'Majapahit', 'Kediri'],
          jawaban: 'Kutai',
        },
      ],
    },

    // ── Sastra ──────────────────────────────────────────
    {
      mapel: 'Sastra',
      soal: [
        {
          id: 'sas10-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Teks yang berisi laporan hasil observasi suatu objek disebut teks ...',
          pilihan: ['Eksposisi', 'Deskripsi', 'LHO', 'Anekdot', 'Narasi'],
          jawaban: 'LHO',
        },
        {
          id: 'sas10-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Teks anekdot bertujuan untuk ...',
          pilihan: [
            'Menjelaskan suatu prosedur',
            'Menyindir dengan cara humor',
            'Menceritakan pengalaman',
            'Memengaruhi pembaca',
            'Melaporkan hasil pengamatan',
          ],
          jawaban: 'Menyindir dengan cara humor',
        },
        {
          id: 'sas10-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Bagian teks eksposisi yang berisi pendapat penulis disebut ...',
          pilihan: ['Argumentasi', 'Tesis', 'Penegasan ulang', 'Orientasi', 'Koda'],
          jawaban: 'Tesis',
        },
        {
          id: 'sas10-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Majas yang membandingkan dua hal secara langsung menggunakan kata "seperti" disebut ...',
          pilihan: ['Metafora', 'Hiperbola', 'Simile', 'Personifikasi', 'Litotes'],
          jawaban: 'Simile',
        },
        {
          id: 'sas10-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Tahap dalam negosiasi di mana kedua pihak mencapai kesepakatan disebut ...',
          pilihan: ['Pembukaan', 'Isi', 'Penawaran', 'Persetujuan', 'Penutup'],
          jawaban: 'Persetujuan',
        },
      ],
    },

    // ── PPKN ────────────────────────────────────────────
    {
      mapel: 'PPKN',
      soal: [
        {
          id: 'pkn10-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Pancasila sebagai dasar negara tercantum dalam ...',
          pilihan: ['Batang Tubuh UUD 1945', 'Pembukaan UUD 1945', 'Penjelasan UUD 1945', 'TAP MPR', 'UU No.1'],
          jawaban: 'Pembukaan UUD 1945',
        },
        {
          id: 'pkn10-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Sila ke-3 Pancasila berbunyi ...',
          pilihan: [
            'Ketuhanan Yang Maha Esa',
            'Kemanusiaan yang adil dan beradab',
            'Persatuan Indonesia',
            'Kerakyatan yang dipimpin oleh hikmat kebijaksanaan',
            'Keadilan sosial bagi seluruh rakyat Indonesia',
          ],
          jawaban: 'Persatuan Indonesia',
        },
        {
          id: 'pkn10-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Indonesia adalah negara hukum berdasarkan pasal ...',
          pilihan: ['Pasal 1 ayat 1', 'Pasal 1 ayat 2', 'Pasal 1 ayat 3', 'Pasal 2 ayat 1', 'Pasal 3 ayat 1'],
          jawaban: 'Pasal 1 ayat 3',
        },
        {
          id: 'pkn10-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'HAM diatur dalam UUD 1945 pada pasal ...',
          pilihan: ['Pasal 27', 'Pasal 28A–28J', 'Pasal 30', 'Pasal 31', 'Pasal 33'],
          jawaban: 'Pasal 28A–28J',
        },
        {
          id: 'pkn10-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Wawasan Nusantara bertujuan untuk menjaga ...',
          pilihan: [
            'Kekayaan alam',
            'Integrasi nasional',
            'Hubungan luar negeri',
            'Pertahanan militer',
            'Pertumbuhan ekonomi',
          ],
          jawaban: 'Integrasi nasional',
        },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════
  //  KELAS 11
  // ══════════════════════════════════════════════════════
  11: [
    // ── Matematika ──────────────────────────────────────
    {
      mapel: 'Matematika',
      soal: [
        {
          id: 'mtk11-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Turunan dari f(x) = 3x² + 2x adalah ...',
          pilihan: ['6x + 2', '3x + 2', '6x', '3x² + 2', '6x²'],
          jawaban: '6x + 2',
        },
        {
          id: 'mtk11-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Integral dari ∫2x dx adalah ...',
          pilihan: ['x² + C', '2x² + C', 'x + C', '2 + C', 'x² − C'],
          jawaban: 'x² + C',
        },
        {
          id: 'mtk11-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Matriks A = [[1,2],[3,4]], determinan A adalah ...',
          pilihan: ['−2', '2', '10', '−10', '4'],
          jawaban: '−2',
        },
        {
          id: 'mtk11-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Suku ke-10 barisan aritmatika 2, 5, 8, ... adalah ...',
          pilihan: ['26', '27', '28', '29', '30'],
          jawaban: '29',
        },
        {
          id: 'mtk11-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Lim(x→2) (x² − 4)/(x − 2) = ...',
          pilihan: ['0', '2', '4', '∞', '−2'],
          jawaban: '4',
        },
      ],
    },

    // ── IPA ─────────────────────────────────────────────
    {
      mapel: 'IPA',
      soal: [
        {
          id: 'ipa11-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Organel sel yang berfungsi sebagai tempat respirasi seluler adalah ...',
          pilihan: ['Nukleus', 'Ribosom', 'Mitokondria', 'Kloroplas', 'Vakuola'],
          jawaban: 'Mitokondria',
        },
        {
          id: 'ipa11-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Pembuluh darah yang membawa darah dari jantung ke seluruh tubuh adalah ...',
          pilihan: ['Vena', 'Kapiler', 'Arteri', 'Aorta kecil', 'Venula'],
          jawaban: 'Arteri',
        },
        {
          id: 'ipa11-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Enzim ptialin terdapat di ...',
          pilihan: ['Lambung', 'Usus halus', 'Mulut', 'Pankreas', 'Hati'],
          jawaban: 'Mulut',
        },
        {
          id: 'ipa11-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Hormon yang mengatur kadar gula darah diproduksi oleh ...',
          pilihan: ['Tiroid', 'Adrenal', 'Pankreas', 'Hipofisis', 'Gonad'],
          jawaban: 'Pankreas',
        },
        {
          id: 'ipa11-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Tulang yang berfungsi melindungi otak disebut ...',
          pilihan: ['Tulang dada', 'Tulang rusuk', 'Tulang tengkorak', 'Tulang belakang', 'Tulang panggul'],
          jawaban: 'Tulang tengkorak',
        },
      ],
    },

    // ── IPS ─────────────────────────────────────────────
    {
      mapel: 'IPS',
      soal: [
        {
          id: 'ips11-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Pertumbuhan penduduk alami dihitung dari ...',
          pilihan: [
            'Kelahiran − Kematian',
            'Kelahiran + Imigrasi',
            'Kematian − Emigrasi',
            'Imigrasi − Emigrasi',
            'Kelahiran − Emigrasi',
          ],
          jawaban: 'Kelahiran − Kematian',
        },
        {
          id: 'ips11-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Globalisasi di bidang ekonomi ditandai dengan ...',
          pilihan: [
            'Meluasnya budaya asing',
            'Perdagangan bebas antar negara',
            'Menyebarnya bahasa asing',
            'Meningkatnya pariwisata',
            'Kemajuan teknologi informasi',
          ],
          jawaban: 'Perdagangan bebas antar negara',
        },
        {
          id: 'ips11-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Lembaga yang menjaga stabilitas nilai rupiah adalah ...',
          pilihan: ['OJK', 'Kemendag', 'Bank Indonesia', 'BPK', 'BPKP'],
          jawaban: 'Bank Indonesia',
        },
        {
          id: 'ips11-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Perubahan sosial yang terjadi secara lambat disebut ...',
          pilihan: ['Revolusi', 'Evolusi', 'Reformasi', 'Modernisasi', 'Inovasi'],
          jawaban: 'Evolusi',
        },
        {
          id: 'ips11-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Pembangunan berkelanjutan memperhatikan kebutuhan ...',
          pilihan: [
            'Generasi sekarang saja',
            'Generasi mendatang saja',
            'Generasi sekarang tanpa merugikan generasi mendatang',
            'Negara maju saja',
            'Pemerintah saja',
          ],
          jawaban: 'Generasi sekarang tanpa merugikan generasi mendatang',
        },
      ],
    },

    // ── Sejarah ─────────────────────────────────────────
    {
      mapel: 'Sejarah',
      soal: [
        {
          id: 'sej11-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Perang Dunia I dipicu oleh pembunuhan Archduke Franz Ferdinand di kota ...',
          pilihan: ['Wina', 'Berlin', 'Sarajevo', 'Paris', 'London'],
          jawaban: 'Sarajevo',
        },
        {
          id: 'sej11-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Organisasi pergerakan nasional pertama di Indonesia adalah ...',
          pilihan: ['Sarekat Islam', 'Budi Utomo', 'Indische Partij', 'PNI', 'PKI'],
          jawaban: 'Budi Utomo',
        },
        {
          id: 'sej11-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Proklamasi kemerdekaan Indonesia dibacakan pada tanggal ...',
          pilihan: ['17 Agustus 1945', '17 Agustus 1944', '18 Agustus 1945', '15 Agustus 1945', '17 Juli 1945'],
          jawaban: '17 Agustus 1945',
        },
        {
          id: 'sej11-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Perang Dingin terjadi antara dua negara adikuasa yaitu ...',
          pilihan: [
            'Amerika Serikat dan Inggris',
            'Amerika Serikat dan Uni Soviet',
            'Uni Soviet dan China',
            'Amerika Serikat dan China',
            'Inggris dan Prancis',
          ],
          jawaban: 'Amerika Serikat dan Uni Soviet',
        },
        {
          id: 'sej11-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Sumpah Pemuda diikrarkan pada tanggal ...',
          pilihan: ['28 Oktober 1928', '28 Oktober 1929', '20 Mei 1908', '17 Agustus 1945', '28 November 1928'],
          jawaban: '28 Oktober 1928',
        },
      ],
    },

    // ── Sastra ──────────────────────────────────────────
    {
      mapel: 'Sastra',
      soal: [
        {
          id: 'sas11-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Teks prosedur berisi ...',
          pilihan: [
            'Pendapat penulis',
            'Langkah-langkah melakukan sesuatu',
            'Cerita fiksi',
            'Laporan pengamatan',
            'Peristiwa lucu',
          ],
          jawaban: 'Langkah-langkah melakukan sesuatu',
        },
        {
          id: 'sas11-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Unsur intrinsik novel yang berkaitan dengan pesan penulis disebut ...',
          pilihan: ['Alur', 'Tema', 'Amanat', 'Sudut pandang', 'Latar'],
          jawaban: 'Amanat',
        },
        {
          id: 'sas11-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Ceramah yang baik harus memiliki struktur ...',
          pilihan: [
            'Pembuka, isi, penutup',
            'Pendahuluan, argumen',
            'Tema dan amanat',
            'Orientasi dan resolusi',
            'Abstrak dan isi',
          ],
          jawaban: 'Pembuka, isi, penutup',
        },
        {
          id: 'sas11-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Drama adalah karya sastra yang dipentaskan dengan menggunakan ...',
          pilihan: ['Puisi', 'Dialog', 'Narasi', 'Esai', 'Prosa'],
          jawaban: 'Dialog',
        },
        {
          id: 'sas11-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Resensi buku bertujuan untuk ...',
          pilihan: [
            'Menceritakan kembali isi buku',
            'Memberikan penilaian dan ulasan buku',
            'Meringkas isi buku',
            'Mengkritik penulis',
            'Mempromosikan buku',
          ],
          jawaban: 'Memberikan penilaian dan ulasan buku',
        },
      ],
    },

    // ── PPKN ────────────────────────────────────────────
    {
      mapel: 'PPKN',
      soal: [
        {
          id: 'pkn11-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Indonesia menganut sistem pemerintahan ...',
          pilihan: ['Presidensial', 'Parlementer', 'Semipresidensial', 'Monarki', 'Oligarki'],
          jawaban: 'Presidensial',
        },
        {
          id: 'pkn11-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Pemilu di Indonesia diselenggarakan setiap ...',
          pilihan: ['3 tahun', '4 tahun', '5 tahun', '6 tahun', '7 tahun'],
          jawaban: '5 tahun',
        },
        {
          id: 'pkn11-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Otonomi daerah di Indonesia diatur dalam UU nomor ...',
          pilihan: ['UU No. 22/1999', 'UU No. 32/2004', 'UU No. 23/2014', 'UU No. 12/2011', 'UU No. 10/2004'],
          jawaban: 'UU No. 23/2014',
        },
        {
          id: 'pkn11-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Lembaga yang berwenang mengadili sengketa pemilu adalah ...',
          pilihan: ['Mahkamah Agung', 'Mahkamah Konstitusi', 'KPU', 'Bawaslu', 'DPR'],
          jawaban: 'Mahkamah Konstitusi',
        },
        {
          id: 'pkn11-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Hubungan internasional Indonesia menganut prinsip ...',
          pilihan: [
            'Pro-Barat',
            'Bebas aktif',
            'Non-blok dan pasif',
            'Aliansi militer',
            'Isolasi diri',
          ],
          jawaban: 'Bebas aktif',
        },
      ],
    },
  ],

  // ══════════════════════════════════════════════════════
  //  KELAS 12
  // ══════════════════════════════════════════════════════
  12: [
    // ── Matematika ──────────────────────────────────────
    {
      mapel: 'Matematika',
      soal: [
        {
          id: 'mtk12-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Nilai rata-rata data: 5, 7, 8, 10, 10 adalah ...',
          pilihan: ['7', '8', '9', '10', '7,5'],
          jawaban: '8',
        },
        {
          id: 'mtk12-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Program linear: maksimalkan Z = 3x + 2y dengan x ≥ 0, y ≥ 0, x + y ≤ 4. Nilai maksimum Z adalah ...',
          pilihan: ['8', '10', '12', '14', '6'],
          jawaban: '12',
        },
        {
          id: 'mtk12-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Banyaknya cara memilih 3 orang dari 6 orang adalah ...',
          pilihan: ['18', '20', '24', '30', '15'],
          jawaban: '20',
        },
        {
          id: 'mtk12-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Jumlah deret geometri tak hingga dengan a = 4 dan r = ½ adalah ...',
          pilihan: ['6', '8', '10', '12', '4'],
          jawaban: '8',
        },
        {
          id: 'mtk12-5', type: 'quiz',
          narasi: null,
          pertanyaan: '∫₀² 3x² dx = ...',
          pilihan: ['4', '6', '8', '10', '12'],
          jawaban: '8',
        },
      ],
    },

    // ── IPA ─────────────────────────────────────────────
    {
      mapel: 'IPA',
      soal: [
        {
          id: 'ipa12-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Hukum Mendel I tentang pemisahan gen disebut ...',
          pilihan: [
            'Law of Dominance',
            'Law of Segregation',
            'Law of Independent Assortment',
            'Law of Heredity',
            'Law of Variation',
          ],
          jawaban: 'Law of Segregation',
        },
        {
          id: 'ipa12-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Teori evolusi Darwin menyatakan bahwa makhluk hidup berevolusi melalui ...',
          pilihan: [
            'Mutasi gen',
            'Seleksi alam',
            'Adaptasi morfologi',
            'Rekombinasi DNA',
            'Hibridisasi',
          ],
          jawaban: 'Seleksi alam',
        },
        {
          id: 'ipa12-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Bioteknologi konvensional menggunakan prinsip ...',
          pilihan: [
            'Rekayasa genetika',
            'Fermentasi oleh mikroorganisme',
            'Kloning sel',
            'Kultur jaringan',
            'PCR',
          ],
          jawaban: 'Fermentasi oleh mikroorganisme',
        },
        {
          id: 'ipa12-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Inti atom terdiri dari ...',
          pilihan: [
            'Elektron dan neutron',
            'Proton dan elektron',
            'Proton dan neutron',
            'Neutron dan positron',
            'Elektron dan positron',
          ],
          jawaban: 'Proton dan neutron',
        },
        {
          id: 'ipa12-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Polimer alami yang menyusun dinding sel tumbuhan adalah ...',
          pilihan: ['Protein', 'Lemak', 'Selulosa', 'Glikogen', 'Kitin'],
          jawaban: 'Selulosa',
        },
      ],
    },

    // ── IPS ─────────────────────────────────────────────
    {
      mapel: 'IPS',
      soal: [
        {
          id: 'ips12-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Kebijakan moneter yang menurunkan jumlah uang beredar disebut ...',
          pilihan: ['Ekspansif', 'Kontraktif', 'Fiskal', 'Protektif', 'Liberalisasi'],
          jawaban: 'Kontraktif',
        },
        {
          id: 'ips12-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Bursa Efek Indonesia (BEI) memperjualbelikan ...',
          pilihan: ['Valuta asing', 'Obligasi pemerintah', 'Saham dan obligasi', 'Komoditas', 'Devisa'],
          jawaban: 'Saham dan obligasi',
        },
        {
          id: 'ips12-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Organisasi perdagangan internasional adalah ...',
          pilihan: ['WHO', 'WTO', 'IMF', 'ASEAN', 'UNESCO'],
          jawaban: 'WTO',
        },
        {
          id: 'ips12-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Pembangunan berkelanjutan (sustainable development) memiliki tiga pilar yaitu ...',
          pilihan: [
            'Ekonomi, sosial, lingkungan',
            'Pemerintah, swasta, masyarakat',
            'Pertanian, industri, jasa',
            'Lokal, nasional, internasional',
            'Produksi, distribusi, konsumsi',
          ],
          jawaban: 'Ekonomi, sosial, lingkungan',
        },
        {
          id: 'ips12-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Neraca perdagangan dikatakan surplus jika ...',
          pilihan: [
            'Impor > Ekspor',
            'Ekspor = Impor',
            'Ekspor > Impor',
            'Impor = 0',
            'Ekspor = 0',
          ],
          jawaban: 'Ekspor > Impor',
        },
      ],
    },

    // ── Sejarah ─────────────────────────────────────────
    {
      mapel: 'Sejarah',
      soal: [
        {
          id: 'sej12-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Presiden pertama Indonesia yang menjabat pada masa Orde Lama adalah ...',
          pilihan: ['Soeharto', 'Habibie', 'Soekarno', 'Wahid', 'Megawati'],
          jawaban: 'Soekarno',
        },
        {
          id: 'sej12-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Orde Baru di Indonesia dipimpin oleh ...',
          pilihan: ['Soekarno', 'Habibie', 'Soeharto', 'Wahid', 'Megawati'],
          jawaban: 'Soeharto',
        },
        {
          id: 'sej12-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Reformasi 1998 dipicu oleh krisis ekonomi dan jatuhnya pemerintahan ...',
          pilihan: ['Soekarno', 'Habibie', 'Soeharto', 'Wahid', 'Yudhoyono'],
          jawaban: 'Soeharto',
        },
        {
          id: 'sej12-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'ASEAN didirikan pada tahun ...',
          pilihan: ['1965', '1966', '1967', '1968', '1970'],
          jawaban: '1967',
        },
        {
          id: 'sej12-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Peristiwa G30S/PKI terjadi pada tahun ...',
          pilihan: ['1963', '1964', '1965', '1966', '1967'],
          jawaban: '1965',
        },
      ],
    },

    // ── Sastra ──────────────────────────────────────────
    {
      mapel: 'Sastra',
      soal: [
        {
          id: 'sas12-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Teks editorial adalah teks yang berisi ...',
          pilihan: [
            'Berita faktual',
            'Pendapat redaksi tentang isu terkini',
            'Laporan investigasi',
            'Iklan layanan masyarakat',
            'Cerpen pendek',
          ],
          jawaban: 'Pendapat redaksi tentang isu terkini',
        },
        {
          id: 'sas12-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'Surat lamaran kerja yang baik menggunakan bahasa yang ...',
          pilihan: ['Santai dan informal', 'Formal dan sopan', 'Puitis', 'Singkat tanpa perincian', 'Berlebihan'],
          jawaban: 'Formal dan sopan',
        },
        {
          id: 'sas12-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Karya ilmiah harus bersifat ...',
          pilihan: ['Subjektif', 'Objektif dan sistematis', 'Kreatif bebas', 'Berdasarkan opini', 'Ekspresif'],
          jawaban: 'Objektif dan sistematis',
        },
        {
          id: 'sas12-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Angkatan Balai Pustaka dalam sastra Indonesia ditandai oleh karya ...',
          pilihan: [
            'Chairil Anwar',
            'Pramoedya Ananta Toer',
            'Marah Rusli',
            'Taufiq Ismail',
            'Sutan Takdir Alisjahbana',
          ],
          jawaban: 'Marah Rusli',
        },
        {
          id: 'sas12-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Artikel ilmiah populer berbeda dengan jurnal ilmiah karena ...',
          pilihan: [
            'Lebih panjang',
            'Menggunakan bahasa yang lebih mudah dipahami publik',
            'Lebih banyak referensi',
            'Ditulis oleh beberapa penulis',
            'Tidak boleh memiliki opini',
          ],
          jawaban: 'Menggunakan bahasa yang lebih mudah dipahami publik',
        },
      ],
    },

    // ── PPKN ────────────────────────────────────────────
    {
      mapel: 'PPKN',
      soal: [
        {
          id: 'pkn12-1', type: 'quiz',
          narasi: null,
          pertanyaan: 'Ancaman terhadap NKRI yang berasal dari dalam negeri disebut ancaman ...',
          pilihan: ['Eksternal', 'Internal', 'Bilateral', 'Multidimensional', 'Lateral'],
          jawaban: 'Internal',
        },
        {
          id: 'pkn12-2', type: 'quiz',
          narasi: null,
          pertanyaan: 'HAM bersifat universal artinya ...',
          pilihan: [
            'Hanya untuk warga negara',
            'Berlaku di negara maju saja',
            'Berlaku untuk semua manusia di mana saja',
            'Bergantung pada hukum negara masing-masing',
            'Hanya berlaku saat damai',
          ],
          jawaban: 'Berlaku untuk semua manusia di mana saja',
        },
        {
          id: 'pkn12-3', type: 'quiz',
          narasi: null,
          pertanyaan: 'Amendemen UUD 1945 dilakukan sebanyak ...',
          pilihan: ['2 kali', '3 kali', '4 kali', '5 kali', '1 kali'],
          jawaban: '4 kali',
        },
        {
          id: 'pkn12-4', type: 'quiz',
          narasi: null,
          pertanyaan: 'Identitas nasional Indonesia salah satunya adalah ...',
          pilihan: ['Bahasa Jawa', 'Bahasa Indonesia', 'Bahasa Melayu', 'Bahasa Sunda', 'Bahasa Inggris'],
          jawaban: 'Bahasa Indonesia',
        },
        {
          id: 'pkn12-5', type: 'quiz',
          narasi: null,
          pertanyaan: 'Keadilan sosial bagi seluruh rakyat Indonesia merupakan bunyi sila ke ...',
          pilihan: ['1', '2', '3', '4', '5'],
          jawaban: '5',
        },
      ],
    },
  ],
}

export default PLACEMENT_SOAL
