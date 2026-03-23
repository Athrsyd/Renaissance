import data from "../Data/pancasila";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TimelineBab = ({
  modulProgress = [],
  isProgressLoading = false,
  progressError = null,
  onStartModule,
}) => {
  const modul = data[0].modul; // ambil pkn
  const pknProgress = modulProgress.filter(
    (item) => (item?.mapel || "").toLowerCase() === "Pendidikan Pancasila"
  );

  const getModuleProgress = (moduleId) => {
    return pknProgress.find((item) => Number(item?.modul_id) === Number(moduleId));
  };

  return (
    <>
      <div className="flex flex-col w-full mt-10 justify-center items-center overflow-x-hidden">
        <h1 className="text-4xl font-normal pb-5 text-transparent bg-clip-text bg-linear-to-l from-[#CAB99F] to-icon">
          Path of Knowledge
        </h1>

        {isProgressLoading && (
          <div className="relative w-4/5 flex flex-col mt-5 gap-4">
            {[1, 2, 3].map((item) => (
              <Skeleton key={item} height={52} style={{ borderRadius: "0.75rem" }} />
            ))}
          </div>
        )}

        {!isProgressLoading && !pknProgress.length && (
          <p className="text-gray-500 font-monstserrat mt-2">
            {progressError || "Belum ada progress pendidikan kewarganegaraan untuk ditampilkan."}
          </p>
        )}

        {!isProgressLoading && (
          <div className="relative w-4/5 flex flex-col mt-10">
            {modul.map((item, index) => (
            <div key={item.id} className="flex items-start flex-row justify-between relative cursor-pointer">
              {(() => {
                const currentModuleProgress = getModuleProgress(item.id);
                const previousModuleProgress = index === 0
                  ? { progress: 100 }
                  : getModuleProgress(modul[index - 1].id);

                const currentPercent = Number(currentModuleProgress?.progress || 0);
                const isUnlocked = index === 0 || Number(previousModuleProgress?.progress || 0) === 100;
                const isCompleted = currentPercent === 100 || currentModuleProgress?.is_selesai;

                return (
                  <>
              {/* LEFT (circle + line) */}
              <div className="flex flex-row items-center">

                <div className="flex flex-col items-center mr-5">
                  {/* Circle */}
                  <div
                    className={`w-10 h-10 rounded-full ${isCompleted || isUnlocked ? "bg-icon" : "bg-gray-400"
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
                    className={`font-monstserrat font-bold ${isCompleted || isUnlocked
                        ? "text-brown-500 text-xl text-icon"
                        : "text-md text-gray-400"
                      }`}
                  >
                    Bab {item.bab}:
                  </h1>
                  <p
                    className={`${isCompleted || isUnlocked
                        ? "font-monstserrat font-semibold text-icon text-lg"
                        : "text-sm text-gray-400"
                      }`}
                  >
                    {item.judul}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Progress: {currentPercent}%
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                  <button
                    disabled={!isUnlocked}
                    className={`text-white py-2 rounded-md ${isUnlocked ? "bg-icon hover:bg-icon-hover px-7 hover:scale-105 transition duration-300" : "bg-gray-400 cursor-not-allowed px-4"}`}
                    onClick={() => {
                      if (isUnlocked && !isCompleted && onStartModule) {
                        onStartModule(index);
                      }
                    }}
                  >
                    {isCompleted ? "Selesai" : isUnlocked ? "Mulai" : "Terkunci"}
                  </button>
              </div>
                  </>
                );
              })()}
            </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TimelineBab;
