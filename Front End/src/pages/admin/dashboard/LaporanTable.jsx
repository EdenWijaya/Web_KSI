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
    },
    {
      id: 2,
      tanggal: '14-10-2024',
      status: 'Aktif',
      namaPelapor: 'Novanti Nurjanah',
      nomorTelepon: '081356789954',
      lokasi: 'Daerah SD',
      deskripsi: 'Ada orang buang sampah sembarangan',
    },
    {
      id: 3,
      tanggal: '20-11-2024',
      status: 'Aktif',
      namaPelapor: 'Habib isa',
      nomorTelepon: '082175673461',
      lokasi: 'Pohon dekat gapura',
      deskripsi: 'Merusak pohon tanpa alasan',
    },
    {
      id: 4,
      tanggal: '26-12-2024',
      status: 'Aktif',
      namaPelapor: 'Alfa Romeo',
      nomorTelepon: '085376663460',
      lokasi: 'Balai desa',
      deskripsi: 'Menumpuk sampah di balai desa',
    },
  ];
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left">Id Laporan</th>
            <th className="px-4 py-2 text-left">Tanggal Laporan</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Nama Pelapor</th>
            <th className="px-4 py-2 text-left">Nomor Telepon Pelapor</th>
            <th className="px-4 py-2 text-left">Lokasi Laporan</th>
            <th className="px-4 py-2 text-left">Deskripsi Laporan</th>
          </tr>
        </thead>
        <tbody>
          {laporanData.map((laporan) => (
            <tr key={laporan.id} className="border-b">
              <td className="px-4 py-2">{laporan.id}</td>
              <td className="px-4 py-2">{laporan.tanggal}</td>
              <td className="px-4 py-2">
                <span className={`px-3 py-1 rounded-full text-white ${laporan.status === 'Aktif' ? 'bg-green-500' : 'bg-orange-500'}`}>
                  {laporan.status}
                </span>
              </td>
              <td className="px-4 py-2">{laporan.namaPelapor}</td>
              <td className="px-4 py-2">{laporan.nomorTelepon}</td>
              <td className="px-4 py-2">{laporan.lokasi}</td>
              <td className="px-4 py-2">{laporan.deskripsi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LaporanTable;
