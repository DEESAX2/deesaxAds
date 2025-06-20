// import { Link } from "react-router";
import React from 'react';
import DeesaxConnect from "../assets/Images/DeesaxConnect.png";
// import herobg from "../assets/Images/herobg.png"; // herobg is not used in the provided snippet

export default function Navbar() {
    return (
        <nav className=" container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4               bg-white rounded-lg shadow-md h-12">
            {/* Logo Section */}
            <div className="mb-2 md:mb-0"> {/* Add bottom margin on small screens, remove on medium */}
                <img src={DeesaxConnect} alt="Logo" className="w-50 h-auto" /> {/* Adjusted width and auto height */}
            </div>

            {/* Navigation Links Section */}
            <div className=" flex flex-col md:flex-row gap-4 md:gap-6 text-center ">
                <span className="text-gray-800 hover:text-button3 font-semibold cursor-pointer py-2 px-3 rounded-md transition-colors duration-200">
                    <h1>Home</h1>
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
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto ">
                <button className="
                    bg-gradient-to-r from-button2 to-button3 /* Using generic Tailwind colors for example */
                    text-white font-semibold py-2 px-4 md:py-2.5 md:px-7 rounded-full shadow-lg
                    hover:from-special hover:to-button1 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition duration-300 ease-in-out w-full md:w-auto ">
                    Sign In
                </button>

                <button className="
                    bg-gradient-to-r from-button3 to-button2 /* Reversed colors for distinction */
                    text-white font-semibold py-2 px-4 md:py-2.5 md:px-7 rounded-full shadow-lg
                    hover:from-special hover:to-button1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-outw-full md:w-auto ">
                    Register
                </button>
            </div>
        </nav>
    );
}