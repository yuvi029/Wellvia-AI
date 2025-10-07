import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({ isDarkMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Welcome back, ${email}!`);
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen px-4 transition-all duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
          : "bg-gradient-to-br from-teal-100 via-white to-teal-50 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-md p-8 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500 ${
          isDarkMode ? "bg-gray-800/90 backdrop-blur-lg" : "bg-white/80 backdrop-blur-lg"
        }`}
      >
        {/* Header */}
        <h2
          className={`text-3xl font-bold text-center mb-2 ${
            isDarkMode ? "text-teal-400" : "text-teal-600"
          }`}
        >
          Welcome Back 👋
        </h2>
        <p className="text-center text-sm opacity-80 mb-6">
          Log in to continue your wellness journey
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 transition ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 placeholder-gray-500"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 transition ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 placeholder-gray-500"
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-right mt-1">
              <Link
                to="/forgot-password"
                className={`text-sm hover:underline ${
                  isDarkMode ? "text-teal-400" : "text-teal-600"
                }`}
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-white text-lg font-semibold bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-1 border-gray-300 dark:border-gray-600" />
          <span className="px-3 text-sm opacity-70">or continue with</span>
          <hr className="flex-1 border-gray-300 dark:border-gray-600" />
        </div>

        {/* Social Login */}
        <div className="flex justify-center space-x-4">
          <button
            className={`flex items-center space-x-2 border rounded-xl px-4 py-2 transition ${
              isDarkMode
                ? "border-gray-600 hover:bg-gray-700"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium">Google</span>
          </button>
          <button
            className={`flex items-center space-x-2 border rounded-xl px-4 py-2 transition ${
              isDarkMode
                ? "border-gray-600 hover:bg-gray-700"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            <img
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="Facebook"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium">Facebook</span>
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className={`font-semibold hover:underline ${
              isDarkMode ? "text-teal-400" : "text-teal-600"
            }`}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
