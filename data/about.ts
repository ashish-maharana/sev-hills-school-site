import type {
  FacultyContent,
  FeatureItem,
  ManagementContent,
  TimelineItem,
} from "@/lib/types";

export const aboutHero = {
  eyebrow: "Our Heritage",
  title: "A Decade of Dedicated Service to Education",
  description:
    "Seven Hills English Medium School was founded with a vision to bring quality English-medium education to the children of Dindoli, Surat, fostering a generation of confident and responsible citizens.",
  imageSrc: "/images-placeholder/about/school-building.webp",
  imageAlt: "Seven Hills English Medium School building in Dindoli",
  primaryCta: { label: "Contact Us", href: "/contact" },
};

export const schoolHistory = {
  title: "Our Story",
  paragraphs: [
    "Established in 2014, Seven Hills English Medium School began its journey with a handful of students and a big dream: to provide a space where every child is seen, heard, and nurtured. Over the years, we have grown into one of the most trusted names in Dindoli, known for our focus on discipline and academic rigor.",
    "Our journey has been marked by continuous improvement in infrastructure, teaching methods, and student outcomes. Today, we stand proud as a school that balances tradition with modern learning needs.",
  ],
};

export const missionVision = {
  mission: "To provide a stimulating learning environment that encourages high expectations for success through development-appropriate instruction that allows for individual differences and learning styles.",
  vision: "To be a school of excellence where children can achieve their full potential in their academic, creative, personal, physical, moral, and spiritual development.",
};

export const managementContent: ManagementContent = {
  leaders: [
    {
      name: "Founder Director",
      role: "Visionary Leader",
      bio: "Dedicated to the cause of social development through education, our founder established Seven Hills to bridge the gap in quality schooling for the local community.",
      imageSrc: "/images-placeholder/about/leader-1.webp",
      imageAlt: "Founder Director of Seven Hills School",
    },
    {
      name: "School Administrator",
      role: "Operations Head",
      bio: "Ensuring the smooth day-to-day functioning of the school and maintaining the highest standards of safety and discipline.",
      imageSrc: "/images-placeholder/about/leader-2.webp",
      imageAlt: "School Administrator of Seven Hills School",
    },
  ],
  chairmanMessage: {
    title: "Message from the Desk",
    intro: "Welcome to Seven Hills English Medium School.",
    quote: "We believe that every child has a unique spark, and our job is to provide the fuel to let it burn bright.",
    quoteSource: "Management Team",
    paragraphs: [
      "Our focus has always been on providing a balanced education. We want our students to not just excel in exams but to become good human beings with strong values.",
      "In the coming years, we aim to integrate more technology and practical learning into our curriculum while keeping our roots firmly in our cultural values.",
    ],
  },
  quickIntro: "Our management team brings decades of experience in school administration and community development.",
};

export const facultyContent: FacultyContent = {
  quickIntro:
    "Our team consists of passionate educators who are not just teachers but mentors. They are committed to the academic and personal success of every student.",
  members: [
    {
      name: "Primary Wing Team",
      role: "Class 1-5 Educators",
      bio: "Experts in foundational literacy and numeracy, focusing on creating a joyful learning environment for young learners.",
      imageSrc: "/images-placeholder/about/faculty-primary.webp",
      imageAlt: "Primary wing teachers",
    },
    {
      name: "Secondary Wing Team",
      role: "Class 6-10 Educators",
      bio: "Subject matter experts dedicated to guiding students through the GSEB board requirements and beyond.",
      imageSrc: "/images-placeholder/about/faculty-secondary.webp",
      imageAlt: "Secondary wing teachers",
    },
    {
      name: "Activity Coaches",
      role: "Sports & Arts",
      bio: "Specialized instructors for Yoga, Sports, and Creative Arts who help students discover their hidden talents.",
      imageSrc: "/images-placeholder/about/faculty-sports.webp",
      imageAlt: "Activity and sports coaches",
    },
  ],
};

export const coreValues: FeatureItem[] = [
  { title: "Academic Rigor", description: "High standards of teaching and regular assessments to ensure conceptual clarity.", icon: "BookOpen" },
  { title: "Integrity", description: "Fostering honesty, ethics, and strong moral character in every student.", icon: "ShieldCheck" },
  { title: "Community", description: "Building a supportive bond between students, teachers, and parents in Dindoli.", icon: "Users" },
  { title: "Innovation", description: "Encouraging students to think creatively and adapt to new technologies.", icon: "Lightbulb" },
];

export const philosophyTimeline: TimelineItem[] = [
  { year: "Phase 1", title: "Holistic Foundations", description: "Focusing on character building and basic literacy in early years." },
  { year: "Phase 2", title: "Critical Thinking", description: "Encouraging students to question, explore, and apply their knowledge." },
  { year: "Phase 3", title: "Future Readiness", description: "Preparing students for board exams and life beyond school." },
];

export const differentiators: FeatureItem[] = [
  { title: "Safe Environment", description: "CCTV-enabled campus with strict safety protocols for all students.", icon: "Home" },
  { title: "GSEB Excellence", description: "Deep alignment with the Gujarat state board curriculum for top results.", icon: "Award" },
  { title: "Value-Added Skills", description: "Regular workshops on Yoga, Public Speaking, and Digital Literacy.", icon: "Zap" },
];
