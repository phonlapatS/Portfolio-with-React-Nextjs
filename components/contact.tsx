"use client";


import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";




export default function Contact() {
    const {ref} = useSectionInView('Contact', 0.5);


  return (
    <motion.section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] 
    text-center 

    initial={{ opacity: 0, }}
    whileInView={{ opacity: 1, }}
    transition={{ duration: 1 }}
    viewport={{once: true,}}
    ">
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:phonlapats.2002@gmail.com">
          PhonlapatS.2002@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col dark:text-black/80" action={async (formData) => {
        const { data, error } = await sendEmail(formData);

        if (error) { 
          toast.error(error);
          return;
        }

        toast.success("Email sent successfully!");
      }}
      >
        <input placeholder="Your email" required maxLength={500}
        name="senderEmail"
        className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all
        dark:outline-none
        " type="email" />
        <textarea placeholder="Your message" required maxLength={5000}
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all"
          id=""
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
