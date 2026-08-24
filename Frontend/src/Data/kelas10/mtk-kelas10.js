const data = [
  {
    id: 1,
    mapel: "Matematika",
    kelas: 10,
    modul: [
      {
        id: 101,
        bab: 1,
        judul: "Eksponen dan Logaritma",
        soal: [
          {
            id: 1,
            judul: "Mengenal Bilangan Eksponen",
            type: "quiz",
            narasi: "Eksponen adalah operasi matematika yang menyatakan perkalian berulang suatu bilangan. Bentuk aⁿ berarti bilangan a dikalikan sebanyak n kali. Contoh: 2³ = 2 × 2 × 2 = 8.",
            pertanyaan: "Berapa hasil dari 3⁴?",
            ilustrasi: null,
            pilihan: ["A. 12", "B. 64", "C. 81", "D. 27"],
            jawaban: "C. 81"
          },
          {
            id: 2,
            judul: "Sifat-Sifat Eksponen",
            type: "drag and drop",
            narasi: "Eksponen memiliki sifat-sifat penting: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, dan (aᵐ)ⁿ = aᵐˣⁿ.",
            pertanyaan: "Pasangkan operasi eksponen dengan hasilnya",
            ilustrasi: null,
            pilihan: ["2³ × 2²", "3⁵ ÷ 3²", "(2²)³"],
            jawaban: ["2⁵ = 32", "3³ = 27", "2⁶ = 64"]
          },
          {
            id: 3,
            judul: "Dasar Logaritma",
            type: "quiz",
            narasi: "Logaritma adalah kebalikan dari eksponen. Jika aⁿ = b, maka ⁰log b = n (dibaca: logaritma b berbasis a = n). Logaritma berbasis 10 disebut logaritma umum (log), sedangkan berbasis e disebut logaritma natural (ln).",
            pertanyaan: "Jika 2ˣ = 32, maka nilai x adalah...",
            ilustrasi: null,
            pilihan: ["A. 4", "B. 5", "C. 6", "D. 16"],
            jawaban: "B. 5"
          },
          {
            id: 4,
            judul: "Menyusun Kata Logaritma",
            type: "TTS",
            narasi: "Logaritma digunakan dalam berbagai bidang ilmu, termasuk fisika, kimia, dan ekonomi.",
            pertanyaan: [
              "Kebalikan dari operasi eksponen",
              "Logaritma berbasis e disebut logaritma...",
              "Basis logaritma umum adalah angka..."
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Logaritma", "Natural", "Sepuluh"]
          }
        ]
      },
      {
        id: 102,
        bab: 2,
        judul: "Fungsi Kuadrat",
        soal: [
          {
            id: 1,
            judul: "Bentuk Umum Fungsi Kuadrat",
            type: "quiz",
            narasi: "Fungsi kuadrat adalah fungsi dengan bentuk umum f(x) = ax² + bx + c, di mana a ≠ 0. Grafiknya berbentuk parabola — terbuka ke atas jika a > 0, dan terbuka ke bawah jika a < 0.",
            pertanyaan: "Manakah yang merupakan bentuk fungsi kuadrat?",
            ilustrasi: null,
            pilihan: ["A. f(x) = 3x + 2", "B. f(x) = 2x² - 5x + 1", "C. f(x) = x³ + 1", "D. f(x) = 1/x"],
            jawaban: "B. f(x) = 2x² - 5x + 1"
          },
          {
            id: 2,
            judul: "Titik Puncak Parabola",
            type: "quiz",
            narasi: "Titik puncak (vertex) parabola berada di koordinat (-b/2a, f(-b/2a)). Titik ini adalah nilai minimum jika a > 0 atau nilai maksimum jika a < 0.",
            pertanyaan: "Untuk fungsi f(x) = x² - 4x + 3, nilai x pada titik puncak adalah...",
            ilustrasi: null,
            pilihan: ["A. x = -2", "B. x = 2", "C. x = 4", "D. x = 3"],
            jawaban: "B. x = 2"
          },
          {
            id: 3,
            judul: "Diskriminan",
            type: "drag and drop",
            narasi: "Diskriminan D = b² - 4ac menentukan jumlah akar persamaan kuadrat: D > 0 berarti dua akar real berbeda, D = 0 berarti dua akar real sama, D < 0 berarti tidak ada akar real.",
            pertanyaan: "Pasangkan nilai diskriminan dengan kondisi akarnya",
            ilustrasi: null,
            pilihan: ["D > 0", "D = 0", "D < 0"],
            jawaban: ["Dua akar real berbeda", "Dua akar real sama", "Tidak ada akar real"]
          }
        ]
      },
      {
        id: 103,
        bab: 3,
        judul: "Trigonometri Dasar",
        soal: [
          {
            id: 1,
            judul: "Sisi Segitiga Siku-Siku",
            type: "drag and drop",
            narasi: "Dalam segitiga siku-siku, terdapat tiga sisi: sisi depan (opposite), sisi samping (adjacent), dan sisi miring (hypotenuse). Perbandingan sisi-sisi ini menghasilkan nilai trigonometri.",
            pertanyaan: "Pasangkan nama fungsi trigonometri dengan definisinya",
            ilustrasi: null,
            pilihan: ["sin θ", "cos θ", "tan θ"],
            jawaban: ["depan/miring", "samping/miring", "depan/samping"]
          },
          {
            id: 2,
            judul: "Nilai Trigonometri Sudut Istimewa",
            type: "quiz",
            narasi: "Sudut istimewa (0°, 30°, 45°, 60°, 90°) memiliki nilai trigonometri yang perlu dihafal karena sering muncul dalam soal.",
            pertanyaan: "Berapakah nilai sin 30°?",
            ilustrasi: null,
            pilihan: ["A. 1", "B. ½", "C. ½√2", "D. ½√3"],
            jawaban: "B. ½"
          },
          {
            id: 3,
            judul: "Identitas Trigonometri",
            type: "TTS",
            narasi: "Identitas dasar trigonometri: sin²θ + cos²θ = 1. Ini berlaku untuk semua nilai sudut θ.",
            pertanyaan: [
              "Identitas dasar: sin²θ + cos²θ = ...",
              "Perbandingan sin/cos disebut fungsi ...",
              "Kebalikan dari sin disebut ..."
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Satu", "Tangen", "Kosekан"]
          }
        ]
      },
      {
        id: 104,
        bab: 4,
        judul: "Statistika Dasar",
        soal: [
          {
            id: 1,
            judul: "Mean, Median, Modus",
            type: "drag and drop",
            narasi: "Ukuran pemusatan data terdiri dari mean (rata-rata), median (nilai tengah data terurut), dan modus (nilai yang paling sering muncul).",
            pertanyaan: "Pasangkan ukuran pemusatan dengan definisinya",
            ilustrasi: null,
            pilihan: ["Mean", "Median", "Modus"],
            jawaban: ["Rata-rata hitung", "Nilai tengah data", "Nilai paling sering muncul"]
          },
          {
            id: 2,
            judul: "Menghitung Mean",
            type: "quiz",
            narasi: "Mean dihitung dengan menjumlahkan semua data lalu dibagi banyaknya data. Rumus: x̄ = Σx / n.",
            pertanyaan: "Data nilai ulangan: 70, 80, 90, 60, 100. Berapakah mean-nya?",
            ilustrasi: null,
            pilihan: ["A. 75", "B. 80", "C. 85", "D. 90"],
            jawaban: "B. 80"
          },
          {
            id: 3,
            judul: "Jangkauan dan Simpangan",
            type: "quiz",
            narasi: "Jangkauan (range) adalah selisih data terbesar dan terkecil. Simpangan baku mengukur seberapa jauh data menyebar dari mean-nya.",
            pertanyaan: "Data: 5, 8, 3, 12, 7. Berapakah jangkauan datanya?",
            ilustrasi: null,
            pilihan: ["A. 7", "B. 8", "C. 9", "D. 10"],
            jawaban: "C. 9"
          }
        ]
      },
      {
        id: 105,
        bab: 5,
        judul: "Peluang",
        soal: [
          {
            id: 1,
            judul: "Konsep Dasar Peluang",
            type: "quiz",
            narasi: "Peluang suatu kejadian adalah perbandingan antara banyaknya kejadian yang diharapkan dengan total seluruh kemungkinan. Nilai peluang selalu antara 0 (mustahil) dan 1 (pasti).",
            pertanyaan: "Sebuah dadu dilempar sekali. Peluang munculnya angka genap adalah...",
            ilustrasi: null,
            pilihan: ["A. 1/6", "B. 1/3", "C. 1/2", "D. 2/3"],
            jawaban: "C. 1/2"
          },
          {
            id: 2,
            judul: "Frekuensi Relatif",
            type: "quiz",
            narasi: "Frekuensi relatif adalah perbandingan frekuensi suatu kejadian terhadap total percobaan. Semakin banyak percobaan, frekuensi relatif mendekati peluang teoritis.",
            pertanyaan: "Dalam 100 pelemparan koin, muncul gambar sebanyak 48 kali. Frekuensi relatif munculnya gambar adalah...",
            ilustrasi: null,
            pilihan: ["A. 0,48", "B. 0,50", "C. 0,52", "D. 48"],
            jawaban: "A. 0,48"
          },
          {
            id: 3,
            judul: "Istilah Peluang",
            type: "TTS",
            narasi: "Memahami istilah-istilah dalam peluang sangat penting untuk menyelesaikan soal dengan benar.",
            pertanyaan: [
              "Himpunan semua hasil yang mungkin disebut ruang ...",
              "Nilai peluang kejadian pasti terjadi adalah ...",
              "Peluang kejadian yang tidak mungkin bernilai ..."
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Sampel", "Satu", "Nol"]
          }
        ]
      }
    ]
  }
]

export default data
