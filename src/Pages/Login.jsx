import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginRegisterApp = () => {
  const [currentView, setCurrentView] = useState("login");
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
  });

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Login successful!");
    console.log("Login attempt:", {
      email: formData.email,
      password: formData.password,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (!acceptTerms) {
      toast.warning("Please accept the Terms and Conditions!");
      return;
    }
    toast.success("Registration successful!");
    console.log("Register attempt:", {
      userType,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      isArtisan: formData.isArtisan,
      location: formData.location,
    });
  };

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      isArtisan: "",
      location: "",
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
    setUserType("user");
    setAcceptTerms(false);
  };

  const switchToRegister = () => {
    resetForm();
    setCurrentView("register");
  };

  const switchToLogin = () => {
    resetForm();
    setCurrentView("login");
  };

  if (currentView === "login") {
    return (
      <div className="min-h-screen bg-blue-500 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Login</h1>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" required/>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} id="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" required/>
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-500 hover:text-gray-700 transition-colors" > {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button onClick={handleLogin}  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] active:scale-[0.98]">LOGIN
            </button>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <span className="text-gray-600">Don't have an account? </span>
            <button onClick={switchToRegister} className="text-blue-600 hover:text-blue-700 font-medium transition-colors"> Register
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bl-600 via-blue-700 to-blue-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-4 -mt-8 bg-gradient-to-r from-blue-600 to-blue-700 py-4 -mx-6 rounded-t-2xl">Register for free</h1>
          <p className="text-gray-600 text-sm px-2 mt-4"> Are you a Vendor or User?</p>
        </div>

        <div className="flex mb-6 bg-gray-50 rounded-lg p-1">
          <button
            onClick={() => setUserType("vendor")} className={`flex-1 flex items-center justify-center py-3 px-4 rounded-md transition-all ${ userType === "vendor"? "bg-white shadow-sm text-blue-700 font-medium"
              : "text-gray-600 hover:text-gray-800" }`}> Vendor
          </button>
          <button
            onClick={() => setUserType("user")} className={`flex-1 flex items-center justify-center py-3 px-4 rounded-md transition-all ${ userType === "user" ? "bg-white shadow-sm text-blue-700 font-medium"  : "text-gray-600 hover:text-gray-800" }`}> User
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="registerEmail" className="block text-sm font-medium text-blue-700 mb-1"> Email <span className="text-red-500">*</span></label>
            <input type="email" id="registerEmail" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400" required />
          </div>

          <div>
            <label htmlFor="registerPassword" className="block text-sm font-medium text-blue-700 mb-1"> Password <span className="text-red-500">*</span></label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} id="registerPassword" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400" required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-600 hover:text-black-700 transition-colors">{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-blue-700 mb-1">
              Confirm Password <span className="text-red-500">*</span></label>
            <div className="relative">
              <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400" required />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-600 hover:text-black-700 transition-colors">
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {userType === "vendor" && (
            <>
              <div>
                <label htmlFor="isArtisan" className="block text-sm font-medium text-blue-700 mb-1">
                  Vendor <span className="text-red-500">*</span>
                </label>
                <select id="isArtisan" name="isArtisan" value={formData.isArtisan} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700" required>
                  <option value="">Yes / No</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-blue-700 mb-1">
                  Based in <span className="text-red-500">*</span></label>
                <input type="text" id="location" name="location" placeholder="Accra, Kumasi, Sunyani ..." value={formData.location} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder-gray-400" required />
              </div>
            </>
          )}
          <div className="flex items-start space-x-3">
            <input type="checkbox" id="terms" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required />
            <label htmlFor="terms" className="text-sm text-blue-700"> You accept our Terms and Conditions and Privacy Policy</label>
          </div>

          <button onClick={handleRegister} className="w-full bg-blue-700 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center">{" "} Register now
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </button>
        </div>

        <div className="text-center mt-6 pt-6 border-t border-gray-200">
          <span className="text-gray-600">Already have an account? </span>
          <button
            onClick={switchToLogin}
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          > {" "}Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginRegisterApp;
