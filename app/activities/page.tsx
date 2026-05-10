import { ActivitiesGalleryTabs } from "@/components/activities-gallery-tabs";
import { CTASection } from "@/components/cta-section";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { SectionHeader } from "@/components/section-header";
import { activitiesHero, activityPrograms, campusGalleryItems, lifeSkills, schoolTripsGalleryItems } from "@/data/activities";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Activities | Seven Hills English Medium School",
  description:
    "Explore music, sports, events, yoga, clubs, and leadership-building experiences that shape well-rounded students.",
  path: "/activities",
});

export default function ActivitiesPage() {
  return (
    <div className="page-grid pb-10">
      <section className="section-wrap rounded-3xl p-2">
        <PageHero content={activitiesHero} />
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Co-Curricular Tracks"
          title="Student Life that Builds Character and Confidence"
          description="Our activity framework nurtures expression, fitness, discipline, and a deep sense of teamwork."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {activityPrograms.map((item) => (
            <ProgramCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Holistic Development"
          title="Clubs, Celebrations, Leadership, and Wellness"
          description="Students gain practical life skills while participating in meaningful school experiences."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {lifeSkills.map((item) => (
            <GlowCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Campus Life Gallery"
          title="Moments That Shape the Student Journey"
          description="A snapshot of how students engage, perform, collaborate, and grow through campus life."
        />
        <div className="mt-8">
          <ActivitiesGalleryTabs campusItems={campusGalleryItems} schoolTripItems={schoolTripsGalleryItems} />
        </div>
      </section>

      <section className="section-wrap">
        <CTASection
          title="Beyond the Classroom Begins Here"
          description="Give your child a vibrant school life where activities strengthen confidence, creativity, and wellbeing."
          primary={{ label: "Explore Admissions", href: "/admissions" }}
          secondary={{ label: "Contact School", href: "/contact" }}
        />
      </section>
    </div>
  );
}
