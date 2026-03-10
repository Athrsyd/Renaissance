
const Mapel = ({ namaMapel, deskripsi }) => {
  return (
    <>
      <div className="flex flex-row w-[60%] justify-between text-center">
        <div className="bg-[#9B7A5B] w-70 h-20 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold text-white">{namaMapel}</h2>
        </div>
        <div className="relative w-0.5 h-35 bg-[#9B7A5B]"></div>
        <div className="w-70">
          <p className="text-md font-medium text-justify text-white">{deskripsi}</p>
        </div>
      </div>
    </>
  );
};

export default Mapel
