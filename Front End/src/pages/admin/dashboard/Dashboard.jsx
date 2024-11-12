import React from "react";
import { FaChartLine, FaFileAlt, FaUsers, FaClipboardCheck } from "react-icons/fa";
import Chart from "./Chart";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex-1 px-4 md:px-10 py-6 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Jumlah Artikel */}
          <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-between w-full">
            <FaFileAlt className="text-4xl text-green-800 mb-4" />
            <h2 className="text-lg md:text-xl font-normal text-gray-700 text-center">
              Jumlah Artikel
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-green-800 mt-4">17</p>
          </div>
          {/* Jumlah Pengunjung */}
          <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-between w-full">
            <FaUsers className="text-4xl text-green-800 mb-4" />
            <h2 className="text-lg md:text-xl font-normal text-gray-700 text-center">
              Jumlah Pengunjung
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-green-800 mt-4">59</p>
          </div>
          {/* Jumlah Laporan Masuk */}
          <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-between w-full">
            <FaClipboardCheck className="text-4xl text-green-800 mb-4" />
            <h2 className="text-lg md:text-xl font-normal text-gray-700 text-center">
              Jumlah Laporan Masuk
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-green-800 mt-4">4</p>
          </div>
          {/* Jumlah Laporan Tuntas */}
          <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-between w-full">
            <FaChartLine className="text-4xl text-green-800 mb-4" />
            <h2 className="text-lg md:text-xl font-normal text-gray-700 text-center">
              Jumlah Laporan Tuntas
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-green-800 mt-4">3</p>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-6 md:mt-10 bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-full">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
