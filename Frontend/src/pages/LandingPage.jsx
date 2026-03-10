import React from "react";
import Navbar from "../components/navbar";
import buku from "../assets/buku.png";
import aboutbuku from "../assets/aboutbuku.png";
import bgabout from "../assets/bgabout.png";

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
            <p className="text-md text-bistre">
              Modern learning platform designed to help middle and high school
              students understand lessons better, learn faster, and achieve
              their academic goals.
            </p>
          </div>
          <div className="flex justify-center items-center w-[40%] h-full">
            <img
              width="100%"
              src={buku}
              alt="gambar buku"
              className="w-full -mb-4.75 pb-3.75"
            />
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

      <section className="relative z-50 -mt-15 w-full flex px-16 flex-col justify-center items-center pb-10 bg-bistre">
        <div className="w-full mt-26 flex flex-col justify-center items-center">
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
              <p className="text-3xl font-semibold text-center text-white">
                100+
              </p>
              <p className="text-sm font-normal text-center text-white">
                Learning Modul
              </p>
            </div>
            <div className="w-full">
              <p className="text-3xl font-semibold text-center text-white">
                80+
              </p>
              <p className="text-sm font-normal text-center text-white">
                Partner Schools
              </p>
            </div>
            <div className="w-full">
              <p className="text-3xl font-semibold text-center text-white">
                97%
              </p>
              <p className="text-sm font-normal text-center text-white">Rate</p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-10">
            <h1 className="text-5xl font-normal text-center mb-5 text-white">
              The Beginning of a <br />
              New <span className="text-khaki">Renaissance</span>
            </h1>
            <div className=" bg-[#F2E0D2] w-[75%] rounded-4xl flex flex-col justify-center items-center p-6 mt-5">
              <div className="w-full flex flex-col justify-center items-center">
                <p className="text-lg font-semibold m-10 text-justify text-[#39221C]">
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
              <div className="w-full relative flex flex-row justify-center items-center gap-3 mt-10 mb-5">
                <div
                  className="w-full relative h-80 rounded-lg bg-cover bg-center p-6 flex flex-col justify-center items-center"
                  style={{ backgroundImage: `url(${bgabout})` }}
                >
                  <div className="w-full h-full flex flex-col justify-center items-center gap-6">
                    <h1 className="text-xl font-bold text-center text-bistre">
                      Curiosity Driven Learning
                    </h1>
                    <p className="text-sm font-normal text-center text-bistre">
                      Belajar dimulai dari rasa ingin tahu. Renaissance
                      mendorong siswa untuk bertanya, mengeksplorasi, dan
                      menemukan makna dari setiap pengetahuan yang dipelajari.
                    </p>
                  </div>
                </div>
                <div
                  className="w-full relative h-80 rounded-lg bg-cover bg-center p-6 flex flex-col justify-center items-center"
                  style={{ backgroundImage: `url(${bgabout})` }}
                >
                  <div className="w-full h-full flex flex-col justify-center items-center gap-6">
                    <h1 className="text-xl z-50 font-bold text-center text-bistre">
                      Creative & Critical Thinking
                    </h1>
                    <p className="text-sm font-normal text-center text-bistre">
                      Tidak hanya memahami materi, siswa diajak untuk berpikir
                      kreatif, menganalisis ide, dan melihat berbagai
                      kemungkinan dalam memecahkan masalah.
                    </p>
                  </div>
                </div>
                <div
                  className="w-full relative h-80 rounded-lg bg-cover bg-center p-6 flex flex-col justify-center items-center"
                  style={{ backgroundImage: `url(${bgabout})` }}
                >
                  <div className="w-full h-full flex flex-col justify-center items-center gap-6">
                    <h1 className="text-xl font-bold text-center text-bistre">
                      Explore Knowledge Freely
                    </h1>
                    <p className="text-sm font-normal text-center text-bistre">
                      Setiap pelajar bebas menjelajahi berbagai bidang
                      pengetahuan, menemukan minatnya, dan mengembangkan potensi
                      dirinya secara mandiri.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex px-16 flex-col justify-center items-center pb-10 bg-bistre">
        <div className="w-full pt-10 flex flex-col justify-center items-center">
          <h1 className="text-4xl text-center text-white">
            Inside The <br />
            <span className="text-khaki">Renaissance Academy</span>
          </h1>
          <div className="mt-10 w-0.5 h-150 bg-[#9B7A5B]"></div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
