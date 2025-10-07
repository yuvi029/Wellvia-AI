import React from "react";
import { useNavigate } from "react-router-dom";

const HealthyLiving = ({ isDarkMode }) => {
  const navigate = useNavigate();

  const lifestyleTips = [
    { title: "Eat Whole & Natural Foods", desc: "Opt for unprocessed foods such as fruits, vegetables, whole grains, and lean proteins to nourish your body.", icon: "🥗" },
    { title: "Stay Physically Active", desc: "Include at least 30 minutes of moderate exercise daily—like walking, cycling, or yoga—to keep your body fit and energized.", icon: "🏃‍♀️" },
    { title: "Maintain Mental Wellness", desc: "Practice mindfulness, journaling, or meditation to reduce stress and improve emotional balance.", icon: "🧘‍♂️" },
    { title: "Stay Hydrated", desc: "Drink enough water throughout the day to keep your energy levels up and improve skin and organ function.", icon: "💧" },
    { title: "Get Quality Sleep", desc: "Aim for 7–8 hours of uninterrupted sleep every night for mental clarity and immune health.", icon: "🌙" },
    { title: "Avoid Harmful Habits", desc: "Limit alcohol intake, avoid smoking, and stay away from excessive caffeine or processed sugar.", icon: "🚫" },
  ];

  const dailyRoutine = [
    "🌅 Wake up early and stretch",
    "🥣 Eat a nutritious breakfast",
    "💻 Take screen breaks while working",
    "🚶‍♂️ Walk for 10 minutes after meals",
    "🕯️ Practice mindfulness or gratitude journaling",
    "🛏️ Go to bed at a consistent time",
  ];

  return (
    <div
      className={`min-h-screen pt-20 pb-16 px-6 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1
          className={`text-4xl font-bold mb-4 ${
            isDarkMode ? "text-green-400" : "text-green-600"
          }`}
        >
          Healthy Living 🌿
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Build a balanced lifestyle by focusing on your body, mind, and habits.  
          Consistency and small steps lead to lifelong health.
        </p>
      </section>

      {/* Tips Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        {lifestyleTips.map((tip, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-xl ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="text-4xl mb-3">{tip.icon}</div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                isDarkMode ? "text-green-300" : "text-green-600"
              }`}
            >
              {tip.title}
            </h3>
            <p className="opacity-90 text-sm">{tip.desc}</p>
          </div>
        ))}
      </section>

      {/* Daily Routine Section */}
      <section className="text-center mb-16">
        <h2
          className={`text-3xl font-bold mb-6 ${
            isDarkMode ? "text-green-400" : "text-green-600"
          }`}
        >
          Your Daily Routine for a Healthier You
        </h2>
        <ul className="max-w-xl mx-auto space-y-3 text-left">
          {dailyRoutine.map((habit, i) => (
            <li
              key={i}
              className={`p-4 rounded-xl shadow-md transition duration-300 ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {habit}
            </li>
          ))}
        </ul>
      </section>

      {/* Explore Button (Navigates to Habits Page) */}
      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/habits")}
          className={`px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition transform hover:scale-105 ${
            isDarkMode
              ? "bg-green-600 hover:bg-green-500"
              : "bg-green-500 hover:bg-green-600"
          } text-white`}
        >
          🌸 Explore 53 Habits and Women’s Health
        </button>
      </div>
    </div>
  );
};

export default HealthyLiving;
