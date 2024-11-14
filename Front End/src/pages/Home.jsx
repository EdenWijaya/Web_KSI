import Hero from "../components/Hero/Hero";
import Target from "../components/Target/Target";
import Panduan from "../components/Panduan/Panduan";
import Footer from "../components/Footer/Footer";

const Home = () => {
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
