import React from 'react';

const ArtikelTable = () => {
  const artikelData = [
    {
      id: 1,
      tanggal_artikel: '10-10-2024',
      judul_artikel: 'Lorem lorem',
      author: 'Eden Wijaya',
      isi_artikel: 'Terjadi pembakaran lahan',
      gambar_artikel: ''
    },
  ];

  return (
    <div className="overflow-x-auto px-4 py-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg max-w-full mx-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-green-800 text-white text-left">
              <th className="px-6 py-4 font-medium text-center min-w-[150px]">Id Artikel</th>
              <th className="px-6 py-4 font-medium text-center min-w-[150px]">Tanggal Artikel</th>
              <th className="px-6 py-4 font-medium text-center min-w-[150px]">Judul Artikel</th>
              <th className="px-6 py-4 font-medium text-center min-w-[150px]">Author</th>
              <th className="px-6 py-4 font-medium text-center min-w-[200px]">Deskripsi Singkat</th>
              <th className="px-6 py-4 font-medium text-center min-w-[100px]">Gambar</th>
            </tr>
          </thead>
          <tbody>
            {artikelData.map((artikel, index) => (
              <tr key={artikel.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-4 py-2 border-b text-center">{artikel.id}</td>
                <td className="px-4 py-2 border-b text-center">{artikel.tanggal_artikel}</td>
                <td className="px-4 py-2 border-b text-center">{artikel.judul_artikel}</td>
                <td className="px-4 py-2 border-b text-center">{artikel.author}</td>
                <td className="px-4 py-2 border-b text-center">{artikel.isi_artikel}</td>
                <td className="px-4 py-2 border-b text-center">
                  {artikel.gambar ? (
                    <img src={artikel.gambar_artikel} alt="Gambar Artikel" className="w-12 h-12 rounded" />
                  ) : (
                    <span className="text-gray-500">Tidak ada gambar</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-green-800 hover:bg-green-900 text-white font-semibold py-2 w-full sm:w-2/5 rounded-lg shadow-lg">
          Kelola Artikel
        </button>
      </div>
    </div>
  );
};

export default ArtikelTable;
