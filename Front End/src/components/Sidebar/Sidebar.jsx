import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaNewspaper,
  FaClipboardList,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="md:hidden absolute top-5 left-4 text-black-800 text-3xl z-50"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      <div
        className={`fixed md:static inset-y-0 left-0 w-60 bg-secondary2 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 h-full z-40`}
      >
        <div className="text-center mb-8 pt-8">
          <div className="text-2xl font-bold">ADMIN</div>
          <div className="text-lg mt-2">EcoBanjar</div>
        </div>
        <nav className="flex flex-col space-y-4 px-6">
          <Link
            to="/Admin-Dashboard"
            className="sidebar-link rounded-2xl flex items-center py-3 px-4 text-lg font-normal hover:bg-green-700 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            <FaHome className="mr-3 text-white" /> Dashboard
          </Link>
          <Link
            // to="/artikel"
            className="sidebar-link rounded-2xl flex items-center py-3 px-4 text-lg font-normal hover:bg-green-700 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            <FaNewspaper className="mr-3 text-white" /> Artikel
          </Link>
          <Link
            // to="/laporan"
            className="sidebar-link rounded-2xl flex items-center py-3 px-4 text-lg font-normal hover:bg-green-700 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            <FaClipboardList className="mr-3 text-white" /> Laporan
          </Link>
        </nav>

        {/* Log Out Button */}
        <div className="mt-auto flex justify-center px-6 py-4">
          <button className="secondary-btn w-full">
            <FaSignOutAlt className="inline-block mr-2" /> Log Out
          </button>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
