/* eslint-disable react-hooks/exhaustive-deps */
/**
 * QuizPage.jsx
 *
 * Full-page quiz dengan sidebar (seperti PlacementTest).
 * Menggantikan PopUpModul yang sebelumnya muncul sebagai overlay/popup.
 *
 * Route: /academy/:mapelSlug/quiz
 * Query params: modulIndex (index bab yang dipilih)
 *
 * Fitur:
 *  - Sidebar tetap ada (NavDasboard)
 *  - Layout full-page seperti PlacementTest
 *  - Timer per soal (waktu pengerjaan disimpan ke backend via POST /quiz-time)
 *  - XP dikirim ke backend setelah bab selesai
 *  - Progress diperbarui real-time
 */
import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { CheckCircle2, ArrowRight, Trophy, Star, Clock } from 'lucide-react'

import NavDasboard from '../components/NavDasboard'
import DragDropSoal    from '../components/ModulComponent/DragDropSoal'
import TTSSoal         from '../components/ModulComponent/TTSSoal'
import QuizSoal        from '../components/ModulComponent/QuizSoal'
import IsianSoal       from '../components/ModulComponent/IsianSoal'
import TarikGarisSoal  from '../components/ModulComponent/TarikGarisSoal'
import SambungKataSoal from '../components/ModulComponent/SambungKataSoal'
import ProgressHook    from '../Hook/ProgressHook'
import useXp           from '../Hook/useXp'
import API             from '../services/api'

import sfxBenar  from '../assets/sfx/benar.mp3'
import sfxSalah  from '../assets/sfx/salah.mp3'
import sfxMenang from '../assets/sfx/menang.mp3'
import Pidato    from '../../public/Pidato.mp3'

const playSound = (src) => {
    try { new Audio(src).play().catch(() => {}) } catch {}
}

// ── RenderSoal ────────────────────────────────────────────────────────────────
const RenderSoal = ({ soal, onCorrect, onWrong }) => {
    const audioRef = useRef(null)
    const props = { soal, onCorrect, onWrong }

    switch (soal?.type) {
        case 'quiz':         return <QuizSoal       {...props} />
        case 'drag and drop':
        case 'timeline':     return <DragDropSoal   {...props} />
        case 'TTS':          return <TTSSoal         {...props} />
        case 'puzzle':       return <SambungKataSoal {...props} />
        case 'isian':        return <IsianSoal       {...props} />
        case 'tarik benang': return <TarikGarisSoal  {...props} />
        case 'materi':
            return (
                <div className="flex flex-col items-center gap-4 text-white py-4 px-4">
                    <h1 className="text-xl font-bold font-monstserrat text-center text-[#F8F3E0]">
                        Materi: {soal.judul}
                    </h1>
                    <h2 className="text-base font-semibold text-white text-center font-monstserrat">
                        Putar pidato Bung Karno di bawah ini:
                    </h2>
                    <audio controls ref={audioRef} onEnded={() => onCorrect?.()}>
                        <source src={Pidato} type="audio/mpeg" />
                    </audio>
                    <p className="text-sm text-white/60 text-center">Dengarkan dengan seksama!</p>
                </div>
            )
        default:
            return (
                <div className="text-white text-center py-6">
                    <h2 className="font-semibold mb-4">{soal?.judul}</h2>
                    <button onClick={() => onCorrect?.()} className="bg-coffe text-white py-2 px-6 rounded-xl">
                        Lanjutkan
                    </button>
                </div>
            )
    }
}

