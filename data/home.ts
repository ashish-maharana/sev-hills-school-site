import type {
  AdmissionsUpdatesContent,
  CoCurricularItem,
  CurriculumCardItem,
  FeatureItem,
  GalleryItem,
  HeroContent,
  LegacyStatItem,
  TimelineItem,
} from "@/lib/types";

export const homeHero: HeroContent = {
  eyebrow: "Trusted Education in Dindoli, Surat",
  title: "Empowering Students for a Brighter Future",
  description:
    "Seven Hills English Medium School provides a nurturing environment where children from Dindoli and surrounding areas build strong academic foundations and essential life skills.",
  imageSrc: "/images-placeholder/home/hero-main.webp",
  imageAlt: "Seven Hills English Medium School campus and students",
  primaryCta: { label: "Admission Open", href: "/admissions" },
  secondaryCta: { label: "Our Story", href: "/about" },
};

export const imageSlots = {
  learningSection: "/images-placeholder/home/learning-experience.webp",
  principalSection: "/images-placeholder/home/principal-office.webp",
  coCurricularSection: "/images-placeholder/home/school-activities.webp",
  curriculum: {
    computerScience: "/images-placeholder/home/lab-computer.webp",
    primaryEducation: "/images-placeholder/home/classroom-primary.webp",
    science: "/images-placeholder/home/lab-science.webp",
    publicSpeaking: "/images-placeholder/home/stage-performance.webp",
    mathematics: "/images-placeholder/home/math-class.webp",
    languages: "/images-placeholder/home/library.webp",
  },
} as const;

export const learningIntro = {
  title: "A Tradition of Learning Excellence",
  paragraphs: [
    "Located in the heart of Dindoli, Seven Hills English Medium School has been a cornerstone of quality education since its inception. We focus on delivering affordable yet premium learning experiences that cater to the diverse needs of our students.",
    "Our school combines the rigor of the GSEB curriculum with modern teaching methods, ensuring that every child receives the attention they deserve to thrive academically and socially.",
  ],
  link: { label: "Explore Our Philosophy", href: "/about" },
};

export const schoolAtAGlance = "Seven Hills at a Glance";

export const legacyStats: LegacyStatItem[] = [
  { value: "800+", label: "Active Students" },
  { value: "40+", label: "Qualified Teachers" },
  { value: "15+", label: "Safe Classrooms" },
  { value: "2014", label: "Year Established" },
];

export const homeHighlights: FeatureItem[] = [
  {
    title: "Expert Faculty",
    description: "Our teachers are dedicated professionals committed to individual student growth and concept-based learning.",
    icon: "GraduationCap",
  },
  {
    title: "Safe Campus",
    description: "A secure environment in Dindoli with CCTV monitoring and child-friendly infrastructure.",
    icon: "ShieldCheck",
  },
  {
    title: "Holistic Development",
    description: "Balance between academics, sports, and cultural activities to build well-rounded personalities.",
    icon: "Sprout",
  },
  {
    title: "Modern Lab",
    description: "Equipped with computer and science labs to provide practical exposure to every learner.",
    icon: "FlaskConical",
  },
];

export const homeLearningPathway: TimelineItem[] = [
  {
    year: "Nursery - UKG",
    title: "Foundational Years",
    description: "Focusing on motor skills, social interaction, and basic literacy through play and activity.",
  },
  {
    year: "Class 1 - 5",
    title: "Primary Growth",
    description: "Building strong fundamentals in Mathematics, Languages, and Environmental Studies.",
  },
  {
    year: "Class 6 - 8",
    title: "Middle School Exploration",
    description: "Introducing complex concepts and encouraging critical thinking and self-expression.",
  },
  {
    year: "Class 9 - 10",
    title: "High School Readiness",
    description: "Rigorous academic preparation for board exams with a focus on career orientation.",
  },
];

