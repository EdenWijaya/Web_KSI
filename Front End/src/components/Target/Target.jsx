import React from "react";
import { motion } from "framer-motion";

const TargetData = [
  {
    id: 1,
    title: "Pelestarian Lingkungan",
    content:
      "memastikan konservasi, pemulihan dan pemanfaatan berkelanjutan ekosistem darat dan pedalaman serta layanannya, khususnya hutan, lahan basah, pegunungan dan lahan kering",
    image: "assets/11.png",
    delay: 0.2,
  },

  {
    id: 2,
    title: "Akhiri Deforestasi",
    content:
      "menghentikan penggundulan hutan, memulihkan hutan yang terdegradasi, dan secara substansial meningkatkan penghijauan dan reboisasi di seluruh dunia.",
    image: "assets/Akhiri_Deforestasi.jpg",
    delay: 0.4,
  },

  {
    id: 3,
    title: "Integrasi kebijakan",
    content:
      "Mengintegrasikan nilai-nilai ekosistem dan keanekaragaman hayati ke dalam perencanaan nasional dan lokal.",
    image: "assets/integrasi_nilai.jpg",
    delay: 0.6,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Target = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-28">
        <motion.h1
          variants={SlideLeft(0.5)}
          initial="initial"
          whileInView={"animate"}
          className="text-4xl font-bold text-center"
        >
          Target SDGs 15
        </motion.h1>
        <motion.h2
          variants={SlideLeft(0.5)}
          initial="initial"
          whileInView={"animate"}
          className="text-2xl font-bold text-center pb-10"
        >
          Ekosistem Daratan
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {TargetData.map((target) => (
            <motion.div
              key={target.id}
              variants={SlideLeft(target.delay)}
              initial="initial"
              whileInView={"animate"}
              className=" rounded-3xl flex flex-col gap-4 item-center justify-center p-10 py-7 hover:scale-110 duration-300 hover:shadow-xl"
            >
              <div className="w-full h-[220px] flex items-center justify-center">
                <img src={target.image} className="h-full object-contain" />
              </div>

              <h1 className="text-2xl font-semibold text-center px-3">
                {target.title}
              </h1>
              <p className="text-base text-center px-4">{target.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Target;
