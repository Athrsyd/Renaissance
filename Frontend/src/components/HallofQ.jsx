// import
import { useState } from "react";
import row from "../assets/icon/arrow.png";

const data = [
  {
    id: "1",
    title: "Apa itu Renaissance?",
    p: "Renaissance adalah platform pembelajaran interaktif yang dirancang untuk membantu siswa SMP dan SMA memahami materi pelajaran dengan cara yang lebih menarik, modern, dan mudah dipahami.",
  },
  {
    id: "2",
    title: "Siapa saja yang bisa menggunakan Renaissance?",
    p: "Renaissance adalah platform pembelajaran interaktif yang dirancang untuk membantu siswa SMP dan SMA memahami materi pelajaran dengan cara yang lebih menarik, modern, dan mudah dipahami.",
  },
  {
    id: "3",
    title: "Bagaimana cara mulai belajar di Renaissance?",
    p: "Renaissance adalah platform pembelajaran interaktif yang dirancang untuk membantu siswa SMP dan SMA memahami materi pelajaran dengan cara yang lebih menarik, modern, dan mudah dipahami.",
  },
  {
    id: "4",
    title: "Apakah Renaissance dapat diakses kapan saja?",
    p: "Renaissance adalah platform pembelajaran interaktif yang dirancang untuk membantu siswa SMP dan SMA memahami materi pelajaran dengan cara yang lebih menarik, modern, dan mudah dipahami.",
  },
];

const Card = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" flex flex-col w-1/2">
        <div className="border-2 border-[#9B7A5B] rounded-xl p-5 bg-bistre text-white w-full">
          {/* header */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <h1 className="text-xl flex flex-1">{item.title}</h1>

            <div className="-mt-8 ml-8 ">
              <img
                src={row}
                alt=""
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""} flex shrink-0 w-12 h-10`}
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open ? "max-h-40 mt-3" : "max-h-0"
            }`}
          >
            <p className="text-sm text-gray-200">{item.p}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Box = () => {
  return (
    <>
      <div className="flex flex-col gap-4 -mr-96">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

const Display = () => {
  return (
    <>
      <div className="bg-bistre flex items-center gap-7 w-full h-full pt-30">
        <div className="ml-10 ">
          <h1 className="text-white font-poppins text-6xl ml-20 mr-50">
            The Hall of
            <span className="bg-linear-to-r from-[#9B7F65] to-[#CAB99F] text-transparent bg-clip-text ml-5">
              Questions
            </span>
          </h1>
        </div>
        <Box />
      </div>
    </>
  );
};

export default Display;
