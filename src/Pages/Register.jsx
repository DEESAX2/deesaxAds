import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import { apiClient } from "../api/client";
import { useNavigate } from "react-router";

const RegisterApp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState("user");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    isArtisan: "",
    location: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    if (!acceptTerms) {
      toast.warning("Please accept the Terms and Conditions!");
      return;
    }

    try {
      const response = await apiClient.post(
        "/users/register",
        {
          userType,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          address: formData.address,
          isArtisan: formData.isArtisan,
          location: formData.location,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response);
      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Please try again.");
    }
  };

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
    <div className="min-h-screen bg-gradient-to-br from-bl-600 via-blue-700 to-blue-800 flex items-center justify-center p-4 relative">
      <HomeArrow />

      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-4 -mt-8 bg-gradient-to-r from-blue-600 to-blue-700 py-4 -mx-6 rounded-t-2xl">{t('Register for free')}</h1>
          <p className="text-gray-600 text-sm px-2 mt-4">{t('Are you a Vendor or a Customer?')}</p>
        </div>

        <form onSubmit={handleRegister}>
          <div className="flex mb-6 bg-gray-50 rounded-lg p-1">
            <button type="button" onClick={() => setUserType("vendor")} className={`flex-1 flex items-center justify-center py-3 px-4 rounded-md transition-all ${userType === "vendor" ? "bg-white shadow-sm text-blue-700 font-medium" : "text-gray-600 hover:text-gray-800"}`}>{t('Vendor')}</button>
            <button type="button" onClick={() => setUserType("user")} className={`flex-1 flex items-center justify-center py-3 px-4 rounded-md transition-all ${userType === "user" ? "bg-white shadow-sm text-blue-700 font-medium" : "text-gray-600 hover:text-gray-800"}`}>{t('Customer')}</button>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-blue-700 mb-1">{t('First Name')}<span className="text-red-500">*</span></label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400" required />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-blue-700 mb-1">{t('Last Name')}<span className="text-red-500">*</span></label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400" required />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1">{t('Email')}<span className="text-red-500">*</span></label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400" required />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-blue-700 mb-1">{t('Phone')}</label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400" />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-blue-700 mb-1">{t('Address')}</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-blue-700 mb-1">{t('Password')}<span className="text-red-500">*</span></label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} id="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-600 hover:text-black-700 transition-colors">{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-blue-700 mb-1">{t('Confirm Password')}<span className="text-red-500">*</span></label>
              <div className="relative">
                <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400" required />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-600 hover:text-black-700 transition-colors">{showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}</button>
              </div>
            </div>

            {userType === "vendor" && (
              <>
                <div>
                  <label htmlFor="isArtisan" className="block text-sm font-medium text-blue-700 mb-1">{t('Vendor')}<span className="text-red-500">*</span></label>
                  <select id="isArtisan" name="isArtisan" value={formData.isArtisan} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700" required>
                    <option value="">{t('Yes / No')}</option>
                    <option value="yes">{t('Yes')}</option>
                    <option value="no">{t('No')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-blue-700 mb-1">{t('Based in')}<span className="text-red-500">*</span></label>
                  <input type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400" required />
                </div>
              </>
            )}

            <div className="flex items-start space-x-3">
              <input type="checkbox" id="terms" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required />
              <label htmlFor="terms" className="text-sm text-blue-700">{t('You accept our Terms and Conditions and Privacy Policy')}</label>
            </div>

            <button type="submit" className="w-full bg-blue-700 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center">
              {t('Register now')}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterApp;
