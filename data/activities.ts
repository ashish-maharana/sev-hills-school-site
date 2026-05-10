import type { FeatureItem, GalleryItem, HeroContent } from "@/lib/types";

export const activitiesHero: HeroContent = {
  eyebrow: "Beyond Academics",
  title: "A Vibrant World of Talent and Passion",
  description:
    "We believe in the holistic growth of our students. From the sports field to the stage, every child is encouraged to explore their interests.",
  imageSrc: "/images-placeholder/activities/hero.webp",
  imageAlt: "Seven Hills students participating in annual day dance",
  primaryCta: { label: "View Gallery", href: "#gallery" },
};

export const activityPrograms: FeatureItem[] = [
  {
    title: "Sports & Fitness",
    description: "Volleyball, Kabaddi, Athletics, and Yoga to build physical strength.",
    icon: "Trophy",
  },
  {
    title: "Arts & Creativity",
    description: "Drawing, Dance, Music, and Drama to nurture the creative spark.",
    icon: "Palette",
  },
  {
    title: "Skill Development",
    description: "Debates, Science Fairs, and Leadership workshops for confidence.",
    icon: "Lightbulb",
  },
];

export const lifeSkills: FeatureItem[] = [
  { title: "Teamwork", description: "Collaborating in sports and group projects.", icon: "Users" },
  { title: "Leadership", description: "Taking charge of events and student clubs.", icon: "Star" },
  { title: "Values", description: "Learning respect, discipline, and empathy.", icon: "Heart" },
];

export const campusGalleryItems: GalleryItem[] = [
  { src: "/images-placeholder/activities/g1.webp", alt: "Annual Day", title: "Annual Day" },
  { src: "/images-placeholder/activities/g2.webp", alt: "Science Fair", title: "Science Fair" },
  { src: "/images-placeholder/activities/g3.webp", alt: "Yoga Day", title: "Yoga Day" },
  { src: "/images-placeholder/activities/g4.webp", alt: "Classroom activity", title: "Activity Learning" },
];

export const schoolTripsGalleryItems: GalleryItem[] = [
  { src: "/images-placeholder/activities/t1.webp", alt: "Local farm", title: "Nature Trip" },
  { src: "/images-placeholder/activities/t2.webp", alt: "Museum visit", title: "Historical Visit" },
];

// Compatibility alias
export const activityCategories = activityPrograms;
export const campusLifeGallery = campusGalleryItems;
export const schoolTripGallery = schoolTripsGalleryItems;
