import React from "react";

//Project Images
import corpcommentImg1 from "@/public/project1.jpg";
import corpcommentImg2 from "@/public/project2.png";
import corpcommentImg3 from "@/public/projects3.png";

//Certificate Images
import cert_img1 from "@/public/sql_cert.png";
import cert_img2 from "@/public/bigdata_program_cert.jpg";

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
    name: "Certificates",
    hash: "#certificates",
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
    "Data Extraction",
    "Data Preparation",
    "Data Analysis",
    "Python",
    "Hadoop",
    "MySQL",
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
    title: "Design Website UI for Institute of Technology Education",
    description:
      "As an additional project alongside my studies, I designed and refined a website for an educational institution in Chiang Mai to prepare it for further development on WordPress.",
    tags: ["Figma", "HTML", "CSS"],
    imageUrl: corpcommentImg3,
  },
  {
    title: "Project Performance Reporting",
    description:
      "I worked as a Front-End developer on this project for 1 semester on 2021 at Phrae Technical College at Technique Computer Department. Students can use for summary documents about term projects.",
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

export const certificatesData = [
  {
    title: "Big Data Exchange Program",
    description:
      "Gained hands-on experience with Big Data tools in China, including Hadoop, HiveQL, HBase, and Zookeeper. Utilized Python and MySQL for data sourcing, processing, and analysis using libraries like NumPy and Pandas.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL", "Jquery", "Ajax"],
    imageUrl: cert_img2,
  },
    {
    title: "SQL Basic by HackkerRank",
    description:
      "SQL (Basic) It includes simple queries, relationships, and aggregators.",
    imageUrl: cert_img1,
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
  {
    category: "Programming Languages",
    color: "bg-purple-100 text-purple-700",
    skills: ["Python", "SQL", "JavaScript", "TypeScript", "Node.js", "PHP"],
  },
  {
    category: "Data Engineering",
    color: "bg-blue-100 text-blue-700",
    skills: ["Airflow","Apache Spark","Airflow","Data Extraction","Data Preparation","Data Integration",],
  },
  {
    category: "Databases",
    color: "bg-teal-100 text-teal-700",
    skills: ["MySQL", "Firebase", "AzureSQL"],
  },
  {
    category: "Cloud & DevOps",
    color: "bg-green-100 text-green-700",
    // skills: [""],
  },
  {
    category: "Data Visualization",
    color: "bg-orange-100 text-orange-700",
    skills: ["Matplotlib"],
  },
  {
    category: "Tools & Frameworks",
    color: "bg-pink-100 text-pink-700",
    skills: ["Git", "Ubuntu", "Jupyter", "Pandas", "NumPy", "Scikit-learn"],
  },
];