import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import craftsmanVintagelogo from "../assets/images/craftsmanVintagelogo.jpg";
import yourBackgroundImage from "../assets/Images/brookecagle.jpg";


export default function ViewAdvert() {
  return (
    <section>
      <Navbar />
      <div className="min-h-screen bg-gray-300 font-sans">

        <section>
          <div style={{ backgroundImage: `url(${yourBackgroundImage})` }} className="relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white shadow-md">
          </div>
        </section>

        <section>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 mt-10">
            <div className="flex flex-col-reverse md:flex-row md:space-x-10 items-center md:items-start justify-center mb-10 md:mb-12">
              <div className="space-y-4 text-center md:text-left flex-1 min-w-0 md:pr-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
                  Professional Home Barbering Service
                </h2>
                <p className="text-xl sm:text-2xl font-bold text-amber-800">Sarah Ocloo</p>
                <p className="text-sm sm:text-base text-gray-700 font-semibold">
                  Self-driven and passionate
                </p>
                <h4 className="text-3xl text-orange-950">The client's satisfaction is my priority</h4>

                <p className="text-2xl font-bold text-gray-800 pt-4">Email Address</p>
                <p className="text-gray-600">client@needassistance@gmail.com</p>
                <br />
                <p className="text-2xl font-bold text-gray-800">Phone Number</p>
                <p className="text-gray-600">+233 456 789 0000</p>
                <br />
                <p className="text-2xl font-bold text-gray-800">Web Address</p>
                <p className="text-gray-600">www.clientsatisfaction.com</p>
              </div>
              <div className="flex-shrink-0 mb-8 md:mb-0">
                <img
                  src={craftsmanVintagelogo}
                  alt="Craftsman Logo"
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="m-4 md:m-20 bg-white p-6 md:p-10 rounded-lg shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Get in Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Enter name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-800"
              />
              <input
                type="email"
                placeholder="Enter email"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-800"
              />
              <input
                type="text"
                placeholder="Enter subject"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-800"
              />
              <input
                type="tel"
                placeholder="Enter phone"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-800"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col justify-center items-center mt-10 sm:mt-12 mb-10 px-4">
            <label className="block bg-gradient-to-r from-button1 to to-button2 text-white text-xl font-semibold px-4 py-2 rounded-md mb-6 shadow-sm">Leave Us A Message</label>
            <textarea
              placeholder="Enter message"
              rows="6"
              className="w-full max-w-2xl p-4 border border-button1 rounded-md focus:outline focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-800 resize-y shadow-sm"
            ></textarea>
            <button className="mt-6 bg-gradient-to-r from-button1 to-button2 text-white font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 ease-in-out w-full max-w-2xl">
              Send Message
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </section>
  );
}
