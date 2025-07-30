"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I am currently a third-year student in Software Engineering,
        transferring credits to the final year of my degree. After participating
        in an exchange program in China, I developed a strong interest in the
        field of Data, especially the role of a{" "}
        <span className="font-medium">Data Engineer</span>. This interest partly
        came from inspiration by senior peers and my part-time work experience,
        where I frequently used SQL and found it intuitive and enjoyable to work
        with databases. I am eager to deepen my knowledge and skills in data
        engineering, database management, and data processing technologies. The
        core of my technical skills includes{" "}
        <span className="font-medium">
         SQL, Azure SQL, Firebase and Python {/* Apache Airflow */}
        </span>. I am also interesting in data pipeline tools and cloud platforms, and
        always keep to learn new technologies in this fast-growing field. 
        I am currently seeking a{" "}
        <span className="font-medium">
          Intern position as a Data Engineer
        </span>
        .
      </p>
      <p>
        <span className="italic">
          When I'm not studying or working with data
        </span>
        , I enjoy playing video games, watching movies, and listening to music.
        I also love <span className="font-medium">learning new things</span> and
        am currently exploring topics in psychology, philosophy, and investment
        in various asset classes.
      </p>
    </motion.section>
  );
}
