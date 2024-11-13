import React, { useState } from "react";
//Sementara
import { Link } from "react-router-dom";
import { AdminAuthentication } from "../../services/adminAuth/adminAuth.service";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <form className="space-y-4" onSubmit={AdminAuthentication}>
      {/* Username Input */}
      <div>
        <label className="block text-sm font-normal text-white-800 mb-1">
          Username
        </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full px-4 py-2 border border-black rounded-md bg-white/75 focus:outline-none focus:ring-2 focus:ring-blue-600"
          autoComplete="off"
        />
      </div>

      {/* Password Input */}
      <div className="relative">
        <label className="block text-sm font-normal text-white-800 mb-1">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-black rounded-md bg-white/75 focus:outline-none focus:ring-2 focus:ring-blue-600"
          autoComplete="off"
        />

        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 leading-none"
          style={{ paddingTop: "22px" }}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {/* Buttons Submit */}
      <div className="flex gap-6">
        {/* <button
          type="button"
          className="w-full px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition mt-1"
        >
          Login
        </button> */}

        <button className="primary-btn w-full text-center" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
