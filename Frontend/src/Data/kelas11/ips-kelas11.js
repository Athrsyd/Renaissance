const data = [
  {
    id: 1, mapel: "IPS", kelas: 11,
    modul: [
      { id: 221, bab: 1, judul: "Kondisi Geografis Indonesia",
        soal: [
          { id: 1, judul: "Posisi Strategis Indonesia", type: "quiz", narasi: "Indonesia terletak di antara dua benua (Asia dan Australia) dan dua samudra (Hindia dan Pasifik). Posisi ini sangat strategis bagi perdagangan dan hubungan internasional.", pertanyaan: "Indonesia terletak di antara dua samudra yaitu...", ilustrasi: null, pilihan: ["A. Atlantik dan Arktik","B. Hindia dan Pasifik","C. Pasifik dan Atlantik","D. Hindia dan Arktik"], jawaban: "B. Hindia dan Pasifik" }
        ,
          { id: 2, judul: "Iklim Indonesia", type: "drag and drop", narasi: "Indonesia beriklim tropis dengan dua musim utama: hujan dan kemarau. Iklim dipengaruhi oleh angin muson, letak geografis, dan kondisi laut.", pertanyaan: "Pasangkan faktor dengan pengaruhnya terhadap iklim Indonesia", ilustrasi: null, pilihan: ["Angin muson barat","Angin muson timur","Arus laut"], jawaban: ["Musim hujan (Oktober-April)","Musim kemarau (April-Oktober)","Mengatur suhu dan curah hujan"] }
        ,
          { id: 3, judul: "Potensi Alam Indonesia", type: "TTS", narasi: "Indonesia kaya sumber daya alam, baik yang terbarukan (hutan, laut) maupun tak terbarukan (minyak, batu bara, mineral).", pertanyaan: ["Hutan hujan tropis Indonesia dikenal sebagai paru-paru ...","Indonesia merupakan negara kepulauan terbesar dengan lebih dari ... pulau","Sumber daya laut Indonesia yang bernilai ekonomis tinggi disebut sumber daya ..."], ilustrasi: null, pilihan: null, jawaban: ["Dunia","Tujuh belas ribu","Kelautan"] }
        ]
      },
      { id: 222, bab: 2, judul: "Dinamika Penduduk Indonesia",
        soal: [
          { id: 1, judul: "Pertumbuhan Penduduk", type: "quiz", narasi: "Pertumbuhan penduduk dipengaruhi oleh kelahiran (natalitas), kematian (mortalitas), dan migrasi. Laju pertumbuhan dihitung dari selisih kelahiran dan kematian ditambah migrasi bersih.", pertanyaan: "Faktor yang MENGURANGI jumlah penduduk adalah...", ilustrasi: null, pilihan: ["A. Natalitas tinggi","B. Mortalitas tinggi","C. Imigrasi","D. Fertilitas tinggi"], jawaban: "B. Mortalitas tinggi" }
        ,
          { id: 2, judul: "Persebaran Penduduk", type: "quiz", narasi: "Penduduk Indonesia tidak tersebar merata. Pulau Jawa dengan luas 7% wilayah Indonesia dihuni oleh sekitar 57% penduduk, sehingga mengalami kepadatan tinggi.", pertanyaan: "Upaya pemerintah untuk meratakan persebaran penduduk disebut...", ilustrasi: null, pilihan: ["A. Urbanisasi","B. Transmigrasi","C. Emigrasi","D. Imigrasi"], jawaban: "B. Transmigrasi" }
        ,
          { id: 3, judul: "Kualitas Penduduk", type: "drag and drop", narasi: "Kualitas penduduk diukur menggunakan Indeks Pembangunan Manusia (IPM) yang mencakup tiga dimensi: kesehatan, pendidikan, dan standar hidup layak.", pertanyaan: "Pasangkan dimensi IPM dengan indikatornya", ilustrasi: null, pilihan: ["Dimensi kesehatan","Dimensi pendidikan","Dimensi ekonomi"], jawaban: ["Angka harapan hidup","Rata-rata lama sekolah","Pengeluaran per kapita"] }
        ]
      },
      { id: 223, bab: 3, judul: "Pembangunan Ekonomi",
        soal: [
          { id: 1, judul: "Konsep Pembangunan Ekonomi", type: "quiz", narasi: "Pembangunan ekonomi adalah proses peningkatan pendapatan per kapita penduduk jangka panjang disertai perubahan struktural ekonomi, sosial, dan teknologi.", pertanyaan: "Perbedaan pembangunan ekonomi dan pertumbuhan ekonomi adalah...", ilustrasi: null, pilihan: ["A. Tidak ada perbedaan","B. Pembangunan lebih luas, mencakup perubahan struktural","C. Pertumbuhan lebih luas","D. Pembangunan hanya soal GNP"], jawaban: "B. Pembangunan lebih luas, mencakup perubahan struktural" }
        ,
          { id: 2, judul: "Sektor Ekonomi", type: "drag and drop", narasi: "Sektor ekonomi dibagi menjadi primer (pertanian, pertambangan), sekunder (industri pengolahan), dan tersier (jasa). Perkembangan ekonomi biasanya menggeser dominasi dari primer ke tersier.", pertanyaan: "Klasifikasikan kegiatan ekonomi berikut", ilustrasi: null, pilihan: ["Bertani padi","Pabrik tekstil","Perbankan"], jawaban: ["Sektor primer","Sektor sekunder","Sektor tersier"] }
        ,
          { id: 3, judul: "Masalah Ekonomi Indonesia", type: "TTS", narasi: "Indonesia menghadapi berbagai masalah ekonomi yang perlu diatasi untuk mencapai pembangunan yang berkelanjutan.", pertanyaan: ["Kondisi seseorang yang tidak punya pekerjaan dan sedang mencari kerja disebut ...","Kenaikan harga barang secara terus-menerus disebut ...","Ketimpangan pendapatan diukur dengan indeks ..."], ilustrasi: null, pilihan: null, jawaban: ["Pengangguran","Inflasi","Gini"] }
        ]
      },
      { id: 224, bab: 4, judul: "Globalisasi dan Perdagangan Internasional",
        soal: [
          { id: 1, judul: "Pengertian Globalisasi", type: "quiz", narasi: "Globalisasi adalah proses integrasi internasional yang terjadi karena pertukaran pandangan, produk, pemikiran, dan berbagai aspek budaya. Didorong oleh kemajuan teknologi komunikasi dan transportasi.", pertanyaan: "Faktor utama yang mendorong globalisasi adalah...", ilustrasi: null, pilihan: ["A. Perang dunia","B. Kemajuan teknologi komunikasi","C. Bencana alam","D. Perbedaan budaya"], jawaban: "B. Kemajuan teknologi komunikasi" }
        ,
          { id: 2, judul: "Perdagangan Internasional", type: "drag and drop", narasi: "Perdagangan internasional terjadi karena setiap negara tidak dapat memenuhi semua kebutuhannya sendiri. Teori keunggulan komparatif menyatakan setiap negara sebaiknya memproduksi barang yang biaya relatifnya paling rendah.", pertanyaan: "Pasangkan istilah dengan definisinya", ilustrasi: null, pilihan: ["Ekspor","Impor","Neraca perdagangan"], jawaban: ["Menjual ke luar negeri","Membeli dari luar negeri","Selisih ekspor dan impor"] }
        ,
          { id: 3, judul: "Dampak Globalisasi", type: "quiz", narasi: "Globalisasi membawa dampak positif (kemudahan akses informasi, pasar lebih luas) dan negatif (persaingan semakin ketat, erosi budaya lokal).", pertanyaan: "Upaya yang tepat untuk menghadapi dampak negatif globalisasi adalah...", ilustrasi: null, pilihan: ["A. Menolak semua produk asing","B. Menutup diri dari dunia luar","C. Selektif menyaring pengaruh asing","D. Menerima semua pengaruh asing"], jawaban: "C. Selektif menyaring pengaruh asing" }
        ]
      },
      { id: 225, bab: 5, judul: "Perubahan Sosial",
        soal: [
          { id: 1, judul: "Pengertian Perubahan Sosial", type: "quiz", narasi: "Perubahan sosial adalah perubahan yang terjadi pada lembaga-lembaga kemasyarakatan yang mempengaruhi sistem sosialnya, termasuk nilai, norma, dan pola hubungan antar individu.", pertanyaan: "Teori yang menyatakan perubahan sosial bergerak maju secara bertahap adalah teori...", ilustrasi: null, pilihan: ["A. Siklus","B. Evolusi","C. Konflik","D. Fungsional"], jawaban: "B. Evolusi" }
        ,
          { id: 2, judul: "Faktor Perubahan Sosial", type: "drag and drop", narasi: "Perubahan sosial dipengaruhi faktor internal (dari dalam masyarakat) dan eksternal (dari luar masyarakat).", pertanyaan: "Klasifikasikan faktor-faktor berikut", ilustrasi: null, pilihan: ["Penemuan baru (inovasi)","Pengaruh kebudayaan asing","Konflik dalam masyarakat"], jawaban: ["Faktor internal","Faktor eksternal","Faktor internal"] }
        ,
          { id: 3, judul: "Modernisasi", type: "TTS", narasi: "Modernisasi adalah proses perubahan dari masyarakat tradisional ke masyarakat modern yang ditandai dengan rasionalitas dan industrialisasi.", pertanyaan: ["Proses pengambilalihan unsur budaya asing disebut ...","Perpaduan dua kebudayaan berbeda menjadi kebudayaan baru disebut ...","Proses perubahan cepat dan mendasar dalam masyarakat disebut ..."], ilustrasi: null, pilihan: null, jawaban: ["Akulturasi","Asimilasi","Revolusi"] }
        ]
      }
    ]
  }
]
export default data
