"use client";

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView('About', 0.5);   

  return (
        <motion.section 
            ref={ref}
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >

        <SectionHeading>About Me</SectionHeading>
         
         <p className="mb-3">
        After completing the internship, I got the High Vocational Certificate. I decided to take my career path in programming and websites,
        because from internship to a position unsuitable for me, that{" "}
        <span className="font-medium">PHP Developer.</span> After the internship, 
        I am confident that I can continue to develop in another way in this career and change my mindset of coding and programming. {" "}
        {/* <span className="font-medium"></span>.{" "} */}
        The part I learned most about programming is <span className="italic">problem solving</span> 
        and I like the feeling of solving difficult problems. Finally, I <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. 
        the core of my stack is{" "}
        <span className="font-medium">
          React, Node. Js, MongoDB and TypeScript
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to learn new technologies.  
        I am looking for a{" "}
        <span className="font-medium">full-time position</span> as a backend developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and listening to music.
         I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I'm currently
        studying about{" "}
        <span className="font-medium">psychology and philosophy</span>. I'm also learning about Investment in various assets.
      </p>
        </motion.section>
  );
}
