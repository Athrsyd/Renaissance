const data = [
  {
    id: 1, mapel: "Bahasa dan Sastra", kelas: 12,
    modul: [
      { id: 341, bab: 1, judul: "Teks Editorial",
        soal: [
          { id: 1, judul: "Pengertian Teks Editorial", type: "quiz", narasi: "Teks editorial adalah artikel dalam surat kabar atau majalah yang menyatakan sikap redaksi terhadap isu atau peristiwa terkini. Bersifat persuasif dan argumentatif.", pertanyaan: "Yang membedakan editorial dari berita biasa adalah...", ilustrasi: null, pilihan: ["A. Editorial berisi fakta murni","B. Editorial mencerminkan pendapat redaksi","C. Editorial tidak boleh ada argumen","D. Editorial hanya tentang olahraga"], jawaban: "B. Editorial mencerminkan pendapat redaksi" },
          { id: 2, judul: "Struktur Editorial", type: "drag and drop", narasi: "Editorial memiliki struktur yang khas: pernyataan pendapat (tesis), argumentasi, dan rekomendasi/penegasan ulang.", pertanyaan: "Urutkan struktur teks editorial", ilustrasi: null, pilihan: ["Rekomendasi","Tesis/pernyataan pendapat","Argumentasi"], jawaban: ["Tesis/pernyataan pendapat","Argumentasi","Rekomendasi"] },
          { id: 3, judul: "Kalimat Persuasif", type: "TTS", narasi: "Editorial menggunakan kalimat persuasif untuk mempengaruhi pembaca agar setuju dengan pendapat redaksi.", pertanyaan: ["Kalimat yang bertujuan mengajak/membujuk disebut kalimat ...","Kata-kata yang menunjukkan kesimpulan seperti 'oleh karena itu' disebut ...","Gaya bahasa yang membandingkan dua hal berbeda disebut ..."], ilustrasi: null, pilihan: null, jawaban: ["Persuasif","Konjungsi simpulan","Metafora"] }
        ]
      },
      { id: 342, bab: 2, judul: "Surat Lamaran Pekerjaan",
        soal: [
          { id: 1, judul: "Komponen Surat Lamaran", type: "drag and drop", narasi: "Surat lamaran pekerjaan adalah surat formal yang dikirim pelamar kepada perusahaan untuk melamar posisi tertentu. Harus ditulis dengan bahasa resmi dan profesional.", pertanyaan: "Pasangkan komponen surat lamaran dengan posisinya", ilustrasi: null, pilihan: ["Tempat dan tanggal","Salam pembuka","Isi/tubuh surat","Penutup"], jawaban: ["Pojok kanan atas","Setelah perihal","Paragraf utama","Hormat kami/saya"] },
          { id: 2, judul: "Bahasa Surat Lamaran", type: "quiz", narasi: "Surat lamaran yang baik menggunakan bahasa formal, sopan, dan langsung ke inti. Hindari penggunaan bahasa yang terlalu panjang dan tidak relevan.", pertanyaan: "Kalimat pembuka yang tepat dalam surat lamaran pekerjaan adalah...", ilustrasi: null, pilihan: ["A. 'Halo, saya mau melamar pekerjaan'","B. 'Dengan hormat, saya yang bertanda tangan di bawah ini...'","C. 'Hey, saya tertarik dengan lowongan...'","D. 'Kepada siapa pun yang membaca ini...'"], jawaban: "B. 'Dengan hormat, saya yang bertanda tangan di bawah ini...'" },
          { id: 3, judul: "Curriculum Vitae", type: "TTS", narasi: "Curriculum Vitae (CV) atau daftar riwayat hidup adalah dokumen yang berisi informasi lengkap tentang identitas, pendidikan, pengalaman, dan keahlian pelamar.", pertanyaan: ["Singkatan dari Curriculum Vitae adalah ...","Bagian CV yang menjelaskan pencapaian terbaik disebut ...","CV yang hanya berisi keahlian dan portofolio disebut CV ..."], ilustrasi: null, pilihan: null, jawaban: ["CV","Prestasi","Fungsional"] }
        ]
      },
      { id: 343, bab: 3, judul: "Karya Ilmiah",
        soal: [
          { id: 1, judul: "Pengertian Karya Ilmiah", type: "quiz", narasi: "Karya ilmiah adalah karya tulis yang dibuat berdasarkan hasil penelitian dengan mengikuti metode ilmiah dan kaidah penulisan ilmiah. Contoh: makalah, skripsi, jurnal.", pertanyaan: "Ciri utama karya ilmiah adalah...", ilustrasi: null, pilihan: ["A. Subjektif dan imajinatif","B. Objektif, sistematis, dan berdasar data","C. Bebas tanpa aturan","D. Hanya berisi pendapat pribadi"], jawaban: "B. Objektif, sistematis, dan berdasar data" },
          { id: 2, judul: "Struktur Karya Ilmiah", type: "drag and drop", narasi: "Karya ilmiah memiliki struktur yang baku: pendahuluan, kajian teori, metode penelitian, hasil dan pembahasan, simpulan dan saran.", pertanyaan: "Urutkan bagian karya ilmiah secara benar", ilustrasi: null, pilihan: ["Simpulan dan saran","Pendahuluan","Hasil dan pembahasan","Metode penelitian"], jawaban: ["Pendahuluan","Metode penelitian","Hasil dan pembahasan","Simpulan dan saran"] },
          { id: 3, judul: "Penulisan Daftar Pustaka", type: "TTS", narasi: "Daftar pustaka adalah daftar semua sumber yang digunakan dalam karya ilmiah, disusun secara alfabetis.", pertanyaan: ["Sistem penulisan referensi ilmiah yang paling umum di Indonesia disebut ...","Sumber yang dikutip secara langsung dari teks asli disebut kutipan ...","Penulisan daftar pustaka dimulai dari nama ..."], ilustrasi: null, pilihan: null, jawaban: ["APA style","Langsung","Belakang"] }
        ]
      },
      { id: 344, bab: 4, judul: "Sastra Angkatan dan Perkembangannya",
        soal: [
          { id: 1, judul: "Periodisasi Sastra Indonesia", type: "drag and drop", narasi: "Sastra Indonesia berkembang melalui beberapa periode/angkatan yang masing-masing memiliki ciri dan tokoh khas.", pertanyaan: "Pasangkan angkatan sastra dengan tokohnya", ilustrasi: null, pilihan: ["Angkatan Balai Pustaka","Angkatan Pujangga Baru","Angkatan 45"], jawaban: ["Marah Rusli (Siti Nurbaya)","Sutan Takdir Alisjahbana","Chairil Anwar"] },
          { id: 2, judul: "Ciri Angkatan 45", type: "quiz", narasi: "Angkatan 45 (Chairil Anwar, Pramoedya) menandai semangat revolusi dan kebebasan berekspresi dalam sastra Indonesia. Pengaruh Barat mulai kuat, bahasa lebih bebas dan ekspresif.", pertanyaan: "Puisi 'Aku' yang terkenal ditulis oleh penyair Angkatan 45...", ilustrasi: null, pilihan: ["A. WS Rendra","B. Sapardi Djoko Damono","C. Chairil Anwar","D. Rendra"], jawaban: "C. Chairil Anwar" },
          { id: 3, judul: "Sastra Modern", type: "TTS", narasi: "Sastra Indonesia modern terus berkembang mengikuti zaman dengan tema yang semakin beragam dan media baru (sastra digital).", pertanyaan: ["Novel tetralogi Bumi Manusia ditulis oleh ...","Penulis perempuan Indonesia yang terkenal dengan novel-novel feminis adalah ...","Sastra yang ditulis dan disebarkan di internet disebut sastra ..."], ilustrasi: null, pilihan: null, jawaban: ["Pramoedya Ananta Toer","Dee Lestari","Digital"] }
        ]
      },
      { id: 345, bab: 5, judul: "Teks Artikel Ilmiah Populer",
        soal: [
          { id: 1, judul: "Perbedaan Artikel Ilmiah dan Ilmiah Populer", type: "quiz", narasi: "Artikel ilmiah populer menyajikan informasi ilmiah dengan bahasa yang lebih mudah dipahami masyarakat umum, berbeda dengan artikel ilmiah yang menggunakan bahasa teknis.", pertanyaan: "Perbedaan utama artikel ilmiah populer dengan artikel ilmiah adalah...", ilustrasi: null, pilihan: ["A. Artikel ilmiah populer tidak berdasar fakta","B. Bahasa ilmiah populer lebih mudah dipahami umum","C. Artikel ilmiah populer lebih panjang","D. Artikel ilmiah tidak butuh referensi"], jawaban: "B. Bahasa ilmiah populer lebih mudah dipahami umum" },
          { id: 2, judul: "Teknik Penyajian", type: "drag and drop", narasi: "Artikel ilmiah populer menggunakan berbagai teknik untuk menyajikan informasi ilmiah agar menarik dan mudah dipahami.", pertanyaan: "Pasangkan teknik penyajian dengan tujuannya", ilustrasi: null, pilihan: ["Analogi","Data statistik","Contoh konkret"], jawaban: ["Menjelaskan konsep sulit dengan perbandingan","Memperkuat argumen dengan angka","Membuat konsep abstrak lebih nyata"] },
          { id: 3, judul: "Menulis Artikel Ilmiah Populer", type: "TTS", narasi: "Menulis artikel ilmiah populer memerlukan kemampuan mensintesis informasi ilmiah dan menyajikannya dengan menarik.", pertanyaan: ["Bagian awal artikel yang berfungsi menarik minat pembaca disebut ...","Paragraf yang berisi inti gagasan artikel disebut paragraf ...","Kesimpulan yang mengajak pembaca bertindak disebut penutup yang ..."], ilustrasi: null, pilihan: null, jawaban: ["Lead/teras","Utama","Persuasif"] }
        ]
      }
    ]
  }
]
export default data
