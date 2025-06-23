import React from "react";
import craftsmanVintagelogo from "../assets/images/craftsmanVintagelogo.jpg";


export default function ViewAdvert() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div>
          <h1 className="flex flex-row justify-start text-sm sm:text-base md:text-lg font-semibold text-red-800 mt-4 sm:mt-6">
            DEESAX ADS
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 sm:mt-8 p-4 sm:p-6 gap-4 sm:gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
              Professional Home Barbering Service
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-pink-700">Sarah Ocloo</p>
            <p className="text-sm sm:text-base text-black font-semibold">
              Self-driven and passionate
            </p>
            <div className="flex flex-col space-y-2">
              <button className="bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-md p-2 sm:p-3 w-full h-10">
                Call
              </button>
              <button className="bg-green-700 hover:bg-green-800 text-white font-semibold rounded-md p-2 sm:p-3 w-full h-10">
                Message
              </button>
            </div>
          </div>
          <img
            src={craftsmanVintagelogo}
            alt="Craftsman Logo"
            className="w-full h-auto max-w-sm object-cover rounded-md" />
          <div className="flex flex-col justify-center items-center space-y-4">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">TITLE</h1>
            <p className="text-gray-900 text-sm sm:text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, fugiat
              nosotros minus quod alias sed? Repudiandae assumenda quas deleniti aperiam
              iste incidunt debitis excepturi, corporis consectetur, eum totam perferendis
              minus, ducimus inventore possimus iusto beatae rerum ullam cum non
              blanditiis fugit soluta voluptatem? Voluptates iste minima sed nisi sit.
            </p>
            <button className="mt-3 border-2 border-blue-500 hover:bg-blue-500 hover:text-white p-2 sm:p-3 rounded-md w-full">
              Delivery
            </button>
            <button className="mt-3 border-2 border-blue-500 hover:bg-blue-500 hover:text-white p-2 sm:p-3 rounded-md w-full">
              Pick Up
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Help Support Our Work By Rating Us</label>
          <textarea placeholder="Type here...." className="w-full h-32 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 sm:mt-12">
          <h1 className="text-2xl sm:text-3xl text-gray-800 text-center mt-20">
            Help Support Our Work By Rating Us
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-purple-700 m-4 sm:m-5">
            Vendor Name
          </h2>
          <input
            className="bg-pink-300 border-2 border-purple-500 rounded-md p-2 w-full max-w-md"
            type="text"
            name="name"
            id="rating-input"
            placeholder="Enter your feedback"
          />
          <p className="text-xl sm:text-2xl font-bold text-purple-700 m-4 sm:m-5">Rating</p>
          <input
            className="bg-pink-300 border-2 border-purple-500 rounded-md p-2 w-full max-w-md"
            type="text"
            name="name"
            id="rating-input"
            placeholder="Enter your feedback"
          />
        </div>
      </div>
    </div>
  );
}