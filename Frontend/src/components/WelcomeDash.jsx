import React from 'react'
import Buku from "../assets/welcomeBuku.png"

const WelcomeDash = ({ user }) => {
  return (
    <>
      <div className="relative bg-[#F2E0D2] w-94 lg:w-225 md:w-160 mt-5 mx-auto p-5 lg:py-12 lg:px-10 md:py-12 md:px-10 rounded-2xl">
        <div className="flex flex-col px-0 lg:px-2 md:px-2 w-[70%] gap-2">
          <h1 className="text-2xl w-font-monstserrat font-semibold text-[#39221C]">
            <span className="text-icon">Hello,</span> {user.name || 'Renaissance Learner'}!
          </h1>
          <p className="text-md w-90 lg:w-140 md:w-140  font-semibold mt-2 pr-10 text-[#39221C]">
            Belajar adalah sebuah perjalanan rasa ingin tahu dan penemuan. 
            Teruslah menjelajahi subjek Anda, perdalam pemahaman Anda, dan 
            buka pengetahuan baru dengan bantuan Renaissance.
          </p>
          <button className="hover:scale-105 transition duration-300 ease-in-out bg-bistre text-white self-start mt-2 px-4 py-2 text-[14px] lg:text-[13px] md:text-[13px] rounded-xl">
            Pelajari Sekarang
          </button>
        </div>
        <img src={Buku} className="hidden lg:block absolute z-10 right-0 -bottom-2 top-2 w-80 mr-3" />
      </div>
    </>
  );
}

export default WelcomeDash
