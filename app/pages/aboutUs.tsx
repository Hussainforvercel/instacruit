"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionTwo from "../Components/section2";

const AboutUs = () => {
  return (
    <section className="bg-black text-white px-6 py-16 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <motion.h1
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Om oss
        </motion.h1>

        {/* Two-column layout on medium screens and above */}
        <motion.div
          className="grid gap-16 md:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Vår visjon */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">Vår visjon</h2>
            <p className="text-base leading-relaxed">
              Xcruiter's visjon er å effektivisere måten selskaper og kandidater
              møtes på, ved å skape en sømløs og effektiv plattform som gjør
              rekrutteringsprosessen enkel, smart og givende. Vi ønsker å være
              drivkraften bak suksessen til både selskaper og enkeltpersoner,
              ved å levere innovative løsninger som kobler riktig talent med de
              rette mulighetene.
            </p>
          </motion.div>

          {/* Vår tilnærming til rekruttering */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-4">
              Vår tilnærming til rekruttering
            </h2>
            <p className="text-base leading-relaxed">
              Vår tilnærming til rekruttering er basert på å bruke teknologi for
              å effektivisere prosessen og gjøre den mer nøyaktig. Vi tror på en
              datadrevet tilnærming for å finne de beste talentene, og vi bruker
              kvalitetsikring og kunstig intelligens for å sikre at vi finner
              kandidater som matcher bedriftens krav og kultur. Vårt mål er å
              bygge langsiktige relasjoner med våre kunder og kandidater.
            </p>
          </motion.div>
        </motion.div>

        {/* Vår teknologi */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Vår teknologi</h2>
          <p className="text-base leading-relaxed">
            Vi har utviklet en avansert teknologi for å gjøre
            rekrutteringsprosessen mer effektiv. Vår plattform kombinerer
            kunstig intelligens, kvalitetsikring og analyse for å finne de beste
            kandidatene. Vår plattform gjør det mulig å sortere gjennom store
            mengder data på kort tid og finne kandidater som ellers ville vært
            oversett. Vårt oppdrag er å koble arbeidere med den nyeste
            teknologien, og jobbsøkere kontinuerlig fordype vår plattform for å
            tilby bedre resultater for våre kunder.
          </p>
        </motion.div>
      </div>
      <SectionTwo />
    </section>
  );
};

export default AboutUs;
