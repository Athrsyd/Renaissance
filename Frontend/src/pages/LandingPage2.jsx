import React from "react";
import Experience from "../components/RenaissanceXP";
import Content from "../components/CardTesti";
import Display from "../components/HallofQ";
import Footer from "../components/Footer";


// Assets Icon
import iconBintang from "../assets/icon/iconBintang.png";




const Bridging = () => {
  return (
    <div className="mt-35 w-full bg-[#CBB799]">
      <div className="flex items-center gap-16 font-poppins text-5xl text-[#f4e4d8] font-bold bg-[#9B7A5B] p-7 justify-center -rotate-2 overflox-x-hidden w-max animate-slide-text -mt-6">
        <img src={iconBintang} alt="" className="w-12 h-12" />
        <h1>Learn</h1>
        <img src={iconBintang} alt="" className="w-12 h-12" />
        <h1>Innovate</h1>
        <img src={iconBintang} alt="" className="w-12 h-12" />
        <h1>Evolve</h1>
        <img src={iconBintang} alt="" className="w-12 h-12" />
        <h1>Learn</h1>
        <img src={iconBintang} alt="" className="w-12 h-12" />
        <h1>Innovate</h1>
        <img src={iconBintang} alt="" className="w-12 h-12" />
        <h1>Evolve</h1>
        <img src={iconBintang} alt="" className="w-12 h-12" />
        <h1>Learn</h1>
        <img src={iconBintang} alt="" className="w-12 h-12" />
        <h1>Innovate</h1>
        <img src={iconBintang} alt="" className="w-12 h-12" />
        <h1>Evolve</h1>
        <img src={iconBintang} alt="" className="w-12 h-12" />
      </div>
    </div>
    )
};

const LandingPage2 = () => {

  return (
    // Renaissance Nixon Areas
    <section className=" bg-[#F2E0D2] h-full pt-10 overflow-x-hidden overflow-y-hidden rounded-t-utama -mt-15">
      <div id="features" className="flex items-center text-bistre text-5xl justify-center font-medium gap-15 font-poppins">
        <img src={iconBintang} alt="" className="w-11 h-11 self-center" />
        <h1 className="m-0">Renaissance Experience</h1>
        <img
          src={iconBintang}
          alt=""
          className="w-11 h-11 self-center mt-0.5"
        />
      </div>

      {/* Display Kotak */}
      <Experience />

      {/* Container Bridging */}
      <Bridging />

      {/* What Student Say */}
      <Content />

      {/* Hall of Question */}
      <Display />

      {/* footer */}
      <Footer />
    </section>
  );
};

export default LandingPage2;
