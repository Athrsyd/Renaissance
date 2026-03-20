import React from "react";

const gradeOptions = ["Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

const AcademyGradePopup = ({ isOpen, onSelectGrade, onClose, selectedGrade }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div
        className="w-full max-w-xl md:max-w-4xl rounded-3xl border-2 border-[#AF8D66] bg-[#4A342F]/95 px-4 py-5 sm:px-8 sm:py-7 md:px-10 md:py-8 animate-fade-up"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="text-center text-3xl md:text-6xl text-white font-semibold">Choose Your Grade</h2>

        <div className="mt-6 grid grid-cols-2 gap-4 md:gap-6">
          {gradeOptions.map((grade) => {
            const isActive = selectedGrade === grade;
            return (
              <button
                key={grade}
                type="button"
                onClick={() => onSelectGrade(7)}
                className={`rounded-2xl px-1 py-3 md:py-4 text-lg md:text-2xl font-medium transition duration-300 ${isActive ? "bg-[#AF8D66] text-white" : "bg-[#8B6F5A] text-white hover:bg-[#AF8D66]"}`}
              >
                {grade}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full text-center text-lg md:text-3xl text-white/90 hover:text-white transition duration-300"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AcademyGradePopup;
