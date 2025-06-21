import { Link } from "react-router";
import React from 'react';
import DeesaxConnect from "../assets/Images/DeesaxConnect.png";


export default function Navbar() {
    return (
       <nav className="w-full bg-white shadow-md">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0 py-2 md:py-4 px-4 md:px-8">
    {/* Logo */}
    <div className="flex-shrink-0 flex justify-center md:justify-start mb-2 md:mb-0">
      <Link to={"/"}>
        <img src={DeesaxConnect} alt="Logo" className="w-32 md:w-40 h-auto" />
      </Link>
    </div>

    {/* Category Select */}
    <div className="mb-2 md:mb-0 flex justify-center md:justify-start">
      <select
        name="category"
        id="category"
        className="border border-button3 text-gray-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto py-2 px-3 shadow-sm transition-colors duration-200"
        disabledy
      >
        <option value="" disabled selected>Select Category</option>
        <option value="Tech & Programming">Tech & Programming</option>
        <option value="Artisans">Artisans</option>
        <option value="Food & Beverages">Food & Beverages</option>
        <option value="Education & Training">Education & Training</option>
        <option value="Virtual Assitants">Virtual Assistants</option>
      </select>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-col md:flex-row gap-1 md:gap-6 text-center mb-2 md:mb-0">
      <Link to={"/"} className="text-gray-800 hover:text-button3 font-semibold cursor-pointer py-2 px-3 rounded-md transition-colors duration-200">Home</Link>
      <Link to={"/about"} className="text-gray-800 hover:text-button3 font-semibold cursor-pointer py-2 px-3 rounded-md transition-colors duration-200">About</Link>
      <Link to={"/contact"} className="text-gray-800 hover:text-button3 font-semibold cursor-pointer py-2 px-3 rounded-md transition-colors duration-200">Contact</Link>
      <Link to={"/pages"} className="text-gray-800 hover:text-button3 font-semibold cursor-pointer py-2 px-3 rounded-md transition-colors duration-200">Pages</Link>
    </div>

    {/* Buttons Section */}
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto">
      <Link to={"/login"}>
        <button className="bg-gradient-to-r from-button2 to-button3 text-white font-semibold py-2 px-4 md:py-2.5 md:px-7 rounded-full shadow-lg hover:from-special hover:to-button1 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition duration-300 ease-in-out w-full md:w-auto">
          Log In
        </button>
      </Link>
      <Link to={"/login"}>
        <button className="bg-gradient-to-r from-button3 to-button2 text-white font-semibold py-2 px-4 md:py-2.5 md:px-7 rounded-full shadow-lg hover:from-special hover:to-button1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out w-full md:w-auto">
          Register
        </button>
      </Link>
      <select
        name="languages"
        id="language"
        className="bg-gradient-to-r from-button1 to-white text-button3 font-semibold py-2 px-2 md:py-2 md:px-5 rounded-full shadow-lg hover:from-special hover:to-button1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out w-full md:w-auto"
      >
        <option value="Language" disabled selected>Language</option>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Spanish">Spanish</option>
        <option value="German">German</option>
        <option value="Chinese">Chinese</option>
      </select>
    </div>
  </div>
</nav>
    );
}