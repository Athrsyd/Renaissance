/**
 * PlacementTest.jsx
 *
 * Alur setelah register:
 *   Step 1 — PilihKelas   : user memilih kelas (7–12), lalu klik Lanjutkan
 *                           → PUT /placement/kelas dipanggil untuk simpan ke DB
 *   Step 2 — TesAwal      : soal dari semua mapel, maks 3 bab per mapel
 *                           → GET /placement/soal?kelas={kelas}
 *   Step 3 — Selesai       : ringkasan & tombol masuk Dashboard
 *
 * Komponen soal di-reuse dari ModulComponent (QuizSoal, DragDropSoal, dll.)
 * persis seperti yang dipakai di ModulPage, sehingga tidak ada duplikasi logika.
 */

import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, Clock, BookOpen, ChevronRight, Loader2 } from 'lucide-react'
import API from '../services/api'
import Logo from '../assets/Logo2.png'

// ── Soal components (reuse) ──────────────────────────────────────────────────
import QuizSoal from '../components/ModulComponent/QuizSoal'
import DragDropSoal from '../components/ModulComponent/DragDropSoal'
import TTSSoal from '../components/ModulComponent/TTSSoal'
import IsianSoal from '../components/ModulComponent/IsianSoal'
import TarikGarisSoal from '../components/ModulComponent/TarikGarisSoal'
import SambungKataSoal from '../components/ModulComponent/SambungKataSoal'

// ── Kelas options ─────────────────────────────────────────────────────────────
const KELAS_LIST = [
  {
    kelas: 7,
    label: 'Kelas 7',
    jenjang: 'SMP',
    deskripsi: 'Membangun fondasi pengetahuan dan memahami konsep dasar untuk memulai perjalanan belajar.',
  },
  {
    kelas: 8,
    label: 'Kelas 8',
    jenjang: 'SMP',
    deskripsi: 'Perdalam pemahamanmu, eksplorasi konsep yang lebih kompleks, dan kembangkan cara berpikir yang semakin kritis.',
  },
  {
    kelas: 9,
    label: 'Kelas 9',
    jenjang: 'SMP',
    deskripsi: 'Asah kemampuan, dan persiapkan diri menghadapi tantangan menuju jenjang pendidikan berikutnya.',
  },
  {
    kelas: 10,
    label: 'Kelas 10',
    jenjang: 'SMA / SMK',
    deskripsi: 'Bangun fondasi pengetahuan, kenali minatmu, dan mulai menemukan arah belajar untuk perjalanan di jenjang berikutnya.',
  },
  {
    kelas: 11,
    label: 'Kelas 11',
    jenjang: 'SMA / SMK',
    deskripsi: 'Perluasi wawasan, dan kembangkan kemampuanmu melalui pembelajaran yang lebih menantang.',
  },
  {
    kelas: 12,
    label: 'Kelas 12',
    jenjang: 'SMA / SMK',
    deskripsi: 'Matangkan kemampuan, persiapkan diri menghadapi tantangan, dan tentukan langkahmu menuju masa depan.',
  },
]

// ── RenderSoal — mapping type → komponen ──────────────────────────────────────
const RenderSoal = ({ soal, onCorrect }) => {
  switch (soal.type) {
    case 'quiz':
      return <QuizSoal soal={soal} onCorrect={onCorrect} />
    case 'drag and drop':
    case 'timeline':
      return <DragDropSoal soal={soal} onCorrect={onCorrect} />
    case 'TTS':
      return <TTSSoal soal={soal} onCorrect={onCorrect} />
    case 'isian':
      return <IsianSoal soal={soal} onCorrect={onCorrect} />
    case 'tarik benang':
      return <TarikGarisSoal soal={soal} onCorrect={onCorrect} />
    case 'puzzle':
      return <SambungKataSoal soal={soal} onCorrect={onCorrect} />
    case 'materi':
      // Soal materi: langsung bisa lanjut (tidak perlu interaksi)
      return (
        <div className="flex flex-col gap-3 text-white">
          <h2 className="font-semibold text-lg text-center">{soal.judul}</h2>
          <p className="text-sm text-white/80 text-center">
            Baca narasi di panel kiri, lalu lanjutkan.
          </p>
          <button
            onClick={() => onCorrect?.()}
            className="bg-coffe text-white py-2 px-6 w-full rounded-xl text-sm font-semibold mt-2"
          >
            Lanjutkan
          </button>
        </div>
      )
    default:
      return (
        <div className="flex flex-col gap-3 text-white">
          <h2 className="font-semibold text-center">{soal.judul}</h2>
          <button
            onClick={() => onCorrect?.()}
            className="bg-coffe text-white py-2 px-6 w-full rounded-xl text-sm font-semibold"
          >
            Lanjutkan
          </button>
        </div>
      )
  }
}

