import { assets } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScroll, setScroll] = useState(false);
  const sideMenuRef = useRef();

  // Ouvre le menu mobile (glisse depuis la droite)
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  // Ferme le menu mobile (glisse vers la droite)
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  // Au montage : lecture dark mode et scroll listener
  useEffect(() => {
    // Lecture préférence dark mode (localStorage ou système)
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
    document.body.classList.toggle("dark", isDark);

    // Scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode au clic
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50  ${
          darkMode
            ? "bg-[#1c1133] bg-opacity-90 backdrop-blur-lg shadow-lg" // Fond sombre quand dark mode actif
            : isScroll
            ? "bg-white bg-opacity-5 backdrop-blur-lg shadow-sm" // Fond clair au scroll quand light mode
            : "" // Sans scroll ni dark mode, fond transparent (ou ajoute ce que tu veux)
        }`}
      >
        <a href="#top">
          <Image
            src={darkMode ? assets.logo_white : assets.logo}
            className="w-36 cursor-pointer mr-14" // taille agrandie (144px)
            alt="Logo"
            width={180} // largeur réelle
            height={60} // hauteur réelle
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 text-sm md:text-base lg:text-lg
  ${
    isScroll
      ? darkMode
        ? "bg-[#2c1d55] bg-opacity-90 shadow-lg"
        : ""
      : darkMode
      ? "bg-transparent"
      : "bg-white shadow-sm bg-opacity-50"
  }
          `}
        >
          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo">
              Skills
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {/* Bouton Moon design comme nav */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="border border-gray-300 dark:border-gray-500 rounded-full px-3 py-2 bg-white bg-opacity-50 dark:bg-transparent shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            <Image
              src={darkMode ? assets.sun_icon : assets.moon_icon}
              alt={darkMode ? "Light mode" : "Dark mode"}
              className="w-5 h-5" // plus de hover, plus de filter
            />
          </button>

          {/* Bouton Resume stylé comme nav */}
          <a
            href="/nextjs-portfolio/public/sample-resume.pdf"
            download
            className="font-ovo inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 dark:border-gray-500 bg-white bg-opacity-50 dark:bg-transparent shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-sm md:text-base lg:text-lg"
          >
            Resume
            <Image
              src={assets.download_icon}
              alt="Download icon"
              className="w-4 h-4"
            />
          </a>

          {/* Bouton Menu mobile */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>

        {/* Menu mobile */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition-transform 
            ${darkMode ? "bg-[#1c1133]" : "bg-rose-50"}
          `}
          style={{ transform: "translateX(16rem)" }}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="Close menu"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#header" className="font-ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo" onClick={closeMenu}>
              My work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
