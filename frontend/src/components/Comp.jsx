import React from "react";
import {
  FaBrain,
  FaHeartbeat,
  FaDumbbell,
  FaCapsules,
  FaLeaf,
  FaUserMd,
} from "react-icons/fa";

export default function Comp({ isDarkMode }) {
  const services = [
    {
      icon: <FaBrain className="text-purple-500 text-3xl" />,
      title: "Mental Health",
      desc: "Support for anxiety, depression, and emotional wellbeing.",
      bg: "bg-purple-50 hover:bg-purple-100 dark:bg-purple-900 dark:hover:bg-purple-800",
    },
    {
      icon: <FaHeartbeat className="text-green-500 text-3xl" />,
      title: "Physical Health",
      desc: "Exercise, nutrition, and fitness guidance.",
      bg: "bg-green-50 hover:bg-green-100 dark:bg-green-900 dark:hover:bg-green-800",
    },
    {
      icon: <FaDumbbell className="text-blue-500 text-3xl" />,
      title: "Physiotherapy",
      desc: "Recovery, mobility, and pain management.",
      bg: "bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800",
    },
    {
      icon: <FaCapsules className="text-red-500 text-3xl" />,
      title: "Diseases",
      desc: "Information on conditions and treatments.",
      bg: "bg-red-50 hover:bg-red-100 dark:bg-red-900 dark:hover:bg-red-800",
    },
    {
      icon: <FaLeaf className="text-teal-500 text-3xl" />,
      title: "Healthy Living",
      desc: "Lifestyle tips and wellness strategies.",
      bg: "bg-teal-50 hover:bg-teal-100 dark:bg-teal-900 dark:hover:bg-teal-800",
    },
    {
      icon: <FaUserMd className="text-indigo-500 text-3xl" />,
      title: "Doctors",
      desc: "Find and connect with healthcare professionals.",
      bg: "bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900 dark:hover:bg-indigo-800",
    },
  ];

  return (
    <section
      className={`relative min-h-screen py-20 transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Comprehensive Health Solutions
        </h2>

        <p
          className={`mt-4 text-lg md:text-xl max-w-2xl mx-auto transition-colors duration-300 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Explore our wide range of health services and resources designed to
          support your complete wellbeing journey.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bg} p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-left`}
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="text-xl md:text-2xl font-semibold">
                  {service.title}
                </h3>
              </div>
              <p className="mb-6 leading-relaxed">
                {service.desc}
              </p>
              <a
                href="#"
                className="font-medium flex items-center gap-1 text-teal-600 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-200 transition-colors duration-300"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
