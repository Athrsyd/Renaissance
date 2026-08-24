/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Bell,
  ChevronDown,
  ChevronRight,
  Hourglass,
  BookOpen,
  Sparkles,
  Users,
  MessageSquare,
  Flame,
  CheckCircle2,
} from "lucide-react";

import NavDasboard from "../components/NavDasboard";
import WelcomeDash from "../components/WelcomeDash";
import ProgressBar from "../components/ProgressBar";
import CommunityList from "../components/CommunityList";
import PopUpAccount from "../components/PopUpAccount";
import CommunityHook from "../Hook/CommunityHook";
import ProgressHook from "../Hook/ProgressHook";
import { useUser } from "../Context/UserContext";

// Skeleton
import SkeletonWelcome from "../components/SkeletonLoading/DashboardPage/SkeletonWelcome";
import SkeletonProgress from "../components/SkeletonLoading/DashboardPage/SkeletonProgress";
import SkeletonCommunity from "../components/SkeletonLoading/DashboardPage/SkeletonCommunity";
import SkeletonNavbar from "../components/SkeletonLoading/DashboardPage/SkeletonNavbar";

// ── Data mata pelajaran ringkas untuk kartu di dashboard ──
const SUBJECTS = [
  { id: 1, title: "Matematika", subtitle: "5 Bab", slug: "matematika", icon: "sqrt" },
  { id: 2, title: "IPA", subtitle: "5 Bab", slug: "ipa", icon: <Hourglass size={20} strokeWidth={1.8} /> },
  { id: 3, title: "IPS", subtitle: "5 Bab", slug: "ips", icon: <BookOpen size={20} strokeWidth={1.8} /> },
];

const SubjectMiniCard = ({ item }) => (
  <Link to={`/academy/${item.slug}`}>
    <div className="group h-full flex flex-col justify-between bg-beige/40 hover:bg-beige/70 border border-beige transition duration-300 rounded-2xl p-4 hover:-translate-y-1">
      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white text-bistre shadow-sm">
        {item.icon === "sqrt" ? (
          <span className="font-semibold text-base">√x</span>
        ) : (
          item.icon
        )}
      </div>
      <div className="mt-4">
        <p className="text-lg font-bold text-bistre leading-none">
          {item.subtitle.split(" ")[0]}
        </p>
        <p className="text-sm text-bistre/70 mt-1">{item.title}</p>
      </div>
    </div>
  </Link>
);

