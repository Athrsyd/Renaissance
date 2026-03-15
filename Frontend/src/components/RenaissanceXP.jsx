// import
import iconKertas from "../assets/icon/iconKertas.png";
import iconComunity from "../assets/icon/iconComunity.png";
import iconChart from "../assets/icon/iconChart.png";
import iconAi from "../assets/icon/iconAi.png";

const data = [
  {
    id: "1",
    judul: "Interactive Learn",
    img: iconKertas,
    deskirpsi:
      "Materi pembelajaran disajikan secara interaktif melalui visual, latihan soal, dan aktivitas yang membantu siswa memahami konsep dengan lebih mudah.",
  },

  {
    id: "2",
    judul: "AI Assistant",
    img: iconAi,
    deskirpsi:
      " Didukung oleh kecerdasan buatan yang membantu siswa menjawab pertanyaan, menjelaskan materi, dan memberikan panduan belajar secara instan.",
  },

  {
    id: "3",
    judul: "Community",
    img: iconComunity,
    deskirpsi:
      "Siswa dapat berdiskusi, berbagi pengetahuan, dan saling membantu dalam komunitas belajar yang aktif dan kolaboratif.",
  },

  {
    id: "4",
    judul: "Progress Learn",
    img: iconChart,
    deskirpsi:
      "Memantau perkembangan belajar melalui statistik dan pencapaian yang membantu siswa tetap termotivasi.",
  },
];

const Card = ({ item }) => {
  return (
    <>
      <div className="bg-bistre w-90 lg:w-120 h-75 p-7 rounded-2xl md:w-95">
        <div className="flex items-center border-b-3 border-[#9B7A5B] font-poppins pb-1.5">
          <img src={item.img} alt="" className="w-15 h-15" />
          <h1 className="bg-linear-to-r from-[#9B7A5B] to-[#CAB99F] text-transparent bg-clip-text text-2xl font-semibold ml-2.5">
            {item.judul}
          </h1>
        </div>

        <div className="mt-5 text-white font-medium font-monstserrat text-lg">
          <p>{item.deskirpsi}</p>
        </div>
      </div>
    </>
  );
};

const Experience = () => {
  return (
    <>
      <div className="mt-20 flex justify-center md:flex-row flex-wrap gap-10">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Experience
