import React from "react";
import Image from "next/image";
import { assets, workData } from "@/assets/assets";

const Projects = () => {
  return (
    <section
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-white dark:bg-[#0b0b17] transition-colors duration-500"
    >
      <h2 className="text-center text-4xl md:text-3xl   sm:text-6xl lg:text-[50px] font-extrabold leading-tight font-ovo text-gray-900font-ovo text-gray-800 dark:text-pink-300 ">
        Projects
      </h2>

      <p className="text-center max-w-3xl mx-auto mb-5 mt-5 font-ovo text-gray-600 dark:text-gray-300">
        Here are some of the projects I've worked on, showcasing my skills in
        various technologies and problem domains.
      </p>

      <div className="grid grid-auto-columns my-10 gap-6">
        {workData.map((project, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg bg-cover bg-center cursor-pointer group shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-10/12 rounded-md bg-white/90 dark:bg-gray-900/90 py-4 px-6 flex items-center justify-between shadow-lg group-hover:translate-y-[-6px] transition-transform duration-300">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-pink-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
              <div className="border border-black rounded-full w-10 h-10 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-400 transition-colors duration-300">
                <Image
                  src={assets.send_icon}
                  alt="send icon"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://github.com/yamina169"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto flex w-max items-center justify-center gap-2 rounded-full border border-gray-700 bg-transparent py-3 px-10 text-gray-700 transition-colors duration-500 hover:bg-gray-200 dark:text-pink-300 dark:hover:bg-pink-900"
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="Right arrow"
          width={16}
          height={16}
          className="ml-1"
        />
      </a>
    </section>
  );
};

export default Projects;
