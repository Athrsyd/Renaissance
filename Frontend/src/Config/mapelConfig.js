/**
 * mapelConfig.js — Single source of truth untuk semua mata pelajaran & jenjang kelas.
 *
 * Struktur entry:
 *   id          – unik global
 *   namaMapel   – nama tampilan
 *   slug        – URL path segment (null = belum aktif)
 *   kelas       – 10 | 11 | 12
 *   deskripsi   – teks deskripsi di landing page
 *   subTitle    – label jumlah bab
 *   mapelBackend– nama mapel persis seperti di database (kolom `mapel` di modul_belajars)
 *   progressKey – key di countTotalProgress() — format: "{namaBackend}-kelas{kelas}" lowercase
 *
 * URL pattern: /academy/kelas-{kelas}/{slug}
 * Tambah mapel/kelas baru → cukup tambah entry di sini.
 *
 * NOTE: dataFile dihapus — soal & modul kini diambil dari backend API:
 *   GET /api/v1/mapel/{mapel}/kelas/{kelas}/modules   → daftar modul
 *   GET /api/v1/modules/{modul_id}/soal               → soal per modul
 */

const MAPEL_LIST = [
  // ── KELAS 10 ────────────────────────────────────────────────────────────
  {
    id: 1, namaMapel: "Matematika Kelas 10", slug: "matematika", kelas: 10,
    deskripsi: "Eksponen, logaritma, fungsi kuadrat, trigonometri, statistika, dan peluang.",
    subTitle: "5 Bab",
    mapelBackend: "Matematika",
    progressKey: "matematika-kelas10",
  },
  {
    id: 2, namaMapel: "IPA Kelas 10", slug: "ipa", kelas: 10,
    deskripsi: "Hakikat sains, zat dan perubahannya, energi, bumi, dan makhluk hidup.",
    subTitle: "5 Bab",
    mapelBackend: "IPA",
    progressKey: "ipa-kelas10",
  },
  {
    id: 3, namaMapel: "IPS Kelas 10", slug: "ips", kelas: 10,
    deskripsi: "Geografi, keragaman budaya, sejarah awal, kehidupan sosial, dan ekonomi dasar.",
    subTitle: "5 Bab",
    mapelBackend: "IPS",
    progressKey: "ips-kelas10",
  },
  {
    id: 4, namaMapel: "Sejarah Kelas 10", slug: "sejarah", kelas: 10,
    deskripsi: "Konsep sejarah, peradaban dunia, kerajaan Hindu-Buddha, Islam, dan kolonialisme.",
    subTitle: "5 Bab",
    mapelBackend: "Sejarah",
    progressKey: "sejarah-kelas10",
  },
  {
    id: 5, namaMapel: "Sastra Kelas 10", slug: "bahasa-dan-sastra", kelas: 10,
    deskripsi: "Teks LHO, eksposisi, anekdot, puisi, dan negosiasi.",
    subTitle: "5 Bab",
    mapelBackend: "Bahasa dan Sastra",
    progressKey: "bahasa dan sastra-kelas10",
  },
  {
    id: 6, namaMapel: "PPKN Kelas 10", slug: "pendidikan-pancasila", kelas: 10,
    deskripsi: "Pancasila sebagai dasar negara, UUD 1945, bentuk negara, HAM, dan integrasi nasional.",
    subTitle: "5 Bab",
    mapelBackend: "Pendidikan Pancasila",
    progressKey: "pendidikan pancasila-kelas10",
  },

  // ── KELAS 11 ────────────────────────────────────────────────────────────
  {
    id: 7, namaMapel: "Matematika Kelas 11", slug: "matematika", kelas: 11,
    deskripsi: "Limit, turunan, integral, matriks, dan barisan-deret.",
    subTitle: "5 Bab",
    mapelBackend: "Matematika",
    progressKey: "matematika-kelas11",
  },
  {
    id: 8, namaMapel: "IPA Kelas 11", slug: "ipa", kelas: 11,
    deskripsi: "Sel, sistem gerak, peredaran darah, pencernaan, dan koordinasi.",
    subTitle: "5 Bab",
    mapelBackend: "IPA",
    progressKey: "ipa-kelas11",
  },
  {
    id: 9, namaMapel: "IPS Kelas 11", slug: "ips", kelas: 11,
    deskripsi: "Geografi Indonesia, kependudukan, pembangunan, globalisasi, dan perubahan sosial.",
    subTitle: "5 Bab",
    mapelBackend: "IPS",
    progressKey: "ips-kelas11",
  },
  {
    id: 10, namaMapel: "Sejarah Kelas 11", slug: "sejarah", kelas: 11,
    deskripsi: "Perang Dunia I & II, pergerakan nasional, proklamasi, dan Perang Dingin.",
    subTitle: "5 Bab",
    mapelBackend: "Sejarah",
    progressKey: "sejarah-kelas11",
  },
  {
    id: 11, namaMapel: "Sastra Kelas 11", slug: "bahasa-dan-sastra", kelas: 11,
    deskripsi: "Teks prosedur, ceramah, novel, drama, dan resensi buku.",
    subTitle: "5 Bab",
    mapelBackend: "Bahasa dan Sastra",
    progressKey: "bahasa dan sastra-kelas11",
  },
  {
    id: 12, namaMapel: "PPKN Kelas 11", slug: "pendidikan-pancasila", kelas: 11,
    deskripsi: "Sistem pemerintahan, pemilu, otonomi daerah, hukum, dan hubungan internasional.",
    subTitle: "5 Bab",
    mapelBackend: "Pendidikan Pancasila",
    progressKey: "pendidikan pancasila-kelas11",
  },

  // ── KELAS 12 ────────────────────────────────────────────────────────────
  {
    id: 13, namaMapel: "Matematika Kelas 12", slug: "matematika", kelas: 12,
    deskripsi: "Statistika lanjutan, kalkulus lanjutan, program linear, dan kombinatorika.",
    subTitle: "5 Bab",
    mapelBackend: "Matematika",
    progressKey: "matematika-kelas12",
  },
  {
    id: 14, namaMapel: "IPA Kelas 12", slug: "ipa", kelas: 12,
    deskripsi: "Genetika, evolusi, bioteknologi, fisika modern, dan kimia organik.",
    subTitle: "5 Bab",
    mapelBackend: "IPA",
    progressKey: "ipa-kelas12",
  },
  {
    id: 15, namaMapel: "IPS Kelas 12", slug: "ips", kelas: 12,
    deskripsi: "Ekonomi makro, pasar modal, kerjasama internasional, pembangunan berkelanjutan.",
    subTitle: "5 Bab",
    mapelBackend: "IPS",
    progressKey: "ips-kelas12",
  },
  {
    id: 16, namaMapel: "Sejarah Kelas 12", slug: "sejarah", kelas: 12,
    deskripsi: "Orde Lama, Orde Baru, Reformasi, sejarah Asia-Pasifik, dan sejarah kontemporer.",
    subTitle: "5 Bab",
    mapelBackend: "Sejarah",
    progressKey: "sejarah-kelas12",
  },
  {
    id: 17, namaMapel: "Sastra Kelas 12", slug: "bahasa-dan-sastra", kelas: 12,
    deskripsi: "Editorial, surat lamaran, karya ilmiah, angkatan sastra, dan artikel ilmiah populer.",
    subTitle: "5 Bab",
    mapelBackend: "Bahasa dan Sastra",
    progressKey: "bahasa dan sastra-kelas12",
  },
  {
    id: 18, namaMapel: "PPKN Kelas 12", slug: "pendidikan-pancasila", kelas: 12,
    deskripsi: "Ancaman NKRI, HAM, konstitusi, globalisasi & identitas nasional, keadilan sosial.",
    subTitle: "5 Bab",
    mapelBackend: "Pendidikan Pancasila",
    progressKey: "pendidikan pancasila-kelas12",
  },
]

export default MAPEL_LIST
