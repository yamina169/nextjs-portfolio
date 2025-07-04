import footer_bg_color from "./footer-bg-color.png";
import header_bg_color from "./header-bg-color.png";
import logo from "./logo.png";
import logo_white from "./whiteLogo.png";
import work_1 from "./work-1.png";
import work_2 from "./work-2.png";
import work_3 from "./work-3.png";
import work_4 from "./work-4.png";
import user_image from "./user-image.jpeg";
import hand_icon from "./hand-icon.png";

// Export des images "illustrations"
export const assets = {
  footer_bg_color,
  header_bg_color,
  logo,
  logo_white,
  work_1,
  work_2,
  work_3,
  work_4,
  user_image,
  hand_icon,
};

// Données projets
export const workData = [
  {
    title: "Project 1",
    description: "This is project 1",
    projectImage: "/work-1.png",

    githubUrl: "https://github.com/user/project1",
  },
  {
    title: "Project 2",
    description: "This is project 2",
    projectImage: "/work-2.png",

    githubUrl: "https://github.com/user/project2",
  },
  {
    title: "Project 4",
    description:
      "project 4 project 4project 4project 4project 4project 4project 4project 4",
    projectImage: "/work-4.png ",

    githubUrl: "https://github.com/user/project4",
  },
];

// Import des icônes react-icons
import {
  FaLinux,
  FaCss3Alt,
  FaReact,
  FaDocker,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";

import {
  SiExpress,
  SiFlask,
  SiJavascript,
  SiNextdotjs,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

export const skillsData = [
  { title: "HTML", icon: SiHtml5, color: "#E34F26" },
  { title: "CSS", icon: FaCss3Alt, color: "#1572B6" },

  { title: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { title: "Python", icon: FaPython, color: "#3776AB" },
  { title: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { title: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { title: "React.js", icon: FaReact, color: "#61DAFB" },
  { title: "Next.js", icon: SiNextdotjs, color: "#000000" },

  { title: "Express.js", icon: SiExpress, color: "#000000" },
  { title: "Node.js", icon: FaNodeJs, color: "#339933" },
  { title: "Flask", icon: SiFlask, color: "#000000" },

  { title: "MySQL", icon: SiMysql, color: "#4479A1" },
  { title: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { title: "Oracle DB", icon: SiOracle, color: "#F80000" },

  { title: "Docker", icon: FaDocker, color: "#2496ED" },
  { title: "Linux System Administration", icon: FaLinux, color: "#000000" },
  { title: "GitHub", icon: FaGithub, color: "#181717" },
  { title: "GitLab", icon: FaGitlab, color: "#FC6D26" },
];

// Infos éducation & certifications
export const infoList = [
  {
    title: "Education",
    description:
      "Software Engineering student at TEK-UP University\n2023 – Present",
  },
  {
    title: "Certifications",
    description:
      "AWS Certified Cloud Practitioner\nRed Hat Certified System Administrator",
  },
];

// Outils utilisés (images)
export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
