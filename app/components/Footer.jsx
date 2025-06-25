import React from "react";
import Image from "next/image"; // Make sure to import Image from next/image
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={assets.logo}
          alt="Company logo"
          className="w-36 mx-auto mb-2"
          width={144}
          height={144}
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={assets.mail_icon}
            alt="Email icon"
            className="w-6"
            width={24}
            height={24}
          />
          greatstackdev@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 William Mark. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://github.com/greatstackdev"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://linkedin.com/in/greatstackdev"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/greatstackdev"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
