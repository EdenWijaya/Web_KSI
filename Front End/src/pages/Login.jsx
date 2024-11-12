import React from "react";
import { Link } from "react-router-dom";

import LoginForm from "../components/Form/FormLogin";

const Login = () => {
  const goToHome = () => {
    window.location.href = "/";
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(src/assets/background-img-2.jpg)" }}
    >
      <style>
        {`
          /* Menghilangkan icon reveal di Chrome/Edge/Chromium */
          input[type="password"]::-ms-reveal,
          input[type="password"]::-ms-clear,
          input[type="password"]::-webkit-reveal,
          input[type="password"]::-webkit-clear {
            display: none;
          }
        `}
      </style>

      {/* Button Back */}
      <Link to="/">
        <div className="absolute top-3 left-3 w-7 h-7  bg-opacity-1 cursor-pointer">
          <img
            src="src/assets/back_icon.png"
            alt="Back"
            className="w-full h-full"
          />
        </div>
      </Link>

      <div className="flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden max-w-[978px] w-full backdrop-blur-lg">
        {/* Left section */}
        <div className="hidden md:flex w-full md:w-[54%] h-[575px] relative">
          <video
            src="src/assets/login_video2.mp4"
            className="absolute w-full h-full object-cover"
            autoPlay
            loop
            muted
          ></video>
          <div className="flex flex-col items-center justify-center w-full h-full text-center p-8 relative z-10">
            <h1 className="text-4xl font-bold text-white">Eco Banjar</h1>
            <p className="text-lg text-white mt-4">
              Sistem Informasi Lingkungan Desa Banjar Agung
            </p>
            <p className="absolute bottom-4 left-4 text-white text-sm">
              Anjes-V1
            </p>
          </div>
        </div>

        {/* Right section*/}
        <div className="w-full md:w-[46%] h-[575px] flex flex-col justify-center p-8 bg-white/50 backdrop-blur-lg">
          <h2 className="text-2xl font-semibold text-center text-white-800 mb-10 mt-12">
            Welcome Back !
          </h2>

          <LoginForm></LoginForm>

          {/* Footer Text */}
          <div className="text-center mt-8 text-sm text-gray-700">
            <p>
              Teruslah semangat dalam menjaga lingkungan Desa Banjar Agung!
              Kebaikan kecil yang dilakukan bersama akan menciptakan dampak yang
              luar biasa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
