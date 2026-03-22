const data = [
    {
        id: 1,
        mapel: "Matematika",
        modul: [
            {
                id: 1,
                bab: 1,
                judul: "Bangun Ruang",
                soal: [
                    {
                        id: 1,
                        judul: 'Bangun Ruang di Sekitar Kita',
                        type: 'drag and drop',
                        narasi: "Bangun ruang adalah bangun tiga dimensi yang memiliki panjang, lebar, dan tinggi. Banyak benda di sekitar kita yang memiliki bentuk bangun ruang.",
                        pertanyaan: "Manakah dari gambar berikut yang merupakan bangun ruang?",
                        ilustrasi: null,
                        pilihan: ['dadu', 'bola sepak', 'Kotak hadiah', 'kaleng minuman'],
                        jawaban: ['kubus', 'bola', 'balok', 'tabung']
                    },
                    {
                        id: 2,
                        judul: 'Jenis Bangun Ruang',
                        type: 'quiz',
                        narasi: null,
                        pertanyaan: "Bangun ruang yang memiliki 6 sisi sama besar adalah...",
                        ilustrasi: null,
                        pilihan: ['A. Balok', 'B. Kubus', 'C. Tabung'],
                        jawaban: 'B. Kubus'
                    },
                    {
                        id: 3,
                        judul: 'Unsur Bangun Ruang',
                        type: 'TTS',
                        narasi: 'Bangun ruang memiliki unsur seperti sisi, rusuk, dan titik sudut. Memahami unsur-unsur ini akan membantu kita mengenali dan membedakan setiap bangun ruang.',
                        pertanyaan: [
                            'Bangun ruang yang memiliki 6 sisi sama besar',
                            'Garis pertemuan antara dua sisi pada bangun ruang',
                            'Permukaan yang membatasi bangun ruang'
                        ],
                        ilustrasi: null,
                        pilihan: null,
                        jawaban: ['Kubus', 'Rusuk', 'Sisi']
                    },
                ]
            },
            {
                id: 2,
                bab: 2,
                judul: "Teorema Pythagoras",
                soal: [
                    {
                        id: 1,
                        judul: 'Segitiga Siku-Siku',
                        type: 'quiz',
                        narasi: "Teorema Pythagoras digunakan untuk menghitung panjang sisi pada segitiga siku-siku.",
                        pertanyaan: "Rumus Teorema Pythagoras adalah?",
                        ilustrasi: null,
                        pilihan: ['A. a + b = c', 'B. a² + b² = c²', 'C. a² - b² = c²'],
                        jawaban: 'B. a² + b² = c²'
                    },
                    {
                        id: 2,
                        judul: 'Contoh Perhitungan',
                        type: 'quiz',
                        narasi: 'Jika dua sisi segitiga diketahui, kita dapat mencari sisi miring menggunakan rumus Pythagoras.',
                        pertanyaan: "Jika sisi depan segitiga siku-siku adalah 3 cm dan salah satu sisi lainnya adalah 4 cm, berapa panjang sisi miring?",
                        ilustrasi: null,
                        pilihan: ['A. 5 cm', 'B. 12 cm', 'C. 16 cm'],
                        jawaban: 'A. 5 cm'
                    },
                    {
                        id: 3,
                        judul: 'Penerapan Teorema Pythagoras',
                        type: 'quiz',
                        narasi: 'Teorema Pythagoras sering digunakan untuk menghitung jarak atau panjang benda dalam kehidupan sehari-hari.',
                        pertanyaan:'Jika a = 5 b = 12 Berapa nilai c? ',
                        ilustrasi: null,
                        pilihan: ['A. 13', 'B. 17', 'C. 15'],
                        jawaban: 'A. 13'
                    },
                ]
            },
            {
                id: 3,
                bab: 3,
                judul: "Mengenal Aljabar",
                soal: [
                    {
                        id: 1,
                        judul: 'Apa itu Aljabar?',
                        type: 'tarik benang',
                        narasi: "Aljabar adalah cabang matematika yang menggunakan huruf atau simbol untuk mewakili angka yang belum diketahui",
                        pertanyaan: "Cocokkan istilah dengan artinya",
                        ilustrasi: null,
                        pilihan: ['x', '5', 'x + 2'],
                        jawaban: ['Variabel', 'Konstanta', 'bentuk Aljabar']
                    },
                    {
                        id: 2,
                        judul: 'Menyelesaikan Persamaan Aljabar',
                        type: 'quiz',
                        narasi: 'Untuk mencari nilai x, kita harus memindahkan angka ke sisi lain dengan operasi yang berlawanan.',
                        // pertanyaan: "Jika sisi depan segitiga siku-siku adalah 3 cm dan salah satu sisi lainnya adalah 4 cm, berapa panjang sisi miring?",
                        ilustrasi: null,
                        // pilihan: ['A. 5 cm', 'B. 12 cm', 'C. 16 cm'],
                        // jawaban: 'A. 5 cm'
                    }
                ]
            },
            {
                id: 4,
                bab: 4,
                judul: "Operasi Aljabar",
                soal: [
                    {
                        id: 1,
                        judul: 'Penjumlahan Aljabar?',
                        type: 'isian',
                        narasi: "Suku yang memiliki variabel sama dapat dijumlahkan atau dikurangkan.",
                        pertanyaan: "3x + 4x = ?",
                        ilustrasi: null,
                        pilihan: null,
                        jawaban: '7x'
                    },
                    {
                        id: 2,
                        judul: 'Perkalian Aljabar',
                        type: 'quiz',
                        narasi: 'Perkalian aljabar dapat dilakukan dengan mendistribusikan angka ke dalam tanda kurung.',
                        pertanyaan: "Hasil dari 3(x + 2) =",
                        pilihan: ['A. 3x + 2', 'B. 3x + 6', 'C. x + 6'],
                        jawaban: 'B. 3x + 6'
                    }
                ]
            },
            {
                id: 5,
                bab: 5,
                judul: "Matematika dalam Kehidupan Sehari-hari",
                soal: [
                    {
                        id: 1,
                        judul: 'Refleksi',
                        type: 'isian',
                        narasi: "Matematika membantu kita memahami bentuk, menghitung jarak, dan memecahkan berbagai masalah dalam kehidupan sehari-hari.",
                        pertanyaan: "Jika kamu menemukan soal matematika yang sulit, apa yang sebaiknya kamu lakukan?",
                        ilustrasi: null,
                        pilihan: null,
                        jawaban: null
                    },
                ]
            },
        ]
    }
]

export default data;