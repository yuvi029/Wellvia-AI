import React, { useState } from "react";
import { FaCalendarCheck, FaPlay } from "react-icons/fa";

export default function TherapyTemplate({ isDarkMode, title, description, steps, fullDocument }) {
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [expandedSteps, setExpandedSteps] = useState([]);

  const toggleStep = (index) => {
    setExpandedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div
      className={`mt-12 min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-8">{description}</p>
        <button
          onClick={() => setShowFullDetails(!showFullDetails)}
          className={`px-6 py-3 rounded-full font-bold transition-transform duration-300 transform hover:-translate-y-1 ${
            isDarkMode
              ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
              : "bg-indigo-600 text-white hover:bg-indigo-500"
          }`}
        >
          {showFullDetails ? "Hide Full Details" : "Show Full Details"}
        </button>
      </div>

      {/* Steps Section with Toggle */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-105 ${
              isDarkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
          >
            <h3
              onClick={() => toggleStep(idx)}
              className="font-bold text-xl mb-2 cursor-pointer flex justify-between items-center"
            >
              {step.title} {expandedSteps.includes(idx) ? "▲" : "▼"}
            </h3>
            {expandedSteps.includes(idx) && (
              <p className="text-gray-300 dark:text-gray-200">{step.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Detailed Document Section */}
      {showFullDetails && (
        <div
          className={`max-w-7xl mx-auto px-6 py-12 rounded-3xl shadow-xl transition-colors duration-500 ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Complete Guide</h2>
          <p className="mb-4">{fullDocument.intro}</p>
          <ul className="list-disc pl-6 space-y-2">
            {fullDocument.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-600 py-16 text-center text-white rounded-t-3xl shadow-lg mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Take Control of Your Health?
        </h2>
        <p className="mb-10 max-w-2xl mx-auto">
          Join thousands of users who trust HealthSphere for their wellness journey.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition-all duration-300">
            <FaCalendarCheck /> Book Your First Consultation
          </button>
          <button className="flex items-center gap-2 border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
            <FaPlay /> Watch How It Works
          </button>
        </div>
      </section>
    </div>
  );
}
