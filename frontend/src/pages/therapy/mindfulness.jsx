import React from "react";
import TherapyTemplate from "./TherapyTemplate";

const mindfulnessData = {
  title: "Mindfulness Therapy",
  description: "Mindfulness improves awareness and reduces stress.",
  steps: [
    { title: "Focus on Breath", description: "Pay attention to your breathing patterns." },
    { title: "Observe Thoughts", description: "Notice thoughts without judgment." },
    { title: "Body Scan", description: "Scan your body to release tension." },
  ],
  fullDocument: {
    intro: "Mindfulness therapy uses meditation and awareness exercises to help individuals reduce stress, anxiety, and improve emotional regulation.",
    points: [
      "Introduction: Understanding mindfulness.",
      "Practices: Meditation, breathing, body scan.",
      "Benefits: Stress reduction, better focus, emotional control.",
      "Applications: Daily exercises, therapy sessions, corporate wellness.",
      "Resources: Apps, guided meditations, books.",
    ],
  },
};

export default function Mindfulness({ isDarkMode }) {
  return <TherapyTemplate isDarkMode={isDarkMode} {...mindfulnessData} />;
}
