const data = [
  {
    id: 1,
    mapel: "IPA",
    kelas: 10,
    modul: [
      {
        id: 111,
        bab: 1,
        judul: "Hakikat Ilmu Sains",
        soal: [
          {
            id: 1,
            judul: "Metode Ilmiah",
            type: "drag and drop",
            narasi: "Metode ilmiah adalah cara sistematis untuk menemukan jawaban atas pertanyaan tentang alam. Langkah-langkahnya harus dilakukan secara berurutan agar hasil dapat dipercaya.",
            pertanyaan: "Urutkan langkah metode ilmiah dengan benar",
            ilustrasi: null,
            pilihan: ["Hipotesis", "Observasi", "Eksperimen", "Kesimpulan"],
            jawaban: ["Observasi", "Hipotesis", "Eksperimen", "Kesimpulan"]
          },
          {
            id: 2,
            judul: "Besaran dan Satuan",
            type: "quiz",
            narasi: "Besaran adalah sesuatu yang dapat diukur. Besaran pokok adalah besaran dasar yang tidak bergantung pada besaran lain, seperti panjang (meter), massa (kilogram), dan waktu (detik).",
            pertanyaan: "Manakah yang BUKAN besaran pokok dalam Sistem Internasional (SI)?",
            ilustrasi: null,
            pilihan: ["A. Panjang", "B. Kecepatan", "C. Waktu", "D. Massa"],
            jawaban: "B. Kecepatan"
          },
          {
            id: 3,
            judul: "Alat Ukur Sains",
            type: "drag and drop",
            narasi: "Setiap besaran memiliki alat ukur yang tepat. Menggunakan alat ukur yang sesuai menghasilkan data yang akurat.",
            pertanyaan: "Pasangkan besaran dengan alat ukurnya",
            ilustrasi: null,
            pilihan: ["Panjang", "Massa", "Suhu", "Waktu"],
            jawaban: ["Penggaris", "Neraca", "Termometer", "Stopwatch"]
          }
        ]
      },
      {
        id: 112,
        bab: 2,
        judul: "Zat dan Perubahannya",
        soal: [
          {
            id: 1,
            judul: "Wujud Zat",
            type: "drag and drop",
            narasi: "Zat dapat berwujud padat, cair, atau gas. Setiap wujud memiliki susunan partikel dan sifat yang berbeda. Wujud zat dapat berubah karena pemanasan atau pendinginan.",
            pertanyaan: "Pasangkan wujud zat dengan sifatnya",
            ilustrasi: null,
            pilihan: ["Padat", "Cair", "Gas"],
            jawaban: ["Bentuk & volume tetap", "Bentuk berubah, volume tetap", "Bentuk & volume berubah"]
          },
          {
            id: 2,
            judul: "Perubahan Fisika dan Kimia",
            type: "quiz",
            narasi: "Perubahan fisika tidak menghasilkan zat baru (contoh: es mencair, kertas dipotong). Perubahan kimia menghasilkan zat baru dengan sifat berbeda (contoh: kertas dibakar, besi berkarat).",
            pertanyaan: "Manakah contoh perubahan KIMIA?",
            ilustrasi: null,
            pilihan: ["A. Gula larut dalam air", "B. Es mencair", "C. Besi berkarat", "D. Lilin meleleh"],
            jawaban: "C. Besi berkarat"
          },
          {
            id: 3,
            judul: "Campuran dan Pemisahan",
            type: "TTS",
            narasi: "Campuran dapat dipisahkan berdasarkan sifat fisik komponen-komponennya, seperti ukuran partikel, titik didih, dan kelarutan.",
            pertanyaan: [
              "Metode pemisahan campuran berdasarkan perbedaan titik didih",
              "Pemisahan campuran dengan menyaring",
              "Campuran yang terlihat seragam disebut campuran ..."
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Destilasi", "Filtrasi", "Homogen"]
          }
        ]
      },
      {
        id: 113,
        bab: 3,
        judul: "Energi dalam Kehidupan",
        soal: [
          {
            id: 1,
            judul: "Bentuk-Bentuk Energi",
            type: "drag and drop",
            narasi: "Energi hadir dalam berbagai bentuk dan dapat berubah dari satu bentuk ke bentuk lain. Hukum Kekekalan Energi menyatakan bahwa energi tidak dapat diciptakan atau dimusnahkan.",
            pertanyaan: "Pasangkan contoh dengan bentuk energi yang dimiliki",
            ilustrasi: null,
            pilihan: ["Batu di ketinggian", "Air panas", "Pegas tertekan", "Lampu menyala"],
            jawaban: ["Energi potensial", "Energi panas", "Energi elastis", "Energi cahaya"]
          },
          {
            id: 2,
            judul: "Hukum Kekekalan Energi",
            type: "quiz",
            narasi: "Energi tidak dapat diciptakan atau dimusnahkan, hanya dapat diubah dari satu bentuk ke bentuk lain. Ini adalah Hukum Kekekalan Energi.",
            pertanyaan: "Pada panel surya, terjadi perubahan energi dari...",
            ilustrasi: null,
            pilihan: ["A. Kimia → Listrik", "B. Cahaya → Listrik", "C. Panas → Gerak", "D. Listrik → Cahaya"],
            jawaban: "B. Cahaya → Listrik"
          },
          {
            id: 3,
            judul: "Sumber Energi",
            type: "quiz",
            narasi: "Sumber energi terbagi menjadi terbarukan (matahari, angin, air) dan tak terbarukan (minyak bumi, batu bara, gas alam). Sumber energi terbarukan lebih ramah lingkungan.",
            pertanyaan: "Manakah sumber energi TERBARUKAN?",
            ilustrasi: null,
            pilihan: ["A. Minyak bumi", "B. Batu bara", "C. Gas alam", "D. Energi angin"],
            jawaban: "D. Energi angin"
          }
        ]
      },
      {
        id: 114,
        bab: 4,
        judul: "Bumi dan Alam Semesta",
        soal: [
          {
            id: 1,
            judul: "Lapisan Bumi",
            type: "drag and drop",
            narasi: "Bumi tersusun dari beberapa lapisan: kerak (crust), mantel (mantle), inti luar cair, dan inti dalam padat. Setiap lapisan memiliki komposisi dan suhu yang berbeda.",
            pertanyaan: "Urutkan lapisan bumi dari luar ke dalam",
            ilustrasi: null,
            pilihan: ["Mantel", "Inti luar", "Kerak", "Inti dalam"],
            jawaban: ["Kerak", "Mantel", "Inti luar", "Inti dalam"]
          },
          {
            id: 2,
            judul: "Tata Surya",
            type: "quiz",
            narasi: "Tata Surya terdiri dari Matahari sebagai pusatnya, delapan planet, satelit, asteroid, dan komet. Planet-planet bergerak mengelilingi Matahari dalam orbit elips.",
            pertanyaan: "Planet manakah yang paling dekat dengan Matahari?",
            ilustrasi: null,
            pilihan: ["A. Venus", "B. Bumi", "C. Merkurius", "D. Mars"],
            jawaban: "C. Merkurius"
          },
          {
            id: 3,
            judul: "Istilah Alam Semesta",
            type: "TTS",
            narasi: "Alam semesta sangat luas dan masih terus dieksplorasi oleh para ilmuwan.",
            pertanyaan: [
              "Benda langit yang mengelilingi planet disebut ...",
              "Galaksi tempat Bumi berada bernama ...",
              "Bintang yang menjadi pusat tata surya kita"
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Satelit", "Bimasakti", "Matahari"]
          }
        ]
      },
      {
        id: 115,
        bab: 5,
        judul: "Makhluk Hidup dan Lingkungan",
        soal: [
          {
            id: 1,
            judul: "Ciri-Ciri Makhluk Hidup",
            type: "drag and drop",
            narasi: "Makhluk hidup memiliki ciri-ciri yang membedakannya dari benda mati: bernapas, tumbuh, berkembang biak, memerlukan nutrisi, bergerak, dan merespons rangsangan.",
            pertanyaan: "Pasangkan ciri makhluk hidup dengan contohnya",
            ilustrasi: null,
            pilihan: ["Bernapas", "Tumbuh", "Berkembang biak"],
            jawaban: ["Menghirup O₂, mengeluarkan CO₂", "Bertambah besar dan tinggi", "Menghasilkan keturunan"]
          },
          {
            id: 2,
            judul: "Ekosistem",
            type: "quiz",
            narasi: "Ekosistem adalah kesatuan antara makhluk hidup (biotik) dan lingkungannya (abiotik) yang saling berinteraksi. Contoh: hutan, danau, padang rumput.",
            pertanyaan: "Manakah yang merupakan komponen ABIOTIK dalam ekosistem?",
            ilustrasi: null,
            pilihan: ["A. Pohon", "B. Serangga", "C. Air", "D. Jamur"],
            jawaban: "C. Air"
          },
          {
            id: 3,
            judul: "Rantai dan Jaring Makanan",
            type: "quiz",
            narasi: "Rantai makanan menggambarkan aliran energi dari produsen ke konsumen. Jaring makanan adalah kumpulan rantai makanan yang saling berhubungan dalam suatu ekosistem.",
            pertanyaan: "Dalam rantai makanan: rumput → belalang → katak → ular. Siapakah produsen?",
            ilustrasi: null,
            pilihan: ["A. Belalang", "B. Katak", "C. Rumput", "D. Ular"],
            jawaban: "C. Rumput"
          }
        ]
      }
    ]
  }
]

export default data
