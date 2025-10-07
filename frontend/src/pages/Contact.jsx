import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={`mt-12 min-h-screen py-14 px-6 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-2 text-pink-500">
        Contact Us
      </h1>
      <p className="text-center mb-10 text-lg opacity-80">
        We’d love to hear from you! Whether you have questions, feedback, or
        just want to say hello — reach out to us anytime.
      </p>

      {/* Contact Info + Form */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div
          className={`p-6 rounded-2xl shadow-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-pink-500 text-lg" />
              <span>+91 9111368936</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-pink-500 text-lg" />
              <span>singhyuvi4321@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-500 text-lg" />
              <span>NIT Jamshedpur, Jharkhand, India</span>
            </li>
          </ul>

          <p className="mt-6 opacity-90">
            We’re committed to promoting health and wellness through digital
            innovation. Feel free to contact us for collaborations or ideas!
          </p>
        </div>

        {/* Contact Form */}
        <div
          className={`p-6 rounded-2xl shadow-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-xl border focus:outline-none ${
                isDarkMode
                  ? "bg-gray-900 border-gray-700 text-white"
                  : "bg-gray-50 border-gray-300 text-gray-900"
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-xl border focus:outline-none ${
                isDarkMode
                  ? "bg-gray-900 border-gray-700 text-white"
                  : "bg-gray-50 border-gray-300 text-gray-900"
              }`}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className={`w-full p-3 rounded-xl border focus:outline-none resize-none ${
                isDarkMode
                  ? "bg-gray-900 border-gray-700 text-white"
                  : "bg-gray-50 border-gray-300 text-gray-900"
              }`}
            ></textarea>
            <button
              type="submit"
              className={`w-full py-3 rounded-xl font-semibold text-lg transition ${
                isDarkMode
                  ? "bg-pink-500 hover:bg-pink-400 text-gray-900"
                  : "bg-pink-600 hover:bg-pink-700 text-white"
              }`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer / About */}
      <div className="text-center mt-16 opacity-80 text-sm">
        © 2025 <span className="text-pink-500 font-semibold">Wellvia</span> —
        Designed & Developed by Yuvraj Singh 💻
      </div>
    </div>
  );
};

export default Contact;
