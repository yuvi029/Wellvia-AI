import React from "react";
import TherapyTemplate from "./TherapyTemplate";

const artData = {
  title: "Art Therapy",
  description: "Use creativity to process emotions and improve mental health.",
  steps: [
    { title: "Express Emotions", description: "Paint or draw your feelings." },
    { title: "Reflect", description: "Understand your emotions through your artwork." },
    { title: "Share", description: "Optionally share your art in therapy sessions." },
  ],
  fullDocument: {
    intro: "Art therapy uses creative processes to help individuals explore emotions, reduce anxiety, and improve mental health.",
    points: [
      "Introduction: How art therapy works.",
      "Techniques: Painting, drawing, sculpting.",
      "Benefits: Emotional expression, stress reduction, self-awareness.",
      "Applications: Individual, group, or children therapy sessions.",
      "Resources: Books, guides, and exercises.",
    ],
  },
};

export default function Art({ isDarkMode }) {
  return <TherapyTemplate isDarkMode={isDarkMode} {...artData} />;
}
