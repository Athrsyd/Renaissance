/**
 * PlacementTest.jsx
 *
 * Alur setelah register:
 *   Step 1 — PilihKelas  : user memilih kelas (10–12), PUT /placement/kelas
 *   Step 2 — TesAwal     : soal HARDCODE dari placementSoal.js (5 soal/mapel)
 *                          • Tidak bisa mengulang soal
 *                          • Setelah selesai → hitung persentase benar akumulasi
 *                            0–50%   → starting_bab = 1
 *                            51–75%  → starting_bab = 2
 *                            76–100% → starting_bab = 3
 *                          • PUT /placement/starting-bab
 *   Step 3 — Selesai     : tampilkan hasil & tombol masuk Dashboard
 */

import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

// ── Sound effects ─────────────────────────────────────────────────────────────
import sfxBenar  from '../assets/sfx/benar.mp3'
import sfxSalah  from '../assets/sfx/salah.mp3'
import sfxMenang from '../assets/sfx/menang.mp3'
import {
  CheckCircle, Check, Clock, BookOpen,
  ChevronRight, ArrowLeft, Loader2,
} from 'lucide-react'
import { LogOut } from 'lucide-react'
import API from '../services/api'
import Logo from '../assets/Logo2.png'
import SearchIcon from '../assets/icon/searchIcon.svg'
import NotifIcon  from '../assets/icon/notifIcon.svg'
import RowBottom  from '../assets/icon/rowBottom.svg'
import HookAuth from '../Hook/HookAuth'

import QuizSoal       from '../components/ModulComponent/QuizSoal'
import DragDropSoal   from '../components/ModulComponent/DragDropSoal'
import TTSSoal        from '../components/ModulComponent/TTSSoal'
import IsianSoal      from '../components/ModulComponent/IsianSoal'
import TarikGarisSoal from '../components/ModulComponent/TarikGarisSoal'
import SambungKataSoal from '../components/ModulComponent/SambungKataSoal'

import PLACEMENT_SOAL from '../Data/placementSoal'

// ── Util: hitung starting_bab dari persentase benar ───────────────────────────
const hitungStartingBab = (benar, total) => {
  if (total === 0) return 1
  const pct = (benar / total) * 100
  if (pct <= 50)  return 1
  if (pct <= 75)  return 2
  return 3
}

// ── Kelas options ─────────────────────────────────────────────────────────────
const KELAS_LIST = [
  {
    kelas: 10, label: 'Kelas 10', jenjang: 'SMA / SMK',
    deskripsi: 'Bangun fondasi pengetahuan, kenali minatmu, dan mulai menemukan arah belajar untuk perjalanan di jenjang berikutnya.',
  },
  {
    kelas: 11, label: 'Kelas 11', jenjang: 'SMA / SMK',
    deskripsi: 'Perluasi wawasan, dan kembangkan kemampuanmu melalui pembelajaran yang lebih menantang.',
  },
  {
    kelas: 12, label: 'Kelas 12', jenjang: 'SMA / SMK',
    deskripsi: 'Matangkan kemampuan, persiapkan diri menghadapi tantangan, dan tentukan langkahmu menuju masa depan.',
  },
]

// ── RenderSoal ────────────────────────────────────────────────────────────────
const RenderSoal = ({ soal, onCorrect, onWrong, disabled }) => {
  const props = {
    soal,
    onCorrect: disabled ? () => {} : onCorrect,
    onWrong:   disabled ? () => {} : onWrong,
  }
  switch (soal.type) {
    case 'quiz':          return <QuizSoal       {...props} />
    case 'drag and drop':
    case 'timeline':      return <DragDropSoal   {...props} />
    case 'TTS':           return <TTSSoal         {...props} />
    case 'isian':         return <IsianSoal       {...props} />
    case 'tarik benang':  return <TarikGarisSoal  {...props} />
    case 'puzzle':        return <SambungKataSoal {...props} />
    case 'materi':
      return (
        <div className="flex flex-col gap-3 text-white">
          <h2 className="font-semibold text-lg text-center">{soal.judul}</h2>
          <p className="text-sm text-white/80 text-center">Baca narasi, lalu lanjutkan.</p>
          <button onClick={() => !disabled && onCorrect?.()} disabled={disabled}
            className="bg-coffe text-white py-2 px-6 w-full rounded-xl text-sm font-semibold mt-2 disabled:opacity-40">
            Lanjutkan
          </button>
        </div>
      )
    default:
      return (
        <div className="flex flex-col gap-3 text-white">
          <h2 className="font-semibold text-center">{soal.judul}</h2>
          <button onClick={() => !disabled && onCorrect?.()} disabled={disabled}
            className="bg-coffe text-white py-2 px-6 w-full rounded-xl text-sm font-semibold disabled:opacity-40">
            Lanjutkan
          </button>
        </div>
      )
  }
}

