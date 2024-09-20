"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCog, FaSignOutAlt, FaUserCircle, FaUserPlus } from "react-icons/fa";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

// Sample candidate data for each column
const initialColumns = {
  "ikke-kvalifisert": {
    name: "Ikke kvalifisert",
    items: [{ id: "1", name: "sssssssss" }],
  },
  "nye-søkere": {
    name: "Nye søkere",
    items: [],
  },
  utdannet: {
    name: "Utdannet",
    items: [],
  },
  intervju: {
    name: "Intervju",
    items: [],
  },
  tilby: {
    name: "Tilby",
    items: [],
  },
  ansatt: {
    name: "Ansatt",
    items: [],
  },
};

// Sidebar Component
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      animate={{ width: isOpen ? 250 : 80 }} // Animate sidebar width
      className="bg-pink-400 h-screen text-white shadow-lg flex flex-col justify-between duration-300 relative"
      style={{ zIndex: 50 }} // Ensure the sidebar is above other content
      onAnimationComplete={() => setIsAnimationComplete(isOpen)}
    >
      {/* Sidebar Header */}
      <div className="p-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          <span className="font-bold text-lg">InstaCruiter</span>
        </motion.div>
      </div>

      {/* Sidebar Menu */}
      <div className="flex-grow px-4">
        {isAnimationComplete &&
          isOpen && ( // Render content only after the sidebar is fully open
            <>
              <div className="my-4">
                <div className="flex items-center">
                  <select
                    className={`${
                      isOpen ? "block" : "hidden"
                    } w-full bg-black text-white border border-gray-600 p-2 rounded-lg focus:outline-none`}
                  >
                    <option>Kundeportal</option>
                    <option>Kontrollpanel</option>
                  </select>
                </div>
                <div className="my-4">
                  <button
                    className={`${
                      isOpen ? "block" : "hidden"
                    } bg-[#830e70] text-white p-2 rounded-lg w-full`}
                  >
                    Kontrollpanel
                  </button>
                </div>
              </div>

              <div className="my-4">
                <button
                  className={`${
                    isOpen ? "block" : "hidden"
                  } bg-[#830e70] text-white p-2 rounded-lg w-full`}
                >
                  <FaCog className="inline-block mr-2" />
                  Innstillinger
                </button>
              </div>
            </>
          )}
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-gray-800">
        {isAnimationComplete &&
          isOpen && ( // Render footer only after the sidebar is fully open
            <div className="flex items-center justify-between">
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaUserCircle size={24} />
                <span className="ml-2">figma6766@gmail.com</span>
              </motion.div>
              <FaSignOutAlt size={24} className="cursor-pointer" />
            </div>
          )}
      </div>

      {/* Toggle Button (inside the sidebar) */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-[-12px] bg-[#830e70] text-white p-2 rounded-full shadow-lg transform transition-transform"
        style={{
          zIndex: 100, // Ensure the toggle button appears above other content
        }}
      >
        {isOpen ? (
          <HiOutlineChevronLeft size={24} />
        ) : (
          <HiOutlineChevronRight size={24} />
        )}
      </button>
    </motion.div>
  );
};

// Main Dashboard Component
const MainDashboard = () => {
  const [columns] = useState(initialColumns);

  return (
    <div className="min-h-screen bg-black text-white flex-grow">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">kandidat</h1>
            <p className="text-gray-400">
              Dette er alle kandidatene for stillingen hos Instacall AS.
            </p>
          </div>
          <button className="flex items-center bg-[#830e70] text-white px-4 py-2 rounded-lg hover:bg-[#6b0d5b]">
            <FaUserPlus className="mr-2" />
            Legg til ny kandidat
          </button>
        </div>

        {/* Candidate Board */}
        <div className="grid grid-cols-6 gap-4">
          {Object.entries(columns).map(([columnId, column]) => (
            <div key={columnId} className="bg-gray-800 rounded-lg p-4">
              <h2 className="font-semibold mb-4">{column.name}</h2>
              {column.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white text-black p-4 rounded-lg mb-4"
                >
                  <div className="flex items-center">
                    <div className="bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center mr-3">
                      S
                    </div>
                    <span>{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CombinedDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <MainDashboard />
    </div>
  );
};

export default CombinedDashboard;
