import React from "react";
import { skillsData } from "@/assets/assets";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full px-[8%] py-12 scroll-mt-20 bg-white transition-all"
    >
      <h2 className="text-center text-4xl sm:text-6xl lg:text-[50px] font-extrabold leading-tight font-ovo text-gray-800">
        Skills
      </h2>

      <p className="text-center max-w-xl mx-auto mt-2 mb-5 text-sm text-gray-600 font-ovo">
        I've worked with a range of technologies in the web development world,
        from frontend to backend and everything in between.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skillsData.map(({ title, icon: Icon, color }, index) => (
          <div
            key={index}
            className="group bg-white hover:bg-[#fcf4ff] rounded-lg border border-gray-200 px-2.5 py-3 shadow-sm hover:shadow-md hover:-translate-y-1 transform transition duration-300 flex flex-col items-center text-center"
          >
            <div className="w-9 h-9 flex items-center justify-center rounded-full mb-1.5">
              {title === "MySQL" ? (
                <Icon color={color} size={40} />
              ) : (
                <Icon color={color} size={30} />
              )}
            </div>
            <h3 className="text-xs sm:text-sm font-medium text-gray-800">
              {title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
