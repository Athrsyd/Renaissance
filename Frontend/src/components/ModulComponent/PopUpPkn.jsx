import { useState } from "react";
import modul from "../../Data/pancasila";

const RenderSoal = ({ soal, onClick, isLastSoal }) => {
  switch (soal.type) {
    case "quiz":
      return (
        <div className="text-white">
          <h1>Quiz: {soal.judul}</h1>
          <button
            onClick={onClick}
            className="bg-coffe text-white py-2 px-7 rounded-xl"
          >
            {isLastSoal ? "Selesai" : "Next"}
          </button>
        </div>
      );
    case "drag and drop":
      return (
        <div className="text-white">
          <h1>Drag & Drop: {soal.judul}</h1>
          <button
            onClick={onClick}
            className="bg-coffe text-white py-2 px-7 rounded-xl"
          >
            {isLastSoal ? "Selesai" : "Next"}
          </button>
        </div>
      );
    case "TTS":
      return (
        <div className="text-white">
          <h1>TTS: {soal.judul}</h1>
          <button
            onClick={onClick}
            className="bg-coffe text-white py-2 px-7 rounded-xl"
          >
            {isLastSoal ? "Selesai" : "Next"}
          </button>
        </div>
      );

    case "tarik benang":
      return (
        <div className="text-white">
          <h1>Tarik Benang: {soal.judul}</h1>
          <p>{soal.narasi}</p>
          {/* TODO: Buat rancangan UI Tarik Benang di sini */}
          <button
            onClick={onClick}
            className="bg-coffe text-white py-2 px-7 rounded-xl"
          >
            {isLastSoal ? "Selesai" : "Next"}
          </button>
        </div>
      );
    case "puzzle":
      return (
        <div className="text-white">
          <h1>Menyusun Kalimat: {soal.judul}</h1>
          <p>{soal.pertanyaan}</p>
          {/* TODO: Buat rancangan UI Puzzle (Drag and Drop Word) di sini */}
          <button
            onClick={onClick}
            className="bg-coffe text-white py-2 px-7 rounded-xl"
          >
            {isLastSoal ? "Selesai" : "Next"}
          </button>
        </div>
      );
    case "timeline":
      return (
        <div className="text-white">
          <h1>Timeline: {soal.judul}</h1>
          {/* TODO: Buat rancangan UI Timeline Sejarah */}
          <button
            onClick={onClick}
            className="bg-coffe text-white py-2 px-7 rounded-xl"
          >
            {isLastSoal ? "Selesai" : "Next"}
          </button>
        </div>
      );
    case "isian":
    case "materi":
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

const RenderPopUp = ({ modulIndex, onModulChange, onModulSelesai }) => {
  const [isStart, setIsStart] = useState(false);
  const [soalIndex, setSoalIndex] = useState(0);

  const semuaModul = modul[0]?.modul;
  const modulSekarang = semuaModul?.[modulIndex];
  const soalSekarang = modulSekarang?.soal?.[soalIndex];

  const totalSoal = modulSekarang?.soal?.length || 0;
  const isLastSoal = soalIndex === totalSoal - 1;
  const isLastModul = modulIndex === semuaModul?.length - 1;

  const handleNext = () => {
    if (isLastSoal) {
      if (isLastModul) {
        onModulSelesai();
      } else {
        onModulChange(modulIndex + 1);
        setSoalIndex(0);
      }
    } else {
      setSoalIndex(soalIndex + 1);
    }
  };

  return !isStart ? (
    <div
      className="flex flex-col bg-bistre/75 border-2 justify-center items-center
    border-coffe px-20 py-10 rounded-xl text-center gap-3 text-[#F8F3E0]"
    >
      <h1 className="text-4xl pt-3 leading-0 font-bold font-monstserrat">
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
  ) : (
    <div className="bg-bistre/75 border-2 border-coffe px-15 py-5 rounded-xl max-w-2xl">
      {soalSekarang && (
        <div>
          <p className="text-white mb-4">
            Soal {soalIndex + 1} dari {totalSoal}
          </p>
          <RenderSoal
            soal={soalSekarang}
            onClick={handleNext}
            isLastSoal={isLastSoal}
          />
        </div>
      )}
    </div>
  );
};

const PopUpPKN = ({ initialModulIndex = 0, onClose }) => {
  const [modulIndex, setModulIndex] = useState(initialModulIndex);
  const [isComplete, setIsComplete] = useState(false);

  if (isComplete) {
    return (
      <>
        <div className="fixed top-0 left-0 w-full h-full bg-black/15 flex items-center justify-center backdrop-blur-xs z-999">
          <div className="bg-bistre/75 border-2 border-coffe px-15 py-5 rounded-xl text-center">
            <h1 className="text-4xl font-bold text-white">🎉 Selesai!</h1>
            <p className="text-white mt-4">
              Anda telah menyelesaikan semua modul
            </p>
            <button
              onClick={onClose}
              className="mt-6 bg-icon text-white py-2 px-7 rounded-xl border border-white/50 hover:bg-icon/80"
            >
              Tutup
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/15 flex items-center justify-center backdrop-blur-xs z-999"
        onClick={onClose}
      >
        <div onClick={(event) => event.stopPropagation()}>
          <RenderPopUp
            modulIndex={modulIndex}
            onModulChange={setModulIndex}
            onModulSelesai={() => setIsComplete(true)}
          />
        </div>
      </div>
    </>
  );
};

export default PopUpPKN;