export const homeCampusMoments: GalleryItem[] = [
  { src: "/images-placeholder/activities/assembly.webp", alt: "Morning assembly at Seven Hills School", title: "Morning Assembly" },
  { src: "/images-placeholder/activities/sports.webp", alt: "Students playing on the school ground", title: "Sports Day" },
  { src: "/images-placeholder/activities/cultural.webp", alt: "Students performing in a cultural event", title: "Cultural Celebration" },
  { src: "/images-placeholder/activities/lab.webp", alt: "Students in the science lab", title: "Practical Learning" },
];

export const homeAdmissionsPreview = [
  { step: "01", title: "Campus Visit", description: "Visit our office in Dindoli to collect the prospectus and admission form." },
  { step: "02", title: "Interaction", description: "A friendly interaction with the child and parents to understand learning needs." },
  { step: "03", title: "Enrollment", description: "Submit documents and finalize the admission for the upcoming academic session." },
];

export const homeQuickLinks = [
  { title: "Academics", description: "Our GSEB curriculum and teaching pedagogy.", icon: "BookOpen", href: "/academics" },
  { title: "Activities", description: "From sports to arts, see what keeps us active.", icon: "Palette", href: "/activities" },
  { title: "AI Learning", description: "Introducing technology to young minds.", icon: "Cpu", href: "/ai-learning" },
  { title: "Admissions", description: "Join the Seven Hills family today.", icon: "UserPlus", href: "/admissions" },
];

export const principalSection = {
  quote: "Education is not the learning of facts, but the training of the mind to think. We strive to nurture thinkers and leaders.",
  author: "Principal - Seven Hills English Medium School",
};

export const curriculumOverview = {
  title: "Broad and Balanced Curriculum",
  description: "We follow the Gujarat State Education Board (GSEB) curriculum, enriched with extra-curricular modules for all-round development.",
};

export const curriculumCards: CurriculumCardItem[] = [
  { title: "Primary Years", description: "Building core skills in a joyful environment.", imageSrc: "/images-placeholder/home/curriculum-primary.webp", imageAlt: "Primary education" },
  { title: "Science & Tech", description: "Practical experiments and computer literacy.", imageSrc: "/images-placeholder/home/curriculum-science.webp", imageAlt: "Science and technology" },
  { title: "Language Arts", description: "Developing fluency in English, Hindi, and Gujarati.", imageSrc: "/images-placeholder/home/curriculum-languages.webp", imageAlt: "Language learning" },
  { title: "Physical Ed", description: "Daily yoga and sports for physical fitness.", imageSrc: "/images-placeholder/home/curriculum-sports.webp", imageAlt: "Physical education" },
  { title: "Creative Arts", description: "Nurturing talent in music, dance, and drawing.", imageSrc: "/images-placeholder/home/curriculum-arts.webp", imageAlt: "Creative arts" },
  { title: "Mathematics", description: "Making numbers fun with logical reasoning.", imageSrc: "/images-placeholder/home/curriculum-math.webp", imageAlt: "Mathematics" },
];

export const coCurricular = {
  title: "Beyond the Books",
  description: "At Seven Hills, we believe that learning happens everywhere—in the lab, on the field, and on the stage.",
};

export const coCurricularItems: CoCurricularItem[] = [
  { title: "Annual Day", description: "A grand showcase of student talent in performing arts and academics." },
  { title: "Inter-School Sports", description: "Competing and building sportsmanship through various athletic events." },
  { title: "Science Exhibitions", description: "Encouraging innovation through annual science and craft fairs." },
  { title: "Yoga & Wellness", description: "Daily morning sessions to improve focus and mental health." },
];

export const admissionsUpdatesCta: AdmissionsUpdatesContent = {
  title: "Stay Updated on Admissions!",
  description: "Sign up to receive notifications about our admission dates and upcoming open house events in Dindoli.",
  fields: [
    { label: "Parent Name", name: "parent_name", type: "text", placeholder: "Parent Name" },
    { label: "Email", name: "email", type: "email", placeholder: "Email Address" },
    { label: "Phone", name: "phone", type: "text", placeholder: "Phone Number" },
  ],
  message: { label: "Inquiry", name: "message", placeholder: "Inquiry for Class..." },
  submitLabel: "Register Interest",
};
