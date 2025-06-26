import React from 'react';
import { useTranslation } from "react-i18next";
import des from "../assets/Images/team/des.jpg"; 
import earl from "../assets/Images/team/earl.jpeg";
import Hero2 from "../assets/Images/team/hero2.jpeg";
import sandra from "../assets/Images/team/sandra.jpeg";
import alexis from "../assets/Images/team/alexis.jpeg";
import teach from "../assets/Images/team/teach.jpg";
import expertR from "../assets/Images/team/expertR.jpg";

const MeetTeam = () => {
    const { t } = useTranslation();
    const HomeArrow = () => (
        <a href="/" className="absolute top-6 left-6 group home-arrow-slide-in">
            <div className="flex items-center space-x-2 text-white hover:text-gray-200 cursor-pointer">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="absolute left-12 opacity-0 group-hover:opacity-100 text-white text-xs rounded py-1 px-2 transition-opacity">
                    {t('Go to Homepage')}
                </span>
            </div>
        </a>
    );
    return (
        <div className="min-h-screen bg-gradient-to-r from-button1 to-white flex items-center justify-center p-4 relative">
            <HomeArrow />
            {/* Team Section */}
            <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-8 w-full">
                <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold py-4 sm:py-6">
                    {t("Meet The Team")}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center">
                    {[
                        { img: des, name: "Desmond Kponyo", role: "Back-end Web Developer" },
                        { img: earl, name: "Earl Osafo-Ohemeng", role: "Front-end Web Developer" },
                        { img: Hero2, name: "Esther Manor", role: "Front-end Web Developer" },
                        { img: sandra, name: "Sandra Allotey", role: "Front-end Web Developer" },
                        { img: alexis, name: "Alexis Ayirebi-Acquah", role: "Front-end Web Developer" },
                        { img: teach, name: "Michael ", role: "Expert Front-end" },
                        { img: expertR, name: "Rachael Kuranchie", role: "Expert Back-end" }
                    ].map((member, index) => (
                        <div
                            key={index}
                            className="bg-white bg-opacity-10 rounded-2xl shadow-lg hover:shadow-black transition-all duration-300 p-6 flex flex-col items-center"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover mb-4 border-2 border-yellow-400" />
                            <p className="text-black font-bold text-center">
                                {member.name} <br />
                                <span className="font-normal text-sm sm:text-base">{t(member.role)}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MeetTeam;