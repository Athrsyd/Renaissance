const data = [
  {
    id: 1, mapel: "Sejarah", kelas: 12,
    modul: [
      { id: 331, bab: 1, judul: "Indonesia Masa Orde Lama",
        soal: [
          { id: 1, judul: "Demokrasi Liberal 1950-1959", type: "quiz", narasi: "Masa Demokrasi Liberal (1950-1959) ditandai dengan sistem multipartai dan kabinet yang sering berganti. Dalam 9 tahun, Indonesia memiliki 7 kabinet yang berbeda.", pertanyaan: "Penyebab utama sering bergantinya kabinet pada masa Demokrasi Liberal adalah...", ilustrasi: null, pilihan: ["A. Bencana alam","B. Sistem multipartai dan mosi tidak percaya parlemen","C. Tekanan militer","D. Intervensi asing"], jawaban: "B. Sistem multipartai dan mosi tidak percaya parlemen" },
          { id: 2, judul: "Dekrit Presiden 5 Juli 1959", type: "quiz", narasi: "Presiden Soekarno mengeluarkan Dekrit Presiden 5 Juli 1959 yang membubarkan Konstituante dan memberlakukan kembali UUD 1945 serta menghapus UUDS 1950.", pertanyaan: "Isi Dekrit Presiden 5 Juli 1959 adalah...", ilustrasi: null, pilihan: ["A. Membubarkan parlemen","B. Kembali ke UUD 1945 dan bubarkan Konstituante","C. Menyatakan keadaan darurat","D. Membentuk kabinet baru"], jawaban: "B. Kembali ke UUD 1945 dan bubarkan Konstituante" },
          { id: 3, judul: "Demokrasi Terpimpin", type: "TTS", narasi: "Masa Demokrasi Terpimpin (1959-1966) ditandai dengan dominasi Presiden Soekarno dan persaingan antara PKI, militer, dan agama.", pertanyaan: ["Konsep Soekarno yang menyatukan Nasionalis, Agama, dan Komunis disebut ...","Gerakan 30 September 1965 yang menewaskan jenderal-jenderal TNI disebut ...","Tahun berakhirnya kekuasaan Soekarno adalah ..."], ilustrasi: null, pilihan: null, jawaban: ["NASAKOM","G30S/PKI","1966"] }
        ]
      },
      { id: 332, bab: 2, judul: "Indonesia Masa Orde Baru",
        soal: [
          { id: 1, judul: "Awal Orde Baru", type: "quiz", narasi: "Orde Baru dimulai setelah Supersemar (Surat Perintah Sebelas Maret 1966) yang memberikan wewenang kepada Soeharto untuk mengambil tindakan demi keamanan nasional.", pertanyaan: "Supersemar diberikan kepada Soeharto pada tanggal...", ilustrasi: null, pilihan: ["A. 1 Maret 1966","B. 11 Maret 1966","C. 5 Juli 1966","D. 17 Agustus 1966"], jawaban: "B. 11 Maret 1966" },
          { id: 2, judul: "Pembangunan Ekonomi Orde Baru", type: "drag and drop", narasi: "Orde Baru berhasil mencapai pertumbuhan ekonomi yang signifikan melalui berbagai program pembangunan, termasuk Repelita dan Revolusi Hijau.", pertanyaan: "Pasangkan program Orde Baru dengan hasilnya", ilustrasi: null, pilihan: ["Repelita","Revolusi Hijau","KB (Keluarga Berencana)"], jawaban: ["Pembangunan bertahap 5 tahunan","Swasembada pangan","Pengendalian laju pertumbuhan penduduk"] },
          { id: 3, judul: "Runtuhnya Orde Baru", type: "quiz", narasi: "Orde Baru runtuh pada Mei 1998 akibat krisis ekonomi Asia 1997-1998, demonstrasi mahasiswa besar-besaran, dan tragedi Trisakti. Soeharto mengundurkan diri pada 21 Mei 1998.", pertanyaan: "Peristiwa yang menjadi pemicu demonstrasi besar menjelang kejatuhan Soeharto adalah...", ilustrasi: null, pilihan: ["A. Bom Bali","B. Tragedi Trisakti","C. Peristiwa Tanjung Priok","D. Peristiwa Semanggi"], jawaban: "B. Tragedi Trisakti" }
        ]
      },
      { id: 333, bab: 3, judul: "Reformasi dan Indonesia Modern",
        soal: [
          { id: 1, judul: "Era Reformasi", type: "drag and drop", narasi: "Era Reformasi dimulai setelah Soeharto mundur. Agenda reformasi mencakup demokratisasi, desentralisasi, penegakan hukum, dan kebebasan pers.", pertanyaan: "Pasangkan agenda reformasi dengan wujud nyatanya", ilustrasi: null, pilihan: ["Demokratisasi","Desentralisasi","Kebebasan pers"], jawaban: ["Pemilu langsung presiden","Otonomi daerah","Pencabutan SIUPP media"] },
          { id: 2, judul: "Amandemen UUD 1945", type: "quiz", narasi: "Salah satu pencapaian penting Reformasi adalah amandemen UUD 1945 sebanyak 4 kali (1999-2002) yang memperkuat checks and balances dan hak asasi manusia.", pertanyaan: "Perubahan terpenting dari amandemen UUD 1945 adalah...", ilustrasi: null, pilihan: ["A. Presiden dipilih parlemen","B. Presiden dipilih langsung rakyat","C. Menghapus DPR","D. Kembali ke UUD sementara"], jawaban: "B. Presiden dipilih langsung rakyat" },
          { id: 3, judul: "Indonesia di Abad 21", type: "TTS", narasi: "Indonesia terus berkembang sebagai negara demokrasi terbesar di Asia Tenggara dengan tantangan dan pencapaian di berbagai bidang.", pertanyaan: ["Pemilu presiden langsung pertama di Indonesia dilaksanakan tahun ...","Indonesia menjadi anggota kelompok negara ekonomi besar yang disebut ...","Presiden Indonesia yang terpilih dua periode 2014 dan 2019 adalah ..."], ilustrasi: null, pilihan: null, jawaban: ["2004","G20","Jokowi"] }
        ]
      },
      { id: 334, bab: 4, judul: "Sejarah Asia dan Pasifik",
        soal: [
          { id: 1, judul: "Kebangkitan Asia Timur", type: "quiz", narasi: "Asia Timur (Jepang, Korea Selatan, Taiwan, China) mengalami pertumbuhan ekonomi pesat pada abad 20-21. Keberhasilan ini disebut 'keajaiban ekonomi Asia Timur'.", pertanyaan: "Negara Asia yang menjadi kekuatan ekonomi terbesar kedua dunia adalah...", ilustrasi: null, pilihan: ["A. Jepang","B. Korea Selatan","C. China","D. India"], jawaban: "C. China" },
          { id: 2, judul: "Konflik di Asia Pasifik", type: "drag and drop", narasi: "Kawasan Asia Pasifik mengalami berbagai konflik sejak abad 20, baik konflik bersenjata maupun ketegangan politik.", pertanyaan: "Pasangkan konflik dengan negara/kawasannya", ilustrasi: null, pilihan: ["Perang Korea","Perang Vietnam","Konflik Laut China Selatan"], jawaban: ["Korea Utara vs Korea Selatan","AS vs Vietnam Utara","Klaim teritorial China vs negara ASEAN"] },
          { id: 3, judul: "ASEAN", type: "TTS", narasi: "ASEAN (Association of Southeast Asian Nations) didirikan pada 8 Agustus 1967 di Bangkok oleh 5 negara pendiri.", pertanyaan: ["ASEAN didirikan oleh ... negara pendiri","Negara pendiri ASEAN dari Asia Tenggara daratan adalah ...","Visi ASEAN 2025 adalah ASEAN ..."], ilustrasi: null, pilihan: null, jawaban: ["Lima","Thailand","Community"] }
        ]
      },
      { id: 335, bab: 5, judul: "Sejarah Kontemporer Dunia",
        soal: [
          { id: 1, judul: "Runtuhnya Uni Soviet", type: "quiz", narasi: "Uni Soviet runtuh pada 25 Desember 1991. Ini menandai berakhirnya Perang Dingin dan lahirnya 15 negara merdeka baru, termasuk Rusia sebagai pewaris utama.", pertanyaan: "Perang Dingin berakhir dengan runtuhnya...", ilustrasi: null, pilihan: ["A. Tembok Berlin saja","B. Uni Soviet","C. NATO","D. Pakta Warsawa"], jawaban: "B. Uni Soviet" },
          { id: 2, judul: "Konflik Timur Tengah", type: "drag and drop", narasi: "Timur Tengah adalah kawasan yang sering dilanda konflik akibat perebutan sumber daya minyak, persaingan agama, dan campur tangan negara besar.", pertanyaan: "Pasangkan peristiwa dengan tahun terjadinya", ilustrasi: null, pilihan: ["Invasi AS ke Irak","Revolusi Iran","Arab Spring"], jawaban: ["2003","1979","2010-2011"] },
          { id: 3, judul: "Globalisasi Abad 21", type: "TTS", narasi: "Abad 21 ditandai oleh percepatan globalisasi yang didorong oleh internet, media sosial, dan revolusi industri 4.0.", pertanyaan: ["Revolusi industri yang ditandai komputerisasi dan otomasi disebut Revolusi Industri ...","Teknologi kecerdasan buatan dalam bahasa Inggris adalah ...","Platform perdagangan digital disebut ..."], ilustrasi: null, pilihan: null, jawaban: ["Empat point nol","Artificial Intelligence","E-commerce"] }
        ]
      }
    ]
  }
]
export default data
