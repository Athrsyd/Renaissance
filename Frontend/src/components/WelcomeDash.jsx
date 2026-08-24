import React from 'react'
import Buku from "../assets/welcomeBuku.png"

const WelcomeDash = ({ user }) => {
  return (
    <>
      <div className="relative bg-[#F2E0D2] w-full mt-6 p-6 lg:py-10 lg:px-10 rounded-2xl overflow-hidden">
        <div className="flex flex-col relative z-10 w-full lg:w-[65%] gap-2">
          <h1 className="text-2xl font-monstserrat font-semibold text-[#39221C]">
            <span className="text-icon">Hello,</span> {user.name || 'Renaissance Learner'}!
          </h1>
          <p className="text-sm lg:text-base font-medium mt-1 text-[#39221C]/90 leading-relaxed">
            Belajar adalah sebuah perjalanan rasa ingin tahu dan penemuan.
            Teruslah menjelajahi mata pelajaran Anda, perdalam pemahaman Anda, dan
            buka pengetahuan baru dengan bantuan Renaissance.
          </p>
          <button className="hover:scale-105 transition duration-300 ease-in-out bg-bistre text-white self-start mt-3 px-5 py-2 text-sm rounded-xl">
            Pelajari Sekarang
          </button>
        </div>
        <img src={Buku} className="hidden lg:block absolute z-0 right-0 -bottom-2 top-2 w-64 mr-3 opacity-90" />
      </div>
    </>
  );
}

export default WelcomeDash
