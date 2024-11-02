import React from 'react';

const AddCourse = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add New Course</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="courseName">Course Name</label>
            <input
              type="text"
              id="courseName"
              
              placeholder="Enter course name"
              className="w-full text-black px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="price">Price ($)</label>
            <input
              type="number"
              id="price"
              
              placeholder="Enter price"
              className="w-full text-black px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="image">Course Image</label>
            <input
              id="image"
              
              className="w-full text-black mt-1 border border-gray-300 rounded-lg focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-black py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
          >
            Add Course
          </button>
        </form>
      </div>
    </div>
    );
};

export default AddCourse;