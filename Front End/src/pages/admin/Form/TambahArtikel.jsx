import React, { useState } from 'react';
import InputLabel from './InputLabel';
import TextAreaLabel from './TextAreaLabel';

const TambahArtikel = () => {
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
    console.log("Artikel submitted");
  };

  return (
    <div className="bg-light min-h-screen flex flex-col items-center py-10">
      <div className="w-10/12 max-w-3xl p-7 bg-white border rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Tambah Artikel Baru</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <InputLabel
            label="Judul Artikel :"
            name="judul_artikel"
            type="text"
            placeholder="Masukkan judul artikel"
            variant="py-2 px-4"
          />
          <InputLabel
            label="Tanggal Artikel :"
            name="tanggal_artikel"
            type="date"
            variant="py-2 px-4"
          />
          <InputLabel
            label="Author :"
            name="author"
            type="text"
            placeholder="Masukkan nama author"
            variant="py-2 px-4"
          />
          <TextAreaLabel
            label="Deskripsi Artikel :"
            name="deskripsi_artikel"
            placeholder="Masukkan deskripsi artikel"
            variant="py-2 px-4"
          />
          <InputLabel
            label="Gambar Artikel :"
            name="gambar_artikel"
            type="file"
            onChange={handleFileChange}
            variant="py-2 px-4"
            className="file:bg-green-100 file:text-green-700"
          />
          {file && <img src={file} alt="preview" className="mt-4 w-32 h-32 rounded" />}

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

export default TambahArtikel;
