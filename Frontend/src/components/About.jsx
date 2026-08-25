import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


import card1Img from "../assets/about-card1.png";
import card2Img from "../assets/about-card2.png";
import card3Img from "../assets/about-card3.png";


const dataAbout = [
  {
    id: 1,
    img: card1Img,
    judul: "Curiosity Driven Learning",
    deskripsi:
      "Belajar dimulai dari rasa ingin tahu. Renaissance mendorong siswa untuk bertanya, mengeksplorasi, dan menemukan makna dari setiap pengetahuan yang dipelajari.",
  },
  {
    id: 2,
    img: card2Img,
    judul: "Creative & Critical Thinking",
    deskripsi:
      "Tidak hanya memahami materi, siswa diajak untuk berpikir kreatif, menganalisis ide, dan melihat berbagai kemungkinan dalam memecahkan masalah.",
  },
  {
    id: 3,
    img: card3Img,
    judul: "Explore Knowledge Freely",
    deskripsi:
      "Setiap pelajar bebas menjelajahi berbagai bidang pengetahuan, menemukan minatnya, dan mengembangkan potensi dirinya secara mandiri.",
  },
];

const AboutCard = ({ item, delay }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={delay}
      className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 w-full sm:w-[80%] md:w-[45%] lg:w-[30%]"
    >
      {/* Area gambar */}
      <div className="w-full aspect-[4/3] bg-[#EFE0CF] flex items-center justify-center overflow-hidden">
        {item.img ? (
          <img
            src={item.img}
            alt={item.judul}
            className="w-full h-full object-contain p-4"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 text-[#8B6F5E] opacity-60 select-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs text-center px-4">Masukkan gambar</span>
          </div>
        )}
      </div>

      {/* Konten teks */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-sm md:text-base font-bold text-[#2C1A14]">
          {item.judul}
        </h3>
        <p className="text-xs md:text-sm text-[#5C3D2E] leading-relaxed">
          {item.deskripsi}
        </p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-bistre py-16 px-6 md:px-16 lg:px-24 flex flex-col items-center gap-10"
    >
      {/* Heading */}
      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
          The Beginning of a{" "}
          <br className="hidden sm:block" />
          New{" "}
          <span className="text-[#C9A97A]">Renaissance</span>
        </h1>
      </div>

      {/* Subtitle */}
      <p
        className="text-center text-white/80 text-sm md:text-base max-w-2xl leading-relaxed"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        Terinspirasi dari semangat era Renaissance, masa ketika ilmu pengetahuan,
        seni, dan pemikiran manusia berkembang pesat, platform ini hadir untuk
        menumbuhkan kembali rasa ingin tahu, kreativitas, dan kecintaan terhadap
        pengetahuan
      </p>

      {/* Cards */}
      <div
        className="w-full flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6"
      >
        {dataAbout.map((item, index) => (
          <AboutCard key={item.id} item={item} delay={index * 150} />
        ))}
      </div>
    </section>
  );
};

export default About;
