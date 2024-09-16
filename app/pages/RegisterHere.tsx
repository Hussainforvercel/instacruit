"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  return (
    <div className="relative bg-black text-white p-10 md:p-20">
      {/* Contact Us Section */}
      <motion.div
        className="relative flex flex-col justify-center items-center text-center py-16"
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
          Registrer interesse
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Oppgi litt informasjon om din bedrift, og en av våre rådgivere fra
          InstaCruit vil kontakte deg innen 24 timer.
        </motion.p>
      </motion.div>

      {/* Register Interest Section */}
      <motion.div
        className="relative flex items-center justify-center py-16"
        style={{
          backgroundImage: 'url("/path-to-your-gif.gif")', // Replace with your background image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          className="relative z-10 p-8 mx-4 bg-black bg-opacity-90 rounded-lg shadow-lg max-w-2xl border-[#841F84] border-2 mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h1
            className="text-4xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Kontakt oss
          </motion.h1>
          <motion.p
            className="mb-8 text-sm text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Trenger du hjelp med å rekruttere de rette kandidatene? Ta kontakt
            med oss!
          </motion.p>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Company Name */}
            <div className="mb-4">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium mb-2"
              >
                Bedriftsnavn*
              </label>
              <input
                type="text"
                id="companyName"
                className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Skriv inn navn her"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-post*
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="E-postadresse"
                required
              />
            </div>

            {/* Full Name */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium mb-2"
              >
                Fullt navn*
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Fullt navn"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Melding
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 h-20 rounded-md bg-white text-black placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Din melding..."
                required
              />
            </div>

            {/* Checkbox */}
            <div className="mb-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-yellow-500 bg-gray-800 border-gray-700 rounded focus:ring-yellow-500"
                />
                <span className="ml-2 text-sm">
                  Ja, jeg ønsker å motta informasjon og bli holdt oppdatert fra
                  Xcruiter.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-transparent text-white border border-[#841F84] px-6 py-2 rounded-full hover:bg-[#866186] hover:text-black transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Send inn skjema
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
}
