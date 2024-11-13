import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Artikel from "./pages/Artikel.jsx";
import Laporan from "./pages/Laporan.jsx";
import Login from "./pages/Login.jsx";
import IsiArtikel from "./pages/Artikelisi.jsx";

import "./index.css";
import AdminDashboard from "./pages/admin/dashboard/Dashboard.jsx";
import LaporanTable from "./pages/admin/dashboard/LaporanTable.jsx";
import ArtikelTable from "./pages/admin/dashboard/ArtikelTable.jsx";
import TambahArtikel from "./pages/admin/Form/TambahArtikel.jsx";
import UpdateArtikel from "./pages/admin/Form/UpdateArtikel.jsx";
import Layout from "./components/Layout/Layout.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/artikel",
    element: <Artikel />,
  },
  {
    path: "/laporan",
    element: <Laporan />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
      // <Layout />
    ),
    children: [
      {
        path: "admin-dashboard",
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
          // <AdminDashboard />
        ),
      },
      {
        path: "artikel-table",
        element: (
          <ProtectedRoute>
            <ArtikelTable />
          </ProtectedRoute>
          // <ArtikelTable />
        ),
      },
      {
        path: "laporan-table",
        element: (
          <ProtectedRoute>
            <LaporanTable />
          </ProtectedRoute>
          // <LaporanTable />
        ),
      },
      {
        path: "tambah-artikel",
        element: <TambahArtikel />,
      },
      {
        path: "update-artikel/:id",
        element: <UpdateArtikel />,
      },
    ],
  },
  {
    path: "artikel/isi-artikel/:id",
    element: <IsiArtikel />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
