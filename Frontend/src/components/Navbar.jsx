import logo from '../assets/logo2.png'
import React from 'react'
import { useState, useEffect } from 'react'

const Navbar = () => {
  //  isScrolled blm ke pake
  const [isScrolled, setIsScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState('');

    const handleClick = (menu) => {
      setMenuActive(menu);
      // nanti ini di hapus yq
      if (menuActive === menu) {
        setMenuActive('');
      }
    }
  useEffect(() => {


    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className=" fixed w-full flex justify-center unded-full z-9999">
{/* <<<<<<< HEAD */}
      <nav className=" bg-linear-to-b from-chamoisee/50 to-coffe/70 backdrop-blur-sm z-order-last flex p-3 mt-4 justify-center items-center gap-20 w-full max-w-6xl rounded-full">
        <ul className='flex flex-row justify-center gap-10'>
          <li onClick={()=> handleClick('about')} className={`px-3 py-2 rounded-full hover:bg-coffe transition-colors duration-500 ease-in-out ${menuActive ==='about'? 'bg-coffe' : ''}`}><a  href="#about"  className="text-beige transition-colors text-lg">  About Us</a></li>
          <li onClick={()=> handleClick('academy')} className={`px-3 py-2 rounded-full hover:bg-coffe transition-colors duration-500 ease-in-out ${menuActive ==='academy'? 'bg-coffe' : ''}`}><a  href="#academy"  className="text-beige  transition-colors text-lg">  The Academy</a></li>
        </ul>
{/* ======= */}
      {/* <nav className=" bg-linear-to-b from-chamoisee/50 to-coffe/50 backdrop-blur-sm z-order-last flex p-3 mt-4 justify-center items-center gap-20 w-full max-w-6xl rounded-full">
        <a
          href="#about"
          className="text-beige hover:text-chamoisee transition-colors text-lg"
        >
          About Us
        </a>
        <a
          href="#academy"
          className="text-beige hover:text-chamoisee transition-colors text-lg"
        >
          The Academy
        </a> */}

        <div className="logo">
          <a href="/" className="flex items-center p-2 gap-2">
            <img src={logo} alt="Renaissance Logo" className="h-7" />
            <h1 className="text-white text-2xl font-semibold">Renaissance</h1>
          </a>
        </div>

      <ul className='flex flex-row justify-center gap-10'>
        <li onClick={()=> handleClick('features')} className={`px-3 py-2 rounded-full hover:bg-coffe transition-colors duration-500 ease-in-out ${menuActive ==='features'? 'bg-coffe' : ''}`}><a href="#features" className="text-beige transition-colors text-lg">Features</a></li>
        <li onClick={()=> handleClick('reviews')}  className={`px-3 py-2 rounded-full hover:bg-coffe transition-colors duration-500 ease-in-out ${menuActive ==='reviews'? 'bg-coffe' : ''}`}><a href="#reviews" className="text-beige transition-colors text-lg">Reviews</a></li>
        <li onClick={()=>console.log(window.scrollY)}  className={`px-3 py-2 rounded-full hover:bg-coffe transition-colors duration-500 ease-in-out ${menuActive ==='reviews'? 'bg-coffe' : ''}`}><a href="#reviews" className="text-beige transition-colors text-lg">Reviews</a></li>
      </ul>
 
      </nav>

    </header>
  );
}

export default Navbar