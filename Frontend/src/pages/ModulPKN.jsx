/* eslint-disable react-hooks/exhaustive-deps */
//
import React, { useState, useEffect } from "react";
import PopUpAccount from "../components/PopUpAccount";
import NavDashboard from "../components/NavDasboard"
import Search from "../assets/icon/searchIcon.svg";
import Notif from "../assets/icon/notifIcon.svg";
import rBottom from "../assets/icon/rowBottom.svg";
import HookAuth from "../Hook/HookAuth";
import ProgressBar from "../components/ProgressBar";
import TimelineBab from "../components/PathPKN";
import ProgressHook from "../Hook/ProgressHook";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PopUpPKN from "../components/ModulComponent/PopUpPkn";
import data from "../Data/pancasila";
import { Link } from "react-router-dom";
import SkeletonNavbar from "../components/SkeletonLoading/DashboardPage/SkeletonNavbar";
import { useUser } from "../Context/UserContext";

const ModulPKN = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isPknPopupOpen, setIsPknPopupOpen] = useState(false);
  const [selectedModulIndex, setSelectedModulIndex] = useState(0);
  const [soalSelesai, setSoalSelesai] = useState([]);
  const [initialSoalIndex, setInitialSoalIndex] = useState(0);
  const { user } = useUser();
  const { countTotalProgress, fetchProgress, updateProgress, isLoading, dataProgress, error } = ProgressHook();


  useEffect(() => {
    fetchProgress();
  }, []);

  const { totalProgressPkn } = countTotalProgress();

  const handleStartModule = (moduleIndex) => {
    setSelectedModulIndex(moduleIndex);

    // ✅ Resume dari soal terakhir yang dikerjakan
    const modulProgress = dataProgress.find(p => p.modul_id === data[0].modul[moduleIndex].id);
    const lastSoalIndex = modulProgress?.soal_selesai?.length || 0;

    setInitialSoalIndex(lastSoalIndex);
    setSoalSelesai(modulProgress?.soal_selesai || []);
    setIsPknPopupOpen(true);
  };

  const handleSoalSelesai = async (soalData) => {
    const newSoalSelesai = [...soalSelesai, soalData.soalId];
    setSoalSelesai(newSoalSelesai);

    // ✅ Update progress setiap soal diselesaikan
    const modulId = data[0].modul[selectedModulIndex].id;
    const totalSoal = data[0].modul[selectedModulIndex].soal.length;

    await updateProgress(modulId, newSoalSelesai, totalSoal);
  };

  const handleBabSelesai = async (modulIndex) => {
    // ✅ allSelesai sudah lengkap dari popup
    const modulId = data[0].modul[modulIndex].id;
    const bab = data[0].modul[modulIndex].bab;
    const totalSoal = data[0].modul[modulIndex].soal.length;

    // ✅ Update final dengan SEMUA soal
    await updateProgress(modulId, soalSelesai, totalSoal, bab);
    await fetchProgress();

    // ✅ Reset state
    setSoalSelesai([]);
    setInitialSoalIndex(0);
  };

  return (
    <>
      <NavDashboard />
      <div className="flex flex-col lg:ml-10 md:-ml-3 -ml-10 bg-white justify-center items-center overflow-x-hidden">
        <div className="flex flex-col lg:ml-10 md:ml-0 bg-white justify-center items-center">
          <div className="flex flex-col w-full ml-9 lg:ml-10 md:ml-15 mt-2 lg:justify-center md:justify-center items-center">
            {user ? (

              <div className="flex flex-row w-full mx-auto mt-5 md:gap-0 lg:gap-2 justify-center gap-30 items-center">
                {/* SEARCH */}
              <div className="relative flex flex-row justify-center items-center gap-10">
                  <Link to="/academy">
                    <button className="lg:bg-[#3b2a23] transition-all duration-300 hover:-translate-x-1 flex flex-row items-center gap-2 lg:ml-1 text-[#3b2a23] lg:text-white px-6 py-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        className=""
                      >
                        <path
                          fill="currentColor"
                          d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z"
                        ></path>
                      </svg>
                      Back
                    </button>
                  </Link>
                  <input
                    type="search"
                    placeholder="Explore Lessons"
                    className="bg-[#D5D4D4] hidden md:block text-center text-sm rounded-xl w-52 lg:w-150 md:w-110 h-10 outline-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <img src={Search} className=" hidden md:block relative w-5 right-20" />
                </div>

                {/* RIGHT MENU */}
              <div className="-ml-5 flex flex-row items-center gap-5">
                  <button>
                    <img src={Notif} className="w-6 mt-2" alt="Notifications" />
                  </button>

                  <div className="w-10 h-10 bg-bistre rounded-full flex items-center justify-center">
                    <h1 className="text-white font-bold">
                      {user?.name?.charAt(0) || "U"}
                    </h1>
                  </div>

                  <button onClick={() => setIsAccountOpen(!isAccountOpen)} className="cursor-pointer"
                  >
                    <img
                      src={rBottom}
                      className={`w-5 transition ${isAccountOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <PopUpAccount
                    Username={user}
                    Email={user}
                    isOpen={isAccountOpen}
                    onClose={() => setIsAccountOpen(false)}
                  />
                </div>
              </div>
            ) : <SkeletonNavbar />}

            <div className="flex flex-row justify-center items-center mt-10">
              <div className="relative flex flex-col w-full md:w-18/20 lg:full lg:w-250 h-70 py-2 rounded-2xl px-5 md:px-10 bg-icon">
                <h1 className="text-[#F8F3E0] text-2xl md:text-3xl lg:text-4xl mt-10 font-semibold font-monstserrat text-center">
                  Pendidikan Pancasila
                </h1>
                <div className="absolute flex flex-row self-center bottom-25 gap-3 w-[75%]">
                  {isLoading ? (
                    <div className="w-full">
                      <Skeleton height={18} style={{ borderRadius: '2.5rem', width: '100%' }} />
                    </div>
                  ) : (
                    <div className="w-full flex flex-row items-center gap-3">
                      <ProgressBar value={totalProgressPkn} max={100} bgColor={"bg-coffe"} />
                      <p className="text-white font-semibold font-monstserrat">
                        {totalProgressPkn}%
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>


            <TimelineBab
              modulProgress={dataProgress}
              isProgressLoading={isLoading}
              progressError={error}
              onStartModule={handleStartModule}
            />
          </div>
        </div>
      </div>

      {isPknPopupOpen && (
        <PopUpPKN
          key={selectedModulIndex}
          modulIndex={selectedModulIndex}
          onClose={() => {
            setIsPknPopupOpen(false);
            window.location.reload();
          }}
          onSelesai={handleBabSelesai}
          onSoalSelesai={handleSoalSelesai}
          initialSoalIndex={initialSoalIndex}
        />
      )}
      <br />
      <br />
      <br />
    </>
  );
};

export default ModulPKN;