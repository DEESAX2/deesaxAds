import { Link } from "react-router";
import React from 'react';
import DeesaxConnect from "../assets/Images/DeesaxConnect.png";


export default function Navbar() {
    return (
        // ...existing code...
        <nav className="container flex flex-col md:flex-row items-center justify-between py-2 md:py-4 px-4 md:px-8 bg-white shadow-md md:h-16">
            {/* Logo Section */}
            <div className="mb-0 md:mb-0 flex-shrink-0">
                <Link to={"/"}> <img src={DeesaxConnect} alt="Logo" className="w-40 md:w-50 h-auto" /></Link>
            </div>

            <div>
                <select name="category" id="category" className="border border-button3 text-gray-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto py-2 px-3 shadow-sm transition-colors duration-200">

                    <option value="" disabled selected>Select Category</option>
                    <option value="Tech & Programming">Tech & Programming</option>
                    <option value="Artisans">Artisans</option>
                    <option value="Food & Beverages">Food & Beverages</option>
                    <option value="Education & Training">Education & Training</option>
                    <option value="Virtual Assitants">Virtual Assistants</option>
                </select>
            </div>

            {/* Navigation Links Section */}
            <div className="flex flex-col md:flex-row gap-1 md:gap-6 text-center mb-1 md:mb-0">
                <span className="text-gray-800 hover:text-button3 font-semibold cursor-pointer py-2 px-3 rounded-md transition-colors duration-200">
                    <Link to={"/"}> <h1>Home</h1></Link>
                </span>
                <span className="text-gray-800 hover:text-button3 font-semibold cursor-pointer py-2 px-3 rounded-md transition-colors duration-200">
                    <h1>About</h1>
                </span>
                <span className="text-gray-800 hover:text-button3 font-semibold cursor-pointer py-2 px-3 rounded-md transition-colors duration-200">
                    <h1>Contact</h1>
                </span>
                <span className="text-gray-800 hover:text-button3 font-semibold cursor-pointer py-2 px-3 rounded-md transition-colors duration-200">
                    <h1>Pages</h1>
                </span>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto">
                <Link to={"/login"}><button className="
            bg-gradient-to-r from-button2 to-button3
            text-white font-semibold py-2 px-4 md:py-2.5 md:px-7 rounded-full shadow-lg
            hover:from-special hover:to-button1 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75
            transition duration-300 ease-in-out w-full md:w-auto
        "> Log In
                </button></Link>
                <Link to={"/login"}> <button className="
            bg-gradient-to-r from-button3 to-button2
            text-white font-semibold py-2 px-4 md:py-2.5 md:px-7 rounded-full shadow-lg
            hover:from-special hover:to-button1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75
            transition duration-300 ease-in-out w-full md:w-auto
        ">
                    Register
                </button></Link>

                <div className="">

                    <select name="languages" id="language" className="
            bg-gradient-to-r from-button1 to-white
            text-button3 font-semibold py-2 px-2 md:py-2 md:px-5 rounded-full shadow-lg
            hover:from-special hover:to-button1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75
            transition duration-300 ease-in-out w-full md:w-auto">
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