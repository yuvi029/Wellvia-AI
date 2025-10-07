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
    { name: "Physical Health", dropdown: ["Exercise", "Nutrition", "Fitness Tips", "Physiotherapy"] },
    { name: "Doctors", dropdown: ["Find a Doctor", "Appointments"] },
    { name: "Healthy Living", dropdown: ["Habits"] },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
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
              {item.path ? (
                <Link
                  to={item.path}
                  className={`transition ${
                    darkMode
                      ? "text-gray-100 hover:text-teal-400"
                      : "text-gray-900 hover:text-teal-600"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setDesktopDropdownOpen(
                        desktopDropdownOpen === index ? null : index
                      )
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
                      {item.dropdown.map((opt, i) => {
                        const linkTo =
                          opt === "Physiotherapy"
                            ? "/physio"
                            : `/${opt.toLowerCase().replace(/\s+/g, "-")}`;
                        return (
                          <Link
                            key={i}
                            to={linkTo}
                            className={`block px-4 py-2 rounded-lg transition ${
                              darkMode
                                ? "hover:bg-teal-700 hover:text-white"
                                : "hover:bg-white hover:text-teal-700"
                            }`}
                            onClick={() => setDesktopDropdownOpen(null)}
                          >
                            {opt}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}

          {/* ✅ Desktop Buttons (Clickable) */}
          <div className="flex items-center space-x-4 ml-10">
            {["Login", "Signup", "Book Appointment"].map((label, i) => {
              let path =
                label === "Login"
                  ? "/login"
                  : label === "Signup"
                  ? "/signup"
                  : "/appointments";

              return (
                <Link
                  key={i}
                  to={path}
                  className={`px-4 py-2 rounded-full transition relative overflow-hidden ${
                    label === "Book Appointment"
                      ? "bg-teal-500 text-white hover:bg-teal-600"
                      : label === "Login"
                      ? darkMode
                        ? "border border-teal-400 text-teal-400 hover:bg-teal-500 hover:text-white"
                        : "border border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white"
                      : "bg-teal-500 text-white hover:bg-teal-600"
                  }`}
                >
                  <span className="absolute inset-0 rounded-full border-2 border-transparent hover:border-teal-300 transition-all duration-300"></span>
                  {label}
                </Link>
              );
            })}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-transform duration-300 transform hover:rotate-180 ${
                darkMode
                  ? "bg-gray-700 text-yellow-400"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div
          className={darkMode ? "md:hidden text-gray-100" : "md:hidden text-gray-900"}
        >
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
