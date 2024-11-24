import React, { useEffect, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { BsFillXCircleFill } from 'react-icons/bs';
import { getLaporan, updateStatus, showGambarLaporan } from "../../../services/Laporan/laporan.service";

const LaporanTable = () => {
  const [laporanData, setLaporanData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [laporansPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    getLaporan((data) => {
      setLaporanData(data.data);
    });
  }, []);

  const indexOfLastLaporan = currentPage * laporansPerPage;
  const indexOfFirstLaporan = indexOfLastLaporan - laporansPerPage;
  const currentLaporans = laporanData.slice(indexOfFirstLaporan, indexOfLastLaporan);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Menghitung jumlah total halaman
  const pageCount = Math.ceil(laporanData.length / laporansPerPage);
  const paginationNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

  // Set imagehhhh
  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-1 " style={{ marginLeft: "-20px", marginRight: "-20px" }}>
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-green-800 font-['Poppins'] underline">
          Data Laporan
        </h2>
      </div>

      {/* Tabel Dekstop */}
      <div className="hidden md:block bg-white shadow-lg rounded-md mx-auto w-full overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-green-800 text-white">
              <th className="px-2 py-4 text-center font-medium max-w-[50px] break-words">Id</th>
              <th className="px-2 py-4 text-center font-medium max-w-[100px] break-words">Tanggal Laporan</th>
              <th className="px-2 py-4 text-center font-medium max-w-[150px] break-words">Status</th>
              <th className="px-2 py-4 text-center font-medium max-w-[100px] break-words">Nama</th>
              <th className="px-2 py-4 text-center font-medium max-w-[100px] break-words">No Telepon</th>
              <th className="px-2 py-4 text-center font-medium max-w-[150px] break-words">Lokasi Laporan</th>
              <th className="px-2 py-4 text-center font-medium max-w-[200px] break-words">Deskripsi Laporan</th>
              <th className="px-2 py-4 text-center font-medium max-w-[100px] break-words">Gambar Laporan</th>
              <th className="px-2 py-4 text-center font-medium max-w-[100px] break-words">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {currentLaporans.map((laporan, index) => (
              <tr key={laporan.id_laporan} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="px-2 py-2 text-center border-b break-words max-w-[50px]">{laporan.id_laporan}</td>
                <td className="px-2 py-2 text-center border-b break-words max-w-[100px]">{laporan.tanggal_laporan}</td>
                <td className="px-2 py-2 text-center border-b break-words max-w-[150px]">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      laporan.status === "Aktif"
                        ? "bg-green-100 text-green-700 border border-green-500"
                        : "bg-orange-100 text-orange-700 border border-orange-500"
                    }`}
                  >
                    {laporan.status}
                  </span>
                </td>
                <td className="px-2 py-2 text-center border-b break-words max-w-[100px]">{laporan.nama}</td>
                <td className="px-2 py-2 text-center border-b break-words max-w-[100px]">{laporan.no_telepon}</td>
                <td className="px-2 py-2 text-center border-b break-words max-w-[150px]">{laporan.lokasi_laporan}</td>
                <td className="px-2 py-2 text-center border-b break-words max-w-[200px]">{laporan.deskripsi_laporan}</td>
                <td className="px-2 py-2 border-b text-center">
                  {laporan.gambar_laporan ? (
                    <div className="flex justify-center items-center cursor-pointer" onClick={() => openModal(showGambarLaporan(laporan.gambar_laporan))}>
                      <img
                        src={showGambarLaporan(laporan.gambar_laporan)}
                        alt="Gambar Laporan"
                        className="w-12 h-12 rounded"
                      />
                    </div>
                  ) : (
                    <span className="text-gray-500">Tidak ada gambar</span>
                  )}
                </td>
                <td className="px-2 py-2 text-center border-b space-x-2">
                  {laporan.status === "Aktif" && (
                    <button
                      onClick={() => updateStatus(laporan.id_laporan, laporan.status)}
                      className="text-red-700 hover:text-red-900"
                      title="Nonaktif"
                    >
                      <FaTimes />
                    </button>
                  )}
                  {laporan.status === "Selesai" && (
                    <button
                      onClick={() => updateStatus(laporan.id_laporan, laporan.status)}
                      className="text-green-700 hover:text-green-900"
                      title="Aktif"
                    >
                      <FaCheck />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 max-w-lg">
            <img
              src={currentImage}
              alt="Fullscreen"
              className="w-full h-auto rounded-lg object-contain"
            />
            <button
              onClick={closeModal}
              className="top-1 right-1 text-green-black text-2xl absolute"
            >
              <BsFillXCircleFill />
            </button>
          </div>
        </div>
      )}

      {/* Tabel Mobile */}
      <div className="block md:hidden space-y-4">
        {currentLaporans.map((laporan) => (
          <div key={laporan.id_laporan} className="bg-white shadow-lg rounded-lg p-4">
            <div className="grid grid-cols-3 gap-y-2">
              <span className="font-semibold text-gray-700">ID Laporan</span>
              <span className="col-span-2">: {laporan.id_laporan}</span>

              <span className="font-semibold text-gray-700">Nama</span>
              <span className="col-span-2">: {laporan.nama}</span>

              <span className="font-semibold text-gray-700">No. Telepon</span>
              <span className="col-span-2">: {laporan.no_telepon}</span>

              <span className="font-semibold text-gray-700">Tanggal</span>
              <span className="col-span-2">: {laporan.tanggal_laporan}</span>

              <span className="font-semibold text-gray-700">Lokasi</span>
              <span className="col-span-2">: {laporan.lokasi_laporan}</span>

              <span className="font-semibold text-gray-700">Status</span>
              <span className="col-span-2">
                :{" "}
                <span
                  className={`px-2 py-1 rounded-full text-sm font-semibold ${
                    laporan.status === "Aktif"
                      ? "bg-green-100 text-green-700 border border-green-500"
                      : "bg-orange-100 text-orange-700 border border-orange-500"
                  }`}
                >
                  {laporan.status}
                </span>
              </span>

              <span className="font-semibold text-gray-700 col-span-3">Deskripsi</span>
              <span className="col-span-3 break-words text-gray-600">{laporan.deskripsi_laporan}</span>
            </div>

            {/* Gambar */}
            <div className="mt-4">
              <span className="font-semibold text-gray-700">Gambar</span>
              {laporan.gambar_laporan ? (
                <div className="mt-2">
                  <img
                    src={showGambarLaporan(laporan.gambar_laporan)}
                    alt="Gambar Laporan"
                    className="w-full max-w-md h-auto rounded-lg object-cover border border-gray-300 shadow-md cursor-pointer"
                    onClick={() => openModal(showGambarLaporan(laporan.gambar_laporan))}
                  />
                </div>
              ) : (
                <span className="text-gray-500">: Tidak ada gambar</span>
              )}
            </div>

            {/* Tombol Aksi */}
            <div className="mt-4 flex justify-end">
              {laporan.status === "Aktif" && (
                <button
                  onClick={() => updateStatus(laporan.id_laporan, laporan.status)}
                  className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 shadow-md"
                >
                  Nonaktifkan
                </button>
              )}
              {laporan.status === "Selesai" && (
                <button
                  onClick={() => updateStatus(laporan.id_laporan, laporan.status)}
                  className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 shadow-md"
                >
                  Aktifkan
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center items-center mt-8 mr-5 space-x-2 sm:space-x-4">
        <button
          className="px-3 py-1 text-sm sm:px-4 sm:py-2 text-white bg-green-700 border-2 border-green-700 rounded-lg hover:bg-green-800 disabled:bg-green-700 min-w-[70px]"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {paginationNumbers.map((number) => (
          <button
            key={number}
            className={`px-3 py-1 text-sm sm:px-4 sm:py-2 font-semibold rounded-lg ${currentPage === number ? "bg-green-500 text-white" : "bg-white text-green-700 border-2 border-green-700 hover:bg-green-700 hover:text-white"}`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
        <button
          className="px-3 py-1 text-sm sm:px-4 sm:py-2 text-white bg-green-700 border-2 border-green-700 rounded-lg hover:bg-green-800 disabled:bg-green-700 min-w-[70px]"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LaporanTable;
