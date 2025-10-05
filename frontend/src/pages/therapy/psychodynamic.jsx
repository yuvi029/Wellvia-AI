import React from "react";
import TherapyTemplate from "./TherapyTemplate";

const psychodynamicData = {
  title: "Psychodynamic Therapy",
  description: "Explore unconscious patterns affecting behavior.",
  steps: [
    { title: "Identify Patterns", description: "Understand recurring emotional or behavioral patterns." },
    { title: "Explore Past", description: "Look at past experiences influencing present behavior." },
    { title: "Gain Insight", description: "Develop understanding of unconscious motives." },
  ],
  fullDocument: {
    intro: "Psychodynamic therapy helps individuals gain insight into how past experiences and unconscious processes influence current behavior and relationships.",
    points: [
      "Introduction: Principles of psychodynamic therapy.",
      "Techniques: Free association, dream analysis, transference interpretation.",
      "Benefits: Improved self-awareness, emotional insight, relationship improvement.",
      "Applications: Individual therapy, group therapy.",
      "Resources: Books, journals, therapy sessions.",
    ],
  },
};

export default function Psychodynamic({ isDarkMode }) {
  return <TherapyTemplate isDarkMode={isDarkMode} {...psychodynamicData} />;
}
