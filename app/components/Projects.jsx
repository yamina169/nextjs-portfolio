import React from "react";
import Image from "next/image";
import { workData, assets } from "@/assets/assets";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="work"
      className="w-full px-[12%] py-8 scroll-mt-20 bg-white transition-colors duration-500"
    >
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight font-ovo text-gray-900 mb-4">
        Projects
      </h2>

      <p className="text-center max-w-3xl mx-auto mb-6 mt-1 font-ovo text-gray-600 text-base">
        Here are some of the projects I've worked on, showcasing my skills in
        various technologies and problem domains.
      </p>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {workData.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg flex flex-col transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl hover:bg-[#fcf4ff]"
          >
            {/* Image réduite */}
            <div className="w-full h-44 rounded-t-xl overflow-hidden border-b border-gray-200 relative">
              <Image
                src={project.projectImage}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                priority={true}
              />
            </div>

            {/* Contenu compact */}
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {project.title}
              </h3>

              <p className="text-gray-700 mb-3 text-sm flex-grow leading-relaxed">
                {project.description}
              </p>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:bg-pink-500 gap-2 self-start bg-gray-900 text-white px-4 py-1.5 rounded-md text-xs font-medium shadow-md transition"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="https://github.com/yamina169"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-transparent px-6 py-1.5 text-gray-700 font-semibold hover:bg-gray-100 transition"
        >
          Show more
          <Image
            src={assets.right_arrow_bold}
            alt="Right arrow"
            width={18}
            height={18}
            className="ml-1"
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