// ── XP Result screen ─────────────────────────────────────────────────────────
const XpResultScreen = ({ xpDapat, xpTotal, level, levelNaik, xpToNext, onContinue }) => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 text-center px-4">
        <div className="text-6xl">{levelNaik ? '🎉' : '⭐'}</div>
        <h2 className="text-3xl font-bold text-[#F8F3E0] font-monstserrat">
            {levelNaik ? 'Level Naik!' : 'Bab Selesai!'}
        </h2>
        {levelNaik && <p className="text-khaki text-xl font-semibold">Level {level}</p>}
        <div className="bg-khaki/20 border border-khaki/40 rounded-2xl px-8 py-4 w-full max-w-xs">
            <p className="text-xs text-beige/60 mb-1">XP Didapat</p>
            <p className="text-4xl font-bold text-khaki">+{xpDapat} XP</p>
        </div>
        <div className="w-full max-w-xs">
            <div className="flex justify-between text-xs text-beige/50 mb-1">
                <span>Total: {xpTotal} XP</span>
                <span>{xpToNext} XP lagi ke level berikutnya</span>
            </div>
            <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full bg-khaki rounded-full transition-all duration-700"
                    style={{ width: `${Math.min(100, ((1000 - xpToNext) / 1000) * 100)}%` }}
                />
            </div>
        </div>
        <button
            onClick={onContinue}
            className="mt-2 bg-khaki text-bistre font-semibold py-3 px-12 rounded-2xl hover:bg-khaki/80 transition"
        >
            Lanjutkan
        </button>
    </div>
)

// ── Completion Screen ─────────────────────────────────────────────────────────
const CompletionScreen = ({ modulNama, nextModulNama, isLast, onFinish }) => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-5 text-center px-4">
        <Trophy size={56} className="text-khaki" />
        {isLast ? (
            <h1 className="text-2xl md:text-3xl font-bold font-monstserrat text-[#F8F3E0]">
                Selamat! Kamu telah menyelesaikan<br />Semua Pelajaran!
            </h1>
        ) : (
            <>
                <h1 className="text-2xl md:text-3xl font-bold font-monstserrat text-[#F8F3E0]">
                    Selamat menyelesaikan<br />{modulNama}!
                </h1>
                {nextModulNama && (
                    <p className="text-[#F8F3E0]/80 font-monstserrat text-lg">
                        Gerbang menuju bab berikutnya:<br />
                        <span className="font-semibold text-khaki">{nextModulNama}</span> telah terbuka
                    </p>
                )}
            </>
        )}
        <button
            onClick={onFinish}
            className="mt-2 bg-icon text-white py-3 px-12 rounded-2xl border border-white/30 hover:bg-icon/80 transition"
        >
            Selesai
        </button>
    </div>
)

