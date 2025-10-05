import React from "react";
import TherapyTemplate from "./TherapyTemplate";

const cbtData = {
  title: "Cognitive Behavioral Therapy (CBT)",
  description: "CBT helps you identify and change negative thought patterns.",
  steps: [
    { title: "Identify Thoughts", description: "Recognize harmful or negative thoughts." },
    { title: "Challenge Thoughts", description: "Question the validity of these thoughts." },
    { title: "Behavioral Change", description: "Adopt positive behaviors to replace harmful ones." },
  ],
  fullDocument: {
    intro: "CBT is a widely used therapy to treat anxiety, depression, and other mental health conditions by modifying thought and behavior patterns.",
    points: [
      "Introduction: Principles of CBT.",
      "Techniques: Thought records, cognitive restructuring, exposure therapy.",
      "Benefits: Reduces anxiety, depression, improves problem-solving.",
      "Applications: Individual therapy, group sessions, online CBT programs.",
      "Resources: Worksheets, guided exercises, professional help.",
    ],
  },
};

export default function CBT({ isDarkMode }) {
  return <TherapyTemplate isDarkMode={isDarkMode} {...cbtData} />;
}
