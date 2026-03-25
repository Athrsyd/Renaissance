import React from 'react'
import bgabout from "../assets/bgabout.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const dataAbout = [
  {
    id: 1,
    bgAbout: bgabout,
    judul: "Pembelajaran yang Didorong oleh Rasa Ingin Tahu",
    deskripsi:
      "Belajar dimulai dari rasa ingin tahu. Renaissance mendorong siswa untuk bertanya, mengeksplorasi, dan menemukan makna dari setiap pengetahuan yang dipelajari.",
  },
  {
    id: 2,
    bgAbout: bgabout,
    judul: "Berfikir Kritis dan Kreatif",
    deskripsi:
      "Tidak hanya memahami materi, siswa diajak untuk berpikir kreatif, menganalisis ide, dan melihat berbagai kemungkinan dalam memecahkan masalah.",
  },
  {
    id: 3,
    bgAbout: bgabout,
    judul: "Menjelajahi Pengetahuan Secara Bebas",
    deskripsi:
      "Setiap pelajar bebas menjelajahi berbagai bidang pengetahuan, menemukan minatnya, dan mengembangkan potensi dirinya secara mandiri.",
  },
];

const AboutListCard = ({item}) => {
  return (
    <>
      <div
        data-aos="flip-left"
        data-aos-duration="1500"
        className=" w-[75%] md:w-[48%] lg:w-[32%] relative h-full md:h-75 lg:h-80 rounded-lg bg-cover bg-center p-8 md:p-6 flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${item.bgAbout})` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center gap-6">
          <h1 className={`pl-2 md:pl-0  ${item.id === 1 ? 'text-[12px] md:text-md lg:text-lg' : 'text-[15px] md:text-md lg:text-lg'} font-bold text-center text-bistre`}>
            {item.judul}
          </h1>
          <p className="text-[10px] sm:text-[12px] md:text-sm font-semibold font-monstserrat text-center text-bistre">
            {item.deskripsi}
          </p>
        </div>
      </div>
    </>
  );
};

const About = () => {
  return (
    <div className="w-full relative flex flex-wrap md:flex-row justify-center items-center gap-4 sm:mt-10 mb-5">
      {dataAbout.map ((item) => (
        <AboutListCard key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default About
