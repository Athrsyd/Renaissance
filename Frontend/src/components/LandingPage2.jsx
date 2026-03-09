import React from 'react'
import iconBintang from '../assets/iconBintang.png'

const LandingPage2 = () => {
  return (
    // Renaissance Experience
    <section className="font-display bg-[#F2E0D2] h-screen pt-10">
      <div className= "flex items-center text-bistre text-5xl justify-center font-medium gap-15"> //Div buat Title
        <img src={iconBintang} alt="" className= "w-11 h-11 self-center"/>
        <h1 className="m-0">Renaissance Experience</h1>
        <img src={iconBintang} alt="" className= "w-11 h-11 self-center mt-0.5"/>
      </div>

      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default LandingPage2