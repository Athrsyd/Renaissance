import logo from '../assets/logo2.png'
import React from 'react'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <nav className=" bg-bistre z-order-last flex p-3 mt-4 justify-center items-center gap-20 w-full max-w-6xl rounded-full">
        <ul className='flex flex-row justify-center gap-10'>
          <li className=''><a  href="#about"  className="text-beige hover:text-chamoisee transition-colors text-lg">  About Us</a></li>
          <li className=''><a  href="#academy"  className="text-beige hover:text-chamoisee transition-colors text-lg">  The Academy</a></li>
        </ul>

        <div className="logo">
          <a href="/" className="flex items-center p-2 gap-2">
            <img src={logo} alt="Renaissance Logo" className="h-7" />
            <h1 className="text-white text-2xl font-semibold">Renaissance</h1>
          </a>
        </div>

      <ul className='flex flex-row justify-center gap-10'>
        <li><a  href="#features"  className="text-beige hover:text-chamoisee transition-colors text-lg">  Features</a></li>
        <li><a  href="#reviews"  className="text-beige hover:text-chamoisee transition-colors text-lg">  Reviews</a></li>
      </ul>
 
      </nav>
    </header>
  );
}

export default Navbar