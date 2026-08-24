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
} from "lucide-react";

import NavDasboard from "../components/NavDasboard";
import SubAcademy from "../components/SubAcademy";
import WelcomeAcademy from "../components/WelcomeAcademy";
import AcademyGradePopup from "../components/AcademyGradePopup";
import PopUpAccount from "../components/PopUpAccount";
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

const StatCard = ({ icon, value, suffix, label, caption }) => (
  <div className="flex items-center gap-3 bg-white border border-beige rounded-2xl px-4 py-4">
    <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-beige/60 text-bistre">
      {icon}
    </div>
    <div>
      <p className="text-lg font-bold text-bistre leading-none">
        {value}
        {suffix && <span className="text-sm font-normal text-bistre/50"> {suffix}</span>}
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
          {!selectedGrade && (
            <button
              type="button"
              onClick={() => setIsGradePopupOpen(true)}
              className="mt-3 text-sm bg-bistre hover:bg-coffe transition duration-300 text-white font-semibold rounded-xl px-4 py-2 w-fit"
            >
              Pilih Kelas
            </button>
          )}

          {/* ── Statistik ringkas ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <StatCard
              icon={<BookOpen size={20} strokeWidth={1.8} />}
              value={UNIQUE_SUBJECTS.length}
              label="Mata Pelajaran"
              caption="Tersedia"
            />
            <StatCard
              icon={<FileText size={20} strokeWidth={1.8} />}
              value={TOTAL_TOPIK}
              label="Total Topik"
              caption="Siap dipelajari"
            />
            <StatCard
              icon={<Clock size={20} strokeWidth={1.8} />}
              value="-"
              label="Waktu Belajar"
              caption="Belum dilacak"
            />
            <StatCard
              icon={<Target size={20} strokeWidth={1.8} />}
              value={totalTopikSelesai}
              suffix={`/ ${TOTAL_TOPIK}`}
              label="Topik Selesai"
              caption="Terus semangat!"
            />
          </div>

          {/* ── Daftar Subjects ── */}
          {isLoading ? (
            <SkeletonSubAcademy />
          ) : (
            <SubAcademy searchQuery={searchQuery} countTotalProgress={countTotalProgress} />
          )}

          {/* ── Lanjutkan Belajar + Rekomendasi ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#F2E0D2] border border-beige rounded-2xl p-6 min-h-40">
              <h3 className="font-semibold text-bistre">Lanjutkan Belajar</h3>
              {(() => {
                const item = dataProgress?.find((i) => i.progress > 0 && i.progress < 100);
                if (!item) {
                  return (
                    <p className="text-sm text-bistre/70 mt-3">
                      Kamu belum memulai pelajaran apa pun. Pilih mata pelajaran di atas untuk mulai belajar!
                    </p>
                  );
                }
                return (
                  <Link to={`/academy/${encodeURIComponent(item.mapel)}`}>
                    <p className="text-sm text-bistre/70 mt-3">
                      {item.mapel} • {item.materi} — {item.progress}% selesai
                    </p>
                  </Link>
                );
              })()}
            </div>

            <div className="bg-white border border-beige rounded-2xl p-6 min-h-40">
              <h3 className="font-semibold text-bistre">Rekomendasi Untukmu</h3>
              {(() => {
                const belumMulai = UNIQUE_SUBJECTS.find(
                  (s) => (countTotalProgress()[s.progressKey] ?? 0) === 0
                );
                return (
                  <p className="text-sm text-bistre/70 mt-3">
                    {belumMulai
                      ? `Coba mulai "${belumMulai.namaMapel}" — kamu belum menyentuh mata pelajaran ini.`
                      : "Kerja bagus! Semua mata pelajaran sudah kamu mulai."}
                  </p>
                );
              })()}
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