"use client";
import React from "react";
import { motion } from "framer-motion";

export default function RegisterInterest() {
  return (
    <motion.div
      className="relative flex items-center justify-center min-h-screen bg-black text-white"
      style={{
        backgroundImage: 'url("/path-to-your-gif.gif")',
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
        className="relative z-10 p-8 mx-4 bg-black bg-opacity-90 rounded-lg shadow-lg max-w-md border-[#841F84] border-2 mb-20 "
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Registrer interesse
        </motion.h1>
        <motion.p
          className="mb-8 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Fyll inn litt informasjon om bedriften din, og en av Xcruiter sine
          rådgivere tar kontakt innen 24 timer.
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

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Fullt navn*
            </label>
            <input
              type=""
              id="email"
              className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Fullt navn*"
              required
            />
          </div>

          {/* text */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Message
            </label>
            <input
              type="text" // Assuming you meant to use "text" as the input type
              id="email"
              className="w-full px-4 py-2 h-20 rounded-md bg-white text-black placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
  );
}
