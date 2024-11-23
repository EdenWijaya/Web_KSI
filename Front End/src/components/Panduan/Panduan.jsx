import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: 1,
    title: "Pembuangan Sampah",
    content:
      "Membiasakan diri untuk membuang sampah pada tempatnya. Misalkan ketika kita menemukan sampah yang berserakan, kita bisa membuangnya ke dalam tempat sampah. Sehingga tidak hanya petugas kebersihan saja yang melakukannya, tetapi kita juga bisa ikut menjaga kebersihan lingkungan.",
    image: "assets/membuang_sampah.jpg",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Pemilahan Sampah",
    content:
      "Terdapat dua jenis sampah, yaitu sampah organik dan sampah anorganik. Sampah organik yaitu sampah basah yang bisa diolah dan dijadikan pupuk. Sedangkan sampah anorganik atau sampah kering adalah sampah yang tidak bisa diurai atau membusuk. Pemilahan sampah perlu dilakukan untuk menjaga lingkungan sekitar agar tetap bersih dan indah.",
    image: "assets/pemilahan.jpg",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Kegiatan Kerja Bakti",
    content:
      "Menjaga kebersihan lingkungan bisa dilakukan dengan rutin melalui kegiatan kerja bakti atau gotong royong. Hal ini bertujuan untuk menjaga lingkungan agar tetap bersih dan mempererat hubungan antar warga. Sehingga bisa mewujudkan kebersihan lingkungan bersama. Kerja bakti atau gotong royong bisa dilakukan sekali dalam seminggu.",
    image: "assets/kerja_baktii.jpg",
    delay: 0.6,
  },
  {
    id: 4,
    title: "Kampanye Kesadaran Kesehatan",
    content:
      "Mengadakan kampanye edukasi kesadaran kesehatan agar setiap warga desa mengerti bagaimana cara menjaga tubuh dan lingkungannya agar tetap sehat.",
    image: "assets/kesehatan.png",
    delay: 0.8,
  },
  {
    id: 5,
    title: "Penghijauan Lingkungan",
    content:
      "Memperbanyak tanaman hijau di sekitar agar suasana lebih asri dan rindang. Tanaman hijau dapat melepaskan oksigen dan menyerap karbon dioksida. Inilah salah satu alasan bahwa tanaman hijau bisa membuat kualitas udara jadi lebih baik.",
    image: "assets/penghijauan.jpg",
    delay: 1.0,
  },

  {
    id: 6,
    title : "Pengurangan Penggunaan Plastik",
    content: "Mengurangi penggunaan plastik sekali pakai adalah langkah kecil dengan dampak besar. Dengan tas belanja kain, botol minum isi ulang, dan sedotan non plastik, kita dapat membantu mengurangi limbah plastik yang mencemari lingkungan. Mulailah dari hal sederhana untuk masa depan yang lebih hijau",
    image: "assets/plastik.jpg",
    delay: 1.2,
  },
];

const SlideUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Panduan = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold mb-8">
          Panduan Menciptakan Lingkungan Desa yang Sehat
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-16">
          {sections.map((section) => (
            <motion.div
            key={section.id}
            variants={SlideUp(section.delay)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="rounded-lg shadow-md overflow-hidden bg-white"
          >
            <div className="h-72 w-full overflow-hidden">
              <img
                src={section.image}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-center mt-4">
                {section.title}
              </h3>
              <p className="mt-2">{section.content}</p>
            </div>
          </motion.div>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default Panduan;
