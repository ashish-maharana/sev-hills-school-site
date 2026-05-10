import { AboutPeopleTabs } from "@/components/about-people-tabs";
import { CTASection } from "@/components/cta-section";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import {
  aboutHero,
  coreValues,
  differentiators,
  facultyContent,
  managementContent,
  missionVision,
  philosophyTimeline,
} from "@/data/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About | Seven Hills English Medium School",
  description:
    "Discover the school story, mission, values, and future-ready philosophy of Seven Hills English Medium School.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="page-grid pb-10">
      <section className="section-wrap rounded-3xl p-2">
        <PageHero content={aboutHero} />
      </section>

      {/* Mission + Vision */}
      <section className="section-wrap grid gap-6 lg:grid-cols-2">
        <article className="glass-panel p-8">
          <p className="sticker bg-[#f59e0b] text-[#0f2318]">Mission</p>
          <p className="mt-4 text-lg font-medium leading-8 text-[#3d5c47]">{missionVision.mission}</p>
        </article>
        <article className="glass-panel p-8">
          <p className="sticker bg-[#38bdf8] text-[#0f2318]">Vision</p>
          <p className="mt-4 text-lg font-medium leading-8 text-[#3d5c47]">{missionVision.vision}</p>
        </article>
      </section>

      {/* People */}
      <section className="section-wrap">
        <SectionHeader
          eyebrow="Our People"
          title="Management and Faculty in One View"
          description={managementContent.quickIntro}
        />
      </section>

      <AboutPeopleTabs management={managementContent} faculty={facultyContent} />

      <div className="beam-divider section-wrap" aria-hidden="true" />

      {/* Core Values */}
      <section className="section-wrap rounded-[2rem] bg-white/80 p-5 shadow-[0_22px_60px_rgba(26,107,58,0.07)] sm:p-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="sticker mx-auto bg-[#f59e0b] text-[#0f2318]">Core Values</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f2318] sm:text-5xl">Our Culture Is Built on Purpose</h2>
          <p className="mt-4 text-base font-medium leading-7 text-[#3d5c47]">
            These values shape the way we teach, mentor, and prepare students for life.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {coreValues.map((value) => (
            <Reveal key={value.title}>
              <GlowCard {...value} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy + Differentiators */}
      <section className="section-wrap rounded-[2rem] bg-[#e6f4ea] p-6 shadow-[0_22px_60px_rgba(26,107,58,0.07)] sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="sticker bg-[#f59e0b] text-[#0f2318]">School Philosophy</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f2318] sm:text-4xl">How We Shape Future-Ready Learners</h2>
            <p className="mt-4 text-base font-medium leading-7 text-[#3d5c47]">
              Our educational philosophy evolves across foundational learning, communication growth, and innovation mindset.
            </p>
            <div className="mt-6">
              <Timeline items={philosophyTimeline} />
            </div>
          </div>
          <div>
            <span className="sticker bg-[#38bdf8] text-[#0f2318]">What Makes Us Different</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f2318] sm:text-4xl">Designed for Real Student Growth</h2>
            <p className="mt-4 text-base font-medium leading-7 text-[#3d5c47]">
              Families value our balanced focus on academics, confidence, and future fluency.
            </p>
            <div className="mt-6 divide-y-2 divide-[#1a6b3a]/10 rounded-[1.5rem] bg-white/55 px-5">
              {differentiators.map((item) => (
                <Reveal key={item.title}>
                  <div className="py-6">
                    <GlowCard {...item} variant="flat" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <CTASection
          title="Experience the Seven Hills Difference"
          description="Visit the campus, meet our management and faculty, and see how values-led education meets future-ready learning."
          primary={{ label: "Plan a Visit", href: "/contact" }}
          secondary={{ label: "View Admissions", href: "/admissions" }}
        />
      </section>
    </div>
  );
}
