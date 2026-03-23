import { useState, useRef } from "react";

export default function TTSSoal({ soal, onCorrect }) {
  const [answers, setAnswers] = useState(
    soal.pertanyaan.map((_, i) => Array(soal.jawaban[i].length).fill("")),
  );
  const [checked, setChecked] = useState(false);
  const inputRefs = useRef([]);

  const isEachCorrect = soal.pertanyaan.map(
    (_, i) =>
      answers[i].join("").toLowerCase() === soal.jawaban[i].toLowerCase(),
  );

  const allCorrect = isEachCorrect.every(Boolean);
  const allFilled = answers.every((row) => row.every((h) => h !== ""));

  const handleKeyDown = (e, i, j) => {
    if (checked) return;

    if (e.key === "Backspace") {
      if (answers[i][j] !== "") {
        // Hapus huruf di kotak ini
        setAnswers((prev) => {
          const next = prev.map((r) => [...r]);
          next[i][j] = "";
          return next;
        });
      } else if (j > 0) {
        // Pindah ke kotak sebelumnya
        inputRefs.current[`${i}-${j - 1}`]?.focus();
        setAnswers((prev) => {
          const next = prev.map((r) => [...r]);
          next[i][j - 1] = "";
          return next;
        });
      }
      return;
    }

    if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
      setAnswers((prev) => {
        const next = prev.map((r) => [...r]);
        next[i][j] = e.key.toUpperCase();
        return next;
      });
      // Auto focus ke kotak berikutnya
      const nextJ = j + 1;
      if (nextJ < soal.jawaban[i].length) {
        inputRefs.current[`${i}-${nextJ}`]?.focus();
      }
    }
  };

  const handleCheck = () => {
    setChecked(true);
    if (allCorrect) onCorrect?.();
  };

  const handleReset = () => {
    setAnswers(
      soal.pertanyaan.map((_, i) => Array(soal.jawaban[i].length).fill("")),
    );
    setChecked(false);
    // Focus ke kotak pertama
    setTimeout(() => inputRefs.current["0-0"]?.focus(), 50);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Judul */}
      <h2 className="text-white font-normal font-montserrat text-center text-base leading-snug">
        {soal.judul}
      </h2>

      {/* Soal */}
      <div className="flex flex-col gap-5">
        {soal.pertanyaan.map((clue, i) => {
          const jawaban = soal.jawaban[i];
          const isBenar = isEachCorrect[i];

          return (
            <div key={i} className="flex flex-col gap-2">
              {/* Clue */}
              <p className="text-white/80 text-xs leading-relaxed">{clue}</p>

              {/* Kotak huruf */}
              <div className="flex items-center gap-1.5">
                {jawaban.split("").map((_, j) => {
                  const filled = answers[i][j] !== "";
                  let boxStyle = "";

                  if (checked) {
                    boxStyle = isBenar
                      ? "bg-bistre border-coffe text-white"
                      : "bg-red-900/40 border-red-400 text-red-300";
                  } else {
                    boxStyle = filled
                      ? "bg-bistre border-coffe text-white"
                      : "bg-transparent border-white/20 text-white";
                  }

                  return (
                    <div
                      key={j}
                      className={`
                        relative w-9 h-9 rounded-lg border-2 transition-all
                        flex items-center justify-center
                        ${boxStyle}
                        ${!checked ? "focus-within:border-coffe/80" : ""}
                      `}
                    >
                      {/* Teks huruf */}
                      <span className="text-sm font-bold pointer-events-none select-none z-10">
                        {checked ? jawaban[j].toUpperCase() : answers[i][j]}
                      </span>

                      {/* Input transparan di atas kotak */}
                      {!checked && (
                        <input
                          ref={(el) => (inputRefs.current[`${i}-${j}`] = el)}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-text caret-transparent"
                          onKeyDown={(e) => handleKeyDown(e, i, j)}
                          onFocus={(e) => e.target.select()}
                          readOnly
                        />
                      )}
                    </div>
                  );
                })}

                {/* Centang */}
                {checked && isBenar && (
                  <span className="text-white/60 text-sm ml-1">✓</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Result */}
      {checked && (
        <div className="text-center mt-1">
          {allCorrect ? (
            <p className="text-[#F2E0D2] font-montserrat text-base">
              Well accomplished!
            </p>
          ) : (
            <>
              <p className="text-red-400 font-montserrat text-base">
                Belum Tepat! <br />
                <span className="text-white text-sm">
                  Coba lagi, kamu pasti bisa.
                </span>
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
          disabled={!allFilled}
          className="bg-coffe text-white py-2 px-6 w-full rounded-xl text-sm font-semibold disabled:opacity-40 mt-1"
        >
          Cek Jawaban
        </button>
      )}
    </div>
  );
}
