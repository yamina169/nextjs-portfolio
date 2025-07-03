import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ferme le menu si on clique sur l’overlay
  const handleOverlayClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#top" },
    { name: "About me", href: "#about" },
    { name: "Skills", href: "#services" },
    { name: "Projects", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full px-4 md:px-6 lg:px-10 py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? "bg-white bg-opacity-5 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        {/* Logo */}
        <a href="#top" aria-label="Go to top">
          <Image
            src={assets.logo}
            alt="Logo"
            width={140}
            height={60}
            className="w-30 sm:w-25 cursor-pointer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul
            className={`flex items-center gap-6 xl:gap-8 rounded-full px-8 py-3 text-sm md:text-base lg:text-lg ${
              isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
            }`}
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="hover:text-red-500 transition-colors font-ovo"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          {!isMobileMenuOpen && (
            <button
              onClick={toggleMobileMenu}
              className="text-slate-800  focus:outline-none focus:ring-2  rounded"
              aria-label="Open menu"
            >
              <Bars3Icon className="w-8 h-8" />
            </button>
          )}
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0  bg-opacity-30 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOverlayClick}
        aria-hidden={!isMobileMenuOpen}
      />

      {/* Mobile Sidebar - Right Side */}
      <aside
        className={`fixed top-0 right-0 h-full w-[35vw] max-w-xs bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out flex flex-col`}
        style={{
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
        }}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex items-center justify-end p-4 ">
          <button
            onClick={toggleMobileMenu}
            className="text-slate-600 focus:outline-none focus:ring-2  rounded"
            aria-label="Close menu"
          >
            <XMarkIcon className="w-7 h-7" />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-base text-slate-700">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-medium transition-colors hover:text-rose-500"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
