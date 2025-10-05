import React from "react";
import TherapyTemplate from "./TherapyTemplate";

const musicData = {
  title: "Music Therapy",
  description: "Use music to improve emotional well-being and reduce stress.",
  steps: [
    { title: "Listen", description: "Listen to calming or mood-lifting music." },
    { title: "Create", description: "Play instruments or compose your own music." },
    { title: "Reflect", description: "Use music to process emotions and memories." },
  ],
  fullDocument: {
    intro: "Music therapy uses musical interventions to address emotional, cognitive, and social needs of individuals.",
    points: [
      "Introduction: How music therapy works.",
      "Techniques: Listening, creating, singing, or playing instruments.",
      "Benefits: Stress relief, emotional expression, cognitive stimulation.",
      "Applications: Individual therapy, group sessions, hospitals, schools.",
      "Resources: Guided exercises, playlists, music therapists.",
    ],
  },
};

export default function Music({ isDarkMode }) {
  return <TherapyTemplate isDarkMode={isDarkMode} {...musicData} />;
}
