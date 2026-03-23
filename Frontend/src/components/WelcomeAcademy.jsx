import React from "react";
import LearnInnovate from "../assets/icon/LearnInnovate.png"
import LearnInnovate2 from "../assets/icon/LearnInnovate(2).png";

const WelcomeAcademy = ({user, grade}) => {
  return (
    <>
      <div className="relative bg-[#F2E0D2] w-90 lg:w-225 md:w-160 md:h-70 h-fit lg:h-70 mt-5 mx-auto py-12 px-10 rounded-2xl">
        <img
          src={LearnInnovate}
          className="absolute self-start lg:w-60 md:w-49 -mt-12 -ml-10 hidden md:block"
        />
        <div className="flex flex-col w- justify-center lg:px-35 items-center gap-2">
          <h1 className="text-xl lg:text-4xl md:text-2xl  font-monstserrat font-semibold  text-[#39221C]">
          <span className="text-icon">Hello,</span> {` ${user.name || 'Student'}!`}
          </h1>
          <p className="text-md text-icon lg:text-center font-semibold font-monstserrat -ml-13 lg:ml-0">
            {grade ? `Welcome ${grade} Academy` : 'Silahkan pilih kelas Anda'}
          </p>
          <p className="text-md font-monstserrat font-semibold lg:text-center text-[#39221C]">
            {!grade && <br />}
            {grade? `Jelajahi mata pelajaran kelas ${grade} dan mulai perjalanan belajarmu. ` : 'Pilih kelas Anda untuk melihat materi yang sesuai. '}
            Pilih subjek yang ingin kamu pelajari, pahami setiap materi langkah
            demi langkah, dan tingkatkan pemahamanmu bersama Renaissance.
          </p>
        </div>
        <img
          src={LearnInnovate2}
          className="absolute w-35 -mt-10 md:w-49 lg:w-60 md:right-0 right-0 md:-mt-14 lg:-mt-23 md:block"
        />
      </div>
    </>
  );
};

export default WelcomeAcademy;
