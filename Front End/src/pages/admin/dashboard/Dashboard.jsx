import { useState, useEffect } from "react";
import {
  FaChartLine,
  FaFileAlt,
  FaUsers,
  FaClipboardCheck,
} from "react-icons/fa";
import Chart from "./Chart";

import { getTotalArtikel } from "../../../services/Artikel/artikel.service";
import {
  getTotalLaporan,
  getLaporanSelesai,
} from "../../../services/Laporan/laporan.service";

import { totalWebVisitor } from "../../../services/Visitor/visitor.service";

const AdminDashboard = () => {
  const [totalArtikel, setTotalArtikel] = useState([]);
  const [totalLaporan, setTotalLaporan] = useState([]);
  const [laporanSelesai, setLaporanSelesai] = useState([]);
  const [totalVisitor, setTotalVisitor] = useState([]);

  useEffect(() => {
    getTotalArtikel((data) => {
      if (Array.isArray(data.data)) {
        setTotalArtikel(data.data);
      } else {
        setTotalArtikel([{ total_artikel: 0 }]);
      }
    });
  }, []);

  useEffect(() => {
    getTotalLaporan((data) => {
      if (Array.isArray(data.data)) {
        setTotalLaporan(data.data);
      } else {
        setTotalLaporan([{ total_laporan: 0 }]);
      }
    });
  }, []);

  useEffect(() => {
    getLaporanSelesai((data) => {
      if (Array.isArray(data.data)) {
        setLaporanSelesai(data.data);
      } else {
        setLaporanSelesai([{ total_selesai: 0 }]);
      }
    });
  }, []);

  useEffect(() => {
    totalWebVisitor((data) => {
      if (Array.isArray(data.data)) {
        setTotalVisitor(data.data);
      } else {
        setTotalVisitor([{ total_visitor: 0 }]);
      }
    });
  }, []);

  return (
    <div className="flex bg-white">
      <div className="flex-1 md:px-0 py-4 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {/* Jumlah Artikel */}
          <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-between w-full">
            <FaFileAlt className="text-4xl text-green-800 mb-4" />
            <h2 className="text-lg md:text-xl font-normal text-center">
              Jumlah Artikel
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-green-800 mt-4">
              {totalArtikel[0]?.total_artikel || "Loading..."}
            </p>
          </div>
          {/* Jumlah Pengunjung */}
          <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-between w-full">
            <FaUsers className="text-4xl text-green-800 mb-4" />
            <h2 className="text-lg md:text-xl font-normal text-center">
              Jumlah Pengunjung
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-green-800 mt-4">
              {totalVisitor[0]?.total_visitor || "Loading..."}
            </p>
          </div>
          {/* Jumlah Laporan Masuk */}
          <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-between w-full">
            <FaClipboardCheck className="text-4xl text-green-800 mb-4" />
            <h2 className="text-lg md:text-xl font-normal text-center">
              Jumlah Laporan Masuk
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-green-800 mt-4">
              {totalLaporan[0]?.total_laporan || "Loading..."}
            </p>
          </div>
          {/* Jumlah Laporan Tuntas */}
          <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-between w-full">
            <FaChartLine className="text-4xl text-green-800 mb-4" />
            <h2 className="text-lg md:text-xl font-normal text-center">
              Jumlah Laporan Tuntas
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-green-800 mt-4">
              {laporanSelesai[0]?.total_laporan_selesai || "Loading..."}
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-4 md:mt-6 bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-full">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
