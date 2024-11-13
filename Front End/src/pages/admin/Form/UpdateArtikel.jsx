import React, { useEffect, useState } from "react";
import InputLabel from "./InputLabel";
import TextAreaLabel from "./TextAreaLabel";
import {
  getArtikel,
  updateArtikel,
} from "../../../services/Artikel/artikel.service";

import { useParams } from "react-router-dom";

const UpdateArtikel = () => {
  const { id } = useParams();
  const [file, setFile] = useState();
  const [judulArtikel, setJudulArtikel] = useState("");
  const [author, setAuthor] = useState("");
  const [isiArtikel, setIsiArtikel] = useState("");
  const [sumberArtikel, setSumberArtikel] = useState("");
  const [previousImageUrl, setPreviousImageUrl] = useState("");

  useEffect(() => {
    getArtikel((data) => {
      const artikel = data.data.find(
        (item) => item.id_artikel === parseInt(id)
      );
      if (artikel) {
        setJudulArtikel(artikel.judul_artikel);
        setAuthor(artikel.author);
        setIsiArtikel(artikel.isi_artikel);
        setSumberArtikel(artikel.sumber_artikel);
        setPreviousImageUrl(artikel.gambar_artikel);
      }
    });
  }, [id]);

  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="bg-light min-h-screen flex flex-col items-center py-10">
      <div className="w-10/12 max-w-3xl p-7 bg-white border rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">
          Perbarui Artikel
        </h2>
        <form onSubmit={(e) => updateArtikel(e, id)} className="space-y-6">
          <InputLabel
            label="Judul Artikel :"
            name="judul_artikel"
            type="text"
            placeholder="Masukkan judul artikel"
            variant="py-2 px-4"
            value={judulArtikel}
            onChange={(e) => setJudulArtikel(e.target.value)}
          />

          <InputLabel
            label="Author :"
            name="author"
            type="text"
            placeholder="Masukkan nama author"
            variant="py-2 px-4"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <InputLabel
            label="Sumber Artikel : "
            name="sumber_artikel"
            type="text"
            placeholder="Masukkan Sumber Artikel Berupa URL"
            variant="py-2 px-4"
            value={sumberArtikel}
            onChange={(e) => setSumberArtikel(e.target.value)}
          />
          <TextAreaLabel
            label="Isi Artikel :"
            name="isi_artikel"
            placeholder="Masukkan deskripsi artikel"
            variant="py-2 px-4 h-[500px]"
            value={isiArtikel}
            onChange={(e) => setIsiArtikel(e.target.value)}
          />

          <InputLabel
            label="Gambar Artikel :"
            name="gambar_artikel"
            type="file"
            onChange={handleFileChange}
            variant="py-2 px-4"
            className="file:bg-green-100 file:text-green-700"
          />

          {file && (
            <img src={file} alt="preview" className="mt-4 w-32 h-32 rounded" />
          )}

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-green-800 hover:bg-green-900 text-white font-semibold py-2 w-full sm:w-2/5 rounded-lg shadow-lg"
            >
              Simpan Artikel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateArtikel;
