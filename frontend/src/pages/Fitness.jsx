import React, { useState } from "react";

export default function Fitness({ isDarkMode }) {
  const fitnessTips = [
    { title: "Consistency Over Intensity", desc: "Short, regular workouts are better than occasional extreme exercises. Aim for at least 30 minutes a day." },
    { title: "Mix Cardio & Strength", desc: "Combine cardio exercises like walking, running, cycling with strength training to improve endurance and build lean muscle." },
    { title: "Warm-Up & Cool Down", desc: "Always start with a 5–10 minute warm-up and end with stretching to prevent injuries and aid recovery." },
    { title: "Listen to Your Body", desc: "Pain is a signal. Rest if you feel discomfort and gradually increase intensity to avoid burnout." },
    { title: "Track Your Progress", desc: "Use a fitness journal or app to log workouts. Tracking progress boosts motivation and accountability." },
    { title: "Stay Hydrated", desc: "Drink water before, during, and after exercise to maintain performance and recovery." },
  ];

  const exercises = [
    { name: "Push-Ups", desc: "Strengthens chest, shoulders, and arms." },
    { name: "Squats", desc: "Targets glutes, quads, and hamstrings." },
    { name: "Plank", desc: "Engages core muscles for stability and posture." },
    { name: "Jumping Jacks", desc: "Boosts cardiovascular fitness and coordination." },
    { name: "Lunges", desc: "Improves leg strength and balance." },
    { name: "Burpees", desc: "Full-body workout for strength and endurance." },
  ];

  // BMI State
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
    }
  };

  return (
    <div className={`mt-12 min-h-screen transition-colors duration-500 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      
      {/* Hero Section */}
      <section className="text-center py-14 px-6">
        <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}>
          Fitness Tips & Workouts
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Fitness isn’t just about looking good — it’s about feeling strong, energized, and confident. Here’s how you can improve your health and vitality.
        </p>
      </section>

      {/* Fitness Tips */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {fitnessTips.map((tip, index) => (
          <div key={index} className={`p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
            <h3 className="text-2xl font-semibold mb-2">{tip.title}</h3>
            <p className="opacity-90">{tip.desc}</p>
          </div>
        ))}
      </section>

      {/* Divider */}
      <div className="w-24 h-1 mx-auto mt-8 rounded-full bg-purple-500"></div>

      {/* Key Exercises Section */}
      <section className="py-16 px-6 text-center">
        <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}>
          Key Exercises for Everyone
        </h2>
        <p className="max-w-2xl mx-auto mb-10 opacity-90">
          Strength, stamina, and flexibility are built through simple yet effective exercises you can do anywhere. Try these regularly!
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {exercises.map((ex, i) => (
            <div key={i} className={`p-6 rounded-xl shadow-md transition-transform transform hover:-translate-y-2 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <h3 className="text-xl font-semibold mb-2">{ex.name}</h3>
              <p className="text-sm opacity-90">{ex.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className={`py-16 px-6 text-center ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"}`}>
        <h2 className="text-3xl font-bold mb-6">BMI Calculator</h2>
        <p className="mb-8 opacity-90 max-w-2xl mx-auto">
          Calculate your Body Mass Index to check if you are in a healthy weight range.
        </p>
        <div className="max-w-md mx-auto flex flex-col space-y-4">
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className={`p-3 rounded-lg border focus:outline-none ${
              isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"
            }`}
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={`p-3 rounded-lg border focus:outline-none ${
              isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300"
            }`}
          />
          <button
            onClick={calculateBMI}
            className={`px-6 py-3 rounded-full font-semibold shadow-md transition ${
              isDarkMode ? "bg-purple-500 hover:bg-purple-400 text-gray-900" : "bg-purple-600 hover:bg-purple-700 text-white"
            }`}
          >
            Calculate BMI
          </button>
          {bmi && (
            <p className="mt-4 text-lg font-semibold">
              Your BMI is: <span className="text-teal-400">{bmi}</span>
            </p>
          )}
        </div>
      </section>

      {/* Motivation Section */}
      <section className={`py-20 px-6 text-center ${isDarkMode ? "bg-purple-800 text-white" : "bg-purple-100 text-gray-900"}`}>
        <h2 className="text-3xl font-bold mb-4">Strength. Energy. Confidence.</h2>
        <p className="max-w-xl mx-auto text-lg mb-8">
          Regular physical activity transforms your mind and body. Start small, stay consistent, and watch yourself become stronger every day.
        </p>
        <button className={`px-8 py-3 rounded-full text-lg font-semibold shadow-md ${isDarkMode ? "bg-purple-500 hover:bg-purple-400 text-gray-900" : "bg-purple-600 hover:bg-purple-700 text-white"} transition`}>
          Begin Your Fitness Journey
        </button>
      </section>
    </div>
  );
}
