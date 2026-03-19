import React, { useState } from "react";
import NavDasboard from "../components/NavDasboard";
import Search from "../assets/icon/searchIcon.svg";
import Notif from "../assets/icon/notifIcon.svg";
import rBottom from "../assets/icon/rowBottom.svg";
import SubAcademy from "../components/SubAcademy";
import WelcomeAcademy from "../components/WelcomeAcademy";
import AcademyGradePopup from "../components/AcademyGradePopup";

const GRADE_STORAGE_KEY = "kelasYangDipilih";

const getSavedGrade = () => {
  if (typeof window === "undefined") {
    return "";
  }

  return localStorage.getItem(GRADE_STORAGE_KEY) || "";
};

const AcademyPage = () => {
  const [selectedGrade, setSelectedGrade] = useState(getSavedGrade);
  const [isGradePopupOpen, setIsGradePopupOpen] = useState(() => !getSavedGrade());

  const handleSelectGrade = (grade) => {
    setSelectedGrade(grade);
    localStorage.setItem(GRADE_STORAGE_KEY, grade);
    setIsGradePopupOpen(false);
  };

  return (
    <>
      <NavDasboard />
      <div className="flex flex-col lg:ml-10 md:ml-10 bg-white justify-center items-center overflow-x-hidden">
        <div className="flex flex-row w-full ml-9 lg:ml-20 md:ml-20 mt-2 lg:justify-center md:justify-center items-center">
          <div className="relative justify-center items-center">
            <input
              type="search"
              placeholder="Explore Lessons"
              className="bg-[#D5D4D4] z-50 text-center text-sm rounded-xl w-52 lg:w-150 md:w-110 h-10 outline-0"
            />
            <img src={Search} className="w-5 z-99 -mt-7 ml-2" />
          </div>
          <div className="ml-5 lg:ml-10 md:ml-10 mt-6 gap-5 flex flex-row justify-between">
            <button>
              <img src={Notif} className="w-6 lg:w-7 md:w-7" />
            </button>
            <div className="img w-9 h-9 lg:h-12 lg:w-12 md:h-12 md:w-12 mb-2 bg-bistre rounded-full"></div>
            <button>
              <img src={rBottom} className="w-5" />
            </button>
          </div>
        </div>
        <WelcomeAcademy />
        {selectedGrade && (
          <p className="mt-3 text-sm md:text-base font-semibold text-icon">
            Kelas dipilih: {selectedGrade}
          </p>
        )}
        <div className="">
          <SubAcademy />
        </div>
      </div>

      <AcademyGradePopup
        isOpen={isGradePopupOpen}
        selectedGrade={selectedGrade}
        onSelectGrade={handleSelectGrade}
        onClose={() => setIsGradePopupOpen(false)}
      />
    </>
  );
};

export default AcademyPage;
