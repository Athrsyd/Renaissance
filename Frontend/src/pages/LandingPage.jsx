import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import buku from "../assets/buku.png";
import aboutbuku from "../assets/aboutbuku.png";
import bgabout from "../assets/bgabout.png";
import Mapel from "../components/Mapel";
import Counter from "../components/Counter";
import LandingPage2 from "./LandingPage2";
import About from "../components/About";
import Statistik from "../components/Statistik";
import Preload from "../components/Preload";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const LandingPage = () => {
  const token = localStorage.getItem("token");


  return (
    <>
      <Preload />
      <Navbar />
      <section className="lg:h-screen relative z-60 w-full pt-15 px-15 md:pt-18 md:px-40 lg:pt-32 flex lg:px-32 lg:pb-0 flex-col justify-center rounded-b-utama items-center bg-[#F2E0D2]">
        <div className="flex">
          <h1 className="text-xl md:text-3xl lg:text-6xl font-semibold text-center text-bistre mb-2 md:mb-3 lg:mb-6">
            <span className="text-chamoisee">Mengubah</span> Cara Siswa Belajar
            untuk Masa Depan
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:h-screen lg:justify-between items-center gap-0 lg:gap-10">
          <div className="w-full text-center lg:text-start lg:w-[30%] order-1 lg:order-1 lg:pl-7 mb-4 md:mb-2 lg:mb-5 leading-loose">
            <p className=" md:font-semibold text-sm lg:text-lg text-bistre">
              Platform pembelajaran modern yang dirancang untuk membantu siswa
              SMP dan SMA memahami pelajaran dengan lebih baik, belajar lebih
              cepat, dan mencapai tujuan akademis mereka.
            </p>
          </div>
          <div className="flex order-3 lg:order-2 justify-center items-center lg:w-[40%] md:h-full">
            <div
              className=" flex flex-row lg:mb-2 mb-4 justify-center w-[80%] md:w-[70%] lg:w-[30%] 
            items-center absolute bottom-3 rounded-4xl lg:px-3 md:px-4 gap-2 lg:p-2 p-2 md:p-2 backdrop-blur-md 
            shadow-md bg-white/10 border-white/20"
            >
              <a
                href="#features"
                className="bg-bistre text-center hover:scale-95 transition-all duration-300 ease-in-out rounded-4xl w-full lg:w-[60%] py-2 md:py-4 lg:py-2  text-xl text-white"
              >
                <button className="text-center text-lg md:text-xl">
                  Layanan Kami
                </button>
              </a>
              {token ? (
                <Link
                  to="/dashboard"
                  className="bg-black/15 text-center hover:scale-90 transition-all duration-300 ease-in-out rounded-4xl w-[60%] lg:w-[40%] lg:px-0 px-4 py-2 md:py-4 lg:py-2 lg:p-0 p-2 text-xl text-white"
                >
                  <button className="text-center text-lg md:text-xl">
                    Dashboard
                  </button>
                </Link>
              ) : (
                <Link
                  to="/Login"
                  className="bg-black/15 text-center hover:scale-90 transition-all duration-300 ease-in-out rounded-4xl w-[60%] lg:w-[40%] lg:px-0 px-4 py-3 md:py-4 lg:py-2 lg:p-0 p-2 text-xl text-white"
                >
                  <button className="text-center text-sm md:text-xl">
                    Login
                  </button>
                </Link>
              )}
            </div>
            <img
              width="100%"
              src={buku}
              alt="gambar buku"
              className="lg:w-full w-80 -mb-5 pb-4 md:w-90 md:-mb-2 md:pb-1 lg:-mb-4.75 lg:pb-4.5 transition-all duration-700 ease-out"
            />
          </div>
          <div className=" flex order-2 lg:order-3 flex-col lg:w-[30%] md:mt-2 lg:mt-0 text-center gap-2 mb-5 lg:mb-10 leading-loose">
            <p className="text-md md:text-lg text-coffe">
              <span className=" text-xl md:text-2xl text-bistre font-bold">
                6+ Mata Pelajaran
              </span>
              <br />
              Untuk SMP & SMA
            </p>
            <a href="#about">
              <button className="bg-bistre hover:scale-95 transition-all duration-300 ease-in-out text-white px-3 py-2 md:px-4 md:py-1 rounded-xl mt-4 md:mt-0 md:pt-0 lg:px-10 lg:py-1 lg:rounded-full hover:bg-coffe ">
                Pelajari
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-50 -mt-15 w-full flex px-16 flex-col justify-center items-center pb-10 bg-bistre">
        <div className="w-full mt-26 flex flex-col justify-center items-center">
          <Statistik />
          <div
            id="about"
            className="w-full flex flex-col justify-center items-center mt-15 md:mt-15"
          >
            <h1 className="text-4xl md:text-5xl font-normal text-center mb-8 sm:mb-15 text-white">
              Gagasan yang lahirnya <br />
              <span className="text-khaki">Renaissance</span>
            </h1>
            <div className=" bg-[#F2E0D2] w-full md:w-[85%] lg:w-[75%] rounded-4xl flex flex-col justify-center items-center p-4 md:p-6 mt-2 md:mt-5">
              <div className="w-full flex flex-col justify-center items-center">
                <p className="text-sm md:text-lg lg:text-2xl leading-normal px-2 md:px-5 font-semibold m-4 lg:m-10 text-justify text-[#39221C]">
                  Renaissance lahir dari gagasan bahwa belajar bukan sekadar
                  proses menghafal, melainkan perjalanan untuk memahami dunia
                  dengan lebih luas. Terinspirasi dari semangat era Renaissance,
                  masa ketika ilmu pengetahuan, seni, dan pemikiran manusia
                  berkembang pesat, platform ini hadir untuk menumbuhkan kembali
                  rasa ingin tahu, kreativitas, dan kecintaan terhadap
                  pengetahuan pada siswa SMP dan SMA. Melalui pengalaman belajar
                  yang interaktif dan terstruktur, Renaissance mengajak setiap
                  pelajar untuk tidak hanya mempelajari materi, tetapi juga
                  mengeksplorasi ide, mengasah cara berpikir, dan membuka
                  cakrawala baru dalam memahami dunia.
                </p>
                <img
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  src={aboutbuku}
                  alt="gambar buku"
                  className="w-[80%] lg:w-[60%] mt-5 mb-10"
                />
              </div>
              <About />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full overflow-x-hidden flex px-16 flex-col justify-center items-center pb-10 bg-bistre">
        <div
          id="academy"
          className="w-full pt-5 flex flex-col justify-center items-center"
        >
          <h1 className="text-5xl sm:text-5xl md:text-4xl mt-5 sm:mt-0 pb-20 md:pb-10 text-center text-white">
            Inside The <br />
            <span className="text-3xl sm:text-4xl md:text-4xl bg-linear-to-l from-[#CAB99F] to-[#6A4D3B] text-transparent bg-clip-text">
              Renaissance Academy
            </span>
          </h1>
          <Mapel />
          <Link to="/login">
            <h2 className="text-2xl mt-10 mb-15 font-semibold hover:scale-105 transition-all duration-300 ease-in-out bg-linear-to-l from-[#CAB99F] to-icon bg-clip-text text-transparent">
              {" "}
              Learn Now
            </h2>
          </Link>
        </div>
      </section>

      <LandingPage2 />
    </>
  );
};

export default LandingPage;
