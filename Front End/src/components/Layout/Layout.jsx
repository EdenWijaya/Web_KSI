import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { Outlet } from 'react-router-dom';
import { FaEnvelope, FaBars } from 'react-icons/fa';

const Layout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-60 z-40 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform`}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Mobile */}
      {isSidebarOpen && windowWidth < 768 && (
        <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={toggleSidebar}></div>
      )}

      <div className="flex-1 flex flex-col md:ml-60">
        {/* Header Bar */}
        <div className="text-gray-800 flex items-center justify-between p-4 md:px-10 bg-white">
          <button className="md:hidden text-3xl text-black" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <div className="flex items-center space-x-4">
            <div
              className={`text-xl font-bold ${windowWidth < 768 ? "ml-11" : ""}`}
            >
              <span className="text-secondary2">Eco</span>Banjar
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-green-800 p-2 rounded-full mr-2 md:mr-0">
              <FaEnvelope className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            {windowWidth >= 768 && (
              <div className="flex items-center">
                <span className="ml-0 mr-7 text-lg">ADMIN</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 p-4 md:px-10 bg-gray-100 overflow-y-auto h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
