const data = [
  {
    id: 1, mapel: "IPS", kelas: 12,
    modul: [
      { id: 321, bab: 1, judul: "Ekonomi Makro",
        soal: [
          { id: 1, judul: "Pendapatan Nasional", type: "drag and drop", narasi: "Pendapatan nasional mengukur total nilai barang dan jasa yang diproduksi suatu negara. Ada tiga pendekatan: produksi, pendapatan, dan pengeluaran.", pertanyaan: "Pasangkan pendekatan pendapatan nasional dengan rumusnya", ilustrasi: null, pilihan: ["Pendekatan produksi","Pendekatan pendapatan","Pendekatan pengeluaran"], jawaban: ["Jumlah nilai tambah semua sektor","W + R + I + P","C + I + G + (X-M)"] },
          { id: 2, judul: "Inflasi dan Pengangguran", type: "quiz", narasi: "Inflasi adalah kenaikan harga umum secara terus-menerus. Kurva Phillips menggambarkan hubungan negatif antara inflasi dan pengangguran dalam jangka pendek.", pertanyaan: "Jenis inflasi yang disebabkan oleh kenaikan biaya produksi disebut...", ilustrasi: null, pilihan: ["A. Demand-pull inflation","B. Cost-push inflation","C. Stagflasi","D. Hiperinflasi"], jawaban: "B. Cost-push inflation" },
          { id: 3, judul: "Kebijakan Ekonomi Makro", type: "drag and drop", narasi: "Pemerintah dan bank sentral menggunakan kebijakan fiskal dan moneter untuk menstabilkan perekonomian.", pertanyaan: "Pasangkan jenis kebijakan dengan instrumennya", ilustrasi: null, pilihan: ["Kebijakan fiskal","Kebijakan moneter"], jawaban: ["Pajak dan belanja pemerintah","Suku bunga dan jumlah uang beredar"] }
        ]
      },
      { id: 322, bab: 2, judul: "Pasar Modal dan Keuangan",
        soal: [
          { id: 1, judul: "Pasar Modal", type: "quiz", narasi: "Pasar modal adalah tempat bertemunya penjual dan pembeli instrumen keuangan jangka panjang (saham, obligasi, reksa dana). Di Indonesia, pasar modal dikelola oleh BEI (Bursa Efek Indonesia).", pertanyaan: "Instrumen pasar modal yang mewakili kepemilikan dalam suatu perusahaan adalah...", ilustrasi: null, pilihan: ["A. Obligasi","B. Deposito","C. Saham","D. SBI"], jawaban: "C. Saham" },
          { id: 2, judul: "Lembaga Keuangan", type: "drag and drop", narasi: "Sistem keuangan Indonesia terdiri dari lembaga perbankan dan non-perbankan yang diawasi oleh OJK (Otoritas Jasa Keuangan).", pertanyaan: "Pasangkan lembaga keuangan dengan fungsi utamanya", ilustrasi: null, pilihan: ["Bank Umum","Asuransi","Pegadaian"], jawaban: ["Simpan pinjam dan pembayaran","Perlindungan risiko","Pinjaman dengan jaminan barang"] },
          { id: 3, judul: "Investasi", type: "TTS", narasi: "Investasi adalah kegiatan menanamkan modal dengan harapan mendapat keuntungan di masa depan.", pertanyaan: ["Keuntungan dari kepemilikan saham disebut ...","Surat utang yang diterbitkan pemerintah/perusahaan disebut ...","Investasi yang dikelola secara kolektif oleh manajer investasi disebut ..."], ilustrasi: null, pilihan: null, jawaban: ["Dividen","Obligasi","Reksa dana"] }
        ]
      },
      { id: 323, bab: 3, judul: "Kerjasama Ekonomi Internasional",
        soal: [
          { id: 1, judul: "Organisasi Ekonomi Internasional", type: "drag and drop", narasi: "Berbagai organisasi ekonomi internasional dibentuk untuk mendorong kerjasama dan mengatur perdagangan antar negara.", pertanyaan: "Pasangkan organisasi dengan perannya", ilustrasi: null, pilihan: ["WTO","IMF","World Bank"], jawaban: ["Mengatur perdagangan internasional","Stabilitas keuangan internasional","Pembiayaan pembangunan negara"] },
          { id: 2, judul: "Neraca Pembayaran", type: "quiz", narasi: "Neraca pembayaran adalah catatan sistematis semua transaksi ekonomi antara penduduk suatu negara dengan penduduk negara lain dalam satu periode.", pertanyaan: "Komponen utama neraca pembayaran yang mencatat perdagangan barang disebut...", ilustrasi: null, pilihan: ["A. Neraca jasa","B. Neraca perdagangan","C. Neraca modal","D. Neraca finansial"], jawaban: "B. Neraca perdagangan" },
          { id: 3, judul: "Nilai Tukar", type: "quiz", narasi: "Nilai tukar (kurs) adalah harga suatu mata uang dalam mata uang negara lain. Kurs mempengaruhi daya saing ekspor dan harga impor.", pertanyaan: "Melemahnya rupiah terhadap dolar akan berdampak pada...", ilustrasi: null, pilihan: ["A. Ekspor semakin murah bagi pembeli asing","B. Impor semakin murah","C. Utang luar negeri berkurang","D. Harga dalam negeri turun"], jawaban: "A. Ekspor semakin murah bagi pembeli asing" }
        ]
      },
      { id: 324, bab: 4, judul: "Pembangunan Berkelanjutan",
        soal: [
          { id: 1, judul: "SDGs", type: "quiz", narasi: "Sustainable Development Goals (SDGs) adalah 17 tujuan pembangunan berkelanjutan yang disepakati PBB pada 2015 untuk dicapai pada 2030, mencakup aspek ekonomi, sosial, dan lingkungan.", pertanyaan: "SDGs merupakan agenda pembangunan yang disepakati oleh...", ilustrasi: null, pilihan: ["A. G20","B. PBB","C. IMF","D. ASEAN"], jawaban: "B. PBB" },
          { id: 2, judul: "Ekonomi Hijau", type: "drag and drop", narasi: "Ekonomi hijau adalah model ekonomi yang berupaya meningkatkan kesejahteraan manusia sekaligus mengurangi risiko lingkungan dan kelangkaan ekologis.", pertanyaan: "Pasangkan konsep ekonomi hijau dengan contohnya", ilustrasi: null, pilihan: ["Energi terbarukan","Ekonomi sirkular","Pertanian organik"], jawaban: ["Menggantikan bahan bakar fosil","Daur ulang dan penggunaan kembali","Tanpa pestisida kimia berbahaya"] },
          { id: 3, judul: "Kesenjangan Ekonomi", type: "TTS", narasi: "Kesenjangan ekonomi adalah perbedaan yang mencolok antara kelompok kaya dan miskin dalam masyarakat.", pertanyaan: ["Indeks yang mengukur ketimpangan pendapatan disebut indeks ...","Program pemerintah untuk mengurangi kemiskinan melalui bantuan langsung disebut ...","Kondisi seseorang tidak mampu memenuhi kebutuhan dasar disebut ..."], ilustrasi: null, pilihan: null, jawaban: ["Gini","Bansos","Kemiskinan"] }
        ]
      },
      { id: 325, bab: 5, judul: "Kewirausahaan",
        soal: [
          { id: 1, judul: "Konsep Kewirausahaan", type: "quiz", narasi: "Wirausahawan adalah orang yang menciptakan usaha baru dengan menanggung risiko dan ketidakpastian untuk mendapat keuntungan dan pertumbuhan. Kewirausahaan mendorong inovasi dan penciptaan lapangan kerja.", pertanyaan: "Karakteristik utama seorang wirausahawan yang sukses adalah...", ilustrasi: null, pilihan: ["A. Menghindari risiko","B. Bergantung pada orang lain","C. Berani mengambil risiko terukur","D. Meniru usaha yang sudah ada"], jawaban: "C. Berani mengambil risiko terukur" },
          { id: 2, judul: "Rencana Bisnis", type: "drag and drop", narasi: "Rencana bisnis (business plan) adalah dokumen tertulis yang menggambarkan tujuan bisnis, strategi, dan langkah-langkah untuk mencapainya.", pertanyaan: "Pasangkan komponen rencana bisnis dengan isinya", ilustrasi: null, pilihan: ["Analisis SWOT","Target pasar","Proyeksi keuangan"], jawaban: ["Kekuatan, kelemahan, peluang, ancaman","Segmen pelanggan yang dituju","Perkiraan pendapatan dan biaya"] },
          { id: 3, judul: "Strategi Pemasaran", type: "TTS", narasi: "Strategi pemasaran yang efektif mencakup bauran pemasaran (marketing mix) yang dikenal sebagai 4P.", pertanyaan: ["Empat elemen bauran pemasaran disebut ...P","Penetapan harga dalam bauran pemasaran disebut ...","Strategi mempromosikan produk ke pasar disebut ..."], ilustrasi: null, pilihan: null, jawaban: ["Empat","Price","Promosi"] }
        ]
      }
    ]
  }
]
export default data
