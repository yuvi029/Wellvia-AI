import React from "react";
import { Link } from "react-router-dom";
import { FaUserMd, FaHeartbeat, FaRunning, FaHandsHelping } from "react-icons/fa";

export default function Physiotherapy({ isDarkMode }) {
  const therapies = [
    {
      icon: <FaRunning className="text-blue-500 text-4xl" />,
      title: "Movement & Mobility",
      desc: "Improve flexibility and range of motion with guided routines.",
    },
    {
      icon: <FaHeartbeat className="text-red-500 text-4xl" />,
      title: "Pain Management",
      desc: "Therapeutic techniques to reduce chronic pain and enhance recovery.",
    },
    {
      icon: <FaHandsHelping className="text-green-500 text-4xl" />,
      title: "Rehabilitation Support",
      desc: "Personalized rehab plans for injuries and surgeries.",
    },
  ];

  return (
    <section
      className={`min-h-screen py-20 px-6 transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Physiotherapy & Rehabilitation
        </h2>

        <p
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Restore movement, reduce pain, and rebuild strength with expert
          physiotherapy care tailored to your recovery needs.
        </p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {therapies.map((therapy, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-md hover:shadow-xl p-8 text-left transform hover:-translate-y-2 transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                {therapy.icon}
                <h3 className="text-2xl font-semibold">{therapy.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {therapy.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Explore More */}
        <div className="mt-12">
          <Link
            to="/physio"
            className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-teal-600 transition"
          >
            <FaUserMd /> Explore Physiotherapy →
          </Link>
        </div>
      </div>
    </section>
  );
}
