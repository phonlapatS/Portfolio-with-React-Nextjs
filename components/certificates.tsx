"use client";

import React from 'react';
import { certificatesData } from '@/lib/data';
import SectionHeading from './section-heading';
import Certificate from './certificate';
import { useSectionInView } from '@/lib/hooks';

export default function Certificates() {
  const { ref } = useSectionInView('Certificates', 0.5);

  return (
    <section ref={ref} id="certificates" className='scroll-mt-28 mb-28'>
      <SectionHeading> My Certificates</SectionHeading>
      <div className='px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto'>
        {certificatesData.map((certificate, index) => (
          <React.Fragment key={index}>
            <Certificate {...certificate} small />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

