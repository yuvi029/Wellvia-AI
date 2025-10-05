import React from "react";
import TherapyTemplate from "./TherapyTemplate";

const playData = {
  title: "Play Therapy",
  description: "Therapy for children using play to express feelings and resolve psychological issues.",
  steps: [
    { title: "Create Safe Environment", description: "Provide a safe space for children to play freely." },
    { title: "Observe", description: "Watch how children interact and express emotions." },
    { title: "Guide Play", description: "Introduce therapeutic activities to address concerns." },
  ],
  fullDocument: {
    intro: "Play therapy allows children to express emotions, develop social skills, and solve problems through play under the guidance of a trained therapist.",
    points: [
      "Introduction: Benefits of play therapy.",
      "Techniques: Structured play, free play, role-playing.",
      "Applications: Emotional expression, behavioral issues, social skills.",
      "Benefits: Builds self-esteem, problem-solving, communication.",
      "Resources: Toys, games, therapy guides for children.",
    ],
  },
};

export default function Play({ isDarkMode }) {
  return <TherapyTemplate isDarkMode={isDarkMode} {...playData} />;
}
