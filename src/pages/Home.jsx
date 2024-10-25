import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import hero1 from '../assets/hero1.svg'
import About from "./About";
import Courses from "./Courses";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section className="-mb-36" id="home">
        <div className="container">
          
          <div className="flex flex-col items-center gap-7 lg:flex-row">
            <div className="w-full space-y-5 lg:w-1/2">
              <h1>
                <span className="text-yellow-500">Knowledge</span> with <br />{" "}
                eStudy
                <br />
                <span className="text-yellow-500"> increase</span> Your <br />
                Knowledge
              </h1>
              <p className="text-slate-300 font-Lobster">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                dolorem laborum omnis excepturi aperiam! Rerum dolorem
                doloremque ratione quas voluptates.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xl:pt-10">
                <button className="btn">
                  <span className="flex items-center">
                    {" "}
                    Contact Us <IoMdEye className="text-xl ml-1" />
                  </span>
                </button>
                <button className="btn btn_outline">
                  <span className="flex items-center">
                    {" "}
                    Know More <IoMdEye className="text-xl ml-1" />
                  </span>
                </button>
              </div>

              <p className="text-xs font-Lobster text-slate-300">
                You will get 30-days free trail.
              </p>
              <div className="flex items-center gap-5 text-lg lg:pt-10">
                <FaFacebook className="text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></FaFacebook>
                <FaTwitter className="text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></FaTwitter>
                <FaInstagram className="text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></FaInstagram>
                <FaLinkedin className="text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer"></FaLinkedin>
              </div>
            </div>

            <div className="w-full relative lg:w-1/2">
              <img src={hero1} alt="Home_img" />
            </div>
          </div>
        </div>
      </section>
      <About></About>
      <Courses></Courses>
    </>
  );
};

export default Home;
