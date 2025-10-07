import React from "react";

const Counselling = ({ isDarkMode }) => {
  const quotes = [
    {
      img: "/src/assets/1m.jpg",
      text: "Healing doesn’t mean the damage never existed. It means it no longer controls your life.",
    },
    {
      img: "/src/assets/2m.jpg",
      text: "Your story isn’t over yet. Every sunrise is a new chapter.",
    },
    {
      img: "/src/assets/3m.jpg",
      text: "It’s okay to not be okay. What matters is that you’re trying.",
    },
    {
      img: "/src/assets/4m.jpg",
      text: "Sometimes the bravest thing you can do is ask for help.",
    },
    {
      img: "/src/assets/5m.jpg",
      text: "You are stronger than the thoughts that try to bring you down.",
    },
  ];

  const counsellors = [
    { name: "Dr. Neha Sharma", address: "MindCare Clinic, Delhi" },
    { name: "Dr. Arjun Mehta", address: "Wellbeing Center, Mumbai" },
    { name: "Dr. Priya Iyer", address: "Hope Wellness, Chennai" },
    { name: "Dr. Rakesh Patel", address: "Healing Minds, Ahmedabad" },
    { name: "Dr. Ananya Roy", address: "Serene Space, Kolkata" },
  ];

  return (
    <div
      className={`mt-12 min-h-screen transition-all duration-500 ${
        isDarkMode
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Header Section */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">
          Counselling for a Better You
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Everyone needs a safe space to talk, heal, and grow. Our counsellors help you find clarity and peace through understanding and guidance.
        </p>
      </section>

      {/* Quote Image Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className={`rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <img
              src={quote.img}
              alt={`Quote ${index + 1}`}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <p className="italic text-center text-sm">{quote.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Counsellor List */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold text-yellow-500 mb-6">
          Meet Our Counsellors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {counsellors.map((counsellor, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-md border transition duration-300 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 hover:bg-gray-700"
                  : "bg-white border-gray-200 hover:bg-gray-50"
              }`}
            >
              <h3 className="text-xl font-bold">{counsellor.name}</h3>
              <p className="text-sm mt-2">{counsellor.address}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Counselling;
