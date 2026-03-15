import logo from '../assets/logo2.png'
import React from 'react'
import {Menu, X} from 'lucide-react'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

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
      <div
        className={`fixed inset-0 bg-black/50 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />
      {/* <<<<<<< HEAD */}
      <nav
        className={`bg-linear-to-b from-chamoisee/50 to-coffe/70 backdrop-blur-sm z-order-last flex p-0 px-6 md:p-3 
          justify-between md:justify-center 
          items-center md:gap-20 transition-all duration-600
  
  ${
    isMenuOpen
      ? "fixed top-0 left-0 w-full rounded-none mt-0"
      : "mt-2 sm:mt-4 w-full ml-2 mr-2 sm:ml-0 sm:mr-0 sm:w-[90%] md:w-full md:max-w-6xl rounded-full"
  }`}
      >
        <ul className="hidden sm:flex flex-row justify-center md:gap-10">
          <li
            onClick={() => handleClick("about")}
            className={`px-3 py-2 rounded-full hover:bg-coffe transition-colors duration-500 ease-in-out ${menuActive === "about" ? "bg-coffe" : ""}`}
          >
            <a
              href="#about"
              className="text-beige transition-colors text-md md:text-lg"
            >
              {" "}
              About Us
            </a>
          </li>
          <li
            onClick={() => handleClick("academy")}
            className={`px-3 py-2 rounded-full hover:bg-coffe transition-colors duration-500 ease-in-out ${menuActive === "academy" ? "bg-coffe" : ""}`}
          >
            <a
              href="#academy"
              className="text-beige  transition-colors text-md md:text-lg"
            >
              {" "}
              The Academy
            </a>
          </li>
        </ul>

        <div className="logo z-1000000">
          <a href="/" className="flex items-center p-2 gap-2">
<<<<<<< HEAD
            <img src={logo} alt="Renaissance Logo" className="h-5 md:h-7" />
            <h1 className="hidden md:block text-white text-xl md:text-2xl font-semibold">Renaissance</h1>
=======
            <img
              src={logo}
              alt="Renaissance Logo"
              className="h-6 sm:h-5 md:h-7"
            />
            <h1 className="sm:hidden md:block text-[#F2E0D2] sm:text-white text-xl md:text-2xl font-normal sm:font-semibold">
              Renaissance
            </h1>
>>>>>>> adb5899a53bb99e9b96fcbb08dff3707a862013e
          </a>
        </div>

        <button
          className="sm:hidden z-10000 text-white p-2 rounded-full hover:bg-bistre hover:text-white transition-colors duration-500 ease-in-out"
          onClick={toggleMenu}
        >
          <span
            className={`block transition-transform duration-300 ${
              isMenuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
            }`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </span>
        </button>

        <div
          className={`fixed inset-0 bg-bistre z-9998 md:hidden transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={closeMenu}
        ></div>

        <div
          className={`sm:hidden fixed top-0 -mr-5 right-0 h-80 w-50 bg-bistre rounded-b-3xl transform transition-transform duration-500 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"} z-9999`}
        >
          <ul className="flex flex-col items-start gap-6 pt-24 pl-8 text-white text-lg">
            <li
              onClick={() => handleClick("about")}
              className={`w-full text-lg text-beige cursor-pointer transition-all duration-300 
                ${menuActive === "about" ? "text-white translate-x-2" : ""} hover:translate-x-2`}
            >
              <a href="#about">About Us</a>
            </li>
            <li
              onClick={() => handleClick("academy")}
              className={`w-full text-lg text-beige cursor-pointer transition-all duration-300 
                ${menuActive === "academy" ? "text-white translate-x-2" : ""} hover:translate-x-2`}
            >
              <a href="#academy">The Academy</a>
            </li>
            <li
              onClick={() => handleClick("features")}
              className={`w-full text-lg text-beige cursor-pointer transition-all duration-300 
                ${menuActive === "features" ? "text-white translate-x-2" : ""} hover:translate-x-2`}
            >
              <a href="#features">Features</a>
            </li>
            <li
              onClick={() => handleClick("reviews")}
              className={`w-full text-lg text-beige cursor-pointer transition-all duration-300 
                ${menuActive === "reviews" ? "text-white translate-x-2" : ""} hover:translate-x-2`}
            >
              <a href="#reviews">Reviews</a>
            </li>
          </ul>
        </div>

        <ul className="hidden sm:flex flex-row justify-center md:gap-10">
          <li
            onClick={() => handleClick("features")}
            className={`px-3 py-2 rounded-full hover:bg-coffe transition-colors duration-500 ease-in-out ${menuActive === "features" ? "bg-coffe" : ""}`}
          >
            <a
              href="#features"
              className="text-beige transition-colors text-md md:text-lg"
            >
              Features
            </a>
          </li>
          <li
            onClick={() => handleClick("reviews")}
            className={`px-3 py-2 rounded-full hover:bg-coffe transition-colors duration-500 ease-in-out ${menuActive === "reviews" ? "bg-coffe" : ""}`}
          >
            <a
              href="#reviews"
              className="text-beige transition-colors text-md md:text-lg"
            >
              Reviews
            </a>
          </li>
          {/* <li onClick={()=>console.log(window.scrollY)}  className={`px-3 py-2 rounded-full hover:bg-coffe transition-colors duration-500 ease-in-out ${menuActive ==='reviews'? 'bg-coffe' : ''}`}><a href="#reviews" className="text-beige transition-colors text-lg">Reviews</a></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar