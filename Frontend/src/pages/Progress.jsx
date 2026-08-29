/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Progress.jsx — Halaman Progress lengkap sesuai design
 * Data dari backend: XP, Streak, Progress modul, Class Progress, Quiz Time
 */
import { useState, useEffect, useCallback } from 'react'
import {
  CheckCircle2, Flame, Trophy, BookOpen, Star,
  Calendar, Target, Zap, TrendingUp, Award,
  Lock, ChevronRight, Lightbulb,
  ChevronDown,
  Bell,
  Search
} from 'lucide-react'
import NavDasboard from '../components/NavDasboard'
import useXp from '../Hook/useXp'
import ProgressHook from '../Hook/ProgressHook'
import API from '../services/api'
import { useUser } from '../Context/UserContext'
import SkeletonNavbar from '../components/SkeletonLoading/DashboardPage/SkeletonNavbar'
import PopUpAccount from '../components/PopUpAccount'

// ── Helpers ───────────────────────────────────────────────────────────────────
const LEVEL_TITLES = [
  '', 'Aureus Scholar', 'Bronze Learner', 'Silver Seeker',
  'Gold Explorer', 'Platinum Master', 'Diamond Champion',
  'Legend Scholar', 'Renaissance Master',
]
const getLevelTitle = (level) => LEVEL_TITLES[level] ?? `Scholar Lv.${level}`
const WEEK_DAYS = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']
const TIPS = [
  'Belajar sedikit setiap hari jauh lebih efektif daripada belajar banyak sekaligus!',
  'Ulangi materi yang sulit 3x dalam seminggu untuk memori jangka panjang.',
  'Istirahat sejenak setelah 25 menit belajar agar otakmu tetap segar.',
  'Menulis ulang catatan dengan kata-katamu sendiri membantu pemahaman lebih dalam.',
  'Ajari temanmu tentang materi — ini cara belajar paling efektif!',
  'Tidur cukup 7-8 jam sangat penting untuk konsolidasi memori belajar.',
  'Buat mind-map untuk menghubungkan konsep-konsep yang berkaitan.',
]
const getTipHariIni = () => TIPS[new Date().getDay()]

const ACHIEVEMENTS = [
  { id: 1, label: 'First Step', Icon: BookOpen, field: 'modulSelesai', threshold: 1 },
  { id: 2, label: 'Consistent Learner', Icon: Calendar, field: 'streak', threshold: 7 },
  { id: 3, label: 'Math Explorer', Icon: Star, field: 'modulMTK', threshold: 5 },
  { id: 4, label: 'Knowledge Seeker', Icon: Target, field: 'xp', threshold: 500 },
  { id: 5, label: 'Perfect Week', Icon: Trophy, field: 'streak', threshold: 7 },
  { id: 6, label: 'Renaissance Scholar', Icon: Award, field: 'level', threshold: 5 },
]

// ── Sub-components ────────────────────────────────────────────────────────────
const XpOverviewCard = () => (
  <div className="bg-white rounded-2xl border border-[#9B7A5B]/15 p-5">
    <h3 className="font-bold text-bistre text-sm">XP Overview</h3>
    <p className="text-[11px] text-bistre/50 mb-4">Cara mendapatkan XP</p>
    <div className="flex flex-col gap-2.5">
      {[
        'Menyelesaikan topik',
        'Menjawab latihan dengan benar',
        'Menyelesaikan evaluasi',
        'Mempertahankan streak',
        'Menyelesaikan seluruh mata pelajaran',
        'Membantu di Community',
      ].map((item) => (
        <div key={item} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-bistre flex items-center justify-center shrink-0">
              <CheckCircle2 size={12} className="text-white" />
            </div>
            <span className="text-xs text-bistre font-medium">{item}</span>
          </div>
          <span className="text-[11px] font-bold text-chamoisee">+25 XP</span>
        </div>
      ))}
    </div>
  </div>
)