const ContinueLearningCard = ({ item }) => {
  const hasData = Boolean(item);
  const mapel = item?.mapel || "Belum ada";
  const materi = item?.materi || "Mulai pelajaran pertamamu";
  const progress = item?.progress || 0;

  return (
    <Link to={hasData ? `/academy/${encodeURIComponent(item.mapel)}` : "/academy"}>
      <div className="h-full flex flex-col justify-between bg-white border border-beige rounded-2xl p-5 hover:-translate-y-1 transition duration-300 cursor-pointer">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-bistre">Continue Learning</h3>
          <span className="text-xs font-medium bg-beige text-bistre rounded-full px-3 py-1 shrink-0">
            {mapel}
          </span>
        </div>
        <p className="text-xl font-bold text-bistre mt-4">{materi}</p>
        <div className="mt-5">
          <ProgressBar value={progress} max={100} bgColor="bg-bistre" />
          <div className="flex justify-end mt-1">
            <span className="text-xs text-bistre/60">{progress}%</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const AureusCommunityCard = ({ variant }) => {
  const isAureus = variant === "aureus";
  return (
    <div className="relative overflow-hidden bg-beige/50 border border-beige rounded-3xl p-6 min-h-56 flex flex-col justify-between">
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-bistre">
          {isAureus ? "Aureus AI" : "Community"}
        </h3>
        <p className="text-sm text-bistre/80 mt-2 w-[85%] lg:w-[70%] leading-relaxed">
          {isAureus
            ? "Tanya apa saja, dapatkan penjelasan instan dengan AI Tutor pribadi kamu."
            : "Bergabung dengan ribuan pelajar ini, berdiskusi dan berbagi ilmu"}
        </p>
        <Link to={isAureus ? "/chatbot" : "/community"}>
          <button className="mt-5 bg-bistre hover:bg-coffe transition duration-300 text-white text-sm font-semibold rounded-xl px-5 py-2.5">
            {isAureus ? "Mulai Tanya" : "Gabung Sekarang"}
          </button>
        </Link>
      </div>

      {/* Illustration */}
      <div className="absolute -right-4 bottom-2 opacity-90 text-chamoisee/70 flex items-end">
        {isAureus ? (
          <>
            <MessageSquare size={72} strokeWidth={1} className="text-coffe/40 -mr-6" />
            <MessageSquare size={100} strokeWidth={1} className="text-coffe/60" />
            <Sparkles size={20} className="absolute -top-4 right-6 text-chamoisee" />
          </>
        ) : (
          <>
            <Users size={56} strokeWidth={1} className="text-coffe/30 mr-2" />
            <Users size={84} strokeWidth={1} className="text-coffe/60" />
            <MessageSquare size={30} strokeWidth={1} className="absolute -top-6 right-2 text-chamoisee" />
          </>
        )}
      </div>
    </div>
  );
};

const ProgressCard = ({ percent, topikSelesai, totalTopik, mapelAktif }) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="bg-white border border-beige rounded-3xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-bistre">Progress</h3>
        <Link to="/academy" className="text-xs text-chamoisee hover:underline flex items-center gap-1">
          Lihat Detail <ChevronRight size={14} />
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative w-32 h-32 shrink-0">
          <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
            <circle cx="60" cy="60" r={radius} fill="none" stroke="#F2E0D2" strokeWidth="12" />
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#6f4d38"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-bistre">{percent}%</span>
            <span className="text-[10px] text-bistre/60 text-center leading-tight mt-1">
              Total Progress
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs text-bistre/60">Topik Selesai</p>
            <p className="text-lg font-bold text-bistre">
              {topikSelesai} <span className="text-sm font-normal text-bistre/50">/ {totalTopik}</span>
            </p>
          </div>
          <div>
            <p className="text-xs text-bistre/60">Mata Pelajaran Aktif</p>
            <p className="text-lg font-bold text-bistre">{mapelAktif}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WEEK_DAYS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

const StreakCard = ({ streakDays }) => {
  return (
    <div className="bg-white border border-beige rounded-3xl p-6">
      <h3 className="font-semibold text-bistre mb-4">Streak</h3>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        <div className="flex items-center gap-3 shrink-0">
          <Flame size={34} className="text-orange-500 fill-orange-500/20" />
          <div>
            <p className="text-2xl font-bold text-bistre leading-none">
              {streakDays} <span className="text-base font-medium text-bistre/60">Hari</span>
            </p>
            <p className="text-xs text-bistre/60 mt-1">Pertahankan streak-mu!</p>
          </div>
        </div>

        <div className="hidden lg:block w-px h-14 bg-beige" />

        <div className="w-full">
          <div className="flex justify-between gap-2">
            {WEEK_DAYS.map((day, idx) => (
              <div key={day} className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    idx < streakDays % 7 || streakDays >= 7
                      ? "bg-bistre text-white"
                      : "bg-beige/60 text-bistre/30"
                  }`}
                >
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-[10px] text-bistre/60">{day}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 inline-block bg-beige/60 text-bistre text-xs font-medium rounded-full px-3 py-1">
            Streak terpanjang: {streakDays} Hari
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const { user } = useUser();
  const { fetchProgress, dataProgress, isLoading } = ProgressHook();
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const { searchResults, searchCommunities, joinCommunity, fetchCommunities, communities, loading } =
    CommunityHook();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchCommunities();
    searchCommunities();
    fetchProgress();
  }, []);

  const query = searchQuery.toLowerCase();

  const showSubject =
    !query ||
    "subject pelajaran materi matematika ipa ips pkn bahasa inggris indonesia bab belajar ".includes(query);
  const showAureusAI =
    !query || "aureus ai chatbot chat bot bantuan artificial intelegent".includes(query);
  const showCommunity = !query || "explore communities komunitas forum".includes(query);

  // ── Turunan data progress ──
  const totalTopik = dataProgress?.length || 0;
  const topikSelesai = dataProgress?.filter((i) => Number(i.progress) === 100).length || 0;
  const avgProgress = totalTopik
    ? Math.round(dataProgress.reduce((acc, cur) => acc + Number(cur.progress || 0), 0) / totalTopik)
    : 0;
  const mapelAktif = totalTopik ? new Set(dataProgress.map((i) => i.mapel)).size : 0;

  const continueItem =
    dataProgress?.find((i) => i.progress > 0 && i.progress < 100) ||
    dataProgress?.[0] ||
    null;

  // Belum ada pelacakan streak di backend — tampilkan 0 sampai tersedia.
  const streakDays = 0;

  return (
    <>
      <NavDasboard />
      <div className="flex flex-col lg:ml-64 md:ml-20 bg-[#FBF9F6] min-h-screen pb-24 lg:pb-10">
        <div className="px-5 sm:px-8 lg:px-10 pt-6 max-w-[1400px] w-full mx-auto">
          {/* ── Top bar ── */}
          {!user ? (
            <SkeletonNavbar />
          ) : (
            <div className="flex flex-row items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-bistre/40" />
                <input
                  type="search"
                  placeholder="Cari pelajaran..."
                  className="bg-white border border-beige w-full h-11 rounded-full pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-khaki/40"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-beige text-bistre hover:bg-beige/50 transition">
                  <Bell size={18} />
                </button>

                <div className="relative">
                  <div className="w-10 h-10 bg-bistre rounded-full flex items-center justify-center">
                    <h1 className="text-white text-base font-bold">
                      {user?.name?.charAt(0) || "U"}
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
                    size={18}
                    className={`transition-transform duration-300 ${isAccountOpen ? "rotate-180" : ""}`}
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

          {/* ── Welcome banner ── */}
          {user ? !searchQuery && <WelcomeDash user={user} /> : <SkeletonWelcome />}

          {/* ── Subjects + Continue Learning ── */}
          {showSubject && (
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-bistre text-lg">Subjects</h2>
                  <Link
                    to="/academy"
                    className="text-xs text-chamoisee hover:underline flex items-center gap-1"
                  >
                    Lihat Semua <ChevronRight size={14} />
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {SUBJECTS.map((item) => (
                    <SubjectMiniCard key={item.id} item={item} />
                  ))}
                </div>
              </div>

              <div className="lg:pt-[38px]">
                {isLoading ? <SkeletonProgress /> : <ContinueLearningCard item={continueItem} />}
              </div>
            </div>
          )}

          {/* ── Aureus AI + Community ── */}
          {(showAureusAI || showCommunity) && (
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {showAureusAI && <AureusCommunityCard variant="aureus" />}
              {showCommunity && <AureusCommunityCard variant="community" />}
            </div>
          )}

          {/* ── Progress + Streak ── */}
          <div id="progress" className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProgressCard
              percent={avgProgress}
              topikSelesai={topikSelesai}
              totalTopik={totalTopik}
              mapelAktif={mapelAktif}
            />
            <StreakCard streakDays={streakDays} />
          </div>

          {/* ── Jelajahi Komunitas (hasil pencarian) ── */}
          {loading ? (
            <SkeletonCommunity />
          ) : (
            showCommunity &&
            searchResults.length > 0 && (
              <div className="w-full flex-col flex mt-8">
                <h2 className="font-semibold text-bistre text-lg mb-2">Jelajahi Komunitas</h2>
                <CommunityList communities={searchResults} onJoin={joinCommunity} isSearchPage={true} />
              </div>
            )
          )}

          {searchQuery && !showSubject && !showAureusAI && !showCommunity && (
            <div className="mt-20 text-center">
              <p className="text-gray-500 font-monstserrat">
                Hasil untuk "{searchQuery}" tidak ditemukan di Dashboard.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
