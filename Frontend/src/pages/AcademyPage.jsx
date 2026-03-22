/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import NavDasboard from "../components/NavDasboard";
import Search from "../assets/icon/searchIcon.svg";
import Notif from "../assets/icon/notifIcon.svg";
import rBottom from "../assets/icon/rowBottom.svg";
import SubAcademy from "../components/SubAcademy";
import WelcomeAcademy from "../components/WelcomeAcademy";
import AcademyGradePopup from "../components/AcademyGradePopup";
import PopUpAccount from "../components/PopUpAccount";

import HookAuth from "../Hook/HookAuth";

import SkeletonNavbar from '../components/SkeletonLoading/DashboardPage/SkeletonNavbar'
import Skeleton from "react-loading-skeleton";
import SkeletonWelcome from "../components/SkeletonLoading/DashboardPage/SkeletonWelcome";
import SkeletonSubAcademy from "../components/SkeletonLoading/AcademyPage/SkeletonSubAcademy";
const GRADE_STORAGE_KEY = "kelasYangDipilih";

const getSavedGrade = () => {
  if (typeof window === "undefined") {
    return "";
  }

  return localStorage.getItem(GRADE_STORAGE_KEY);
};
const grade = getSavedGrade();
const test = () => localStorage.removeItem(GRADE_STORAGE_KEY);

const AcademyPage = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const { fetchUserData, userData } = HookAuth();
  const [selectedGrade, setSelectedGrade] = useState(getSavedGrade);
  const [isGradePopupOpen, setIsGradePopupOpen] = useState(() => !getSavedGrade());
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingDummy, setLoadingDummy] = useState(true)

  useEffect(() => {
    const timer =
      setTimeout(() => {
        setLoadingDummy(false)
      }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleSelectGrade = (grade) => {
    setSelectedGrade(grade);
    localStorage.setItem(GRADE_STORAGE_KEY, grade);
    setIsGradePopupOpen(false);
    window.location.reload()
  };

  useEffect(() => {
    fetchUserData();
  }, []);


  // if (!userData) return <div>Loading...</div>

  return (
    <>
      <NavDasboard />
      <div className="flex flex-col lg:ml-10 md:ml-10 bg-white justify-center items-center overflow-x-hidden">
        {loadingDummy ? (
          <SkeletonNavbar />
        ) : (
          <div className="flex flex-row w-full ml-9 lg:ml-20 md:ml-20 mt-2 lg:justify-center md:justify-center items-center">
            <div className="relative justify-center items-center">
              <input
                type="search"
                placeholder="Explore Lessons"
                className="bg-[#D5D4D4] z-50 text-center text-sm rounded-xl w-52 lg:w-150 md:w-110 h-10 outline-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img src={Search} className="w-5 z-99 -mt-7 ml-2" />
          </div>
          <div className="ml-5 lg:ml-10 md:ml-10 mt-6 gap-5 flex flex-row justify-between">
            <button>
              <img src={Notif} className="w-6 lg:w-7 md:w-7" />
            </button>

            <div className="img w-9 h-9 lg:h-12 lg:w-12 md:h-12 md:w-12 mb-2 bg-bistre rounded-full overflow-hidden">

              <h1 className="text-white text-center text-2xl font-bold mt-2">
                {userData?.name?.charAt(0) || 'U'}
              </h1>

            </div>
            {/* <button onClick={()=>test()}>test</button> */}
            <button
              type="button"
              onClick={() => setIsAccountOpen((prev) => !prev)}
              aria-expanded={isAccountOpen}
              aria-label="Open account menu"
            >
              <img
                src={rBottom}
                className={`w-5 transition-transform duration-300 ${isAccountOpen ? 'rotate-180' : ''}`}
                alt="Account menu"
              />
            </button>
            <PopUpAccount
              Username={userData}
              Email={userData}
              isOpen={isAccountOpen}
              onClose={() => setIsAccountOpen(false)}
            />
          </div>
        </div>
        )}
      {userData ? !searchQuery && <WelcomeAcademy grade={grade} user={userData} /> : <SkeletonWelcome />}
        {loadingDummy? <Skeleton height={13} width={100} style={{marginTop:'0.75rem'}} /> : selectedGrade && (
          <p className="mt-3 text-sm md:text-base font-semibold text-icon">
            Kelas dipilih: {selectedGrade}
          </p>
        )}
        {grade ? (loadingDummy ? <SkeletonSubAcademy /> : (
          <div className="">
            <SubAcademy searchQuery={searchQuery} />
          </div>
        )) : (
          <div className="flex flex-col justify-center items-center mt-10">
            <h2 className="text-lg md:text-xl font-semibold text-bistre/70 mb-4">
              Silakan pilih kelas Anda untuk melihat materi yang sesuai.
            </h2>
            <button
              onClick={() => {setIsGradePopupOpen(true)}}
              className="bg-bistre hover:bg-[#5C4033] text-beige font-bold py-2 px-5 rounded-full"
            >
              Pilih Kelas
            </button>
          </div>

        )}
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
