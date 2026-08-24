const data = [
  {
    id: 1, mapel: "Pendidikan Pancasila", kelas: 11,
    modul: [
      { id: 251, bab: 1, judul: "Sistem Pemerintahan Indonesia",
        soal: [
          { id: 1, judul: "Sistem Presidensial", type: "quiz", narasi: "Indonesia menganut sistem pemerintahan presidensial: presiden adalah kepala negara sekaligus kepala pemerintahan, tidak bertanggung jawab kepada parlemen, dan masa jabatan tetap (5 tahun).", pertanyaan: "Ciri khas sistem presidensial adalah...", ilustrasi: null, pilihan: ["A. Presiden dipilih parlemen","B. Presiden dan parlemen terpisah kewenangannya","C. Presiden bisa dijatuhkan parlemen kapan saja","D. Kabinet bertanggung jawab kepada parlemen"], jawaban: "B. Presiden dan parlemen terpisah kewenangannya" },
          { id: 2, judul: "Lembaga Negara", type: "drag and drop", narasi: "Indonesia memiliki beberapa lembaga negara utama yang menjalankan fungsi pemerintahan berdasarkan UUD 1945.", pertanyaan: "Pasangkan lembaga negara dengan fungsinya", ilustrasi: null, pilihan: ["DPR","MA","KPK","BPK"], jawaban: ["Legislasi dan pengawasan","Peradilan tertinggi","Pemberantasan korupsi","Audit keuangan negara"] },
          { id: 3, judul: "Trias Politica", type: "TTS", narasi: "Konsep Trias Politica membagi kekuasaan negara menjadi tiga untuk mencegah penyalahgunaan kekuasaan.", pertanyaan: ["Kekuasaan membuat undang-undang disebut kekuasaan ...","Kekuasaan menjalankan pemerintahan disebut kekuasaan ...","Kekuasaan mengadili pelanggar hukum disebut kekuasaan ..."], ilustrasi: null, pilihan: null, jawaban: ["Legislatif","Eksekutif","Yudikatif"] }
        ]
      },
      { id: 252, bab: 2, judul: "Pemilihan Umum di Indonesia",
        soal: [
          { id: 1, judul: "Prinsip Pemilu", type: "drag and drop", narasi: "Pemilu di Indonesia berlandaskan asas LUBER JURDIL: Langsung, Umum, Bebas, Rahasia, Jujur, dan Adil.", pertanyaan: "Pasangkan asas pemilu dengan maknanya", ilustrasi: null, pilihan: ["Langsung","Bebas","Rahasia"], jawaban: ["Pemilih memilih tanpa perantara","Tidak ada paksaan dalam memilih","Pilihan tidak diketahui orang lain"] },
          { id: 2, judul: "Lembaga Penyelenggara Pemilu", type: "quiz", narasi: "Pemilu diselenggarakan oleh KPU (Komisi Pemilihan Umum) yang bersifat nasional, tetap, dan mandiri. Pengawasan dilakukan oleh Bawaslu.", pertanyaan: "Lembaga yang bertugas mengawasi pelaksanaan pemilu adalah...", ilustrasi: null, pilihan: ["A. KPU","B. DKPP","C. Bawaslu","D. Mahkamah Konstitusi"], jawaban: "C. Bawaslu" },
          { id: 3, judul: "Partisipasi Pemilu", type: "quiz", narasi: "Partisipasi warga dalam pemilu adalah wujud nyata pelaksanaan demokrasi. Golput (golongan putih) mengurangi legitimasi hasil pemilu.", pertanyaan: "Usia minimal warga negara yang berhak memilih dalam pemilu adalah...", ilustrasi: null, pilihan: ["A. 15 tahun","B. 17 tahun","C. 18 tahun","D. 20 tahun"], jawaban: "B. 17 tahun" }
        ]
      },
      { id: 253, bab: 3, judul: "Otonomi Daerah",
        soal: [
          { id: 1, judul: "Pengertian Otonomi Daerah", type: "quiz", narasi: "Otonomi daerah adalah hak, wewenang, dan kewajiban daerah otonom untuk mengatur dan mengurus sendiri urusan pemerintahan berdasarkan UU No. 23 Tahun 2014.", pertanyaan: "Tujuan utama otonomi daerah adalah...", ilustrasi: null, pilihan: ["A. Memisahkan diri dari pusat","B. Meningkatkan kesejahteraan dan pelayanan masyarakat","C. Mengurangi pendapatan daerah","D. Menambah birokrasi"], jawaban: "B. Meningkatkan kesejahteraan dan pelayanan masyarakat" },
          { id: 2, judul: "Pembagian Urusan Pemerintahan", type: "drag and drop", narasi: "Urusan pemerintahan dibagi antara pusat dan daerah. Pemerintah pusat menangani urusan yang bersifat nasional, daerah menangani urusan yang bersifat lokal.", pertanyaan: "Klasifikasikan urusan pemerintahan berikut", ilustrasi: null, pilihan: ["Pertahanan dan keamanan","Pendidikan dasar","Kebijakan luar negeri"], jawaban: ["Urusan pusat","Urusan daerah","Urusan pusat"] },
          { id: 3, judul: "Desentralisasi", type: "TTS", narasi: "Desentralisasi adalah pelimpahan wewenang dari pemerintah pusat kepada pemerintah daerah untuk mengurus rumah tangganya sendiri.", pertanyaan: ["Penyerahan urusan dari pusat ke daerah disebut ...","Kepala pemerintahan daerah tingkat provinsi disebut ...","Dana yang diberikan pusat ke daerah disebut ..."], ilustrasi: null, pilihan: null, jawaban: ["Desentralisasi","Gubernur","Transfer daerah"] }
        ]
      },
      { id: 254, bab: 4, judul: "Hukum dan Penegakan Hukum",
        soal: [
          { id: 1, judul: "Pengertian Hukum", type: "quiz", narasi: "Hukum adalah sistem aturan yang dibuat oleh kekuasaan yang berwenang, mengikat seluruh anggota masyarakat, dan memiliki sanksi yang tegas bagi pelanggarnya.", pertanyaan: "Salah satu ciri hukum yang membedakannya dari norma sosial adalah...", ilustrasi: null, pilihan: ["A. Bersifat sukarela","B. Dibuat masyarakat","C. Memiliki sanksi yang tegas","D. Tidak tertulis"], jawaban: "C. Memiliki sanksi yang tegas" },
          { id: 2, judul: "Lembaga Penegak Hukum", type: "drag and drop", narasi: "Penegakan hukum dilakukan oleh berbagai lembaga yang memiliki kewenangan masing-masing dalam sistem peradilan Indonesia.", pertanyaan: "Pasangkan lembaga dengan fungsinya", ilustrasi: null, pilihan: ["Kepolisian","Kejaksaan","Kehakiman"], jawaban: ["Penyelidikan dan penyidikan","Penuntutan perkara","Pengadilan dan pemutus perkara"] },
          { id: 3, judul: "Peradilan di Indonesia", type: "quiz", narasi: "Sistem peradilan Indonesia terdiri dari peradilan umum, agama, militer, dan tata usaha negara. Mahkamah Agung adalah pengadilan tertinggi.", pertanyaan: "Pengadilan yang menangani sengketa antara warga negara dengan pemerintah adalah...", ilustrasi: null, pilihan: ["A. Pengadilan Negeri","B. Pengadilan Agama","C. Pengadilan Tata Usaha Negara","D. Pengadilan Militer"], jawaban: "C. Pengadilan Tata Usaha Negara" }
        ]
      },
      { id: 255, bab: 5, judul: "Hubungan Internasional",
        soal: [
          { id: 1, judul: "Pengertian Hubungan Internasional", type: "quiz", narasi: "Hubungan internasional adalah interaksi antarnegara yang mencakup aspek politik, ekonomi, sosial, dan budaya. Diatur oleh hukum internasional dan perjanjian antarnegara.", pertanyaan: "Faktor yang mendorong terjadinya hubungan internasional adalah...", ilustrasi: null, pilihan: ["A. Semua negara sudah mandiri","B. Keterbatasan setiap negara","C. Tidak ada konflik antarnegara","D. Semua negara kaya"], jawaban: "B. Keterbatasan setiap negara" },
          { id: 2, judul: "Organisasi Internasional", type: "drag and drop", narasi: "Indonesia aktif dalam berbagai organisasi internasional sebagai wujud politik luar negeri bebas-aktif.", pertanyaan: "Pasangkan organisasi internasional dengan bidangnya", ilustrasi: null, pilihan: ["PBB","ASEAN","IMF"], jawaban: ["Perdamaian dan keamanan dunia","Kerjasama Asia Tenggara","Keuangan dan ekonomi internasional"] },
          { id: 3, judul: "Peran Indonesia di Dunia", type: "TTS", narasi: "Indonesia aktif berkontribusi dalam menjaga perdamaian dan stabilitas dunia melalui berbagai forum internasional.", pertanyaan: ["Pasukan perdamaian Indonesia yang dikirim ke luar negeri disebut ...","Indonesia menjadi anggota pendiri organisasi negara berkembang yaitu ...","Prinsip politik luar negeri Indonesia adalah bebas dan ..."], ilustrasi: null, pilihan: null, jawaban: ["Garuda","G77","Aktif"] }
        ]
      }
    ]
  }
]
export default data
