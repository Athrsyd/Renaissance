import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const Subjects = [
  {
    id: 1,
    title: "Matematika",
  },
  {
    id: 2,
    title: "IPA",
  },
  {
    id: 3,
    title: "IPS",
  },
];

const SubjectCard = ({item}) => {
  return (
    <>
      <div className="w-85 h-70 lg:w-50 lg:h-70 md:w-50 md:h-70 justify-center rounded-2xl py-4 bg-bistre relative flex-col ">
        <h1 className="text-md text-[#F8F3E0] px-5 mb-2 font-monstserrat font-semibold">
          {item.title}
        </h1>
        <div className="bg-white w-50 h-[0.5px]"></div>
        <div className="relative w-full mt-12 flex flex-col justify-center items-center">
          <div className="absolute top-0 z-10 w-[85%] h-40 bg-[#6A4D3B] rounded-2xl"></div>
          <div className="absolute z-20 top-0 w-[95%] mt-3 h-40 bg-icon rounded-2xl"></div>
          <div className="absolute z-30 top-0 w-full mt-6 h-40 bg-[#CAB99F] rounded-2xl"></div>
        </div>

        <a>
          <button className="hover:scale-105 transition duration-300 ease-in-out absolute z-40 text-[12px] lg:text-[8px] md:text-[8px] bottom-0 left-27 lg:left-12 md:left-12 mb-5 text-white px-8 py-2 rounded-lg shadow-md bg-black/20 border-white/20">
            Learn now
          </button>
        </a>
      </div>
    </>
  );
};

const SubjectDash = () => {
  return (
    <div className="flex flex-col justify-center lg:pl-0 items-center max-w-full lg:w-225 md:w-225 md:pl-15 mt-5">
      <h1 className="self-start font-semibold font-monstserrat text-lg text-black">
        Subject
      </h1>
      <div className="relative flex flex-col lg:flex-row md:flex-row md:flex-wrap gap-6 lg:gap-8 mt-5 justify-center items-center self-start">
        {Subjects.map((item) => (
          <SubjectCard key={item.id} item={item} />
        ))}
        <div className="flex flex-row justify-between items-center group gap-2">
          <a>
            <button className="group-hover:scale-105 transition duration-300 ease-in-out bg-bistre text-white -ml-38 lg:ml-3 md:ml-3 px-8 py-2 text-[12px] rounded-xl">
              More Subject
            </button>
          </a>
          <FontAwesomeIcon icon={faAnglesRight} className="font-monstserrat text-lg group-hover:translate-x-5 transition duration-500 ease-in-out" />
        </div>
      </div>
    </div>
  );
}

export default SubjectDash
