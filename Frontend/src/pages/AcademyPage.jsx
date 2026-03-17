import React from "react";
import NavDasboard from "../components/NavDasboard";
import Search from "../assets/icon/searchIcon.svg";
import Notif from "../assets/icon/notifIcon.svg";
import rBottom from "../assets/icon/rowBottom.svg";
import SubAcademy from "../components/SubAcademy";
import WelcomeAcademy from "../components/WelcomeAcademy";

const AcademyPage = () => {
  return (
    <>
      <NavDasboard />
      <div className="flex flex-col ml-10 bg-white justify-center items-center overflow-x-hidden">
        <div className="flex flex-row w-full ml-20 mt-2 justify-center items-center">
          <div className="relative justify-center items-center">
            <input
              type="search"
              placeholder="Explore Lessons"
              className="bg-[#D5D4D4] z-50 text-center text-sm rounded-xl w-150 h-10 outline-0"
            />
            <img src={Search} className="w-5 z-99 -mt-7 ml-2" />
          </div>
          <div className="ml-10 mt-6 gap-5 flex flex-row justify-between">
            <button>
              <img src={Notif} className="w-7" />
            </button>
            <div className="img h-12 w-12 mb-2 bg-bistre rounded-full"></div>
            <button>
              <img src={rBottom} className="w-5" />
            </button>
          </div>
        </div>
        <WelcomeAcademy />
        <div className="">
          <SubAcademy />
        </div>
      </div>
    </>
  );
};

export default AcademyPage;
