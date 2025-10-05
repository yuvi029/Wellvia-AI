import React from "react";
import TherapyTemplate from "./TherapyTemplate";

const actData = {
  title: "Acceptance & Commitment Therapy (ACT)",
  description:
    "ACT helps you live a meaningful life by accepting what’s out of your control and committing to action that improves your life.",
  steps: [
    { title: "Mindfulness", description: "Observe your thoughts and feelings without judgment." },
    { title: "Acceptance", description: "Accept your thoughts and emotions rather than trying to change them." },
    { title: "Cognitive Defusion", description: "Create distance from negative thoughts to reduce their impact." },
    { title: "Self as Context", description: "Understand your identity is separate from your thoughts and feelings." },
    { title: "Values Clarification", description: "Identify what truly matters to you and set meaningful goals." },
    { title: "Committed Action", description: "Take steps aligned with your values even in challenges." },
  ],
  fullDocument: {
    intro: "ACT is a psychological intervention that uses acceptance and mindfulness strategies, together with commitment and behavior-change strategies, to increase psychological flexibility.",
    points: [
      "Introduction: Understanding ACT and its principles.",
      "Mindfulness Practices: Exercises to be present in the moment.",
      "Acceptance Techniques: Handling negative thoughts and emotions.",
      "Defusion Methods: Learning to separate from limiting thoughts.",
      "Values Identification: Clarifying life priorities and goals.",
      "Committed Action: Setting actionable steps aligned with values.",
      "Practical Exercises: Daily activities to reinforce ACT principles.",
      "Resources: Recommended books, articles, and worksheets.",
    ],
  },
};

export default function ACT({ isDarkMode }) {
  return <TherapyTemplate isDarkMode={isDarkMode} {...actData} />;
}
