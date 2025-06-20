import React from "react";
import notFound from "../assets/images/notfound.png";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img src={notFound} alt="Not Found" className="w-full h-110 object-contain" />
        <h1 className="font-bold text-6xl mt-2 mb-2">{t('Oops!')}</h1>
        <p className="text-gray-500 italic">
          {t('The page you are looking for does not exist.')}
        </p>
        <button className="text-blue-500 hover:underline mt-4 inline-block">
          <Link to="/">{t('Go back to Home')}</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
