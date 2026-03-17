import React from 'react'
import ProgressBar from './ProgressBar'
const data = [
    {
        id: 1,
        date: "May 27, 2026",
        materi: "Sifat Koligatif Larutan",
        grade: 12,
        subject: "Kimia",
        bab: 1,
        progress: 78,
    },
    {
        id: 2,
        date: "May 27, 2026",
        materi: "Enzim dan Metabolisme",
        grade: 12,
        subject: "Biologi",
        bab: 1,
        progress: 78,
    },
    {
        id: 3,
        date: "May 27, 2026",
        materi: "Social Media and Netiquette",
        grade: 12,
        subject: "Bahasa Inggris",
        bab: 1,
        progress: 78,
    },

];

const ContinueLearningCard = ({ item }) => {
    return (
        <div className={`px-10 py-5 ${item.id % 2 === 0 ? 'bg-bistre' : 'bg-beige'} p-4 cursor-pointer rounded-lg 
        min-w-70 sm:min-w-85 shrink-0 shadow-lg transition duration-300 ease-in-out hover:transform hover:-translate-y-2`}>
            <p className={`${item.id % 2 === 0 ? 'text-beige' : 'text-bistre'} opacity-50`}>{item.date}</p>
            <h3 className={`${item.id % 2 === 0 ? 'text-beige' : 'text-bistre'} text-lg font-bold mb-1`}>{item.materi}</h3>
            <p className={`${item.id % 2 === 0 ? 'text-beige' : 'text-bistre'} opacity-50 text-sm mb-2`}>{item.subject} • Kelas {item.grade} • Bab {item.bab}</p>
            <ProgressBar value={item.progress} max={100} bgColor={item.id % 2 === 0 ? 'bg-beige' : 'bg-bistre'} />
            <div className="flex flex-row w-full justify-between items-center mt-2 opacity-50">
                <p className={`${item.id % 2 === 0 ? 'text-beige' : 'text-bistre'}`}>Progress</p>
                <p className={`${item.id % 2 === 0 ? 'text-beige' : 'text-bistre'}`}>{item.progress}%</p>
            </div>
        </div>
    )
}


const ContinueLearning = () => {
    return (
        <>
            <div className="ContinueLearning pt-10 flex flex-row gap-7 mx-5 my-10 justify-start items-stretch overflow-x-auto overflow-y-hidden pb-2">

                {data.map((item) => (
                    <ContinueLearningCard key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}

export default ContinueLearning