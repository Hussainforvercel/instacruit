"use client";
import React from "react";
import { motion } from "framer-motion";

// Sentence and letter animation variants
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Hero: React.FC = () => {
  const text = "Welcome to InstaCruit";

  return (
    <section
      className="relative text-black py-10 overflow-hidden bg-black bg-cover bg-center"
      style={{
        height: "80vh", // Ensures the section height fits the viewport
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // poster="/preload1.png" // Use a poster image to display before the video loads
        className="absolute inset-0 w-full md:w-3/4 h-full object-cover z-0" // Increased width to 3/4 of the container on medium screens
      >
        <source src="/bbgg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-end relative z-10 h-full">
        {/* Text Content */}
        <div className="w-full md:w-auto mb-6 md:mb-0 flex flex-col justify-center items-end md:pl-8 lg:pl-16 text-right">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-titillium font-bold leading-tight mb-4"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Map through the text characters */}
            {text.split("").map((char, index) => {
              const isPurple = text.indexOf("InstaCruit") <= index;

              return (
                <motion.span
                  key={index}
                  className={isPurple ? "text-[#830e70]" : "text-white"}
                  variants={letter}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl font-mingzat mb-6 text-white leading-normal md:leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            InstaCruit: Sikre deg kvalifiserte kandidater med <br />
            InstaCruiter – ditt pålitelige verktøy for rekruttering!
          </motion.p>

          {/* Buttons Section */}
          <div className="flex flex-row justify-end space-x-4 mt-4">
            <motion.a
              href="#"
              className="bg-[#830e70] hover:bg-[#bd99bd] text-white font-bold py-3 px-6 rounded-xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              Registrer Interesse
            </motion.a>
            <motion.a
              href="#"
              className="bg-white text-center hover:bg-[#bd99bd] text-[#830e70] font-bold py-3 px-6 rounded-xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              Logg inn
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
