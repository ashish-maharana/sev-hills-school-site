import type { FooterLinks, NavigationItem, SiteConfig, SocialLink } from "@/lib/types";

export const site: SiteConfig = {
  name: "Seven Hills English Medium School",
  shortName: "Seven Hills",
  location: "Dindoli, Surat",
  address: "Mona Nagar, Mansarovar, Dindoli, Surat, Gujarat - 394210",
  email: "sevenhillsps2017@gmail.com",
  phones: ["+91 97261 44777", "+91 97262 44777"],
  logo: "/logo.png",
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Activities", href: "/activities" },
  { label: "AI Learning", href: "/ai-learning" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    url: "https://facebook.com",
    icon: "Facebook",
    ariaLabel: "Follow us on Facebook",
  },
  {
    platform: "Instagram",
    url: "https://instagram.com",
    icon: "Instagram",
    ariaLabel: "Follow us on Instagram",
  },
  {
    platform: "YouTube",
    url: "https://youtube.com",
    icon: "Youtube",
    ariaLabel: "Subscribe to our YouTube channel",
  },
];

export const footerLinks: FooterLinks = {
  quick: [
    { label: "About Us", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Activities", href: "/activities" },
    { label: "Contact", href: "/contact" },
  ],
  admissions: [
    { label: "Process", href: "/admissions#process" },
    { label: "Eligibility", href: "/admissions#eligibility" },
    { label: "Documents", href: "/admissions#documents" },
    { label: "Apply Now", href: "/admissions" },
  ],
};
