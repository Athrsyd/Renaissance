const data = [
  {
    id: 1, mapel: "IPA", kelas: 11,
    modul: [
      { id: 211, bab: 1, judul: "Sel: Unit Terkecil Kehidupan",
        soal: [
          { id: 1, judul: "Organel Sel", type: "drag and drop", narasi: "Sel adalah unit terkecil kehidupan. Sel eukariotik memiliki membran inti, sedangkan sel prokariotik tidak.", pertanyaan: "Pasangkan organel dengan fungsinya", ilustrasi: null, pilihan: ["Mitokondria","Ribosom","Nukleus","Kloroplas"], jawaban: ["Respirasi sel/energi","Sintesis protein","Pusat informasi genetik","Fotosintesis"] }
        ,
          { id: 2, judul: "Sel Prokariotik vs Eukariotik", type: "quiz", narasi: "Sel prokariotik tidak memiliki membran inti (contoh: bakteri). Sel eukariotik memiliki membran inti (contoh: sel hewan dan tumbuhan).", pertanyaan: "Organisme yang selnya bersifat prokariotik adalah...", ilustrasi: null, pilihan: ["A. Jamur","B. Alga","C. Bakteri","D. Tumbuhan"], jawaban: "C. Bakteri" }
        ,
          { id: 3, judul: "Transport Membran", type: "drag and drop", narasi: "Zat masuk dan keluar sel melalui membran dengan berbagai mekanisme: difusi, osmosis, dan transport aktif.", pertanyaan: "Pasangkan mekanisme transport dengan cirinya", ilustrasi: null, pilihan: ["Difusi","Osmosis","Transport aktif"], jawaban: ["Dari konsentrasi tinggi ke rendah","Perpindahan air melalui membran","Memerlukan energi/ATP"] }
        ]
      },
      { id: 212, bab: 2, judul: "Sistem Gerak Manusia",
        soal: [
          { id: 1, judul: "Tulang dan Fungsinya", type: "drag and drop", narasi: "Sistem rangka tersusun dari tulang keras (os) dan tulang rawan (cartilago). Fungsinya: penopang, pelindung, alat gerak pasif, dan tempat sumsum tulang.", pertanyaan: "Pasangkan jenis tulang dengan contohnya", ilustrasi: null, pilihan: ["Tulang pipa","Tulang pipih","Tulang pendek"], jawaban: ["Tulang paha, lengan atas","Tulang tengkorak, tulang dada","Tulang pergelangan tangan"] }
        ,
          { id: 2, judul: "Sendi dan Jenis-Jenisnya", type: "quiz", narasi: "Sendi adalah hubungan antara dua tulang. Sendi sinovial memungkinkan gerakan bebas. Ada sendi engsel, pelana, putar, peluru, dan geser.", pertanyaan: "Sendi yang memungkinkan gerakan ke segala arah (contoh: sendi bahu) adalah sendi...", ilustrasi: null, pilihan: ["A. Engsel","B. Putar","C. Peluru","D. Pelana"], jawaban: "C. Peluru" }
        ,
          { id: 3, judul: "Otot dan Kontraksi", type: "TTS", narasi: "Otot adalah alat gerak aktif. Ada tiga jenis otot: rangka (lurik), polos, dan jantung.", pertanyaan: ["Otot yang bekerja di bawah kesadaran kita disebut otot ...","Protein otot yang berperan dalam kontraksi adalah ...","Sumber energi kontraksi otot adalah ..."], ilustrasi: null, pilihan: null, jawaban: ["Rangka","Aktin dan miosin","ATP"] }
        ]
      },
      { id: 213, bab: 3, judul: "Sistem Peredaran Darah",
        soal: [
          { id: 1, judul: "Komponen Darah", type: "drag and drop", narasi: "Darah terdiri dari plasma darah (55%) dan sel darah (45%). Sel darah meliputi eritrosit, leukosit, dan trombosit.", pertanyaan: "Pasangkan komponen darah dengan fungsinya", ilustrasi: null, pilihan: ["Eritrosit","Leukosit","Trombosit"], jawaban: ["Membawa oksigen (hemoglobin)","Pertahanan tubuh/imun","Pembekuan darah"] }
        ,
          { id: 2, judul: "Sirkulasi Darah", type: "quiz", narasi: "Peredaran darah manusia bersifat ganda dan tertutup. Sirkulasi kecil (paru-paru) dan sirkulasi besar (seluruh tubuh) bekerja bersamaan.", pertanyaan: "Sirkulasi darah yang membawa darah dari jantung ke paru-paru disebut sirkulasi...", ilustrasi: null, pilihan: ["A. Besar","B. Kecil","C. Portal","D. Limfa"], jawaban: "B. Kecil" }
        ,
          { id: 3, judul: "Golongan Darah", type: "quiz", narasi: "Sistem golongan darah ABO ditentukan oleh antigen pada eritrosit. Golongan O disebut donor universal, golongan AB disebut resipien universal.", pertanyaan: "Golongan darah yang dapat menerima transfusi dari semua golongan disebut...", ilustrasi: null, pilihan: ["A. Golongan A","B. Golongan B","C. Golongan O","D. Golongan AB"], jawaban: "D. Golongan AB" }
        ]
      },
      { id: 214, bab: 4, judul: "Sistem Pencernaan",
        soal: [
          { id: 1, judul: "Organ Pencernaan", type: "drag and drop", narasi: "Sistem pencernaan manusia terdiri dari saluran pencernaan dan kelenjar pencernaan yang bekerja secara mekanik dan kimiawi.", pertanyaan: "Urutkan organ pencernaan dari mulut ke anus", ilustrasi: null, pilihan: ["Usus besar","Lambung","Usus halus","Mulut"], jawaban: ["Mulut","Lambung","Usus halus","Usus besar"] }
        ,
          { id: 2, judul: "Enzim Pencernaan", type: "drag and drop", narasi: "Enzim adalah katalis biologi yang mempercepat reaksi pencernaan. Setiap enzim bekerja spesifik pada substrat tertentu.", pertanyaan: "Pasangkan enzim dengan zat yang dicernanya", ilustrasi: null, pilihan: ["Amilase","Pepsin","Lipase"], jawaban: ["Karbohidrat (amilum)","Protein","Lemak"] }
        ,
          { id: 3, judul: "Nutrisi Penting", type: "quiz", narasi: "Nutrisi adalah zat yang diperlukan tubuh untuk pertumbuhan dan fungsi normal. Terbagi menjadi makronutrien (karbohidrat, protein, lemak) dan mikronutrien (vitamin, mineral).", pertanyaan: "Kekurangan vitamin C menyebabkan penyakit...", ilustrasi: null, pilihan: ["A. Anemia","B. Skorbut","C. Rakitis","D. Beri-beri"], jawaban: "B. Skorbut" }
        ]
      },
      { id: 215, bab: 5, judul: "Sistem Koordinasi dan Indra",
        soal: [
          { id: 1, judul: "Sistem Saraf", type: "drag and drop", narasi: "Sistem saraf terdiri dari sistem saraf pusat (otak dan sumsum tulang belakang) dan sistem saraf tepi (saraf kranial dan spinal).", pertanyaan: "Pasangkan bagian otak dengan fungsinya", ilustrasi: null, pilihan: ["Serebrum","Serebelum","Batang otak"], jawaban: ["Berpikir dan kesadaran","Keseimbangan dan koordinasi gerak","Mengatur fungsi vital (napas, jantung)"] }
        ,
          { id: 2, judul: "Hormon dan Kelenjar", type: "quiz", narasi: "Sistem endokrin mengatur fungsi tubuh melalui hormon yang dikeluarkan kelenjar endokrin langsung ke darah.", pertanyaan: "Hormon yang mengatur kadar gula darah dihasilkan oleh...", ilustrasi: null, pilihan: ["A. Tiroid","B. Pankreas","C. Adrenal","D. Hipofisis"], jawaban: "B. Pankreas" }
        ,
          { id: 3, judul: "Alat Indra", type: "TTS", narasi: "Alat indra menangkap rangsangan dari lingkungan dan mengirimkannya ke otak melalui saraf sensorik.", pertanyaan: ["Reseptor cahaya pada retina mata disebut sel ...","Bagian telinga yang berisi cairan untuk mendeteksi suara adalah ...","Indra yang mendeteksi bau adalah ..."], ilustrasi: null, pilihan: null, jawaban: ["Fotoreseptor","Koklea","Hidung"] }
        ]
      }
    ]
  }
]
export default data
