import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const {signInUser} = useContext(AuthContext);
  console.log(signInUser);

  const navigate = useNavigate();

  const handleLogin = (e) =>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);

    signInUser(email,password)
    .then((result) =>{
      console.log(result.user)
      e.target.reset();

      if(result.user.emailVerified){
        toast.success("Login Successfull");

        setTimeout(() => {
          navigate('/');
        }, 3000);
      }
      
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  
  return (
    <>
      <div className="container flex items-center justify-center min-h-screen relative overflow-hidden">
        
        {/* Login Form with Animated Border */}
        <div className="relative z-10 bg-green-700 bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-md">
          {/* Border Animation */}
          <div className="absolute inset-0 rounded-lg border-4 border-transparent animate-border-gradient pointer-events-none"></div>

          <h2 className="text-2xl font-bold text-center text-white mb-6">
            Login
          </h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full text-black bg-gray-400 px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none "
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
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
            <ToastContainer
                  position="top-center"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                  style={{marginTop: '70px'}}
                />
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
