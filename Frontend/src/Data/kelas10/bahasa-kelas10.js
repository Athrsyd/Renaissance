const data = [
  {
    id: 1,
    mapel: "Bahasa dan Sastra",
    kelas: 10,
    modul: [
      {
        id: 141,
        bab: 1,
        judul: "Teks Laporan Hasil Observasi",
        soal: [
          {
            id: 1,
            judul: "Pengertian Teks LHO",
            type: "quiz",
            narasi: "Teks Laporan Hasil Observasi (LHO) adalah teks yang berisi informasi tentang sesuatu berdasarkan hasil pengamatan langsung. Teks ini bersifat objektif, faktual, dan tidak memihak.",
            pertanyaan: "Ciri utama teks laporan hasil observasi adalah...",
            ilustrasi: null,
            pilihan: ["A. Bersifat subjektif dan opini", "B. Berisi pendapat penulis", "C. Objektif berdasarkan fakta", "D. Bersifat imajinasi"],
            jawaban: "C. Objektif berdasarkan fakta"
          },
          {
            id: 2,
            judul: "Struktur Teks LHO",
            type: "drag and drop",
            narasi: "Teks LHO memiliki struktur yang khas: pernyataan umum (klasifikasi), deskripsi bagian, dan deskripsi manfaat. Struktur ini memudahkan pembaca memahami isi laporan.",
            pertanyaan: "Urutkan struktur teks LHO yang benar",
            ilustrasi: null,
            pilihan: ["Deskripsi manfaat", "Pernyataan umum", "Deskripsi bagian"],
            jawaban: ["Pernyataan umum", "Deskripsi bagian", "Deskripsi manfaat"]
          },
          {
            id: 3,
            judul: "Ciri Kebahasaan Teks LHO",
            type: "TTS",
            narasi: "Teks LHO menggunakan bahasa yang khusus untuk menyampaikan hasil pengamatan secara akurat.",
            pertanyaan: [
              "Kata yang digunakan untuk mengklasifikasikan disebut kata ...",
              "Penggunaan kata yang bersifat ilmiah dan teknis disebut ...",
              "Kalimat yang menyatakan fakta disebut kalimat ..."
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Hubungan", "Istilah", "Fakta"]
          }
        ]
      },
      {
        id: 142,
        bab: 2,
        judul: "Teks Eksposisi",
        soal: [
          {
            id: 1,
            judul: "Pengertian Teks Eksposisi",
            type: "quiz",
            narasi: "Teks eksposisi adalah teks yang bertujuan untuk menyampaikan pendapat atau argumen penulis tentang suatu masalah disertai fakta-fakta untuk memperkuat pendapat tersebut.",
            pertanyaan: "Tujuan utama teks eksposisi adalah...",
            ilustrasi: null,
            pilihan: ["A. Menghibur pembaca", "B. Meyakinkan dengan argumen", "C. Menceritakan kisah nyata", "D. Memberi instruksi"],
            jawaban: "B. Meyakinkan dengan argumen"
          },
          {
            id: 2,
            judul: "Struktur Teks Eksposisi",
            type: "drag and drop",
            narasi: "Teks eksposisi tersusun atas tesis (pernyataan pendapat), argumentasi (alasan pendukung), dan penegasan ulang (penutup yang menegaskan kembali tesis).",
            pertanyaan: "Urutkan struktur teks eksposisi",
            ilustrasi: null,
            pilihan: ["Argumentasi", "Penegasan ulang", "Tesis"],
            jawaban: ["Tesis", "Argumentasi", "Penegasan ulang"]
          },
          {
            id: 3,
            judul: "Jenis Pola Pengembangan",
            type: "quiz",
            narasi: "Teks eksposisi dapat dikembangkan dengan berbagai pola: definisi, ilustrasi, perbandingan, sebab-akibat, dan proses. Pola ini memperkuat argumen yang disajikan.",
            pertanyaan: "Pola eksposisi yang menjelaskan hubungan sebab dan akibat dari suatu fenomena disebut pola...",
            ilustrasi: null,
            pilihan: ["A. Ilustrasi", "B. Definisi", "C. Kausalitas", "D. Perbandingan"],
            jawaban: "C. Kausalitas"
          }
        ]
      },
      {
        id: 143,
        bab: 3,
        judul: "Teks Anekdot",
        soal: [
          {
            id: 1,
            judul: "Mengenal Teks Anekdot",
            type: "quiz",
            narasi: "Teks anekdot adalah cerita singkat yang menarik dan mengandung humor dengan tujuan untuk mengkritik. Biasanya mengkritik keadaan sosial atau perilaku seseorang secara tidak langsung.",
            pertanyaan: "Fungsi utama teks anekdot adalah...",
            ilustrasi: null,
            pilihan: ["A. Menghibur saja", "B. Mengkritik melalui humor", "C. Memberi informasi ilmiah", "D. Menjelaskan prosedur"],
            jawaban: "B. Mengkritik melalui humor"
          },
          {
            id: 2,
            judul: "Struktur Teks Anekdot",
            type: "drag and drop",
            narasi: "Teks anekdot memiliki struktur: abstrak (gambaran umum), orientasi (latar belakang), krisis (masalah), reaksi (solusi), dan koda (penutup/pesan).",
            pertanyaan: "Pasangkan bagian struktur anekdot dengan fungsinya",
            ilustrasi: null,
            pilihan: ["Abstrak", "Krisis", "Koda"],
            jawaban: ["Gambaran umum cerita", "Masalah/konflik yang muncul", "Penutup berisi pesan moral"]
          },
          {
            id: 3,
            judul: "Unsur Humor dalam Anekdot",
            type: "TTS",
            narasi: "Humor dalam anekdot biasanya muncul dari perbedaan antara ekspektasi dan kenyataan, atau dari sindiran yang cerdas.",
            pertanyaan: [
              "Bagian paling lucu dalam anekdot disebut ...",
              "Tujuan humor dalam anekdot adalah untuk ...",
              "Kritik yang disampaikan secara halus melalui humor disebut ..."
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Punchline", "Mengkritik", "Sindiran"]
          }
        ]
      },
      {
        id: 144,
        bab: 4,
        judul: "Puisi Lama dan Baru",
        soal: [
          {
            id: 1,
            judul: "Jenis Puisi Lama",
            type: "drag and drop",
            narasi: "Puisi lama adalah puisi yang terikat aturan baku, seperti jumlah baris, suku kata, dan rima. Jenis puisi lama antara lain pantun, syair, gurindam, dan seloka.",
            pertanyaan: "Pasangkan jenis puisi lama dengan ciri-cirinya",
            ilustrasi: null,
            pilihan: ["Pantun", "Syair", "Gurindam"],
            jawaban: ["4 baris, 2 sampiran 2 isi", "Semua baris adalah isi, berima aaaa", "2 baris, bersifat nasihat, berima aa"]
          },
          {
            id: 2,
            judul: "Puisi Baru",
            type: "quiz",
            narasi: "Puisi baru tidak terikat aturan ketat seperti puisi lama. Puisi baru lebih bebas dalam bentuk, tetapi tetap memperhatikan keindahan bahasa, rima, dan irama.",
            pertanyaan: "Puisi baru yang mengutamakan kebebasan ekspresi tanpa aturan baku disebut puisi...",
            ilustrasi: null,
            pilihan: ["A. Soneta", "B. Balada", "C. Bebas", "D. Ode"],
            jawaban: "C. Bebas"
          },
          {
            id: 3,
            judul: "Unsur Pembangun Puisi",
            type: "TTS",
            narasi: "Puisi dibangun oleh unsur-unsur yang membentuk keindahan dan kedalaman maknanya.",
            pertanyaan: [
              "Pemilihan kata yang tepat dalam puisi disebut ...",
              "Perulangan bunyi di akhir baris puisi disebut ...",
              "Makna tersembunyi dalam puisi disebut makna ..."
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Diksi", "Rima", "Konotasi"]
          }
        ]
      },
      {
        id: 145,
        bab: 5,
        judul: "Teks Negosiasi",
        soal: [
          {
            id: 1,
            judul: "Pengertian Negosiasi",
            type: "quiz",
            narasi: "Negosiasi adalah proses tawar-menawar yang dilakukan dua pihak atau lebih untuk mencapai kesepakatan yang saling menguntungkan. Negosiasi terjadi dalam berbagai situasi: jual-beli, bisnis, diplomatik.",
            pertanyaan: "Tujuan negosiasi adalah...",
            ilustrasi: null,
            pilihan: ["A. Mengalahkan lawan", "B. Mencapai kesepakatan bersama", "C. Memaksakan kehendak", "D. Menghindari konflik"],
            jawaban: "B. Mencapai kesepakatan bersama"
          },
          {
            id: 2,
            judul: "Struktur Teks Negosiasi",
            type: "drag and drop",
            narasi: "Teks negosiasi memiliki struktur yang khas yang menggambarkan proses tawar-menawar hingga tercapai kesepakatan.",
            pertanyaan: "Urutkan struktur teks negosiasi",
            ilustrasi: null,
            pilihan: ["Penawaran", "Persetujuan", "Orientasi"],
            jawaban: ["Orientasi", "Penawaran", "Persetujuan"]
          },
          {
            id: 3,
            judul: "Strategi Negosiasi",
            type: "quiz",
            narasi: "Negosiasi yang efektif memerlukan strategi yang tepat, termasuk kemampuan mendengarkan, menyampaikan argumen, dan mencari solusi win-win.",
            pertanyaan: "Hasil negosiasi yang paling ideal adalah...",
            ilustrasi: null,
            pilihan: ["A. Satu pihak menang total", "B. Tidak ada kesepakatan", "C. Kedua pihak puas (win-win)", "D. Pihak yang kuat menang"],
            jawaban: "C. Kedua pihak puas (win-win)"
          }
        ]
      }
    ]
  }
]

export default data
