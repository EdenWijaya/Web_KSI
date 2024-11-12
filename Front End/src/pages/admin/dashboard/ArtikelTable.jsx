import React from 'react';

const ArtikelTable = () => {
  const artikelData = [
    {
      id: 1,
      tanggal: '10-10-2024',
      judul: 'Lorem lorem',
      author: 'Eden Wijaya',
      deskripsi: 'Terjadi pembakaran lahan',
    },
    {
      id: 2,
      tanggal: '14-10-2024',
      judul: 'Lorem lorem',
      author: 'Mustafa',
      deskripsi: 'Ada orang buang sampah sembarangan',
    },
    {
      id: 3,
      tanggal: '20-11-2024',
      judul: 'Lorem lorem',
      author: 'Ghfari',
      deskripsi: 'Merusak pohon tanpa alasan',
    },
    {
      id: 4,
      tanggal: '26-12-2024',
      judul: 'Lorem lorem',
      author: 'Anjes  MU',
      deskripsi: 'Menumpuk sampah di balai desa',
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Id Artikel</th>
            <th className="px-4 py-2 text-left">Tanggal Artikel</th>
            <th className="px-4 py-2 text-left">Judul Artikel</th>
            <th className="px-4 py-2 text-left">Author</th>
            <th className="px-4 py-2 text-left">Deskripsi Singkat Artikel</th>
          </tr>
        </thead>
        <tbody>
          {artikelData.map((artikel) => (
            <tr key={artikel.id} className="border-b">
              <td className="px-4 py-2">{artikel.id}</td>
              <td className="px-4 py-2">{artikel.tanggal}</td>
              <td className="px-4 py-2">{artikel.judul}</td>
              <td className="px-4 py-2">{artikel.author}</td>
              <td className="px-4 py-2">{artikel.deskripsi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtikelTable;
    