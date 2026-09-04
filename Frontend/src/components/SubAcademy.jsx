/**
 * SubAcademy.jsx
 * Daftar mata pelajaran gaya baris (list) — ikon, jumlah topik, progress,
 * dan tombol "Belajar". Data mapel tetap dari mapelConfig.js (satu sumber
 * kebenaran), progres per mapel diambil dari ProgressHook (countTotalProgress).
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Hourglass,
  BookOpen,
  Landmark,
  Languages,
  Scale,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import SkeletonSubAcademy from "./SkeletonLoading/AcademyPage/SkeletonSubAcademy";
import ProgressBar from "./ProgressBar";
import MAPEL_LIST from "../Config/mapelConfig";

// Ikon per mapel — pakai kunci nama mapel supaya konsisten di semua kelas.
const ICON_MAP = {
  Matematika: "sqrt",
  IPA: <Hourglass size={20} strokeWidth={1.8} />,
  IPS: <BookOpen size={20} strokeWidth={1.8} />,
  Sejarah: <Landmark size={20} strokeWidth={1.8} />,
  "Bahasa dan Sastra": <Languages size={20} strokeWidth={1.8} />,
  "Pendidikan Pancasila": <Scale size={20} strokeWidth={1.8} />,
};

const parseTopikCount = (subTitle) => {
  const match = /\d+/.exec(subTitle || "");
  return match ? Number(match[0]) : 0;
};

const SubjectRow = ({ item, percent = 50 }) => {
  // URL dengan kelas eksplisit agar ModulPage mendapat mapelConfig yang tepat
  const destination = item.slug ? `/academy/kelas-${item.kelas}/${item.slug}` : "/academy";
  const totalTopik = parseTopikCount(item.subTitle);
  const topikSelesai = Math.round((percent / 100) * totalTopik);
  const icon = ICON_MAP[item.mapelBackend];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white border border-beige rounded-2xl px-5 py-4 hover:-translate-y-0.5 hover:shadow-sm transition duration-300">
      <div className="flex items-center gap-4 sm:w-64 shrink-0">
        <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-beige/60 text-bistre">
          {icon === "sqrt" ? <span className="font-semibold">√x</span> : icon}
        </div>
        <div>
          <p className="font-semibold text-bistre">{item.namaMapel}</p>
          <p className="text-xs text-bistre/50">{totalTopik} bab</p>
        </div>
      </div>

      <div className="hidden sm:block sm:w-28 shrink-0">
        <p className="text-xs text-chamoisee font-medium">Bab Selesai</p>
        <p className="text-sm text-bistre/70">
          {topikSelesai}/{totalTopik}
        </p>
      </div>

      <div className="flex flex-row gap-4 items-center justify-between w-full">

        <div className="flex-1 flex items-center md:gap-3">
          <div className="flex-1">
            <ProgressBar value={percent} max={100} bgColor="bg-bistre" />
          </div>
          <span className="text-xs text-bistre/60 w-8 text-right shrink-0">
            {percent}%
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link to={destination}>
            <button className="bg-bistre hover:bg-coffe transition duration-300 text-white text-xs 
          font-semibold rounded-lg px-2 md:px-5 py-1 md:py-2.5 whitespace-nowrap">
              Belajar
            </button>
          </Link>
          <ChevronRight size={16} className="hidden md:block text-bistre/40" />
        </div>
      </div>

    </div>
  );
};

const SubAcademy = ({ searchQuery = "", isLoading = false, countTotalProgress = () => ({}), kelas = null }) => {
  const [sortOrder, setSortOrder] = useState("az");
  const [showAll, setShowAll] = useState(false);

  const progressMap = countTotalProgress();

  // Filter by kelas (default ke semua jika kelas tidak diberikan)
  const filtered = MAPEL_LIST.filter((item) => {
    const kelasMatch = kelas ? item.kelas === Number(kelas) : true;
    const searchMatch = item.namaMapel.toLowerCase().includes(searchQuery.toLowerCase());
    return kelasMatch && searchMatch;
  });

  const sorted = [...filtered].sort((a, b) =>
    sortOrder === "az"
      ? a.namaMapel.localeCompare(b.namaMapel)
      : b.namaMapel.localeCompare(a.namaMapel)
  );

  const visible = showAll ? sorted : sorted.slice(0, 4);

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-bistre text-lg">Subjects</h2>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-bistre/50">Urutkan:</span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-beige/50 text-bistre text-xs font-medium rounded-lg px-3 py-1.5 outline-none cursor-pointer"
          >
            <option value="az">A - Z</option>
            <option value="za">Z - A</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <SkeletonSubAcademy />
      ) : visible.length > 0 ? (
        <div className="flex flex-col gap-3">
          {visible.map((item) => (
            <SubjectRow
              key={item.id}
              item={item}
              percent={progressMap[item.progressKey] ?? 0}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-bistre/60 font-monstserrat mt-5">
          Pelajaran tidak ditemukan.
        </p>
      )}

      {sorted.length > 4 && (
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="w-full flex items-center justify-center gap-1 text-sm text-chamoisee hover:underline mt-4"
        >
          {showAll ? "Sembunyikan" : "Lihat Semua Mata Pelajaran"}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
};

export default SubAcademy;