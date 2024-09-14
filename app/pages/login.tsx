"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <motion.div
      className="relative flex items-center justify-center min-h-screen bg-black text-white"
      style={{
        backgroundImage: 'url("/path-to-your-gif.gif")', // Replace with your actual GIF path
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
        className="relative z-10 p-8 bg-black bg-opacity-90 rounded-lg shadow-lg max-w-sm border-[#841F84] border-2"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Logg Inn
        </motion.h1>

        {/* Login Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Username or Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              E-post eller brukernavn
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="E-post eller brukernavn"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2"
            >
              Passord
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Passord"
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-yellow-500 bg-gray-800 border-gray-700 rounded focus:ring-yellow-500"
            />
            <span className="ml-2 text-sm">Husk meg</span>
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
            Logg Inn
          </motion.button>
        </motion.form>

        {/* Forgot Password Link */}
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-yellow-500 hover:underline">
            Glemt passord?
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
