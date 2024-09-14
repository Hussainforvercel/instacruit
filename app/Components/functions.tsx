// components/FeaturesSection.js
"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { FaMoneyBillWave, FaBullhorn, FaCog } from "react-icons/fa"; // Import icons from react-icons

const FeaturesSection = () => {
  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-pink-100 py-16 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/background-animate.mp4" // Replace with your video path
        autoPlay
        muted
        loop
      />

      {/* Overlay to add some color to the background video */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl md:text-3xl font-semibold text-white mb-8">
          FUNKSJONER
        </h2>
        <div className="text-center mb-12">
          <span className="inline-block w-10 h-1 bg-white rounded-full"></span>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative">
          {/* Feature 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            <FaMoneyBillWave className="w-16 h-16 text-[#830e70]" />
            <h3 className="text-lg font-bold text-[#830e70]">
              Reduser kostnader
            </h3>
            <p className="text-sm text-gray-700">
              Senk kostnadene og effektiviser rekrutteringsprosessen med
              InstaCruiter! Vi tilbyr en kostnadseffektiv løsning som sparer deg
              for annonseringsutgifter og tid brukt på screenings- og
              intervjuprosesser.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            <FaBullhorn className="w-16 h-16 text-[#830e70]" />
            <h3 className="text-lg font-bold text-[#830e70]">
              Smartannonsering
            </h3>
            <p className="text-sm text-gray-700">
              Maksimer synligheten din med smartannonsering fra InstaCruiter! Vi
              hjelper deg med å nå ut til et bredere spekter av kandidater ved å
              målrette annonsene dine mot potensielle talenter som kanskje ikke
              aktivt søker.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
          >
            <FaCog className="w-16 h-16 text-[#830e70]" />
            <h3 className="text-lg font-bold text-[#830e70]">Automatisering</h3>
            <p className="text-sm text-gray-700">
              Med automatisering fra InstaCruiter, tar vi rekrutteringsprosessen
              til nye høyder! Vår plattform er designet for å både erstatte og
              forsterke tradisjonelle stillingsannonser.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
