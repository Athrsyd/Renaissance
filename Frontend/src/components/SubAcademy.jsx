/**
 * SubAcademy.jsx
 * Sebelumnya: data mapel di-hardcode di dalam komponen ini.
 * Sekarang: dibaca dari mapelConfig.js — satu sumber kebenaran untuk semua mapel.
 * Tambah mapel baru → cukup tambah entry di mapelConfig.js.
 */
import { Link } from 'react-router-dom'
import SkeletonSubAcademy from './SkeletonLoading/AcademyPage/SkeletonSubAcademy'
import MAPEL_LIST from '../Config/mapelConfig'

const SubCard = ({ item }) => {
  const destination = item.slug ? `/academy/${item.slug}` : '/academy'

  return (
    <div className="w-full container group transition-all duration-500 hover:-translate-y-2 cursor-pointer max-w-70 mb-10 md:mb-0 lg:w-60 h-70 rounded-2xl py-4 bg-bistre relative flex-col">
      <h1 className="text-md text-[#F8F3E0] px-4 mb-2 -mt-2 font-monstserrat font-semibold">
        {item.namaMapel}
      </h1>
      <p className="text-[12px] text-[#F8F3E0]/50 px-4 mb-2 -mt-3 font-monstserrat font-normal">
        {item.subTitle}
      </p>
      <div className="bg-white w-54 mx-auto flex lg:ml-2.75 h-[0.5px]" />

      <div className="relative w-full mt-12 flex flex-col justify-center items-center">
        <div className="absolute group-hover:-translate-y-5 duration-500 transition-all top-0 z-10 w-[85%] h-40 -mt-1 bg-[#6A4D3B] rounded-2xl" />
        <div className="absolute group-hover:-translate-y-2 duration-300 transition-all z-20 top-0 w-[95%] mt-2 h-40 bg-icon rounded-2xl" />
        <div className="absolute group-hover:translate-y-1 duration-400 transition-all z-30 top-0 w-full mt-5 h-40 bg-[#CAB99F] rounded-2xl" />
      </div>

      <Link to={destination}>
        <button className="w-35 absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] lg:text-[10px] text-white px-5 py-2 rounded-lg hover:scale-105 transition duration-300 shadow-md bg-black/20 hover:bg-bistre border-white/20 z-300">
          Pelajari Sekarang
        </button>
      </Link>
    </div>
  )
}

const SubAcademy = ({ searchQuery = '', isLoading = false }) => {
  const filtered = MAPEL_LIST.filter((item) =>
    item.namaMapel.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col items-center px-4 mt-15 pb-10">
      <h1 className="font-semibold font-monstserrat text-2xl bg-linear-to-l from-[#CAB99F] to-icon text-transparent bg-clip-text">
        Subject
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-20 mt-6 md:pl-10 w-full">
        {isLoading ? (
          <SkeletonSubAcademy />
        ) : filtered.length > 0 ? (
          filtered.map((item) => <SubCard key={item.id} item={item} />)
        ) : (
          <p className="col-span-2 md:col-span-3 text-center text-[#39221C] font-monstserrat mt-5">
            Pelajaran tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  )
}

export default SubAcademy
