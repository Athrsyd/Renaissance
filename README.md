<div align="center">

# 🏛️ Renaissance

**Platform Pembelajaran Interaktif untuk Siswa SMA/SMK**

*Learn · Play · Connect*

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?style=flat-square&logo=laravel)](https://laravel.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8-4479A1?style=flat-square&logo=mysql)](https://mysql.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[🌐 Live Demo](https://renaissance-tau.vercel.app/) · [📋 Proposal](docs/PROPOSAL_LOMBA_WEB_DEV_OSCAR_3_0_Renaissance.docx) · [🐛 Report Bug](../../issues)

</div>

---

## 📖 Tentang Renaissance

**Renaissance** adalah platform web pembelajaran interaktif yang lahir dari keprihatinan terhadap rendahnya fokus dan minat belajar siswa di era digital. Dibuat oleh tim siswa **SMK Negeri 26 Jakarta** untuk kompetisi **OSCAR 3.0 Web Development**, Renaissance mengubah kebiasaan belajar yang pasif dan monoton menjadi pengalaman yang **interaktif, visual, menyenangkan, dan kolaboratif**.

> *"Belajar tidak harus selalu dimulai dari buku dan berakhir pada nilai. Belajar dapat dimulai dari sebuah gambar, berkembang menjadi sebuah permainan, dilanjutkan dengan pertanyaan kepada AI, dan diperkuat melalui diskusi bersama teman."*

### Konsep: Learn → Play → Connect

| Tahap | Deskripsi |
|---|---|
| 📚 **Learn** | Pelajari materi lewat gambar, ilustrasi, dan visualisasi interaktif |
| 🎮 **Play** | Uji pemahaman lewat soal yang dikemas dalam bentuk permainan |
| 🤝 **Connect** | Diskusi & bertukar pengetahuan bersama teman di komunitas |

---

## ✨ Fitur Utama

### 🎯 Tes Kemampuan Awal (Placement Test)
Setelah memilih kelas (10, 11, atau 12), siswa mengikuti tes awal untuk mengukur kemampuan awal mereka. Hasil tes digunakan sebagai *baseline* untuk personalisasi pembelajaran.

### 📚 Pembelajaran Interaktif (6 Tipe Soal)
Materi dikemas dalam 6 jenis soal interaktif yang masing-masing melatih kemampuan berbeda:
- **Quiz** — pilihan ganda
- **Isian** — jawaban teks
- **TTS** (*Teka-Teki Silang*) — menyusun huruf
- **Drag & Drop / Timeline** — mengurutkan peristiwa
- **Puzzle (Sambung Kata)** — memasangkan konsep
- **Tarik Benang** — menghubungkan pasangan

### 🤖 AI Learning Assistant (Aureus)
Chatbot berbasis **Google Gemini** yang berfungsi sebagai pendamping belajar. Siswa dapat bertanya soal materi kapan saja dan mendapat penjelasan personal—bukan pengganti guru, melainkan teman belajar 24/7.

### 🏆 Leaderboard
Kompetisi sehat antar pengguna dalam 3 kategori:
- 🔥 **Streak Terpanjang** — siapa paling konsisten belajar tiap hari (global)
- 📈 **Progress** — peringkat ketuntasan materi per kelas
- ⚡ **XP Tertinggi** — siapa paling banyak mengumpulkan poin (global)

### 💬 Komunitas Belajar
Forum diskusi terintegrasi di mana siswa bisa membuat pertanyaan, menjawab, dan berbagi pengetahuan bersama teman sekelas maupun lintas kelas.

### 🔥 Sistem Streak & XP
- **Streak** bertambah setiap hari siswa aktif belajar, mendorong konsistensi
- **XP** didapat setiap menyelesaikan bab, dikalkulasi berdasarkan performa
- **Level** naik otomatis seiring akumulasi XP
- Waktu belajar dicatat per soal dan diakumulasi untuk statistik harian/mingguan

### 📊 Progress & Statistik
Halaman Progress menampilkan:
- Level & XP tracker
- Grafik waktu belajar 7 hari terakhir
- Progress ketuntasan modul per mapel
- Streak kalender
- Achievement badges

---

## 🛠️ Tech Stack

| Layer | Teknologi | Versi |
|---|---|---|
| **Frontend** | React + Vite | 18+ |
| **Styling** | Tailwind CSS | 3+ |
| **HTTP Client** | Axios | — |
| **Backend** | Laravel | 12 |
| **Auth** | Laravel Sanctum | — |
| **Database** | MySQL | 8+ |
| **AI Chatbot** | Google Gemini API | — |
| **Drag & Drop** | @dnd-kit | — |
| **Deploy Frontend** | Vercel | — |
| **Deploy Backend** | Laravel Cloud | — |

---

## 🗂️ Struktur Proyek

```
Renaissance/
├── Frontend/                   # React + Vite
│   ├── src/
│   │   ├── pages/              # Halaman utama
│   │   │   ├── LandingPage.jsx
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── AcademyPage.jsx
│   │   │   ├── ModulPage.jsx       # Daftar modul per mapel
│   │   │   ├── QuizPage.jsx        # Engine soal interaktif
│   │   │   ├── PlacementTest.jsx
│   │   │   ├── Progress.jsx
│   │   │   ├── LeaderboardPage.jsx
│   │   │   ├── ChatbotAureus.jsx
│   │   │   └── Community.jsx
│   │   ├── components/         # Komponen reusable
│   │   │   ├── ModulComponent/ # 6 tipe soal interaktif
│   │   │   │   ├── QuizSoal.jsx
│   │   │   │   ├── IsianSoal.jsx
│   │   │   │   ├── TTSSoal.jsx
│   │   │   │   ├── DragDropSoal.jsx
│   │   │   │   ├── SambungKataSoal.jsx
│   │   │   │   └── TarikGarisSoal.jsx
│   │   │   ├── NavDasboard.jsx
│   │   │   ├── PathTimeline.jsx
│   │   │   └── SubAcademy.jsx
│   │   ├── Hook/               # Custom React hooks
│   │   │   ├── HookAuth.jsx
│   │   │   ├── ProgressHook.jsx
│   │   │   ├── useXp.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── Config/
│   │   │   └── mapelConfig.js  # Konfigurasi 18 mapel × 3 kelas
│   │   ├── Context/
│   │   │   └── UserContext.jsx
│   │   ├── Router/
│   │   │   └── Router.jsx
│   │   └── services/
│   │       └── api.js          # Axios instance
│   └── package.json
│
└── Backend/                    # Laravel 12
    ├── app/
    │   ├── Http/Controllers/
    │   │   ├── AuthController.php
    │   │   ├── SoalController.php
    │   │   ├── UserModulProgressController.php
    │   │   ├── QuizTimeController.php
    │   │   ├── XpController.php
    │   │   ├── StreakController.php
    │   │   ├── LeaderboardController.php
    │   │   └── CommunityController.php
    │   ├── Models/
    │   │   ├── User.php
    │   │   ├── ModulBelajar.php
    │   │   ├── Soal.php
    │   │   ├── UserModulProgress.php
    │   │   ├── QuizTimeLog.php
    │   │   ├── UserStreak.php
    │   │   └── LeaderboardSnapshot.php
    │   └── Services/
    │       └── LeaderboardService.php
    ├── database/
    │   ├── migrations/
    │   └── seeders/
    │       ├── ModulBelajarSeeder.php
    │       ├── SoalSeeder.php
    │       └── LeaderboardUserSeeder.php  # 25 user demo
    └── routes/
        └── api.php
```

---

## 🚀 Cara Instalasi

### Prasyarat

Pastikan sudah terinstall:
- **PHP** >= 8.2
- **Composer** >= 2
- **Node.js** >= 18
- **MySQL** >= 8
- **Git**

---

### 1. Clone Repository

```bash
git clone https://github.com/<username>/Renaissance.git
cd Renaissance
```

---

### 2. Setup Backend (Laravel)

```bash
cd Backend

# Install dependencies
composer install

# Salin file environment
cp .env.example .env

# Generate application key
php artisan key:generate
```

Edit file `.env` dan sesuaikan konfigurasi database:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=renaissance
DB_USERNAME=root
DB_PASSWORD=your_password
```

```bash
# Jalankan migrasi dan seeder
php artisan migrate --seed

# Atau jika ingin fresh (hapus data lama):
php artisan migrate:fresh --seed

# Jalankan server backend
php artisan serve
# Backend berjalan di http://127.0.0.1:8000
```

> **Catatan:** Seeder akan membuat data modul, soal kelas 10–12, dan 25 user demo untuk leaderboard.

---

### 3. Setup Frontend (React)

```bash
cd ../Frontend

# Install dependencies
npm install

# Salin file environment
cp .env.example .env.local
```

Edit file `.env.local`:

```env
# URL Backend Laravel
VITE_API_URL=http://127.0.0.1:8000/api/v1

# Google Gemini API Key (untuk fitur AI Aureus)
# Dapatkan di: https://aistudio.google.com/app/apikey
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

```bash
# Jalankan development server
npm run dev
# Frontend berjalan di http://localhost:5173
```

---

### 4. Akses Aplikasi

Buka browser dan akses **http://localhost:5173**

Untuk testing, gunakan akun demo leaderboard (password: `password`):

| Kategori | Email | Kelas |
|---|---|---|
| Streak Warrior | `naresha@example.com` | 10 |
| Progress Champion | `kirana@example.com` | 10 |
| XP Hunter | `arya@example.com` | 10 |

Atau daftar akun baru melalui halaman Register.

---

## 🔌 API Endpoints

Semua endpoint memerlukan header `Authorization: Bearer {token}` kecuali auth.

### Auth
| Method | Endpoint | Deskripsi |
|---|---|---|
| `POST` | `/api/v1/auth/register` | Registrasi user baru |
| `POST` | `/api/v1/auth/login` | Login |
| `POST` | `/api/v1/auth/logout` | Logout |
| `GET` | `/api/v1/auth/profile` | Profil user aktif |

### Pembelajaran
| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/v1/mapel/{mapel}/kelas/{kelas}/modules` | Daftar modul per mapel & kelas |
| `GET` | `/api/v1/modules/{id}/soal` | Soal lengkap per modul |
| `GET` | `/api/v1/placement/status` | Status & hasil placement test |
| `POST` | `/api/v1/placement` | Submit jawaban placement test |

### Progress & Gamifikasi
| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/v1/progress` | Progress semua modul user |
| `PUT` | `/api/v1/progress/{modul_id}` | Update progress modul |
| `GET` | `/api/v1/quiz-time` | Statistik waktu belajar |
| `POST` | `/api/v1/quiz-time` | Simpan log waktu per soal (batch) |
| `GET` | `/api/v1/xp` | Data XP & level user |
| `POST` | `/api/v1/xp/tambah` | Tambah XP setelah selesai bab |
| `GET` | `/api/v1/streak` | Data streak user |

### Leaderboard
| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/v1/leaderboard/streak` | Top 10 streak + posisi user |
| `GET` | `/api/v1/leaderboard/progress` | Top 10 progress per kelas user |
| `GET` | `/api/v1/leaderboard/xp` | Top 10 XP global + posisi user |

### Komunitas
| Method | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/v1/community` | Daftar postingan komunitas |
| `POST` | `/api/v1/community` | Buat postingan baru |
| `POST` | `/api/v1/community/{id}/reply` | Balas postingan |

---

## 📐 Alur Pengguna

```
Landing Page
    ↓
Register / Login
    ↓
Pilih Kelas (10 / 11 / 12)
    ↓
Placement Test (tes kemampuan awal)
    ↓
Dashboard Utama
    ├── Academy → Pilih Mapel → Daftar Modul → Quiz Interaktif
    │                                               ↓
    │                                    Selesai Bab → XP & Progress Update
    │
    ├── AI Aureus (Chatbot Gemini)
    ├── Komunitas Belajar
    ├── Progress & Statistik
    └── Leaderboard (Streak / Progress / XP)
```

---

## 🗺️ Mata Pelajaran yang Tersedia

Renaissance mencakup **6 mata pelajaran × 3 kelas = 18 modul mapel**:

| Mata Pelajaran | Kelas 10 | Kelas 11 | Kelas 12 |
|---|:---:|:---:|:---:|
| Matematika | ✅ | ✅ | ✅ |
| IPA | ✅ | ✅ | ✅ |
| IPS | ✅ | ✅ | ✅ |
| Sejarah | ✅ | ✅ | ✅ |
| Bahasa & Sastra | ✅ | ✅ | ✅ |
| Pendidikan Pancasila | ✅ | ✅ | ✅ |

---

## 🏗️ Deployment

### Frontend → Vercel

```bash
cd Frontend
npm run build

# Push ke GitHub, lalu connect repo di vercel.com
# Set environment variables di Vercel dashboard:
#   VITE_API_URL=https://your-backend.laravel.cloud/api/v1
#   VITE_GEMINI_API_KEY=your_key
```

### Backend → Laravel Cloud

```bash
# Ikuti dokumentasi resmi: https://cloud.laravel.com/docs
# Pastikan environment variables sudah dikonfigurasi di dashboard Laravel Cloud
```

---

## 👥 Tim Pengembang

| Nama | Peran |
|---|---|
| **Alif Athaullah Rasyad** | Developer |
| **Khuzaefah Hauna** | Developer |
| **Lutfi Idham Puro** | Developer |
| **Nixon Valentino Cahyana** | Developer |

**Guru Pembimbing:** Kuri Asih, S.E., M.Kom.

**Institusi:** SMK Negeri 26 Jakarta
Jl. Balai Pustaka Baru I No.2, Rawamangun, Jakarta Timur 13220

---

## 🏆 Kompetisi

Proyek ini dibuat untuk **OSCAR 3.0 — Lomba Web Development** tahun 2026.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

<div align="center">

Dibuat dengan ❤️ oleh Tim Renaissance — SMKN 26 Jakarta

**[⬆ Kembali ke atas](#️-renaissance)**

</div>
