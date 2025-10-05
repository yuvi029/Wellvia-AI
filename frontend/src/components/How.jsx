import React from "react";
import { FaCalendarCheck, FaShieldAlt, FaPhoneAlt, FaHeart } from "react-icons/fa";

export default function HowItWorks({ isDarkMode }) {
  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Why Choose Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose <span className="text-teal-400">HealthSphere?</span>
        </h2>
        <p
          className={`max-w-2xl mx-auto mb-12 ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Experience healthcare that puts you first with our innovative approach
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-8 md:px-16">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
              <FaCalendarCheck className="text-white text-2xl" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Easy Appointments</h3>
            <p
              className={`text-sm max-w-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Book consultations with top specialists in just a few clicks.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Trusted Information</h3>
            <p
              className={`text-sm max-w-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Medically reviewed content from certified healthcare professionals.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
              <FaPhoneAlt className="text-white text-2xl" />
            </div>
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p
              className={`text-sm max-w-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Round-the-clock health assistance and emergency guidance.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
              <FaHeart className="text-white text-2xl" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Personalized Care</h3>
            <p
              className={`text-sm max-w-xs ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Tailored health recommendations based on your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-500 to-blue-600 py-16 text-center text-white rounded-t-3xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Take Control of Your Health?
        </h2>
        <p className="mb-10 max-w-2xl mx-auto">
          Join thousands of users who trust HealthSphere for their wellness journey.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition-all duration-300">
            <FaCalendarCheck /> Book Your First Consultation
          </button>
          <button className="flex items-center gap-2 border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
            ▶ Watch How It Works
          </button>
        </div>
      </section>
    </div>
  );
}
