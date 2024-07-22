"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div className='bg-gray-300 my-24 h-16 w-1
    rounded-full hidden sm:block dark:bg-opacity-20'
        initial={{scale: 0, y: 100 }}
        animate={{scale: 1, y: 0 }}
        transition={{duration: 0.125}}
        ></motion.div>
  );
}
