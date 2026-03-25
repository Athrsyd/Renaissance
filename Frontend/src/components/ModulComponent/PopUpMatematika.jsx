import { useState } from "react";
import modul from "../../Data/modul";
import DragDropSoal from "./DragDropSoal";
import TTSSoal from "./TTSSoal";
import QuizSoal from "./QuizSoal";
import IsianSoal from "./IsianSoal";
import TarikGarisSoal from "./TarikGarisSoal";

const RenderSoal = ({ soal, onCorrect, isLastSoal, onClick }) => {
  switch (soal.type) {
    case "quiz":
      return (
        <div className="text-white">
          <QuizSoal soal={soal} onCorrect={onCorrect} />
        </div>
      );
    case "drag and drop":
      return (
        <div className="text-white">
          <DragDropSoal soal={soal} onCorrect={onCorrect} />
        </div>
      );
    case "TTS":
      return (
        <div className="text-white">
          <TTSSoal soal={soal} onCorrect={onCorrect} />
        </div>
      );
    case "isian":
      return (
        <div className="text-white">
          <IsianSoal soal={soal} onCorrect={onCorrect} />
        </div>
      );
    case "tarik benang":
      return (
        <div className="text-white">
          <TarikGarisSoal soal={soal} onCorrect={onCorrect} />
        </div>
      );
    default:
      return (
        <div className="text-white">
          <h1>Soal: {soal.judul}</h1>
          <button
            onClick={onClick}
            className="bg-coffe text-white py-2 px-7 rounded-xl"
          >
            {isLastSoal ? "Selesai" : "Next"}
          </button>
        </div>
      );
  }
};

const RenderPopUp = ({ modulIndex, onSelesai, onSoalSelesai, initialSoalIndex = 0 }) => {
  const [isStart, setIsStart] = useState(false);
  const [soalIndex, setSoalIndex] = useState(initialSoalIndex);
  const [isSoalCorrect, setIsSoalCorrect] = useState(false);

  const semuaModul = modul[0]?.modul;
  const modulSekarang = semuaModul?.[modulIndex];
  const soalSekarang = modulSekarang?.soal?.[soalIndex];

  const totalSoal = modulSekarang?.soal?.length || 0;
  const isLastSoal = soalIndex === totalSoal - 1;

  const handleNext = () => {
    setIsSoalCorrect(false);

    // ✅ Saat soal diselesaikan, pass ke parent
    if (soalSekarang?.id && onSoalSelesai) {
      onSoalSelesai({ soalId: soalSekarang.id, soalIndex });
    }



    if (isLastSoal) {

      onSelesai();

    } else {

      setSoalIndex(soalIndex + 1);
    }
  };

  // ✅ Halaman intro bab
  if (!isStart) {
    return (
      <div className="flex flex-col bg-bistre/75 border-2 justify-center items-center border-coffe px-20 py-10 rounded-xl text-center gap-3 text-[#F8F3E0]">
        <h1 className="text-4xl pt-3 font-bold font-monstserrat">
          Bab {modulSekarang?.bab} :
        </h1>
        <h2 className="text-4xl leading-tight font-bold font-monstserrat">
          {modulSekarang?.judul}
        </h2>
        <button
          onClick={() => setIsStart(true)}
          className="bg-icon text-white py-2 px-7 rounded-xl border border-white/50 hover:bg-icon/80"
        >
          Mulai
        </button>
      </div>
    );
  }

  return (
    <div className="bg-bistre/80 border-2 min-h-120 border-coffe rounded-xl max-w-3xl overflow-hidden">
      {soalSekarang && (
        <div className="flex">
          {/* PANEL KIRI */}
          <div className="w-2/4 p-6 flex flex-col gap-4 border-r border-coffe/40">
            <div className="rounded-xl flex-1 flex items-center justify-center min-h-40">
              {soalSekarang.ilustrasi ? (
                <img
                  src={soalSekarang.ilustrasi}
                  alt="ilustrasi"
                  className="w-full h-full object-contain rounded-xl"
                />
              ) : (
                <span className="text-white/30 text-sm text-center px-4">
                  Ilustrasi
                </span>
              )}
            </div>
            {soalSekarang.narasi && (
              <div className="rounded-xl p-4">
                <p className="text-white text-justify font-normal font-monstserrat text-sm leading-relaxed">
                  {typeof soalSekarang.narasi === "string"
                    ? soalSekarang.narasi
                    : soalSekarang.narasi.teks}
                </p>
                {soalSekarang.narasi?.poin && (
                  <ul className="list-disc list-inside mt-2 flex flex-col gap-1">
                    {soalSekarang.narasi.poin.map((p, i) => (
                      <li
                        key={i}
                        className="text-white font-normal font-monstserrat text-sm"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* PANEL KANAN */}
          <div className="w-2/4 p-4 mt-2 flex flex-col">
            <div className="w-[90%] min-h-100 bg-icon/50 border-2 ml-5 border-icon shadow-2xl rounded-2xl px-5 py-5">
              <RenderSoal
                key={`${modulIndex}-${soalIndex}`}
                soal={soalSekarang}
                onClick={handleNext}
                onCorrect={() => setIsSoalCorrect(true)}
                isLastSoal={isLastSoal}
              />
            </div>
            {isSoalCorrect && (
              <div className="w-[90%] flex mt-2 justify-end">
                <button
                  onClick={handleNext}
                  className="text-white/80 hover:text-white text-sm font-normal font-monstserrat flex items-center gap-1 transition-colors"
                >
                  {isLastSoal ? "Selesai" : "Next"} →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const PopUpMatematika = ({ modulIndex = 0, onClose, onBabSelesai, onSoalSelesai, initialSoalIndex = 0 }) => {
  const [isComplete, setIsComplete] = useState(false);

  // ✅ Terima data lengkap dari RenderPopUp
  const handleSelesai = () => {
    setIsComplete(true);
    onBabSelesai?.(modulIndex);  // ✅ PASS allSelesai
  };

  // ✅ Layar selesai
  if (isComplete) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black/15 flex items-center justify-center backdrop-blur-xs z-999">
        <div className="bg-bistre/75 border-2 border-coffe px-15 py-5 rounded-xl text-center">
          <h1 className="text-4xl font-semibold font-monstserrat text-[#F8F3E0]">
            Selamat Anda telah menyelesaikan <br /> Bab {modulIndex + 1}!
          </h1>
          <p className="text-[#F8F3E0] font-monstserrat mt-4 text-xl">
            Gerbang menuju Bab {modulIndex + 2} : {modul[0]?.modul?.[modulIndex + 1]?.judul} <br />telah terbuka</p>
          <button
            onClick={onClose}
            className="mt-6 bg-icon text-white py-2 px-10 rounded-xl border border-white/50 hover:bg-icon/80"
          >
            Selesai
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/15 flex items-center justify-center backdrop-blur-xs z-999"

      onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <RenderPopUp
          modulIndex={modulIndex}
          onSelesai={handleSelesai}  // ✅ Ini akan menerima allSelesai
          onBabSelesai={onBabSelesai}
          onSoalSelesai={onSoalSelesai}
          initialSoalIndex={initialSoalIndex}
        />
      </div>
    </div>
  );
};

export default PopUpMatematika;