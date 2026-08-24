const data = [
  {
    id: 1, mapel: "Sejarah", kelas: 11,
    modul: [
      { id: 231, bab: 1, judul: "Perang Dunia I dan Dampaknya",
        soal: [
          { id: 1, judul: "Latar Belakang PD I", type: "drag and drop", narasi: "Perang Dunia I (1914-1918) disebabkan oleh faktor MAIN: Militerisme, Aliansi, Imperialisme, dan Nasionalisme, ditambah pemicu langsung pembunuhan Archduke Franz Ferdinand.", pertanyaan: "Pasangkan faktor MAIN dengan maknanya", ilustrasi: null, pilihan: ["Militerisme","Aliansi","Nasionalisme"], jawaban: ["Perlombaan senjata antar negara","Pakta pertahanan bersama","Semangat kebangsaan yang berlebihan"] }
        ,
          { id: 2, judul: "Blok Perang Dunia I", type: "quiz", narasi: "PD I melibatkan dua blok: Sekutu (Inggris, Prancis, Rusia, Italia) melawan Blok Sentral (Jerman, Austria-Hungaria, Turki Usmani).", pertanyaan: "Jerman termasuk dalam blok...", ilustrasi: null, pilihan: ["A. Sekutu","B. Sentral","C. Netral","D. Non-blok"], jawaban: "B. Sentral" }
        ,
          { id: 3, judul: "Dampak PD I", type: "TTS", narasi: "PD I mengubah peta dunia secara drastis dan melahirkan lembaga internasional baru.", pertanyaan: ["Organisasi internasional yang dibentuk setelah PD I disebut ...","Perjanjian yang mengakhiri PD I adalah Perjanjian ...","Kehancuran ekonomi Jerman akibat PD I memicu munculnya ..."], ilustrasi: null, pilihan: null, jawaban: ["Liga Bangsa-Bangsa","Versailles","Fasisme"] }
        ]
      },
      { id: 232, bab: 2, judul: "Perang Dunia II",
        soal: [
          { id: 1, judul: "Latar Belakang PD II", type: "quiz", narasi: "PD II (1939-1945) dipicu oleh invasi Jerman ke Polandia pada 1 September 1939. Latar belakangnya: kebijakan Nazi Jerman, krisis ekonomi global, dan lemahnya Liga Bangsa-Bangsa.", pertanyaan: "PD II dimulai ketika Jerman menginvasi...", ilustrasi: null, pilihan: ["A. Prancis","B. Uni Soviet","C. Polandia","D. Inggris"], jawaban: "C. Polandia" }
        ,
          { id: 2, judul: "Blok Sekutu vs Poros", type: "drag and drop", narasi: "PD II melibatkan Blok Sekutu (AS, Inggris, Soviet, Prancis) melawan Blok Poros (Jerman, Italia, Jepang).", pertanyaan: "Pasangkan negara dengan bloknya dalam PD II", ilustrasi: null, pilihan: ["Amerika Serikat","Jerman Nazi","Jepang","Inggris"], jawaban: ["Sekutu","Poros","Poros","Sekutu"] }
        ,
          { id: 3, judul: "Akhir PD II", type: "quiz", narasi: "PD II berakhir tahun 1945: di Eropa dengan menyerahnya Jerman (8 Mei 1945) dan di Asia-Pasifik dengan menyerahnya Jepang (15 Agustus 1945) setelah bom atom Hiroshima-Nagasaki.", pertanyaan: "Jepang menyerah dalam PD II setelah bom atom dijatuhkan di kota...", ilustrasi: null, pilihan: ["A. Tokyo dan Osaka","B. Hiroshima dan Nagasaki","C. Kyoto dan Kobe","D. Yokohama dan Sendai"], jawaban: "B. Hiroshima dan Nagasaki" }
        ]
      },
      { id: 233, bab: 3, judul: "Pergerakan Nasional Indonesia",
        soal: [
          { id: 1, judul: "Kebangkitan Nasional", type: "quiz", narasi: "Kebangkitan Nasional Indonesia ditandai dengan berdirinya Budi Utomo pada 20 Mei 1908, yang diperingati sebagai Hari Kebangkitan Nasional.", pertanyaan: "Organisasi yang menandai kebangkitan nasional Indonesia adalah...", ilustrasi: null, pilihan: ["A. Sarekat Islam","B. Budi Utomo","C. Indische Partij","D. PKI"], jawaban: "B. Budi Utomo" }
        ,
          { id: 2, judul: "Sumpah Pemuda 1928", type: "drag and drop", narasi: "Sumpah Pemuda diikrarkan pada 28 Oktober 1928 sebagai puncak Kongres Pemuda II. Ikrar ini menegaskan persatuan pemuda Indonesia.", pertanyaan: "Lengkapi isi Sumpah Pemuda", ilustrasi: null, pilihan: ["Satu nusa","Satu bangsa","Satu bahasa"], jawaban: ["Indonesia","Indonesia","Indonesia"] }
        ,
          { id: 3, judul: "Tokoh Pergerakan", type: "TTS", narasi: "Para tokoh pergerakan nasional berjuang melalui berbagai cara untuk meraih kemerdekaan Indonesia.", pertanyaan: ["Pendiri Budi Utomo yang juga dokter terkenal adalah Dr. ...","Tokoh PNI yang menjadi presiden pertama RI adalah ...","Tokoh Sarekat Islam yang terkenal adalah H.O.S. ..."], ilustrasi: null, pilihan: null, jawaban: ["Soetomo","Soekarno","Cokroaminoto"] }
        ]
      },
      { id: 234, bab: 4, judul: "Proklamasi dan Revolusi Kemerdekaan",
        soal: [
          { id: 1, judul: "Peristiwa Rengasdengklok", type: "quiz", narasi: "Pada 16 Agustus 1945, golongan muda membawa Soekarno-Hatta ke Rengasdengklok untuk mendesak agar proklamasi segera dikumandangkan tanpa menunggu Jepang.", pertanyaan: "Tujuan golongan muda membawa Soekarno-Hatta ke Rengasdengklok adalah...", ilustrasi: null, pilihan: ["A. Menyembunyikan dari Belanda","B. Mendesak proklamasi segera","C. Berunding dengan Jepang","D. Menghindari tentara Jepang"], jawaban: "B. Mendesak proklamasi segera" }
        ,
          { id: 2, judul: "Proklamasi 17 Agustus 1945", type: "drag and drop", narasi: "Teks proklamasi dibacakan Soekarno-Hatta di Jl. Pegangsaan Timur No. 56, Jakarta, pukul 10.00 WIB pada 17 Agustus 1945.", pertanyaan: "Susun kronologi peristiwa proklamasi", ilustrasi: null, pilihan: ["Pembacaan teks proklamasi","Rengasdengklok","Perumusan teks di rumah Maeda"], jawaban: ["Rengasdengklok","Perumusan teks di rumah Maeda","Pembacaan teks proklamasi"] }
        ,
          { id: 3, judul: "Pasca Proklamasi", type: "TTS", narasi: "Setelah proklamasi, Indonesia menghadapi perjuangan mempertahankan kemerdekaan dari ancaman penjajah.", pertanyaan: ["Pertempuran dahsyat di Surabaya pada 10 November 1945 melawan ...","Tokoh pemuda Surabaya yang terkenal dalam pertempuran 10 November adalah ...","Perjanjian yang mengakui kemerdekaan Indonesia oleh Belanda ditandatangani tahun ..."], ilustrasi: null, pilihan: null, jawaban: ["Inggris dan Belanda","Bung Tomo","1949"] }
        ]
      },
      { id: 235, bab: 5, judul: "Indonesia di Era Perang Dingin",
        soal: [
          { id: 1, judul: "Perang Dingin", type: "quiz", narasi: "Perang Dingin (1947-1991) adalah ketegangan ideologi antara Amerika Serikat (kapitalisme) dan Uni Soviet (komunisme) yang mempengaruhi seluruh dunia, termasuk Indonesia.", pertanyaan: "Perang Dingin adalah konflik antara...", ilustrasi: null, pilihan: ["A. AS dan Inggris","B. AS dan Uni Soviet","C. NATO dan Uni Soviet","D. AS dan Cina"], jawaban: "B. AS dan Uni Soviet" }
        ,
          { id: 2, judul: "Gerakan Non-Blok", type: "quiz", narasi: "Indonesia menjadi salah satu pendiri Gerakan Non-Blok (GNB) melalui Konferensi Asia-Afrika (1955) di Bandung. GNB menolak bergabung dengan blok Barat maupun Timur.", pertanyaan: "Konferensi Asia-Afrika yang menjadi cikal bakal GNB diadakan di...", ilustrasi: null, pilihan: ["A. Jakarta","B. Bandung","C. Surabaya","D. Yogyakarta"], jawaban: "B. Bandung" }
        ,
          { id: 3, judul: "Politik Luar Negeri Indonesia", type: "drag and drop", narasi: "Politik luar negeri Indonesia bersifat bebas-aktif: bebas dari pengaruh blok manapun, aktif berkontribusi dalam perdamaian dunia.", pertanyaan: "Pasangkan prinsip bebas-aktif dengan maknanya", ilustrasi: null, pilihan: ["Bebas","Aktif"], jawaban: ["Tidak memihak blok manapun","Ikut serta menjaga perdamaian dunia"] }
        ]
      }
    ]
  }
]
export default data
