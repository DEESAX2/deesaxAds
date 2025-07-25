import { Link } from "react-router";
import React, { useState } from "react";
import DeesaxConnect from "../assets/Images/DeesaxConnect.png";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { Menu, X } from "lucide-react"; // Hamburger icons
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { useNavigate } from "react-router";
import service from "../assets/Images/service.png";

export default function Navbar() {
    const navigate = useNavigate();
    const { data } = useSWR("/users/profile", apiFetcher);


    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);


    };

    return (
        <>
            {/* Top Navbar */}
            <div className="flex justify-between items-center bg-gray-100 px-2 md:px-4  shadow-sm py-1 h-14 text-sm">
                <img src={service} alt="design" className="w-36 md:w-40 h-auto" />
                <div className="flex-1" />
                <div className="flex items-center gap-2 ml-auto">
                    <select
                        onChange={handleLanguageChange}
                        defaultValue=""
                        className="text-gray-700 border border-gray-300 rounded-md py-1 px-2"
                    >
                        <option value="" disabled>{t('Language')}</option>
                        <option value="en">{t('English')}</option>
                        <option value="fr">{t('French')}</option>
                        <option value="es">{t('Spanish')}</option>
                        <option value="de">{t('German')}</option>
                        <option value="zh">{t('Chinese')}</option>
                    </select>
                    <Link to="/login" className="bg-gradient-to-r from-button2 to-button3 text-white font-semibold py-1 px-2 md:py-1.5 md:px-4 rounded-full shadow-lg hover:from-special hover:to-button1 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75 transition duration-300 ease-in-out w-full md:w-auto ">
                        {t('Login')}
                    </Link>
                    <Link to="/register" className="bg-gradient-to-r from-button3 to-button2 text-white font-semibold py-1 px-2 md:py-1.5 md:px-4 rounded-full shadow-lg hover:from-special hover:to-button1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out w-full md:w-auto">
                        {t('Register')}
                    </Link>
                </div>
            </div>
            <section className="bg-button1 py-0.5 px-4"></section>

            {/* Main Navbar */}
            <nav className="bg-white shadow-md px-4 md:px-8 py-3 flex justify-between items-center relative z-50 h-16">
                {/* Logo */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    <Link to="/">
                        <img src={DeesaxConnect} alt="Logo" className="w-36 md:w-44 h-auto" />
                    </Link>
                    <button
                        className="md:hidden text-button3"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 w-full justify-end">

                    {/* Links */}
                    <Link to="/" className="text-gray-800 hover:text-button3 font-semibold">{t('Home')}</Link>
                    <a href="#about" className="text-gray-800 hover:text-button3 font-semibold">{t('About')}</a>
                    <a href="#footer" className="text-gray-800 hover:text-button3 font-semibold">{t('Contact')}</a>
                    <Link to="/meet-team" className="text-gray-800 hover:text-button3 font-semibold">{t('Our Team')}</Link>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 px-6 py-4 md:hidden">
                        <select
                            name="category"
                            id="category"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="border border-button3 text-gray-700 text-sm rounded-md py-2 px-3"
                        >
                            <option value="" disabled>{t('Select Category')}</option>
                            <option value="Tech & Programming">{t('Tech & Programming')}</option>
                            <option value="Artisans">{t('Artisans')}</option>
                            <option value="Food & Beverages">{t('Food & Beverages')}</option>
                            <option value="Education & Training">{t('Education & Training')}</option>
                            <option value="Virtual Assistants">{t('Virtual Assistants')}</option>
                        </select>

                        <Link to="/" className="text-gray-800 hover:text-button3 font-semibold">{t('Home')}</Link>
                        <a href="#about" className="text-gray-800 hover:text-button3 font-semibold">{t('About')}</a>
                        <a href="#footer" className="text-gray-800 hover:text-button3 font-semibold">{t('Contact')}</a>
                        <Link to="/meet-team" className="text-gray-800 hover:text-button3 font-semibold">{t('Our Team')}</Link>
                    </div>
                )}
            </nav>
        </>
    );
}
