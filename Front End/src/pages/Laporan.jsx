import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import FormLaporan from "../components/Form/FormLaporan";

const Laporan = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="bg-light ">
        <div className="text-black h-48 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Layanan Pengaduan</h1>
          <p className="text-lg mt-2 text-center max-w-3xl">
            Silahkan laporkan segala permasalahan lingkungan yang Anda temukan di Desa Banjar Agung.
          </p>
        </div>
        <div className="flex justify-center ">
          <div className="w-10/12 max-w-3xl p-7 bg-white border rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Formulir Laporan
            </h2>
            <FormLaporan />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Laporan;