// ── Sidebar step indicator ────────────────────────────────────────────────────
const StepSidebar = ({ currentStep, selectedKelas }) => (
  <aside className="w-44 shrink-0 bg-bistre flex flex-col items-start pt-10 pb-8 px-5 gap-8">
    <img src={Logo} alt="Renaissance" className="w-10 mb-2" />

    {/* Step 1 */}
    <div className="flex items-start gap-3">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border-2
          ${currentStep >= 1 ? 'bg-khaki border-khaki text-bistre' : 'border-khaki/40 text-khaki/40'}`}
      >
        {currentStep > 1 ? <CheckCircle size={14} /> : '1'}
      </div>
      <div>
        <p className={`text-xs font-semibold ${currentStep >= 1 ? 'text-beige' : 'text-beige/40'}`}>
          Pilih Kelas
        </p>
        <p className="text-[10px] text-beige/50">Tentukan kelasmu saat ini</p>
      </div>
    </div>

    {/* Connector */}
    <div className="w-px h-5 bg-khaki/30 ml-3 -mt-5" />

    {/* Step 2 */}
    <div className="flex items-start gap-3 -mt-4">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 border-2
          ${currentStep >= 2 ? 'bg-khaki border-khaki text-bistre' : 'border-khaki/40 text-khaki/40'}`}
      >
        {currentStep > 2 ? <CheckCircle size={14} /> : '2'}
      </div>
      <div>
        <p className={`text-xs font-semibold ${currentStep >= 2 ? 'text-beige' : 'text-beige/40'}`}>
          Tes Awal
        </p>
        <p className="text-[10px] text-beige/50">Uji kemampuan awalmu</p>
      </div>
    </div>

    {/* Bottom info */}
    {selectedKelas && (
      <div className="mt-auto bg-khaki/10 border border-khaki/20 rounded-xl p-3 w-full">
        <p className="text-[10px] text-beige/50 mb-1">Kelas dipilih</p>
        <p className="text-sm font-bold text-beige">Kelas {selectedKelas}</p>
      </div>
    )}
  </aside>
)

