import React from "react";
import LearnInnovate from "../assets/icon/LearnInnovate.png"
import LearnInnovate2 from "../assets/icon/LearnInnovate(2).png";

const WelcomeAcademy = () => {
  return (
    <>
      <div className="relative bg-[#F2E0D2] w-225 h-70 mt-5 mx-auto py-12 px-10 rounded-2xl">
        <img
          src={LearnInnovate}
          className="absolute self-start w-60 -mt-12 -ml-10"
        />
        <div className="flex flex-col w- justify-center px-35 items-center gap-2">
          <h1 className="text-4xl font-monstserrat font-semibold text-[#39221C]">
            <span className="text-icon">Hello,</span> Naresha Letrakusuma
          </h1>
          <p className="text-md text-icon text-center font-semibold font-monstserrat">
            Welcome Grade 7 Academy
          </p>
          <p className="text-md font-monstserrat font-semibold text-center text-[#39221C]">
            Jelajahi mata pelajaran kelas 7 dan mulai perjalanan belajarmu.
            Pilih subjek yang ingin kamu pelajari, pahami setiap materi langkah
            demi langkah, dan tingkatkan pemahamanmu bersama Renaissance.
          </p>
        </div>
        <img
          src={LearnInnovate2}
          className="absolute w-60 right-0 -mt-23"
        />
      </div>
    </>
  );
};

export default WelcomeAcademy;
