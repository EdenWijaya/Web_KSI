import { React, useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdPageview } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  deleteArtikel,
  getArtikel,
  showGambar,
} from "../../../services/Artikel/artikel.service";
import { Link } from "react-router-dom";

const ArtikelTable = () => {
  const navigate = useNavigate();
  const [artikelData, setArtikelData] = useState([]);

  useEffect(() => {
    getArtikel((data) => {
      setArtikelData(data.data);
    });
  }, []);

  return (
    <div
      style={{ marginLeft: "-20px", marginRight: "-20px" }}
      className="overflow-x-auto py-1 bg-gray-100 min-h-screen"
    >
      <div className="bg-white shadow-lg rounded-lg max-w-full mx-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-green-800 text-white text-left">
              <th className="px-2 py-4 font-medium text-center min-w-[100px]">
                Id Artikel
              </th>
              <th className="px-4 py-4 font-medium text-center min-w-[150px]">
                Tanggal Artikel
              </th>
              <th className="px-4 py-4 font-medium text-center min-w-[150px]">
                Judul Artikel
              </th>
              <th className="px-4 py-4 font-medium text-center min-w-[150px]">
                Author
              </th>
              <th className="px-4 py-4 font-medium text-center min-w-[150px]">
                Sumber Artikel
              </th>
              <th className="px-4 py-4 font-medium text-center min-w-[200px]">
                Deskripsi Singkat
              </th>
              <th className="px-4 py-4 font-medium text-center min-w-[100px]">
                Gambar
              </th>
              <th className="px-4 py-4 font-medium text-center min-w-[100px]">
                Lihat Artikel
              </th>
              <th className="px-4 py-4 font-medium text-center min-w-[100px]">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {artikelData.map((artikel, index) => (
              <tr
                key={artikel.id_artikel}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-2 border-b text-center">
                  {artikel.id_artikel}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {artikel.tanggal_artikel}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {artikel.judul_artikel}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {artikel.author}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {artikel.sumber_artikel}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {artikel.isi_artikel.slice(0, 200)}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {artikel.gambar_artikel ? (
                    <img
                      src={showGambar(artikel.gambar_artikel)}
                      alt="Gambar Artikel"
                      className="w-[500px] h-[100px] rounded"
                    />
                  ) : (
                    <span className="text-gray-500">Tidak ada gambar</span>
                  )}
                </td>
                {/* Kolom Aksi */}
                <td className="px-4 py-2 border-b text-center space-x-2">
                  <Link to={`artikel/isi-artikel/${artikel.id_artikel}`}>
                    Halaman Artikel
                  </Link>
                </td>
                <td className="px-4 py-2 border-b text-center space-x-2">
                  <button
                    className="text-blue-700 hover:text-blue-900"
                    title="Edit"
                    onClick={() =>
                      navigate(`/update-artikel/${artikel.id_artikel}`)
                    }
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-700 hover:text-red-900"
                    title="Hapus"
                    onClick={() => deleteArtikel(artikel.id_artikel)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/tambah-artikel")}
          className="bg-green-800 hover:bg-green-900 text-white font-semibold py-2 w-full sm:w-2/5 rounded-lg shadow-lg"
        >
          Tambah Artikel
        </button>
      </div>
    </div>
  );
};

export default ArtikelTable;
