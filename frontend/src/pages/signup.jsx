import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup({ isDarkMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`🎉 Account created successfully for ${name}`);
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen px-6 transition-all duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div
        className={`w-full max-w-md p-8 rounded-2xl shadow-xl transform hover:scale-[1.01] transition-all duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-2 text-teal-500">
          Create Account
        </h2>
        <p className="text-center text-sm opacity-75 mb-6">
          Join Wellvia and start your wellness journey
        </p>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-gray-50 border-gray-300"
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-gray-50 border-gray-300"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-teal-400 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-gray-50 border-gray-300"
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
              isDarkMode
                ? "bg-teal-400 hover:bg-teal-300 text-gray-900"
                : "bg-teal-500 hover:bg-teal-600 text-white"
            }`}
          >
            Sign Up
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-sm text-center mt-6 opacity-80">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-teal-500 hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
