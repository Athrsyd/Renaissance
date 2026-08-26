/**
 * PathTimeline.jsx
 * Generalisasi dari PathMTK.jsx dan PathPKN.jsx.
 * Menerima `modulData` dan `mapelName` sebagai props —
 * tidak ada lagi import data yang di-hardcode di dalam komponen ini.
 */
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PathTimeline = ({
    modulData = [],
    mapelName = '',
    modulProgress = [],
    isProgressLoading = false,
    progressError = null,
    onStartModule,
    startingBab = 1,   // dari placement test: 1, 2, atau 3
}) => {
    const moduleIds = modulData.map((m) => Number(m.id))

    const filteredProgress = modulProgress.filter(
        (item) =>
            moduleIds.includes(Number(item?.modul_id)) ||
            (item?.mapel || '').toLowerCase() === mapelName.toLowerCase()
    )

    const getModuleProgress = (moduleId) =>
        filteredProgress.find((item) => Number(item?.modul_id) === Number(moduleId))

    return (
        <div className="flex flex-col w-full mt-10 justify-center items-center overflow-x-hidden">
            <h1 className="text-4xl font-normal pb-5 text-transparent bg-clip-text bg-linear-to-l from-[#CAB99F] to-icon">
                Path of Knowledge
            </h1>

            {isProgressLoading && (
                <div className="relative w-4/5 flex flex-col mt-5 gap-4">
                    {[1, 2, 3].map((item) => (
                        <Skeleton key={item} height={52} style={{ borderRadius: '0.75rem' }} />
                    ))}
                </div>
            )}

            {!isProgressLoading && (
                <div className="relative w-4/5 flex flex-col mt-10">
                    {modulData.map((item, index) => {
                        const currentModuleProgress = getModuleProgress(item.id)
                        const previousModuleProgress =
                            index === 0
                                ? { progress: 100 }
                                : getModuleProgress(modulData[index - 1].id)

                        const currentPercent = Number(currentModuleProgress?.progress || 0)
                        // Bab dianggap unlock jika:
                        //   index-nya < startingBab (bab sebelum starting point)
                        //   ATAU index == startingBab - 1 (starting point itu sendiri)
                        //   ATAU bab sebelumnya sudah selesai 100%
                        const babNumber = index + 1   // bab dimulai dari 1
                        const isUnlocked =
                            babNumber <= startingBab ||
                            Number(previousModuleProgress?.progress || 0) === 100
                        const isCompleted =
                            currentPercent === 100 || currentModuleProgress?.is_selesai

                        return (
                            <div
                                key={item.id}
                                className="flex items-start flex-row justify-between relative cursor-pointer"
                            >
                                {/* LEFT — circle + vertical line */}
                                <div className="flex flex-row items-center">
                                    <div className="flex flex-col items-center mr-5">
                                        <div
                                            className={`w-10 h-10 rounded-full ${
                                                index === modulData.length - 1 ? '-mt-13' : ''
                                            } ${
                                                isCompleted || isUnlocked
                                                    ? 'bg-icon'
                                                    : 'bg-gray-400'
                                            }`}
                                        />
                                        {index !== modulData.length - 1 && (
                                            <div className="w-0.5 h-20 bg-gray-400" />
                                        )}
                                    </div>

                                    {/* RIGHT — text */}
                                    <div className="mb-10">
                                        <h1
                                            className={`font-monstserrat font-bold ${
                                                isCompleted || isUnlocked
                                                    ? 'text-xl text-icon'
                                                    : 'text-base text-gray-400'
                                            }`}
                                        >
                                            Bab {item.bab}:
                                        </h1>
                                        <p
                                            className={
                                                isCompleted || isUnlocked
                                                    ? 'font-monstserrat font-semibold text-icon text-lg'
                                                    : 'text-sm text-gray-400'
                                            }
                                        >
                                            {item.judul}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Progress: {currentPercent}%
                                        </p>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="flex items-center">
                                    <button
                                        disabled={!isUnlocked}
                                        className={`text-white py-2 rounded-md ${
                                            isUnlocked
                                                ? 'bg-icon hover:bg-icon/80 px-7 hover:scale-105 transition duration-300'
                                                : 'bg-gray-400 cursor-not-allowed px-4'
                                        }`}
                                        onClick={() => {
                                            if (isUnlocked && !isCompleted && onStartModule) {
                                                onStartModule(index)
                                            }
                                        }}
                                    >
                                        {isCompleted
                                            ? 'Selesai'
                                            : isUnlocked
                                            ? 'Mulai'
                                            : 'Terkunci'}
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default PathTimeline