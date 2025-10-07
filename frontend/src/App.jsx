import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Comp from "./components/Comp";
import How from "./components/How";
import Footer from "./components/Footer";
import Doctors from "./components/Doctors";
import PhysicalHealth from "./components/PhysicalHealth";
import Diseases from "./components/Diseases";
import Mental from "./components/MentalHealth";


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
// import Specialists from "./pages/Specialists";
import Appointments from "./pages/Appointments";
import Habits from "./pages/Habits";
import Sleep from "./pages/Sleep";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
// import Physiotherapy from "./components/Physiotherapy";
import Physio from "./pages/Physio"; // New Physiotherapy page
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Physiotherapy from "./components/Physiotherapy";
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

import HealthyLiving from "./components/HealthyLiving";

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
        {/* Home Page */}
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
<Route path="/doctors" element={<Doctors isDarkMode={isDarkMode} />} />
        {/* Therapy Pages */}
        <Route path="/therapy" element={<Therapy isDarkMode={isDarkMode} />} />
        <Route path="/mental-health" element={<Mental isDarkMode={isDarkMode} />} />
        <Route path="/physical-health" element={<PhysicalHealth isDarkMode={isDarkMode} />} />
<Route
  path="/physiotherapy"
  element={<Physiotherapy isDarkMode={isDarkMode} />}/>
        <Route path="/therapy/cbt" element={<CBT isDarkMode={isDarkMode} />} />
        <Route path="/therapy/act" element={<ACT isDarkMode={isDarkMode} />} />
        <Route path="/therapy/art" element={<ArtTherapy isDarkMode={isDarkMode} />} />
        <Route path="/therapy/group" element={<GroupTherapy isDarkMode={isDarkMode} />} />
        <Route path="/therapy/mindfulness" element={<Mindfulness isDarkMode={isDarkMode} />} />
        <Route path="/therapy/music" element={<MusicTherapy isDarkMode={isDarkMode} />} />
        <Route path="/therapy/play" element={<PlayTherapy isDarkMode={isDarkMode} />} />
        <Route path="/therapy/psychodynamic" element={<Psychodynamic isDarkMode={isDarkMode} />} />
       <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
<Route path="/signup" element={<Signup isDarkMode={isDarkMode} />} />
<Route path="/healthy-living" element={<HealthyLiving isDarkMode={isDarkMode} />} />
       <Route path="/diseases" element={<Diseases isDarkMode={isDarkMode} />}    />
        {/* Physiotherapy Page */}
        <Route path="/physio" element={<Physio isDarkMode={isDarkMode} />} />

        {/* Other Pages */}
        <Route path="/counselling" element={<Counselling isDarkMode={isDarkMode} />} />
        <Route path="/self-care" element={<SelfCare isDarkMode={isDarkMode} />} />
        <Route path="/exercise" element={<Exercise isDarkMode={isDarkMode} />} />
        <Route path="/nutrition" element={<Nutrition isDarkMode={isDarkMode} />} />
        <Route path="/fitness-tips" element={<Fitness isDarkMode={isDarkMode} />} />
        <Route path="/find-a-doctor" element={<FindaDoctor isDarkMode={isDarkMode} />} />
        
        <Route path="/appointments" element={<Appointments isDarkMode={isDarkMode} />} />
        <Route path="/habits" element={<Habits isDarkMode={isDarkMode} />} />
        
        <Route path="/sleep" element={<Sleep isDarkMode={isDarkMode} />} />
        <Route path="/blog" element={<Blog isDarkMode={isDarkMode} />} />
        <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
