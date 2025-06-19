import { useState } from 'react';
import { Eye, EyeOff, ArrowUpRight } from 'lucide-react';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = () => {
    console.log('Login attempt:', { email, password, keepSignedIn });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E2939] via-blue-500 to-bl-700 relative overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-32 left-20 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-40 left-16 w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute top-52 left-8 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-64 left-24 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-80 left-12 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-96 left-6 w-1.5 h-1.5 bg-white rounded-full"></div>
        
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-16 w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute bottom-52 right-8 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-64 right-24 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-80 right-12 w-1 h-1 bg-white rounded-full"></div>
      </div>

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
          
            <p className="text-white text-lg leading-relaxed">
              Welcome back! <br />Log in to access your account and explore exciting opportunities on DeexasAd.
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-blue-700 font-semibold text-lg mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-4 text-gray-500 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-blue-700 font-semibold text-lg mb-3">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-4 pr-12 text-gray-500 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-blue-600 hover:text-blue-700"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Keep me signed in & Forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={keepSignedIn}
                    onChange={(e) => setKeepSignedIn(e.target.checked)}
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="ml-3 text-blue-700 font-medium">
                    Keep me signed in
                  </span>
                </label>
                
                <button
                  type="button"
                  className="text-blue-700 font-medium hover:text-blue-800"
                >
                  Forgotten password?
                </button>
              </div>

              {/* Login Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
              >
                Login
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}