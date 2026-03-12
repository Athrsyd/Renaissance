import React from 'react'
import bgabout from "../assets/bgabout.png";

const dataAbout = [
  {
    id: 1,
    bgAbout: bgabout,
    judul: "Curiosity Driven Learning",
    deskripsi:
      "Belajar dimulai dari rasa ingin tahu. Renaissance mendorong siswa untuk bertanya, mengeksplorasi, dan menemukan makna dari setiap pengetahuan yang dipelajari.",
  },
  {
    id: 2,
    bgAbout: bgabout,
    judul: "Creative & Critical Thinking",
    deskripsi:
      "Tidak hanya memahami materi, siswa diajak untuk berpikir kreatif, menganalisis ide, dan melihat berbagai kemungkinan dalam memecahkan masalah.",
  },
  {
    id: 1,
    bgAbout: bgabout,
    judul: "Explore Knowledge Freely",
    deskripsi:
      "Setiap pelajar bebas menjelajahi berbagai bidang pengetahuan, menemukan minatnya, dan mengembangkan potensi dirinya secara mandiri.",
  },
];

const AboutListCard = ({item}) => {
  return (
    <>
    <div className="w-full relative h-80 rounded-lg bg-cover bg-center p-8 flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${item.bgAbout})` }}>
      <div className="w-full h-full flex flex-col justify-center items-center gap-6">
        <h1 className="text-xl font-bold text-center text-bistre">
          {item.judul}
        </h1>
        <p className="text-sm font-semibold font-monstserrat text-center text-bistre">
        {item.deskripsi}
        </p>
      </div>
    </div>
    </>
  );
};

const About = () => {
  return (
    <div className="w-full relative flex flex-row justify-center items-center gap-3 mt-10 mb-5">
      {dataAbout.map ((item) => (
        <AboutListCard key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default About
