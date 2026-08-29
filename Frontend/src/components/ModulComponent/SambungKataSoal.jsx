import { useState, useEffect } from "react";

export default function SambungKataSoal({ soal, onCorrect, onWrong }) {
  const [availableWords, setAvailableWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [checked, setChecked] = useState(false);

  // Acak urutan kata di awal, tiap kata dikasih id stabil (bukan index)
  useEffect(() => {
    const withId = soal.pilihan.map((word, i) => ({
      id: `${word}-${i}-${Math.random().toString(36).slice(2, 7)}`,
      word,
    }));
    setAvailableWords([...withId].sort(() => Math.random() - 0.5));
    setSelectedWords([]);
    setChecked(false);
  }, [soal]);

  const handleSelectWord = (item) => {
    if (checked) return;
    setSelectedWords((prev) => [...prev, item]);
    setAvailableWords((prev) => prev.filter((w) => w.id !== item.id));
  };

  const handleDeselectWord = (item) => {
    if (checked) return;
    setAvailableWords((prev) => [...prev, item]);
    setSelectedWords((prev) => prev.filter((w) => w.id !== item.id));
  };

  const handleReset = () => {
    const withId = soal.pilihan.map((word, i) => ({
      id: `${word}-${i}-${Math.random().toString(36).slice(2, 7)}`,
      word,
    }));
    setAvailableWords([...withId].sort(() => Math.random() - 0.5));
    setSelectedWords([]);
    setChecked(false);
  };

  const handleCekJawaban = () => {
    setChecked(true);
    const userAnswer = selectedWords
      .map((w) => w.word)
      .join(" ")
      .toLowerCase();
    const correctAnswer = soal.jawaban.join(" ").toLowerCase();

    if (userAnswer === correctAnswer) {
      onCorrect?.();
    } else {
      onWrong?.();
    }
  };

  const isComplete = availableWords.length === 0;
  const isCorrect =
    checked &&
    selectedWords
      .map((w) => w.word)
      .join(" ")
      .toLowerCase() === soal.jawaban.join(" ").toLowerCase();

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-white font-normal font-monstserrat text-center text-base leading-snug">
        {soal.judul}
      </h2>
      <p className="text-white/70 text-sm text-center font-monstserrat -mt-2 mb-2">
        {soal.pertanyaan ||
          "Susunlah kata-kata berikut menjadi kalimat yang benar!"}
      </p>

      {/* Kotak Jawaban (Tempat Menyusun Kata) */}
      <div className="min-h-24 p-4 border-2 border-dashed border-white/30 bg-black/10 rounded-xl flex flex-wrap gap-2 content-start">
        {selectedWords.length === 0 && !checked && (
          <span className="text-white/30 text-sm italic m-auto">
            Pilih kata dari bawah ke sini...
          </span>
        )}
        {selectedWords.map((item) => (
          <button
            key={item.id}
            onClick={() => handleDeselectWord(item)}
            className="px-4 py-2 bg-coffe text-white rounded-lg font-semibold text-sm hover:bg-red-500/80 transition-colors shadow-md"
          >
            {item.word}
          </button>
        ))}
      </div>

      {/* Kotak Pilihan Kata (Word Bank) */}
      <div className="min-h-20 p-4 bg-bistre/50 rounded-xl flex flex-wrap gap-2 justify-center">
        {availableWords.map((item) => (
          <button
            key={item.id}
            onClick={() => handleSelectWord(item)}
            className="px-4 py-2 bg-icon text-white rounded-lg font-semibold text-sm hover:bg-icon/80 transition-colors shadow-md"
          >
            {item.word}
          </button>
        ))}
        {availableWords.length === 0 && !checked && (
          <span className="text-white/50 text-sm italic m-auto">
            Semua kata telah digunakan
          </span>
        )}
      </div>

      {/* Banner Hasil & Tombol */}
      {checked ? (
        <div className="flex flex-col items-center mt-2 text-center">
          {isCorrect ? (
            <p className="text-[#F2E0D2] font-monstserrat text-lg">
              Excellent Work! <br />{" "}
              <span className="text-white">Susunan kalimatmu Benar.</span>
            </p>
          ) : (
            <>
              <p className="text-red-400 font-monstserrat text-lg">
                Belum Tepat! <br />{" "}
                <span className="text-white">Susunan kalimat salah.</span>
              </p>
              <p className="mt-1 text-white/40 text-xs">
                Jawaban tidak bisa diulang.
              </p>
            </>
          )}
        </div>
      ) : (
        <button
          onClick={handleCekJawaban}
          disabled={!isComplete}
          className="bg-coffe text-white py-2 px-6 w-full rounded-xl text-sm font-semibold disabled:opacity-40 mt-2 transition-all hover:bg-coffe/80"
        >
          Cek Jawaban
        </button>
      )}
    </div>
  );
}
