/**
 * mapelConfig.js — Single source of truth untuk semua mata pelajaran.
 *
 * Untuk menambah mapel baru, cukup tambah entry baru ke array MAPEL_LIST.
 * Tidak perlu menyentuh Router, SubAcademy, Mapel, ProgressHook, atau
 * komponen lainnya.
 *
 * Field wajib:
 *   id          – unik, dipakai sebagai key & URL slug
 *   namaMapel   – nama tampilan (harus sama dengan field `mapel` di backend)
 *   slug        – URL path segment, tanpa spasi (contoh: "matematika")
 *   deskripsi   – teks deskripsi di landing page
 *   subTitle    – label jumlah bab di kartu academy
 *   dataFile    – () => import('../Data/namaFile') — lazy import data soal
 *   progressKey – key yang dikembalikan countTotalProgress() untuk mapel ini
 */
const MAPEL_LIST = [
  {
    id: 1,
    namaMapel: "Matematika",
    slug: "matematika",
    deskripsi:
      "Ilmu yang mempelajari angka, pola, dan logika untuk memahami cara kerja berbagai fenomena di dunia.",
    subTitle: "5 Bab",
    dataFile: () => import("../Data/modul.js"),
    progressKey: "matematika",
  },
  {
    id: 2,
    namaMapel: "Pendidikan Pancasila",
    slug: "pendidikan-pancasila",
    deskripsi:
      "Memahami nilai-nilai kebangsaan, hukum, serta peran setiap individu dalam membangun masyarakat yang adil dan harmonis.",
    subTitle: "5 Bab",
    dataFile: () => import("../Data/pancasila.js"),
    progressKey: "pendidikan pancasila",
  },
  // ── Mapel belum aktif (belum ada data soal) ──────────────────────────────
  {
    id: 3,
    namaMapel: "IPA",
    slug: null,
    deskripsi:
      "Mempelajari alam semesta melalui pengamatan dan eksperimen, mulai dari fisika, kimia, hingga biologi.",
    subTitle: "6 Bab",
    dataFile: null,
    progressKey: "ipa",
  },
  {
    id: 4,
    namaMapel: "IPS",
    slug: null,
    deskripsi:
      "Ilmu yang membahas kehidupan masyarakat, ekonomi, geografi, dan hubungan antar manusia dalam dunia sosial.",
    subTitle: "6 Bab",
    dataFile: null,
    progressKey: "ips",
  },
  {
    id: 5,
    namaMapel: "Sejarah",
    slug: null,
    deskripsi:
      "Mempelajari peristiwa masa lalu untuk memahami perkembangan peradaban manusia dan dampaknya pada masa kini.",
    subTitle: "6 Bab",
    dataFile: null,
    progressKey: "sejarah",
  },
  {
    id: 6,
    namaMapel: "Bahasa dan Sastra",
    slug: null,
    deskripsi:
      "Mengembangkan kemampuan berbahasa, memahami karya sastra, serta mengekspresikan ide dan perasaan melalui tulisan.",
    subTitle: "6 Bab",
    dataFile: null,
    progressKey: "bahasa dan sastra",
  },
];

export default MAPEL_LIST;
