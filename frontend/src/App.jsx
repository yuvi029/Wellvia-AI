import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Comp from "./components/Comp";
import How from "./components/How";
import Footer from "./components/Footer";

/* ========================
   Page Imports
======================== */
import Therapy from "./pages/Therapy";
import Counselling from "./pages/Counselling";
import SelfCare from "./pages/SelfCare";
import Exercise from "./pages/Exercise";
import Nutrition from "./pages/Nutrition";
import Fitness from "./pages/Fitness";
import FindaDoctor from "./pages/FindaDoctor";
import Specialists from "./pages/Specialists";
import Appointments from "./pages/Appointments";
import Habits from "./pages/Habits";
import Diet from "./pages/Diet";
import Sleep from "./pages/Sleep";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

/* ========================
   Therapy Sub-page Imports
======================== */
import CBT from "./pages/therapy/cbt";
import ACT from "./pages/therapy/act";
import ArtTherapy from "./pages/therapy/art";
import GroupTherapy from "./pages/therapy/group";
import Mindfulness from "./pages/therapy/mindfulness";
import MusicTherapy from "./pages/therapy/music";
import PlayTherapy from "./pages/therapy/play";
import Psychodynamic from "./pages/therapy/psychodynamic";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`${
        isDarkMode ? "dark" : ""
      } min-h-screen flex flex-col transition-all duration-300`}
    >
      <Navbar darkMode={isDarkMode} setDarkMode={setIsDarkMode} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Comp isDarkMode={isDarkMode} />
              <How isDarkMode={isDarkMode} />
              <Footer isDarkMode={isDarkMode} />
            </>
          }
        />

        {/* Main Therapy Page */}
        <Route path="/therapy" element={<Therapy isDarkMode={isDarkMode} />} />

        {/* Therapy Sub-pages with isDarkMode */}
        <Route path="/therapy/cbt" element={<CBT isDarkMode={isDarkMode} />} />
        <Route path="/therapy/act" element={<ACT isDarkMode={isDarkMode} />} />
        <Route path="/therapy/art" element={<ArtTherapy isDarkMode={isDarkMode} />} />
        <Route path="/therapy/group" element={<GroupTherapy isDarkMode={isDarkMode} />} />
        <Route path="/therapy/mindfulness" element={<Mindfulness isDarkMode={isDarkMode} />} />
        <Route path="/therapy/music" element={<MusicTherapy isDarkMode={isDarkMode} />} />
        <Route path="/therapy/play" element={<PlayTherapy isDarkMode={isDarkMode} />} />
        <Route path="/therapy/psychodynamic" element={<Psychodynamic isDarkMode={isDarkMode} />} />

        {/* Other Pages */}
        <Route path="/counselling" element={<Counselling />} />
        <Route path="/self-care" element={<SelfCare />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/fitness-tips" element={<Fitness />} />
        <Route path="/find-a-doctor" element={<FindaDoctor />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
