import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaNewspaper, FaClipboardList, FaSignOutAlt, FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed inset-y-0 left-0 w-60 bg-secondary2 text-white transition-transform transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 h-full z-40`}>
      <div className="flex justify-between items-center p-4">
        <div className="text-center">
          <div className="text-2xl font-bold">ADMIN</div>
          <div className="text-lg">EcoBanjar</div>
        </div>
        
        {/* Tombol Tutup Sidebar */}
        <button className="text-white text-2xl md:hidden" onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>
      
      <nav className="flex flex-col space-y-4 px-6">
        <Link
          to="/Admin-Dashboard"
          className="sidebar-link rounded-2xl flex items-center py-3 px-4 text-lg font-normal hover:bg-green-700 transition duration-300"
          onClick={toggleSidebar}
        >
          <FaHome className="mr-3 text-white" /> Dashboard
        </Link>
        <Link
          to="ArtikelTable"
          className="sidebar-link rounded-2xl flex items-center py-3 px-4 text-lg font-normal hover:bg-green-700 transition duration-300"
          onClick={toggleSidebar}
        >
          <FaNewspaper className="mr-3 text-white" /> Artikel
        </Link>
        <Link
          to="LaporanTable"
          className="sidebar-link rounded-2xl flex items-center py-3 px-4 text-lg font-normal hover:bg-green-700 transition duration-300"
          onClick={toggleSidebar}
        >
          <FaClipboardList className="mr-3 text-white" /> Laporan
        </Link>
      </nav>

      {/* Tombol Log Out */}
      <div className="mt-auto flex justify-center px-6 py-4">
        <button className="secondary-btn w-full">
          <FaSignOutAlt className="inline-block mr-2" /> Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
