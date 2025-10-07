import React from "react";

const HealthCombinedPage = ({ isDarkMode }) => {
  const womensHealthTips = [
    {
      title: "Regular Check-ups",
      desc: "Schedule routine gynecological exams, breast screenings, and pelvic checks to catch health issues early.",
    },
    {
      title: "Balanced Nutrition",
      desc: "Consume a diet rich in vegetables, fruits, lean proteins, and whole grains. Iron, calcium, and folic acid are especially important.",
    },
    {
      title: "Physical Activity",
      desc: "Engage in at least 30 minutes of moderate exercise daily. Activities like walking, yoga, or swimming improve heart health and mental wellbeing.",
    },
    {
      title: "Mental Health Care",
      desc: "Prioritize mental wellness with stress management, mindfulness, and sufficient sleep. Seek professional support when needed.",
    },
    {
      title: "Reproductive Health",
      desc: "Understand your menstrual cycle, contraception options, and fertility health. Early detection of issues is crucial.",
    },
    {
      title: "Preventive Measures",
      desc: "Get vaccinated, practice safe sex, and avoid smoking or excessive alcohol to reduce health risks.",
    },
  ];

  const womensEssentialNutrients = [
    { name: "Iron", desc: "Supports blood health and prevents anemia, especially during menstruation." },
    { name: "Calcium & Vitamin D", desc: "Strengthens bones and prevents osteoporosis." },
    { name: "Folic Acid", desc: "Essential for pregnancy and overall cellular health." },
    { name: "Vitamin B12", desc: "Boosts energy and nervous system health." },
    { name: "Omega-3 Fatty Acids", desc: "Improves heart and brain health." },
    { name: "Magnesium", desc: "Helps reduce PMS symptoms and supports muscle and nerve function." },
  ];

  const womensFitnessTips = [
    {
      title: "Strength Training",
      desc: "Incorporate light weights or resistance exercises to build bone density and muscle tone.",
    },
    {
      title: "Cardio Workouts",
      desc: "Walking, jogging, or cycling improves cardiovascular health and maintains a healthy weight.",
    },
    {
      title: "Flexibility & Yoga",
      desc: "Regular stretching or yoga enhances mobility, reduces stress, and prevents injuries.",
    },
  ];

  const healthyHabitCategories = [
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
    <div className={`mt-12 min-h-screen transition-colors duration-500 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      
      {/* Women's Health Hero Section */}
      <section className="text-center py-14 px-6">
        <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? "text-pink-400" : "text-pink-600"}`}>Women’s Health & Wellness</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Prioritize your health with balanced nutrition, regular check-ups, and mindful wellness habits. Empower yourself with knowledge and self-care.
        </p>
      </section>

      {/* Women's Health Tips */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {womensHealthTips.map((tip, index) => (
          <div key={index} className={`p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
            <h3 className="text-2xl font-semibold mb-2">{tip.title}</h3>
            <p className="opacity-90">{tip.desc}</p>
          </div>
        ))}
      </section>

      {/* Essential Nutrients */}
      <section className="py-16 px-6 text-center">
        <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-pink-400" : "text-pink-600"}`}>Essential Nutrients for Women</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {womensEssentialNutrients.map((nutrient, i) => (
            <div key={i} className={`p-6 rounded-xl shadow-md transform transition-transform hover:-translate-y-2 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <h3 className="text-xl font-semibold mb-2">{nutrient.name}</h3>
              <p className="text-sm opacity-90">{nutrient.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fitness & Exercise */}
      <section className="py-16 px-6 text-center">
        <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-pink-400" : "text-pink-600"}`}>Fitness & Exercise</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {womensFitnessTips.map((tip, index) => (
            <div key={index} className={`p-6 rounded-xl shadow-lg transform transition-transform hover:-translate-y-2 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-sm opacity-90">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 53 Healthy Habits */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-yellow-500 text-center mb-12">53 Healthy Habits for a Healthier Lifestyle</h1>
        {healthyHabitCategories.map((category, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl font-semibold text-yellow-500 mb-6">{category.title}</h2>
            <ul className="list-disc list-inside space-y-2">
              {category.habits.map((habit, i) => (
                <li key={i} className={`p-4 rounded-lg shadow-md transition duration-300 ${isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"}`}>
                  {habit}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>

    </div>
  );
};

export default HealthCombinedPage;
