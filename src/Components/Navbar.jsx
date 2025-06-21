import { Link } from "react-router";
import React, { useState } from 'react';
import DeesaxConnect from "../assets/Images/DeesaxConnect.png";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Navbar() {
    const { t } = useTranslation();

    // Optional: State for category selection if you want to control it later
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <nav className="container flex flex-col md:flex-row items-center justify-between py-2 md:py-4 px-4 md:px-8 bg-white shadow-md md:h-16">
            {/* Logo Section */}
            <div className="mb-0 md:mb-0 flex-shrink-0">
                <Link to={"/"}>
                    <img src={DeesaxConnect} alt="Logo" className="w-40 md:w-50 h-auto" />
                </Link>
            </div>

            {/* Category Dropdown */}
            <div>
                <select
                    name="category"
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-button3 text-gray-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full md:w-auto py-2 px-3 shadow-sm transition-colors duration-200"
                >
                    <option value="" disabled>{t('Select Category')}</option>
                    <option value="Tech & Programming">{t('Tech & Programming')}</option>
                    <option value="Artisans">{t('Artisans')}</option>
                    <option value="Food & Beverages">{t('Food & Beverages')}</option>
                    <option value="Education & Training">{t('Education & Training')}</option>
                    <option value="Virtual Assistants">{t('Virtual Assistants')}</option>
                </select>
            </div>

            {/* Navigation Links Section */}
            <div className="flex flex-col md:flex-row gap-1 md:gap-6 text-center mb-1 md:mb-0">
                <span className="text-gray-800 hover:text-button3 font-semibold cursor-pointer py-2 px-3 rounded-md transition-colors duration-200">
                    <Link to={"/"}><h1>{t('Home')}</h1></Link>
                </span>
                <span className="text-gray-800 hover:text-button3 font-semibold cursor-pointer py-2 px-3 rounded-md transition-colors duration-200">
                    <h1>{t('About')}</h1>
                </span>
                <span className="text-gray-800 hover:text-button3 font-semibold cursor-pointer py-2 px-3 rounded-md transition-colors duration-200">
                    <h1>{t('Contact')}</h1>
                </span>
                <span className="text-gray-800 hover:text-button3 font-semibold cursor-pointer py-2 px-3 rounded-md transition-colors duration-200">
                    <h1>{t('Pages')}</h1>
                </span>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto">
                <Link to={"/login"}>
                    <button className="bg-gradient-to-r from-button2 to-button3 text-white font-semibold py-2 px-4 md:py-2.5 md:px-7 rounded-full shadow-lg hover:from-special hover:to-button1 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition duration-300 ease-in-out w-full md:w-auto">
                        {t('Login')}
                    </button>
                </Link>

                <Link to={"/login"}>
                    <button className="bg-gradient-to-r from-button3 to-button2 text-white font-semibold py-2 px-4 md:py-2.5 md:px-7 rounded-full shadow-lg hover:from-special hover:to-button1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out w-full md:w-auto">
                        {t('Register')}
                    </button>
                </Link>

                {/* Language Dropdown */}
                <div>
                    <select
                        onChange={handleLanguageChange}
                        defaultValue=""
                        className="bg-gradient-to-r from-button1 to-white text-button3 font-semibold py-2 px-2 md:py-2 md:px-5 rounded-full shadow-lg hover:from-special hover:to-button1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out w-full md:w-auto"
                    >
                        <option value="" disabled>{t('Language')}</option>
                        <option value="en">{t('English')}</option>
                        <option value="fr">{t('French')}</option>
                        <option value="es">{t('Spanish')}</option>
                        <option value="de">{t('German')}</option>
                        <option value="zh">{t('Chinese')}</option>
                    </select>
                </div>
            </div>
        </nav>
    );
}