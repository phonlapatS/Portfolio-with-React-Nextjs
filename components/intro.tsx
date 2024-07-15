"use client";

import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image' //import for use image in nextJS
import Intro_image from '/public/intro_pro1.jpg' //intro image path

export default function Intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <div className='relative'>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  type: "tween",
                  duration: 0.2,

                 }}
              >
              <Image 
                    src={Intro_image}
                    alt="Rocket portraits" 
                    width="192" 
                    height="192" 
                    quality="95" 
                    priority={true}
                    className='h-28 w-28 rounded-full
                    object-cover border-[0.35rem]
                    border-white shadow-xl'
                />
              </motion.div>
              
                <motion.span className='absolute bottom-0 right-0 text-4xl'
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7,
                  }}
                >👋</motion.span>

            </div>
        </div>

        <p>
          <span className="font-bold">Hello, I'm Rocket.</span> I'm a{" "}
          <span className="font-bold">Back-end developer</span> with{" "}
          <span className="font-bold">1 years</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React (Next.js), MongoDB and Go </span>.
        </p>
        
    </section>
  )
}
