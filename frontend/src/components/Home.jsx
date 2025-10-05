import React from "react";
import { FaSearch, FaUserMd, FaClock } from "react-icons/fa";
import bgImage from "../assets/home.jpg"; // ✅ Update the image name if different

export default function Home() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center opacity-90"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-left px-8 md:px-16 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Your Health.{" "}
          <span className="text-teal-400 drop-shadow-lg">Simplified.</span>
        </h1>

        <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-2xl ">
          Comprehensive health and wellness platform connecting you with trusted
          medical professionals, evidence-based information, and personalized
          care solutions.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
            <FaSearch /> Explore Health Topics
          </button>

          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
            <FaUserMd /> Consult a Doctor
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap gap-8 text-white text-center">
          <div>
            <p className="text-3xl font-bold text-teal-400">50K+</p>
            <p className="text-gray-300 text-sm uppercase tracking-wide">
              Happy Patients
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-teal-400">1000+</p>
            <p className="text-gray-300 text-sm uppercase tracking-wide">
              Expert Doctors
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-teal-400">24/7</p>
            <p className="text-gray-300 text-sm uppercase tracking-wide">
              Support Available
            </p>
          </div>
        </div>
      </div>

      {/* Floating chat icon (optional, bottom-right corner) */}
      <div className="absolute bottom-6 right-6">
        <button className="p-4 bg-teal-500 hover:bg-teal-600 rounded-full shadow-lg text-white transition-all duration-300">
          <FaClock className="text-xl" />
        </button>
      </div>
    </section>
  );
}
