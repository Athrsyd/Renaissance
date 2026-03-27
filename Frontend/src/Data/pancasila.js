import B1B1 from '../assets/Ilustrasi_PKN/Babak1_1.png';
import B1B2 from '../assets/Ilustrasi_PKN/Babak1_2.png';
import B1B3 from '../assets/Ilustrasi_PKN/Babak1_3.png';
import B2B1 from '../assets/Ilustrasi_PKN/Babak2_1.png';
import B2B2 from '../assets/Ilustrasi_PKN/Babak2_2.png';
import B2B3 from '../assets/Ilustrasi_PKN/Babak2_3.png';
import B3B1 from '../assets/Ilustrasi_PKN/Babak3_1.png';
import B3B2 from '../assets/Ilustrasi_PKN/Babak3_2.png';
import B4B1 from '../assets/Ilustrasi_PKN/Babak4_1.png';
import B4B2 from '../assets/Ilustrasi_PKN/Babak4_2.png';
import B5B1 from '../assets/Ilustrasi_PKN/Babak5.png';
const data = [
    {
        id: 1,
        mapel: "Pendidikan Pancasila",
        modul: [
            {
                id: 1,
                bab: 1,
                judul: "Sejarah Perumusan Pancasila",
                soal: [
                    {
                        id: 1,
                        judul: 'Masa Praaksara',
                        type: 'drag and drop',
                        ilustrasi: B1B1,
                        narasi: "Sejak masa praaksara, masyarakat Nusantara sudah memiliki nilai-nilai yang mirip dengan Pancasila, seperti percaya kepada kekuatan Tuhan, saling membantu, dan hidup rukun dalam kelompok.",
                        pertanyaan: "Cocokin nilai dengan contoh perilaku",
                        pilihan: ['Berdoa kepada roh leluhur', 'Membantu berburu bersama', 'Hidup rukun dalam kelompok'],
                        jawaban: ['Ketuhanan', 'Kemanusiaan', 'Persatuan']
                    },
                    {
                        id: 2,
                        judul: 'Kerajaan Nusantara',
                        type: 'quiz',
                        ilustrasi: B1B2,
                        narasi: 'Pada masa kerajaan Nusantara, nilai persatuan dan kerja sama sudah terlihat dalam kehidupan masyarakat dan pemerintahan.',
                        pertanyaan: "Kerajaan yang terkenal dengan semboyan persatuan Bhinneka Tunggal Ika adalah...",
                        pilihan: ['A. Sriwijaya', 'B. Majapahit', 'C. Mataram'],
                        jawaban: 'B. Majapahit'
                    },
                    {
                        id: 3,
                        judul: 'Penjajahan dan kebangkitan Nasional',
                        type: 'TTS',
                        ilustrasi: B1B3,
                        narasi: 'Penjajahan membuat bangsa Indonesia sadar pentingnya persatuan untuk meraih kemerdekaan.',
                        pertanyaan: [
                            'Satu visi yang menyatukan seluruh bangsa Indonesia',
                            'Nilai yang mendorong kerja sama dalam masyarakat',
                            'Usaha yang dilakukan untuk mencapai tujuan bersama'
                        ],
                        pilihan: null,
                        jawaban: ['Merdeka', 'Persatuan', 'Perjuangan']
                    },
                ]
            },
            {
                id: 2,
                bab: 2,
                judul: "Kelahiran Pancasila dalam Sidang BPUPK",
                soal: [
                    {
                        id: 1,
                        judul: 'Pembentukan BPUPK',
                        type: 'quiz',
                        ilustrasi: B2B1,
                        narasi: "BPUPK dibentuk untuk mempersiapkan kemerdekaan Indonesia, termasuk merumuskan dasar negara.",
                        pertanyaan: "Tujuan BPUPK adalah...",
                        pilihan: ['A. Mempersiapkan kemerdekaan Indonesia', 'B. Membentuk tentara', 'C. Membuat kerajaan'],
                        jawaban: 'A. Mempersiapkan kemerdekaan Indonesia'
                    },
                    {
                        id: 2,
                        judul: 'Pidato 1 Juni 1945 ',
                        type: 'materi',
                        ilustrasi: B2B2,
                        narasi: 'Pada 1 Juni 1945, Ir. Soekarno menyampaikan pidato yang kemudian dikenal sebagai "Lahirnya Pancasila". Dalam pidatonya, Soekarno mengusulkan lima prinsip sebagai dasar negara Indonesia.',
                        pertanyaan: null,
                        pilihan: null,
                        jawaban: null
                    },
                    {
                        id: 3,
                        judul: 'Istilah Pancasila',
                        type: 'quiz',
                        ilustrasi: B2B3,
                        narasi: 'Dalam pidato tersebut, Soekarno menyebut istilah Pancasila yang berarti lima prinsip sebagai dasar negara Indonesia.',
                        pertanyaan:'Pancasila berasal dari Bahasa',
                        pilihan: ['A. Arab', 'B. Sanskerta', 'C. Belanda'],
                        jawaban: 'B. Sanskerta'
                    },
                ]
            },
            {
                id: 3,
                bab: 3,
                judul: "Proses Perumusan Pancasila",
                soal: [
                    {
                        id: 1,
                        judul: 'Panitia 9',
                        type: 'tarik benang',
                        ilustrasi: B3B1,
                        narasi: "Panitia Sembilan dibentuk untuk merumuskan dasar negara Indonesia.",
                        pertanyaan: "Mencocokan tokoh dengan perannya",
                        pilihan: ['Ir. Soekarno', 'Drs. Moh. Hatta', 'A.A. Maramis'],
                        jawaban: ['Ketua Panitia', 'Wakil Ketua', 'Anggota']
                    },
                    {
                        id: 2,
                        judul: 'Proses Perumusan Pancasila',
                        type: 'puzzle',
                        ilustrasi: B3B2,
                        narasi: 'Pada 22 Juni 1945, Panitia Sembilan menghasilkan rumusan dasar negara yang disebut Piagam Jakarta.',
                        pertanyaan: "Susus lah kata-kata berikut untuk membentuk kalimat yang benar:",
                        pilihan: ['pada', 'Piagam', '22 Juni', 'Jakarta', '1945', 'disusun'],
                        jawaban: ['Piagam', 'Jakarta', 'disusun', 'pada', '22 Juni', '1945']
                    }
                ]
            },
            {
                id: 4,
                bab: 4,
                judul: "Penetapan Pancasila sebagai dasar Negara",
                soal: [
                    {
                        id: 1,
                        judul: 'Penetapan PPKI',
                        type: 'timeline',
                        ilustrasi: B4B1,
                        narasi: "Setelah Indonesia merdeka, PPKI mengesahkan Pancasila sebagai dasar negara pada tanggal 18 Agustus 1945",
                        pertanyaan: "Susunlah peristiwa berikut dalam urutan yang benar:",
                        pilihan: ['1 Juni 1945','22 Juni 1945', '18 Agustus 1945'],
                        jawaban: ['Pidato Ir. Soekarno','Penyusunan Piagam Jakarta', 'Penetapan Pancasila sebagai dasar negara']
                    },
                    {
                        id: 2,
                        judul: 'Perubahan Sila Pertama',
                        type: 'isian',
                        ilustrasi: B4B2,
                        narasi: "Sila pertama dalam Piagam Jakarta diubah menjadi Ketuhanan Yang Maha Esa agar dapat diterima oleh seluruh rakyat Indonesia.5",
                        pertanyaan: "Bagaimana bunyi sila pertama dalam Piagam Jakarta?",
                        pilihan:    null,
                        jawaban:    'Ketuhanan dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya'
                    }
                ]
            },
            {
                id: 5,
                bab: 5,
                judul: "Meneladanni Pendiri Bangsa",
                soal: [
                    {
                        id: 1,
                        judul: 'Refleksi',
                        type: 'isian',
                        ilustrasi: B5B1,
                        narasi: "Para pendiri bangsa menunjukkan sikap saling menghargai, musyawarah, dan toleransi dalam merumuskan dasar negara.",
                        pertanyaan: "Jika kamu berada dalam rapat besar yang memiliki banyak perbedaan pendapat, sikap apa yang sebaiknya dilakukan?" ,
                        pilihan: null,
                        jawaban: null
                    },
                ]
            },
        ]
    }
]

export default data