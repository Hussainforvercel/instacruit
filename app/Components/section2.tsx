// components/SectionTwo.js
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionTwo() {
  return (
    <motion.div
      className="relative bg-black text-white py-16 px-4 mt-10 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {/* Semi-transparent overlay to fade the GIF */}
      <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

      {/* Background GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("/giff.gif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative max-w-5xl mx-auto text-center z-20">
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Kontakt oss for bistand med rekruttering av riktige og gode kandidater
          til din bedrift
        </motion.h2>
        <motion.button
          className="bg-[#830e70] text-white px-10 py-4 rounded-full hover:bg-[#bd99bd]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Registrer interesse
        </motion.button>
      </div>
    </motion.div>
  );
}