// ─────────────────────────────────────────────────────────────────────────────
// STEP 1 — Pilih Kelas
// ─────────────────────────────────────────────────────────────────────────────
const PilihKelas = ({ onLanjut }) => {
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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
      {/* Header */}
      <div className="px-10 pt-10 pb-6">
        <h1 className="text-2xl font-bold text-bistre">
          Halo, Selamat Datang!
        </h1>
        <p className="text-bistre/60 text-sm mt-1">
          Sebelum mulai belajar, pilih kelasmu terlebih dahulu.
        </p>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      {/* Kelas grid */}
      <div className="px-10 grid grid-cols-3 gap-4 flex-1">
        {KELAS_LIST.map((item) => (
          <button
            key={item.kelas}
            onClick={() => setSelected(item.kelas)}
            className={`
              relative flex flex-col items-start text-left p-6 rounded-2xl border-2 transition-all
              ${selected === item.kelas
                ? 'border-bistre bg-bistre/5'
                : 'border-beige bg-white hover:border-khaki'
              }
            `}
          >
            <p className="text-lg font-bold text-bistre">{item.label}</p>
            <p className="text-xs font-semibold text-chamoisee mb-3">{item.jenjang}</p>
            <p className="text-xs text-bistre/60 leading-relaxed">{item.deskripsi}</p>

            {/* Radio circle */}
            <div className={`
              absolute bottom-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
              ${selected === item.kelas
                ? 'border-bistre bg-bistre'
                : 'border-khaki bg-white'
              }
            `}>
              {selected === item.kelas && (
                <div className="w-2 h-2 rounded-full bg-beige" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Footer button */}
      <div className="px-10 py-6 flex justify-center">
        <button
          onClick={handleLanjut}
          disabled={!selected || loading}
          className="bg-bistre text-beige font-semibold py-3 px-16 rounded-xl hover:bg-bistre/90 disabled:opacity-40 transition-all flex items-center gap-2"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : null}
          Lanjutkan
        </button>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 2 — Tes Awal
// ─────────────────────────────────────────────────────────────────────────────
const TesAwal = ({ kelas, onSelesai }) => {
  const [placements, setPlacements] = useState([]) // [{ mapel, bab:[{modul_id,bab,judul,soal:[]}] }]
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // Navigasi soal: flat list index
  // Kita flatten: mapelIdx → babIdx → soalIdx
  const [mapelIdx, setMapelIdx] = useState(0)
  const [babIdx, setBabIdx] = useState(0)
  const [soalIdx, setSoalIdx] = useState(0)
  const [isSoalCorrect, setIsSoalCorrect] = useState(false)
  const [showBabIntro, setShowBabIntro] = useState(true)
  const [timer, setTimer] = useState(0)
  const timerRef = useRef(null)

  // Stats
  const [totalSoalDijawab, setTotalSoalDijawab] = useState(0)

  useEffect(() => {
    const load = async () => {
      try {
        const token = localStorage.getItem('tokenRenaissance')
        const res = await API.get(`/placement/soal?kelas=${kelas}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        setPlacements(res.data.data || [])
      } catch {
        setError('Gagal memuat soal. Coba refresh halaman.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [kelas])

  // Timer
  useEffect(() => {
    timerRef.current = setInterval(() => setTimer((t) => t + 1), 1000)
    return () => clearInterval(timerRef.current)
  }, [])

  const formatTime = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0')
    const sec = (s % 60).toString().padStart(2, '0')
    return `${m}:${sec}`
  }

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-bistre/60">
          <Loader2 size={32} className="animate-spin" />
          <p className="text-sm">Memuat soal placement...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (placements.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center text-bistre/60">
          <p>Tidak ada soal tersedia untuk kelas {kelas}.</p>
          <button onClick={onSelesai} className="mt-4 bg-bistre text-beige py-2 px-8 rounded-xl">
            Lanjut ke Dashboard
          </button>
        </div>
      </div>
    )
  }

  const currentMapel = placements[mapelIdx]
  const currentBab = currentMapel?.bab?.[babIdx]
  const currentSoal = currentBab?.soal?.[soalIdx]

  const totalBabDalamMapel = currentMapel?.bab?.length || 0
  const totalSoalDalamBab = currentBab?.soal?.length || 0

  // Hitung total soal global
  const totalSoalGlobal = placements.reduce(
    (acc, m) => acc + m.bab.reduce((a, b) => a + b.soal.length, 0),
    0
  )

  // Hitung soal selesai sebelum ini (untuk progress bar)
  let soalSelesaiSebelumMapel = 0
  for (let i = 0; i < mapelIdx; i++) {
    soalSelesaiSebelumMapel += placements[i].bab.reduce((a, b) => a + b.soal.length, 0)
  }
  let soalSelesaiDalamMapel = 0
  for (let i = 0; i < babIdx; i++) {
    soalSelesaiDalamMapel += currentMapel.bab[i].soal.length
  }
  const soalGlobalSekarang = soalSelesaiSebelumMapel + soalSelesaiDalamMapel + soalIdx + 1
  const progressPersen = Math.round((soalGlobalSekarang / totalSoalGlobal) * 100)

  // Nomor soal dalam bab (untuk Daftar Soal panel kanan)
  const daftarSoalBab = currentBab?.soal || []

  const goNext = () => {
    setIsSoalCorrect(false)
    setTotalSoalDijawab((n) => n + 1)

    // Apakah masih ada soal dalam bab ini?
    if (soalIdx + 1 < totalSoalDalamBab) {
      setSoalIdx(soalIdx + 1)
      return
    }

    // Pindah ke bab berikutnya dalam mapel ini
    if (babIdx + 1 < totalBabDalamMapel) {
      setBabIdx(babIdx + 1)
      setSoalIdx(0)
      setShowBabIntro(true)
      return
    }

    // Pindah ke mapel berikutnya
    if (mapelIdx + 1 < placements.length) {
      setMapelIdx(mapelIdx + 1)
      setBabIdx(0)
      setSoalIdx(0)
      setShowBabIntro(true)
      return
    }

    // Semua selesai
    clearInterval(timerRef.current)
    onSelesai()
  }

  // Intro bab
  if (showBabIntro && currentBab) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-10">
        <div className="bg-bistre/5 border-2 border-khaki/30 rounded-2xl px-16 py-10 text-center max-w-md">
          <p className="text-xs font-semibold text-chamoisee uppercase tracking-wider mb-2">
            {currentMapel.mapel}
          </p>
          <h2 className="text-3xl font-bold text-bistre mb-1">
            Bab {currentBab.bab}
          </h2>
          <h3 className="text-xl font-semibold text-bistre/80 mb-4">
            {currentBab.judul}
          </h3>
          <p className="text-sm text-bistre/50 mb-6">
            {currentBab.soal.length} soal • Jawab dengan teliti
          </p>
          <button
            onClick={() => setShowBabIntro(false)}
            className="bg-bistre text-beige font-semibold py-2.5 px-12 rounded-xl hover:bg-bistre/90 transition-all"
          >
            Mulai
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Progress bar top */}
      <div className="h-1 bg-beige">
        <div
          className="h-full bg-bistre transition-all duration-500"
          style={{ width: `${progressPersen}%` }}
        />
      </div>

      {/* Main area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left panel — narasi + soal info */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Top bar */}
          <div className="flex items-center justify-between px-8 pt-6 pb-4">
            <div>
              <span className="text-xs font-semibold text-chamoisee uppercase tracking-wider">
                {currentMapel.mapel}
              </span>
              <h2 className="text-base font-bold text-bistre mt-0.5">
                Soal {soalIdx + 1} dari {totalSoalDalamBab}
              </h2>
            </div>
            <span className="text-xs font-medium bg-khaki/30 text-bistre px-3 py-1 rounded-full">
              {currentBab.judul}
            </span>
          </div>

          {/* Soal layout — mirip PopUpModul */}
          <div className="flex flex-1 gap-0 px-8 pb-8">
            {/* Narasi panel */}
            <div className="w-1/2 pr-6 flex flex-col gap-4">
              <div className="bg-beige/30 rounded-2xl min-h-32 flex items-center justify-center text-bistre/30 text-sm border border-khaki/20">
                {currentSoal?.ilustrasi ? (
                  <img
                    src={currentSoal.ilustrasi}
                    alt="ilustrasi"
                    className="w-full h-full object-contain rounded-xl"
                  />
                ) : (
                  <span>Ilustrasi</span>
                )}
              </div>
              {currentSoal?.narasi && (
                <div className="rounded-xl p-4 bg-white border border-beige">
                  <p className="text-bistre text-sm text-justify leading-relaxed">
                    {typeof currentSoal.narasi === 'string'
                      ? currentSoal.narasi
                      : currentSoal.narasi?.teks}
                  </p>
                  {currentSoal.narasi?.poin && (
                    <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
                      {currentSoal.narasi.poin.map((p, i) => (
                        <li key={i} className="text-bistre/80 text-sm">{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* Soal panel */}
            <div className="w-1/2 flex flex-col gap-3">
              <div className="bg-bistre/80 border-2 border-coffe rounded-2xl p-5 flex-1">
                {currentSoal ? (
                  <RenderSoal
                    key={`${mapelIdx}-${babIdx}-${soalIdx}`}
                    soal={currentSoal}
                    onCorrect={() => setIsSoalCorrect(true)}
                  />
                ) : (
                  <p className="text-white/50 text-center text-sm">Memuat soal...</p>
                )}
              </div>

              {isSoalCorrect && (
                <div className="flex justify-end">
                  <button
                    onClick={goNext}
                    className="text-bistre/70 hover:text-bistre text-sm font-semibold flex items-center gap-1 transition-colors"
                  >
                    {mapelIdx === placements.length - 1 &&
                    babIdx === totalBabDalamMapel - 1 &&
                    soalIdx === totalSoalDalamBab - 1
                      ? 'Selesai'
                      : 'Next'}{' '}
                    →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right panel — Daftar Soal + Timer */}
        <div className="w-56 shrink-0 border-l border-beige bg-white/50 flex flex-col p-5 gap-5 overflow-y-auto">
          {/* Daftar soal dalam bab */}
          <div>
            <p className="text-xs font-bold text-bistre mb-1">Daftar Soal</p>
            <p className="text-[10px] text-bistre/50 mb-3">Klik untuk berpindah soal</p>
            <div className="grid grid-cols-4 gap-2">
              {daftarSoalBab.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setSoalIdx(i); setIsSoalCorrect(false) }}
                  className={`w-8 h-8 rounded-full text-xs font-bold transition-all
                    ${i === soalIdx
                      ? 'bg-bistre text-beige'
                      : i < soalIdx
                        ? 'bg-khaki text-bistre'
                        : 'bg-beige text-bistre/50 border border-khaki/30'
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-[10px] text-bistre/60">
              <div className="w-3 h-3 rounded-full bg-bistre" />
              Sedang
            </div>
            <div className="flex items-center gap-2 text-[10px] text-bistre/60">
              <div className="w-3 h-3 rounded-full bg-khaki" />
              Sudah Dijawab
            </div>
            <div className="flex items-center gap-2 text-[10px] text-bistre/60">
              <div className="w-3 h-3 rounded-full bg-beige border border-khaki/30" />
              Belum Dijawab
            </div>
          </div>

          {/* Timer */}
          <div className="bg-beige rounded-xl p-3 flex items-center gap-2">
            <Clock size={16} className="text-bistre/60 shrink-0" />
            <div>
              <p className="text-[10px] text-bistre/50">Waktu Berjalan</p>
              <p className="text-lg font-bold text-bistre leading-none">{formatTime(timer)}</p>
            </div>
          </div>

          {/* Progres global */}
          <div className="bg-beige rounded-xl p-3">
            <p className="text-[10px] text-bistre/50 mb-1">Progress Keseluruhan</p>
            <p className="text-sm font-bold text-bistre">{totalSoalDijawab} / {totalSoalGlobal}</p>
            <div className="w-full h-1.5 bg-khaki/30 rounded-full mt-1.5 overflow-hidden">
              <div
                className="h-full bg-bistre rounded-full transition-all duration-500"
                style={{ width: `${progressPersen}%` }}
              />
            </div>
          </div>

          {/* Tips */}
          <div className="bg-beige/60 rounded-xl p-3">
            <p className="text-[10px] font-bold text-bistre mb-1">Tips Mengerjakan</p>
            <p className="text-[10px] text-bistre/60 leading-relaxed">
              Baca setiap pertanyaan dengan teliti dan pilih jawaban yang paling tepat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 3 — Selesai
// ─────────────────────────────────────────────────────────────────────────────
const Selesai = ({ kelas, onMasukDashboard }) => (
  <div className="flex-1 flex items-center justify-center">
    <div className="text-center max-w-sm flex flex-col items-center gap-5">
      <div className="w-20 h-20 rounded-full bg-bistre/10 flex items-center justify-center">
        <CheckCircle size={40} className="text-bistre" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-bistre">Tes Awal Selesai!</h2>
        <p className="text-bistre/60 text-sm mt-2 leading-relaxed">
          Selamat! Kamu sudah menyelesaikan tes awal untuk{' '}
          <strong>Kelas {kelas}</strong>. Sekarang mulai perjalanan belajarmu.
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full items-center">
        <button
          onClick={onMasukDashboard}
          className="bg-bistre text-beige font-semibold py-3 px-12 rounded-xl hover:bg-bistre/90 transition-all flex items-center gap-2"
        >
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

// ─────────────────────────────────────────────────────────────────────────────
// MAIN — PlacementTest
// ─────────────────────────────────────────────────────────────────────────────
const PlacementTest = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)         // 1 = PilihKelas, 2 = TesAwal, 3 = Selesai
  const [selectedKelas, setSelectedKelas] = useState(null)

  const handleKelasLanjut = (kelas) => {
    setSelectedKelas(kelas)
    setStep(2)
  }

  const handleTesSelesai = () => {
    setStep(3)
  }

  const handleMasukDashboard = () => {
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex bg-[#FAF5F0]">
      {/* Sidebar */}
      <StepSidebar currentStep={step} selectedKelas={selectedKelas} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {step === 1 && (
          <PilihKelas onLanjut={handleKelasLanjut} />
        )}
        {step === 2 && selectedKelas && (
          <TesAwal kelas={selectedKelas} onSelesai={handleTesSelesai} />
        )}
        {step === 3 && (
          <Selesai kelas={selectedKelas} onMasukDashboard={handleMasukDashboard} />
        )}
      </div>
    </div>
  )
}

export default PlacementTest