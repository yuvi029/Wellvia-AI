import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer({ isDarkMode }) {
  return (
    <footer
      className={`transition-all duration-500 ${
        isDarkMode ? "bg-gray-900 text-yellow-300" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Newsletter Section */}
      <div
        className={`max-w-7xl mx-auto px-6 py-12 rounded-3xl text-center shadow-xl backdrop-blur-md bg-white/20 dark:bg-gray-800/30 transition-all duration-500`}
      >
        <h2 className="text-3xl font-extrabold mb-2">
          Stay Healthy, Stay Informed
        </h2>
        <p className="text-base mb-6">
          Get weekly health tips and wellness insights delivered to your inbox
        </p>
        <div className="flex justify-center gap-2 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email"
            className={`px-5 py-3 rounded-l-full border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ${
              isDarkMode ? "text-gray-900 bg-gray-100" : "text-gray-800 bg-white"
            }`}
          />
          <button
            className={`px-6 py-3 rounded-r-full font-bold text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 ${
              isDarkMode
                ? "bg-yellow-500 hover:bg-yellow-400"
                : "bg-indigo-600 hover:bg-indigo-500"
            }`}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Links Section */}
      <div
        className={`max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-500 ${
          isDarkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        {[
          { title: "Health Topics", items: ["Mental Health", "Physical Health", "Physiotherapy", "Diseases", "Healthy Living"] },
          { title: "Services", items: ["Find Doctors", "Book Appointment", "Health Tools", "Emergency Care", "Telemedicine"] },
          { title: "Resources", items: ["Health Blog", "Health Basics", "First Aid", "Health News", "Research"] },
          { title: "Support", items: ["Contact Us", "Help Center", "Privacy Policy", "Terms of Service", "Feedback"] },
        ].map((section, idx) => (
          <div key={idx}>
            <h4 className="font-bold mb-3 text-lg">{section.title}</h4>
            <ul className="space-y-2">
              {section.items.map((item, id) => (
                <li
                  key={id}
                  className={`cursor-pointer transition-colors hover:underline hover:scale-105 ${
                    isDarkMode ? "hover:text-yellow-400" : "hover:text-indigo-600"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div
        className={`max-w-7xl mx-auto px-6 py-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-500 flex-wrap ${
          isDarkMode ? "border-gray-700 text-gray-300" : "border-gray-300 text-gray-800"
        }`}
      >
        <div className="flex items-center gap-2 font-bold text-xl">
          Wellvia
        </div>

        <p className="text-sm">
          © 2025 Wellvia. All rights reserved.
          <span
            className={`ml-1 cursor-pointer transition ${
              isDarkMode
                ? "text-yellow-400 hover:text-yellow-300"
                : "text-indigo-500 hover:underline"
            }`}
          >
            Powered by Readdy
          </span>
        </p>

        <div className="flex gap-4 text-xl">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className={`p-2 rounded-full transition transform hover:scale-110 ${
                isDarkMode ? "bg-gray-800 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900" : "bg-gray-200 text-indigo-600 hover:bg-indigo-600 hover:text-white"
              }`}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
