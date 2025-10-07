import React from "react";

const tips = [
  {
    title: "Start Small, Stay Consistent",
    description:
      "Even 15 minutes of activity each day can make a big difference. Gradually increase your duration and intensity over time.",
  },
  {
    title: "Warm-Up & Cool Down",
    description:
      "A few minutes of stretching before and after your workout prevents injuries and keeps muscles flexible.",
  },
  {
    title: "Mix Up Your Workouts",
    description:
      "Alternate between cardio, strength, and flexibility exercises to keep things exciting and well-balanced.",
  },
  {
    title: "Set Realistic Goals",
    description:
      "Track your progress and celebrate small victories. Every step forward counts toward a stronger you.",
  },
  {
    title: "Hydrate and Refuel",
    description:
      "Drink plenty of water before, during, and after your workout. Fuel your body with nutritious meals.",
  },
  {
    title: "Listen to Your Body",
    description:
      "Take rest days when needed. Overexercising can lead to burnout — recovery is part of progress.",
  },
];

const tools = [
  {
    name: "Home Workout Apps",
    desc: "Use free fitness apps or YouTube channels for guided workouts right from your room.",
  },
  {
    name: "Bodyweight Exercises",
    desc: "Squats, pushups, planks, and lunges build strength without needing any equipment.",
  },
  {
    name: "Walking & Jogging",
    desc: "The simplest way to stay active — improves heart health and mental clarity.",
  },
  {
    name: "Stretching Routine",
    desc: "Just 10 minutes a day can boost flexibility, improve posture, and reduce stress.",
  },
  {
    name: "Music Motivation",
    desc: "Create a playlist of upbeat songs — music increases energy and workout endurance.",
  },
  {
    name: "Outdoor Activities",
    desc: "Try cycling, hiking, or playing a sport. Fresh air and sunlight enhance your mood.",
  },
];

export default function Exercise({ isDarkMode }) {
  return (
    <div
      className={`mt-12 min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <section className="text-center py-14 px-6">
        <h1
          className={`text-4xl font-bold mb-4 ${
            isDarkMode ? "text-yellow-400" : "text-yellow-600"
          }`}
        >
          Physical Health & Exercise
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Movement is medicine — it energizes the body, sharpens the mind, and uplifts the soul.
          Discover small daily actions that create a stronger, happier you.
        </p>
      </section>

      {/* Exercise Tips Section */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {tips.map((tip, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{tip.title}</h3>
            <p className="opacity-90">{tip.description}</p>
          </div>
        ))}
      </section>

      {/* Divider */}
      <div className="w-24 h-1 mx-auto mt-8 rounded-full bg-yellow-500"></div>

      {/* Tools Section */}
      <section className="py-16 px-6 text-center">
        <h2
          className={`text-3xl font-bold mb-8 ${
            isDarkMode ? "text-yellow-400" : "text-yellow-600"
          }`}
        >
          Easy Fitness Tools & Activities
        </h2>
        <p className="max-w-2xl mx-auto mb-10 opacity-90">
          You don’t need a gym to get fit. These simple tools and habits can help you
          stay active, flexible, and full of energy — anywhere, anytime.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-md transition-transform transform hover:-translate-y-2 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-sm opacity-90">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Motivation Section */}
      <section
        className={`py-20 px-6 text-center ${
          isDarkMode ? "bg-yellow-800 text-white" : "bg-yellow-100 text-gray-900"
        }`}
      >
        <h2 className="text-3xl font-bold mb-4">
          Strong Body. Strong Mind. Strong Life.
        </h2>
        <p className="max-w-xl mx-auto text-lg mb-8">
          Exercise is not about perfection — it’s about progress. Every step,
          stretch, and sweat brings you closer to your healthiest self.
        </p>
        <button
          className={`px-8 py-3 rounded-full text-lg font-semibold shadow-md ${
            isDarkMode
              ? "bg-yellow-400 hover:bg-yellow-300 text-gray-900"
              : "bg-yellow-600 hover:bg-yellow-700 text-white"
          } transition`}
        >
          Start Moving Today
        </button>
      </section>
    </div>
  );
}
