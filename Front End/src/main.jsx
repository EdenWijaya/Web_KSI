import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Artikel from "./pages/Artikel.jsx";
import Laporan from "./pages/Laporan.jsx";
import Login from "./pages/Login.jsx";

import "./index.css";
import AdminDashboard from "./pages/admin/dashboard/Dashboard.jsx";

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
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
