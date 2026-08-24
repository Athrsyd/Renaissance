const data = [
  {
    id: 1,
    mapel: "Sejarah",
    kelas: 10,
    modul: [
      {
        id: 131,
        bab: 1,
        judul: "Pengertian dan Ruang Lingkup Sejarah",
        soal: [
          {
            id: 1,
            judul: "Hakikat Sejarah",
            type: "quiz",
            narasi: "Sejarah berasal dari kata Arab 'syajaratun' yang berarti pohon. Sejarah adalah ilmu yang mempelajari peristiwa-peristiwa masa lampau yang benar-benar terjadi dan berpengaruh bagi kehidupan manusia.",
            pertanyaan: "Kata 'sejarah' berasal dari bahasa Arab yang berarti...",
            ilustrasi: null,
            pilihan: ["A. Batu", "B. Pohon", "C. Sungai", "D. Tanah"],
            jawaban: "B. Pohon"
          },
          {
            id: 2,
            judul: "Konsep Waktu dalam Sejarah",
            type: "drag and drop",
            narasi: "Sejarah memiliki empat konsep waktu yang penting: perkembangan, kesinambungan, pengulangan, dan perubahan. Keempatnya membantu kita memahami bagaimana peristiwa berkaitan satu sama lain.",
            pertanyaan: "Pasangkan konsep waktu dengan contohnya",
            ilustrasi: null,
            pilihan: ["Perkembangan", "Kesinambungan", "Perubahan"],
            jawaban: ["Teknologi dari batu ke digital", "Tradisi turun-temurun", "Reformasi mengubah sistem pemerintahan"]
          },
          {
            id: 3,
            judul: "Sumber Sejarah",
            type: "drag and drop",
            narasi: "Sumber sejarah adalah segala sesuatu yang menjadi bahan untuk menyusun sejarah. Dibagi menjadi sumber primer (langsung dari pelaku) dan sumber sekunder (dari orang lain yang mengetahui).",
            pertanyaan: "Klasifikasikan sumber sejarah berikut",
            ilustrasi: null,
            pilihan: ["Buku harian pelaku", "Prasasti", "Buku teks sejarah"],
            jawaban: ["Sumber primer", "Sumber primer", "Sumber sekunder"]
          }
        ]
      },
      {
        id: 132,
        bab: 2,
        judul: "Peradaban Awal Dunia",
        soal: [
          {
            id: 1,
            judul: "Peradaban Mesopotamia",
            type: "quiz",
            narasi: "Mesopotamia, yang berarti 'tanah di antara dua sungai' (Tigris dan Efrat), adalah salah satu pusat peradaban tertua di dunia. Di sinilah tulisan pertama (cuneiform) dikembangkan oleh bangsa Sumeria.",
            pertanyaan: "Peradaban Mesopotamia berkembang di lembah sungai...",
            ilustrasi: null,
            pilihan: ["A. Nil dan Kongo", "B. Tigris dan Efrat", "C. Gangga dan Indus", "D. Huang He dan Yangtze"],
            jawaban: "B. Tigris dan Efrat"
          },
          {
            id: 2,
            judul: "Peradaban Sungai Nil",
            type: "quiz",
            narasi: "Peradaban Mesir Kuno berkembang di sepanjang Sungai Nil. Banjir tahunan Sungai Nil menghasilkan lumpur subur yang sangat mendukung pertanian dan perkembangan peradaban.",
            pertanyaan: "Bangunan monumental peninggalan peradaban Mesir Kuno yang masih berdiri hingga kini adalah...",
            ilustrasi: null,
            pilihan: ["A. Koloseum", "B. Piramida Giza", "C. Tembok Besar", "D. Colosseum Roma"],
            jawaban: "B. Piramida Giza"
          },
          {
            id: 3,
            judul: "Peradaban Kuno",
            type: "TTS",
            narasi: "Peradaban-peradaban awal dunia memberikan warisan besar bagi perkembangan manusia modern.",
            pertanyaan: [
              "Tulisan kuno bangsa Mesir yang menggunakan gambar disebut ...",
              "Hukum tertulis pertama di dunia diciptakan oleh raja ...",
              "Bangunan piramida di Mesir berfungsi sebagai ..."
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Hieroglif", "Hammurabi", "Makam"]
          }
        ]
      },
      {
        id: 133,
        bab: 3,
        judul: "Kerajaan Hindu-Buddha di Indonesia",
        soal: [
          {
            id: 1,
            judul: "Masuknya Hindu-Buddha ke Indonesia",
            type: "drag and drop",
            narasi: "Agama Hindu dan Buddha masuk ke Indonesia melalui jalur perdagangan. Ada beberapa teori yang menjelaskan bagaimana proses masuknya pengaruh tersebut.",
            pertanyaan: "Pasangkan teori masuknya Hindu-Buddha dengan pencetusnya",
            ilustrasi: null,
            pilihan: ["Teori Waisya", "Teori Brahmana", "Teori Ksatria"],
            jawaban: ["N.J. Krom", "J.C. van Leur", "R.C. Majumdar"]
          },
          {
            id: 2,
            judul: "Kerajaan Sriwijaya",
            type: "quiz",
            narasi: "Sriwijaya adalah kerajaan maritim Buddha yang berpusat di Sumatera. Mencapai puncak kejayaannya pada abad ke-7 hingga ke-9 M sebagai pusat perdagangan dan penyebaran agama Buddha.",
            pertanyaan: "Kerajaan Sriwijaya terkenal sebagai kerajaan...",
            ilustrasi: null,
            pilihan: ["A. Agraris Hindu", "B. Maritim Buddha", "C. Agraris Buddha", "D. Maritim Hindu"],
            jawaban: "B. Maritim Buddha"
          },
          {
            id: 3,
            judul: "Kerajaan Majapahit",
            type: "quiz",
            narasi: "Majapahit adalah kerajaan Hindu-Buddha terbesar di Nusantara yang berpusat di Jawa Timur. Di bawah Hayam Wuruk dan Gajah Mada, Majapahit berhasil menyatukan Nusantara.",
            pertanyaan: "Patih Majapahit yang terkenal dengan Sumpah Palapa-nya adalah...",
            ilustrasi: null,
            pilihan: ["A. Hayam Wuruk", "B. Ken Arok", "C. Gajah Mada", "D. Raden Wijaya"],
            jawaban: "C. Gajah Mada"
          }
        ]
      },
      {
        id: 134,
        bab: 4,
        judul: "Kerajaan Islam di Indonesia",
        soal: [
          {
            id: 1,
            judul: "Masuknya Islam ke Indonesia",
            type: "quiz",
            narasi: "Islam masuk ke Indonesia melalui jalur perdagangan. Para pedagang Arab, Persia, dan India membawa ajaran Islam bersamaan dengan kegiatan dagang mereka. Islam pertama kali masuk ke wilayah Aceh sekitar abad ke-7 M.",
            pertanyaan: "Islam masuk ke Indonesia pertama kali melalui...",
            ilustrasi: null,
            pilihan: ["A. Peperangan", "B. Jalur perdagangan", "C. Kolonialisme", "D. Migrasi"],
            jawaban: "B. Jalur perdagangan"
          },
          {
            id: 2,
            judul: "Wali Songo",
            type: "drag and drop",
            narasi: "Wali Songo (Sembilan Wali) adalah tokoh penyebar Islam di Pulau Jawa yang menggunakan pendekatan budaya lokal agar mudah diterima masyarakat.",
            pertanyaan: "Pasangkan Wali Songo dengan karyanya",
            ilustrasi: null,
            pilihan: ["Sunan Kalijaga", "Sunan Giri", "Sunan Bonang"],
            jawaban: ["Wayang dan tembang", "Gending dan tembang dolanan", "Gamelan dan tembang tombo ati"]
          },
          {
            id: 3,
            judul: "Kerajaan Islam Nusantara",
            type: "TTS",
            narasi: "Kerajaan-kerajaan Islam di Nusantara memainkan peran penting dalam penyebaran Islam dan perkembangan budaya Indonesia.",
            pertanyaan: [
              "Kerajaan Islam pertama di Nusantara berlokasi di ...",
              "Kerajaan Islam terbesar di Jawa pada abad ke-15 adalah ...",
              "Pusat perdagangan Islam yang ramai di Selat Malaka"
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Samudra Pasai", "Demak", "Malaka"]
          }
        ]
      },
      {
        id: 135,
        bab: 5,
        judul: "Kolonialisme dan Imperialisme",
        soal: [
          {
            id: 1,
            judul: "Latar Belakang Penjelajahan Samudra",
            type: "drag and drop",
            narasi: "Bangsa Eropa melakukan penjelajahan samudra karena berbagai faktor, mulai dari mencari rempah-rempah, menyebarkan agama, hingga mencari kejayaan (gold, glory, gospel).",
            pertanyaan: "Pasangkan motivasi 3G dengan maknanya",
            ilustrasi: null,
            pilihan: ["Gold", "Glory", "Gospel"],
            jawaban: ["Mencari kekayaan/rempah", "Mencari kejayaan/nama besar", "Menyebarkan agama Kristen"]
          },
          {
            id: 2,
            judul: "VOC di Indonesia",
            type: "quiz",
            narasi: "VOC (Vereenigde Oostindische Compagnie) adalah kongsi dagang Belanda yang diberi hak monopoli perdagangan di Asia. VOC berkuasa di Nusantara selama hampir dua abad (1602-1799).",
            pertanyaan: "VOC didirikan pada tahun...",
            ilustrasi: null,
            pilihan: ["A. 1511", "B. 1602", "C. 1619", "D. 1799"],
            jawaban: "B. 1602"
          },
          {
            id: 3,
            judul: "Perlawanan terhadap Kolonial",
            type: "quiz",
            narasi: "Berbagai daerah di Indonesia melakukan perlawanan terhadap penjajahan Belanda. Meski akhirnya gagal karena kurangnya persatuan, perlawanan ini menjadi cikal bakal semangat nasionalisme.",
            pertanyaan: "Perang Diponegoro (1825-1830) dipimpin oleh...",
            ilustrasi: null,
            pilihan: ["A. Sultan Agung", "B. Pangeran Diponegoro", "C. Imam Bonjol", "D. Teuku Umar"],
            jawaban: "B. Pangeran Diponegoro"
          }
        ]
      }
    ]
  }
]

export default data
