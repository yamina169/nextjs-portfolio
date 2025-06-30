// Imports images
import user_image from "./user-image.jpeg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_white from "./whiteLogo.png";

import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

// Export des images
export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  logo_white,
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
