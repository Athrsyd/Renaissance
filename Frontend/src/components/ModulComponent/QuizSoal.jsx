import { useState } from "react";

export default function QuizSoal({ soal, onCorrect }) {
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);

  const isCorrect = selected === soal.jawaban;

  const handleSelect = (pilihan) => {
    if (checked) return;
    setSelected(pilihan);
  };

  const handleCheck = () => {
    if (!selected) return;
    setChecked(true);
    if (selected === soal.jawaban) {
      onCorrect?.();
    }
  };

  const handleReset = () => {
    setSelected(null);
    setChecked(false);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Judul */}
      <h2 className="text-white font-normal font-montserrat text-center text-base leading-snug mb-1">
        {soal.judul}
      </h2>
      
      {/* Pertanyaan */}
      <p className="text-white/90 text-sm leading-relaxed mb-1">
        {soal.pertanyaan}
      </p>

      {/* Pilihan */}
      <div className="flex flex-col gap-2">
        {soal.pilihan.map((pilihan) => {
          const isSelected = selected === pilihan;
          const isJawaban = pilihan === soal.jawaban;

          let style = "";

          if (!checked) {
            // Belum dicek — normal & hover
            style = isSelected
              ? "bg-bistre border-coffe text-white"
              : "bg-icon/40 border-transparent text-white hover:bg-icon/60 cursor-pointer";
          } else {
            // Sudah dicek
            if (isJawaban) {
              style = "bg-bistre border-green-400 text-white"; // jawaban benar → bistre
            } else if (isSelected && !isJawaban) {
              style = "bg-red-900/40 border-red-400 text-red-300"; // pilihan salah
            } else {
              style = "bg-icon/20 border-transparent text-white/50"; // lainnya redup
            }
          }

          return (
            <div
              key={pilihan}
              onClick={() => handleSelect(pilihan)}
              className={`
                w-full py-2.5 px-4 rounded-xl border-2 text-sm font-semibold
                text-center transition-all select-none
                ${style}
              `}
            >
              {pilihan}
            </div>
          );
        })}
      </div>

      {/* Result banner */}
      {checked && (
        <div className="text-center mt-1">
          {isCorrect ? (
            <p className="text-[#F2E0D2] font-montserrat text-lg">
              Excellent Work! <br />
              <span className="text-white">Your Answer Is Correct.</span>
            </p>
          ) : (
            <>
              <p className="text-red-400 font-montserrat text-lg">
                Belum Tepat! <br />
                <span className="text-white">Coba Lagi, Kamu Pasti Bisa.</span>
              </p>
              <button
                onClick={handleReset}
                className="mt-2 text-white/60 text-xs underline"
              >
                Ulangi
              </button>
            </>
          )}
        </div>
      )}

      {/* Tombol cek */}
      {!checked && (
        <button
          onClick={handleCheck}
          disabled={!selected}
          className="bg-coffe text-white py-2 px-6 w-full rounded-xl text-sm font-semibold disabled:opacity-40 mt-1"
        >
          Cek Jawaban
        </button>
      )}
    </div>
  );
}
