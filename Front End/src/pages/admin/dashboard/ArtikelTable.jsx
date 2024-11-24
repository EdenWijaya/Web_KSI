import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { BsFillXCircleFill } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import { deleteArtikel, getArtikel, showGambar } from "../../../services/Artikel/artikel.service";

  const ArtikelTable = () => {
    const navigate = useNavigate();
    const [artikelData, setArtikelData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [artikelsPerPage] = useState(5);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    // Fetch data artikel saat komponen pertama kali dirender
    useEffect(() => {
      getArtikel((data) => {
        setArtikelData(data.data);
      });
    }, []);

    const indexOfLastArtikel = currentPage * artikelsPerPage;
    const indexOfFirstArtikel = indexOfLastArtikel - artikelsPerPage;
    const currentArticles = artikelData.slice(indexOfFirstArtikel, indexOfLastArtikel);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageCount = Math.ceil(artikelData.length / artikelsPerPage);
    const paginationNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

    const handleDelete = (id) => {
      deleteArtikel(id)
        .then(() => {
          setArtikelData((prevData) => prevData.filter((artikel) => artikel.id_artikel !== id));
        })
        .catch((error) => {
          console.error("Error saat menghapus artikel:", error);
        });
    };

    // Set imagehhhh
    const openModal = (imageSrc) => {
      setCurrentImage(imageSrc);
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <div className="bg-gray-100 min-h-screen py-1" style={{ marginLeft: "-20px", marginRight: "-20px" }}>
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-green-800 font-['Poppins'] underline">
            Data Artikel
          </h2>
        </div>

        {/* Tabel Desktop */}
        <div className="hidden md:block bg-white shadow-lg rounded-md mx-auto w-full overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-green-800 text-white">
                <th className="px-2 py-4 text-center font-medium max-w-[50px] break-words">Id</th>
                <th className="px-2 py-4 text-center font-medium max-w-[100px] break-words">Tanggal Artikel</th>
                <th className="px-2 py-4 text-center font-medium max-w-[150px] break-words">Judul Artikel</th>
                <th className="px-2 py-4 text-center font-medium max-w-[100px] break-words">Author</th>
                <th className="px-2 py-4 text-center font-medium max-w-[100px] break-words">Sumber Artikel</th>
                <th className="px-2 py-4 text-center font-medium max-w-[200px] break-words">Deskripsi Singkat</th>
                <th className="px-2 py-4 text-center font-medium max-w-[100px] break-words">Gambar Artikel</th>
                <th className="px-2 py-4 text-center font-medium max-w-[100px] break-words">Lihat Artikel</th>
                <th className="px-2 py-4 text-center font-medium max-w-[100px] break-words">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentArticles.map((artikel, index) => (
                <tr key={artikel.id_artikel} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-2 py-2 text-center border-b break-words max-w-[50px]">{artikel.id_artikel}</td>
                  <td className="px-2 py-2 text-center border-b break-words max-w-[100px]">{artikel.tanggal_artikel}</td>
                  <td className="px-2 py-2 text-center border-b break-words max-w-[150px]">{artikel.judul_artikel.slice(0, 50)}...</td>
                  <td className="px-2 py-2 text-center border-b break-words max-w-[100px]">{artikel.author.slice(0, 50)}...</td>
                  <td className="px-2 py-2 text-center border-b break-words max-w-[100px]">{artikel.sumber_artikel.slice(0, 50)}...</td>
                  <td className="px-2 py-2 text-center border-b break-words max-w-[200px]">{artikel.isi_artikel.slice(0, 100)}...</td>
                  <td className="px-2 py-2 border-b">
                    {artikel.gambar_artikel ? (
                      <div className="flex justify-center items-center cursor-pointer" onClick={() => openModal(showGambar(artikel.gambar_artikel))}>
                        <img src={showGambar(artikel.gambar_artikel)} 
                        alt="Gambar Artikel" 
                        className="w-12 h-12 rounded" 
                        />
                      </div>
                    ) : (
                      <span className="text-gray-500">Tidak ada gambar</span>
                    )}
                  </td>
                  <td className="px-2 py-2 text-center border-b break-words max-w-[100px]">
                    <Link to={`/artikel/isi-artikel/${artikel.id_artikel}`} className="hover:text-green-600 hover:underline">
                      Menuju Halaman Artikel
                    </Link>
                  </td>
                  <td className="px-2 py-2 text-center border-b space-x-2">
                    <button className="text-blue-700 hover:text-blue-900" title="Edit" onClick={() => navigate(`/update-artikel/${artikel.id_artikel}`)}>
                      <FaEdit />
                    </button>
                    <button className="text-red-700 hover:text-red-900" title="Hapus" onClick={() => handleDelete(artikel.id_artikel)}>
                      <FaTrash />
                    </button>
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
          {currentArticles.map((artikel) => (
            <div key={artikel.id_artikel} className="bg-white shadow-lg rounded-lg p-4 max-w-sm mx-auto">
              <div className="grid grid-cols-3 gap-y-1 gap-x-2">
                <span className="font-semibold text-gray-700">ID Artikel</span>
                <span className="col-span-2 break-words">: {artikel.id_artikel}</span>

                <span className="font-semibold text-gray-700">Tanggal</span>
                <span className="col-span-2 break-words">: {artikel.tanggal_artikel}</span>

                <span className="font-semibold text-gray-700">Judul</span>
                <span className="col-span-2 break-words">: {artikel.judul_artikel}</span>

                <span className="font-semibold text-gray-700">Author</span>
                <span className="col-span-2 break-words">: {artikel.author}</span>

                <span className="font-semibold text-gray-700">Sumber</span>
                <span className="col-span-2 break-words">: {artikel.sumber_artikel}</span>

                <span className="font-semibold text-gray-700 col-span-3 mt-4">Deskripsi</span>
                <span className="col-span-3 break-words text-gray-600">{artikel.isi_artikel.slice(0, 100)}...</span>
              </div>

              <div className="mt-4">
                <Link
                  to={`/artikel/isi-artikel/${artikel.id_artikel}`}
                  className="text-blue-600 hover:underline"
                >
                  Lihat Artikel
                </Link>
              </div>

              <div className="mt-4">
                <span className="font-semibold text-gray-700">Gambar Artikel</span>
                {artikel.gambar_artikel ? (
                  <div className="mt-2 flex justify-center">
                    <img
                      src={showGambar(artikel.gambar_artikel)}
                      alt="Gambar Artikel"
                      className="w-full max-w-xs h-auto rounded-lg object-cover border border-gray-300 shadow-md"
                    />
                  </div>
                ) : (
                  <span className="text-gray-500">: Tidak ada gambar</span>
                )}
              </div>

              <div className="mt-4 flex justify-end">
                <div className="space-x-2">
                  <button
                    onClick={() => navigate(`/update-artikel/${artikel.id_artikel}`)}
                    className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(artikel.id_artikel)}
                    className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 shadow-md"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Tambah Artikel */}
        <div className="flex justify-center mt-6">
          <button onClick={() => navigate("/tambah-artikel")} className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 sm:w-50px w-50px rounded-lg shadow-lg">
            Tambah Artikel
          </button>
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

  export default ArtikelTable;
