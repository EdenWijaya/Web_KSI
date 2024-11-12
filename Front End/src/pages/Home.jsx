import { Fragment, useState } from "react";
import Bg from "../components/Background/Bg";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Target from "../components/Target/Target";
import Panduan from "../components/Panduan/Panduan";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Hero/>
        <Target/>
        <Panduan/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
