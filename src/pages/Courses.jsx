import React from "react";
import web from '../assets/web-dev.svg'
import digital from '../assets/digital.svg'
import graphic from '../assets/graphic.svg'
import app from '../assets/App-dev.svg'
import { IoIosStar } from "react-icons/io";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { IoCartOutline, IoStarOutline } from "react-icons/io5";
const Courses = () => {
  return (
    <>
      <section className="bg-green-900 -mt-10" id="courses">
        <div className="flex flex-col items-center gap-3 text-center mb-44 sm:-mt-10  lg:-mt-16">
          <h2 className="title">Our Courses</h2>
          <p className="max-w-2xl">Follow instruction for more</p>
        </div>

        <div className="container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* card 1 */}
          <div className="popular_card bg-green-950 p-10 pt-24 rounded-md relative">
            <img
              src={web}
              alt=""
              className="w-48 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
            />
            
            <h3>Web Development</h3>
            <p>Grow Your Knowledge</p>

            <div className="flex gap-1 text-yellow-500 text-xs py-3">
              <IoIosStar />
              <IoIosStar />
              <FaRegStarHalfStroke />
              <IoStarOutline className="text-gray-400" />
              <IoStarOutline className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl">$5</p>
              <button className="bg-yellow-500 px-3 py-2 rounded-sm text-xl">
                <IoCartOutline />
              </button>
            </div>
          </div>
          {/* card 2 */}
          <div className="popular_card bg-green-950 p-10 pt-24 rounded-md relative">
            <img
              src={digital}
              alt=""
              className="w-48 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
            />
            
            <h3>App Development</h3>
            <p>Grow Your Knowledge</p>

            <div className="flex gap-1 text-yellow-500 text-xs py-3">
              <IoIosStar />
              <IoIosStar />
              <FaRegStarHalfStroke />
              <IoStarOutline className="text-gray-400" />
              <IoStarOutline className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl">$5</p>
              <button className="bg-yellow-500 px-3 py-2 rounded-sm text-xl">
                <IoCartOutline />
              </button>
            </div>
          </div>
          {/* card 3 */}
          <div className="popular_card bg-green-950 p-10 pt-24 rounded-md relative">
            <img
              src={graphic}
              alt=""
              className="w-48 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
            />
            
            <h3>Graphic Designer</h3>
            <p>Grow Your Knowledge</p>

            <div className="flex gap-1 text-yellow-500 text-xs py-3">
              <IoIosStar />
              <IoIosStar />
              <FaRegStarHalfStroke />
              <IoStarOutline className="text-gray-400" />
              <IoStarOutline className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl">$5</p>
              <button className="bg-yellow-500 px-3 py-2 rounded-sm text-xl">
                <IoCartOutline />
              </button>
            </div>
          </div>
          {/* card 4 */}
          <div className="popular_card bg-green-950 p-10 pt-24 rounded-md relative">
            <img
              src={app}
              alt=""
              className="w-48 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
            />
            
            <h3>Digital Marketing</h3>
            <p>Grow Your Knowledge</p>

            <div className="flex gap-1 text-yellow-500 text-xs py-3">
              <IoIosStar />
              <IoIosStar />
              <FaRegStarHalfStroke />
              <IoStarOutline className="text-gray-400" />
              <IoStarOutline className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl">$5</p>
              <button className="bg-yellow-500 px-3 py-2 rounded-sm text-xl">
                <IoCartOutline />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
