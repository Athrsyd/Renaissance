import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Bell,
  ChevronDown,
  BookOpen,
  FileText,
  Clock,
  Target,
  Hourglass,
  Landmark,
  Languages,
  Scale,
  Lock,
  TrendingUp,
} from "lucide-react";

import NavDasboard from "../components/NavDasboard";
import SubAcademy from "../components/SubAcademy";
import WelcomeAcademy from "../components/WelcomeAcademy";
import AcademyGradePopup from "../components/AcademyGradePopup";
import PopUpAccount from "../components/PopUpAccount";
import ProgressBar from "../components/ProgressBar";
import { useUser } from "../Context/UserContext";
import ProgressHook from "../Hook/ProgressHook";
import MAPEL_LIST from "../Config/mapelConfig";

import SkeletonNavbar from "../components/SkeletonLoading/DashboardPage/SkeletonNavbar";
import SkeletonWelcome from "../components/SkeletonLoading/DashboardPage/SkeletonWelcome";
import SkeletonSubAcademy from "../components/SkeletonLoading/AcademyPage/SkeletonSubAcademy";

const GRADE_STORAGE_KEY = "kelasYangDipilih";

const getSavedGrade = () => {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(GRADE_STORAGE_KEY);
};

// Daftar mapel unik (satu per nama, dipakai untuk ringkasan "Total Topik").
const UNIQUE_SUBJECTS = MAPEL_LIST.filter(
  (item, idx, arr) => arr.findIndex((i) => i.namaMapel === item.namaMapel) === idx
);
const parseTopikCount = (subTitle) => {
  const match = /\d+/.exec(subTitle || "");
  return match ? Number(match[0]) : 0;
};
const TOTAL_TOPIK = UNIQUE_SUBJECTS.reduce((acc, cur) => acc + parseTopikCount(cur.subTitle), 0);

const ICON_MAP = {
  Matematika: "sqrt",
  IPA: <Hourglass size={18} strokeWidth={1.8} />,
  IPS: <BookOpen size={18} strokeWidth={1.8} />,
  Sejarah: <Landmark size={18} strokeWidth={1.8} />,
  "Bahasa dan Sastra": <Languages size={18} strokeWidth={1.8} />,
  "Pendidikan Pancasila": <Scale size={18} strokeWidth={1.8} />,
};

