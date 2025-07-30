"use client";

import Image from "next/image";
import { certificatesData } from "@/lib/data";

type CertificateProps = typeof certificatesData[number] & { small?: boolean };

export default function Certificate({
  title,
  description,
  imageUrl,
  small = false,
}: CertificateProps) {
  return (
    <div className="mb-0">
      <section
        className={`bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center
                   hover:border-blue-500 transition-colors
                   shadow-md hover:shadow-lg
                   dark:bg-white/5 dark:border-white/20 dark:hover:border-blue-400
                   w-full h-full
                   ${small ? "max-w-md mx-auto" : ""}`}
      >
        <div
          className={`relative w-full ${
            small ? "h-56" : "h-72"
          } rounded-lg overflow-hidden shadow`}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            quality={95}
          />
        </div>
        <div className="w-full mt-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
            {title}
          </h3>
          <p className="mt-2 text-gray-700 dark:text-white/70 text-center text-base">
            {description}
          </p>
        </div>
      </section>
    </div>
  );
}
