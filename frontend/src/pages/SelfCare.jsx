import React from "react";

const tips = [
  {
    title: "Prioritize Sleep",
    description:
      "Sleep helps your mind recover and your body recharge. Try a consistent bedtime routine, and avoid screens an hour before sleep.",
  },
  {
    title: "Move Your Body",
    description:
      "Even a 20-minute walk can boost your mood and energy. Find movement that feels good — dance, yoga, or simple stretching.",
  },
  {
    title: "Eat & Hydrate Well",
    description:
      "Nourish your body with fruits, vegetables, and plenty of water. Balanced nutrition fuels focus and emotional stability.",
  },
  {
    title: "Practice Mindfulness",
    description:
      "Spend a few minutes daily just being present — focus on your breath, surroundings, or sensations to calm your mind.",
  },
  {
    title: "Emotional Self-Care",
    description:
      "Journaling, talking to someone you trust, and setting boundaries help you manage emotions in a healthy way.",
  },
  {
    title: "Connect with Others",
    description:
      "Meaningful connections can improve happiness. Call a friend, volunteer, or share a laugh — connection heals.",
  },
];

const tools = [
  {
    name: "Meditation & Deep Breathing",
    desc: "Try 10 minutes of mindful breathing to reduce stress and anxiety.",
  },
  {
    name: "Gratitude Journal",
    desc: "Write 3 things you’re grateful for each day — it rewires your brain for positivity.",
  },
  {
    name: "Digital Detox",
    desc: "Spend a few hours tech-free each day to clear your mind and reconnect with reality.",
  },
  {
    name: "Affirmations",
    desc: "Repeat empowering statements like “I am enough” or “I am growing” to build inner confidence.",
  },
  {
    name: "Nature Therapy",
    desc: "Step outside. Feel the breeze. Being in nature reduces cortisol and boosts happiness.",
  },
  {
    name: "Creative Expression",
    desc: "Engage in drawing, music, or crafting — creativity is a proven emotional outlet.",
  },
];

export default function SelfCare({ isDarkMode }) {
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
            isDarkMode ? "text-teal-400" : "text-teal-600"
          }`}
        >
          Self-Care & Wellness
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Taking care of yourself isn’t selfish — it’s essential. Your body and
          mind deserve love, rest, and attention. Let’s explore small acts that
          make big changes.
        </p>
      </section>

      {/* Self-Care Tips */}
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
      <div className="w-24 h-1 mx-auto mt-8 rounded-full bg-teal-500"></div>

      {/* Self-Care Tools Section */}
      <section className="py-16 px-6 text-center">
        <h2
          className={`text-3xl font-bold mb-8 ${
            isDarkMode ? "text-teal-400" : "text-teal-600"
          }`}
        >
          Practical Self-Care Tools
        </h2>
        <p className="max-w-2xl mx-auto mb-10 opacity-90">
          Here are some simple yet powerful tools to help you relax, refocus,
          and restore balance in your life — all from the comfort of your home.
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
          isDarkMode ? "bg-teal-800 text-white" : "bg-teal-100 text-gray-900"
        }`}
      >
        <h2 className="text-3xl font-bold mb-4">
          You Deserve Peace. You Deserve Rest.
        </h2>
        <p className="max-w-xl mx-auto text-lg mb-8">
          Self-care isn’t about perfection. It’s about progress — showing up for
          yourself, one small, kind step at a time.
        </p>
        <button
          className={`px-8 py-3 rounded-full text-lg font-semibold shadow-md ${
            isDarkMode
              ? "bg-teal-500 hover:bg-teal-400 text-gray-900"
              : "bg-teal-600 hover:bg-teal-700 text-white"
          } transition`}
        >
          Start Your Self-Care Journey Today
        </button>
      </section>
    </div>
  );
}
