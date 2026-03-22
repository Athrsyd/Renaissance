import data from "../Data/modul";

const TimelineBab = () => {
  const modul = data[0].modul; // ambil Matematika

  return (
    <>
      <div className="flex flex-col w-full mt-10 justify-center items-center overflow-x-hidden">
        <h1 className="text-4xl font-normal pb-5 text-transparent bg-clip-text bg-linear-to-l from-[#CAB99F] to-icon">
          Path of Knowledge
        </h1>
        <div className="relative right-50 flex flex-col mt-10">
          {modul.map((item, index) => (
            <div key={item.id} className="flex items-start relative">
              {/* LEFT (circle + line) */}
              <div className="flex flex-col items-center mr-5">
                {/* Circle */}
                <div
                  className={`w-10 h-10 rounded-full ${
                    index === 0 ? "bg-icon" : "bg-gray-400"
                  }`}
                />

                {/* Line */}
                {index !== modul.length - 1 && (
                  <div className="w-0.5 h-15 bg-gray-400"></div>
                )}
              </div>

              {/* RIGHT (text) */}
              <div className="mb-10">
                <h1
                  className={`font-monstserrat font-bold ${
                    index === 0
                      ? "text-brown-500 text-xl text-icon"
                      : "text-md text-gray-400"
                  }`}
                >
                  Bab {item.bab}:
                </h1>
                <p
                  className={`${
                    index === 0
                      ? "font-monstserrat font-semibold text-icon text-lg"
                      : "text-sm text-gray-400"
                  }`}
                >
                  {item.judul}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TimelineBab;
