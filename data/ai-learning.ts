import type { FeatureItem, HeroContent } from "@/lib/types";

export const aiHero: HeroContent = {
  eyebrow: "Future Skills",
  title: "Building Digital Intelligence at Seven Hills",
  description:
    "We believe in preparing our students for a changing world through coding, logic, and responsible technology use.",
  imageSrc: "/images-placeholder/ai/hero.webp",
  imageAlt: "Students using computers at Seven Hills School lab",
  primaryCta: { label: "Explore Curriculum", href: "#curriculum" },
};

export const aiPrograms: FeatureItem[] = [
  {
    title: "Computer Literacy",
    description: "Proficiency in basic computing and digital navigation.",
    icon: "Monitor",
  },
  {
    title: "Logic & Coding",
    description: "Introducing block-based coding and logical thinking.",
    icon: "Code2",
  },
  {
    title: "Innovation Lab",
    description: "A dedicated space for robotics and basic AI concepts.",
    icon: "Lightbulb",
  },
];

export const howStudentsLearn: FeatureItem[] = [
  { title: "Digital Awareness", description: "Keyboard skills and creative tools like Scratch.", icon: "MousePointer2" },
  { title: "Problem Solving", description: "Algorithms and introduction to web basics.", icon: "BrainCircuit" },
  { title: "Future Ready", description: "Project-based software learning and tech ethics.", icon: "Rocket" },
];

export const tomorrowSkills: FeatureItem[] = [
  { title: "Adaptability", description: "Learning to use new tools quickly.", icon: "RotateCw" },
  { title: "Cyber Safety", description: "Understanding responsible internet use.", icon: "Lock" },
  { title: "Creativity", description: "Using tech to express ideas.", icon: "Palette" },
];

export const showcaseCards: FeatureItem[] = aiPrograms;

// Compatibility alias
export const aiLearningHero = aiHero;
export const aiFeatures = aiPrograms;
export const aiLevels = howStudentsLearn;
