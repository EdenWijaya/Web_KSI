import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { isTokenValid } from "../../services/adminAuth/tokenValidation.service";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Artikel",
    path: "/artikel",
  },
  {
    id: 3,
    title: "Lapor",
    path: "/laporan",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk menu hamburger

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo Section */}
        <div>
          <h1 className="font-bold text-4xl">
            <span className="text-secondary2">Eco</span> Banjar
          </h1>
        </div>

        {/* Menu Section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  className="inline-block py-2 px-3 text-xl hover:text-secondary2 relative group"
                >
                  <div className="w-2 h-2 bg-secondary2 absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </Link>
              </li>
            ))}

            {!isTokenValid() && (
              <Link to="/Login">
                <button className="primary-btn">Login</button>
              </Link>
            )}

            {isTokenValid() && (
              <Link to="/admin-dashboard">
                <button className="primary-btn">Dashboard</button>
              </Link>
            )}
          </ul>
        </div>

        {/* Mobile Hamburger Menu Section */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <IoMdClose className="text-4xl" />
            ) : (
              <IoMdMenu className="text-4xl" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-0 left-0 w-full bg-white shadow-lg z-10 lg:hidden"
        >
          <ul className="flex flex-col items-start p-6 space-y-4 text-xl">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  onClick={() => setIsMenuOpen(false)} // Menutup menu saat link diklik
                  className="block w-full py-2 px-4 hover:bg-secondary2 hover:text-white rounded"
                >
                  {menu.title}
                </Link>
              </li>
            ))}

            {!isTokenValid() && (
              <li>
                <Link to="/Login" onClick={() => setIsMenuOpen(false)}>
                  <button className="primary-btn w-full">Login</button>
                </Link>
              </li>
            )}

            {isTokenValid() && (
              <li>
                <Link
                  to="/admin-dashboard"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <button className="primary-btn w-full">Dashboard</button>
                </Link>
              </li>
            )}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
