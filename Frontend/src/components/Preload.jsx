import { useEffect, useState } from "react";
<link
  href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
  rel="stylesheet"
></link>;

const text = `"Learning is the only thing the mind never exhaust, never fears, and never regrets."`;

export default function PreloaderQuote() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [done, setDone] = useState(false);

  const words = text.split(" ");

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => {
        if (prev >= words.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 510);

    setTimeout(
      () => {
        setDone(true);
      },
      words.length * 510 + 1200,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed font-[Playfair_Display] inset-0 z-9999 flex items-center justify-center bg-[#0f0f0f] text-white transition-all duration-700 ${
        done
          ? "opacity-0 -translate-y-full blur-sm pointer-events-none invisible"
          : "opacity-100 translate-y-0 blur-0"
      }`}
    >
      <div className="max-w-2xl px-6">
        <p className="text-xl md:text-2xl font-serif leading-relaxed">
          {words.map((word, i) => (
            <span
              key={i}
              className={`inline-block mr-2 ${
                i < visibleIndex ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
            >
              {word}
            </span>
          ))}
        </p>

        <div
          className={`mt-8 text-right transition-opacity duration-700 ${
            visibleIndex >= words.length ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-serif">— Leonardo Da Vinci</p>
          <p className="text-sm text-gray-400">From the notebooks of Leonardo da Vinci</p>
        </div>
      </div>
    </div>
  );
}
