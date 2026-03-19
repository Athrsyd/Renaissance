import React from "react";

const SubAcademys = [
  {
    id: 1,
    title: "Matematika",
    subTitle: "6 Bab",
  },
  {
    id: 2,
    title: "IPA",
    subTitle: "6 Bab",
  },
  {
    id: 3,
    title: "IPS",
    subTitle: "6 Bab",
  },
  {
    id: 4,
    title: "PKN",
    subTitle: "6 Bab",
  },
  {
    id: 5,
    title: "Bahasa Indonesia",
    subTitle: "6 Bab",
  },
  {
    id: 6,
    title: "Bahasa Inggris",
    subTitle: "6 Bab",
  },
];

const SubCard = ({item}) => {
  return (
    <>
      <div className="w-full max-w-[220px] h-[280px] rounded-2xl py-4 bg-bistre relative flex-col">
        <h1 className="text-md text-[#F8F3E0] px-4 mb-2 -mt-2 font-monstserrat font-semibold">
          {item.title}
        </h1>
        <p className="text-[12px] text-[#F8F3E0]/50 px-4 mb-2 -mt-3 font-monstserrat font-normal">
          {item.subTitle}
        </p>
        <div className="bg-white w-45 flex ml-2.75 h-[0.5px]"></div>
        <div className="relative w-full mt-12 flex flex-col justify-center items-center">
          <div className="absolute top-0 z-10 w-[85%] h-40 -mt-1 bg-[#6A4D3B] rounded-2xl"></div>
          <div className="absolute z-20 top-0 w-[95%] mt-2 h-40 bg-icon rounded-2xl"></div>
          <div className="absolute z-30 top-0 w-full mt-5 h-40 bg-[#CAB99F] rounded-2xl"></div>
        </div>
        <a>
          <button className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] lg:text-[10px] text-white px-6 py-2 rounded-lg hover:scale-105 transition shadow-md bg-black/20 border-white/20 z-300">
            Learn now
          </button>
        </a>
      </div>
    </>
  );
};

const SubAcademy = () => {
  return (
    <div className="flex flex-col items-center px-4 mt-15 pb-10">
      <h1 className="font-semibold font-monstserrat text-2xl bg-linear-to-l from-[#CAB99F] to-icon text-transparent bg-clip-text">
        Subject
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-full">
        {SubAcademys.map((item) => (
          <SubCard key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default SubAcademy;
