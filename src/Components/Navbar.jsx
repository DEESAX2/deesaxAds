import { Link } from "react-router";
import React, { useState } from "react";
import DeesaxConnect from "../assets/Images/DeesaxConnect.png";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { Menu, X } from "lucide-react"; // Hamburger icons

export default function Navbar() {
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <>
            {/* Top Navbar */}
            <div className="flex justify-between items-center bg-gray-100 px-4 md:px-8 py-2 shadow-sm text-sm">
                <div></div> {/* Empty div for spacing */}
                <div className="flex items-center gap-4">
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
                    <Link to="/login" className="text-button3 hover:underline">{t('Login')}</Link>
                    <Link to="/register" className="bg-button3 text-white py-1 px-3 rounded-full hover:bg-button2 transition">{t('Register')}</Link>
                </div>
            </div>

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
                    {/* Category */}
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

                    {/* Links */}
                    <Link to="/" className="text-gray-800 hover:text-button3 font-semibold">{t('Home')}</Link>
                    <Link to="/about" className="text-gray-800 hover:text-button3 font-semibold">{t('About')}</Link>
                    <Link to="/contact" className="text-gray-800 hover:text-button3 font-semibold">{t('Contact')}</Link>
                    <Link to="/pages" className="text-gray-800 hover:text-button3 font-semibold">{t('Pages')}</Link>
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
                        <Link to="/about" className="text-gray-800 hover:text-button3 font-semibold">{t('About')}</Link>
                        <Link to="/contact" className="text-gray-800 hover:text-button3 font-semibold">{t('Contact')}</Link>
                        <Link to="/pages" className="text-gray-800 hover:text-button3 font-semibold">{t('Pages')}</Link>
                    </div>
                )}
            </nav>
        </>
    );
}
