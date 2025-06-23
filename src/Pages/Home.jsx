import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import herobg from "../assets/Images/herobg.png";
import videodeesax from "../assets/Videos/videodeesax.mp4";
import Footer from "../Components/Footer";
import painter from "../assets/Images/painter.jpg";
import cook from "../assets/Images/cook.jpg"; // Add more images as needed
import designer from "../assets/Images/designer.jpg";
import stylist from "../assets/Images/stylist.jpg";
import photo1 from "../assets/Images/photo1.jpg";
import trainer from "../assets/Images/trainer.jpg";
import AdvertList from "../Components/AdvertList";
import HowItWorks from "../Components/HowItWorks";
import AdvertSearchFilter from "../Components/AdvertSearchFilter";


export default function Home() {
  const [showImage, setShowImage] = useState(true);

  // Carousel for painter images
  const painterImages = [painter, photo1, cook, designer, stylist, trainer];
  const [painterIndex, setPainterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Painter image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPainterIndex((prev) => (prev + 1) % painterImages.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [painterImages.length]);


  return (
    <>
      <Navbar />
      <section>
        <div className="relative w-full h-[350px] md:h-[596px] overflow-hidden flex items-center justify-center">
          {showImage ? (
            <img
              src={herobg}
              alt="background"
              className="absolute inset-0 w-full object-cover transition-opacity duration-700"
              style={{ opacity: showImage ? 1 : 0 }}
            />
          ) : (
            <video
              src={videodeesax}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full object-cover object-top transition-opacity duration-700"
              style={{ opacity: showImage ? 0 : 1 }}
            />
          )}
        </div>
      </section>

      <section className="bg-gradient-to-r from-white to-new">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-4 md:p-8">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              Welcome to Deesax  Connect
            </h1>
            <p className="text-gray-600 mb-6 font-bold">
              Your one-stop platform for connecting with skilled professionals across various fields.
            </p>
            <p>DeesaxConnect is a one-stop platform where people can post their services and find trusted professionals across various fields. Whether you're offering a skill or looking for one, we make it easy to connect, collaborate, and get things done. From creatives to consultants, artisans to tech experts — DeesaxConnect is where services meet opportunity.</p>
            <button className="mt-6 bg-gradient-to-r from-button2 to-button3 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:from-special hover:to-button1 transition duration-300 ease-in-out">
              Get Started
            </button>

            <AdvertSearchFilter />
          </div>
          <div className="flex-1 p-4 md:p-8">
            <img
              src={painterImages[painterIndex]}
              alt="Deesax Connect"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
          <div  className="flex flex-col items-center justify-center text-center p-8 bg-gray-100">
        <h2> Browse Through Our List of Services Available and Make Your Pick </h2>
        </div>
          <AdvertList />
      </section>

<section className="bg-button1">
   <HowItWorks />
</section>


      <Footer />
    </>
  );
}