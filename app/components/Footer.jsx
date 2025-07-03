import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { assets } from "@/assets/assets";

const Footer = ({ darkMode }) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 md:px-12 lg:px-[10%] py-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Logo + Description */}
        <div className="text-center md:text-left max-w-md">
          <div className="flex justify-center md:justify-start mb-3">
            <Image
              src={darkMode ? assets.logo_white : assets.logo}
              alt="Logo"
              width={100}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Building elegant digital solutions with a focus on user experience
            and technical excellence.
          </p>
        </div>

        {/* Socials + Copyright */}
        <div className="text-center md:text-right space-y-3">
          <div className="flex justify-center md:justify-end gap-6 text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/yamina169"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/yamina-rezgui-1b673123b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:rezguiyamina1692001@gmail.com"
              className="hover:text-pink-500 transition-colors"
            >
              <EnvelopeIcon className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Yamina Rezgui. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
