import React from "react";
import { FaFacebook, FaInstagramSquare, FaLeaf, FaLinkedinIn, FaTwitterSquare } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import flora from '../assets/flora.jpg'
import { BiBook } from "react-icons/bi";
import { FaComputer } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative">
        <div className="container text-white absolute top-0 right-0 left-0 -translate-y-1/2">
          <div className="bg-green-950 px-10 pt-5 pb-10 space-y-5 rounded-md">
            <h3>
              <span className="text-green-500">Subscribe</span> to our newsletter
            </h3>

            <div className="flex flex-col md:flex-row gap-1">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-5 py-3 text-green-900 rounded-md outline-none"
              />
              <button className="flex items-center justify-center gap-1 bg-green-900 px-5 py-3 rounded-md hover:opacity-80 duration-300">
                <span>Subscribe</span>
                <IoSend />
              </button>
            </div>
          </div>
        </div>

        <div className="container mt-16 mb-10">
          <div className="border-b border-blue-500 relative">
            <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto">
              <div className="flex bg-yellow-100 text-xl text-center space-x-5">
                <FaFacebook className="hover:text-yellow-500 duration-300 cursor-pointer"></FaFacebook>
                <FaTwitterSquare className="hover:text-yellow-500 duration-300 cursor-pointer"></FaTwitterSquare>
                <FaInstagramSquare className="hover:text-yellow-500 duration-300 cursor-pointer"></FaInstagramSquare>
                <FaLinkedinIn className="hover:text-yellow-500 duration-300 cursor-pointer"></FaLinkedinIn>
              </div>
            </div>
          </div>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
          {/* item 1 */}
          <div>
            <div className="text-7xl text-center inline-block">
                <FaComputer className="text-orange-700"></FaComputer>
                <p className="font-Lobster sm:text-2xl text-red-800">eStudy</p>
            </div>
          </div>
          {/* item 2 */}
          <div>
            <p className="mb-5 font-bold text-xl">Quick Link</p>
            <div className="flex flex-col gap-1">
              <a href="#">Plants</a>
              <a href="#">Flowers</a>
              <a href="#">Gerdening</a>
              <a href="#">Seeds</a>
              <a href="#">Shipping</a>
            </div>
          </div>
          {/* item 3 */}
          <div>
            <p className="mb-5 font-bold text-xl">Popular Services</p>
            <div className="flex flex-col gap-1">
              <a href="#">Plants</a>
              <a href="#">Flowers</a>
              <a href="#">Gerdening</a>
              <a href="#">Seeds</a>
              <a href="#">Shipping</a>
            </div>
          </div>
          {/* item 4 */}
          <div>
            <p className="mb-5 font-bold text-xl">Contact Us</p>
            <div className="flex flex-col gap-1">
              <a href="#">Plants</a>
              <a href="#">Flowers</a>
              <a href="#">Gerdening</a>
              <a href="#">Seeds</a>
              <a href="#">Shipping</a>
            </div>
          </div>
        </div>

        <div className="container">
          <p className="text-center mt-10 opacity-50">
            Copyright &copy; 2024 Shahidullah. All rights reserved
          </p>
        </div>

        <div className="absolute bottom-0 left-0 opacity-20 pointer-events-none">
          {/* <img src={flora} alt="" className="w-full lg:w-1/2" /> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
