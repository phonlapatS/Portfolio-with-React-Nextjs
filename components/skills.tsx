"use client";

type SkillGroup = {
  category: string;
  skills: string[];
};

import React from 'react';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.5);

  // Only show categories that have at least one skill
  const visibleSkills = skillsData.filter(group => group.skills && group.skills.length > 0);

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="mb-28 max-w-7xl scroll-mt-28 mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeading>
        Technical Skills
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {visibleSkills.map((group, idx) => (
          <motion.div
            key={group.category}
            className="text-left rounded-2xl p-6 bg-white"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-6">{group.category}</h3>
            <ul className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <motion.li
                  key={skill}
                  className={`px-4 py-2 rounded-full text-base font-semibold shadow-sm
                    ${
                      group.category === "Programming Languages"
                        ? "bg-purple-100 text-purple-700"
                        : group.category === "Data Engineering"
                        ? "bg-blue-100 text-blue-700"
                        : group.category === "Databases"
                        ? "bg-green-100 text-green-700"
                        : group.category === "Cloud & DevOps"
                        ? "bg-sky-100 text-sky-700"
                        : group.category === "Data Visualization"
                        ? "bg-orange-100 text-orange-700"
                        : group.category === "Tools & Frameworks"
                        ? "bg-pink-100 text-pink-700"
                        : ""
                    }
                  `}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
