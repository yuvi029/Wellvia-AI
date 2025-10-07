import React from "react";
import { Link } from "react-router-dom";
import { FaBrain, FaComments, FaSpa } from "react-icons/fa";

export default function MentalHealth({ isDarkMode }) {
  const options = [
    {
      title: "Therapy",
      desc: "Explore various therapy techniques and their benefits for mental well-being.",
      icon: <FaBrain className="text-purple-500 text-3xl" />,
      path: "/therapy",
      bg: "bg-purple-50 hover:bg-purple-100 dark:bg-purple-900 dark:hover:bg-purple-800",
    },
    {
      title: "Counselling",
      desc: "Professional counselling support to help navigate life’s challenges.",
      icon: <FaComments className="text-blue-500 text-3xl" />,
      path: "/counselling",
      bg: "bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800",
    },
    {
      title: "Self-care",
      desc: "Learn practical self-care habits to boost emotional health.",
      icon: <FaSpa className="text-teal-500 text-3xl" />,
      path: "/self-care",
      bg: "bg-teal-50 hover:bg-teal-100 dark:bg-teal-900 dark:hover:bg-teal-800",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-16 transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
        Mental Health Resources
      </h1>
      <p
        className={`text-center max-w-2xl mb-12 text-lg ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Choose from the following mental health services to support your
        emotional and psychological well-being.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {options.map((opt, index) => (
          <Link
            key={index}
            to={opt.path}
            className={`${opt.bg} p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-left`}
          >
            <div className="flex items-center gap-4 mb-4">
              {opt.icon}
              <h3 className="text-xl font-semibold">{opt.title}</h3>
            </div>
            <p className="mb-4 text-sm">{opt.desc}</p>
            <span className="text-teal-600 dark:text-teal-400 font-medium">
              Learn More →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
