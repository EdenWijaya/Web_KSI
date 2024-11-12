import React from 'react';

const LaporanTable = () => {
  const laporanData = [
    {
      id: 1,
      tanggal: '10-10-2024',
      status: 'Selesai',
      namaPelapor: 'Nuryanti',
      nomorTelepon: '08127234456',
      lokasi: 'Dekat Dusun',
      deskripsi: 'Terjadi pembakaran lahan',
      gambar: ''
    },
    {
      id: 2,
      tanggal: '14-10-2024',
      status: 'Aktif',
      namaPelapor: 'Novanti Nurjanah',
      nomorTelepon: '081356789954',
      lokasi: 'Daerah SD',
      deskripsi: 'Ada orang buang sampah sembarangan',
      gambar: ''
    },
    {
      id: 3,
      tanggal: '10-10-2024',
      status: 'Selesai',
      namaPelapor: 'Nuryanti',
      nomorTelepon: '08127234456',
      lokasi: 'Dekat Dusun',
      deskripsi: 'Terjadi pembakaran lahan',
      gambar: ''
    },
    {
      id: 4,
      tanggal: '14-10-2024',
      status: 'Aktif',
      namaPelapor: 'Novanti Nurjanah',
      nomorTelepon: '081356789954',
      lokasi: 'Daerah SD',
      deskripsi: 'Ada orang buang sampah sembarangan',
      gambar: ''
    },
    {
      id: 5,
      tanggal: '10-10-2024',
      status: 'Selesai',
      namaPelapor: 'Nuryanti',
      nomorTelepon: '08127234456',
      lokasi: 'Dekat Dusun',
      deskripsi: 'Terjadi pembakaran lahan',
      gambar: ''
    }
  ];
  
  return (
    <div className="overflow-x-auto bg-gray-100 min-h-screen px-4 py-6">
      <div className="bg-white shadow-lg rounded-lg mx-auto max-w-full">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-green-800 text-white">
              <th className="px-4 py-4 font-medium text-center">Id Laporan</th>
              <th className="px-4 py-4 font-medium text-center">Tanggal Laporan</th>
              <th className="px-4 py-4 font-medium text-center">Status</th>
              <th className="px-4 py-4 font-medium text-center">Nama Pelapor</th>
              <th className="px-4 py-4 font-medium text-center">Nomor Telepon Pelapor</th>
              <th className="px-4 py-4 font-medium text-center">Lokasi Laporan</th>
              <th className="px-4 py-4 font-medium text-center">Deskripsi Laporan</th>
              <th className="px-4 py-4 font-medium text-center">Gambar</th>
            </tr>
          </thead>
          <tbody>
            {laporanData.map((laporan, index) => (
              <tr key={laporan.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-4 py-2 border-b text-center">{laporan.id}</td>
                <td className="px-4 py-2 border-b text-center">{laporan.tanggal}</td>
                <td className="px-4 py-2 border-b text-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${laporan.status === 'Aktif' ? 'bg-green-100 text-green-700 border border-green-500' : 'bg-orange-100 text-orange-700 border border-orange-500'}`}>
                    {laporan.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-b text-center">{laporan.namaPelapor}</td>
                <td className="px-4 py-2 border-b text-center">{laporan.nomorTelepon}</td>
                <td className="px-4 py-2 border-b text-center">{laporan.lokasi}</td>
                <td className="px-4 py-2 border-b text-center">{laporan.deskripsi}</td>
                <td className="px-4 py-2 border-b text-center">
                  {laporan.gambar ? (
                    <img src={laporan.gambar} alt="Gambar Laporan" className="w-12 h-12 rounded" />
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
          Kelola Laporan
        </button>
      </div>
    </div>
  );
};

export default LaporanTable;
