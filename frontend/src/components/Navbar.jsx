import { useState, useEffect, useRef } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const navRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDesktopDropdownOpen(null);
        setMobileDropdownOpen(null);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Mental Health", dropdown: ["Therapy", "Counselling", "Self-care"] },
    { name: "Physical Health", dropdown: ["Exercise", "Nutrition", "Fitness Tips"] },
    { name: "Physiotherapy" },
    { name: "Doctors", dropdown: ["Find a Doctor", "Specialists", "Appointments"] },
    { name: "Healthy Living", dropdown: ["Habits", "Diet", "Sleep"] },
    { name: "Blog" },
    { name: "Contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div
          className={`text-2xl font-bold tracking-wide ${
            darkMode ? "text-teal-400" : "text-teal-600"
          }`}
        >
          Wellvia
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <button
                onClick={() =>
                  setDesktopDropdownOpen(desktopDropdownOpen === index ? null : index)
                }
                className={`flex items-center transition ${
                  darkMode
                    ? "text-gray-100 hover:text-teal-400"
                    : "text-gray-900 hover:text-teal-600"
                }`}
              >
                {item.name}
                {item.dropdown && (
                  <FiChevronDown
                    className={`ml-1 transform transition-transform duration-200 ${
                      desktopDropdownOpen === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {item.dropdown && desktopDropdownOpen === index && (
                <div
                  className={`absolute left-0 mt-2 rounded-xl shadow-xl w-48 p-2 z-50 transition-all duration-200 transform scale-95 hover:scale-100 opacity-95 ${
                    darkMode
                      ? "bg-gray-800 text-gray-100"
                      : "bg-teal-100 text-gray-800"
                  }`}
                >
                  {item.dropdown.map((opt, i) => (
                    <Link
                      key={i}
                      to={`/${opt.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`block px-4 py-2 rounded-lg transition ${
                        darkMode
                          ? "hover:bg-teal-700 hover:text-white"
                          : "hover:bg-white hover:text-teal-700"
                      }`}
                      onClick={() => setDesktopDropdownOpen(null)}
                    >
                      {opt}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Desktop Buttons */}
          <div className="flex items-center space-x-4 ml-10">
            {["Login", "Signup", "Book Appointment"].map((label, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full transition relative overflow-hidden ${
                  label === "Login"
                    ? darkMode
                      ? "border border-teal-400 text-teal-400 hover:bg-teal-500 hover:text-white"
                      : "border border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white"
                    : "bg-teal-500 text-white hover:bg-teal-600"
                }`}
              >
                <span className="absolute inset-0 rounded-full border-2 border-transparent hover:border-teal-300 transition-all duration-300"></span>
                {label}
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-transform duration-300 transform hover:rotate-180 ${
                darkMode ? "bg-gray-700 text-yellow-400" : "bg-gray-200 text-gray-800"
              }`}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className={darkMode ? "md:hidden text-gray-100" : "md:hidden text-gray-900"}>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 transform ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() =>
                  setMobileDropdownOpen(mobileDropdownOpen === index ? null : index)
                }
                className={`flex items-center justify-between w-full text-left transition ${
                  darkMode
                    ? "text-gray-200 hover:text-teal-400"
                    : "text-gray-900 hover:text-teal-600"
                }`}
              >
                {item.name}
                {item.dropdown && (
                  <FiChevronDown
                    className={`ml-1 transform transition-transform duration-200 ${
                      mobileDropdownOpen === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {item.dropdown && mobileDropdownOpen === index && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.dropdown.map((opt, i) => (
                    <Link
                      key={i}
                      to={`/${opt.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`block text-sm transition ${
                        darkMode
                          ? "text-gray-300 hover:text-teal-400"
                          : "text-gray-800 hover:text-teal-600"
                      }`}
                      onClick={() => {
                        setMobileDropdownOpen(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {opt}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Buttons */}
          <div className="pt-4 flex flex-col space-y-3">
            {["Login", "Signup", "Book Appointment"].map((label, i) => (
              <button
                key={i}
                className={`w-full px-4 py-2 rounded-full transition relative overflow-hidden ${
                  label === "Login"
                    ? darkMode
                      ? "border border-teal-400 text-teal-400 hover:bg-teal-500 hover:text-white"
                      : "border border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white"
                    : "bg-teal-500 text-white hover:bg-teal-600"
                }`}
              >
                <span className="absolute inset-0 rounded-full border-2 border-transparent hover:border-teal-300 transition-all duration-300"></span>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
