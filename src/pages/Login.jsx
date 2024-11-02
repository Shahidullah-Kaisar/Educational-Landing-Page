import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const Login = () => {
  
  return (
    <>
      <div className="container flex items-center justify-center min-h-screen relative overflow-hidden">
        
        {/* Login Form with Animated Border */}
        <div className="relative z-10 bg-green-700 bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-md">
          {/* Border Animation */}
          <div className="absolute inset-0 rounded-lg border-4 border-transparent animate-border-gradient pointer-events-none"></div>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full text-black bg-gray-400 px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none "
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full text-black bg-gray-400  px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none "
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-green-800 hover:bg-green-900 rounded-lg shadow-md transition duration-300"
            >
              Login
            </button>
            <div>
                <p className="text-gray-400">New to the Website? Please <span className="hover:underline"><NavLink to='/register'>Register</NavLink></span> </p>
            </div>
            <div className="border rounded-md p-2 w-52 sm:w-48">
                <p className="flex mx-auto gap-3 sm:gap-2">Login With Google <FcGoogle className="text-2xl"></FcGoogle></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
