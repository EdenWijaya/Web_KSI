import Hero from "../components/Hero/Hero";
import Target from "../components/Target/Target";
import Panduan from "../components/Panduan/Panduan";
import Footer from "../components/Footer/Footer";
import { newVisitor } from "../services/Visitor/visitor.service";

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("Home");

    if (!localStorage.getItem("visited")) {
      localStorage.setItem("visited", "true");
      newVisitor();
    }
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <Target />
        <Panduan />
        <Footer />
      </div>
    </>
  );
};

export default Home;
