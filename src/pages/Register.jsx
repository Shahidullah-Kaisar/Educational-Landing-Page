import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {

    const {createRegisterUser} = useContext(AuthContext)
    console.log(createRegisterUser);

    const handleRegister = (e) => {
      e.preventDefault();

      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(name,email,password);

      createRegisterUser(email,password)
      .then((result) =>{
        console.log(result.user);
        e.target.reset();
        
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Registratioin Successfull",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) =>{
        console.log(error);
      })
    }

    return (
        <div className="container flex items-center justify-center min-h-screen relative overflow-hidden">
        
        {/* Login Form with Animated Border */}
        <div className="relative z-10 bg-green-700 bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-md">
          {/* Border Animation */}
          <div className="absolute inset-0 rounded-lg border-4 border-transparent animate-border-gradient pointer-events-none"></div>

          <h2 className="text-2xl font-bold text-center text-white mb-6">
            Register
          </h2>
          <form className="space-y-6" onSubmit={handleRegister}>
          <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name='name'
                className="w-full text-black bg-gray-400 px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none "
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name='email'
                className="w-full text-black bg-gray-400 px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none "
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name='password'
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