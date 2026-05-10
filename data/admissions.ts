import type { FeatureItem, HeroContent, TimelineItem } from "@/lib/types";

export const admissionsHero: HeroContent = {
  eyebrow: "Join Our Family",
  title: "Admissions Open for Session 2026-27",
  description:
    "We invite parents to explore Seven Hills English Medium School and start their child's journey toward balanced growth and academic excellence.",
  imageSrc: "/images-placeholder/admissions/hero.webp",
  imageAlt: "Admissions inquiry desk at Seven Hills School",
  primaryCta: { label: "Contact Admissions", href: "tel:+919726144777" },
};

export const parentReasons: FeatureItem[] = [
  { title: "Safe Environment", description: "CCTV-enabled campus with strict safety protocols.", icon: "ShieldCheck" },
  { title: "Affordable Excellence", description: "Quality GSEB education within reach for Dindoli families.", icon: "CheckCircle" },
  { title: "Individual Attention", description: "Optimal student-teacher ratio for personalized learning.", icon: "UserPlus" },
];

export const processSteps: TimelineItem[] = [
  {
    year: "Step 01",
    title: "Visit and Inquire",
    description: "Visit our Dindoli campus to collect the prospectus and admission form.",
  },
  {
    year: "Step 02",
    title: "Interaction",
    description: "A simple interaction with the child and parent to understand their journey.",
  },
  {
    year: "Step 03",
    title: "Enrollment",
    description: "Submit documents and finalize enrollment at the school office.",
  },
];

export const eligibility: FeatureItem[] = [
  { title: "Nursery", description: "Child should be 3+ years as of June 1st.", icon: "Baby" },
  { title: "Class 1", description: "Child should be 6+ years as of June 1st.", icon: "User" },
];

export const documents: string[] = [
  "Original Birth Certificate",
  "Previous Year Report Card (Class 1+)",
  "School Leaving Certificate (Class 2+)",
  "Aadhar Card of Student and Parents",
  "Passport size Photographs (4 Nos.)",
];

export const admissionFaqs = [
  {
    question: "What is the medium of instruction?",
    answer: "The primary medium of instruction is English for all subjects.",
  },
  {
    question: "What are the school timings?",
    answer: "Pre-Primary: 8:30 AM - 12:30 PM. Primary & Secondary: 7:30 AM - 1:30 PM.",
  },
  {
    question: "Is transport available?",
    answer: "Yes, we provide van/bus transport facilities within Dindoli.",
  },
];

// Compatibility alias
export const admissionProcess = { title: "Admission Process", steps: processSteps };
export const documentsRequired = documents;
export const faqs = admissionFaqs;
