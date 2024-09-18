"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Tjenester = () => {
  return (
    <section className="bg-black text-white px-6 py-16 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.h1
          className="text-3xl font-bold mb-10 text-center mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Tjenester
        </motion.h1>

        {/* Two-column layout on medium screens and above */}
        <motion.div
          className="grid gap-12 md:grid-cols-2 items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Card 1: Logo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center bg-white bg-opacity-10 p-8 rounded-lg shadow-md h-full"
          >
            <Image
              src="/logg.png" // Replace with your image path
              alt="Feature 1"
              width={150}
              height={150}
              className="mb-4"
            />
            <h2 className="text-xl font-semibold mb-4 text-center">Logo</h2>
            <p className="text-base leading-relaxed text-center">
              La oss bidra til å skape en logo som skiller seg ut og som vil
              være tidløs i årene som kommer. En profesjonell logo styrker
              tilliten til dine tjenester eller produkter blant kundene,
              samtidig som den øker stoltheten blant deg og dine ansatte.
            </p>
          </motion.div>

          {/* Card 2: Nettside */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col items-center bg-white bg-opacity-10 p-8 rounded-lg shadow-md h-full"
          >
            <Image
              src="/logg.png" // Replace with your image path
              alt="Feature 2"
              width={150}
              height={150}
              className="mb-4"
            />
            <h2 className="text-xl font-semibold mb-4 text-center">Nettside</h2>
            <p className="text-base leading-relaxed text-center">
              Mange bedrifter som søker en ny logo, har også behov for en
              oppdatert nettside. Vi er eksperter på plattformer som Adobe Muse,
              Squarespace og Shopify, og vi kan raskt og enkelt skape stilige
              nettsider og nettbutikker til rimelige priser. Ønsker dere en mer
              skreddersydd løsning, tilbyr vi også programmering av nettsider
              fra grunnen av. Alle våre nettsider er responsivt designet, slik
              at de ser flotte ut og fungerer optimalt på nettbrett og mobil. Ta
              kontakt med oss så finner vi den perfekte løsningen for din
              bedrift.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tjenester;
