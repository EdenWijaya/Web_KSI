import { InputLabel, TextAreaLabel } from "./InputLabel";
import React from "react";
import { useState } from "react";

import { submitLaporan } from "../../services/Laporan/laporan.service";

const FormLaporan = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="w-full max-w rounded-lg p-">
      <form onSubmit={submitLaporan} className="space-y-6">
        <InputLabel
          label="Nama Pelapor : "
          name="nama_pelapor"
          type="text"
          variant="py-2 px-4"
          className="border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <InputLabel
          label="Nomor Telepon : "
          name="nomor_telepon"
          type="text"
          variant="py-2 px-4"
          className="border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <InputLabel
          label="Lokasi Laporan: "
          name="lokasi"
          type="text"
          variant="py-2 px-4"
          className="border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <TextAreaLabel
          label="Deskripsi Laporan : "
          name="deskripsi"
          placeholder="Masukkan Deskripsi Laporan"
          className="border border-gray-300 rounded-lg py-2 px-4 focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
        />
        <InputLabel
          label="Gambar Laporan : "
          name="gambar_laporan"
          type="file"
          accept="image/*"
          variant="py-2 px-4"
          className="border border-gray-300 rounded-lg py-2 px-4 mt-4 focus:outline-none file:cursor-pointer file:border-0 file:bg-green-100 file:text-green-700"
          onChange={handleChange}
        />
        {/* <img src={file} alt="preview" /> */}

        <div className="flex justify-center">
          <button type="submit" className="primary-btn w-full mt-10">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLaporan;
