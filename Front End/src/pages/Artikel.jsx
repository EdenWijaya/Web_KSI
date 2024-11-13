import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import { getArtikel, showGambar } from "../services/Artikel/artikel.service";
import { Link } from "react-router-dom";

const SlideUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: delay, ease: "easeInOut" },
  },
});

const Artikel = () => {
  const [artikelData, setArtikelData] = useState([]);

  useEffect(() => {
    getArtikel((data) => {
      setArtikelData(data.data);
    });
  }, []);

  return (
    <>
      <div>
        <Navbar variant="bg-green-800" variant2="mt-0 py-1" />
        <div className="max-w-8xl mx-auto bg-gradient-to-r from-gray-200 to-white-100">
          <div className="max-w-7xl mx-auto p-4">
            {artikelData.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <img
                  src={showGambar(artikelData[0].gambar_artikel)}
                  alt="Main Article"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />

                <motion.div
                  variants={SlideUp(0.2)}
                  initial="initial"
                  animate="animate"
                  className="flex flex-col justify-center"
                >
                  <h2 className="text-3xl font-semibold mb-4">
                    {artikelData[0].judul_artikel}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {artikelData[0].isi_artikel.slice(0, 200)}
                  </p>

                  <Link
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                    to={`isi-artikel/${artikelData[0].id_artikel}`}
                  >
                    Read More
                  </Link>
                </motion.div>
              </div>
            )}

            {/* Grid of small articles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {artikelData.slice(1).map((artikel, index) => (
                <motion.div
                  key={artikel.id_artikel}
                  variants={SlideUp(0.2 + index * 0.2)}
                  initial="initial"
                  animate="animate"
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                >
                  <img
                    src={showGambar(artikel.gambar_artikel)}
                    alt={artikel.judul_artikel}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-grow flex flex-col">
                    <h2 className="text-xl font-semibold mb-2">
                      {artikel.judul_artikel}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {artikel.isi_artikel.slice(0, 200)}
                    </p>

                    <Link
                      className="text-blue-500 hover:text-blue-700 font-semibold mt-auto"
                      to={`isi-artikel/${artikel.id_artikel}`}
                    >
                      Read More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artikel;
