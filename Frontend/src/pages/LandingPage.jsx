import React from "react";
import Navbar from "../components/navbar";
import { Link } from 'react-router-dom'
import buku from "../assets/buku.png";
import aboutbuku from "../assets/aboutbuku.png";
import bgabout from "../assets/bgabout.png";
import Mapel from "../components/Mapel";
import Counter from "../components/Counter";
import LandingPage2 from "../components/LandingPage2";
import About from "../components/About";
import Statistik from "../components/Statistik";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section className="h-screen relative z-60 w-full pt-32 flex px-32 flex-col justify-center rounded-b-utama items-center bg-[#F2E0D2]">
        <div className="flex">
          <h1 className="text-6xl font-semibold text-center text-bistre mb-6">
            <span className="text-chamoisee">Transforming</span> The Way <br />{" "}
            Students Learn For The Future
          </h1>
        </div>
        <div className="flex flex-row w-full h-screen justify-between items-center gap-10">
          <div className="w-[30%] pl-7 mb-5 leading-loose">
            <p className="text-lg text-bistre">
              Modern learning platform designed to help middle and high school
              students understand lessons better, learn faster, and achieve
              their academic goals.
            </p>
          </div>
          <div className="flex justify-center items-center w-[40%] h-full">
            <div className=" flex flex-row justify-center w-[30%] items-center absolute bottom-3 rounded-4xl px-4 gap-1 p-2  backdrop-blur-md shadow-md bg-white/10 border-white/20">
              <button className="bg-bistre rounded-4xl w-[60%] py-2 p-2 px-5 text-xl text-white">
                Start Learning
              </button>
              <Link to="/Login" className="bg-black/15 text-center rounded-4xl w-[40%] px-4 py-2 p-2 text-xl text-white">
                <button className="text-center">
                  Login
                </button>
              </Link>
            </div>
            <img
              width="100%"
              src={buku}
              alt="gambar buku"
              className="w-full -mb-4.75 pb-3.75"
            />
          </div>
          <div className=" flex flex-col w-[30%] text-center gap-2 mb-10 leading-loose">
            <p className="text-lg text-coffee">
              <span className="text-3xl text-bistre font-bold">6+ Subject</span>
              <br />
              For Middle and High School
            </p>
            <a>
              <button className="bg-bistre text-white px-10 py-1 rounded-full hover:bg-coffee transition-colors">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-50 -mt-15 w-full flex px-16 flex-col justify-center items-center pb-10 bg-bistre">
        <div className="w-full mt-26 flex flex-col justify-center items-center">
          <Statistik/>
          <div className="w-full flex flex-col justify-center items-center mt-15">
            <h1 className="text-5xl font-normal text-center mb-15 text-white">
              The Beginning of a <br />
              New <span className="text-khaki">Renaissance</span>
            </h1>
            <div className=" bg-[#F2E0D2] w-[75%] rounded-4xl flex flex-col justify-center items-center p-6 mt-5">
              <div className="w-full flex flex-col justify-center items-center">
                <p className="text-2xl leading-normal px-5 font-semibold m-10 text-justify text-[#39221C]">
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
                  src={aboutbuku}
                  alt="gambar buku"
                  className="w-[60%] mt-5 mb-10"
                />
              </div>
                <About/>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex px-16 flex-col justify-center items-center pb-10 bg-bistre">
        <div className="w-full pt-5 flex flex-col justify-center items-center">
          <h1 className="text-4xl pb-10 text-center text-white">
            Inside The <br />
            <span className="bg-linear-to-l from-[#CAB99F] to-[#6A4D3B] text-transparent bg-clip-text">
              Renaissance Academy
            </span>
          </h1>
          <Mapel />
          <h2 className="text-2xl mt-10 mb-15 font-semibold bg-linear-to-l from-[#CAB99F] to-[#9B7A5B] bg-clip-text text-transparent">
            {" "}
            Learn Now
          </h2>
        </div>
      </section>

      <LandingPage2 />
    </>
  );
};

export default LandingPage;
