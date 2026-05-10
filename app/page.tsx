import Link from "next/link";
import { CTASection } from "@/components/cta-section";
import { CurriculumGrid } from "@/components/curriculum-grid";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { createPageMetadata } from "@/lib/metadata";
import {
  coCurricular,
  coCurricularItems,
  curriculumCards,
  curriculumOverview,
  homeAdmissionsPreview,
  homeCampusMoments,
  homeHero,
  homeHighlights,
  homeLearningPathway,
  homeQuickLinks,
  imageSlots,
  learningIntro,
  legacyStats,
  principalSection,
  schoolAtAGlance,
} from "@/data/home";

export const metadata = createPageMetadata({
  title: "Home | Seven Hills English Medium School",
  description:
    "Future-ready schooling in Surat with balanced academics, confidence development, and modern learning pathways.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="page-grid pb-10">
      {/* Hero */}
      <section className="section-wrap rounded-3xl p-2">
        <PageHero content={homeHero} />
      </section>

      {/* Welcome intro */}
      <section className="section-wrap glass-panel doodle-bg p-7 sm:p-10">
        <div className="max-w-5xl">
          <span className="sticker bg-[#1a6b3a] text-white">Welcome</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#0f2318] sm:text-5xl">
            {learningIntro.title}
          </h2>
          <div className="mt-6 grid gap-5 text-sm font-medium leading-7 text-[#3d5c47] sm:text-base md:grid-cols-2">
            <p>{learningIntro.paragraphs[0]}</p>
            <div>
              <p>{learningIntro.paragraphs[1]}</p>
              <Link href={learningIntro.link.href} className="btn-secondary mt-5">
                {learningIntro.link.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rainbow beam divider */}
      <div className="beam-divider section-wrap" aria-hidden="true" />

      {/* Stats at a glance */}
      <section className="section-wrap">
        <h3 className="text-center text-3xl font-semibold text-[#0f2318]">{schoolAtAGlance}</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {legacyStats.map((item, index) => (
            <article key={item.label} className="stat-holo glass-panel relative overflow-hidden p-6 text-center">
              <p className={`relative z-[1] text-4xl font-semibold ${index % 2 === 0 ? "text-[#1a6b3a]" : "text-[#f97316]"}`}>
                {item.value}
              </p>
              <p className="relative z-[1] mt-2 text-sm font-extrabold text-[#0f2318]">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-wrap">
        <SectionHeader
          eyebrow="Why Parents Choose Us"
          title="A School Experience Built Around Growth"
          description="Families see Seven Hills as a place where academics, values, confidence, and future learning grow together."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {homeHighlights.map((item) => (
            <GlowCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Learning Pathway + Visual Panel */}
      <section className="section-wrap grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div>
          <SectionHeader
            eyebrow="Learning Pathway"
            title="How Students Grow Year by Year"
            description="Clear basics, meaningful participation, and steady future readiness — the Seven Hills way."
          />
          <div className="mt-8">
            <Timeline items={homeLearningPathway} />
          </div>
        </div>
        <article className="glass-panel flex h-full flex-col gap-5 overflow-hidden p-4">
          {/* Placeholder for learning section image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.35rem] bg-[#e6f4ea] flex items-center justify-center">
            <span className="text-5xl opacity-30">🌿</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.35rem] bg-[#e6f4ea] p-5">
              <span className="sticker bg-[#38bdf8] text-[#0f2318]">Steady Progress</span>
              <p className="mt-3 text-sm font-medium leading-6 text-[#3d5c47]">
                Every stage builds on the previous one, so students grow with clarity instead of pressure.
              </p>
            </div>
            <div className="rounded-[1.35rem] bg-[#fef9ee] p-5">
              <span className="sticker bg-[#f59e0b] text-[#0f2318]">Whole Child</span>
              <p className="mt-3 text-sm font-medium leading-6 text-[#3d5c47]">
                Academics, confidence, values, communication, and activities develop together.
              </p>
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-white/70 p-5">
            <span className="sticker bg-[#a78bfa] text-[#0f2318]">In School</span>
            <h3 className="mt-4 text-2xl font-semibold text-[#0f2318]">What this looks like every day</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                "Guided classroom practice with teacher support",
                "Activities that turn concepts into real understanding",
                "Opportunities to speak, lead and participate",
              ].map((item) => (
                <p key={item} className="rounded-[1.2rem] bg-[#e6f4ea] p-4 text-sm font-medium leading-6 text-[#3d5c47]">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-1 items-end rounded-[1.5rem] bg-[#1a6b3a] p-6 text-white">
            <div className="w-full">
              <span className="sticker bg-[#f59e0b] text-[#0f2318]">Balanced Growth</span>
              <div className="mt-4 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <h3 className="text-2xl font-semibold leading-tight text-white">Learning continues beyond one lesson</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/85">
                    One pathway blends learning, activities, communication, and future-ready skills.
                  </p>
                </div>
                <Link href="/academics" className="btn-primary w-fit">
                  View Academics
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Curriculum Overview */}
      <section className="section-wrap">
        <div className="max-w-4xl">
          <span className="sticker bg-[#f59e0b] text-[#0f2318]">Curriculum</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#0f2318] sm:text-5xl">{curriculumOverview.title}</h2>
          <p className="mt-4 text-sm font-medium leading-7 text-[#3d5c47] sm:text-base">{curriculumOverview.description}</p>
        </div>
        <CurriculumGrid items={curriculumCards} />
      </section>

      <div className="beam-divider section-wrap" aria-hidden="true" />

      {/* Campus Moments */}
      <section className="section-wrap">
        <SectionHeader
          eyebrow="Campus Moments"
          title="A Glimpse of Learning, Play, and Celebration"
          description="A short preview of the real student life moments that make the campus feel active and joyful."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {homeCampusMoments.map((item) => (
            <article key={item.src} className="overflow-hidden rounded-[1.5rem] border-2 border-white bg-white shadow-[0_16px_40px_rgba(26,107,58,0.08)]" style={{ borderLeft: "4px solid #1a6b3a" }}>
              {/* Image placeholder */}
              <div className="aspect-[4/3] w-full bg-[#e6f4ea] flex items-center justify-center">
                <span className="text-4xl opacity-30">🏫</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#0f2318]">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <Link href="/activities" className="btn-secondary mt-6">
          View More Activities
        </Link>
      </section>

      {/* Co-curricular */}
      <section className="section-wrap grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <article className="glass-panel p-4">
          <div className="h-full w-full min-h-[320px] rounded-[1.35rem] bg-[#e6f4ea] flex items-center justify-center">
            <span className="text-6xl opacity-30">🎨</span>
          </div>
        </article>
        <article className="glass-panel p-7 sm:p-10">
          <span className="sticker bg-[#1a6b3a] text-white">Activities</span>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#0f2318] sm:text-5xl">{coCurricular.title}</h2>
          <p className="mt-4 text-sm font-medium leading-7 text-[#3d5c47] sm:text-base">{coCurricular.description}</p>
          <ul className="mt-6 space-y-5 border-l-4 border-[#f97316] pl-5">
            {coCurricularItems.map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[29px] top-2 h-4 w-4 rounded-full border-2 border-white bg-[#1a6b3a] shadow-[0_0_0_4px_rgba(245,158,11,0.40)]" aria-hidden="true" />
                <p className="text-sm font-medium leading-7 text-[#3d5c47] sm:text-base">
                  <span className="font-extrabold text-[#0f2318]">{item.title}: </span>
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      {/* Admissions Preview */}
      <section className="section-wrap">
        <SectionHeader
          eyebrow="Admissions Preview"
          title="A Simple Start for New Families"
          description="A quick overview of the path from first inquiry to enrollment. The full admissions page has documents, FAQs, and details."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {homeAdmissionsPreview.map((step, index) => (
            <article key={step.step} className="play-card">
              <span className={`sticker ${index === 1 ? "bg-[#38bdf8]" : "bg-[#f59e0b]"} text-[#0f2318]`}>{step.step}</span>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2318]">{step.title}</h3>
              <p className="mt-3 font-medium leading-7 text-[#3d5c47]">{step.description}</p>
            </article>
          ))}
        </div>
        <Link href="/admissions" className="btn-primary mt-6">
          See Admission Details
        </Link>
      </section>

      {/* Quick Links */}
      <section className="section-wrap">
        <SectionHeader
          eyebrow="Explore More"
          title="Continue Through the School Story"
          description="Jump into focused pages when you want more detail about academics, student life, technology learning, or admissions."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {homeQuickLinks.map((item) => (
            <Link key={item.href} href={item.href} className="block h-full">
              <ProgramCard title={item.title} description={item.description} icon={item.icon} />
            </Link>
          ))}
        </div>
      </section>

      {/* Principal Quote */}
      <section className="section-wrap">
        <article className="signal-card glass-panel relative overflow-hidden p-7 sm:p-10">
          <p className="relative z-[1] text-5xl leading-none text-[#f59e0b] sm:text-6xl" aria-hidden="true">
            &ldquo;
          </p>
          <blockquote className="relative z-[1] -mt-3 text-3xl font-semibold italic leading-tight text-[#0f2318]">
            {principalSection.quote}
          </blockquote>
          <p className="relative z-[1] mt-5 text-sm font-extrabold text-[#1a6b3a]">{principalSection.author}</p>
        </article>
      </section>

      {/* CTA */}
      <section className="section-wrap">
        <CTASection
          title="Admissions Open for 2026-27"
          description="Take the next step toward a balanced, premium, and future-ready school experience in Surat, Gujarat."
          primary={{ label: "Apply for Admission", href: "/admissions" }}
          secondary={{ label: "Contact School", href: "/contact" }}
        />
      </section>
    </div>
  );
}
