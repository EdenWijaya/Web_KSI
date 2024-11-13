import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";

const IsiArtikel = () => {
  return (
    <div>
      <Navbar variant="bg-green-800" variant2="mt-0 py-1" />
      <div>
        <h2 className="text-3xl font-bold text-center p-7 ">
          Reboisasi Berbasis Komunitas: Langkah Awal Memulihkan Ekosistem Hutan
        </h2>
        <div className="px-7">
          <div className="flex items-center justify-center object-cover rounded-xl ">
            <img
              className="w-[50%] flex items-center justify-center object-cover rounded-xl"
              src="src/assets/article1.jpg"
              alt="Reboisasi Berbasis Komunitas: Langkah Awal Memulihkan Ekosistem Hutan"
            />
          </div>
        </div>
        <div className="p-7">
          <p className="px-20 text-justify">
            Artikel ini mengulas bagaimana teknologi modern, seperti AI dan
            sensor pintar, digunakan dalam pengumpulan, pemilahan, dan daur
            ulang sampah plastik. Ditekankan pula pentingnya pemanfaatan
            teknologi untuk mengurangi pencemaran tanah akibat plastik yang
            sulit terurai.
            <br />
            <br />
            Lorem ipsum odor amet, consectetuer adipiscing elit. Id varius non
            turpis sociosqu lobortis efficitur dui? Arcu scelerisque penatibus
            tortor cras, commodo parturient euismod condimentum. Pretium tortor
            posuere primis taciti nam parturient a natoque. Ultricies sem
            efficitur suspendisse penatibus fusce suspendisse neque sagittis.
            Mauris dapibus suscipit imperdiet habitant etiam imperdiet. Augue
            arcu dictum euismod mauris viverra. Imperdiet est et velit cubilia
            curae molestie. Posuere ante magna senectus ac tempor rhoncus
            ultrices sem cras. Bibendum scelerisque hendrerit potenti
            suspendisse bibendum parturient. Consequat nulla ut interdum aliquam
            elit posuere maecenas quis urna. Mus mus ornare, non id mattis eu.
            Rutrum pharetra hac aliquet facilisi auctor primis nostra. Accumsan
            feugiat justo turpis venenatis tortor ultricies velit urna. Velit
            gravida praesent amet egestas; consectetur enim penatibus. Erat
            suspendisse platea accumsan dui platea a? Aenean lacinia ultricies
            hac hac ullamcorper. Efficitur adipiscing penatibus hendrerit quam
            bibendum donec at consequat montes. Ultrices ex placerat phasellus
            torquent scelerisque neque. Afinibus habitasse erat augue; euismod
            rhoncus. Odio rhoncus nec tortor dapibus dui iaculis nisi vestibulum
            id. Augue eleifend sagittis magna; mi magnis aliquet vitae. Nostra
            mattis velit egestas congue facilisi magna convallis. Nibh vivamus
            leo condimentum conubia odio facilisi proin dignissim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IsiArtikel;
