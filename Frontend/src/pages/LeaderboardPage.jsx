/* eslint-disable react-hooks/exhaustive-deps */
/**
 * LeaderboardPage.jsx
 *
 * Tiga tab leaderboard:
 *   1. Streak   — global, semua kelas, diurutkan current_streak
 *   2. Progress — per kelas user yang login, diurutkan % soal selesai
 *   3. XP       — global, semua kelas, diurutkan total XP
 *
 * Endpoint backend:
 *   GET /api/v1/leaderboard/streak
 *   GET /api/v1/leaderboard/progress
 *   GET /api/v1/leaderboard/xp
 *
 * Response shape masing-masing:
 *   { data: { top10: [...], my_rank: {...} | null, kelas?: number } }
 *
 * Setiap entry top10:
 *   { rank, user_id, name, score, is_me, level? }
 */

import { useState, useEffect, useCallback } from 'react'
import { Flame, Trophy, Zap, Crown, Medal, Star, TrendingUp, BookOpen } from 'lucide-react'
import NavDasboard from '../components/NavDasboard'
import API from '../services/api'

// ── Constants ─────────────────────────────────────────────────────────────────

const TABS = [
  {
    id: 'streak',
    label: 'Streak',
    icon: Flame,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    accent: '#f97316',
    subtitle: 'Siapa paling konsisten belajar?',
    unit: 'hari',
    endpoint: '/leaderboard/streak',
  },
  {
    id: 'progress',
    label: 'Progress',
    icon: TrendingUp,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    accent: '#059669',
    subtitle: 'Peringkat per kelas',
    unit: '%',
    endpoint: '/leaderboard/progress',
  },
  {
    id: 'xp',
    label: 'XP',
    icon: Zap,
    color: 'text-chamoisee',
    bg: 'bg-[#F8F3E0]',
    border: 'border-[#9B7A5B]/30',
    accent: '#9B7A5B',
    subtitle: 'Siapa paling banyak poin?',
    unit: 'XP',
    endpoint: '/leaderboard/xp',
  },
]

const RANK_CONFIG = {
  1: { icon: Crown,  iconColor: 'text-yellow-500', bg: 'bg-yellow-50',  border: 'border-yellow-200', size: 'text-xl' },
  2: { icon: Medal,  iconColor: 'text-slate-400',  bg: 'bg-slate-50',   border: 'border-slate-200',  size: 'text-lg' },
  3: { icon: Medal,  iconColor: 'text-amber-600',  bg: 'bg-amber-50',   border: 'border-amber-200',  size: 'text-lg' },
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const getToken = () => localStorage.getItem('tokenRenaissance')
const headers  = () => ({ Authorization: `Bearer ${getToken()}` })

const formatScore = (score, unit) => {
  if (unit === 'XP') return `${score.toLocaleString()} XP`
  if (unit === '%')  return `${score}%`
  return `${score} ${unit}`
}

// ── Sub-components ────────────────────────────────────────────────────────────

/** Row untuk rank 4–10 dan "my_rank" di luar top 10 */
const RankRow = ({ entry, unit, isHighlight = false }) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
      ${isHighlight
        ? 'bg-bistre text-white shadow-sm'
        : entry.is_me
          ? 'bg-[#F8F3E0] border border-[#9B7A5B]/25'
          : 'bg-white border border-[#9B7A5B]/10 hover:border-[#9B7A5B]/25'
      }`}
  >
    {/* Rank number */}
    <span className={`w-7 text-center font-bold text-sm shrink-0 ${isHighlight ? 'text-white/80' : 'text-bistre/40'}`}>
      {entry.rank}
    </span>

    {/* Avatar */}
    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0
      ${isHighlight ? 'bg-white/20 text-white' : 'bg-bistre text-white'}`}>
      {entry.name?.charAt(0)?.toUpperCase() ?? '?'}
    </div>

    {/* Name */}
    <span className={`flex-1 font-semibold text-sm truncate ${isHighlight ? 'text-white' : 'text-bistre'}`}>
      {entry.name}
      {entry.is_me && !isHighlight && (
        <span className="ml-1.5 text-[10px] font-normal text-chamoisee">(Kamu)</span>
      )}
      {entry.level && (
        <span className={`ml-1.5 text-[10px] font-normal ${isHighlight ? 'text-white/60' : 'text-bistre/40'}`}>
          Lv.{entry.level}
        </span>
      )}
    </span>

    {/* Score */}
    <span className={`font-bold text-sm shrink-0 ${isHighlight ? 'text-white' : 'text-bistre'}`}>
      {formatScore(entry.score, unit)}
    </span>
  </div>
)

