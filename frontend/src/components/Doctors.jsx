import React from "react";
import { Link } from "react-router-dom";
import { FaUserMd, FaCalendarCheck } from "react-icons/fa";

export default function Doctors({ isDarkMode }) {
  const options = [
    {
      title: "Find Doctors",
      desc: "Search and connect with certified healthcare professionals near you.",
      icon: <FaUserMd className="text-blue-500 text-4xl" />,
      path: "/find-a-doctor",
      bg: "bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800",
    },
    {
      title: "Appointments",
      desc: "Book, manage, and track your medical appointments with ease.",
      icon: <FaCalendarCheck className="text-green-500 text-4xl" />,
      path: "/appointments",
      bg: "bg-green-50 hover:bg-green-100 dark:bg-green-900 dark:hover:bg-green-800",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-16 transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
        Healthcare Services 🩺
      </h1>
      <p
        className={`text-center max-w-2xl mb-12 text-lg ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Access top healthcare professionals and manage your appointments with
        just a click.
      </p>

      {/* Cards Section */}
      <div className="grid gap-8 sm:grid-cols-2 max-w-4xl w-full">
        {options.map((opt, index) => (
          <Link
            key={index}
            to={opt.path}
            className={`${opt.bg} p-10 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-left`}
          >
            <div className="flex items-center gap-4 mb-4">
              {opt.icon}
              <h3 className="text-2xl font-semibold">{opt.title}</h3>
            </div>
            <p className="mb-4 text-base opacity-90">{opt.desc}</p>
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Explore →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