const SubjectIcon = ({ name, className = "w-11 h-11" }) => {
  const icon = ICON_MAP[name];
  return (
    <div className={`${className} shrink-0 flex items-center justify-center rounded-xl bg-beige/60 text-khaki`}>
      {icon === "sqrt" || !icon ? <span className="font-semibold">√x</span> : icon}
    </div>
  );
};
const StatCard = ({ icon, value, suffix, label, caption }) => (
  <div className="flex items-center gap-3 bg-white border border-beige rounded-2xl p-4">
    <div className="w-15 h-15 shrink-0 flex items-center rounded-full justify-center 
    bg-beige/60 text-[#9B7A5B]">
      {icon}
    </div>
    <div>
      <p className="text-lg font-bold text-[#9B7A5B] leading-none">
        {value}
        {suffix && <span className="text-sm font-normal text-bistre"> {suffix}</span>}
      </p>
      <p className="text-xs font-medium text-bistre/70 mt-1">{label}</p>
      <p className="text-[11px] text-bistre/40">{caption}</p>
    </div>
  </div>
);

const AcademyPage = () => {
  const { user } = useUser();
  const { fetchProgress, dataProgress, countTotalProgress, isLoading } = ProgressHook();
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(getSavedGrade);
  const [isGradePopupOpen, setIsGradePopupOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchProgress();
  }, []);

  const handleSelectGrade = (grade) => {
    setSelectedGrade(grade);
    localStorage.setItem(GRADE_STORAGE_KEY, grade);
    setIsGradePopupOpen(false);
  };

  // ── Statistik ringkas ──
  const totalTopikSelesai = dataProgress?.filter((i) => Number(i.progress) === 100).length || 0;

  // ── Jalur kenaikan kelas ──
  const currentKelas = parseInt(/\d+/.exec(selectedGrade || "")?.[0], 10) || 10;
  const nextKelas = currentKelas + 1;
  const progressMap = countTotalProgress();
  const currentGradeSubjects = MAPEL_LIST.filter((s) => s.kelas === currentKelas);
  const totalTopikGrade = currentGradeSubjects.reduce(
    (acc, cur) => acc + parseTopikCount(cur.subTitle),
    0
  );
  const completedTopikGrade = currentGradeSubjects.reduce((acc, cur) => {
    const percent = progressMap[cur.progressKey] ?? 0;
    return acc + Math.round((percent / 100) * parseTopikCount(cur.subTitle));
  }, 0);
  const percentGrade = totalTopikGrade
    ? Math.round((completedTopikGrade / totalTopikGrade) * 100)
    : 0;
  const subjectsRemaining = currentGradeSubjects.filter(
    (s) => (progressMap[s.progressKey] ?? 0) < 100
  ).length;
  const isReadyToLevelUp = totalTopikGrade > 0 && completedTopikGrade >= totalTopikGrade;
  const continueItem = dataProgress?.find((i) => i.progress > 0 && i.progress < 100);

  return (
    <>
      <NavDasboard />
      <div className="flex flex-col lg:ml-64 md:ml-20 bg-[#FBF9F6] min-h-screen pb-24 lg:pb-10">
        <div className="px-5 sm:px-8 lg:px-10 pt-6 max-w-350 w-full mx-auto">
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

                <div className="w-10 h-10 bg-bistre rounded-full flex items-center justify-center">
                  <h1 className="text-white text-base font-bold">
                    {user?.name?.charAt(0) || "U"}
                  </h1>
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

          {/* ── Judul halaman ── */}
          <div className="mt-6">
            <h1 className="text-3xl font-bold text-bistre">Academy</h1>
            <p className="text-sm text-bistre/50 mt-1">Pilih mata pelajaran untuk memulai belajar</p>
          </div>

          {/* ── Welcome banner ── */}
          {user ? <WelcomeAcademy grade={selectedGrade} user={user} /> : <SkeletonWelcome />}

          {selectedGrade && (
            <div className="flex items-center gap-2 mt-3">
              <p className="text-sm font-semibold text-icon">Kelas dipilih: {selectedGrade}</p>
              <button
                type="button"
                onClick={() => setIsGradePopupOpen(true)}
                className="text-xs text-chamoisee hover:underline"
              >
                Ganti kelas
              </button>
            </div>
          )}
          {/* {!selectedGrade && (
            <button
              type="button"
              onClick={() => setIsGradePopupOpen(true)}
              className="mt-3 text-sm bg-bistre hover:bg-coffe transition duration-300 text-white font-semibold rounded-xl px-4 py-2 w-fit"
            >
              Pilih Kelas
            </button>
          )} */}

          {/* ── Statistik ringkas ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <StatCard
              icon={<BookOpen size={35} strokeWidth={1.8} />}
              value={UNIQUE_SUBJECTS.length}
              label="Mata Pelajaran"
              caption="Tersedia"
            />
            <StatCard
              icon={<FileText size={35} strokeWidth={1.8} />}
              value={TOTAL_TOPIK}
              label="Total bab"
              caption="Siap dipelajari"
            />
            <StatCard
              icon={<Clock size={35} strokeWidth={1.8} />}
              value="-"
              label="Waktu Belajar"
              caption="Belum dilacak"
            />
            <StatCard
              icon={<Target size={35} strokeWidth={1.8} />}
              value={totalTopikSelesai}
              suffix={`/ ${TOTAL_TOPIK}`}
              label="Bab Selesai"
              caption="Terus semangat!"
            />
          </div>

          {/* ── Daftar Subjects ── */}
          {isLoading ? (
            <SkeletonSubAcademy />
          ) : (
            <SubAcademy searchQuery={searchQuery} countTotalProgress={countTotalProgress} />
          )}

          {/* ── Lanjutkan Belajar + Jalur Kenaikan Kelas ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-8">
            {/* Lanjutkan Belajar */}
            <div className="lg:col-span-2 bg-[#F2E0D2] border border-beige rounded-2xl p-6 flex flex-col">
              <h3 className="font-semibold text-bistre">Lanjutkan Belajar</h3>
              <p className="text-xs text-bistre/60 mt-0.5">Materi terakhir yang kamu pelajari</p>

              {continueItem ? (
                <div className="mt-4 bg-white rounded-2xl p-4 flex items-center gap-4">
                  <SubjectIcon name={continueItem.mapel} />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-bistre truncate">{continueItem.mapel}</p>
                    <p className="text-xs text-bistre/60 truncate">{continueItem.materi}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex-1">
                        <ProgressBar value={continueItem.progress} max={100} bgColor="bg-bistre" />
                      </div>
                      <span className="text-xs text-bistre/60 shrink-0">{continueItem.progress}%</span>
                    </div>
                  </div>
                  <Link to={`/academy/${encodeURIComponent(continueItem.mapel)}`}>
                    <button className="bg-bistre hover:bg-coffe transition duration-300 text-white text-xs font-semibold rounded-lg px-4 py-2.5 whitespace-nowrap shrink-0">
                      Lanjutkan
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="mt-4 bg-white rounded-2xl p-4">
                  <p className="text-sm text-bistre/70">
                    Kamu belum memulai pelajaran apa pun. Pilih mata pelajaran di atas untuk mulai belajar!
                  </p>
                </div>
              )}
            </div>

            {/* Jalur Menuju Kenaikan Kelas */}
            <div className="lg:col-span-2 bg-white border border-beige rounded-2xl p-6">
              <div className="flex items-center gap-2">
                <TrendingUp size={18} className="text-bistre" strokeWidth={1.8} />
                <h3 className="font-semibold text-bistre">Jalur Menuju Kenaikan Kelas</h3>
              </div>
              <p className="text-xs text-bistre/60 mt-0.5">
                Selesaikan semua mata pelajaran untuk naik ke Kelas {nextKelas}
              </p>

              <div className="flex items-center gap-5 mt-5">
                <div className="relative w-20 h-20 shrink-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#F2E0D2" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#6f4d38"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 42}
                      strokeDashoffset={2 * Math.PI * 42 - (percentGrade / 100) * (2 * Math.PI * 42)}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-base font-bold text-bistre">{percentGrade}%</span>
                    <span className="text-[9px] text-bistre/50">Kelas {currentKelas}</span>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs text-chamoisee font-medium">
                    {completedTopikGrade} / {subjectsRemaining} mata pelajaran selesai
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {Array(6).fill(1).map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-5 flex-1 min-w-2 rounded-md ${
                          idx < completedTopikGrade ? "bg-bistre" : "bg-beige"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-bistre/60 mt-2">
                    {isReadyToLevelUp
                      ? "Semua mata pelajaran sudah selesai!"
                      : `${subjectsRemaining} mata pelajaran lagi menyelesaikan Kelas ${currentKelas}`}
                  </p>
                </div>
              </div>
            </div>

            {/* Siap Naik Kelas */}
            <div className="lg:col-span-1 bg-bistre rounded-2xl p-5 flex flex-col justify-between text-center items-center">
              <div>
                <p className="font-semibold text-white text-sm">
                  {isReadyToLevelUp ? "Siap Naik Kelas!" : "Siap Naik Kelas"}
                </p>
                <p className="text-[11px] text-beige/70 mt-2 leading-relaxed">
                  {nextKelas <= 12
                    ? `Selesaikan semua mata pelajaran untuk membuka Kelas ${nextKelas}!`
                    : "Kamu sudah di kelas tertinggi — terus pertahankan!"}
                </p>
              </div>
              <button
                type="button"
                disabled={!isReadyToLevelUp || nextKelas > 12}
                onClick={() => isReadyToLevelUp && nextKelas <= 12 && handleSelectGrade(`Kelas ${nextKelas}`)}
                className={`mt-4 w-full flex items-center justify-center gap-1.5 text-xs font-semibold rounded-xl px-3 py-2.5 transition duration-300 ${
                  isReadyToLevelUp && nextKelas <= 12
                    ? "bg-khaki text-white hover:bg-chamoisee cursor-pointer"
                    : "bg-white/10 text-beige/50 cursor-not-allowed"
                }`}
              >
                {nextKelas <= 12 ? (
                  <>
                    {!isReadyToLevelUp && <Lock size={13} />}
                    Kelas {nextKelas} {isReadyToLevelUp ? "Terbuka" : "Terkunci"}
                  </>
                ) : (
                  "Kelas Tertinggi"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AcademyGradePopup
        isOpen={isGradePopupOpen}
        selectedGrade={selectedGrade}
        onSelectGrade={handleSelectGrade}
        onClose={() => setIsGradePopupOpen(false)}
      />
    </>
  );
};

export default AcademyPage;