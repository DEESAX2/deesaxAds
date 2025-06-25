import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import herobg from "../assets/Images/herobg.png";
import videodeesax from "../assets/Videos/videodeesax.mp4";
import Footer from "../Components/Footer";
import painter from "../assets/Images/painter.jpg";
import cook from "../assets/Images/cook.jpg";
import designer from "../assets/Images/designer.jpg";
import stylist from "../assets/Images/stylist.jpg";
import photo1 from "../assets/Images/photo1.jpg";

import AdvertList from "../Components/AdvertList";
import HowItWorks from "../Components/HowItWorks";
import AdvertSearchFilter from "../Components/AdvertSearchFilter";
import { useTranslation } from "react-i18next";
import carfixer from "../assets/Images/carfixer.jpg";
import cleaningService from "../assets/Images/cleaningService.jpg";
import videoeditor from "../assets/Images/videoeditor.jpg";
import masseur from "../assets/Images/masseur.jpg";
import trainer from "../assets/Images/trainer.jpg";
import { Link } from "react-router";
import teacher from "../assets/Images/teacher.jpg";

export default function Home() {
  const { t } = useTranslation();
 const serviceImages = [teacher, carfixer, cleaningService, videoeditor, masseur, trainer];
 
const [carouselPage, setCarouselPage] = useState(0);
  const [showImage, setShowImage] = useState(true);

  const painterImages = [painter, photo1, cook, designer, stylist, trainer];
  const [painterIndex, setPainterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPainterIndex((prev) => (prev + 1) % painterImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [painterImages.length]);

 useEffect(() => {
  const interval = setInterval(() => {
    setCarouselPage((prev) => (prev + 1) % 2); // 2 pages: 0 and 1
  }, 4000);
  return () => clearInterval(interval);
}, []);
const visibleServices = serviceImages.slice(carouselPage * 3, carouselPage * 3 + 3);

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
              {t('Welcome to Deesax Connect')}
            </h1>
            <p className="text-gray-600 mb-6 font-bold">
              {t('Your one-stop platform for connecting with skilled professionals across various fields.')}
            </p>
            <p>{t('DeesaxConnect is a one-stop platform where people can post their services and find trusted professionals across various fields. Whether you\'re offering a skill or looking for one, we make it easy to connect, collaborate, and get things done. From creatives to consultants, artisans to tech experts — DeesaxConnect is where services meet opportunity.')}</p>

            <button className="mt-6 bg-gradient-to-r from-button2 to-button3 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:from-special hover:to-button1 transition duration-300 ease-in-out"><Link to="/register">
              {t('Get Started')}</Link>
            </button>


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

  {/* service section */}
   <section className="w-full bg-gray-50 py-10 overflow-hidden">
  <h2 className="text-center text-2xl md:text-lg font-bold mb-6 text-gray-800">
    {t("Sign in to get access to a list of services available such as these ones and find what you need")}
  </h2>
  <div className="relative w-full overflow-hidden">
    <div className="flex gap-6 animate-marquee">
      {[...serviceImages, ...serviceImages].map((img, idx) => (
        <div key={idx} className="relative w-80 aspect-[4/3] flex-shrink-0 overflow-hidden rounded-xl shadow-lg">
          <img
            src={img}
            alt={`Service ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
  
  {/* Carousel indicators */}
  <div className="flex justify-center mt-4 gap-2 ">
    {[0, 1].map((page) => (
      <span
        key={page}
        className={`block w-6 h-4 rounded-md ${carouselPage === page ? 'bg-button3' : 'bg-gray-300'}`}
      />
    ))}
  </div>
  </section>

  <section>
    <embed src="" type="" />
  </section>

      <section className="bg-button1">
        <HowItWorks />
      </section>

      <Footer />
    </>
  );
}