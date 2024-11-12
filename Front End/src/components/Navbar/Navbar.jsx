import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
            {" "}
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

            <a href="./Login" >
              <button className="primary-btn">Login</button>
            </a>
          </ul>
        </div>

        {/* Mobile Hamburger Menu Section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
