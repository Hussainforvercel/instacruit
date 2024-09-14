// components/ContactUs.js
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <motion.div
      className="relative flex flex-col justify-center items-start min-h-screen bg-black text-white p-10 md:p-20"
      style={{
        backgroundImage: 'url("/path-to-your-background.gif")', // Replace with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Kontakt oss
      </motion.h2>
      <motion.p
        className="text-lg leading-relaxed max-w-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Trenger du hjelp til å finne de rette kandidatene til din bedrift? Vårt
        team står klare til å hjelpe deg. Ta kontakt med oss for å diskutere
        dine behov og finne ut hvordan vi kan tilby deg en skreddersydd
        rekrutteringsløsning.
      </motion.p>
    </motion.div>
  );
}
