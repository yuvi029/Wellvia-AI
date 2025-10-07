import React from "react";
import BellImage from "../assets/bell.jpeg";
import FullBodyImage from "../assets/physio.jpeg";

const conditions = [
  {
    title: "Musculoskeletal Disorders",
    desc: `Includes back & neck pain, arthritis, tendonitis, sprains & strains, post-surgical rehabilitation. Physiotherapy aids in pain relief, mobility enhancement, and strength building.`
  },
  {
    title: "Neurological Conditions",
    desc: `Stroke, Parkinson’s disease, multiple sclerosis, cerebral palsy, spinal cord injuries. Physiotherapy helps restore motor skills, coordination, and independence.`
  },
  {
    title: "Sports Injuries",
    desc: `ACL/MCL tears, rotator cuff injuries, ankle sprains, tennis elbow, shin splints. Programs focus on recovery, strength, and injury prevention.`
  },
  {
    title: "Respiratory Conditions",
    desc: `Asthma, COPD, cystic fibrosis, post-surgical respiratory care. Physiotherapy improves lung function, breathing techniques, and endurance.`
  },
  {
    title: "Pediatric Conditions",
    desc: `Developmental delays, muscle weakness, postural issues. Physiotherapy assists children in achieving motor milestones and strength.`
  },
  {
    title: "Geriatric Care",
    desc: `Osteoporosis, joint stiffness, balance training. Physiotherapy improves mobility, strength, and fall prevention in older adults.`
  }
];

const techniques = [
  { name: "Manual Therapy", desc: "Hands-on techniques to mobilize joints and soft tissues." },
  { name: "Exercise Therapy", desc: "Tailored exercises to improve strength and flexibility." },
  { name: "Electrotherapy", desc: "Electrical modalities for pain relief and muscle stimulation." },
  { name: "Heat/Cold Therapy", desc: "Application of heat or cold to reduce inflammation and pain." },
  { name: "Hydrotherapy", desc: "Water-based exercises for rehabilitation." },
  { name: "Posture Training", desc: "Education on maintaining proper posture." },
  { name: "Balance Training", desc: "Exercises to improve stability and prevent falls." }
];

const doctors = [
  { name: "Dr. Rohan Mehta", specialization: "Orthopedic Physiotherapist", address: "Mumbai, Maharashtra" },
  { name: "Dr. Priya Sharma", specialization: "Sports Physiotherapist", address: "Delhi" },
  { name: "Dr. Ankit Verma", specialization: "Neurological Physiotherapist", address: "Bangalore, Karnataka" },
  { name: "Dr. Sneha Iyer", specialization: "Pediatric Physiotherapist", address: "Chennai, Tamil Nadu" }
];

export default function Physio({ isDarkMode }) {
  return (
    <div className={`mt-12 min-h-screen transition-colors duration-500 ${isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}>

      {/* Header Section */}
      <section className="text-center py-12 px-6">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
          Comprehensive Physiotherapy Care
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Restore mobility, reduce pain, and improve your quality of life with our expert physiotherapy services. Learn about conditions treated, techniques used, and meet our specialized physiotherapists.
        </p>
      </section>

      {/* Conditions Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {conditions.map((cond, i) => (
          <div key={i} className={`p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
            <h3 className="text-2xl font-semibold mb-2">{cond.title}</h3>
            <p className="opacity-90">{cond.desc}</p>
          </div>
        ))}
      </section>

      {/* Bell's Palsy Section */}
      <section className={`py-16 px-6 ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"}`}>
        <h2 className={`text-3xl font-bold mb-6 text-center ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
          Bell's Palsy Rehabilitation
        </h2>
        <div className={`max-w-4xl mx-auto p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
          <img src={BellImage} alt="Bell's Palsy Therapy" className="w-full md:w-1/2 rounded-xl" />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-2">Bell's Palsy</h3>
            <p className="opacity-90">
              Bell’s Palsy is a sudden weakness or paralysis of the facial muscles, usually on one side. Physiotherapy can help improve muscle tone, restore facial symmetry, and speed up recovery. Recommended exercises include gentle facial massages, eyebrow lifts, smiling exercises, and eye closure practices.
            </p>
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="py-16 px-6 text-center">
        <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
          Physiotherapy Techniques
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {techniques.map((tech, i) => (
            <div key={i} className={`p-6 rounded-xl shadow-md transition-transform transform hover:-translate-y-2 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-sm opacity-90">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full Body Image */}
      <section className="py-16 px-6 text-center">
        <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
          Full Body Physiotherapy Overview
        </h2>
        <img src={FullBodyImage} alt="Full Body Physiotherapy" className="max-w-4xl mx-auto rounded-xl shadow-lg" />
      </section>

      {/* Doctors Section */}
      <section className={`py-16 px-6 ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
        <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? "text-teal-400" : "text-teal-600"}`}>
          Meet Our Expert Physiotherapists
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {doctors.map((doc, i) => (
            <div key={i} className={`p-6 rounded-xl shadow-md ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
              <h3 className="text-xl font-semibold mb-1">{doc.name}</h3>
              <p className="opacity-90">{doc.specialization}</p>
              <p className="opacity-80 text-sm">{doc.address}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 px-6 text-center ${isDarkMode ? "bg-teal-800 text-white" : "bg-teal-100 text-gray-900"}`}>
        <h2 className="text-3xl font-bold mb-4">Take the First Step Towards Recovery</h2>
        <p className="max-w-xl mx-auto text-lg mb-8">
          Book a session with our expert physiotherapists and regain your strength and mobility.
        </p>
        <button className={`px-8 py-3 rounded-full text-lg font-semibold shadow-md ${isDarkMode ? "bg-teal-500 hover:bg-teal-400 text-gray-900" : "bg-teal-600 hover:bg-teal-700 text-white"} transition`}>
          Book Your Session
        </button>
      </section>
    </div>
  );
}
