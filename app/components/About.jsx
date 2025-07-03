import React from "react";
import Image from "next/image";
import { infoList, assets } from "@/assets/assets";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const renderIcon = (title) => {
    switch (title) {
      case "Education":
        return (
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="w-7 h-7 mt-3 text-gray-700"
          />
        );
      case "Certifications":
        return (
          <FontAwesomeIcon
            icon={faCertificate}
            className="w-7 h-7 mt-3 text-gray-700"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      id="about"
      className="pt-10 w-full px-4 sm:px-8 md:px-16 lg:px-[12%] py-10 scroll-mt-20"
    >
      <h2 className="text-center text-4xl sm:text-6xl lg:text-[56px] font-extrabold leading-tight font-ovo text-gray-900 mb-10">
        About me
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-48 sm:w-64 md:w-72 lg:w-80 rounded-3xl flex-shrink-0">
          <Image
            src={assets.user_image}
            alt="user"
            priority
            className="w-full h-full rounded-3xl object-cover overflow-hidden"
          />
        </div>
        <div className="flex-1 max-w-full lg:max-w-none min-w-0">
          <p className="mb-8 max-w-full sm:max-w-xl md:max-w-2xl font-ovo text-sm sm:text-base leading-relaxed">
            Software engineering student with a passion for creating innovative
            solutions. Specializing in full-stack development, I combine
            technical expertise with creative problem-solving to build
            user-centric applications.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 max-w-full sm:max-w-2xl">
            {infoList.map(({ title, description }, index) => (
              <li
                key={index}
                className="bg-gray-50 rounded-xl p-6  hover:bg-[#fcf4ff] cursor-pointer hover:-translate-y-1 duration-500 transition shadow-md"
              >
                {renderIcon(title)}
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>

                {title === "Certifications" ? (
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {description.split("\n").map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 text-sm">{description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
