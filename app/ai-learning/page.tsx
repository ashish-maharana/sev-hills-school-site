import { CTASection } from "@/components/cta-section";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { ProgramCard } from "@/components/program-card";
import { SectionHeader } from "@/components/section-header";
import { aiHero, aiPrograms, howStudentsLearn, showcaseCards, tomorrowSkills } from "@/data/ai-learning";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "AI Learning | Seven Hills English Medium School",
  description:
    "Explore age-appropriate AI learning, coding, robotics, digital citizenship, and innovation-focused future skills programs.",
  path: "/ai-learning",
});

export default function AiLearningPage() {
  return (
    <div className="page-grid pb-10">
      <section className="section-wrap rounded-3xl p-2">
        <PageHero content={aiHero} />
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Program Highlights"
          title="Visionary, Practical, and School-Appropriate AI Learning"
          description="We present future-facing programs through guided pedagogy and realistic, age-appropriate implementation."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {aiPrograms.map((item) => (
            <ProgramCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="How Students Learn"
          title="Guided Project-Based Learning"
          description="Students learn by doing, presenting, and refining with teacher mentoring at every stage."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {howStudentsLearn.map((item) => (
            <GlowCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Skills for Tomorrow"
          title="Competencies Students Build Through AI Learning"
          description="Our programs strengthen both technical and human abilities that matter for future success."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {tomorrowSkills.map((skill, index) => (
            <span
              key={skill.title}
              className={`sticker px-4 py-2 text-sm ${
                index % 4 === 0
                  ? "bg-[#f59e0b] text-[#0f2318]"
                  : index % 4 === 1
                  ? "bg-[#38bdf8] text-[#0f2318]"
                  : index % 4 === 2
                  ? "bg-[#1a6b3a] text-white"
                  : "bg-[#a78bfa] text-[#0f2318]"
              }`}
            >
              {skill.title}
            </span>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Innovation Showcase"
          title="A Futuristic Learning Experience with Purpose"
          description="Students are encouraged to create responsibly, communicate ideas, and connect technology to meaningful outcomes."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {showcaseCards.map((item) => (
            <GlowCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <CTASection
          title="Future Learning Starts in School, Not Later"
          description="Enroll your child in a learning ecosystem that introduces AI and innovation with responsibility and depth."
          primary={{ label: "Apply for Admission", href: "/admissions" }}
          secondary={{ label: "Speak to Admissions", href: "/contact" }}
        />
      </section>
    </div>
  );
}
