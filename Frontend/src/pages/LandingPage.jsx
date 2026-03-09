import React from "react";
import Navbar from "../components/navbar";
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
          <div className="w-[30%] text-center mb-10 leading-loose">
            <p className="text-md text-coffee">
              <span className="text-2xl text-bistre font-bold">6+ Subject</span>
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

      <section className="h-screen w-full flex px-16 flex-col justify-center items-center bg-bistre">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="bg-linear-to-r from-[#9B7A5B]/60 to-[#6A4D3B]/60 rounded-4xl max-w-4xl w-full p-5 flex justify-between items-center text-center">
            <div className=" w-full">
              <p className="text-3xl font-semibold text-center text-white">
                10,000+
              </p>
              <p className="text-sm font-normal text-center text-white">
                Students
              </p>
            </div>
            <div className="w-full">
              <p className="text-3xl font-semibold text-center text-white">100+</p>
              <p className="text-sm font-normal text-center text-white">
                Lessons
              </p>
            </div>
            <div className="w-full">
              <p className="text-3xl font-semibold text-center text-white">80+</p>
              <p className="text-sm font-normal text-center text-white">
                Partner Schools
              </p>
            </div>
            <div className="w-full">
              <p className="text-3xl font-semibold text-center text-white">97%</p>
              <p className="text-sm font-normal text-center text-white">Rate</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
