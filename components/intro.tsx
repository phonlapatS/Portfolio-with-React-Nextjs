"use client";

import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

import Image from 'next/image'; //import for use image in nextJS
import Link from 'next/link';
import Intro_image from '/public/intro_pro3.jpg'; //intro image path

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload} from "react-icons/hi"; //import for use react icons
import { FaGithubSquare } from 'react-icons/fa';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Intro() {
  const {ref} = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } =  useActiveSectionContext();

  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
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

        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] 
        sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Rocket.</span> I'm a{" "}
          <span className="font-bold">Back-end developer</span> with{" "}
          <span className="font-bold">1 years</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. My focus is{" "}
          <span className="underline">React (Next.js), MongoDB and Go </span>.
        </motion.h1>
        
                  <motion.div className='flex flex-col sm:flex-row items-center justify-center
                    gap-2 px-4 text-lg font-medium '
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            delay: 0.1,
                        }}
                    >

                    <Link href="#contact" 
                        className='group bg-gray-900 text-white px-7 py-3 flex items-center
                        gap-2 rounded-full outline-none
                        focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-10
                        transition'
                        onClick={() =>{
                          setActiveSection('Contact');
                          setTimeOfLastClick(Date.now());
                        }}
                    >
                         Contact me here{""}
                         <BsArrowRight
                         className='opacity-70 group-hover:translate-x-1 transition' />
                    </Link>

                    <a href='/CV.pdf' 
                        className='group bg-white px-7 py-3 flex items-center
                        gap-2 rounded-full outline-none focus:scale-110 
                        hover:scale-110 active:scale-10
                        transition cursor-pointer border borderBlack dark:bg-white/10' download={true}>
                            Download CV{""} <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                         
                    </a>
                   

                    <a href="https://www.linkedin.com/in/phonlapat-suanghirnan/" target="_blank"
                        className='bg-white p-4 text-gray-700 flex items-center
                        gap-2 rounded-full focus:scale-[1.15] hover:text-gray-950 
                        hover:scale-[1.15] active:scale-105 
                        transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'>
                            <BsLinkedin />
                    </a>

                    <a href="https://github.com/phonlapatS" target="_blank"
                        className='bg-white p-4 text-gray-700 flex items-center
                        gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] 
                        hover:scale-[1.15] hover:text-gray-950 active:scale-105 
                        transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'>
                            <FaGithubSquare />
                    </a>
             
                  </motion.div>

    </section>
  )
}
