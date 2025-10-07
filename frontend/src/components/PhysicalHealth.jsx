import React from "react";
import { Link } from "react-router-dom";
import { Dumbbell, Salad, HeartPulse, StretchHorizontal } from "lucide-react";

export default function PhysicalHealth({ isDarkMode }) {
  const cards = [
    {
      title: "Exercise",
      desc: "Discover guided workouts, fitness plans, and easy routines to keep your body active every day.",
      icon: <Dumbbell size={36} />,
      link: "/exercise",
    },
    {
      title: "Nutrition",
      desc: "Explore healthy eating tips, meal plans, and nutrition guidance to boost your energy naturally.",
      icon: <Salad size={36} />,
      link: "/nutrition",
    },
    {
      title: "Fitness Tips",
      desc: "Get expert advice and lifestyle hacks to improve your overall fitness and strength.",
      icon: <HeartPulse size={36} />,
      link: "/fitness-tips",
    },
    {
      title: "Physiotherapy",
      desc: "Learn recovery techniques and exercises from physiotherapy experts to stay pain-free and flexible.",
      icon: <StretchHorizontal size={36} />,
      link: "/physio",
    },
  ];

  return (
    <div
      className={`mt-15 min-h-screen px-6 py-16 transition-all duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Physical Health</h1>
        <p className="text-lg mb-12 text-gray-500 dark:text-gray-400">
          Build a strong foundation for your body with exercise, balanced nutrition, and mindful movement.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <Link
              to={card.link}
              key={index}
              className={`p-6 rounded-2xl shadow-lg transition transform hover:scale-105 ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-teal-50"
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`p-3 rounded-full mb-4 ${
                    isDarkMode ? "bg-teal-600/30" : "bg-teal-100"
                  }`}
                >
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
