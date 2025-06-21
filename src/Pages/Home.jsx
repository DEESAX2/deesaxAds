import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import herobg from "../assets/Images/herobg.png";
import videodeesax from "../assets/Videos/videodeesax.mp4";
import Footer from "../Components/Footer";
import painter from "../assets/Images/painter.jpg";
import cook from "../assets/Images/cook.jpg"; 
import designer from "../assets/Images/designer.jpg";
import photo1 from "../assets/Images/photo1.jpg";
import trainer from "../assets/Images/trainer.jpg";
import stylist from "../assets/Images/stylist.jpg";





export default function Home() {
  const [showImage, setShowImage] = useState(true);
   const painterImages = [painter, cook, designer, photo1, trainer, stylist];
  const [painterIndex, setPainterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage((prev) => !prev);
    }, 5000); // Change every 4 seconds
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
    {/* Hero Section */}
    <section>
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[600px] overflow-hidden flex items-center justify-center">
        {showImage ? (
          <img
            src={herobg}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: showImage ? 1 : 0 }}
          />
        ) : (
          <video
            src={videodeesax}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700"
            style={{ opacity: showImage ? 0 : 1 }}
          />
        )}
      </div>
    </section>

    {/* Info Section */}
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-24 mt-2">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 py-4 md:py-12">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Welcome to Deesax Connect
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
            Your one-stop platform for connecting with skilled professionals across various fields.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-4">
            DeesaxConnect is a one-stop platform where people can post their services and find trusted professionals across various fields. Whether you're offering a skill or looking for one, we make it easy to connect, collaborate, and get things done. From creatives to consultants, artisans to tech experts — DeesaxConnect is where services meet opportunity.
          </p>
          <button className="mt-4 w-full sm:w-auto bg-gradient-to-r from-button2 to-button3 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:from-special hover:to-button1 transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>
        <div className="flex-1 py-4 md:py-12 flex items-center">
          <img
            src={painterImages[painterIndex]}
            alt="Deesax Connect"
            className="w-full h-48 sm:h-64 md:h-80 lg:h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <Footer />
  </>
);

}