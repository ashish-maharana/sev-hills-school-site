import { CTASection } from "@/components/cta-section";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { academicPrograms, academicsHero, learningPathway, pedagogy } from "@/data/academics";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Academics | Seven Hills English Medium School",
  description:
    "Explore our broad and balanced GSEB curriculum across primary, middle, and secondary education levels in Surat.",
  path: "/academics",
});

export default function AcademicsPage() {
  return (
    <div className="page-grid pb-10">
      <section className="section-wrap rounded-3xl p-2">
        <PageHero content={academicsHero} />
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Learning Stages"
          title="Academic Tracks That Build Strong Foundations"
          description="Our curriculum supports rigorous concepts, communication confidence, and practical thinking across all levels."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {academicPrograms.map((program) => (
            <article key={program.title} className="play-card group">
               <div className="flex flex-col h-full">
                 <h3 className="text-2xl font-semibold text-[#0f2318]">{program.title}</h3>
                 <p className="mt-2 text-sm font-medium leading-7 text-[#3d5c47]">{program.description}</p>
                 <div className="mt-5 flex-1">
                   <p className="text-xs font-extrabold uppercase tracking-widest text-[#1a6b3a]">Core Subjects</p>
                   <ul className="mt-3 flex flex-wrap gap-2">
                     {program.subjects.map((subject: string) => (
                       <li key={subject} className="sticker bg-[#e6f4ea] text-[#1a6b3a] !shadow-none ring-1 ring-[#1a6b3a]/10">
                         {subject}
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Teaching Approach"
          title="How We Deliver Learning That Stays"
          description="Every classroom practice is designed to make understanding deeper, communication clearer, and progress measurable."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {pedagogy.map((item) => (
            <GlowCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Learning Pathway"
          title="From Foundations to Future Skills"
          description="Students progress through well-defined stages that support both academic and personal growth."
        />
        <div className="mt-8">
          <Timeline items={learningPathway} />
        </div>
      </section>

      <section className="section-wrap">
        <CTASection
          title="Build Academic Confidence from Day One"
          description="Join an academic environment that balances conceptual excellence with communication and future-ready abilities."
          primary={{ label: "Start Admissions", href: "/admissions" }}
          secondary={{ label: "Talk to School", href: "/contact" }}
        />
      </section>
    </div>
  );
}
