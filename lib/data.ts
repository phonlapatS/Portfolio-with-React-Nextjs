import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg1 from "@/public/project1.jpg";
import corpcommentImg2 from "@/public/project2.png";
import corpcommentImg3 from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern Front-end Developer",
    location: "Phrae technical college, Computer technique department",
    description:
      "Design and developed Project Performance Reporting website for students.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "PHP Developer",
    location: "Versatile Haus Company Limited",
    description:
      "I worked as a PHP developer for 6 months in various projects for company and customer webites. and 4 months in Part time. I also upskilled to the Backend developer.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022 - May 2023",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Project Performance Reporting",
    description:
      "I worked as a Front-End developer on this project for 1 semester on 2021 at Phrae Techical College at Technique Computer Department. Students can use for summary documents about term projects.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL", "Jquery", "Ajax"],
    imageUrl: corpcommentImg1,
  },
  {
    title: "Stock Management System",
    description:
      "PHP CRUD for manage small to medium stocks in company. I was assited to this project in 2023 (Back-End developer). It has features like sorting and analytic.",
    tags: ["HTML", "CSS", "PHP", "Bootstrap", "MySQL"],
    imageUrl: corpcommentImg2,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: corpcommentImg3,
  // },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "PHP",
  "Python",
  "MySQL",
  "JavaScript",
  "Node.js",
  "ReactJS",
  "TypeScript",
  "Next.js",
  "Tailwind",
  "Git",
  "Figma",
  "Express",
  "MongoDB",
] as const;