// ── StepSidebar ───────────────────────────────────────────────────────────────
const StepSidebar = ({ currentStep, selectedKelas }) => {
  const { handleLogout } = HookAuth()
  return (
    <aside className="w-60 shrink-0 fixed h-screen bg-bistre flex flex-col items-start pt-6 pb-8 px-5 gap-12 z-20">
      <div>
        <a href="/" className="hidden lg:flex items-center gap-2 text-white font-semibold mb-3">
          <img src={Logo} alt="logo" className="w-15 h-15 object-contain" />
          <h1 className="text-xl font-semibold font-jakarta">Renaissance</h1>
        </a>
        <div className="w-full h-0.5 rounded-full bg-khaki" />
      </div>

      {/* Step 1 */}
      <div className="flex items-start gap-3">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border-2
            ${currentStep >= 1 ? 'bg-khaki border-khaki text-bistre' : 'border-khaki/40 text-khaki/40'}`}>
          {currentStep > 1 ? <CheckCircle size={14} /> : '1'}
        </div>
        <div>
          <p className={`text-xs font-semibold ${currentStep >= 1 ? 'text-beige' : 'text-beige/40'}`}>Pilih Kelas</p>
          <p className="text-[10px] text-beige/50">Tentukan kelasmu saat ini</p>
        </div>
      </div>

      <div className="w-px h-16 -mb-8 bg-khaki/30 ml-3 -mt-14" />

      {/* Step 2 */}
      <div className="flex items-start gap-3 -mt-4">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border-2
            ${currentStep >= 2 ? 'bg-khaki border-khaki text-bistre' : 'border-khaki/40 text-khaki/40'}`}>
          {currentStep > 2 ? <CheckCircle size={14} /> : '2'}
        </div>
        <div>
          <p className={`text-xs font-semibold ${currentStep >= 2 ? 'text-beige' : 'text-beige/40'}`}>Tes Awal</p>
          <p className="text-[10px] text-beige/50">Uji kemampuan awalmu</p>
        </div>
      </div>

      <div className="w-px h-16 -mb-12 bg-khaki/30 ml-3 -mt-14" />
      <div className="bg-chamoisee py-2 w-full text-center font-semibold text-white px-6 rounded-xl">
        <h1>Dashboard</h1>
      </div>

      <div className="mt-auto rounded-xl p-3 w-full">
        {selectedKelas && (
          <>
            <div className="mt-auto bg-khaki/10 border border-khaki/20 rounded-xl p-3 w-full">
              <p className="text-[10px] text-beige/50 mb-1">Kelas dipilih</p>
              <p className="text-sm font-bold text-beige">Kelas {selectedKelas}</p>
            </div>
            <div className="hidden lg:block w-full h-px bg-khaki/40 my-3" />
          </>
        )}
        <button type="button" onClick={() => handleLogout()}
          className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl text-beige/80 hover:bg-khaki/60 hover:text-white transition duration-300 w-full">
          <LogOut size={20} strokeWidth={1.8} />
          <span className="text-sm font-medium">Keluar</span>
        </button>
      </div>
    </aside>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 1 — Pilih Kelas
// ─────────────────────────────────────────────────────────────────────────────
const PilihKelas = ({ onLanjut }) => {
  const [selected, setSelected]   = useState(null)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState('')

  const handleLanjut = async () => {
    if (!selected) return
    setLoading(true)
    setError('')
    try {
      const token = localStorage.getItem('tokenRenaissance')
      await API.put('/placement/kelas', { kelas: selected }, {
        headers: { Authorization: `Bearer ${token}` },
      })
      onLanjut(selected)
    } catch {
      setError('Gagal menyimpan kelas. Coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <div className="px-10 pt-10 pb-6">
        <h1 className="text-2xl font-bold text-bistre">Halo, Selamat Datang!</h1>
        <p className="text-bistre/60 text-sm mt-1">Sebelum mulai belajar, pilih kelasmu terlebih dahulu.</p>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      <div className="px-10 grid grid-cols-3 gap-4 flex-1">
        {KELAS_LIST.map((item) => (
          <button key={item.kelas} onClick={() => setSelected(item.kelas)}
            className={`relative flex flex-col items-center justify-center scale-95 h-100
              hover:scale-96 hover:shadow-2xl text-left p-6 rounded-2xl border-2 transition-all duration-300
              ${selected === item.kelas
                ? 'border-bistre bg-bistre/1 shadow-2xl scale-100'
                : 'border-beige bg-white hover:border-khaki'}`}
          >
            <div className="flex justify-center items-center text-center flex-col gap-1">
              <p className="text-3xl font-bold text-bistre">{item.label}</p>
              <p className="text-lg font-semibold text-chamoisee mb-3">{item.jenjang}</p>
              <p className="text-md text-black leading-relaxed">{item.deskripsi}</p>
            </div>
            <div className={`absolute -translate-x-1/2 -translate-y-1/2 top-85/100 left-1/2 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all
                ${selected === item.kelas ? 'border-bistre bg-bistre' : 'border-khaki bg-white'}`}>
              {selected === item.kelas && <Check size={22} className="text-white" />}
            </div>
          </button>
        ))}
      </div>

      <div className="px-10 py-6 flex justify-center">
        <button onClick={handleLanjut} disabled={!selected || loading}
          className="bg-bistre text-beige font-semibold py-3 px-16 rounded-xl hover:bg-bistre/90 disabled:opacity-40 transition-all flex items-center gap-2">
          {loading && <Loader2 size={16} className="animate-spin" />}
          Lanjutkan
        </button>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 2 — Tes Awal (hardcode, no-repeat, track benar/salah)
// ─────────────────────────────────────────────────────────────────────────────
const TesAwal = ({ kelas, onSelesai }) => {
  // Data mapel dari placementSoal.js
  const mapelList = PLACEMENT_SOAL[kelas] ?? []

  const [mapelIdx, setMapelIdx]           = useState(0)
  const [soalIdx, setSoalIdx]             = useState(0)
  const [showMapelIntro, setShowMapelIntro] = useState(true)
  const [isSoalCorrect, setIsSoalCorrect] = useState(false)
  const [soalSudahDijawab, setSoalSudahDijawab] = useState(new Set()) // set of "mapelIdx-soalIdx"
  const [totalBenar, setTotalBenar]       = useState(0)
  const [totalDijawab, setTotalDijawab]   = useState(0)
  const [searchQuery, setSearchQuery]     = useState('')
  const [submitting, setSubmitting]       = useState(false)
  const [timer, setTimer]                 = useState(0)
  const timerRef = useRef(null)

  // ── Sound effect helper ───────────────────────────────────────────────────
  const playSound = useCallback((src) => {
    try {
      const audio = new Audio(src)
      audio.volume = 0.6
      audio.play().catch(() => {})
    } catch {
      // silently ignore
    }
  }, [])

  const currentMapel      = mapelList[mapelIdx]
  const currentSoal       = currentMapel?.soal?.[soalIdx]
  const totalSoalMapel    = currentMapel?.soal?.length ?? 0
  const totalMapel        = mapelList.length
  const totalSoalGlobal   = mapelList.reduce((acc, m) => acc + m.soal.length, 0)

  const sudahDijawabKey   = `${mapelIdx}-${soalIdx}`
  const soalIniSudah      = soalSudahDijawab.has(sudahDijawabKey)

  const isLastSoal = mapelIdx === totalMapel - 1 && soalIdx === totalSoalMapel - 1

  // Hitung soal selesai sebelum mapel ini (untuk progress global)
  let soalSelesaiSebelumMapel = 0
  for (let i = 0; i < mapelIdx; i++) soalSelesaiSebelumMapel += mapelList[i].soal.length
  const soalGlobalSekarang = soalSelesaiSebelumMapel + soalIdx + 1
  const progressPersen = Math.round((soalSudahDijawab.size / totalSoalGlobal) * 100)

  useEffect(() => {
    timerRef.current = setInterval(() => setTimer(t => t + 1), 1000)
    return () => clearInterval(timerRef.current)
  }, [])

  const formatTime = s => {
    const m   = Math.floor(s / 60).toString().padStart(2, '0')
    const sec = (s % 60).toString().padStart(2, '0')
    return `${m}:${sec}`
  }

  // Ketika user jawab benar
  const handleCorrect = () => {
    if (soalIniSudah) return          // sudah dijawab, tidak bisa diulang
    playSound(sfxBenar)
    setIsSoalCorrect(true)
  }

  // Ketika user jawab salah
  const handleWrong = () => {
    if (soalIniSudah) return
    playSound(sfxSalah)
  }

  // Tombol Selanjutnya — tandai dijawab (benar), lanjut
  const handleSelanjutnya = async () => {
    if (soalIniSudah) return

    const newAnswered = new Set(soalSudahDijawab)
    newAnswered.add(sudahDijawabKey)
    setSoalSudahDijawab(newAnswered)
    setTotalDijawab(d => d + 1)
    if (isSoalCorrect) setTotalBenar(b => b + 1)
    setIsSoalCorrect(false)

    if (isLastSoal) {
      // Hitung final & kirim ke backend
      const finalBenar = isSoalCorrect ? totalBenar + 1 : totalBenar
      const finalTotal = totalSoalGlobal
      const startingBab = hitungStartingBab(finalBenar, finalTotal)

      setSubmitting(true)
      try {
        const token = localStorage.getItem('tokenRenaissance')
        await API.put('/placement/starting-bab', { starting_bab: startingBab }, {
          headers: { Authorization: `Bearer ${token}` },
        })
      } catch {
        // Gagal simpan — tetap lanjutkan ke selesai
      } finally {
        setSubmitting(false)
      }

      clearInterval(timerRef.current)
      playSound(sfxMenang)
      onSelesai({
        benar: finalBenar,
        total: finalTotal,
        startingBab,
      })
      return
    }

    // Pindah soal berikutnya
    if (soalIdx + 1 < totalSoalMapel) {
      setSoalIdx(soalIdx + 1)
    } else {
      // Pindah mapel berikutnya
      setMapelIdx(mapelIdx + 1)
      setSoalIdx(0)
      setShowMapelIntro(true)
    }
  }

  // Lewati soal (skip — tidak dijawab benar, tetap tandai sudah dikunjungi)
  // Tidak ada tombol skip — user HARUS jawab benar untuk lanjut
  // Kecuali jika soal sudah pernah dijawab (tidak bisa diulang)

  if (mapelList.length === 0) return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center text-bistre/60">
        <p>Tidak ada soal untuk kelas {kelas}.</p>
        <button onClick={() => onSelesai({ benar: 0, total: 0, startingBab: 1 })}
          className="mt-4 bg-bistre text-beige py-2 px-8 rounded-xl">
          Lanjut ke Dashboard
        </button>
      </div>
    </div>
  )

  // ── Intro per mapel ──────────────────────────────────────────────────────
  if (showMapelIntro && currentMapel) return (
    <div className="flex-1 flex flex-col items-center justify-center gap-6 px-10">
      <div className="bg-bistre/5 border-2 border-khaki/30 rounded-2xl px-16 py-10 text-center max-w-md">
        <p className="text-xs font-semibold text-chamoisee uppercase tracking-wider mb-2">
          Mapel {mapelIdx + 1} dari {totalMapel}
        </p>
        <h2 className="text-3xl font-bold text-bistre mb-1">{currentMapel.mapel}</h2>
        <p className="text-sm text-bistre/50 mb-6">
          {currentMapel.soal.length} soal • Jawab dengan teliti
        </p>
        <button onClick={() => setShowMapelIntro(false)}
          className="bg-bistre text-beige font-semibold py-2.5 px-12 rounded-xl hover:bg-bistre/90 transition-all">
          Mulai
        </button>
      </div>
    </div>
  )

  // ── Main quiz layout (identik screenshot) ────────────────────────────────
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[#FAF5F0]">

      {/* ── TOP NAVBAR ── */}
      <div className="flex flex-row items-center justify-between px-6 py-3 bg-[#FAF5F0] border-b border-beige/60">
        {/* Kembali — kembali ke mapel intro */}
        <button
          onClick={() => { setShowMapelIntro(true); setIsSoalCorrect(false) }}
          className="bg-bistre transition-all duration-300 hover:-translate-x-1 flex flex-row items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Kembali
        </button>

        {/* Search bar */}
        <div className="relative flex items-center">
          <img src={SearchIcon} alt="search" className="absolute left-3 w-4 h-4 opacity-50" />
          <input type="search" placeholder="Cari pelajaran..."
            className="bg-white border border-beige text-sm rounded-xl pl-9 pr-4 w-72 h-10 outline-none focus:border-khaki transition"
            value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </div>

        {/* Notif + Avatar */}
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-beige transition">
            <img src={NotifIcon} alt="notif" className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1">
            <div className="w-9 h-9 rounded-full bg-bistre flex items-center justify-center text-white text-sm font-bold">R</div>
            <img src={RowBottom} alt="dropdown" className="w-4 h-4 opacity-60" />
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── SOAL AREA ── */}
        <div className="flex-1 overflow-y-auto px-6 py-6 mr-72">
          <div className="bg-white rounded-2xl border border-beige shadow-sm p-6 max-w-2xl mx-auto">

            {/* Header: Soal X dari X + badge mapel */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-sm text-bistre/70 font-medium">
                Soal {soalIdx + 1} dari {totalSoalMapel}
              </span>
              <span className="bg-bistre/10 text-bistre text-xs font-semibold px-3 py-1 rounded-full">
                {currentMapel.mapel}
              </span>
            </div>

            {/* Narasi / pertanyaan */}
            {currentSoal?.narasi && (
              <div className="mb-5 text-bistre text-sm leading-relaxed text-justify">
                {typeof currentSoal.narasi === 'string' ? currentSoal.narasi : currentSoal.narasi?.teks}
                {currentSoal.narasi?.poin && (
                  <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
                    {currentSoal.narasi.poin.map((p, i) => (
                      <li key={i} className="text-bistre/80 text-sm">{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Ilustrasi */}
            {currentSoal?.ilustrasi && (
              <div className="mb-4 flex justify-center">
                <img src={currentSoal.ilustrasi} alt="ilustrasi"
                  className="max-h-40 object-contain rounded-xl" />
              </div>
            )}

            {/* Komponen soal — disabled jika sudah dijawab */}
            <div className="bg-bistre/80 border-2 border-coffe rounded-2xl p-5">
              {currentSoal ? (
                <RenderSoal
                  key={`${mapelIdx}-${soalIdx}`}
                  soal={currentSoal}
                  onCorrect={handleCorrect}
                  onWrong={handleWrong}
                  disabled={soalIniSudah}
                />
              ) : (
                <p className="text-white/50 text-center text-sm">Memuat soal...</p>
              )}
            </div>

            {/* Keterangan sudah dijawab */}
            {soalIniSudah && (
              <p className="text-center text-xs text-bistre/40 mt-3">
                Soal ini sudah dijawab dan tidak dapat diulang.
              </p>
            )}
          </div>
        </div>

        {/* ── PANEL KANAN FIXED ── */}
        <div className="fixed right-0 top-0 pt-16 w-72 h-screen border-l border-beige bg-white flex flex-col p-5 gap-4 overflow-y-auto z-10">

          {/* Daftar Soal */}
          <div>
            <p className="text-sm font-bold text-bistre mb-0.5">Daftar Soal</p>
            <p className="text-[11px] text-bistre/50 mb-3">Klik untuk berpindah soal</p>
            <div className="grid grid-cols-4 gap-2">
              {currentMapel?.soal.map((_, i) => {
                const key      = `${mapelIdx}-${i}`
                const isActive = i === soalIdx
                const isDone   = soalSudahDijawab.has(key)
                return (
                  <button key={i}
                    onClick={() => {
                      // Tidak bisa balik ke soal yang sudah dijawab
                      if (!isDone) { setSoalIdx(i); setIsSoalCorrect(false) }
                    }}
                    className={`w-12 h-12 rounded-full text-sm font-bold transition-all
                      ${isActive  ? 'bg-bistre text-beige'
                      : isDone    ? 'bg-bistre text-beige opacity-50 cursor-not-allowed'
                                  : 'bg-white text-bistre border-2 border-bistre'}`}
                  >
                    {i + 1}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[11px] text-bistre/70">
              <div className="w-3.5 h-3.5 rounded-full bg-bistre shrink-0" />
              Sudah Dijawab
            </div>
            <div className="flex items-center gap-2 text-[11px] text-bistre/70">
              <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-bistre shrink-0" />
              Belum Dijawab
            </div>
          </div>

          {/* Timer + Tips */}
          <div className="bg-[#FAF5F0] rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-8 h-8 rounded-full bg-white border border-beige flex items-center justify-center shrink-0">
                <Clock size={16} className="text-bistre" />
              </div>
              <div>
                <p className="text-[10px] text-bistre/50">Sisa Waktu</p>
                <p className="text-2xl font-bold text-bistre leading-none">{formatTime(timer)}</p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-beige/60">
              <p className="text-xs font-bold text-bistre mb-1">Tips Mengerjakan</p>
              <p className="text-[11px] text-bistre/60 leading-relaxed">
                Baca setiap pertanyaan dengan teliti dan pilih jawaban yang paling tepat.
              </p>
            </div>
          </div>

          {/* Progress global */}
          <div className="bg-[#FAF5F0] rounded-xl p-3">
            <p className="text-[10px] text-bistre/50 mb-1">Progress Keseluruhan</p>
            <p className="text-sm font-bold text-bistre">{soalSudahDijawab.size} / {totalSoalGlobal}</p>
            <div className="w-full h-1.5 bg-khaki/30 rounded-full mt-1.5 overflow-hidden">
              <div className="h-full bg-bistre rounded-full transition-all duration-500"
                style={{ width: `${progressPersen}%` }} />
            </div>
          </div>

          <div className="flex-1" />

          {/* Tombol Sebelumnya & Selanjutnya */}
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setShowMapelIntro(true)}
              className="flex-1 py-2.5 rounded-xl border border-bistre/30 text-bistre text-sm font-semibold hover:bg-beige transition"
            >
              Sebelumnya
            </button>
            <button
              onClick={handleSelanjutnya}
              disabled={(!isSoalCorrect && !soalIniSudah) || submitting}
              className="flex-1 py-2.5 rounded-xl bg-bistre text-beige text-sm font-semibold hover:bg-bistre/90 transition disabled:opacity-40 flex items-center justify-center gap-1"
            >
              {submitting && <Loader2 size={14} className="animate-spin" />}
              {isLastSoal ? 'Selesai' : 'Selanjutnya'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 3 — Selesai
// ─────────────────────────────────────────────────────────────────────────────
const Selesai = ({ kelas, result, onMasukDashboard }) => {
  const { benar, total, startingBab } = result ?? {}
  const pct = total > 0 ? Math.round((benar / total) * 100) : 0

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center max-w-sm flex flex-col items-center gap-5">
        <div className="w-20 h-20 rounded-full bg-bistre/10 flex items-center justify-center">
          <CheckCircle size={40} className="text-bistre" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-bistre">Tes Awal Selesai!</h2>
          <p className="text-bistre/60 text-sm mt-2 leading-relaxed">
            Selamat! Kamu menjawab benar <strong>{benar}</strong> dari{' '}
            <strong>{total}</strong> soal ({pct}%).
          </p>
        </div>

        {/* Hasil placement */}
        <div className="bg-bistre/5 border border-khaki/30 rounded-2xl px-8 py-5 w-full text-center">
          <p className="text-xs text-bistre/50 mb-1">Kamu akan memulai dari</p>
          <p className="text-3xl font-bold text-bistre">Bab {startingBab}</p>
          <p className="text-xs text-bistre/40 mt-1">
            {pct <= 50  ? 'Mulai dari dasar — build strong foundations!'
            : pct <= 75 ? 'Sudah bagus! Kamu siap melanjutkan ke tingkat berikutnya.'
                        : 'Keren! Kamu langsung masuk ke materi lanjutan.'}
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full items-center">
          <button onClick={onMasukDashboard}
            className="bg-bistre text-beige font-semibold py-3 px-12 rounded-xl hover:bg-bistre/90 transition-all flex items-center gap-2">
            Masuk Dashboard
            <ChevronRight size={16} />
          </button>
          <div className="flex items-center gap-2 text-xs text-bistre/40">
            <BookOpen size={12} />
            <span>Siap untuk belajar lebih banyak</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN — PlacementTest
// ─────────────────────────────────────────────────────────────────────────────
const PlacementTest = () => {
  const navigate = useNavigate()
  const [step, setStep]                   = useState(1)
  const [selectedKelas, setSelectedKelas] = useState(null)
  const [result, setResult]               = useState(null)

  const handleKelasLanjut   = (kelas) => { setSelectedKelas(kelas); setStep(2) }
  const handleTesSelesai    = (res)   => { setResult(res); setStep(3) }
  const handleMasukDashboard = ()     => navigate('/dashboard')

  return (
    <div className="min-h-screen flex bg-[#FAF5F0]">
      <StepSidebar currentStep={step} selectedKelas={selectedKelas} />

      <div className="container mr-6 w-4/5 mx-auto flex justify-center items-center">
        {step === 1 && <PilihKelas onLanjut={handleKelasLanjut} />}
        {step === 2 && selectedKelas && (
          <TesAwal kelas={selectedKelas} onSelesai={handleTesSelesai} />
        )}
        {step === 3 && (
          <Selesai kelas={selectedKelas} result={result} onMasukDashboard={handleMasukDashboard} />
        )}
      </div>
    </div>
  )
}

export default PlacementTest