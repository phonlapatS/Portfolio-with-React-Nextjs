"use client";

import Image from "next/image";
import { useState } from "react";
import { certificatesData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

type CertificateProps = typeof certificatesData[number] & { small?: boolean };

export default function Certificate({
  title,
  description,
  imageUrl,
  small = false,
}: CertificateProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mb-0">
        <section
          className={`bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center
                   hover:border-blue-500 transition-colors
                   shadow-md hover:shadow-lg
                   dark:bg-white/5 dark:border-white/20 dark:hover:border-blue-400
                   w-full h-full
                   cursor-pointer
                   ${small ? "max-w-md mx-auto" : ""}`}
          onClick={() => setOpen(true)}
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
      {/* Popup Modal with Motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl p-4 max-w-3xl w-full relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <button
                className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-800 dark:hover:text-white"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="relative w-full h-[60vh]">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-contain rounded-lg"
                  quality={100}
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
