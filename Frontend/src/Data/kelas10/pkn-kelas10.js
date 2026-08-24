const data = [
  {
    id: 1,
    mapel: "Pendidikan Pancasila",
    kelas: 10,
    modul: [
      {
        id: 151,
        bab: 1,
        judul: "Pancasila sebagai Dasar Negara",
        soal: [
          {
            id: 1,
            judul: "Kedudukan Pancasila",
            type: "quiz",
            narasi: "Pancasila memiliki beberapa kedudukan dalam kehidupan berbangsa dan bernegara: sebagai dasar negara, pandangan hidup bangsa, ideologi nasional, dan kepribadian bangsa Indonesia.",
            pertanyaan: "Pancasila sebagai dasar negara berarti Pancasila menjadi...",
            ilustrasi: null,
            pilihan: ["A. Simbol negara", "B. Landasan penyelenggaraan negara", "C. Lambang persatuan", "D. Slogan pemerintah"],
            jawaban: "B. Landasan penyelenggaraan negara"
          },
          {
            id: 2,
            judul: "Lima Sila Pancasila",
            type: "drag and drop",
            narasi: "Pancasila terdiri dari lima sila yang merupakan satu kesatuan yang utuh dan tidak dapat dipisahkan. Setiap sila memiliki lambang yang mencerminkan maknanya.",
            pertanyaan: "Pasangkan sila Pancasila dengan lambangnya",
            ilustrasi: null,
            pilihan: ["Sila 1", "Sila 2", "Sila 3", "Sila 4", "Sila 5"],
            jawaban: ["Bintang", "Rantai", "Pohon Beringin", "Kepala Banteng", "Padi dan Kapas"]
          },
          {
            id: 3,
            judul: "Makna Setiap Sila",
            type: "TTS",
            narasi: "Setiap sila Pancasila mengandung nilai-nilai luhur yang menjadi pedoman kehidupan berbangsa.",
            pertanyaan: [
              "Sila pertama berhubungan dengan nilai ...",
              "Sila ketiga menekankan pentingnya ...",
              "Sila kelima berkaitan dengan nilai ..."
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Ketuhanan", "Persatuan", "Keadilan"]
          }
        ]
      },
      {
        id: 152,
        bab: 2,
        judul: "UUD NRI Tahun 1945",
        soal: [
          {
            id: 1,
            judul: "Sejarah UUD 1945",
            type: "quiz",
            narasi: "UUD 1945 disahkan oleh PPKI pada 18 Agustus 1945, sehari setelah Proklamasi Kemerdekaan. UUD 1945 telah mengalami 4 kali amandemen antara tahun 1999-2002.",
            pertanyaan: "UUD 1945 disahkan oleh PPKI pada tanggal...",
            ilustrasi: null,
            pilihan: ["A. 17 Agustus 1945", "B. 18 Agustus 1945", "C. 1 Juni 1945", "D. 22 Juni 1945"],
            jawaban: "B. 18 Agustus 1945"
          },
          {
            id: 2,
            judul: "Sistematika UUD 1945",
            type: "drag and drop",
            narasi: "UUD 1945 setelah amandemen terdiri dari Pembukaan, Batang Tubuh (21 bab, 73 pasal), dan Penjelasan yang telah dihapus karena sudah diintegrasikan ke dalam batang tubuh.",
            pertanyaan: "Pasangkan bagian UUD 1945 dengan isinya",
            ilustrasi: null,
            pilihan: ["Pembukaan", "Batang Tubuh", "Pasal 1 ayat 1"],
            jawaban: ["Tujuan negara & dasar negara", "Pasal-pasal pengaturan negara", "Indonesia adalah negara kesatuan berbentuk republik"]
          },
          {
            id: 3,
            judul: "Amandemen UUD 1945",
            type: "quiz",
            narasi: "UUD 1945 diamandemen sebanyak 4 kali (1999-2002) untuk menyesuaikan dengan perkembangan zaman dan memperkuat demokrasi. Amandemen dilakukan oleh MPR.",
            pertanyaan: "Amandemen UUD 1945 dilakukan sebanyak...",
            ilustrasi: null,
            pilihan: ["A. 2 kali", "B. 3 kali", "C. 4 kali", "D. 5 kali"],
            jawaban: "C. 4 kali"
          }
        ]
      },
      {
        id: 153,
        bab: 3,
        judul: "Bentuk dan Kedaulatan Negara",
        soal: [
          {
            id: 1,
            judul: "Bentuk Negara Indonesia",
            type: "quiz",
            narasi: "Berdasarkan Pasal 1 Ayat 1 UUD 1945, Indonesia adalah negara kesatuan yang berbentuk republik. Ini berarti kekuasaan tertinggi berada di pemerintah pusat, bukan di negara-negara bagian.",
            pertanyaan: "Indonesia menganut bentuk negara...",
            ilustrasi: null,
            pilihan: ["A. Federal", "B. Kesatuan", "C. Konfederasi", "D. Monarki"],
            jawaban: "B. Kesatuan"
          },
          {
            id: 2,
            judul: "Teori Kedaulatan",
            type: "drag and drop",
            narasi: "Kedaulatan adalah kekuasaan tertinggi yang dimiliki suatu negara. Ada beberapa teori tentang asal-usul kedaulatan: Tuhan, raja, negara, hukum, dan rakyat.",
            pertanyaan: "Pasangkan teori kedaulatan dengan tokohnya",
            ilustrasi: null,
            pilihan: ["Kedaulatan Rakyat", "Kedaulatan Hukum", "Kedaulatan Negara"],
            jawaban: ["John Locke & Rousseau", "Hugo de Groot & Hans Kelsen", "George Jellinek & Hegel"]
          },
          {
            id: 3,
            judul: "Demokrasi Pancasila",
            type: "quiz",
            narasi: "Indonesia menganut demokrasi Pancasila yang berlandaskan pada nilai-nilai Pancasila. Ciri khasnya adalah musyawarah mufakat dan gotong royong dalam pengambilan keputusan.",
            pertanyaan: "Ciri khas demokrasi Pancasila adalah...",
            ilustrasi: null,
            pilihan: ["A. Voting selalu diutamakan", "B. Musyawarah mufakat", "C. Keputusan oleh pemimpin saja", "D. Aturan mayoritas mutlak"],
            jawaban: "B. Musyawarah mufakat"
          }
        ]
      },
      {
        id: 154,
        bab: 4,
        judul: "Hak dan Kewajiban Warga Negara",
        soal: [
          {
            id: 1,
            judul: "Hak Warga Negara",
            type: "drag and drop",
            narasi: "Hak warga negara adalah segala sesuatu yang harus diterima warga negara dari negara. Hak-hak ini dijamin dalam UUD 1945 dan berbagai peraturan perundang-undangan.",
            pertanyaan: "Klasifikasikan hak-hak berikut",
            ilustrasi: null,
            pilihan: ["Hak mendapat pendidikan", "Hak memilih dalam pemilu", "Hak atas pekerjaan yang layak"],
            jawaban: ["Hak sosial-budaya", "Hak politik", "Hak ekonomi"]
          },
          {
            id: 2,
            judul: "Kewajiban Warga Negara",
            type: "quiz",
            narasi: "Setiap warga negara memiliki kewajiban yang harus dipenuhi. Kewajiban merupakan sesuatu yang harus dilakukan warga negara demi kepentingan negara dan masyarakat.",
            pertanyaan: "Manakah yang merupakan kewajiban warga negara Indonesia?",
            ilustrasi: null,
            pilihan: ["A. Menerima bantuan sosial", "B. Membayar pajak", "C. Mendapat jaminan kesehatan", "D. Mendapat perlindungan hukum"],
            jawaban: "B. Membayar pajak"
          },
          {
            id: 3,
            judul: "Keseimbangan Hak dan Kewajiban",
            type: "TTS",
            narasi: "Hak dan kewajiban harus berjalan beriringan. Menuntut hak tanpa memenuhi kewajiban akan menimbulkan ketidakseimbangan dalam kehidupan bermasyarakat.",
            pertanyaan: [
              "Dokumen yang menjamin hak-hak warga negara disebut ...",
              "Lembaga yang berwenang menguji undang-undang terhadap UUD disebut ...",
              "Hak yang tidak dapat dikurangi dalam keadaan apapun disebut hak ..."
            ],
            ilustrasi: null,
            pilihan: null,
            jawaban: ["Konstitusi", "Mahkamah Konstitusi", "Asasi"]
          }
        ]
      },
      {
        id: 155,
        bab: 5,
        judul: "Integrasi Nasional",
        soal: [
          {
            id: 1,
            judul: "Pengertian Integrasi Nasional",
            type: "quiz",
            narasi: "Integrasi nasional adalah proses penyatuan berbagai perbedaan yang ada di masyarakat menjadi satu kesatuan yang utuh dan harmonis demi mewujudkan tujuan nasional.",
            pertanyaan: "Integrasi nasional bertujuan untuk...",
            ilustrasi: null,
            pilihan: ["A. Menghilangkan perbedaan", "B. Menyatukan keberagaman demi persatuan", "C. Memenangkan suku mayoritas", "D. Menghapus budaya lokal"],
            jawaban: "B. Menyatukan keberagaman demi persatuan"
          },
          {
            id: 2,
            judul: "Faktor Pembentuk Integrasi",
            type: "drag and drop",
            narasi: "Integrasi nasional terbentuk karena berbagai faktor internal dan eksternal yang mendorong masyarakat untuk bersatu.",
            pertanyaan: "Klasifikasikan faktor-faktor berikut",
            ilustrasi: null,
            pilihan: ["Rasa senasib sepenanggungan", "Ancaman dari luar negeri", "Semangat Sumpah Pemuda"],
            jawaban: ["Faktor internal", "Faktor eksternal", "Faktor internal"]
          },
          {
            id: 3,
            judul: "Ancaman terhadap Integrasi",
            type: "quiz",
            narasi: "Integrasi nasional dapat terancam oleh berbagai faktor seperti separatisme, konflik SARA, kemiskinan, dan ketidakadilan. Kesadaran akan pentingnya persatuan menjadi kunci menghadapinya.",
            pertanyaan: "Gerakan yang berusaha memisahkan diri dari NKRI disebut gerakan...",
            ilustrasi: null,
            pilihan: ["A. Nasionalisme", "B. Federalisme", "C. Separatisme", "D. Liberalisme"],
            jawaban: "C. Separatisme"
          }
        ]
      }
    ]
  }
]

export default data
