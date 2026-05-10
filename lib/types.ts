export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export type AcademicsHeroContent = HeroContent & {
  stats: { label: string; value: string }[];
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  description: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

export type ProgramItem = FeatureItem & {
  tag?: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
};

export type LegacyStatItem = {
  label: string;
  value: string;
};

export type CurriculumCardItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type CurriculumSection = {
  title: string;
  description: string;
  features: FeatureItem[];
};

export type LearningStage = {
  id: string;
  title: string;
  description: string;
  subjects: string[];
  imageSrc: string;
};

export type CoCurricularItem = {
  title: string;
  description: string;
};

export type AdmissionsFormField = {
  label: string;
  name: string;
  type: "text" | "email";
  placeholder: string;
};

export type AdmissionsUpdatesContent = {
  title: string;
  description: string;
  fields: AdmissionsFormField[];
  message: { label: string; name: string; placeholder: string };
  submitLabel: string;
};

export type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export type PersonProfile = {
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  bio: string;
  tags?: string[];
};

export type ManagementMessage = {
  title: string;
  intro: string;
  quote: string;
  quoteSource: string;
  paragraphs: string[];
};

export type ManagementContent = {
  quickIntro: string;
  chairmanMessage: ManagementMessage;
  leaders: PersonProfile[];
};

export type FacultyContent = {
  quickIntro: string;
  members: PersonProfile[];
};

export type AboutQuickNavItem = {
  label: string;
  href: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  platform: "Facebook" | "Instagram" | "YouTube" | "LinkedIn" | "Twitter";
  url: string;
  icon: string;
  ariaLabel: string;
};

export type FooterLinks = {
  quick: { label: string; href: string }[];
  admissions: { label: string; href: string }[];
};

export type SiteConfig = {
  name: string;
  shortName: string;
  location: string;
  address: string;
  email: string;
  phones: string[];
  logo: string;
};
