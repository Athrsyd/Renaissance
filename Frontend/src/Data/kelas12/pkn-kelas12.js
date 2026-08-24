const data = [
  {
    id: 1, mapel: "Pendidikan Pancasila", kelas: 12,
    modul: [
      { id: 351, bab: 1, judul: "Ancaman terhadap NKRI",
        soal: [
          { id: 1, judul: "Jenis Ancaman", type: "drag and drop", narasi: "Ancaman terhadap NKRI bisa datang dari dalam maupun luar negeri, bersifat militer maupun non-militer. Setiap warga negara harus siap menghadapi ancaman dalam bentuk apapun.", pertanyaan: "Klasifikasikan jenis ancaman berikut", ilustrasi: null, pilihan: ["Invasi militer asing","Terorisme","Korupsi"], jawaban: ["Ancaman militer dari luar","Ancaman non-militer dari dalam/luar","Ancaman non-militer dari dalam"] },
          { id: 2, judul: "Bela Negara", type: "quiz", narasi: "Bela negara adalah sikap dan perilaku warga negara yang dijiwai kecintaan kepada NKRI berdasarkan Pancasila dan UUD 1945. Tidak harus selalu berupa perjuangan fisik.", pertanyaan: "Contoh bela negara di era modern yang dapat dilakukan pelajar adalah...", ilustrasi: null, pilihan: ["A. Memanggul senjata","B. Berprestasi dan menjaga nama baik bangsa","C. Menjadi tentara","D. Ikut demonstrasi"], jawaban: "B. Berprestasi dan menjaga nama baik bangsa" },
          { id: 3, judul: "Sistem Pertahanan", type: "TTS", narasi: "Indonesia menganut sistem pertahanan semesta yang melibatkan seluruh komponen bangsa.", pertanyaan: ["Komponen utama pertahanan negara adalah ...","Komponen cadangan pertahanan negara adalah ...","Doktrin pertahanan Indonesia yang melibatkan seluruh rakyat disebut ..."], ilustrasi: null, pilihan: null, jawaban: ["TNI","Polri dan warga terlatih","Sishankamrata"] }
        ]
      },
      { id: 352, bab: 2, judul: "Demokrasi dan Hak Asasi Manusia",
        soal: [
          { id: 1, judul: "Perkembangan HAM", type: "drag and drop", narasi: "Hak Asasi Manusia adalah hak dasar yang dimiliki setiap manusia sejak lahir. Pengakuan HAM berkembang dari Magna Carta (1215) hingga UDHR (1948).", pertanyaan: "Urutkan perkembangan dokumen HAM internasional", ilustrasi: null, pilihan: ["UDHR PBB","Magna Carta","Bill of Rights"], jawaban: ["Magna Carta","Bill of Rights","UDHR PBB"] },
          { id: 2, judul: "HAM di Indonesia", type: "quiz", narasi: "HAM di Indonesia dijamin oleh UUD 1945 (Pasal 27-34) dan UU No. 39 Tahun 1999. Komnas HAM adalah lembaga yang bertugas mengawasi pelaksanaan HAM di Indonesia.", pertanyaan: "Lembaga negara yang bertugas mengawasi pelaksanaan HAM di Indonesia adalah...", ilustrasi: null, pilihan: ["A. KPK","B. Komnas HAM","C. Ombudsman","D. OJK"], jawaban: "B. Komnas HAM" },
          { id: 3, judul: "Pelanggaran HAM", type: "quiz", narasi: "Pelanggaran HAM adalah perbuatan yang mengurangi, membatasi, atau mencabut hak dasar seseorang. Pelanggaran berat: genosida dan kejahatan kemanusiaan.", pertanyaan: "Pemusnahan suatu kelompok etnis atau agama secara sistematis disebut...", ilustrasi: null, pilihan: ["A. Diskriminasi","B. Genosida","C. Apartheid","D. Intimidasi"], jawaban: "B. Genosida" }
        ]
      },
      { id: 353, bab: 3, judul: "Konstitusi dan Sistem Hukum",
        soal: [
          { id: 1, judul: "Hierarki Peraturan Perundangan", type: "drag and drop", narasi: "Indonesia memiliki hierarki peraturan perundang-undangan berdasarkan UU No. 12 Tahun 2011. Peraturan yang lebih rendah tidak boleh bertentangan dengan yang lebih tinggi.", pertanyaan: "Urutkan hierarki peraturan dari tertinggi ke terendah", ilustrasi: null, pilihan: ["PP (Peraturan Pemerintah)","UUD 1945","UU/Perppu","Perda"], jawaban: ["UUD 1945","UU/Perppu","PP (Peraturan Pemerintah)","Perda"] },
          { id: 2, judul: "Mahkamah Konstitusi", type: "quiz", narasi: "Mahkamah Konstitusi (MK) dibentuk pada 2003 melalui amandemen UUD. MK berwenang menguji undang-undang, memutus sengketa kewenangan lembaga, dan membubarkan partai.", pertanyaan: "Kewenangan utama Mahkamah Konstitusi adalah...", ilustrasi: null, pilihan: ["A. Mengadili koruptor","B. Menguji UU terhadap UUD","C. Membuat undang-undang","D. Memilih presiden"], jawaban: "B. Menguji UU terhadap UUD" },
          { id: 3, judul: "Lembaga Peradilan", type: "TTS", narasi: "Sistem peradilan yang independen adalah pilar penting negara hukum yang demokratis.", pertanyaan: ["Prinsip bahwa semua orang sama di hadapan hukum disebut ...","Putusan pengadilan yang tidak dapat diganggu gugat lagi disebut ...","Hak tersangka untuk mendapat pendampingan hukum disebut hak ..."], ilustrasi: null, pilihan: null, jawaban: ["Equality before the law","Inkracht","Bantuan hukum"] }
        ]
      },
      { id: 354, bab: 4, judul: "Globalisasi dan Identitas Nasional",
        soal: [
          { id: 1, judul: "Identitas Nasional", type: "quiz", narasi: "Identitas nasional adalah ciri khas yang membedakan suatu bangsa dari bangsa lain. Identitas nasional Indonesia meliputi bahasa, bendera, lambang negara, dan lagu kebangsaan.", pertanyaan: "Identitas nasional yang paling utama dan menjadi alat pemersatu adalah...", ilustrasi: null, pilihan: ["A. Suku bangsa","B. Bahasa Indonesia","C. Agama","D. Tradisi daerah"], jawaban: "B. Bahasa Indonesia" },
          { id: 2, judul: "Globalisasi dan Pancasila", type: "quiz", narasi: "Di era globalisasi, Pancasila berperan sebagai filter untuk menyaring pengaruh asing yang masuk. Nilai-nilai Pancasila menjadi panduan dalam menghadapi tantangan globalisasi.", pertanyaan: "Peran Pancasila di era globalisasi adalah sebagai...", ilustrasi: null, pilihan: ["A. Penolak semua hal asing","B. Filter/penyaring pengaruh asing","C. Alat menguasai negara lain","D. Pengganti hukum internasional"], jawaban: "B. Filter/penyaring pengaruh asing" },
          { id: 3, judul: "Wawasan Nusantara", type: "TTS", narasi: "Wawasan Nusantara adalah cara pandang bangsa Indonesia tentang diri dan lingkungannya berdasarkan Pancasila dan UUD 1945.", pertanyaan: ["Wawasan kebangsaan Indonesia yang memandang nusantara sebagai satu kesatuan disebut ...","Prinsip yang menyatakan Indonesia sebagai negara kepulauan adalah ...","Zona ekonomi eksklusif Indonesia sejauh ... mil laut"], ilustrasi: null, pilihan: null, jawaban: ["Wawasan Nusantara","Archipelago","200"] }
        ]
      },
      { id: 355, bab: 5, judul: "Mewujudkan Masyarakat Berkeadilan",
        soal: [
          { id: 1, judul: "Keadilan Sosial", type: "quiz", narasi: "Keadilan sosial adalah kondisi di mana setiap warga negara mendapat hak-haknya secara seimbang tanpa diskriminasi. Sila kelima Pancasila: 'Keadilan Sosial bagi Seluruh Rakyat Indonesia'.", pertanyaan: "Keadilan sosial dalam konteks Pancasila berarti...", ilustrasi: null, pilihan: ["A. Semua orang mendapat sama rata","B. Hak setiap warga terpenuhi secara proporsional","C. Hanya orang kaya yang mendapat keadilan","D. Pemerintah yang tentukan keadilan"], jawaban: "B. Hak setiap warga terpenuhi secara proporsional" },
          { id: 2, judul: "Peran Warga Negara", type: "drag and drop", narasi: "Setiap warga negara memiliki peran penting dalam mewujudkan masyarakat yang adil dan makmur, tidak hanya bergantung pada pemerintah.", pertanyaan: "Pasangkan peran warga negara dengan bentuk kontribusinya", ilustrasi: null, pilihan: ["Di bidang ekonomi","Di bidang sosial","Di bidang lingkungan"], jawaban: ["Membayar pajak, berwirausaha","Bergotong royong, membantu sesama","Menjaga kebersihan, tidak membuang sampah"] },
          { id: 3, judul: "Cita-Cita Bangsa", type: "TTS", narasi: "Cita-cita bangsa Indonesia termaktub dalam Pembukaan UUD 1945 alinea keempat sebagai tujuan nasional yang ingin dicapai.", pertanyaan: ["Tujuan nasional yang menyebutkan 'mencerdaskan kehidupan bangsa' berkaitan dengan bidang ...","Melindungi segenap bangsa Indonesia adalah tugas utama ...","Wujud nyata keadilan sosial yang sedang dibangun pemerintah adalah program ..."], ilustrasi: null, pilihan: null, jawaban: ["Pendidikan","Negara","Jaminan sosial"] }
        ]
      }
    ]
  }
]
export default data
