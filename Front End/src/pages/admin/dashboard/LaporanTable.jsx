import { React, useEffect, useState } from "react";
import { FaCheck, FaTimes, FaTrash } from "react-icons/fa";
import {
  getLaporan,
  updateStatus,
  showGambarLaporan,
} from "../../../services/Laporan/laporan.service";

const LaporanTable = () => {
  const [laporanData, setLaporanData] = useState([]);

  useEffect(() => {
    getLaporan((data) => {
      setLaporanData(data.data);
    });
  }, []);

  console.log(laporanData);

  return (
    <div
      style={{ marginLeft: "-20px", marginRight: "-20px" }}
      className="overflow-x-auto bg-gray-100 min-h-screen py-1 "
    >
      <div className="bg-white shadow-lg rounded-lg mx-auto max-w-full">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-green-800 text-white">
              <th className="px-1 py-4 font-medium text-center">Id Laporan</th>
              <th className="px-2 py-4 font-medium text-center">
                Tanggal Laporan
              </th>
              <th className="px-2 py-4 font-medium text-center">Status</th>
              <th className="px-2 py-4 font-medium text-center">
                Nama Pelapor
              </th>
              <th className="px-2 py-4 font-medium text-center">
                Nomor Telepon Pelapor
              </th>
              <th className="px-2 py-4 font-medium text-center">
                Lokasi Laporan
              </th>
              <th className="px-2 py-4 font-medium text-center">
                Deskripsi Laporan
              </th>
              <th className="px-2 py-4 font-medium text-center">Gambar</th>
              <th className="px-8 py-4 font-medium text-center">
                Ubah Status Laporan
              </th>
            </tr>
          </thead>
          <tbody>
            {laporanData.map((laporan, index) => (
              <tr
                key={laporan.id_laporan}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-2 border-b text-center">
                  {laporan.id_laporan}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {laporan.tanggal_laporan}
                </td>
                <td className="px-4 py-2 border-b text-center">
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
                <td className="px-4 py-2 border-b text-center">
                  {laporan.nama}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {laporan.no_telepon}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {laporan.lokasi_laporan}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {laporan.deskripsi_laporan}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {laporan.gambar_laporan ? (
                    <img
                      src={showGambarLaporan(laporan.gambar_laporan)}
                      alt="Gambar Laporan"
                      className="w-12 h-12 rounded"
                    />
                  ) : (
                    <span className="text-gray-500">Tidak ada gambar</span>
                  )}
                </td>
                {/* Kolom Aksi */}
                <td className="px-4 py-2 border-b text-center space-x-2">
                  {laporan.status === "Aktif" && (
                    <button
                      onClick={() =>
                        updateStatus(laporan.id_laporan, laporan.status)
                      }
                      className="text-red-700 hover:text-red-900"
                      title="Nonaktif"
                    >
                      <FaTimes />
                    </button>
                  )}
                  {laporan.status === "Selesai" && (
                    <button
                      onClick={() =>
                        updateStatus(laporan.id_laporan, laporan.status)
                      }
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
    </div>
  );
};

export default LaporanTable;
