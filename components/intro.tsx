"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Intro_image from "/public/intro_pro3.jpg";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.3);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col items-center justify-center min-h-[90vh] py-10 text-center"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Image
          src={Intro_image}
          alt="Profile"
          width={180}
          height={180}
          className="rounded-full border-4 border-white shadow-xl mx-auto"
          priority
        />
      </motion.div>

      {/* Headline */}
      <motion.h1
        className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Data Engineer
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        className="max-w-2xl mx-auto text-lg sm:text-2xl text-gray-700 mb-10 font-normal"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Third-year Software Engineering student passionate about{" "}
        <span className="font-semibold text-purple-600">data pipelines</span>,{" "}
        <span className="font-semibold text-blue-600">ETL/ELT processes</span>, and{" "}
        <span className="font-semibold text-teal-600">scalable data solutions</span>
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-10 justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="#projects"
          className="px-8 py-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:scale-105 transition"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
        >
          View My Work
        </Link>
        <a
          href="/CV.pdf"
          download
          className="px-8 py-3 rounded-md bg-white border border-gray-300 text-gray-900 font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-8 justify-center text-2xl text-gray-500 mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="https://github.com/phonlapatS"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/phonlapat-suanghirnan/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition"
        >
          <BsLinkedin />
        </a>
        <a
          href="mailto:your@email.com"
          className="hover:text-teal-600 transition"
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
}
