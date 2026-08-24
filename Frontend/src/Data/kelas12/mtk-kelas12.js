const data = [
  {
    id: 1, mapel: "Matematika", kelas: 12,
    modul: [
      { id: 301, bab: 1, judul: "Statistika Lanjutan",
        soal: [
          { id: 1, judul: "Distribusi Normal", type: "quiz", narasi: "Distribusi normal adalah distribusi probabilitas simetris berbentuk lonceng dengan mean = median = modus. Sekitar 68% data berada dalam 1 standar deviasi dari mean.", pertanyaan: "Pada kurva normal, sekitar berapa persen data berada di antara µ-σ dan µ+σ?", ilustrasi: null, pilihan: ["A. 50%","B. 68%","C. 95%","D. 99%"], jawaban: "B. 68%" },
          { id: 2, judul: "Regresi Linear", type: "quiz", narasi: "Regresi linear adalah metode statistik untuk menentukan hubungan linier antara variabel bebas (x) dan variabel terikat (y). Persamaannya: ŷ = a + bx.", pertanyaan: "Dalam persamaan regresi ŷ = a + bx, huruf 'b' merupakan...", ilustrasi: null, pilihan: ["A. Konstanta","B. Intersep","C. Koefisien regresi/kemiringan","D. Nilai rata-rata"], jawaban: "C. Koefisien regresi/kemiringan" },
          { id: 3, judul: "Korelasi", type: "drag and drop", narasi: "Korelasi mengukur kekuatan dan arah hubungan antara dua variabel. Nilai koefisien korelasi (r) berkisar antara -1 hingga 1.", pertanyaan: "Pasangkan nilai korelasi dengan interpretasinya", ilustrasi: null, pilihan: ["r = 1","r = 0","r = -1"], jawaban: ["Korelasi positif sempurna","Tidak ada korelasi","Korelasi negatif sempurna"] }
        ]
      },
      { id: 302, bab: 2, judul: "Kalkulus Lanjutan",
        soal: [
          { id: 1, judul: "Integral Parsial", type: "quiz", narasi: "Integral parsial digunakan untuk menyelesaikan integral dari perkalian dua fungsi. Rumus: ∫u dv = uv - ∫v du. Pilih u yang mudah diturunkan dan dv yang mudah diintegralkan.", pertanyaan: "Metode integrasi yang digunakan untuk mengintegralkan perkalian dua fungsi adalah...", ilustrasi: null, pilihan: ["A. Substitusi","B. Parsial","C. Trigonometri","D. Numerik"], jawaban: "B. Parsial" },
          { id: 2, judul: "Volume Benda Putar", type: "quiz", narasi: "Volume benda putar terbentuk saat kurva y=f(x) diputar terhadap sumbu x. Dihitung dengan V = π ∫ₐᵇ [f(x)]² dx.", pertanyaan: "Rumus volume benda putar terhadap sumbu x menggunakan metode...", ilustrasi: null, pilihan: ["A. Prisma","B. Cakram (disk)","C. Kulit tabung","D. Irisan"], jawaban: "B. Cakram (disk)" },
          { id: 3, judul: "Persamaan Diferensial", type: "drag and drop", narasi: "Persamaan diferensial adalah persamaan yang memuat turunan dari suatu fungsi. Banyak digunakan dalam fisika, teknik, dan ekonomi.", pertanyaan: "Pasangkan jenis persamaan diferensial dengan contohnya", ilustrasi: null, pilihan: ["Orde satu","Orde dua","Linier"], jawaban: ["dy/dx = f(x)","d²y/dx² + y = 0","ay'' + by' + cy = f(x)"] }
        ]
      },
      { id: 303, bab: 3, judul: "Program Linear",
        soal: [
          { id: 1, judul: "Model Program Linear", type: "quiz", narasi: "Program linear adalah metode matematika untuk mengoptimalkan (memaksimalkan atau meminimalkan) fungsi tujuan linear dengan kendala-kendala yang juga bersifat linear.", pertanyaan: "Dalam program linear, fungsi yang ingin dioptimalkan disebut...", ilustrasi: null, pilihan: ["A. Fungsi kendala","B. Fungsi tujuan","C. Fungsi linear","D. Fungsi objektif parabola"], jawaban: "B. Fungsi tujuan" },
          { id: 2, judul: "Metode Grafik", type: "drag and drop", narasi: "Metode grafik digunakan untuk menyelesaikan program linear dua variabel. Daerah feasible adalah himpunan solusi yang memenuhi semua kendala.", pertanyaan: "Urutkan langkah penyelesaian program linear dengan metode grafik", ilustrasi: null, pilihan: ["Uji titik pojok","Gambar daerah feasible","Tentukan fungsi tujuan"], jawaban: ["Tentukan fungsi tujuan","Gambar daerah feasible","Uji titik pojok"] },
          { id: 3, judul: "Titik Optimal", type: "quiz", narasi: "Nilai optimal (maksimum/minimum) fungsi tujuan dalam program linear selalu terjadi di salah satu titik pojok (vertex) dari daerah feasible.", pertanyaan: "Nilai optimal program linear terdapat pada...", ilustrasi: null, pilihan: ["A. Sembarang titik","B. Titik tengah daerah feasible","C. Salah satu titik pojok daerah feasible","D. Titik asal (0,0)"], jawaban: "C. Salah satu titik pojok daerah feasible" }
        ]
      },
      { id: 304, bab: 4, judul: "Kombinatorika",
        soal: [
          { id: 1, judul: "Permutasi", type: "quiz", narasi: "Permutasi adalah susunan elemen-elemen dari suatu himpunan di mana urutan diperhatikan. Rumus: P(n,r) = n!/(n-r)!", pertanyaan: "Banyaknya cara menyusun 3 buku dari 5 buku berbeda (urutan penting) adalah...", ilustrasi: null, pilihan: ["A. 10","B. 20","C. 60","D. 120"], jawaban: "C. 60" },
          { id: 2, judul: "Kombinasi", type: "quiz", narasi: "Kombinasi adalah pemilihan elemen dari suatu himpunan di mana urutan TIDAK diperhatikan. Rumus: C(n,r) = n!/[r!(n-r)!]", pertanyaan: "Banyaknya cara memilih 3 orang dari 5 orang untuk satu tim (urutan tidak penting) adalah...", ilustrasi: null, pilihan: ["A. 6","B. 10","C. 20","D. 60"], jawaban: "B. 10" },
          { id: 3, judul: "Permutasi vs Kombinasi", type: "drag and drop", narasi: "Perbedaan kunci: permutasi memperhatikan urutan, kombinasi tidak. Menentukan mana yang digunakan tergantung konteks soal.", pertanyaan: "Klasifikasikan masalah berikut", ilustrasi: null, pilihan: ["Menyusun password 4 digit","Memilih 3 pemenang undian","Memilih delegasi dari 10 siswa"], jawaban: ["Permutasi","Kombinasi","Kombinasi"] }
        ]
      },
      { id: 305, bab: 5, judul: "Peluang Lanjutan",
        soal: [
          { id: 1, judul: "Peluang Bersyarat", type: "quiz", narasi: "Peluang bersyarat P(A|B) adalah peluang terjadinya kejadian A dengan syarat B sudah terjadi. Rumus: P(A|B) = P(A∩B)/P(B).", pertanyaan: "Notasi P(A|B) dibaca sebagai...", ilustrasi: null, pilihan: ["A. Peluang A dan B","B. Peluang A atau B","C. Peluang A jika B terjadi","D. Peluang B jika A terjadi"], jawaban: "C. Peluang A jika B terjadi" },
          { id: 2, judul: "Kejadian Bebas", type: "quiz", narasi: "Dua kejadian A dan B disebut bebas (independen) jika terjadinya A tidak mempengaruhi peluang terjadinya B. Syarat: P(A∩B) = P(A) × P(B).", pertanyaan: "Dua kejadian A dan B independen jika P(A∩B) = ...", ilustrasi: null, pilihan: ["A. P(A) + P(B)","B. P(A) × P(B)","C. P(A) - P(B)","D. P(A) / P(B)"], jawaban: "B. P(A) × P(B)" },
          { id: 3, judul: "Teorema Bayes", type: "drag and drop", narasi: "Teorema Bayes digunakan untuk memperbarui probabilitas suatu hipotesis berdasarkan bukti baru yang diperoleh. Sangat berguna dalam statistika inferensial.", pertanyaan: "Pasangkan konsep peluang dengan penggunaannya", ilustrasi: null, pilihan: ["Peluang bersyarat","Kejadian saling lepas","Komplemen kejadian"], jawaban: ["Satu kejadian bergantung pada kejadian lain","P(A∪B) = P(A)+P(B)","P(Aᶜ) = 1 - P(A)"] }
        ]
      }
    ]
  }
]
export default data
