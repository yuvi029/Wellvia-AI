import React from "react";

const Sleep = ({ isDarkMode }) => {
  const categories = [
    {
      title: "Healthy Eating Habits",
      habits: [
        "Eat breakfast every day",
        "Eat whole foods",
        "Have a 'no-meat' day",
        "Increase water intake",
        "Reduce sugar intake",
        "Quit snacking in between meals",
        "Stop binge eating",
        "Remove soda from your diet",
        "Read food labels",
      ],
    },
    {
      title: "Healthy Exercise Habits",
      habits: [
        "Keep yourself active",
        "Exercise at least three times a week",
        "Get outdoors for short walks",
        "Track your steps with a fitness device",
        "Do yoga",
        "Dance for 30 minutes a day",
      ],
    },
    {
      title: "Healthy Sleep Habits",
      habits: [
        "Set a sleep and wake schedule",
        "Don't drink coffee before bed",
        "Eat hours before bedtime",
        "Unwind before bed",
        "Put away electronics ahead of bedtime",
        "Take short naps",
      ],
    },
    {
      title: "Healthy Workplace Habits",
      habits: [
        "Get to work on time",
        "Create a schedule",
        "Organize tasks",
        "Break down large projects into smaller tasks",
        "Take short breaks",
        "Take lunch breaks",
        "Tackle work right away",
        "Socialize with co-workers",
      ],
    },
    {
      title: "Healthy Relationship Habits",
      habits: [
        "Give your partner their independence",
        "Make time for your partner daily",
        "Communicate daily without electronics",
        "Pay attention to what your partner is saying",
        "Make your partner feel appreciated",
        "Spend quality time with family",
      ],
    },
    {
      title: "Healthy Self-Care Habits",
      habits: [
        "Take care of your oral health",
        "Quit alcohol",
        "Stay away from cigarettes",
        "Wash your hands with antibacterial soap",
        "Check your weight monthly",
        "Get a health checkup regularly",
        "Practice good posture",
      ],
    },
    {
      title: "Healthy Habits for Mental Health",
      habits: [
        "Slow down",
        "Check in with yourself throughout the day",
        "Write in your journal",
        "Practice deep breathing",
        "Practice gratitude",
        "Shut down negative self-talk",
        "Set and uphold boundaries",
      ],
    },
    {
      title: "Healthy Electronic and Social Media Habits",
      habits: [
        "Log out of social media",
        "Connect only to positivity feeds on social media",
        "Take a social media break twice a week",
        "Avoid phone use during dates",
      ],
    },
  ];

  return (
    <div
      className={`mt-15 min-h-screen py-12 transition-all duration-500 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-yellow-500 text-center mb-12">
          53 Healthy Habits for a Healthier Lifestyle
        </h1>

        {categories.map((category, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl font-semibold text-yellow-500 mb-6">
              {category.title}
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {category.habits.map((habit, i) => (
                <li
                  key={i}
                  className={`p-4 rounded-lg shadow-md transition duration-300 ${
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
        ))}
      </div>
    </div>
  );
};

export default Sleep;

