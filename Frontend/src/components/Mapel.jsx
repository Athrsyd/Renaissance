import AOS from "aos";
import "aos/dist/aos.css";

const dataMapel = [
  {
    id: 1,
    namaMapel: "Matematika",
    deskripsi:
      "Ilmu yang mempelajari angka, pola, dan logika untuk memahami cara kerja berbagai fenomena di dunia.",
  },
  {
    id: 2,
    namaMapel: "IPA",
    deskripsi:
      "Mempelajari alam semesta melalui pengamatan dan eksperimen, mulai dari fisika, kimia, hingga biologi.",
  },
  {
    id: 3,
    namaMapel: "IPS",
    deskripsi:
      "Ilmu yang membahas kehidupan masyarakat, ekonomi, geografi, dan hubungan antar manusia dalam dunia sosial.",
  },
  {
    id: 4,
    namaMapel: "Sejarah",
    deskripsi:
      "Mempelajari peristiwa masa lalu untuk memahami perkembangan peradaban manusia dan dampaknya pada masa kini.",
  },
  {
    id: 5,
    namaMapel: "Bahasa dan Sastra",
    deskripsi:
      "Mengembangkan kemampuan berbahasa, memahami karya sastra, serta mengekspresikan ide dan perasaan melalui tulisan.",
  },
  {
    id: 6,
    namaMapel: "PKN",
    deskripsi:
      "Memahami nilai-nilai kebangsaan, hukum, serta peran setiap individu dalam membangun masyarakat yang adil dan harmonis.",
  },
];

const MapelList = ({ item }) => {
  return (
    <>
      <div className="flex flex-col md:gap-0 gap-5 md:flex-row w-full lg:w-[60%] md:justify-between items-center text-center">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="300"
          className="bg-icon hover:-translate-x-2 transition-all duration-300 ease-in-out order-1 w-50 md:w-55 lg:w-70 h-20 lg:p-6 rounded-2xl">
          <h2 className="text-lg md:text-xl lg:pt-0 pt-6 font-semibold text-white">{item.namaMapel}</h2>
        </div>
        <div
          className="relative w-55 sm:order-2 order-3 md:w-0.5 h-0.5 md:h-45 lg:h-35 bg-icon"
        ></div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1500"
          className="w-50 order-2 hover:translate-x-2 transition-all duration-300 ease-in-out  lg:w-70">
          <p className="text-sm md:text-md font-medium text-center md:text-justify text-white">{item.deskripsi}</p>
        </div>
      </div>
    </>
  );
};

const Mapel = () => {
  return (
    <>
      <div className="flex flex-col md:gap-0 gap-5 w-full items-center justify-center">
        {dataMapel.map((item) => (
          <MapelList key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Mapel
