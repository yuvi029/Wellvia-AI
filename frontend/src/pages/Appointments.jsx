// src/pages/Appointment.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Appointment({ isDarkMode }) {
  const location = useLocation();
  const doctorName = location.state?.doctorName || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData, "Doctor:", doctorName);
    setShowPopup(true);

    // hide popup automatically after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div
      className={`mt-12 min-h-screen flex flex-col items-center justify-start transition-all duration-500 relative ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-teal-50 via-white to-teal-100 text-gray-900"
      } p-6`}
    >
      <h1 className="text-4xl font-extrabold mb-4 text-center text-teal-500 drop-shadow-sm">
        Book an Appointment
      </h1>

      {doctorName && (
        <p className="text-center mb-8 text-lg text-gray-500 dark:text-gray-300">
          Booking with <strong className="text-teal-400">{doctorName}</strong>
        </p>
      )}

      {/* Appointment Form */}
      <form
        onSubmit={handleSubmit}
        className={`max-w-3xl w-full mx-auto rounded-2xl shadow-2xl p-10 space-y-6 border backdrop-blur-xl transition-all duration-300 ${
          isDarkMode
            ? "bg-gray-800/70 border-gray-700"
            : "bg-white/70 border-teal-100"
        }`}
      >
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block mb-2 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              required
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block mb-2 font-medium">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 font-medium">Reason</label>
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Reason for visit"
              required
              className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-transparent"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-4 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold text-lg tracking-wide shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300"
        >
          Submit Appointment
        </button>
      </form>

      {/* Popup message */}
      {showPopup && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-4 rounded-2xl shadow-2xl text-white text-lg font-medium transform transition-all duration-300 animate-fadeIn z-50 ${
            isDarkMode
              ? "bg-teal-600/90 border border-teal-400"
              : "bg-teal-500/90 border border-teal-200"
          }`}
        >
          ✅ Thank you for connecting! <br />
          We will call you soon.
        </div>
      )}
    </div>
  );
}
