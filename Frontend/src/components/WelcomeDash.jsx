import React from 'react'
import Buku from "../assets/welcomeBuku.png"

const WelcomeDash = () => {
  return (
    <>
      <div className="relative bg-[#F2E0D2] w-94 lg:w-225 mt-5 mx-auto p-5 lg:py-12 lg:px-10 rounded-2xl">
        <div className="flex flex-col px-0 lg:px-2 w-[70%] gap-2">
          <h1 className="text-2xl font-monstserrat font-semibold text-[#39221C]">
            <span className="text-icon">Hello,</span> Naresha Letrakusuma
          </h1>
          <p className="text-md font-semibold w-85 lg:w-140 mt-2 pr-0 lg:pr-10 text-[#39221C]">
            Learning is a journey of curiosity and discovery. Continue exploring
            your subjects, deepen your understanding, and unlock new knowledge
            with the help of Renaissance. 
          </p>
          <button className= "hover:scale-105 transition duration-300 ease-in-out bg-bistre text-white self-start mt-2 px-4 py-2 text-[14px] lg:text-[12px] rounded-xl">
            Learn More
          </button>
        </div>
        <img src={Buku} className="hidden lg:block absolute z-10 right-0 -bottom-2 top-2 w-80 mr-3" />
      </div>
    </>
  );
}

export default WelcomeDash
