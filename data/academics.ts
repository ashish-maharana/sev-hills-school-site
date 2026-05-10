import type {
  AcademicsHeroContent,
  CurriculumSection,
  FeatureItem,
  LearningStage,
  TimelineItem,
} from "@/lib/types";

export const academicsHero: AcademicsHeroContent = {
  eyebrow: "Learning Excellence",
  title: "GSEB Focused Academic Programs",
  description:
    "We follow the Gujarat State Education Board (GSEB) curriculum, ensuring our students are well-prepared for state board examinations and competitive excellence.",
  imageSrc: "/images-placeholder/academics/hero.webp",
  imageAlt: "Students studying in a classroom at Seven Hills",
  primaryCta: { label: "Contact Admissions", href: "/admissions" },
  stats: [
    { label: "Board Passing", value: "100%" },
    { label: "Student-Teacher Ratio", value: "25:1" },
    { label: "Teaching Experience", value: "Avg. 8 Yrs" },
  ],
};

export const academicPrograms: LearningStage[] = [
  {
    id: "pre-primary",
    title: "Pre-Primary (Nursery to UKG)",
    description: "Focusing on play-based learning and social development.",
    subjects: ["English Literacy", "Numeracy Skills", "Rhymes & Music", "Drawing & Craft", "Physical Play"],
    imageSrc: "/images-placeholder/academics/pre-primary.webp",
  },
  {
    id: "primary",
    title: "Primary (Class 1 to 5)",
    description: "Building strong fundamentals in core subjects.",
    subjects: ["English", "Mathematics", "Environmental Studies (EVS)", "Computer Studies", "Hindi", "Gujarati"],
    imageSrc: "/images-placeholder/academics/primary.webp",
  },
  {
    id: "middle",
    title: "Middle School (Class 6 to 8)",
    description: "Encouraging exploration and independent thinking.",
    subjects: ["Science & Tech", "Social Science", "Sanskrit (Intro)", "Advanced Mathematics", "Creative Writing"],
    imageSrc: "/images-placeholder/academics/middle.webp",
  },
  {
    id: "secondary",
    title: "Secondary (Class 9 & 10)",
    description: "Intensive GSEB Board Exam preparation.",
    subjects: ["Physics/Chemistry/Biology", "Algebra & Geometry", "History/Civics/Geography", "Language Proficiency"],
    imageSrc: "/images-placeholder/academics/secondary.webp",
  },
];

export const pedagogy: FeatureItem[] = [
  {
    title: "Language Mastery",
    description: "Ensuring multi-lingual proficiency in English, Hindi, and Gujarati.",
    icon: "Languages",
  },
  {
    title: "Scientific Inquiry",
    description: "Practical-oriented science learning to build strong foundations.",
    icon: "Microscope",
  },
  {
    title: "Logical Reasoning",
    description: "Using Vedic Mathematics and mental math for cognitive growth.",
    icon: "Sigma",
  },
];

export const learningPathway: TimelineItem[] = [
  { year: "Nursery - UKG", title: "Foundations", description: "Joyful learning and social skill building." },
  { year: "Class 1 - 5", title: "Core Skills", description: "Strengthening literacy, numeracy, and discipline." },
  { year: "Class 6 - 8", title: "Independence", description: "Developing critical thinking and self-study habits." },
  { year: "Class 9 - 10", title: "Excellence", description: "Focused board exam prep and future orientation." },
];

export const examSystem = {
  title: "Evaluation & Exams",
  description: "We follow the Continuous and Comprehensive Evaluation (CCE) pattern.",
  types: [
    { name: "Unit Tests", frequency: "Monthly", purpose: "Regular tracking of progress" },
    { name: "Semester Exams", frequency: "Bi-annually", purpose: "Comprehensive assessment" },
    { name: "Board Mock Exams", frequency: "Class 10 only", purpose: "Board readiness" },
  ],
};

// Keep for compatibility if needed
export const curriculumOverview: CurriculumSection = {
  title: "The GSEB Framework",
  description:
    "Our academic year is divided into two semesters as per the GSEB guidelines.",
  features: pedagogy,
};
