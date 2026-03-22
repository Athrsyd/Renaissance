import React from 'react'
import bgabout from "../assets/bgabout.png";

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
        className=" w-[60%] sm:w-[48%] md:w-[32%] relative h-60 md:h-80 rounded-lg bg-cover bg-center p-4  md:p-8 flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${item.bgAbout})` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center gap-6">
          <h1 className={`pl-2 md:pl-0  ${item.id === 1 ? 'text-sm sm:text-md md:text-lg' : 'text-sm sm:text-md md:text-lg'} font-bold text-center text-bistre`}>
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
