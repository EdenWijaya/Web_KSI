import Navbar from "../components/Navbar/Navbar";
import React from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    image: "src/assets/article1.jpg",
    link: "https://example.com/article1", // URL untuk artikel 1
  },
  {
    title: "Peran Teknologi dalam Optimalisasi Pengelolaan Sampah Plastik",
    description:
      "Artikel ini mengulas bagaimana teknologi modern, seperti AI dan sensor pintar, digunakan dalam pengumpulan, pemilihan, dan daur ulang sampah plastik.",
    link: "https://example.com/article2", // URL untuk artikel 2
  },
  {
    title: "Peran Bank Sampah dalam Pengelolaan Limbah Rumah Tangga",
    description:
      "Artikel ini membahas peran bank sampah dalam pengelolaan limbah rumah tangga...",
    image: "src/assets/article1.jpg",
    link: "https://example.com/article3", // URL untuk artikel 3
  },
  {
    title: "Reboisasi Berbasis Komunitas",
    description:
      "Program reboisasi berbasis komunitas penting untuk memulihkan ekosistem hutan...",
    image: "src/assets/article1.jpg",
    link: "https://example.com/article4", // URL untuk artikel 4
  },
  {
    title: "Agroforestri sebagai Solusi",
    description:
      "Agroforestri merupakan solusi yang berkelanjutan untuk pertanian ramah lingkungan...",
    image: "src/assets/article1.jpg",
    link: "https://example.com/article5", // URL untuk artikel 5
  },
  {
    title: "Pendidikan Lingkungan Dini",
    description:
      "Pendidikan lingkungan bagi generasi muda adalah kunci membangun kesadaran lingkungan...",
    image: "src/assets/article1.jpg",
    link: "https://example.com/article6", // URL untuk artikel 6
  },
  {
    title: "Agroforestri sebagai Solusi",
    description:
      "Agroforestri merupakan solusi yang berkelanjutan untuk pertanian ramah lingkungan...",
    image: "src/assets/article1.jpg",
    link: "https://example.com/article5", // URL untuk artikel 5
  },
  {
    title: "Pendidikan Lingkungan Dini",
    description:
      "Pendidikan lingkungan bagi generasi muda adalah kunci membangun kesadaran lingkungan...",
    image: "src/assets/article1.jpg",
    link: "https://example.com/article6", // URL untuk artikel 6
  },
];

const Artikel = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar variant="bg-green-800" variant2="mt-0 py-1" />

      {/* Daftar Artikel */}
      <div className="max-w-7xl mx-auto p-4">
        {/* Bagian atas: Gambar besar dan Deskripsi Berdampingan */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Gambar Besar */}
          <a href={articles[0].link} target="_blank" rel="noopener noreferrer">
            <img
              src={articles[0].image}
              alt="Main Article"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </a>

          {/* Deskripsi Artikel Besar */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">{articles[1].title}</h2>
            <p className="text-gray-600 mb-4">{articles[1].description}</p>
            <a
              href={articles[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Bagian bawah: 6 box kecil */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.slice(2).map((article, index) => (
            <a
              href={article.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">
                  {article.description}
                </p>
                <span className="text-blue-500 hover:text-blue-700 font-semibold mt-auto">
                  Read More
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artikel;