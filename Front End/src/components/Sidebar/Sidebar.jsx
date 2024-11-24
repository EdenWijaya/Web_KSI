import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaNewspaper,
  FaClipboardList,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { LogoutHandler } from "../../services/adminAuth/adminLogout.service";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "bg-green-700 text-white" : "text-white";
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 w-60 bg-green-900 text-white transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 h-full z-40`}
    >
      <div className="flex justify-between items-center p-7">
      <div className="flex items-center space-x-2">
        <img src="assets/EcoBanjar_logoicon_nobg.png" className="h-12 w-auto" alt="Logo EcoBanjar" />
        <div className="text-left">
          <div className="text-2xl font-semibold">ADMIN</div>
          <div className="text-lg">EcoBanjar</div>
        </div>
      </div>

        <button
          className=" absolute top-3 right-3 text-white text-2xl md:hidden"
          onClick={toggleSidebar}
        >
          <FaTimes />
        </button>
      </div>

      <nav className="flex flex-col space-y-4 px-6">
        <Link
          to="/Admin-Dashboard"
          className={`sidebar-link rounded-xl flex items-center py-3 px-4 text-lg font-normal hover:bg-[#2E8B57] transition duration-300 ${isActive('/Admin-Dashboard')}`}
          onClick={toggleSidebar}
        >
          <FaHome className="mr-3" /> Dashboard
        </Link>
        <Link
          to="artikel-table"
          className={`sidebar-link rounded-xl flex items-center py-3 px-4 text-lg font-normal hover:bg-[#2E8B57] transition duration-300 ${isActive('/artikel-table')}`}
          onClick={toggleSidebar}
        >
          <FaNewspaper className="mr-3" /> Artikel
        </Link>
        <Link
          to="laporan-table"
          className={`sidebar-link rounded-xl flex items-center py-3 px-4 text-lg font-normal hover:bg-[#2E8B57] transition duration-300 ${isActive('/laporan-table')}`}
          onClick={toggleSidebar}
        >
          <FaClipboardList className="mr-3" /> Laporan
        </Link>
        <Link
          to="/"
          className={`sidebar-link rounded-xl flex items-center py-3 px-4 text-lg font-normal hover:bg-[#2E8B57] transition duration-300 ${isActive('/')}`}
          onClick={toggleSidebar}
        >
          <IoMdArrowRoundBack className="mr-3" />{" "}
          <p className="text-lg">Kembali Ke Beranda</p>
        </Link>
      </nav>

      <div className="mt-auto flex justify-center px-6 py-4">
        <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-xl w-full" onClick={LogoutHandler}>
          <FaSignOutAlt className="inline-block mr-2" /> Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

