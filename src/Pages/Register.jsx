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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "customer",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!acceptTerms) {
      toast.warning("Please accept the Terms and Conditions!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        role: formData.role,
      };

      const response = await apiClient.post("/users/signup", payload, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Registration successful!");
      navigate("/vendor-dashboard");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Registration failed due to server error.";
      toast.error(errorMessage);
    }
  };

  return (
    
    
    <div className="min-h-screen bg-[#38cca0] flex items-center justify-center p-4">
      
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-6">
        <div className="flex items-center justify-center py-2 ">
           {t('Already have an account? Login')}
        </div>
        <h1 className="text-2xl font-italic text-center text-white-700 mb-6 bg-gradient-to-r from-button2 to-button3 text-white rounded-lg py-2 ">
          {t("Register for free")}
        </h1>
        <div className="flex items-center justify-center font-bold ">
           {t('Are you a Vendor or a User?')}
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Role Selection */}
          <div className="flex justify-between bg-gray-50 rounded-lg p-1 mt-2.5">
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, role: "vendor" }))}
              className={`flex-1 py-2 rounded-md text-sm font-medium ${formData.role === "vendor"
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
                }`}
            >
              {t('Vendor')}
            </button>
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, role: "customer" }))}
              className={`flex-1 py-2 rounded-md text-sm font-medium ${formData.role === "customer"
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
                }`}
            >
              {t('User')}
            </button>
          </div>
          

          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="text-sm font-medium text-blue-700 mb-1 block">
              {t('First Name')}<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="text-sm font-medium text-blue-700 mb-1 block">
              {t('Last Name')}<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm font-medium text-blue-700 mb-1 block">
              {t('Email')}<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-sm font-medium text-blue-700 mb-1 block">
              {t('Password')}<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-2.5"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="text-sm font-medium text-blue-700 mb-1 block">
              {t('Confirm Password')}<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-2.5"
                tabIndex={-1}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start space-x-2 mt-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="text-sm text-blue-700">
              {t('I accept the Terms and Conditions and Privacy Policy.')}
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-button2 to-button3 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-800 transition-all mt-4"
          >
            {t('Register')}
          </button>
        </form>
      </div>
    </div>
     
  );
};

export default RegisterApp;