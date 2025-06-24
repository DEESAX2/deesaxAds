import React from "react";
import { Search, BadgeCheck, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HowItWorks() {
  const { t } = useTranslation();
  const steps = [
    {
      icon: <Search size={32} className="text-button3" />,
      title:t("Discover Services"),
      description:t("Browse through a variety of service categories to find exactly what you need,from tech to artisans and beyond."),
    },
    
    {
      icon: <BadgeCheck size={32} className="text-button3" />,
      title: t("Connect & Hire"),
      description: t("Review provider profiles, compare offers, and choose the best fit. Contact and negotiate directly."),
    },
    {
      icon: <Users size={32} className="text-button3" />,
      title: t("Get the Job Done"),
      description: t("Work seamlessly with trusted professionals and get quality results delivered on time."),
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{t("How DeesaxConnect Works")}</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          {t("Whether you're offering a service or looking for one, our platform makes it simple to connect and collaborate")}.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="bg-gradient-to-r from-special to-button1 font-semibold py-4 px-4 rounded-2xl shadow-lg hover:from-new hover:to-white transition duration-300 ease-in-out">
            <div className="flex items-center justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-black mb-2 text-center">{step.title}</h3>
            <p className="text-black text-center font-bold">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
