import { useState } from "react";
import soundCorrect   from "../../assets/sfx/benar.mp3";
import soundIncorrect from "../../assets/sfx/salah.mp3";

/**
 * QuizSoal
 *
 * Props:
 *   soal       — objek soal { judul, pertanyaan, pilihan[], jawaban }
 *   onCorrect  — dipanggil saat jawaban benar
 *   onWrong    — dipanggil saat jawaban salah (opsional, untuk placement)
 *   noRetry    — jika true, jawaban salah TIDAK bisa diulang (untuk placement test)
 */
export default function QuizSoal({ soal, onCorrect, onWrong, noRetry = false }) {
  const [selected, setSelected] = useState(null);
  const [checked,  setChecked]  = useState(false);

  const isCorrect = selected === soal.jawaban;

  const handleSelect = (pilihan) => {
    if (checked) return;        // sudah dijawab → lock
    setSelected(pilihan);
  };

  const handleCheck = () => {
    if (!selected) return;
    setChecked(true);

    const audio = new Audio(isCorrect ? soundCorrect : soundIncorrect);
    audio.play().catch(() => {});

    if (isCorrect) {
      onCorrect?.();
    } else {
      onWrong?.();              // beri tahu parent jawaban salah
    }
  };

  // Tidak ada handleReset — setelah jawab tidak bisa ulang

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Judul */}
      {soal.judul && (
        <h2 className="text-white font-normal font-montserrat text-center text-base leading-snug mb-1">
          {soal.judul}
        </h2>
      )}

      {/* Pertanyaan */}
      <p className="text-white/90 text-sm leading-relaxed mb-1">
        {soal.pertanyaan}
      </p>

      {/* Pilihan */}
      <div className="flex flex-col gap-2">
        {soal.pilihan.map((pilihan) => {
          const isSelected = selected === pilihan;
          const isJawaban  = pilihan === soal.jawaban;

          let style = "";
          if (!checked) {
            style = isSelected
              ? "bg-bistre border-coffe text-white"
              : "bg-icon/40 border-transparent text-white hover:bg-icon/60 cursor-pointer";
          } else {
            if (isJawaban) {
              style = "bg-bistre border-green-400 text-white";
            } else if (isSelected && !isJawaban) {
              style = "bg-red-900/40 border-red-400 text-red-300";
            } else {
              style = "bg-icon/20 border-transparent text-white/50";
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

      {/* Result banner — tanpa tombol Ulangi */}
      {checked && (
        <div className="text-center mt-1">
          {isCorrect ? (
            <p className="text-[#F2E0D2] font-montserrat text-lg">
              Excellent Work! <br />
              <span className="text-white">Your Answer Is Correct.</span>
            </p>
          ) : (
            <p className="text-red-400 font-montserrat text-lg">
              Belum Tepat!{" "}
              {noRetry && (
                <span className="block text-white/70 text-sm mt-1">
                  Jawaban benar: <strong className="text-green-400">{soal.jawaban}</strong>
                </span>
              )}
            </p>
          )}
        </div>
      )}

      {/* Tombol Cek Jawaban */}
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