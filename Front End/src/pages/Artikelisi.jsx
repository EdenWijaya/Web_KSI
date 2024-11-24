import { React, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import {
  getArtikelById,
  showGambar,
} from "../services/Artikel/artikel.service";

const IsiArtikel = () => {
  const { id } = useParams();
  const [artikelData, setArtikelData] = useState(null);

  useEffect(() => {
    getArtikelById(id, (data) => {
      setArtikelData(data);
    });
  }, [id]);

  if (!artikelData || !artikelData.data || artikelData.data.length === 0) {
    return <div>Silahkan Tunggu....</div>;
  }

  const artikel = artikelData.data[0];

  return (
    <>
      <div>
        <Navbar variant="bg-green-800" variant2="mt-0 py-1" />
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mt-8 mb-6">
            {artikel.judul_artikel}
          </h1>

          <div className="mb-8">
            <div className="flex items-center justify-center">
              <img
                className="w-full max-w-md sm:max-w-lg md:max-w-xl object-cover rounded-xl shadow-md"
                src={showGambar(artikel.gambar_artikel)}
                alt={artikel.judul_artikel}
              />
            </div>
          </div>
          <div className="mt-8">
          <hr className="border-t-2 border-gray-300 my-3" />
              <h2 className="text-sm sm:text-base font-medium">
                Penulis Artikel : {artikel.author}
              </h2>
              <h2 className="text-sm sm:text-base font-medium my-3">
                Sumber Artikel :{" "}
                <a
                  className="hover:underline hover:text-green-600"
                  href={artikel.sumber_artikel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {artikel.sumber_artikel}
                </a>
              </h2>
              <hr className="border-t-2 border-gray-300 my-2" />
            </div>

          <div className="text-justify leading-relaxed space-y-6">
            <p
              className="text-base sm:text-lg"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {artikel.isi_artikel}
            </p>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 mt-16" />
      <Footer />
    </>
  );
};

export default IsiArtikel;
