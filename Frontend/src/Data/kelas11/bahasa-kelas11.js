const data = [
  {
    id: 1, mapel: "Bahasa dan Sastra", kelas: 11,
    modul: [
      { id: 241, bab: 1, judul: "Teks Prosedur",
        soal: [
          { id: 1, judul: "Pengertian Teks Prosedur", type: "quiz", narasi: "Teks prosedur adalah teks yang berisi langkah-langkah atau tahapan untuk melakukan sesuatu secara berurutan agar tujuan tercapai.", pertanyaan: "Ciri utama teks prosedur adalah...", ilustrasi: null, pilihan: ["A. Bersifat naratif","B. Berisi langkah-langkah berurutan","C. Mengandung opini penulis","D. Bersifat deskriptif"], jawaban: "B. Berisi langkah-langkah berurutan" },
          { id: 2, judul: "Struktur Teks Prosedur", type: "drag and drop", narasi: "Teks prosedur memiliki struktur: tujuan, material/alat, dan langkah-langkah. Urutan ini memastikan pembaca dapat mengikuti instruksi dengan tepat.", pertanyaan: "Urutkan struktur teks prosedur", ilustrasi: null, pilihan: ["Langkah-langkah","Material/alat","Tujuan"], jawaban: ["Tujuan","Material/alat","Langkah-langkah"] },
          { id: 3, judul: "Konjungsi Temporal", type: "TTS", narasi: "Teks prosedur banyak menggunakan konjungsi temporal untuk menunjukkan urutan langkah-langkah.", pertanyaan: ["Kata penghubung urutan waktu disebut konjungsi ...","Contoh konjungsi temporal yang menyatakan urutan pertama adalah ...","Kata 'kemudian' dan 'lalu' termasuk konjungsi ..."], ilustrasi: null, pilihan: null, jawaban: ["Temporal","Pertama","Temporal"] }
        ]
      },
      { id: 242, bab: 2, judul: "Teks Ceramah",
        soal: [
          { id: 1, judul: "Pengertian Ceramah", type: "quiz", narasi: "Ceramah adalah pidato yang disampaikan oleh seorang penceramah kepada khalayak luas mengenai suatu topik, biasanya berisi nilai-nilai moral, agama, atau pengetahuan.", pertanyaan: "Perbedaan ceramah dengan pidato terletak pada...", ilustrasi: null, pilihan: ["A. Tidak ada perbedaan","B. Ceramah lebih pada nilai moral/agama, pidato lebih formal","C. Pidato lebih informal","D. Ceramah tidak menggunakan teks"], jawaban: "B. Ceramah lebih pada nilai moral/agama, pidato lebih formal" },
          { id: 2, judul: "Struktur Ceramah", type: "drag and drop", narasi: "Ceramah yang baik memiliki struktur pembuka, isi, dan penutup. Setiap bagian memiliki fungsi tersendiri dalam menyampaikan pesan kepada audiens.", pertanyaan: "Pasangkan bagian ceramah dengan fungsinya", ilustrasi: null, pilihan: ["Pembuka","Isi","Penutup"], jawaban: ["Salam dan menarik perhatian","Paparan materi pokok","Simpulan dan doa/harapan"] },
          { id: 3, judul: "Teknik Ceramah", type: "quiz", narasi: "Penceramah yang baik menggunakan berbagai teknik untuk menyampaikan pesan secara efektif, termasuk penggunaan intonasi, gestur, dan kontak mata.", pertanyaan: "Variasi naik-turunnya suara saat berbicara disebut...", ilustrasi: null, pilihan: ["A. Diksi","B. Intonasi","C. Artikulasi","D. Tempo"], jawaban: "B. Intonasi" }
        ]
      },
      { id: 243, bab: 3, judul: "Novel dan Unsur-Unsurnya",
        soal: [
          { id: 1, judul: "Unsur Intrinsik Novel", type: "drag and drop", narasi: "Novel dibangun oleh unsur intrinsik (dari dalam karya) yang membentuk kesatuan cerita yang utuh dan bermakna.", pertanyaan: "Pasangkan unsur intrinsik dengan definisinya", ilustrasi: null, pilihan: ["Tema","Alur","Penokohan","Latar"], jawaban: ["Gagasan pokok cerita","Rangkaian peristiwa","Penggambaran karakter tokoh","Waktu, tempat, suasana cerita"] },
          { id: 2, judul: "Jenis Alur", type: "quiz", narasi: "Alur (plot) adalah rangkaian peristiwa yang membentuk cerita. Berdasarkan urutannya: alur maju (kronologis), mundur (flashback), dan campuran.", pertanyaan: "Novel yang menceritakan masa lalu tokoh kemudian kembali ke masa kini menggunakan alur...", ilustrasi: null, pilihan: ["A. Maju","B. Mundur","C. Campuran","D. Progresif"], jawaban: "C. Campuran" },
          { id: 3, judul: "Teknik Penokohan", type: "TTS", narasi: "Pengarang memperkenalkan karakter tokoh melalui berbagai teknik yang membuat tokoh terasa hidup dan nyata.", pertanyaan: ["Penggambaran tokoh melalui deskripsi langsung disebut teknik ...","Penggambaran tokoh melalui dialog dan tindakannya disebut teknik ...","Tokoh yang memiliki sifat baik dalam cerita disebut tokoh ..."], ilustrasi: null, pilihan: null, jawaban: ["Analitik","Dramatik","Protagonis"] }
        ]
      },
      { id: 244, bab: 4, judul: "Drama dan Pementasan",
        soal: [
          { id: 1, judul: "Pengertian Drama", type: "quiz", narasi: "Drama adalah karya sastra yang ditulis dalam bentuk dialog dan dirancang untuk dipentaskan di atas panggung. Drama menggabungkan unsur sastra, seni peran, dan seni pertunjukan.", pertanyaan: "Unsur yang membedakan drama dari karya sastra lain adalah...", ilustrasi: null, pilihan: ["A. Memiliki tema","B. Ditulis dalam dialog untuk dipentaskan","C. Memiliki tokoh","D. Menggunakan bahasa yang indah"], jawaban: "B. Ditulis dalam dialog untuk dipentaskan" },
          { id: 2, judul: "Unsur Drama", type: "drag and drop", narasi: "Drama memiliki unsur-unsur yang saling mendukung untuk menciptakan pertunjukan yang bermakna dan memukau penonton.", pertanyaan: "Pasangkan unsur drama dengan definisinya", ilustrasi: null, pilihan: ["Babak","Adegan","Prolog","Dialog"], jawaban: ["Bagian besar dalam drama","Bagian kecil dalam babak","Kata pembuka drama","Percakapan antar tokoh"] },
          { id: 3, judul: "Konflik Drama", type: "quiz", narasi: "Konflik adalah pertentangan yang menjadi inti sebuah drama. Ada konflik internal (dalam diri tokoh) dan konflik eksternal (antara tokoh dengan tokoh lain atau lingkungan).", pertanyaan: "Konflik yang terjadi dalam batin seorang tokoh disebut konflik...", ilustrasi: null, pilihan: ["A. Eksternal","B. Sosial","C. Internal","D. Fisik"], jawaban: "C. Internal" }
        ]
      },
      { id: 245, bab: 5, judul: "Resensi Buku",
        soal: [
          { id: 1, judul: "Pengertian Resensi", type: "quiz", narasi: "Resensi adalah penilaian atau ulasan terhadap sebuah buku, film, atau karya lain yang mencakup identitas, isi, kelebihan, dan kekurangan karya tersebut.", pertanyaan: "Tujuan utama penulisan resensi adalah...", ilustrasi: null, pilihan: ["A. Meringkas isi buku","B. Menilai dan memberikan informasi tentang karya","C. Menceritakan kembali isi buku","D. Melarang orang membaca buku"], jawaban: "B. Menilai dan memberikan informasi tentang karya" },
          { id: 2, judul: "Struktur Resensi", type: "drag and drop", narasi: "Resensi yang baik memiliki struktur yang lengkap agar pembaca mendapat gambaran menyeluruh tentang karya yang diulas.", pertanyaan: "Urutkan struktur resensi buku", ilustrasi: null, pilihan: ["Penilaian (kelebihan/kekurangan)","Identitas buku","Ringkasan isi"], jawaban: ["Identitas buku","Ringkasan isi","Penilaian (kelebihan/kekurangan)"] },
          { id: 3, judul: "Kalimat Penilaian", type: "TTS", narasi: "Dalam resensi, penulis menggunakan kalimat penilaian yang bersifat objektif berdasarkan analisis terhadap karya.", pertanyaan: ["Ulasan terhadap sebuah karya disebut ...","Penilaian yang tidak memihak dan berdasarkan fakta disebut ...","Bagian resensi yang berisi simpulan nilai karya disebut ..."], ilustrasi: null, pilihan: null, jawaban: ["Resensi","Objektif","Penutup"] }
        ]
      }
    ]
  }
]
export default data