// ── Main QuizPage ─────────────────────────────────────────────────────────────
const QuizPage = () => {
    const navigate  = useNavigate()
    const location  = useLocation()
    const { mapelSlug } = useParams()

    // Data dikirim dari ModulPage via navigate state
    const {
        modulData     = [],
        modulIndex    = 0,
        initialSoalIndex = 0,
        soalSelesaiAwal  = [],
    } = location.state ?? {}

    const { updateProgress, fetchProgress } = ProgressHook()
    const { tambahXp } = useXp()

    const [soalIndex,     setSoalIndex]     = useState(initialSoalIndex)
    const [isSoalCorrect, setIsSoalCorrect] = useState(false)
    const [jumlahSalah,   setJumlahSalah]   = useState(0)
    const [soalSelesai,   setSoalSelesai]   = useState(soalSelesaiAwal)
    const [isStarted,     setIsStarted]     = useState(false)
    const [isComplete,    setIsComplete]    = useState(false)
    const [xpResult,      setXpResult]      = useState(null)
    const [showXp,        setShowXp]        = useState(false)
    const [elapsedSec,    setElapsedSec]    = useState(0)  // timer per soal
    const [soalTimeLogs,  setSoalTimeLogs]  = useState([]) // log waktu tiap soal

    const timerRef  = useRef(null)
    const startRef  = useRef(null) // timestamp saat soal mulai

    const modulSekarang = modulData?.[modulIndex]
    const soalSekarang  = modulSekarang?.soal?.[soalIndex]
    const totalSoal     = modulSekarang?.soal?.length || 0
    const isLastSoal    = soalIndex === totalSoal - 1
    const isLastModule  = modulIndex === modulData.length - 1

    // ── Timer: mulai saat soal tampil ──
    const startTimer = useCallback(() => {
        startRef.current = Date.now()
        setElapsedSec(0)
        clearInterval(timerRef.current)
        timerRef.current = setInterval(() => {
            setElapsedSec(Math.floor((Date.now() - startRef.current) / 1000))
        }, 1000)
    }, [])

    const stopTimer = useCallback(() => {
        clearInterval(timerRef.current)
        const dur = Math.floor((Date.now() - (startRef.current ?? Date.now())) / 1000)
        return dur
    }, [])

    useEffect(() => {
        if (isStarted && soalSekarang) startTimer()
        return () => clearInterval(timerRef.current)
    }, [soalIndex, isStarted])

    if (!modulData.length || !modulSekarang) {
        return (
            <>
                <NavDasboard />
                <div className="lg:ml-64 md:ml-20 flex items-center justify-center min-h-screen bg-bistre">
                    <p className="text-white">Data tidak ditemukan. <button onClick={() => navigate(-1)} className="underline">Kembali</button></p>
                </div>
            </>
        )
    }

    // ── Handlers ─────────────────────────────────────────────────────────────
    const handleCorrect = () => { playSound(sfxBenar); setIsSoalCorrect(true) }
    const handleWrong   = () => { playSound(sfxSalah); setJumlahSalah(n => n + 1); setIsSoalCorrect(true) }

    const handleNext = async () => {
        // Catat waktu soal ini
        const dur = stopTimer()
        const log = {
            modul_id:     modulSekarang.id,
            soal_id:      soalSekarang?.id ?? null,
            durasi_detik: dur,
        }
        setSoalTimeLogs(prev => [...prev, log])

        // Update progress soal
        const newSoalSelesai = soalSekarang?.id
            ? [...soalSelesai, soalSekarang.id]
            : soalSelesai
        setSoalSelesai(newSoalSelesai)

        const token = localStorage.getItem('tokenRenaissance')
        await updateProgress(modulSekarang.id, newSoalSelesai, totalSoal)

        setIsSoalCorrect(false)

        if (isLastSoal) {
            // Kirim semua time logs ke backend sekaligus
            const allLogs = [...soalTimeLogs, log]
            try {
                await API.post('/quiz-time', { logs: allLogs }, {
                    headers: { Authorization: `Bearer ${token}` },
                })
            } catch { /* silent */ }

            // Selesai bab
            playSound(sfxMenang)
            setIsComplete(true)

            // Update progress bab
            const bab = modulSekarang.bab
            await updateProgress(modulSekarang.id, newSoalSelesai, totalSoal, bab)
            await fetchProgress()

            // Tambah XP
            const result = await tambahXp({ jumlahSalah, totalSoal, modulId: modulSekarang.id })
            if (result) { setXpResult(result); setShowXp(true) }
        } else {
            setSoalIndex(soalIndex + 1)
        }
    }

    const handleFinish = () => {
        navigate(`/academy/${mapelSlug}`, { replace: true })
    }

    // ── Render: belum mulai ──
    if (!isStarted) {
        return (
            <>
                <NavDasboard />
                <div className="lg:ml-64 md:ml-20 min-h-screen bg-bistre flex items-center justify-center px-4">
                    <div className="bg-bistre/80 border-2 border-coffe rounded-2xl px-10 py-10 text-center max-w-md w-full">
                        <h1 className="text-3xl font-bold font-monstserrat text-[#F8F3E0] mb-2">
                            Bab {modulSekarang.bab}
                        </h1>
                        <h2 className="text-2xl font-bold font-monstserrat text-[#F8F3E0] mb-6 leading-tight">
                            {modulSekarang.judul}
                        </h2>
                        <div className="bg-white/10 rounded-xl px-4 py-3 mb-6 text-left">
                            <p className="text-beige/70 text-sm"><span className="text-khaki font-semibold">{totalSoal}</span> soal dalam bab ini</p>
                            <p className="text-beige/70 text-sm mt-1">Jawab semua soal untuk mendapat XP maksimal!</p>
                        </div>
                        <button
                            onClick={() => setIsStarted(true)}
                            className="bg-khaki text-bistre font-bold py-3 px-12 rounded-2xl hover:bg-khaki/80 transition flex items-center gap-2 mx-auto"
                        >
                            Mulai <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </>
        )
    }

    // ── Render: XP popup ──
    if (showXp && xpResult) {
        return (
            <>
                <NavDasboard />
                <div className="lg:ml-64 md:ml-20 min-h-screen bg-bistre flex items-center justify-center px-4">
                    <XpResultScreen
                        xpDapat={xpResult.xpDapat}
                        xpTotal={xpResult.xpTotal}
                        level={xpResult.levelBaru}
                        levelNaik={xpResult.levelNaik}
                        xpToNext={xpResult.xpToNext}
                        onContinue={() => setShowXp(false)}
                    />
                </div>
            </>
        )
    }

    // ── Render: selesai bab ──
    if (isComplete && !showXp) {
        return (
            <>
                <NavDasboard />
                <div className="lg:ml-64 md:ml-20 min-h-screen bg-bistre flex items-center justify-center px-4">
                    <CompletionScreen
                        modulNama={`Bab ${modulSekarang.bab}: ${modulSekarang.judul}`}
                        nextModulNama={!isLastModule ? `${modulData[modulIndex + 1]?.judul}` : null}
                        isLast={isLastModule}
                        onFinish={handleFinish}
                    />
                </div>
            </>
        )
    }

    // ── Render: soal aktif ──
    const progressPct = totalSoal > 0 ? Math.round(((soalIndex) / totalSoal) * 100) : 0

    return (
        <>
            <NavDasboard />
            <div className="lg:ml-64 md:ml-20 min-h-screen bg-bistre flex flex-col">
                {/* Top bar */}
                <div className="flex items-center gap-4 px-6 py-4 border-b border-coffe/30">
                    <button onClick={handleFinish} className="text-beige/60 hover:text-white transition text-sm font-medium">
                        ← Keluar
                    </button>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-khaki rounded-full transition-all duration-500"
                            style={{ width: `${progressPct}%` }}
                        />
                    </div>
                    <div className="flex items-center gap-1.5 text-beige/60 text-sm shrink-0">
                        <Clock size={14} />
                        <span>{elapsedSec}s</span>
                    </div>
                    <span className="text-beige/50 text-sm shrink-0">{soalIndex + 1}/{totalSoal}</span>
                </div>

                {/* Quiz content — layout dua kolom seperti PlacementTest */}
                <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                    {/* KIRI: ilustrasi + narasi */}
                    <div className="w-full md:w-1/2 p-6 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-coffe/30">
                        {/* Judul bab */}
                        <div className="mb-2">
                            <p className="text-[11px] text-beige/40 font-semibold uppercase tracking-wider">
                                Bab {modulSekarang.bab}
                            </p>
                            <h2 className="text-lg font-bold text-[#F8F3E0] font-monstserrat leading-tight">
                                {modulSekarang.judul}
                            </h2>
                        </div>

                        {/* Ilustrasi */}
                        <div className="rounded-2xl overflow-hidden bg-white/5 min-h-32 flex items-center justify-center">
                            {soalSekarang?.ilustrasi ? (
                                <img src={soalSekarang.ilustrasi} alt="ilustrasi" className="w-full h-full object-contain" />
                            ) : (
                                <span className="text-white/20 text-sm">Ilustrasi</span>
                            )}
                        </div>

                        {/* Narasi */}
                        {soalSekarang?.narasi && (
                            <div className="rounded-xl bg-white/5 p-4">
                                <p className="text-white/80 text-sm font-monstserrat leading-relaxed text-justify">
                                    {typeof soalSekarang.narasi === 'string'
                                        ? soalSekarang.narasi
                                        : soalSekarang.narasi.teks}
                                </p>
                                {soalSekarang.narasi?.poin && (
                                    <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
                                        {soalSekarang.narasi.poin.map((p, i) => (
                                            <li key={i} className="text-white/70 text-sm font-monstserrat">{p}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>

                    {/* KANAN: soal */}
                    <div className="w-full md:w-1/2 p-6 flex flex-col gap-4">
                        <div className="flex-1 bg-icon/40 border-2 border-icon/60 shadow-xl rounded-2xl px-5 py-5 min-h-60">
                            {soalSekarang && (
                                <RenderSoal
                                    key={`${modulIndex}-${soalIndex}`}
                                    soal={soalSekarang}
                                    onCorrect={handleCorrect}
                                    onWrong={handleWrong}
                                />
                            )}
                        </div>

                        {isSoalCorrect && (
                            <div className="flex justify-end">
                                <button
                                    onClick={handleNext}
                                    className="flex items-center gap-2 bg-khaki text-bistre font-semibold py-2.5 px-8 rounded-xl hover:bg-khaki/80 transition"
                                >
                                    {isLastSoal ? 'Selesai' : 'Lanjut'}
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuizPage
