import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const generateDoctors = () => {
  const specializations = [
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Orthopedic",
    "Pediatrician",
    "Psychiatrist",
    "Gynecologist",
    "ENT Specialist",
    "General Physician",
    "Physiotherapist"
  ];

  const cities = [
    "Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Lucknow"
  ];

  const doctors = [];

  for (let i = 1; i <= 100; i++) {
    const randomSpecialization = specializations[Math.floor(Math.random() * specializations.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    doctors.push({
      id: i,
      name: `Dr. ${["Rohan", "Priya", "Ankit", "Sneha", "Neha", "Arjun", "Rakesh", "Ananya", "Pooja", "Vikram"][i % 10]} ${["Mehta", "Sharma", "Verma", "Iyer", "Roy", "Patel", "Gupta", "Singh", "Kumar", "Reddy"][i % 10]}`,
      specialization: randomSpecialization,
      city: randomCity,
      experience: Math.floor(Math.random() * 15) + 1,
      rating: (Math.random() * 2 + 3).toFixed(1),
      fee: Math.floor(Math.random() * 1000) + 500
    });
  }

  return doctors;
};

export default function FindaDoctor({ isDarkMode }) {
  const [doctors] = useState(generateDoctors());
  const [search, setSearch] = useState("");
  const [filterSpecialization, setFilterSpecialization] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const navigate = useNavigate();

  const filteredDoctors = doctors.filter((doc) => {
    return (
      doc.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterSpecialization === "" || doc.specialization === filterSpecialization) &&
      (filterCity === "" || doc.city === filterCity)
    );
  });

  const specializations = [...new Set(doctors.map((d) => d.specialization))];
  const cities = [...new Set(doctors.map((d) => d.city))];

  return (
    <div className={`mt-12 min-h-screen transition-all duration-500 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Header */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-teal-500 mb-4">Find a Doctor</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Search and filter through our comprehensive list of doctors across various specialties and cities.
        </p>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
        />
        <select
          value={filterSpecialization}
          onChange={(e) => setFilterSpecialization(e.target.value)}
          className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
        >
          <option value="">All Specializations</option>
          {specializations.map((spec, i) => (
            <option key={i} value={spec}>{spec}</option>
          ))}
        </select>
        <select
          value={filterCity}
          onChange={(e) => setFilterCity(e.target.value)}
          className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
        >
          <option value="">All Cities</option>
          {cities.map((city, i) => (
            <option key={i} value={city}>{city}</option>
          ))}
        </select>
      </section>

      {/* Doctors List */}
      <section className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doc) => (
          <div key={doc.id} className={`p-6 rounded-xl shadow-md transition-transform transform hover:-translate-y-2 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
            <h3 className="text-xl font-semibold mb-1">{doc.name}</h3>
            <p className="opacity-90 mb-1">{doc.specialization}</p>
            <p className="opacity-80 text-sm mb-1">{doc.city}</p>
            <p className="opacity-80 text-sm mb-1">{doc.experience} years experience</p>
            <p className="opacity-80 text-sm mb-1">Rating: {doc.rating} ⭐</p>
            <p className="opacity-80 text-sm mb-1">Consultation Fee: ₹{doc.fee}</p>

            {/* Navigate to Appointment page */}
            <button
              onClick={() => navigate("/appointments", { state: { doctorName: doc.name } })}
              className="mt-2 px-4 py-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </section>

      {filteredDoctors.length === 0 && (
        <p className="text-center text-lg py-10">No doctors found for selected filters.</p>
      )}
    </div>
  );
}
