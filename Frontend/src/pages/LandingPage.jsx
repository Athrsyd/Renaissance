import React from "react";
import Navbar from "../components/Navbar";
import buku from "../assets/buku.png";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section className="h-screen w-full pt-32 flex px-32 flex-col justify-center items-center bg-[#F2E0D2]">
        <div className="flex">
          <h1 className="text-6xl font-semibold text-center text-bistre mb-6">
            <span className="text-chamoisee">Transforming</span> The Way <br />{" "}
            Students Learn For The Future
          </h1>
        </div>
        <div className="flex flex-row w-full h-screen justify-between items-center gap-10">
          <div className="w-[30%] pl-7 mb-5 leading-loose">
            <p className="text-md text-bistre">
              Modern learning platform designed to help middle and high school
              students understand lessons better, learn faster, and achieve
              their academic goals.
            </p>
          </div>
          <div className="flex justify-center items-center w-[40%] h-full">
            <img width="100%" src={buku} alt="gambar buku" className="w-full" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="w-[30%] text-center mb-5 pr-7 leading-loose">
              <p className="text-md text-bistre">
                <span className="text-2xl font-bold">6+ Subject</span>
                <br />
                For Middle and High School
                <br />
              </p>
            </div>
            <a>
              <button className="bg-chamoisee text-beige px-6 py-3 rounded-full hover:bg-coffee transition-colors">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default LandingPage;
