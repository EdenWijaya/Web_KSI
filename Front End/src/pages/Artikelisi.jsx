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

  console.log(artikel);

  return (
    <>
      <div>
        <Navbar variant="bg-green-800" variant2="mt-0 py-1" />
        <div>
          <h1 className="text-4xl font-bold text-center p-7 ">
            {artikel.judul_artikel}
          </h1>

          <div className="px-7">
            <div className="flex items-center justify-center object-cover rounded-xl">
              <img
                className="w-[50%] flex items-center justify-center object-cover rounded-xl"
                src={showGambar(artikel.gambar_artikel)}
                alt={artikel.judul_artikel}
              />
            </div>
          </div>
          <div className="p-7">
            <p
              className="px-20 text-justify"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {artikel.isi_artikel}
            </p>
            <h2 className="text-base  px-20 font-medium mt-11 text-center">
              Penulis Artikel : {artikel.author}
            </h2>
            <h2 className="text-base  px-20 font-medium  text-center">
              Sumber Artikel :{" "}
              <a
                className="hover:underline hover:text-green-600"
                href={artikel.sumber_artikel}
              >
                {artikel.sumber_artikel}
              </a>
            </h2>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default IsiArtikel;
