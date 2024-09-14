// components/Automatisering.js
"use client";
import React from "react";
import { motion } from "framer-motion";

const Automatisering = () => {
  return (
    <motion.div
      className="bg-black text-white p-8 md:p-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }} // Triggers when 20% of the component is in view
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#830e70]">
        Automatisering
      </h2>
      <p className="mt-4 text-lg md:text-xl max-w-md">
        Vi effektiviserer måten selskaper og kandidater møtes på, ved å skape en
        sømløs og effektiv plattform som gjør rekrutteringsprosessen enkel,
        smart og givende.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-[#830e70]">
        <div>
          <h3 className="text-4xl font-bold">6119+</h3>
          <p>Kandidater åpne for ny jobb</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">3017+</h3>
          <p>Nyutdannede kandidater</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">712+</h3>
          <p>Har vært inne på 2 gangsintervju</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Automatisering;
