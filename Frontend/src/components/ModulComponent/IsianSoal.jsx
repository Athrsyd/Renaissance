import { useState } from "react";

export default function IsianSoal({ soal, onCorrect }) {
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);

  const isCorrect =
    soal.jawaban === null
      ? answer.trim() !== ""
      : answer.trim().toLowerCase() === soal.jawaban.toLowerCase();

  const handleCheck = () => {
    setChecked(true);
    if (isCorrect) onCorrect?.();
  };

  const handleReset = () => {
    setAnswer("");
    setChecked(false);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Judul */}
      <h2 className="text-white font-normal font-montserrat text-center text-base leading-snug">
        {soal.judul}
      </h2>

      {/* Pertanyaan */}
      <p className="text-white/90 text-sm leading-relaxed">{soal.pertanyaan}</p>

      {/* Input jawaban */}
      <div className="flex flex-col gap-2">
        <textarea
          value={answer}
          onChange={(e) => !checked && setAnswer(e.target.value)}
          placeholder="Tulis jawabanmu di sini..."
          rows={4}
          className={`
            w-full bg-bistre/60 border-2 rounded-xl px-4 py-3
            text-white text-sm leading-relaxed resize-none outline-none
            placeholder:text-white/30 transition-all
            ${
              checked
                ? isCorrect
                  ? "border-green-400"
                  : "border-red-400"
                : "border-white/20 focus:border-coffe"
            }
          `}
        />

        {/* Hint karakter */}
        {!checked && soal.jawaban && (
          <p className="text-white/30 text-xs text-right">
            {answer.length} karakter
          </p>
        )}
      </div>

      {/* Result */}
      {checked && (
        <div className="flex flex-col gap-2">
          {isCorrect ? (
            <p className="text-[#F2E0D2] font-montserrat text-base text-center">
              Excellent Work! <br />
              <span className="text-white text-sm">
                Your Answer Is Correct.
              </span>
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              <p className="text-red-400 font-montserrat text-base text-center">
                Belum Tepat! <br />
                <span className="text-white text-sm">
                  Jawaban yang benar adalah:
                </span>
              </p>
              {/* Tampilkan jawaban yang benar */}
              <div className="bg-bistre border-2 border-coffe rounded-xl px-4 py-3 text-center">
                <span className="text-white font-semibold text-sm">
                  {soal.jawaban}
                </span>
              </div>
              <button
                onClick={handleReset}
                className="mt-1 text-white/60 text-xs underline text-center"
              >
                Ulangi
              </button>
            </div>
          )}
        </div>
      )}

      {/* Tombol cek */}
      {!checked && (
        <button
          onClick={handleCheck}
          disabled={answer.trim() === ""}
          className="bg-coffe text-white py-2 px-6 w-full rounded-xl text-sm font-semibold disabled:opacity-40 mt-1"
        >
          Cek Jawaban
        </button>
      )}
    </div>
  );
}
