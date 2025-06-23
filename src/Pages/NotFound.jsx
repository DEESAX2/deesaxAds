import React from "react";
import sandyvid from "../assets/Videos/sandyvid.mp4";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <video  src={sandyvid}  autoPlay  loop muted className="w-full max-h-[400px] object-contain mb-6"></video>
      <h1 className="font-bold text-5xl text-black mb-4">{t('Oops!')}</h1>
      <p className="text-gray-400 italic mb-6">
        {t('The page you are looking for does not exist.')}
      </p>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        <Link to="/">{t('Go back to Home')}</Link>
      </button>
    </div>
  );
};

export default NotFound;
