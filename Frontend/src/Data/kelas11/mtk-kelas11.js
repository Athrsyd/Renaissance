const data = [
  {
    id: 1,
    mapel: "Matematika",
    kelas: 11,
    modul: [
      {
        id: 201,
        bab: 1,
        judul: "Limit Fungsi",
        soal: [
          {
            id: 1,
            judul: "Konsep Limit",
            type: "quiz",
            narasi: "Limit fungsi f(x) saat x mendekati a (ditulis lim f(x), x→a) adalah nilai yang didekati oleh f(x) ketika x semakin dekat ke a, meski belum tentu sama dengan f(a).",
            pertanyaan: "Limit fungsi f(x) = 2x + 3 saat x→2 adalah...",
            ilustrasi: null,
            pilihan: ["A. 5", "B. 6", "C. 7", "D. 8"],
            jawaban: "C. 7"
          },
          {
            id: 2,
            judul: "Sifat-Sifat Limit",
            type: "drag and drop",
            narasi: "Limit memiliki sifat operasi: limit jumlah, selisih, perkalian, pembagian, dan limit fungsi pangkat. Sifat-sifat ini memudahkan perhitungan limit yang kompleks.",
            pertanyaan: "Pasangkan operasi limit dengan sifatnya",
            ilustrasi: null,
            pilihan: ["lim[f(x)+g(x)]", "lim[f(x)·g(x)]", "lim[f(x)/g(x)]"],
            jawaban: ["lim f(x) + lim g(x)", "lim f(x) · lim g(x)", "lim f(x) / lim g(x), g≠0"]
          },
          {
            id: 3,
            judul: "Limit Tak Tentu",
            type: "quiz",
            narasi: "Bentuk tak tentu 0/0 pada limit diselesaikan dengan pemfaktoran atau substitusi. Contoh: lim (x²-4)/(x-2) saat x→2 diselesaikan dengan memfaktorkan pembilang.",
            pertanyaan: "Nilai dari lim (x²-9)/(x-3) saat x→3 adalah...",
            ilustrasi: null,
            pilihan: ["A. 0", "B. 3", "C. 6", "D. 9"],
            jawaban: "C. 6"
          },
          {
            id: 4,
            judul: "Istilah Limit",
            type: "TTS",
            narasi: "Limit adalah konsep dasar kalkulus yang menjadi fondasi turunan dan integral.",
            pertanyaan: [
              "Bentuk 0/0 dalam limit disebut bentuk ...",
              "Metode menyelesaikan limit dengan memecah ekspresi disebut ...",
              "Limit yang hasilnya tak hingga berarti fungsi ..."
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Tak tentu", "Pemfaktoran", "Divergen"]
          }
        ]
      },
      {
        id: 202,
        bab: 2,
        judul: "Turunan Fungsi",
        soal: [
          {
            id: 1,
            judul: "Konsep Turunan",
            type: "quiz",
            narasi: "Turunan f'(x) menyatakan laju perubahan fungsi f(x) terhadap x. Secara geometri, turunan di titik x=a adalah gradien garis singgung grafik f di titik (a, f(a)).",
            pertanyaan: "Turunan dari f(x) = x³ adalah...",
            ilustrasi: null,
            pilihan: ["A. f'(x) = x²", "B. f'(x) = 3x", "C. f'(x) = 3x²", "D. f'(x) = 2x³"],
            jawaban: "C. f'(x) = 3x²"
          },
          {
            id: 2,
            judul: "Aturan Turunan",
            type: "drag and drop",
            narasi: "Ada beberapa aturan turunan: aturan pangkat, perkalian, pembagian, dan rantai. Menguasai aturan-aturan ini memudahkan mencari turunan fungsi yang kompleks.",
            pertanyaan: "Pasangkan fungsi dengan turunannya",
            ilustrasi: null,
            pilihan: ["f(x) = sin x", "f(x) = cos x", "f(x) = eˣ"],
            jawaban: ["f'(x) = cos x", "f'(x) = -sin x", "f'(x) = eˣ"]
          },
          {
            id: 3,
            judul: "Aplikasi Turunan",
            type: "quiz",
            narasi: "Turunan digunakan untuk mencari nilai maksimum/minimum fungsi. Pada titik maksimum/minimum, nilai turunan f'(x) = 0 (titik kritis).",
            pertanyaan: "Fungsi f(x) = -x² + 4x memiliki nilai maksimum pada x = ...",
            ilustrasi: null,
            pilihan: ["A. x = 1", "B. x = 2", "C. x = 4", "D. x = 0"],
            jawaban: "B. x = 2"
          }
        ]
      },
      {
        id: 203,
        bab: 3,
        judul: "Integral",
        soal: [
          {
            id: 1,
            judul: "Integral sebagai Anti-Turunan",
            type: "quiz",
            narasi: "Integral adalah operasi kebalikan dari turunan. Jika F'(x) = f(x), maka ∫f(x)dx = F(x) + C, di mana C adalah konstanta integrasi.",
            pertanyaan: "Hasil dari ∫3x² dx adalah...",
            ilustrasi: null,
            pilihan: ["A. 6x + C", "B. x³ + C", "C. 3x³ + C", "D. x² + C"],
            jawaban: "B. x³ + C"
          },
          {
            id: 2,
            judul: "Integral Tertentu",
            type: "quiz",
            narasi: "Integral tertentu ∫ₐᵇ f(x)dx dihitung dengan substitusi batas atas (b) dan batas bawah (a) ke anti-turunan: [F(x)]ₐᵇ = F(b) - F(a).",
            pertanyaan: "Nilai dari ∫₀² 2x dx adalah...",
            ilustrasi: null,
            pilihan: ["A. 2", "B. 4", "C. 6", "D. 8"],
            jawaban: "B. 4"
          },
          {
            id: 3,
            judul: "Aplikasi Integral",
            type: "drag and drop",
            narasi: "Integral tertentu dapat digunakan untuk menghitung luas daerah di bawah kurva, volume benda putar, dan panjang busur kurva.",
            pertanyaan: "Pasangkan aplikasi integral dengan kegunaannya",
            ilustrasi: null,
            pilihan: ["Integral luas", "Integral volume", "Integral panjang busur"],
            jawaban: ["Luas daerah di bawah kurva", "Volume benda yang diputar", "Panjang kurva dalam interval"]
          }
        ]
      },
      {
        id: 204,
        bab: 4,
        judul: "Matriks",
        soal: [
          {
            id: 1,
            judul: "Pengertian Matriks",
            type: "quiz",
            narasi: "Matriks adalah susunan bilangan dalam baris dan kolom. Ordo matriks dinyatakan sebagai m×n, di mana m adalah jumlah baris dan n adalah jumlah kolom.",
            pertanyaan: "Matriks dengan 3 baris dan 2 kolom memiliki ordo...",
            ilustrasi: null,
            pilihan: ["A. 2×3", "B. 3×2", "C. 6×1", "D. 2×2"],
            jawaban: "B. 3×2"
          },
          {
            id: 2,
            judul: "Operasi Matriks",
            type: "drag and drop",
            narasi: "Matriks dapat dijumlah, dikurangi, dan dikali. Penjumlahan dan pengurangan hanya bisa dilakukan jika ordo sama. Perkalian A×B memerlukan kolom A = baris B.",
            pertanyaan: "Pasangkan operasi matriks dengan syaratnya",
            ilustrasi: null,
            pilihan: ["Penjumlahan A+B", "Perkalian A×B", "Transpose Aᵀ"],
            jawaban: ["Ordo A = Ordo B", "Kolom A = Baris B", "Baris jadi kolom, kolom jadi baris"]
          },
          {
            id: 3,
            judul: "Determinan dan Invers",
            type: "quiz",
            narasi: "Determinan matriks 2×2 [a b; c d] = ad - bc. Invers matriks A⁻¹ ada jika det(A) ≠ 0. Matriks dengan det = 0 disebut matriks singular.",
            pertanyaan: "Determinan matriks [2 3; 1 4] adalah...",
            ilustrasi: null,
            pilihan: ["A. 5", "B. 6", "C. 8", "D. 11"],
            jawaban: "A. 5"
          }
        ]
      },
      {
        id: 205,
        bab: 5,
        judul: "Barisan dan Deret",
        soal: [
          {
            id: 1,
            judul: "Barisan Aritmetika",
            type: "quiz",
            narasi: "Barisan aritmetika adalah barisan yang setiap dua suku berurutan memiliki selisih yang sama (beda = b). Rumus suku ke-n: Uₙ = a + (n-1)b, di mana a adalah suku pertama.",
            pertanyaan: "Barisan aritmetika: 3, 7, 11, 15, ... Suku ke-10 adalah...",
            ilustrasi: null,
            pilihan: ["A. 35", "B. 39", "C. 40", "D. 43"],
            jawaban: "B. 39"
          },
          {
            id: 2,
            judul: "Barisan Geometri",
            type: "quiz",
            narasi: "Barisan geometri adalah barisan yang setiap dua suku berurutan memiliki rasio yang sama (r). Rumus suku ke-n: Uₙ = a × rⁿ⁻¹.",
            pertanyaan: "Barisan geometri: 2, 6, 18, 54, ... Rasio barisannya adalah...",
            ilustrasi: null,
            pilihan: ["A. 2", "B. 3", "C. 4", "D. 6"],
            jawaban: "B. 3"
          },
          {
            id: 3,
            judul: "Deret dan Sigma",
            type: "drag and drop",
            narasi: "Deret adalah jumlah suku-suku barisan. Notasi sigma (Σ) digunakan untuk menyatakan jumlah deret secara ringkas.",
            pertanyaan: "Pasangkan jenis deret dengan rumus jumlahnya",
            ilustrasi: null,
            pilihan: ["Deret aritmetika", "Deret geometri terbatas", "Deret geometri tak terbatas (|r|<1)"],
            jawaban: ["Sₙ = n/2 × (2a + (n-1)b)", "Sₙ = a(rⁿ-1)/(r-1)", "S∞ = a/(1-r)"]
          }
        ]
      }
    ]
  }
]

export default data