/** Podium card untuk rank 1-3 */
const PodiumCard = ({ entry, rank, unit, tabAccent }) => {
  const cfg = RANK_CONFIG[rank]
  const RankIcon = cfg.icon
  const heights = { 1: 'h-24', 2: 'h-16', 3: 'h-12' }
  const orders  = { 1: 'order-2', 2: 'order-1', 3: 'order-3' }

  if (!entry) {
    return (
      <div className={`flex flex-col items-center gap-2 flex-1 ${orders[rank]}`}>
        <div className="w-14 h-14 rounded-full bg-beige/40 border border-[#9B7A5B]/10 flex items-center justify-center">
          <span className="text-bistre/20 text-xl font-bold">{rank}</span>
        </div>
        <div className={`w-full ${heights[rank]} rounded-t-xl bg-beige/30`} />
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center gap-2 flex-1 ${orders[rank]}`}>
      {/* Avatar + crown */}
      <div className="relative">
        <div className={`w-14 h-14 rounded-full border-2 ${cfg.border} ${cfg.bg}
          flex items-center justify-center font-bold text-lg text-bistre shadow-sm`}>
          {entry.name?.charAt(0)?.toUpperCase() ?? '?'}
        </div>
        <div className={`absolute -top-3 -right-2 w-6 h-6 rounded-full ${cfg.bg} border ${cfg.border}
          flex items-center justify-center`}>
          <RankIcon size={12} className={cfg.iconColor} />
        </div>
        {entry.is_me && (
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-bistre text-white
            text-[8px] font-bold px-1.5 rounded-full whitespace-nowrap">
            Kamu
          </div>
        )}
      </div>

      {/* Name */}
      <p className="text-xs font-semibold text-bistre text-center leading-tight max-w-20 truncate">
        {entry.name}
      </p>

      {/* Score */}
      <p className="text-[11px] font-bold text-chamoisee">
        {formatScore(entry.score, unit)}
      </p>

      {/* Podium bar */}
      <div
        className={`w-full ${heights[rank]} rounded-t-xl flex items-start justify-center pt-2`}
        style={{ background: rank === 1 ? `${tabAccent}25` : `${tabAccent}12`, border: `1px solid ${tabAccent}20` }}
      >
        <span className="font-bold text-bistre/30 text-sm">{rank}</span>
      </div>
    </div>
  )
}

/** Skeleton loading */
const SkeletonRow = () => (
  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-[#9B7A5B]/10 animate-pulse">
    <div className="w-7 h-4 bg-beige/60 rounded" />
    <div className="w-8 h-8 rounded-full bg-beige/60" />
    <div className="flex-1 h-4 bg-beige/60 rounded" />
    <div className="w-16 h-4 bg-beige/60 rounded" />
  </div>
)

/** Panel konten satu tab */
const LeaderboardPanel = ({ tab, data, loading, error }) => {
  const top3  = data?.top10?.slice(0, 3) ?? []
  const rest  = data?.top10?.slice(3)    ?? []
  const myRank = data?.my_rank
  const isInTop10 = data?.top10?.some((e) => e.is_me)

  return (
    <div className="flex flex-col gap-4">
      {/* Kelas badge untuk progress tab */}
      {tab.id === 'progress' && data?.kelas && (
        <div className="flex items-center gap-2">
          <BookOpen size={14} className="text-chamoisee" />
          <span className="text-xs font-semibold text-bistre">
            Peringkat Kelas {data.kelas}
          </span>
          <span className="text-[10px] text-bistre/40 ml-1">— hanya teman sekelas kamu</span>
        </div>
      )}

      {/* ── Podium ─────────────────────────────────────────────────────── */}
      {loading ? (
        <div className="flex gap-3 mt-2">
          {[2,1,3].map((r) => (
            <div key={r} className="flex-1 flex flex-col items-center gap-2 animate-pulse">
              <div className="w-14 h-14 rounded-full bg-beige/40" />
              <div className="w-12 h-3 bg-beige/40 rounded" />
              <div className={`w-full ${r===1?'h-24':r===2?'h-16':'h-12'} bg-beige/30 rounded-t-xl`} />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-8 text-bistre/40 text-sm">{error}</div>
      ) : (
        <>
          {/* Podium top 3 */}
          <div className="flex items-end gap-3 mt-2">
            <PodiumCard entry={top3[1]} rank={2} unit={tab.unit} tabAccent={tab.accent} />
            <PodiumCard entry={top3[0]} rank={1} unit={tab.unit} tabAccent={tab.accent} />
            <PodiumCard entry={top3[2]} rank={3} unit={tab.unit} tabAccent={tab.accent} />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2 my-1">
            <div className="flex-1 h-px bg-[#9B7A5B]/10" />
            <span className="text-[10px] text-bistre/30 font-semibold uppercase tracking-wide">Peringkat Lainnya</span>
            <div className="flex-1 h-px bg-[#9B7A5B]/10" />
          </div>

          {/* Rank 4-10 */}
          <div className="flex flex-col gap-2">
            {rest.length === 0 && (
              <p className="text-center text-bistre/30 text-xs py-4">Belum ada data</p>
            )}
            {rest.map((entry) => (
              <RankRow key={entry.user_id} entry={entry} unit={tab.unit} />
            ))}
          </div>

          {/* My rank jika di luar top 10 */}
          {!isInTop10 && myRank && (
            <div className="mt-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-1 h-px border-t border-dashed border-[#9B7A5B]/20" />
                <span className="text-[10px] text-bistre/30">Posisimu</span>
                <div className="flex-1 h-px border-t border-dashed border-[#9B7A5B]/20" />
              </div>
              <RankRow entry={myRank} unit={tab.unit} isHighlight />
            </div>
          )}

          {/* Kosong total */}
          {data?.top10?.length === 0 && (
            <div className="text-center py-10">
              <Star size={32} className="text-bistre/20 mx-auto mb-3" />
              <p className="text-bistre/40 text-sm font-semibold">Leaderboard masih kosong</p>
              <p className="text-bistre/30 text-xs mt-1">Jadilah yang pertama!</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────

const LeaderboardPage = () => {
  const [activeTab, setActiveTab] = useState('streak')
  const [tabData,   setTabData]   = useState({ streak: null, progress: null, xp: null })
  const [loading,   setLoading]   = useState({ streak: false, progress: false, xp: false })
  const [errors,    setErrors]    = useState({ streak: null,  progress: null,  xp: null  })

  const fetchTab = useCallback(async (tabId) => {
    // Jangan fetch ulang kalau sudah ada data
    if (tabData[tabId] !== null) return

    const tab = TABS.find((t) => t.id === tabId)
    if (!tab) return

    setLoading((prev) => ({ ...prev, [tabId]: true }))
    setErrors ((prev) => ({ ...prev, [tabId]: null  }))

    try {
      const res  = await API.get(tab.endpoint, { headers: headers() })
      setTabData((prev) => ({ ...prev, [tabId]: res.data?.data ?? {} }))
    } catch (err) {
      const msg = err.response?.data?.message ?? 'Gagal memuat leaderboard'
      setErrors((prev) => ({ ...prev, [tabId]: msg }))
    } finally {
      setLoading((prev) => ({ ...prev, [tabId]: false }))
    }
  }, [tabData])

  // Fetch tab aktif saat pertama kali atau saat ganti tab
  useEffect(() => { fetchTab(activeTab) }, [activeTab])

  const currentTab = TABS.find((t) => t.id === activeTab)
  const TabIcon    = currentTab.icon

  return (
    <>
      <NavDasboard />
      <div className="flex flex-col lg:ml-64 md:ml-20 bg-[#FBF9F6] min-h-screen pb-24 lg:pb-10">
        <div className="px-5 sm:px-8 lg:px-12 pt-8 max-w-5xl w-full mx-auto">

          {/* Header */}
          <div className="mb-8 flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold font-monstserrat text-bistre flex items-center gap-3">
                <Trophy size={32} className="text-chamoisee" />
                Leaderboard
              </h1>
              <p className="text-sm text-bistre/50 mt-1">
                {currentTab.subtitle}
              </p>
            </div>
          </div>

          {/* Tab Bar */}
          <div className="flex gap-3 mb-8 bg-white rounded-2xl p-2 border border-[#9B7A5B]/10 shadow-sm">
            {TABS.map((tab) => {
              const Icon    = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl
                    font-semibold text-sm transition-all duration-200
                    ${isActive
                      ? 'bg-bistre text-white shadow-sm'
                      : 'text-bistre/50 hover:text-bistre hover:bg-[#F8F3E0]'
                    }`}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Active tab description banner */}
          <div className={`flex items-center gap-4 px-5 py-4 rounded-xl border mb-6 ${currentTab.bg} ${currentTab.border}`}>
            <TabIcon size={20} className={currentTab.color} />
            <div>
              <p className={`text-sm font-bold ${currentTab.color}`}>
                {activeTab === 'streak' && 'Streak Terpanjang — Global'}
                {activeTab === 'progress' && `Progress Belajar — Kelas ${tabData.progress?.kelas ?? '...'}`}
                {activeTab === 'xp' && 'XP Tertinggi — Global'}
              </p>
              <p className="text-xs text-bistre/50 mt-1">
                {activeTab === 'streak'   && 'Diurutkan dari streak harian paling panjang'}
                {activeTab === 'progress' && 'Diurutkan dari % soal selesai di kelasmu'}
                {activeTab === 'xp'       && 'Diurutkan dari total XP yang dikumpulkan'}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl border border-[#9B7A5B]/10 p-8 shadow-sm">
            {loading[activeTab] ? (
              <div className="flex flex-col gap-3">
                {/* Podium skeleton */}
                <div className="flex gap-3 mb-2 animate-pulse">
                  {[2,1,3].map((r) => (
                    <div key={r} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-14 h-14 rounded-full bg-beige/40" />
                      <div className="w-12 h-3 bg-beige/40 rounded" />
                      <div className={`w-full ${r===1?'h-24':r===2?'h-16':'h-12'} bg-beige/30 rounded-t-xl`} />
                    </div>
                  ))}
                </div>
                {[...Array(5)].map((_, i) => <SkeletonRow key={i} />)}
              </div>
            ) : (
              <LeaderboardPanel
                tab={currentTab}
                data={tabData[activeTab]}
                loading={false}
                error={errors[activeTab]}
              />
            )}
          </div>

          {/* Refresh hint */}
          <p className="text-center text-xs text-bistre/25 mt-6">
            Data diperbarui otomatis setiap kali kamu menyelesaikan sesi belajar
          </p>

        </div>
      </div>
    </>
  )
}

export default LeaderboardPage
