import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const MotionImage = motion(Image);

const TypewriterText = ({ text, className }) => {
  const controls = useAnimationControls();
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    let currentIndex = 0;
    controls.set({ width: 0 });
    setDone(false);

    const interval = setInterval(() => {
      currentIndex++;
      controls.start({ width: `${currentIndex}ch` });

      if (currentIndex >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text, controls]);

  return (
    <motion.span
      className={`${className} inline-block whitespace-nowrap overflow-hidden relative`}
      style={{ display: "inline-block" }}
      animate={controls}
      initial={{ width: 0 }}
    >
      {text}
      {!done && (
        <motion.span
          className="absolute top-0 right-0 h-full w-[2px] bg-pink-600"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </motion.span>
  );
};

const Header = () => {
  return (
    <section className="pt-24 w-11/12 max-w-6xl mx-auto min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 px-4 sm:px-6">
      {/* Partie gauche - Texte */}
      <div className="w-full md:w-1/2 text-left">
        <h3 className="flex items-center gap-3 text-2xl md:text-3xl mb-3 font-ovo text-pink-600">
          Hello! I'm
          <MotionImage
            src={assets.hand_icon}
            alt="Waving hand"
            width={28}
            height={28}
            animate={{ rotate: [0, 15, -10, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ originX: "70%", originY: "70%" }}
          />
        </h3>

        <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold leading-tight">
          <TypewriterText text="Yamina Rezgui" />
        </h1>

        <h2 className="text-base sm:text-lg md:text-xl text-gray-500 mb-6 font-medium">
          <span className="block sm:inline">Full-Stack Web Developer</span>
          <span className="block sm:inline">
            & Software Engineering Student
          </span>
        </h2>

        <p className="mb-10 max-w-md text-gray-700 leading-relaxed text-sm sm:text-base">
          <span className="block sm:inline">Building elegant solutions</span>
          <span className="block sm:inline">
            to complex problems with modern technologies.
          </span>
        </p>

        <div className="flex flex-wrap gap-6">
          <a
            href="#contact"
            className="px-6 py-2 sm:px-8 sm:py-3 bg-pink-600 text-white rounded-full shadow-lg hover:bg-pink-700 transition text-sm sm:text-base"
          >
            Contact Me
          </a>

          <a
            href="https://flowcv.com/resume/rwa9t29ohoiv"
            download
            className="px-6 py-2 sm:px-8 sm:py-3 border border-gray-400 rounded-full hover:bg-gray-200 transition text-gray-800 flex items-center gap-2 text-sm sm:text-base"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Partie droite - Code */}
      <div className="w-full md:w-5/12 border border-gray-300 rounded-xl cursor-pointer transition duration-500 hover:shadow-xl hover:scale-105 transform">
        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          {/* Barre de titre */}
          <div className="flex items-center bg-gray-100 px-5 py-3">
            <div className="flex space-x-2">
              <span className="w-4 h-4 rounded-full bg-[#ff5f56]" />
              <span className="w-4 h-4 rounded-full bg-[#ffbd2e]" />
              <span className="w-4 h-4 rounded-full bg-[#27c93f]" />
            </div>
            <span className="ml-6 text-gray-500 text-sm font-mono select-none">
              developer.js
            </span>
          </div>

          {/* Code */}
          <pre className="p-6 font-mono text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
            <code>
              <span className="text-gray-500">// Software Engineer</span>
              {"\n"}
              <span className="text-[#569cd6]">const </span>
              <span className="text-[#4ec9b0]">developer</span> = {"{"}
              {"\n"}
              <span className="ml-6">
                <span className="text-[#9cdcfe]">name</span>: {""}
                <span className="text-[#ce9178]">'Yamina Rezgui'</span>,{"\n"}
                <span className="text-[#9cdcfe]">skills</span>: [
                <span className="text-[#ce9178]">'React'</span>, {""}
                <span className="text-[#ce9178]">'Next.js'</span>, {""}
                <span className="text-[#ce9178]">'Node.js'</span>],{"\n"}
                <span className="text-[#9cdcfe]">focuses</span>: [
                <span className="text-[#ce9178]">'Full-Stack'</span>, {""}
                <span className="text-[#ce9178]">'UI/UX'</span>],{"\n"}
                <span className="text-[#9cdcfe]">learning</span>: {""}
                <span className="text-[#ce9178]">'Always'</span>
              </span>
              {"\n"}
              {"};"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Header;
