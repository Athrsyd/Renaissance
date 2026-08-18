/**
 * Mapel.jsx — Daftar mapel di landing page.
 * Sebelumnya: `dataMapel` di-hardcode di dalam file ini.
 * Sekarang: dibaca dari mapelConfig.js — satu sumber kebenaran untuk semua mapel.
 */
import AOS from 'aos'
import 'aos/dist/aos.css'
import MAPEL_LIST from '../Config/mapelConfig'

const MapelList = ({ item }) => {
  return (
    <div className="flex flex-col md:gap-0 gap-5 md:flex-row w-full lg:w-[60%] md:justify-between items-center text-center">
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-delay="300"
        className="bg-icon hover:-translate-x-2 transition-all duration-300 ease-in-out order-1 w-50 md:w-55 lg:w-70 h-20 lg:p-6 rounded-2xl"
      >
        <h2 className="text-lg md:text-xl lg:pt-0 pt-6 font-semibold text-white">
          {item.namaMapel}
        </h2>
      </div>

      <div className="relative w-55 sm:order-2 order-3 md:w-0.5 h-0.5 md:h-45 lg:h-35 bg-icon" />

      <div
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1500"
        className="w-50 order-2 hover:translate-x-2 transition-all duration-300 ease-in-out lg:w-70"
      >
        <p className="text-sm md:text-md font-medium text-center md:text-justify text-white">
          {item.deskripsi}
        </p>
      </div>
    </div>
  )
}

const Mapel = () => {
  return (
    <div className="flex flex-col md:gap-0 gap-5 w-full items-center justify-center">
      {MAPEL_LIST.map((item) => (
        <MapelList key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Mapel
