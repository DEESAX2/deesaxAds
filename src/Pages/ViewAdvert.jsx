import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import craftsmanVintagelogo from "../assets/images/craftsmanVintagelogo.jpg";
import yourBackgroundImage from "../assets/Images/brookecagle.jpg";
import { useForm, ValidationError } from '@formspree/react';
import AdvertCard from '../Components/AdvertCard';
import { Link, useNavigate, useParams } from "react-router";
import { apiFetcher } from '../api/client';
import { useSearchParams } from 'react-router';
import { useState, useEffect } from 'react';
import useSWR from 'swr';


export default function ViewAdvert() {
  const { id: advertId } = useParams();
  console.log("Advert ID from URL Parameters:", advertId);
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xzzgzozy");


  
  
const { data: advert, error, isLoading } = useSWR(advertId ? `/one/advert/${advertId}` : null, apiFetcher);

console.log("My data: ", advert)


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

  // if (!advert) {
  //   return (
  //     <div>
  //       <h3 className='p-10 text-red-700'>Advert not found</h3>
  //     </div>
  //   );
  // }




if (state.succeeded) {
  return (
  <p>Thanks for joining!</p>
  );
}


return (
  <section>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-r from-viewbg to-white font-sans">

      <section>
        <div style={{ backgroundImage: `url(${yourBackgroundImage})` }} className="relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white shadow-md">
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 mt-10">
          <div className="flex flex-col-reverse md:flex-row md:space-x-10 items-center md:items-start justify-center mb-10 md:mb-12 m-50">
            <div className="space-y-4 text-center md:text-left flex-1 min-w-0 md:pr-4">

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {advert.title}
              </h2>
              <p className="text-xl sm:text-2xl font-bold text-orange-700">{advert.category}</p>
              <p className="text-sm sm:text-base text-gray-700 font-semibold">
                {advert.description}
              </p>
              <h4 className="text-3xl text-orange-950 font-semibold">{advert.location}</h4>

              <p className="text-2xl font-bold text-black pt-4">₵{advert.price}</p>
              <p className="text-white">client@needassistance@gmail.com</p>
              <br />
              <p className="text-2xl font-bold text-black">{advert.contact}</p>
              <p className="text-white">+233 456 789 0000</p>
              {/* <br />
              <p className="text-2xl font-bold text-black">Web Address</p>
              <p className="text-white">www.clientsatisfaction.com</p> */}
            </div>
            <div className="flex-shrink-0 mb-8 md:mb-0">
              <img
                src={advert.image}
                alt="Craftsman Logo"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain rounded-md"
              />

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="m-4 md:m-20 bg-white p-6 md:p-10 rounded-lg shadow-xl ">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Get in Touch
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
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
                name="text"
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
              <div className='w-full content-center items-center ml-60'>
                <textarea
                  name="message"
                  type="message"
                  placeholder="Enter message"
                  rows="6"
                  cols="10"
                  className="w-full max-w-2xl p-4 border border-button1 rounded-md focus:outline focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-gray-800 resize-y shadow-sm"
                ></textarea>
                <button type="submit" disabled={state.submitting} className="mt-6 bg-gradient-to-r from-button1 to-button2 text-white font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 ease-in-out w-full max-w-2xl">Send Message</button>
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
