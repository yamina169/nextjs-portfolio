import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { assets } from "@/assets/assets";

const Footer = ({ darkMode }) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 px-6 py-10 sm:px-12 lg:px-[12%]">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Left: Logo + Text */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-2">
            <Image
              src={darkMode ? assets.logo_white : assets.logo}
              alt="Logo"
              width={100} // largeur réelle
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
            Building elegant digital solutions with a focus on user experience
            and technical excellence.
          </p>
        </div>

        {/* Right: Icons + Copyright */}
        <div className="text-center md:text-right space-y-3">
          <div className="flex justify-center md:justify-end gap-5 text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/greatstackdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/greatstackdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:rezguiyamina1692001@gmail.com"
              className="hover:text-pink-500 transition"
            >
              <EnvelopeIcon className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Yamina Rezgui | Built with React and Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
