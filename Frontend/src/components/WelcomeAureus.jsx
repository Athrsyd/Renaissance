import React, { useEffect, useState } from "react";

  const quickQuestions = [
    "Apa itu pecahan dan bagaimana cara menghitungnya?",
    "Apa fungsi sistem pernapasan pada manusia?",
    "Apa itu hukum Newton dan bagaimana penerapannya?",
  ];

const WelcomeAureus = () => {
  const normalText = "Selamat datang di ";
  const highlightText = "Aureus AI";
  const fullText = normalText + highlightText;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (index < fullText.length) {
      timeout = setTimeout(() => {
        setIndex(index + 1);
      }, 60);
    } else {
      // loop ulang
      timeout = setTimeout(() => {
        setIndex(0);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [index, fullText.length]);

  // potong text berdasarkan index
  const currentNormal = fullText.slice(0, index).slice(0, normalText.length);
  const currentHighlight = fullText.slice(0, index).slice(normalText.length);

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          className="text-icon"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="m9.96 14.863l.886 3.099c.332 1.16 1.976 1.16 2.308 0l.885-3.099a1.2 1.2 0 0 1 .824-.824l3.099-.885c1.16-.332 1.16-1.976 0-2.308l-3.099-.885a1.2 1.2 0 0 1-.824-.824l-.885-3.099c-.332-1.16-1.976-1.16-2.308 0l-.885 3.099a1.2 1.2 0 0 1-.824.824l-3.099.885c-1.16.332-1.16 1.976 0 2.308l3.099.885a1.2 1.2 0 0 1 .824.824M4.43 19.716l.376 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.337 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0l-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.337 0 .388l1.508.377a.2.2 0 0 1 .145.145m14.001-14l.376 1.508c.05.202.337.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.337-.202-.388 0l-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145"
          />
        </svg>
        <h1 className="text-2xl font-semibold font-monstserrat">
          {currentNormal} <span className="text-icon">{currentHighlight}</span>
          <span className="animate-pulse">|</span>
        </h1>
        <p className="text-black text-sm font-semibold mt-2 max-w-xl font-monstserrat">
          Jelajahi pengetahuan bersama Aureus. Ajukan pertanyaan, pahami konsep
          yang sulit, dan temukan cara belajar yang lebih efektif dengan bantuan
          AI.{" "}
        </p>
      </div>

      {/* Quick Questions */}
      <div className="flex flex-col mt-6 justify-center items-center">
        <div className="bg-icon/20 px-4 py-1 rounded-xl">
          <h1 className="font-bold text-center text-bistre">Quick Question</h1>
        </div>
      </div>
      <div className="w-full max-w-2xl bg-bistre p-4 rounded-2xl space-y-2">
        {quickQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => sendMessage(q)}
            className="w-full bg-icon/20 backdrop-blur-md shadow-lg text-white py-2 rounded-full text-sm font-semibold hover:bg-[#6b4a3c]"
          >
            {q}
          </button>
        ))}
      </div>
    </>
  );
};

export default WelcomeAureus;
