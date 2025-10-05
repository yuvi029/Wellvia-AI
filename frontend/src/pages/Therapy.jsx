import React, { useState } from "react";
import { Link } from "react-router-dom";

const therapies = [
  { name: "Cognitive Behavioral Therapy (CBT)", icon: "🧠", path: "/therapy/cbt" },
  { name: "Acceptance & Commitment Therapy (ACT)", icon: "🌱", path: "/therapy/act" },
  { name: "Art Therapy", icon: "🎨", path: "/therapy/art" },
  { name: "Group Therapy", icon: "👥", path: "/therapy/group" },
  { name: "Mindfulness Therapy", icon: "🧘‍♀️", path: "/therapy/mindfulness" },
  { name: "Music Therapy", icon: "🎵", path: "/therapy/music" },
  { name: "Play Therapy", icon: "🧸", path: "/therapy/play" },
  { name: "Psychodynamic Therapy", icon: "💭", path: "/therapy/psychodynamic" },
];

export default function Therapy({ isDarkMode }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className={`mt-12 min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Mental Health: Therapy
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Explore essential mental therapies to support your well-being
        </p>
        <button
          className={`px-6 py-3 rounded-full font-bold transition-transform duration-300 transform hover:-translate-y-1 ${
            isDarkMode
              ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
              : "bg-indigo-600 text-white hover:bg-indigo-500"
          }`}
        >
          Book a Therapy Session
        </button>
      </div>

      {/* Therapies Cards */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {therapies.map((therapy, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl shadow-lg transition-transform duration-300 transform hover:scale-105 ${
              isDarkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
          >
            <div className="text-4xl mb-4">{therapy.icon}</div>
            <h3 className="font-bold text-xl mb-2">{therapy.name}</h3>
            {expandedIndex === idx && (
              <p className="text-sm mt-2 text-gray-400">
                Click "Go to Details" to see complete steps and instructions.
              </p>
            )}

            <div className="flex flex-col gap-2 mt-4">
              {/* Toggle short description */}
              <button
                onClick={() => toggleDetails(idx)}
                className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                    : "bg-indigo-600 text-white hover:bg-indigo-500"
                }`}
              >
                {expandedIndex === idx ? "Show Less" : "Learn More"}
              </button>

              {/* Link to individual therapy page */}
              <Link
                to={therapy.path}
                className={`text-center px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-green-500 text-gray-900 hover:bg-green-400"
                    : "bg-green-600 text-white hover:bg-green-500"
                }`}
              >
                Go to Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <p className="text-lg mb-4">
          Take the first step towards better mental health today.
        </p>
        <button
          className={`px-8 py-3 rounded-full font-bold transition-transform duration-300 transform hover:-translate-y-1 ${
            isDarkMode
              ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
              : "bg-indigo-600 text-white hover:bg-indigo-500"
          }`}
        >
          Book a Session
        </button>
      </div>
    </div>
  );
}