const XpSummaryCard = ({ xp, weeklyData }) => {
  const maxVal = Math.max(...weeklyData.map((d) => d.detik / 60), 1)
  const accumulatedXpGain = weeklyData.reduce((total, item) => {
    const minutes = Number(item?.detik || 0) / 60
    return total + Math.max(0, minutes * 5)
  }, 0)

  return (
    <div className="bg-white rounded-2xl border border-[#9B7A5B]/15 p-5">
      <h3 className="font-bold text-bistre text-sm">Ringkasan XP</h3>
      <p className="text-[11px] text-bistre/50 mb-3">Total XP yang kamu kumpulkan</p>
      <p className="text-3xl font-bold font-monstserrat text-chamoisee underline decoration-chamoisee/30">
        {xp.toLocaleString()} <span className="text-base font-semibold">XP</span>
      </p>
      <div className="flex items-center gap-1 mt-1 mb-3">
        {/* <TrendingUp size={12} className="text-green-500" />
        <span className="text-[11px] text-green-600 font-semibold">
          {Math.round(accumulatedXpGain).toLocaleString()} XP dari minggu lalu
        </span> */}
      </div>
      {/* Bar chart */}
      <div className="flex items-end gap-1 h-20">
        {weeklyData.map((d, i) => {
          const h = maxVal > 0 ? (d.detik / 60 / maxVal) * 100 : 0
          return (
            <div key={i} className="flex flex-col items-center gap-1 flex-1">
              <div className="w-full flex items-end" style={{ height: 64 }}>
                <div
                  className={`w-full rounded-t transition-all duration-500 ${i === weeklyData.length - 1 ? 'bg-bistre' : 'bg-[#9B7A5B]/35'}`}
                  style={{ height: `${Math.max(6, h)}%` }}
                />
              </div>
              <span className="text-[9px] text-bistre/40">{d.day}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const StreakCard = ({ currentStreak, longestStreak, weekly }) => {
  const daysLeft = Math.max(0, longestStreak + 1 - currentStreak)
  return (
    <div className="bg-white rounded-2xl border border-[#9B7A5B]/15 p-5">
      <h3 className="font-bold text-bistre text-sm">Streak Belajar</h3>
      <p className="text-[11px] text-bistre/50 mb-4">Pertahankan Konsistensimu</p>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
          <Flame size={28} className="text-orange-500" />
        </div>
        <div>
          <p className="text-3xl font-bold text-bistre font-monstserrat leading-tight">
            {currentStreak} <span className="text-sm font-normal text-bistre/50">Hari</span>
          </p>
          <p className="text-[11px] text-bistre/60">Streak terpanjang: {longestStreak} Hari</p>
        </div>
      </div>
      {/* Weekly */}
      <div className="flex justify-between gap-1 mb-3">
        {WEEK_DAYS.map((day, i) => {
          const isActive = weekly?.[i]?.active ?? false
          return (
            <div key={day} className="flex flex-col items-center gap-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-bistre text-white' : 'bg-beige/60 text-bistre/20'}`}>
                <CheckCircle2 size={14} />
              </div>
              <span className="text-[9px] text-bistre/40">{day}</span>
            </div>
          )
        })}
      </div>
      <div className="bg-[#F8F3E0] rounded-xl px-3 py-2.5 flex items-center gap-2">
        <Trophy size={13} className="text-chamoisee shrink-0" />
        <p className="text-[11px] text-bistre font-semibold">
          {daysLeft > 0 ? `Belajar ${daysLeft} hari lagi untuk rekor baru` : 'Kamu pecahkan rekor! 🎉'}
        </p>
      </div>
    </div>
  )
}

const AchievementBadge = ({ label, Icon, unlocked }) => (
  <div className="flex flex-col items-center gap-1.5">
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${unlocked ? 'bg-bistre text-white shadow-sm' : 'bg-beige/40 text-bistre/20 border border-bistre/10'}`}>
      {unlocked ? <Icon size={22} /> : <Lock size={18} />}
    </div>
    <span className={`text-[10px] font-semibold text-center leading-tight ${unlocked ? 'text-bistre' : 'text-bistre/30'}`}>
      {label}
    </span>
  </div>
)

const ClassProgressCard = ({ kelas, progressPersen, modulsSelesai, totalModuls, }) => {
  const nextKelas = kelas ? kelas + 1 : null
  const modulsLeft = Math.max(0, totalModuls - modulsSelesai)
  const r = 50
  const circ = 2 * Math.PI * r
  return (
    <div className="bg-white rounded-2xl border border-[#9B7A5B]/15 p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-bistre text-sm">Jalur Menuju Kenaikan Kelas</h3>
          <p className="text-[11px] text-bistre/50 mt-0.5">Selesaikan semua mata pelajaran untuk naik ke Kelas {nextKelas}</p>
        </div>
        {progressPersen >= 80 && (
          <div className="shrink-0 bg-green-50 border border-green-200 rounded-xl px-3 py-2 text-center ml-2">
            <p className="text-[10px] font-bold text-green-700">Siap Naik Kelas</p>
            <p className="text-[9px] text-green-600/70 mt-0.5 leading-snug">
              Selesaikan semua mata<br />pelajaran untuk naik<br />ke Kelas {nextKelas}!
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center gap-5">
        {/* Donut */}
        <div className="relative shrink-0 w-28 h-28">
          <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
            <circle cx="60" cy="60" r={r} fill="none" stroke="#F2E0D2" strokeWidth="12" />
            <circle
              cx="60" cy="60" r={r} fill="none" stroke="#39221c" strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={circ * (1 - progressPersen / 100)}
              className="transition-all duration-700"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-bistre">{progressPersen}%</span>
            <span className="text-[9px] text-bistre/50">Kelas {kelas}</span>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-xs text-bistre font-semibold mb-1">{modulsSelesai} / {totalModuls} mata pelajaran selesai</p>
          <div className="flex gap-1 flex-wrap mb-2">
            {Array.from({ length: totalModuls }).map((_, i) => (
              <div key={i} className={`h-2.5 flex-1 min-w-3 rounded-sm ${i < modulsSelesai ? 'bg-bistre' : 'bg-beige/60'}`} />
            ))}
          </div>
          <p className="text-[11px] text-bistre/50 mb-3">{modulsLeft} mata pelajaran lagi menyelesaikan Kelas {kelas}</p>
          {nextKelas && (
            <div className="flex items-center gap-2 bg-beige/40 rounded-xl px-3 py-2">
              <Lock size={11} className="text-bistre/40 shrink-0" />
              <span className="text-[11px] text-bistre/60 font-medium">Kelas {nextKelas} Terkunci</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────
const Progress = () => {
  const { xp, level, xpInLevel, xpToNext, fetchXp } = useXp()
  const { fetchProgress, dataProgress } = ProgressHook()
  const [streak, setStreak] = useState({ current_streak: 0, longest_streak: 0, weekly: [] })
  const [timeData, setTimeData] = useState({ weekly: [] })
  const [classData, setClassData] = useState({ kelas: null, progress_persen: 0 })

  const getToken = () => localStorage.getItem('tokenRenaissance')
  const headers = () => ({ Authorization: `Bearer ${getToken()}` })

  const fetchStreak = useCallback(async () => {
    try { const r = await API.get('/streak', { headers: headers() }); setStreak(r.data.data) } catch { }
  }, [])

  const fetchTime = useCallback(async () => {
    try { const r = await API.get('/quiz-time', { headers: headers() }); setTimeData(r.data.data) } catch { }
  }, [])

  const fetchClass = useCallback(async () => {
    try { const r = await API.get('/progress/kelas', { headers: headers() }); setClassData(r.data.data) } catch { }
  }, [])

  useEffect(() => { fetchXp(); fetchProgress(); fetchStreak(); fetchTime(); fetchClass() }, [])

  const modulsSelesai = dataProgress.filter((i) => Number(i.progress) === 100).length
  const totalModuls = 18
  console.log(totalModuls)
  const modulMTK = dataProgress.filter((i) => (i.mapel || '').toLowerCase() === 'matematika' && Number(i.progress) === 100).length

  const achStatus = { modulSelesai: modulsSelesai, streak: streak.current_streak, modulMTK, xp, level }

  const weeklyData = timeData.weekly?.length
    ? timeData.weekly
    : WEEK_DAYS.map((d) => ({ day: d, detik: 0 }))

  const xpPct = Math.min(100, Math.round((xpInLevel / 1000) * 100))
  const { user } = useUser()
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <NavDasboard />
      <div className="flex flex-col lg:ml-64 md:ml-20 bg-[#FBF9F6] min-h-screen pb-24 lg:pb-10">
        <div className="px-5 sm:px-8 lg:px-10 pt-6 max-w-5xl w-full mx-auto">
          {/* ── Top bar ── */}
          {!user ? (
            <SkeletonNavbar />
          ) : (
            <div className="flex flex-row items-center justify-between gap-4">
              <div className="relative flex-1 ml-auto mr-4 max-w-md">
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-bistre/40"
                />
                <input
                  type="search"
                  placeholder="Cari pelajaran..."
                  className="bg-white border border-beige w-full h-11 rounded-full pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-khaki/40"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button className="mr-1.5 flex items-center justify-center">
                  <Bell size={20} />
                </button>
                <div className="relative">
                  <div className="w-8 h-8 bg-bistre rounded-full flex items-center justify-center">
                    <h1 className="text-white text-sm font-bold">
                      {user?.name?.charAt(0) || 'U'}
                    </h1>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAccountOpen((prev) => !prev)}
                  aria-expanded={isAccountOpen}
                  aria-label="Open account menu"
                  className="cursor-pointer text-bistre"
                >
                  <ChevronDown
                    size={25}
                    className={`transition-transform duration-300 ${isAccountOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <PopUpAccount
                  Username={user}
                  Email={user}
                  isOpen={isAccountOpen}
                  onClose={() => setIsAccountOpen(false)}
                />
              </div>
            </div>
          )}

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold font-monstserrat text-bistre">Progress</h1>
            <p className="text-sm text-bistre/50 mt-1">Pantau perjalanan belajarmu dan raih pencapaian terbaik!</p>
          </div>

          {/* Level Banner */}
          <div className="mb-5 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5"
            style={{ background: 'linear-gradient(135deg,#F8F3E0 0%,#f0e5cf 100%)', border: '1.5px solid rgba(155,122,91,0.2)' }}>
            <div className="w-20 h-20 rounded-full border-4 border-chamoisee/30 bg-white flex items-center justify-center shrink-0 shadow-sm">
              <Award size={36} className="text-chamoisee" />
            </div>
            <div className="flex-1 w-full">
              <p className="text-[11px] text-bistre/50 uppercase tracking-wider font-semibold mb-0.5">Level Saat Ini</p>
              <p className="text-4xl font-bold text-bistre font-monstserrat">Level {level}</p>
              <p className="text-sm text-chamoisee font-semibold mb-3">{getLevelTitle(level)}</p>
              <div className="w-full h-2.5 bg-white/60 rounded-full overflow-hidden border border-chamoisee/20">
                <div className="h-full bg-bistre rounded-full transition-all duration-700" style={{ width: `${xpPct}%` }} />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[11px] text-bistre/50">{xp.toLocaleString()} XP</span>
                <span className="text-[11px] text-bistre/50">{(xp + xpToNext).toLocaleString()} XP</span>
              </div>
            </div>
            <div className="hidden sm:block shrink-0 text-right max-w-36">
              <p className="text-xs font-bold text-bistre mb-1">Kamu Hebat!</p>
              <p className="text-xs text-bistre/60 leading-snug">Terus belajar untuk naik level dan unlock lebih banyak pencapaian!</p>
            </div>
          </div>

          {/* Row 1: XP Overview | XP Summary | Streak */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* <XpOverviewCard /> */}
            <XpSummaryCard xp={xp} weeklyData={weeklyData} />
            <StreakCard currentStreak={streak.current_streak} longestStreak={streak.longest_streak} weekly={streak.weekly} />
          </div>

          {/* Row 2: Achievements | Class Progress */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Achievements */}
            <div className="bg-white rounded-2xl border border-[#9B7A5B]/15 p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-bistre text-sm">Pencapaian Terbaru</h3>
                  <p className="text-[11px] text-bistre/50">Achievement yang baru kamu raih</p>
                </div>
                {/* <button className="text-[11px] text-chamoisee font-semibold flex items-center gap-0.5">
                  Lihat Semua <ChevronRight size={12} />
                </button> */}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {ACHIEVEMENTS.map((ach) => {
                  const val = achStatus[ach.field] ?? 0
                  return <AchievementBadge key={ach.id} label={ach.label} Icon={ach.Icon} unlocked={val >= ach.threshold} />
                })}
              </div>
            </div>

            {/* Class Progress */}
            <ClassProgressCard
              kelas={classData.kelas ?? 10}
              progressPersen={parseFloat((modulsSelesai / Math.max(totalModuls, 15) * 100).toFixed(2))}
              modulsSelesai={modulsSelesai}
              totalModuls={Math.max(totalModuls, 15)}
            />
          </div>

          {/* Tips */}
          <div className="bg-white rounded-2xl border border-[#9B7A5B]/15 px-5 py-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#F8F3E0] flex items-center justify-center shrink-0">
              <Lightbulb size={15} className="text-chamoisee" />
            </div>
            <span className="text-xs font-bold text-bistre">Tips Hari Ini</span>
            <span className="text-xs text-bistre/55 ml-1">{getTipHariIni()}</span>
            <Zap size={17} className="text-chamoisee/40 shrink-0 ml-auto" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Progress
