import React from "react";
import { skillsData } from "@/assets/assets";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full px-[8%] py-12 scroll-mt-20 bg-white dark:bg-[#0b0b17] transition-all"
    >
      <h2 className="text-center text-4xl md:text-3xl   sm:text-6xl lg:text-[50px] font-extrabold leading-tight font-ovo text-gray-900font-ovo text-gray-800 dark:text-pink-300 ">
        Skills
      </h2>

      <p className="text-center max-w-xl mx-auto mt-2 mb-5 text-sm text-gray-600 dark:text-gray-300 font-ovo">
        I've worked with a range of technologies in the web development world,
        from frontend to backend and everything in between.
      </p>

      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {skillsData.map(({ title, icon: Icon, color }, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-[#111827]  hover:bg-[#fcf4ff] rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-4 shadow-sm hover:shadow-md hover:-translate-y-1 transform transition duration-300 flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full dark:bg-gray-800 mb-2">
              <Icon style={{ color }} className="text-xl sm:text-5xl" />
            </div>
            <h3 className="text-sm sm:text-base font-medium text-gray-800 dark:text-pink-200">
              {title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
