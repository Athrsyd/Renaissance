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
                        narasi: "Sejak masa praaksara, masyarakat Nusantara sudah memiliki nilai-nilai yang mirip dengan Pancasila, seperti percaya kepada kekuatan Tuhan, saling membantu, dan hidup rukun dalam kelompok.",
                        pertanyaan: "Cocokin nilai dengan contoh perilaku",
                        pilihan: ['Berdoa kepada roh leluhur', 'Membantu berburu bersama', 'Hidup rukun dalam kelompok'],
                        jawaban: ['Ketuhanan', 'Kemanusiaan', 'Persatuan']
                    },
                    {
                        id: 2,
                        judul: 'Kerajaan Nusantara',
                        type: 'quiz',
                        narasi: 'Pada masa kerajaan Nusantara, nilai persatuan dan kerja sama sudah terlihat dalam kehidupan masyarakat dan pemerintahan.',
                        pertanyaan: "Kerajaan yang terkenal dengan semboyan persatuan Bhinneka Tunggal Ika adalah...",
                        pilihan: ['A. Sriwijaya', 'B. Majapahit', 'C. Mataram'],
                        jawaban: 'B. Majapahit'
                    },
                    {
                        id: 3,
                        judul: 'Penjajahan dan kebangkitan Nasional',
                        type: 'TTS',
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
                        narasi: "BPUPK dibentuk untuk mempersiapkan kemerdekaan Indonesia, termasuk merumuskan dasar negara.",
                        pertanyaan: "Tujuan BPUPK adalah...",
                        pilihan: ['A. Mempersiapkan kemerdekaan Indonesia', 'B. Membentuk tentara', 'C. Membuat kerajaan'],
                        jawaban: 'A. Mempersiapkan kemerdekaan Indonesia'
                    },
                    {
                        id: 2,
                        judul: 'Pidato 1 Juni 1945 ',
                        type: 'materi',
                        narasi: null,
                        pertanyaan: null,
                        pilihan: null,
                        jawaban: null
                    },
                    {
                        id: 3,
                        judul: 'Istilah Pancasila',
                        type: 'quiz',
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
                        narasi: "Panitia Sembilan dibentuk untuk merumuskan dasar negara Indonesia.",
                        pertanyaan: "Mencocokan tokoh dengan perannya",
                        pilihan: ['Ir. Soekarno', 'Drs. Moh. Hatta', 'A.A. Maramis'],
                        jawaban: ['Ketua Panitia', 'Wakil Ketua', 'Anggota']
                    },
                    {
                        id: 2,
                        judul: 'Menyelesaikan Persamaan Aljabar',
                        type: 'puzzle',
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
                        narasi: "Setelah Indonesia merdeka, PPKI mengesahkan Pancasila sebagai dasar negara pada tanggal 18 Agustus 1945",
                        pertanyaan: "Susunlah peristiwa berikut dalam urutan yang benar:",
                        pilihan: ['1 Juni 1945','22 Juni 1945', '18 Agustus 1945'],
                        jawaban: ['Pidato Ir. Soekarno','Penyusunan Piagam Jakarta', 'Penetapan Pancasila sebagai dasar negara']
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
