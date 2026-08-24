const data = [
  {
    id: 1,
    mapel: "IPS",
    kelas: 10,
    modul: [
      {
        id: 121,
        bab: 1,
        judul: "Manusia dan Ruang Kebumian",
        soal: [
          {
            id: 1,
            judul: "Konsep Geografi",
            type: "drag and drop",
            narasi: "Geografi mempelajari hubungan manusia dengan lingkungannya. Terdapat sepuluh konsep dasar geografi yang membantu memahami fenomena keruangan di permukaan bumi.",
            pertanyaan: "Pasangkan konsep geografi dengan contohnya",
            ilustrasi: null,
            pilihan: ["Lokasi", "Jarak", "Morfologi"],
            jawaban: ["Letak suatu tempat di bumi", "Jauh-dekat antar tempat", "Bentuk relief permukaan bumi"]
          },
          {
            id: 2,
            judul: "Peta dan Komponennya",
            type: "quiz",
            narasi: "Peta adalah gambaran permukaan bumi pada bidang datar dengan skala tertentu. Komponen peta meliputi judul, skala, legenda, arah mata angin, dan koordinat.",
            pertanyaan: "Komponen peta yang menjelaskan arti simbol-simbol pada peta disebut...",
            ilustrasi: null,
            pilihan: ["A. Skala", "B. Legenda", "C. Judul", "D. Grid"],
            jawaban: "B. Legenda"
          },
          {
            id: 3,
            judul: "Istilah Keruangan",
            type: "TTS",
            narasi: "Pemahaman konsep keruangan sangat penting dalam mempelajari geografi.",
            pertanyaan: [
              "Gambaran bumi pada bidang datar disebut ...",
              "Perbandingan jarak di peta dengan jarak sebenarnya",
              "Garis khayal yang membagi bumi menjadi utara dan selatan"
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Peta", "Skala", "Khatulistiwa"]
          }
        ]
      },
      {
        id: 122,
        bab: 2,
        judul: "Keragaman Budaya Indonesia",
        soal: [
          {
            id: 1,
            judul: "Faktor Keberagaman Budaya",
            type: "drag and drop",
            narasi: "Indonesia memiliki keberagaman budaya yang sangat kaya akibat berbagai faktor, mulai dari kondisi geografis, sejarah, hingga pengaruh luar.",
            pertanyaan: "Pasangkan faktor dengan pengaruhnya terhadap keberagaman budaya",
            ilustrasi: null,
            pilihan: ["Kepulauan", "Letak strategis", "Kondisi alam berbeda"],
            jawaban: ["Isolasi menghasilkan budaya unik", "Masuknya pengaruh asing", "Adaptasi menghasilkan tradisi berbeda"]
          },
          {
            id: 2,
            judul: "Bhinneka Tunggal Ika",
            type: "quiz",
            narasi: "Bhinneka Tunggal Ika berarti 'Berbeda-beda tetapi tetap satu'. Semboyan ini mencerminkan persatuan Indonesia di tengah keberagaman suku, agama, ras, dan budaya.",
            pertanyaan: "Semboyan Bhinneka Tunggal Ika diambil dari kitab...",
            ilustrasi: null,
            pilihan: ["A. Negarakertagama", "B. Sutasoma", "C. Ramayana", "D. Mahabarata"],
            jawaban: "B. Sutasoma"
          },
          {
            id: 3,
            judul: "Suku dan Bahasa Daerah",
            type: "quiz",
            narasi: "Indonesia memiliki lebih dari 1.300 suku bangsa dan 700 bahasa daerah. Keberagaman ini merupakan kekayaan yang harus dijaga dan dilestarikan.",
            pertanyaan: "Provinsi dengan jumlah bahasa daerah terbanyak di Indonesia adalah...",
            ilustrasi: null,
            pilihan: ["A. Jawa Barat", "B. Papua", "C. Sulawesi Selatan", "D. Kalimantan"],
            jawaban: "B. Papua"
          }
        ]
      },
      {
        id: 123,
        bab: 3,
        judul: "Sejarah Awal Masyarakat Indonesia",
        soal: [
          {
            id: 1,
            judul: "Masa Praaksara",
            type: "drag and drop",
            narasi: "Masa praaksara adalah masa sebelum manusia mengenal tulisan. Pada masa ini, manusia mengandalkan batu dan tulang sebagai alat untuk bertahan hidup.",
            pertanyaan: "Pasangkan zaman praaksara dengan ciri-cirinya",
            ilustrasi: null,
            pilihan: ["Paleolitikum", "Mesolitikum", "Neolitikum"],
            jawaban: ["Alat batu kasar, nomaden", "Kjokkenmoddinger, semi-nomaden", "Alat batu halus, pertanian awal"]
          },
          {
            id: 2,
            judul: "Manusia Purba di Indonesia",
            type: "quiz",
            narasi: "Indonesia kaya akan fosil manusia purba. Meganthropus paleojavanicus ditemukan di Sangiran, Jawa Tengah dan merupakan manusia purba tertua yang ditemukan di Indonesia.",
            pertanyaan: "Manusia purba yang fosilnya ditemukan di Trinil, Jawa Timur adalah...",
            ilustrasi: null,
            pilihan: ["A. Homo sapiens", "B. Pithecanthropus erectus", "C. Meganthropus", "D. Homo floresiensis"],
            jawaban: "B. Pithecanthropus erectus"
          },
          {
            id: 3,
            judul: "Peninggalan Praaksara",
            type: "TTS",
            narasi: "Peninggalan masa praaksara memberikan petunjuk tentang kehidupan manusia purba.",
            pertanyaan: [
              "Lukisan di dinding gua peninggalan manusia purba disebut ...",
              "Alat dari tulang dan tanduk binatang disebut budaya ...",
              "Tumpukan sampah dapur masa praaksara disebut ..."
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Seni cadas", "Tulang", "Kjokkenmoddinger"]
          }
        ]
      },
      {
        id: 124,
        bab: 4,
        judul: "Kehidupan Sosial Masyarakat",
        soal: [
          {
            id: 1,
            judul: "Struktur Sosial",
            type: "drag and drop",
            narasi: "Struktur sosial adalah tatanan atau susunan sosial dalam masyarakat. Terdiri dari status sosial, peran sosial, dan kelompok sosial yang saling berkaitan.",
            pertanyaan: "Pasangkan konsep dengan definisinya",
            ilustrasi: null,
            pilihan: ["Status sosial", "Peran sosial", "Kelompok sosial"],
            jawaban: ["Kedudukan seseorang dalam masyarakat", "Perilaku yang diharapkan dari status tertentu", "Kumpulan individu yang berinteraksi"]
          },
          {
            id: 2,
            judul: "Lembaga Sosial",
            type: "quiz",
            narasi: "Lembaga sosial adalah sistem norma untuk mengatur kegiatan masyarakat dalam memenuhi kebutuhan. Contoh: keluarga, agama, pendidikan, ekonomi, dan politik.",
            pertanyaan: "Lembaga sosial yang pertama dan utama dalam membentuk kepribadian individu adalah...",
            ilustrasi: null,
            pilihan: ["A. Sekolah", "B. Keluarga", "C. Agama", "D. Pemerintah"],
            jawaban: "B. Keluarga"
          },
          {
            id: 3,
            judul: "Mobilitas Sosial",
            type: "quiz",
            narasi: "Mobilitas sosial adalah perpindahan posisi seseorang atau sekelompok orang dari satu lapisan sosial ke lapisan lain. Bisa naik (vertikal ke atas) atau turun (vertikal ke bawah).",
            pertanyaan: "Seorang petani yang berhasil menjadi pengusaha sukses merupakan contoh mobilitas sosial...",
            ilustrasi: null,
            pilihan: ["A. Horizontal", "B. Vertikal ke bawah", "C. Vertikal ke atas", "D. Lateral"],
            jawaban: "C. Vertikal ke atas"
          }
        ]
      },
      {
        id: 125,
        bab: 5,
        judul: "Ekonomi Dasar",
        soal: [
          {
            id: 1,
            judul: "Kebutuhan dan Kelangkaan",
            type: "drag and drop",
            narasi: "Kebutuhan manusia tidak terbatas, sementara alat pemuas kebutuhan terbatas. Kondisi inilah yang disebut kelangkaan (scarcity) dan menjadi dasar masalah ekonomi.",
            pertanyaan: "Klasifikasikan kebutuhan berdasarkan tingkat kepentingannya",
            ilustrasi: null,
            pilihan: ["Makan dan minum", "Pakaian dan rumah", "Hiburan dan rekreasi"],
            jawaban: ["Kebutuhan primer", "Kebutuhan sekunder", "Kebutuhan tersier"]
          },
          {
            id: 2,
            judul: "Sistem Ekonomi",
            type: "quiz",
            narasi: "Sistem ekonomi adalah cara suatu negara mengatur kegiatan ekonominya. Ada tiga jenis utama: tradisional, komando (terpusat), dan pasar (liberal), serta campuran dari keduanya.",
            pertanyaan: "Sistem ekonomi yang dianut Indonesia berdasarkan Pancasila dan UUD 1945 adalah...",
            ilustrasi: null,
            pilihan: ["A. Sistem ekonomi pasar", "B. Sistem ekonomi komando", "C. Sistem ekonomi campuran", "D. Sistem ekonomi tradisional"],
            jawaban: "C. Sistem ekonomi campuran"
          },
          {
            id: 3,
            judul: "Istilah Ekonomi Dasar",
            type: "TTS",
            narasi: "Memahami istilah-istilah dasar ekonomi membantu kita memahami fenomena ekonomi dalam kehidupan sehari-hari.",
            pertanyaan: [
              "Kondisi di mana kebutuhan lebih besar dari alat pemuas disebut ...",
              "Kegiatan menggunakan barang atau jasa disebut ...",
              "Kegiatan menghasilkan barang atau jasa disebut ..."
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Kelangkaan", "Konsumsi", "Produksi"]
          }
        ]
      }
    ]
  }
]

export default data
