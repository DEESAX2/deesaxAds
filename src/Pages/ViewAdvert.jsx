import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import yourBackgroundImage from "../assets/Images/brookecagle.jpg";
import { useForm } from '@formspree/react';
import { useNavigate, useParams } from "react-router";
import { apiFetcher } from '../api/client';
import useSWR from 'swr';

export default function ViewAdvert() {
  const { id: advertId } = useParams();
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xzzgzozy");

  const { data: advert, error, isLoading } = useSWR(advertId ? `/one/advert/${advertId}` : null, apiFetcher);

  if (isLoading) {
    return (
      <div className='p-10'>
        <h3>Loading</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h3 className='p-10 text-red-700'>Something went wrong</h3>
      </div>
    );
  }

  if (state.succeeded) {
    return (
      <p>Thanks for joining!</p>
    );
  }

  return (
    <section>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-viewbg to-white font-sans">
        {/* Hero Section */}
        <section>
          <div
            style={{ backgroundImage: `url(${yourBackgroundImage})` }}
            className="relative h-48 sm:h-64 md:h-[350px] lg:h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white shadow-md"
          >
            {/* Optionally add overlay or title here */}
          </div>
        </section>

        {/* Advert Details Section */}
        <section>
          <div className="container mx-auto px-2 sm:px-4 md:px-8 mt-6 md:mt-10 bg-white rounded-md">
            <div className="flex flex-col-reverse md:flex-row md:space-x-8 lg:space-x-10 items-center md:items-start justify-center mb-8 md:mb-12">
              {/* Details */}
              <div className="space-y-4 text-center md:text-left flex-1 min-w-0 md:pr-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">
                  {advert.title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-orange-700">{advert.category}</p>
                <p className="text-sm sm:text-base text-gray-700 font-semibold">
                  {advert.description}
                </p>
                <h4 className="text-lg sm:text-2xl text-orange-950 font-semibold">{advert.location}</h4>
                <p className="text-xl sm:text-2xl font-bold text-black pt-2">₵{advert.price}</p>
                <p className="text-gray-600 break-all">{advert.user?.email || "client@needassistance@gmail.com"}</p>
                <p className="text-lg font-bold text-black">{advert.contact}</p>
                <p className="text-gray-600">+233 456 789 0000</p>
              </div>
              {/* Image */}
              <div className="flex-shrink-0 mb-6 md:mb-0 flex items-center justify-center w-full md:w-auto">
                <img
                  src={advert.image}
                  alt={advert.title}
                  className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <div className="m-2 sm:m-4 md:m-10 lg:m-20 bg-white p-4 sm:p-6 md:p-10 rounded-lg shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input
                  name="text"
                  type="text"
                  placeholder="Enter name"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-800"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-800"
                />
                <input
                  name="subject"
                  type="text"
                  placeholder="Enter subject"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-800"
                />
                <input
                  name="number"
                  type="number"
                  placeholder="Enter phone"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-800"
                />
                <div className="md:col-span-2">
                  <textarea
                    name="message"
                    placeholder="Enter message"
                    rows="5"
                    className="w-full p-4 border border-button1 rounded-md focus:outline focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-800 resize-y shadow-sm"
                  ></textarea>
                </div>
                <div className="md:col-span-2 flex justify-center">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="mt-2 bg-gradient-to-r from-button1 to-button2 text-white font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 ease-in-out w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </section>
  );
}