import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import FormLaporan from "../components/Form/FormLaporan";
import Footer from "../components/Footer/Footer";

const Laporan = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="bg-light min-h-screen">
        {/* Header Section */}
        <div className="text-black h-48 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Layanan Pengaduan</h1>
          <p className="text-lg mt-2 text-center max-w-3xl">
            Silahkan laporkan segala permasalahan lingkungan yang Anda temukan
            di Desa Banjar Agung.
          </p>
        </div>
        {/* Form Section */}
        <div className="flex justify-center pb-10"> {/* Tambahkan padding bawah */}
          <div className="w-10/12 max-w-3xl p-7 bg-white border rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Formulir Laporan
            </h2>
            <FormLaporan />
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <Footer className="mt-0" /> {/* Pastikan tidak ada margin di footer */}
    </Fragment>
  );
};

export default Laporan;
