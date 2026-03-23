import React from 'react'
import ProgressBar from './ProgressBar'


const ContinueLearningCard = ({ item, index }) => {
    return (
        <div className={`px-10 py-5 ${index % 2 === 0 ? 'bg-bistre' : 'bg-beige'} ${item.progress === 100 || item.progress === 0? 'hidden' : 'block'} p-4 cursor-pointer rounded-lg 
        min-w-70 sm:min-w-85 shrink-0 shadow-lg transition duration-300 ease-in-out hover:transform hover:-translate-y-2`}>
            <p className={`${index % 2 === 0 ? 'text-beige' : 'text-bistre'} opacity-50`}>{item.date}</p>
            <h3 className={`${index % 2 === 0 ? 'text-beige' : 'text-bistre'} text-lg font-bold mb-1`}>{item.materi}</h3>
            <p className={`${index % 2 === 0 ? 'text-beige' : 'text-bistre'} opacity-50 text-sm mb-2`}>{item.mapel} • Kelas 7 • Bab {item.id > 5 ? parseInt(item.id / 2,) : item.id}</p>
            <ProgressBar value={item.progress} max={100} bgColor={index % 2 === 0 ? 'bg-beige' : 'bg-bistre'} />
            <div className="flex flex-row w-full justify-between items-center mt-2 opacity-50">
                <p className={`${index % 2 === 0 ? 'text-beige' : 'text-bistre'}`}>Progress</p>
                <p className={`${index % 2 === 0 ? 'text-beige' : 'text-bistre'}`}>{item.progress}%</p>
            </div>
        </div>
    )
}


const ContinueLearning = ({ dataProgress }) => {
    return (
        <>
            <div className="ContinueLearning pt-10 flex flex-row gap-7 mx-5 my-10 justify-start items-stretch overflow-x-auto overflow-y-hidden pb-2">

                {dataProgress.map((item, index) => (
                    <ContinueLearningCard key={item.id} item={item} index={index} />
                ))}
            </div>
        </>
    )
}

export default ContinueLearning