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

// Wavy Lines Component
const WavyLines: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <svg
        viewBox="0 0 1440 320"
        className="absolute w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          fill="#fad0f3"
          fillOpacity="0.1"
          d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,208C672,203,768,181,864,176C960,171,1056,181,1152,197.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

const Hero: React.FC = () => {
  const text = "Welcome to InstaCruit";

  return (
    <section
      className="relative text-black py-20 overflow-hidden bg-black bg-cover bg-center"
      style={{
        height: "80vh", // Makes sure the section height fits the viewport
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-1/2 h-full object-cover z-0" // Adjusted for responsiveness
      >
        <source src="/normal_pb-66379c38b6706-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Wavy Lines */}
      <WavyLines />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-end relative z-10 h-full">
        {/* Text Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-right md:pr-10">
          <motion.h1
            className="text-3xl md:text-5xl font-titillium font-bold leading-tight mb-4"
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
            className="text-base md:text-lg lg:text-xl font-mingzat mb-6 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            InstaCruit: Sikre deg kvalifiserte kandidater med InstaCruiter –
            ditt pålitelige verktøy for rekruttering!
          </motion.p>
          <div className="flex justify-center md:justify-end space-x-4 mt-4">
            <motion.a
              href="#"
              className="bg-[#830e70] hover:bg-[#bd99bd] text-white font-bold py-3 px-6 md:px-10 rounded-xl transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              Registrer Interesse
            </motion.a>
            <motion.a
              href="#"
              className="bg-white hover:bg-[#bd99bd] text-[#830e70] font-bold py-3 px-6 md:px-10 rounded-xl transition duration-300"
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
