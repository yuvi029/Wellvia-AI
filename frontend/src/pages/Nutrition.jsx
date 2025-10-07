import React from "react";

export default function Nutrition({ isDarkMode }) {
  const nutritionTips = [
    {
      title: "Start Your Day Right",
      desc: "A nutritious breakfast kickstarts your metabolism and improves focus. Include protein, fiber, and healthy fats — such as eggs, oats, nuts, or fruits.",
    },
    {
      title: "Hydration Is Key",
      desc: "Drink at least 2–3 liters of water daily. Staying hydrated improves digestion, skin health, and concentration.",
    },
    {
      title: "Balance Your Plate",
      desc: "Fill half your plate with vegetables, one-quarter with lean protein, and the remaining quarter with whole grains.",
    },
    {
      title: "Eat Mindfully",
      desc: "Avoid distractions while eating. Chew slowly and listen to your body’s hunger and fullness cues.",
    },
    {
      title: "Limit Processed Foods",
      desc: "Processed snacks, sugary drinks, and fast food can drain your energy. Choose whole, natural foods instead.",
    },
    {
      title: "Plan Your Meals",
      desc: "Meal prep helps you avoid unhealthy choices. Prepare balanced meals and carry healthy snacks like fruits, nuts, or yogurt.",
    },
  ];

  const superFoods = [
    { name: "Oats", desc: "Rich in fiber and great for heart health." },
    { name: "Spinach", desc: "High in iron, magnesium, and antioxidants." },
    { name: "Blueberries", desc: "Loaded with antioxidants that boost brain function." },
    { name: "Almonds", desc: "Packed with healthy fats and protein." },
    { name: "Yogurt", desc: "A great source of probiotics for gut health." },
    { name: "Green Tea", desc: "Supports metabolism and reduces stress." },
  ];

  const vitamins = [
    { type: "Vitamin A", role: "Improves vision and strengthens immunity." },
    { type: "Vitamin B12", role: "Boosts energy and supports brain health." },
    { type: "Vitamin C", role: "Promotes healing and protects against infections." },
    { type: "Vitamin D", role: "Essential for strong bones and mood regulation." },
    { type: "Iron", role: "Prevents fatigue and improves oxygen flow." },
    { type: "Calcium", role: "Keeps bones and teeth healthy." },
  ];

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
            isDarkMode ? "text-green-400" : "text-green-600"
          }`}
        >
          Nutrition & Healthy Living
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Good nutrition is the foundation of great health. Eating balanced
          meals, staying hydrated, and making mindful food choices help your
          body and mind perform at their best.
        </p>
      </section>

      {/* Nutrition Tips */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {nutritionTips.map((tip, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{tip.title}</h3>
            <p className="opacity-90">{tip.desc}</p>
          </div>
        ))}
      </section>

      {/* Divider */}
      <div className="w-24 h-1 mx-auto mt-8 rounded-full bg-green-500"></div>

      {/* Superfoods Section */}
      <section className="py-16 px-6 text-center">
        <h2
          className={`text-3xl font-bold mb-8 ${
            isDarkMode ? "text-green-400" : "text-green-600"
          }`}
        >
          Power-Packed Superfoods
        </h2>
        <p className="max-w-2xl mx-auto mb-10 opacity-90">
          Adding superfoods to your diet enhances immunity, energy, and mental
          clarity. Start small — a few healthy swaps can make a big difference.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {superFoods.map((food, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-md transition-transform transform hover:-translate-y-2 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{food.name}</h3>
              <p className="text-sm opacity-90">{food.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-24 h-1 mx-auto mt-8 rounded-full bg-green-500"></div>

      {/* Vitamins Section */}
      <section className="py-16 px-6 text-center">
        <h2
          className={`text-3xl font-bold mb-8 ${
            isDarkMode ? "text-green-400" : "text-green-600"
          }`}
        >
          Essential Vitamins & Nutrients
        </h2>
        <p className="max-w-2xl mx-auto mb-10 opacity-90">
          Your body thrives on vitamins and minerals that support your immune
          system, metabolism, and energy levels. Here’s a quick guide:
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {vitamins.map((v, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{v.type}</h3>
              <p className="text-sm opacity-90">{v.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Motivation Section */}
      <section
        className={`py-20 px-6 text-center ${
          isDarkMode ? "bg-green-800 text-white" : "bg-green-100 text-gray-900"
        }`}
      >
        <h2 className="text-3xl font-bold mb-4">
          Eat Smart. Live Better. Feel Amazing.
        </h2>
        <p className="max-w-xl mx-auto text-lg mb-8">
          Every bite you take shapes your future health. Choose wisely today,
          and your body will thank you tomorrow.
        </p>
        <button
          className={`px-8 py-3 rounded-full text-lg font-semibold shadow-md ${
            isDarkMode
              ? "bg-green-500 hover:bg-green-400 text-gray-900"
              : "bg-green-600 hover:bg-green-700 text-white"
          } transition`}
        >
          Start Eating Healthy Today
        </button>
      </section>
    </div>
  );
}
