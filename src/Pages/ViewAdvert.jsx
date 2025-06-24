import React from "react";
import craftsmanVintagelogo from "../assets/images/craftsmanVintagelogo.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



export default function ViewAdvert() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div>
          <h1 className="flex flex-row justify-start text-sm sm:text-base md:text-lg font-semibold text-red-800 mt-4 sm:mt-6 m-20">
            DEESAX ADS
          </h1>
        </div>
        <div className="flex flex-row space-x-10 mx-20">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
              Professional Home Barbering Service
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-amber-800">Sarah Ocloo</p>
            <p className="text-sm sm:text-base text-black font-semibold">
              Self-driven and passionate
            </p>
            <h4 className="text-3xl text-orange-950">The client's satisfaction is my priority</h4>

            <p className="text-2xl font-bold">Email Address</p>
            <p>client@needassistance@gmail.com</p>
            <br />
            <p className="text-2xl font-bold">Phone Number</p>
            <p>+233 456 789 0000</p>
            <br />
            <p className="text-2xl font-bold">Web Address</p>
            <p>www.clientsatisfaction.com</p>
            {/* <div className="flex flex-col px-40 py-2 space-y-5">
              <button className="bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-md px-5 py-2 sm:p-3 w-full h-10">Call</button>
              <button className="bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md p-2 sm:p-3 w-full h-10">Message</button></div> */}
          </div>
          <div className="space-x-20">
            <img
              src={craftsmanVintagelogo}
              alt="Craftsman Logo"
              className="w-full h-auto max-w-sm object-cover rounded-md" /></div>
        </div>

        <div className="m-6">
          {/* Put a form here */}

        </div>
        <div className="flex flex-col justify-center items-center mt-10 sm:mt-12 mb-10">
          <h1 className="text-2xl sm:text-3xl text-gray-800 text-center mt-20">
            Help Support Our Work</h1>
          <label className="block bg-orange-200 text-gray-700 mt-8 mb-2">Leave Us A Message</label>
          <textarea placeholder="Type here...." className="w-full h-32 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shadow-orange-950"></textarea>

        </div>
      </div>
      <Footer />
    </div>
  );
}