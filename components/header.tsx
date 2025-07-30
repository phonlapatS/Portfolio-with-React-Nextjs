"use client";

import React from 'react'
import { motion } from "framer-motion";
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

export function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <div className="flex justify-center w-full">
        <motion.div
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50
            bg-white bg-opacity-90 border border-white border-opacity-40
            shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
            rounded-full px-4 py-2
            w-max"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        >
          <nav>
            <ul className="flex items-center gap-6 text-[1rem] font-medium text-gray-500">
              {links.map(link => (
                <motion.li
                  className="relative"
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={clsx(
                      "flex items-center justify-center px-3 py-2 rounded-full hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                      {
                        "text-gray-950 dark:text-gray-200 font-semibold": activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name)
                      setTimeOfLastClick(Date.now())
                    }}
                  >
                    {link.name}
                    {link.name === activeSection && (
                      <motion.span
                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </header>
  );
}
