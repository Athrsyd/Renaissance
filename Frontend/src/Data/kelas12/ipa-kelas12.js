const data = [
  {
    id: 1, mapel: "IPA", kelas: 12,
    modul: [
      { id: 311, bab: 1, judul: "Genetika dan Pewarisan Sifat",
        soal: [
          { id: 1, judul: "Hukum Mendel", type: "drag and drop", narasi: "Gregor Mendel menemukan hukum pewarisan sifat melalui percobaan pada kacang ercis. Hukum I Mendel: pemisahan alel saat pembentukan gamet. Hukum II: pengelompokan bebas.", pertanyaan: "Pasangkan Hukum Mendel dengan isinya", ilustrasi: null, pilihan: ["Hukum I Mendel","Hukum II Mendel"], jawaban: ["Alel memisah saat pembentukan gamet","Alel mengelompok secara bebas"] },
          { id: 2, judul: "Genotip dan Fenotip", type: "quiz", narasi: "Genotip adalah susunan genetik organisme (contoh: AA, Aa, aa). Fenotip adalah sifat yang tampak sebagai hasil ekspresi genotip dan lingkungan.", pertanyaan: "Individu yang memiliki genotip Aa disebut...", ilustrasi: null, pilihan: ["A. Homozigot dominan","B. Homozigot resesif","C. Heterozigot","D. Mutan"], jawaban: "C. Heterozigot" },
          { id: 3, judul: "Mutasi", type: "TTS", narasi: "Mutasi adalah perubahan pada materi genetik (DNA) yang dapat diturunkan. Mutasi dapat terjadi pada gen (mutasi gen) atau kromosom (mutasi kromosom).", pertanyaan: ["Perubahan pada urutan basa DNA disebut mutasi ...","Penyebab mutasi dari luar disebut ...","Mutasi yang menguntungkan dimanfaatkan dalam bidang ..."], ilustrasi: null, pilihan: null, jawaban: ["Gen","Mutagen","Pertanian"] }
        ]
      },
      { id: 312, bab: 2, judul: "Evolusi",
        soal: [
          { id: 1, judul: "Teori Evolusi Darwin", type: "quiz", narasi: "Charles Darwin mengemukakan teori evolusi berdasarkan seleksi alam. Organisme yang beradaptasi dengan lingkungannya akan bertahan dan bereproduksi, sementara yang tidak beradaptasi akan punah.", pertanyaan: "Mekanisme utama evolusi menurut Darwin adalah...", ilustrasi: null, pilihan: ["A. Pewarisan sifat yang diperoleh","B. Seleksi alam","C. Mutasi acak","D. Rekombinasi genetik"], jawaban: "B. Seleksi alam" },
          { id: 2, judul: "Bukti Evolusi", type: "drag and drop", narasi: "Evolusi didukung oleh berbagai bukti ilmiah dari berbagai cabang ilmu pengetahuan.", pertanyaan: "Pasangkan bukti evolusi dengan bidang ilmunya", ilustrasi: null, pilihan: ["Fosil","Homologi organ","Embriologi perbandingan"], jawaban: ["Paleontologi","Anatomi perbandingan","Embriologi"] },
          { id: 3, judul: "Spesiasi", type: "quiz", narasi: "Spesiasi adalah proses terbentuknya spesies baru dari spesies yang sudah ada. Bisa terjadi melalui isolasi geografis (allopatric) atau isolasi reproduktif (sympatric).", pertanyaan: "Spesiasi yang terjadi karena pemisahan populasi oleh penghalang geografis disebut spesiasi...", ilustrasi: null, pilihan: ["A. Simpatrik","B. Parapatrik","C. Alopatrik","D. Peripatrik"], jawaban: "C. Alopatrik" }
        ]
      },
      { id: 313, bab: 3, judul: "Bioteknologi",
        soal: [
          { id: 1, judul: "Bioteknologi Konvensional vs Modern", type: "drag and drop", narasi: "Bioteknologi menggunakan organisme hidup untuk menghasilkan produk yang bermanfaat. Bioteknologi konvensional menggunakan cara tradisional, sedangkan modern memanfaatkan rekayasa genetika.", pertanyaan: "Klasifikasikan contoh bioteknologi berikut", ilustrasi: null, pilihan: ["Pembuatan tempe","Kloning domba Dolly","Insulin rekombinan"], jawaban: ["Konvensional","Modern","Modern"] },
          { id: 2, judul: "Rekayasa Genetika", type: "quiz", narasi: "Rekayasa genetika adalah teknik manipulasi gen untuk mengubah karakteristik organisme. Teknik utamanya meliputi PCR, kloning gen, dan penanda DNA.", pertanyaan: "Teknik yang digunakan untuk memperbanyak fragmen DNA secara in vitro adalah...", ilustrasi: null, pilihan: ["A. Elektroforesis","B. PCR (Polymerase Chain Reaction)","C. Sentrifugasi","D. Kromatografi"], jawaban: "B. PCR (Polymerase Chain Reaction)" },
          { id: 3, judul: "Aplikasi Bioteknologi", type: "TTS", narasi: "Bioteknologi diaplikasikan dalam berbagai bidang kehidupan manusia.", pertanyaan: ["Tanaman yang gennya dimodifikasi disebut tanaman ...","Penggunaan organisme untuk membersihkan polutan disebut ...","Hormon insulin kini diproduksi dengan bantuan bakteri melalui teknik ..."], ilustrasi: null, pilihan: null, jawaban: ["Transgenik","Bioremediasi","Rekayasa genetika"] }
        ]
      },
      { id: 314, bab: 4, judul: "Fisika Modern",
        soal: [
          { id: 1, judul: "Teori Relativitas", type: "quiz", narasi: "Einstein mengemukakan teori relativitas khusus (1905): kecepatan cahaya konstan bagi semua pengamat, dan massa dapat diubah menjadi energi (E=mc²).", pertanyaan: "Persamaan Einstein yang menyatakan kesetaraan massa dan energi adalah...", ilustrasi: null, pilihan: ["A. E = mv²","B. E = mc²","C. E = ½mv²","D. E = mgh"], jawaban: "B. E = mc²" },
          { id: 2, judul: "Fisika Kuantum", type: "quiz", narasi: "Fisika kuantum menjelaskan perilaku partikel subatomik. Max Planck menemukan bahwa energi dipancarkan dalam paket-paket diskrit yang disebut kuanta.", pertanyaan: "Satuan energi diskrit dalam fisika kuantum disebut...", ilustrasi: null, pilihan: ["A. Foton","B. Elektron","C. Kuantum","D. Neutron"], jawaban: "C. Kuantum" },
          { id: 3, judul: "Radioaktivitas", type: "drag and drop", narasi: "Radioaktivitas adalah peluruhan spontan inti atom tidak stabil dengan memancarkan radiasi. Ada tiga jenis radiasi: alfa, beta, dan gamma.", pertanyaan: "Pasangkan jenis radiasi dengan sifatnya", ilustrasi: null, pilihan: ["Radiasi alfa (α)","Radiasi beta (β)","Radiasi gamma (γ)"], jawaban: ["Partikel berat, daya tembus rendah","Elektron, daya tembus sedang","Gelombang EM, daya tembus tinggi"] }
        ]
      },
      { id: 315, bab: 5, judul: "Kimia Organik",
        soal: [
          { id: 1, judul: "Hidrokarbon", type: "drag and drop", narasi: "Hidrokarbon adalah senyawa organik yang hanya mengandung atom C dan H. Dibagi menjadi alifatik (rantai terbuka) dan aromatik (cincin benzena).", pertanyaan: "Pasangkan jenis hidrokarbon dengan contohnya", ilustrasi: null, pilihan: ["Alkana","Alkena","Alkuna","Benzena"], jawaban: ["CH₄ (metana)","C₂H₄ (etena)","C₂H₂ (etuna)","C₆H₆ (benzena)"] },
          { id: 2, judul: "Reaksi Organik", type: "quiz", narasi: "Reaksi organik meliputi substitusi, adisi, eliminasi, dan oksidasi-reduksi. Setiap jenis reaksi menghasilkan produk yang berbeda dengan karakteristik unik.", pertanyaan: "Reaksi penggantian atom/gugus dalam senyawa organik disebut reaksi...", ilustrasi: null, pilihan: ["A. Adisi","B. Eliminasi","C. Substitusi","D. Kondensasi"], jawaban: "C. Substitusi" },
          { id: 3, judul: "Polimer", type: "TTS", narasi: "Polimer adalah makromolekul yang terbentuk dari pengulangan unit monomer. Ada polimer alami (selulosa, protein) dan buatan (plastik, nilon).", pertanyaan: ["Unit ulang pembentuk polimer disebut ...","Polimer yang terbuat dari minyak bumi biasanya digunakan sebagai ...","Reaksi pembentukan polimer dari monomer disebut reaksi ..."], ilustrasi: null, pilihan: null, jawaban: ["Monomer","Plastik","Polimerisasi"] }
        ]
      }
    ]
  }
]
export default data
