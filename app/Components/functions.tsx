"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Define scroll reveal animations
const revealVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="relative bg-black py-16 overflow-hidden mt-10">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bgg.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative container mx-auto px-6 z-10">
        <motion.h2
          className="text-3xl font-bold text-center mb-4 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={revealVariant}
        >
          FUNKSJONER
        </motion.h2>
        <motion.div
          className="flex justify-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={revealVariant}
        >
          <span className="w-12 h-1 bg-white inline-block rounded-full"></span>
        </motion.div>
        <div className="flex flex-col space-y-8">
          {/* Row 1: Card - Image */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={revealVariant}
          >
            {/* Card 1 */}
            <motion.div
              className="flex flex-col text-left p-6 bg-white bg-opacity-80 rounded-lg shadow-lg md:w-1/2"
              variants={revealVariant}
            >
              <h3 className="text-lg font-semibold text-black mb-2">
                Reduser kostnader
              </h3>
              <p className="text-black">
                Senk kostnadene og effektiviser rekrutteringsprosessen med
                InstaCruiter! Vi tilbyr en kostnadseffektiv løsning som sparer
                deg for annonseringsutgifter og tid brukt på screenings- og
                intervjuprosesser.
              </p>
            </motion.div>
            {/* Image 1 */}
            <motion.div
              className="flex items-center justify-center md:w-1/2"
              variants={revealVariant}
            >
              <Image
                src="/10001.svg" // Replace with your image path
                alt="Feature 1"
                width={200}
                height={200}
                className="filter-red"
              />
            </motion.div>
          </motion.div>

          {/* Row 2: Image - Card */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={revealVariant}
          >
            {/* Card 2 */}
            <motion.div
              className="flex flex-col text-left p-6 bg-white bg-opacity-80 rounded-lg shadow-lg md:w-1/2"
              variants={revealVariant}
            >
              <h3 className="text-lg font-semibold text-black mb-2">
                Smartannonsering
              </h3>
              <p className="text-black">
                Maksimer synligheten din med smartannonsering fra InstaCruiter!
                Vi hjelper deg med å nå ut til et bredere spekter av kandidater
                ved å målrette annonsene dine mot potensielle talenter.
              </p>
            </motion.div>
            {/* Image 2 */}
            <motion.div
              className="flex items-center justify-center md:w-1/2"
              variants={revealVariant}
            >
              <Image
                src="/10002.svg" // Replace with your image path
                alt="Feature 2"
                width={200}
                height={200}
              />
            </motion.div>
          </motion.div>

          {/* Row 3: Card - Image */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={revealVariant}
          >
            {/* Card 3 */}
            <motion.div
              className="flex flex-col text-left p-6 bg-white bg-opacity-80 rounded-lg shadow-lg md:w-1/2"
              variants={revealVariant}
            >
              <h3 className="text-lg font-semibold text-black mb-2">
                Automatisering
              </h3>
              <p className="text-black">
                Med automatisering fra InstaCruiter, tar vi
                rekrutteringsprosessen til nye høyder! Vår plattform er designet
                for å både erstatte og forsterke tradisjonelle
                stillingsannonser.
              </p>
            </motion.div>
            {/* Image 3 */}
            <motion.div
              className="flex items-center justify-center md:w-1/2"
              variants={revealVariant}
            >
              <Image
                src="/10003.svg" // Replace with your image path
                alt="Feature 3"
                width={200}
                height={200}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
