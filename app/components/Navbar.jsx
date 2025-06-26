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
      {!darkMode && (
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
          <Image src={assets.header_bg_color} alt="" className="w-full" />
        </div>
      )}

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          darkMode
            ? "bg-[#1c1133] bg-opacity-90 backdrop-blur-lg shadow-lg" // Fond sombre quand dark mode actif
            : isScroll
            ? "bg-white bg-opacity-5 backdrop-blur-lg shadow-sm" // Fond clair au scroll quand light mode
            : "" // Sans scroll ni dark mode, fond transparent (ou ajoute ce que tu veux)
        }`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="Logo"
            width={112}
            height={40}
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
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
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo">
              My work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
            <Image
              src={darkMode ? assets.sun_icon : assets.moon_icon}
              alt={darkMode ? "Light mode" : "Dark mode"}
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="font-ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              className="w-3"
              alt="Arrow Icon"
              width={12}
              height={12}
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Menu mobile */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition-transform duration-500
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
            <a href="#top" className="font-ovo" onClick={closeMenu}>
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
              Services
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
