import React from 'react'
import iconBintang from '../assets/icon/iconBintang.png'
import iconKertas from '../assets/icon/iconKertas.png'
import iconComunity from '../assets/icon/iconComunity.png'
import iconChart from '../assets/icon/iconChart.png'
import iconAi from '../assets/icon/iconAi.png'

const LandingPage2 = () => {
  return (
    // Renaissance Nixon Areas
    <section className=" bg-[#F2E0D2] h-full pt-10 overflow-x-hidden">
      <div className= "flex items-center text-bistre text-5xl justify-center font-medium gap-15 font-poppins"> 
        <img src={iconBintang} alt="" className= "w-11 h-11 self-center"/>
        <h1 className="m-0">Renaissance Experience</h1>
        <img src={iconBintang} alt="" className= "w-11 h-11 self-center mt-0.5"/>
      </div>

      {/* Display Kotak */}
      <div className="mt-25 flex justify-center flex-wrap gap-17">
        <div className="bg-bistre w-100 h-70 p-7 rounded-2xl">
          <div className="flex items-center border-b-3 border-[#9B7A5B] font-poppins pb-1.5">
            <img src={iconKertas} alt="" className="w-15 h-15"/>
            <h1 className="bg-linear-to-r from-[#9B7A5B] to-[#CAB99F] text-transparent bg-clip-text text-2xl font-semibold ml-2.5">Interactive Learn</h1>
          </div>

          <div className="mt-5 text-white font-medium font-monstserrat text-lg">
            <p>Materi pembelajaran disajikan secara interaktif melalui visual, latihan soal, dan aktivitas yang membantu siswa memahami konsep dengan lebih mudah.</p>
          </div>
        </div>

        <div className="bg-bistre w-100 h-70 p-7 rounded-2xl">
          <div className="flex items-center border-b-3 border-[#9B7A5B] font-poppins pb-1.5">
            <img src={iconAi} alt="" className="w-14 h-14"/>
            <h1 className="bg-linear-to-r from-[#9B7A5B] to-[#CAB99F] text-transparent bg-clip-text text-2xl font-semibold ml-2.5">AI Assistant</h1>
          </div>

          <div className="mt-5 text-white font-medium font-monstserrat text-lg">
            <p>Didukung oleh kecerdasan buatan yang membantu siswa menjawab pertanyaan, menjelaskan materi, dan memberikan panduan belajar secara instan.</p>
          </div>
        </div>

        <div className="bg-bistre w-100 h-70 p-7 rounded-2xl">
          <div className="flex items-center border-b-3 border-[#9B7A5B] font-poppins pb-1.5">
            <img src={iconComunity} alt="" className="w-14 h-14"/>
            <h1 className="bg-linear-to-r from-[#9B7A5B] to-[#CAB99F] text-transparent bg-clip-text text-2xl font-semibold ml-2.5">Community</h1>
          </div>

          <div className="mt-5 text-white font-medium font-monstserrat text-lg">
            <p>Siswa dapat berdiskusi, berbagi pengetahuan, dan saling membantu dalam komunitas belajar yang aktif dan kolaboratif.</p>
          </div>
        </div>

        <div className="bg-bistre w-100 h-70 p-7 rounded-2xl">
          <div className="flex items-center border-b-3 border-[#9B7A5B] font-poppins pb-1.5">
            <img src={iconChart} alt="" className="w-14 h-14"/>
            <h1 className="bg-linear-to-r from-[#9B7A5B] to-[#CAB99F] text-transparent bg-clip-text text-2xl font-semibold ml-2.5">Progress Learn</h1>
          </div>

          <div className="mt-5 text-white font-medium font-monstserrat text-lg">
            <p>Memantau perkembangan belajar melalui statistik dan pencapaian yang membantu siswa tetap termotivasi.</p>
          </div>
        </div>
      </div>

      {/* Container Bridging */}
      <div className="mt-40 w-full bg-[#CBB799]">
        <div className="flex items-center gap-16 font-poppins text-5xl text-[#f4e4d8] font-bold bg-[#9B7A5B] p-6 justify-center -rotate-3 ">
          <img src={iconBintang} alt="" className="w-12 h-12"/>
          <h1>Learn</h1>
          <img src={iconBintang} alt="" className="w-12 h-12"/>
          <h1>Innovate</h1>
          <img src={iconBintang} alt="" className="w-12 h-12"/>
          <h1>Evolve</h1>
          <img src={iconBintang} alt="" className="w-12 h-12"/>
        </div>
      </div>

      {/* What Student Say */}
      <div className="h-96 bg-bistre">
        <div className="text-5xl pt-23 flex justify-center font-poppins bg-linear-to-r from-[#9B7A5B] to-[#dcceb9] text-transparent bg-clip-text font-semibold">
          <h1>What Students Say</h1>
        </div>
      </div>
    </section>
  )
}

export default LandingPage2