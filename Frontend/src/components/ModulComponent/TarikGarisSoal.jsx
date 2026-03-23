import { useState, useEffect } from "react";

export default function TarikGarisSoal({ soal, onCorrect }) {
  const [rightItems, setRightItems] = useState([]);
  const [connections, setConnections] = useState([]);
  const [activeLeft, setActiveLeft] = useState(null);
  const [activeRight, setActiveRight] = useState(null);
  const [checked, setChecked] = useState(false);

  // Acak urutan jawaban di sebelah kanan saat komponen dimuat
  useEffect(() => {
    const items = soal.jawaban.map((label, idx) => ({ label, originalIdx: idx }));
    setRightItems(items.sort(() => Math.random() - 0.5));
  }, [soal]);

  const handleLeftClick = (idx) => {
    if (checked) return;
    // Hapus koneksi sebelumnya jika ada
    setConnections(connections.filter((c) => c.left !== idx));
    if (activeRight !== null) {
      setConnections((prev) => [...prev, { left: idx, right: activeRight }]);
      setActiveRight(null);
    } else {
      setActiveLeft(activeLeft === idx ? null : idx);
    }
  };

  const handleRightClick = (idx) => {
    if (checked) return;
    setConnections(connections.filter((c) => c.right !== idx));
    if (activeLeft !== null) {
      setConnections((prev) => [...prev, { left: activeLeft, right: idx }]);
      setActiveLeft(null);
    } else {
      setActiveRight(activeRight === idx ? null : idx);
    }
  };

  const handleReset = () => {
    setConnections([]);
    setChecked(false);
  };

  const handleCekJawaban = () => {
    setChecked(true);
    // Cek apakah semua garis tersambung dengan index yang benar
    const allCorrect =
      connections.length === soal.pilihan.length &&
      connections.every((conn) => conn.left === rightItems[conn.right].originalIdx);

    if (allCorrect) {
      onCorrect?.();
    }
  };

  const allConnected = connections.length === soal.pilihan.length;
  const isCorrect = checked && connections.every((conn) => conn.left === rightItems[conn.right].originalIdx);

  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="text-white font-normal font-monstserrat text-center text-base leading-snug">
        {soal.judul}
      </h2>
      <p className="text-white/70 text-sm text-center font-monstserrat -mt-3 mb-2">
        {soal.pertanyaan || "Tarik garis untuk mencocokkan pasangan yang tepat!"}
      </p>

      {/* Area Bermain */}
      <div className="relative flex justify-between min-h-60 px-2">
        {/* Kolom Kiri (Pilihan) */}
        <div className="flex flex-col justify-around w-2/5 z-10 gap-3">
          {soal.pilihan.map((item, idx) => {
            const isConnected = connections.some((c) => c.left === idx);
            const isSelected = activeLeft === idx;
            return (
              <button
                key={`left-${idx}`}
                onClick={() => handleLeftClick(idx)}
                className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all border-2 text-center flex items-center justify-center h-16
                  ${isSelected ? "bg-coffe border-white text-white scale-105" : 
                    isConnected ? "bg-coffe border-transparent text-white opacity-90" : 
                    "bg-bistre border-transparent text-white hover:bg-coffe/80"}`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Canvas Garis SVG (Responsif berdasarkan letak tombol) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {connections.map((conn, i) => {
            const leftY = (conn.left + 0.5) * (100 / soal.pilihan.length);
            const rightY = (conn.right + 0.5) * (100 / rightItems.length);
            return (
              <line
                key={`line-${i}`}
                x1="40%"
                y1={`${leftY}%`}
                x2="60%"
                y2={`${rightY}%`}
                stroke={checked ? (conn.left === rightItems[conn.right].originalIdx ? "#4ade80" : "#f87171") : "#D5D4D4"}
                strokeWidth="4"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            );
          })}
        </svg>

        {/* Kolom Kanan (Jawaban Acak) */}
        <div className="flex flex-col justify-around w-2/5 z-10 gap-3">
          {rightItems.map((item, idx) => {
            const isConnected = connections.some((c) => c.right === idx);
            const isSelected = activeRight === idx;
            return (
              <button
                key={`right-${idx}`}
                onClick={() => handleRightClick(idx)}
                className={`px-4 py-3 rounded-xl font-semibold text-sm transition-all border-2 text-center flex items-center justify-center h-16
                  ${isSelected ? "bg-icon border-white text-white scale-105" : 
                    isConnected ? "bg-icon border-transparent text-white opacity-90" : 
                    "bg-[#5A4B41] border-transparent text-white hover:bg-icon/80"}`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Banner Hasil & Tombol */}
      {checked ? (
        <div className="flex flex-col items-center mt-3 text-center">
          {isCorrect ? (
            <p className="text-[#F2E0D2] font-monstserrat text-lg">
              Excellent Work! <br /> <span className="text-white">Jawabanmu Benar.</span>
            </p>
          ) : (
            <>
              <p className="text-red-400 font-monstserrat text-lg">
                Belum Tepat! <br /> <span className="text-white">Ada pasangan yang salah, coba lagi.</span>
              </p>
              <button onClick={handleReset} className="mt-2 text-white/60 text-sm underline hover:text-white">
                Ulangi Tarik Garis
              </button>
            </>
          )}
        </div>
      ) : (
        <button
          onClick={handleCekJawaban}
          disabled={!allConnected}
          className="bg-coffe text-white py-2 px-6 w-full rounded-xl text-sm font-semibold disabled:opacity-40 mt-4 transition-all hover:bg-coffe/80"
        >
          Cek Jawaban
        </button>
      )}
    </div>
  );
}