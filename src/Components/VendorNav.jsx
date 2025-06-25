import { Link } from "react-router";
import React, { useState } from "react";
import DeesaxConnect from "../assets/Images/DeesaxConnect.png";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { Menu, X } from "lucide-react"; // Hamburger icons
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { useNavigate } from "react-router";

export default function Navbar() {
    const navigate = useNavigate();
    const {data} = useSWR("/users/profile", apiFetcher);

const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
}
    const { t } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);

        
    };

    return (
        <>

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
                    <Link to="/advert-list" className="text-gray-800 hover:text-button3 font-semibold">{t('All Ads')}</Link>
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
