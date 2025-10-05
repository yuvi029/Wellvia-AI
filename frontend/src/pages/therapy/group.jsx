import React from "react";
import TherapyTemplate from "./TherapyTemplate";

const groupData = {
  title: "Group Therapy",
  description: "Peer support and shared experiences enhance healing.",
  steps: [
    { title: "Join Group", description: "Participate in a guided therapy group." },
    { title: "Share Experiences", description: "Discuss challenges and progress." },
    { title: "Receive Support", description: "Learn from others and gain encouragement." },
  ],
  fullDocument: {
    intro: "Group therapy involves multiple participants guided by a therapist to share experiences, learn coping skills, and gain social support.",
    points: [
      "Introduction: Benefits of group therapy.",
      "Structure: Session format, discussion topics.",
      "Techniques: Peer discussions, guided activities.",
      "Benefits: Social support, shared learning, motivation.",
      "Resources: Group exercises, worksheets, therapy guides.",
    ],
  },
};

export default function Group({ isDarkMode }) {
  return <TherapyTemplate isDarkMode={isDarkMode} {...groupData} />;
}
