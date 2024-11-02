import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {

    return (
        <div className="container flex items-center justify-center min-h-screen relative overflow-hidden">
        
        {/* Login Form with Animated Border */}
        <div className="relative z-10 bg-green-700 bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-md">
          {/* Border Animation */}
          <div className="absolute inset-0 rounded-lg border-4 border-transparent animate-border-gradient pointer-events-none"></div>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Register
          </h2>
          <form className="space-y-6">
          <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full text-black bg-gray-400 px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none "
                required
              />
            </div>
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
                Register
            </button>
            <div>
                <p className="text-gray-400">already have an account? <span className="hover:underline"><NavLink to='/login'>Login</NavLink></span> </p>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;