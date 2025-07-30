import React from "react";

//Image
import corpcommentImg1 from "@/public/project1.jpg";
import corpcommentImg2 from "@/public/project2.png";
import corpcommentImg3 from "@/public/wordanalytics.png";

//React Icon
import { BsFiletypePhp } from "react-icons/bs";
import { BsFiletypeHtml } from "react-icons/bs";
import { FaDatabase } from 'react-icons/fa';
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";

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
    title: "Big data Exchange Program",
    location: "Guizhou Light Industry Technical College (GLITC)",
    description:
      "Completed a 2-month Big Data exchange program covering Python basics, data analysis, and machine learning. Learned everyday Chinese and key Big Data tools used in China, such as Hadoop, HiveQL, HBase, and Zookeeper. Gained practical experience with Python for data sourcing, analysis, and machine learning methods including linear regression, classification, clustering, and supervised/unsupervised learning using libraries like NumPy, Pandas, and Matplotlib.",
       skills: [
    "Data Sourcing",
    "Data Analysis",
    "Python",
    "Hadoop",
    "HiveQL",
    "Apache Hbase",
    "Apache Zookeeper",
  ],
    icon: React.createElement(FaDatabase, { size: 24, color: '#007bff' }),
    date: "March 2023 - June 2023",
  },
  {
    title: "Part time PHP Developer",
    location: "Versatile Haus Company Limited",
    description:
      "I have experience working as a PHP developer on various company and client projects. My responsibilities included debugging, improving website performance for over 15 company sites, and adding features to enhance usability. I also supported junior developers in setting up backend systems for client projects, and helped speed up the testing process by performing initial tests before handing over to the QA team.",
       skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL",
  ],
    icon: React.createElement(BsFiletypePhp),
    date: "March 2023 - June 2023",
  },
  {
    title: "Intern PHP Developer",
    location: "Versatile Haus Company Limited",
    description:
      "During my 6 month internship as a PHP developer, I worked on connecting the database to the website's backend for updates. I was responsible for ensuring that any upgrades or modifications aligned with the latest customer requirements and I also assisted with other junior projects.",
      skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL",
  ],
    icon: React.createElement(BsFiletypePhp),
    date: "Feb 2022 - Oct 2023",
  },
{
  title: "Intern Front-end Developer",
  location: "Phrae technical college, Computer technique department",
  description:
    "I designed and developed a web-based system for reporting project performance using the PDCA model as a Front-end developer.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Bootstrap",
    "MySQL",
    "jQuery",
    "Ajax"
  ],
  icon: React.createElement(BsFiletypeHtml),
  date: "Oct 2019 - Feb 2020",
},
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
];

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
  "AzureSQL",
  "JavaScript",
  "Node.js",
  "TypeScript",
  "Tailwind",
  "Git",
  "Figma",

] as const;