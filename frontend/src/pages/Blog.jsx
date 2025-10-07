import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const BlogPage = ({ isDarkMode }) => {
  const blogPosts = [
    {
      title: "🌿 53 Healthy Habits for a Healthier Lifestyle",
      excerpt:
        "Transform your life with small, consistent habits — from mindful eating to daily walks. Discover routines that nurture your physical and mental well-being.",
      details:
        "Good health isn't about strict diets or extreme routines. It’s about balance. Include fresh fruits, stay hydrated, get 7-8 hours of sleep, and take time to breathe. Remember, every small effort towards health adds up over time.",
    },
    {
      title: "💪 Women’s Health & Wellness",
      excerpt:
        "Empower yourself with the right nutrition, fitness, and mental health care. Women’s bodies deserve attention, rest, and strength — every day.",
      details:
        "Women face unique health challenges — from hormonal balance to emotional load. Regular health checkups, balanced diets, yoga, and strength training can make a huge difference. Always prioritize self-care and mental peace.",
    },
    {
      title: "🧠 Counselling for Mental Wellbeing",
      excerpt:
        "It’s okay to seek help. Counselling helps you understand emotions, reduce anxiety, and find clarity in life’s chaos.",
      details:
        "Mental health is as important as physical health. Counselling builds resilience and helps you manage relationships, emotions, and personal goals. Never hesitate to talk — healing begins with a conversation.",
    },
    {
      title: "🏋️ Fitness & Nutrition Simplified",
      excerpt:
        "Fitness isn’t just gym workouts — it’s a lifestyle. Learn how balanced diets, mobility exercises, and rest fuel your growth.",
      details:
        "Eat whole foods, maintain consistency, and focus on posture and movement. Fitness isn’t about perfection — it’s about progress and sustainability. Celebrate every small win.",
    },
    {
      title: "🫀 Managing Stress & Anxiety",
      excerpt:
        "Stress is natural, but chronic stress can harm your health. Learn calming techniques to live peacefully and productively.",
      details:
        "Deep breathing, journaling, meditation, and regular exercise can help manage stress. Disconnect from screens, enjoy nature, and surround yourself with positive people.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header Section */}
      <section className="text-center pt-24 pb-12 px-6">
        <h1 className="text-5xl font-extrabold mb-3 text-pink-500 drop-shadow-md">
          Wellvia Health Blog
        </h1>
        <p className="text-lg max-w-3xl mx-auto opacity-90">
          Explore insightful articles on mental health, physical fitness,
          wellness, and lifestyle. Our goal is to inspire you to live healthier
          — one step at a time.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className={`group relative p-6 rounded-2xl shadow-xl border-l-4 ${
              isDarkMode
                ? "bg-gray-800 border-pink-400 hover:bg-gray-700"
                : "bg-white border-pink-500 hover:bg-pink-50"
            } transition-transform hover:scale-105 duration-300`}
          >
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-pink-500 transition">
              {post.title}
            </h2>
            <p className="opacity-90 mb-3">{post.excerpt}</p>
            <div
              className={`p-3 rounded-lg text-sm leading-relaxed ${
                isDarkMode
                  ? "bg-gray-700 text-gray-200"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {post.details}
            </div>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section
        className={`py-16 px-6 ${
          isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
        }`}
      >
        <div className="max-w-5xl mx-auto text-center">
          <img
            src="/src/assets/YUVRAJ_NIRMAAN.jpg"
            alt="Yuvraj Singh"
            className="w-32 h-32 mx-auto rounded-full border-4 border-pink-500 mb-4 object-cover shadow-lg"
          />
          <h2 className="text-3xl font-bold text-pink-500 mb-2">
            About the Author
          </h2>
          <p className="max-w-3xl mx-auto mb-6 opacity-90 text-lg">
            Hi! I’m <span className="font-semibold">Yuvraj Singh</span>, a
            passionate web developer and wellness advocate. Through Wellvia, I
            aim to blend technology and health awareness — building a space that
            motivates people to care for their body and mind equally.
          </p>

          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/yuvraj-singh-205491253/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/__yuvraj_singh2003/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:singhyuvi4321@gmail.com"
              className="hover:text-teal-400 transition"
            >
              <FaEnvelope />
            </a>
            <a href="tel:9111368936" className="hover:text-green-500 transition">
              <FaPhoneAlt />
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 opacity-80">
          <p>
            Made with <FaHeart className="inline text-pink-500" /> by Yuvraj
            Singh © {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
