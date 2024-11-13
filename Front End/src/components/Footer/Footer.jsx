import React from "react";
import { Link } from "react-router-dom";
import { SiGooglemaps } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const SlideUp = (delay) => ({
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
      ease: "easeInOut",
    },
  },
});

const Footer = () => {
  return (
    <footer className="mt-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4 ml-36">
          {/* first section */}

          <motion.div
            variants={SlideUp()}
            className="grid grid-cols-2 gap-10"
            initial="initial"
            whileInView={"animate"}
          >
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">
                <span className="text-secondary2">Eco</span>Banjar
              </h1>
              <div>
                <ul>
                  <a
                    href="https://g.co/kgs/WsXN5GK"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="flex items-center space-x-2">
                      <SiGooglemaps className="text-4xl text-secondary2 mr-2" />{" "}
                      Jati Agung Lampung Selatan
                    </li>
                  </a>
                  <li className="flex items-center space-x-2 pt-4">
                    <CiMail className="text-3xl text-secondary2 mr-2" />{" "}
                    iniemail@gmail.com
                  </li>
                  <li className="flex items-center space-x-2 pt-5">
                    <FaPhone className="text-2xl text-secondary2 mr-2" />{" "}
                    081234567890
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* second section */}
          <motion.div
            className="grid grid-cols-1 gap-10"
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
          >
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Other Website</h1>
              <div>
                <ul>
                  <li className="flex items-center space-x-2">
                    <TbWorldWww className="text-2xl text-secondary2 mr-2" /> Web
                    Desa
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* third section */}
          <motion.div
            className="grid grid-cols-1 gap-10"
            variants={SlideUp(0.3)}
            initial="initial"
            whileInView={"animate"}
          >
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Our Social Media</h1>
              <div>
                <ul>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="flex items-center space-x-2">
                      <FaFacebookF className="text-2xl text-secondary2 mr-2" />{" "}
                      Facebook
                    </li>
                  </a>

                  <a
                    href="https://www.instagram.com/banjaragunglamsel/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="flex items-center space-x-2 pt-4">
                      <FaInstagram className="text-2xl text-secondary2 mr-2" />{" "}
                      Instagram
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright section */}
      <motion.div
        className="mt-10 py-4 bg-light font-semibold text-center"
        variants={SlideUp(0.4)}
        initial="initial"
        animate="animate"
      >
        <p>&copy; Copyright 2024 Desa Banjar Agung</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
