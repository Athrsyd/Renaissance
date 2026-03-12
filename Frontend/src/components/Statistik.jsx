import React from 'react'
import Counter from './Counter';

const dataStats = [
  {
    id: 1,
    target: 10000,
    suffix: "+",
    deskripsi: "Students Learning",
  },
  {
    id: 2,
    target: 100,
    suffix: "+",
    deskripsi: "Learning Moduls",
  },
  {
    id: 3,
    target: 80,
    suffix: "+",
    deskripsi: "Partner Schools",
  },
  {
    id: 4,
    target: 97,
    suffix: "%",
    deskripsi: "Rate",
  },
];

const Stats = ({item}) => {
  return (
    <>
      <div className=" w-full">
        <h1 className="text-4xl font-monstserrat font-semibold text-center text-white">
          <Counter target={item.target} suffix={item.suffix} />
        </h1>
        <p className="text-sm font-normal text-center text-white">
          {item.deskripsi}
        </p>
      </div>
    </>
  )
}

const Statistik = () => {
  return (
    <div className="bg-linear-to-r from-[#9B7A5B]/60 to-[#6A4D3B]/60 rounded-4xl max-w-4xl w-full p-7 flex justify-between items-center text-center">
      {dataStats.map((item) => (
        <Stats key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Statistik
