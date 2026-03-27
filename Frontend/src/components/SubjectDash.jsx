import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import SkeletonSubjects from './SkeletonLoading/DashboardPage/SkeletonSubjects';

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

const SubjectCard = ({ item }) => {
  return (
    <>
      <div className="group transition-all duration-500 hover:-translate-y-2 cursor-pointer w-85 h-70 lg:w-50 lg:h-70 md:w-50 md:h-70 justify-center rounded-2xl py-4 bg-bistre relative flex-col ">
        <h1 className="text-md text-[#F8F3E0] px-5 mb-2 font-monstserrat font-semibold">
          {item.title}
        </h1>
        <div className="bg-white w-full lg:w-50 h-[0.5px]"></div>
        <div className="relative w-full mt-12 flex flex-col justify-center items-center">
          <div className="absolute group-hover:-translate-y-4 duration-500 transition-all top-0 z-10 w-[85%] h-40 bg-[#6A4D3B] rounded-2xl"></div>
          <div className="absolute group-hover:-translate-y-2 duration-500 transition-all z-20 top-0 w-[95%] mt-3 h-40 bg-icon rounded-2xl"></div>
          <div className="absolute group-hover:-translate-y-1 duration-500 transition-all z-30 top-0 w-full mt-6.5 h-42 bg-[#CAB99F] rounded-2xl"></div>
        </div>

        <Link to="/academy">
          <button className="hover:bg-bistre transition-all duration-300 ease-in-out absolute z-40 text-[12px] lg:text-[8px] md:text-[8px] bottom-0 left-21 md:left-8.5 mb-5 text-white px-8 py-2 rounded-lg shadow-md bg-black/20 border-white/20">
            Pelajari sekarang
          </button>
        </Link>
      </div>
    </>
  );
};

const SubjectDash = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center lg:pl-0 items-center max-w-full lg:w-225 md:w-225 md:pl-15 mt-5">
      <h1 className="self-start font-semibold font-monstserrat text-lg text-black">
        Mata Pelajaran
      </h1>
      <div className="relative flex flex-col lg:flex-row md:flex-row md:flex-wrap gap-6 lg:gap-8 mt-5 justify-center items-center self-start">
        {isLoading ? (
          <SkeletonSubjects />
        ) : (
          <>
            {Subjects.map((item) => (
              <SubjectCard key={item.id} item={item} />
            ))}
            <div className="flex flex-row justify-between items-center group gap-6">
              <Link to="/academy" className="flex flex-row justify-center items-center group gap-3">
                <button className="group-hover:scale-105 transition duration-300 ease-in-out bg-bistre text-white -ml-38 lg:ml-3 md:ml-3 px-8 py-2 text-[12px] rounded-xl">
                  Mapel lainnya
                </button>
                <FontAwesomeIcon icon={faAnglesRight} className="font-monstserrat text-lg group-hover:translate-x-5 transition  duration-500 ease-in-out" />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SubjectDash
