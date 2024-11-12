import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";

import {
  FaChartLine,
  FaFileAlt,
  FaUsers,
  FaClipboardCheck,
  FaEnvelope,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Persentase Kuesioner",
        data: [10, 15, 20, 25, 18, 22, 30, 10, 10, 10, 10, 20],
        fill: false,
        borderColor: "#2196F3",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#1976D2",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Persentase Kuesioner",
        font: { size: 24 },
        color: "#000000",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}%`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Bulan",
        },
      },
      y: {
        title: {
          display: true,
          text: "Persentase (%)",
        },
        min: 0,
        max: 40,
      },
    },
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar></Sidebar>
      <div className="flex-1 flex flex-col">
        {/* Header Bar */}
        <div className="text-gray-800 flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-cyan-500">
          <div className="flex items-center space-x-4">
            <div
              className={`text-xl font-bold text-white ${
                windowWidth < 768 ? "ml-11" : ""
              }`}
            >
              EcoBanjar
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-blue-500 p-2 rounded-full">
              <FaEnvelope className="w-6 h-6" />
            </button>
            {windowWidth >= 768 && (
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-500 font-semibold">A</span>
                </div>
                <span className="ml-0 mr-7 text-lg text-white">ADMIN</span>
              </div>
            )}
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 md:p-10 bg-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Statistik Cards */}
            <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-between">
              <FaFileAlt className="text-4xl text-blue-500 mb-4" />
              <h2 className="text-xl font-normal text-gray-700 text-center">
                Jumlah Artikel
              </h2>
              <p className="text-4xl font-bold text-blue-600 mt-4">17</p>
            </div>
            <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-between">
              <FaUsers className="text-4xl text-blue-500 mb-4" />
              <h2 className="text-xl font-normal text-gray-700 text-center">
                Jumlah Pengunjung
              </h2>
              <p className="text-4xl font-bold text-blue-600 mt-4">59</p>
            </div>
            <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-between">
              <FaClipboardCheck className="text-4xl text-blue-500 mb-4" />
              <h2 className="text-xl font-normal text-gray-700 text-center">
                Jumlah Laporan Masuk
              </h2>
              <p className="text-4xl font-bold text-blue-600 mt-4">4</p>
            </div>
            <div className="bg-gradient-to-b from-white to-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-between">
              <FaChartLine className="text-4xl text-blue-500 mb-4" />
              <h2 className="text-xl font-normal text-gray-700 text-center">
                Jumlah Laporan Tuntas
              </h2>
              <p className="text-4xl font-bold text-blue-600 mt-4">3</p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg max-w-full">
            <div className="relative w-full h-[450px] flex flex-col">
              <Line key={windowWidth} data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
