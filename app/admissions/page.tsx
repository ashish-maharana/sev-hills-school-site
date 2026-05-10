import { CTASection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { GlowCard } from "@/components/glow-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";
import { admissionFaqs, admissionsHero, documents, eligibility, parentReasons, processSteps } from "@/data/admissions";
import { site } from "@/data/site";

export const metadata = createPageMetadata({
  title: "Admissions | Seven Hills English Medium School",
  description:
    "Admissions are open at Seven Hills English Medium School. Explore process, eligibility, required documents, and FAQs.",
  path: "/admissions",
});

export default function AdmissionsPage() {
  return (
    <div className="page-grid pb-10">
      <section className="section-wrap rounded-3xl p-2">
        <PageHero content={admissionsHero} />
      </section>

      <section className="section-wrap">
        <SectionHeader
          eyebrow="Why Parents Choose Us"
          title="A Trusted School for Future-Focused Growth"
          description="Families choose Seven Hills for structured academics, strong values, and progressive learning opportunities."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {parentReasons.map((item) => (
            <GlowCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section id="process" className="section-wrap">
        <SectionHeader
          eyebrow="Admissions Process"
          title="Simple and Parent-Friendly Admission Steps"
          description="Our process is transparent and supportive from initial inquiry to enrollment."
        />
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <li key={step.year} className="play-card">
              <span className={`sticker ${index % 2 === 0 ? "bg-[#f59e0b] text-[#0f2318]" : "bg-[#38bdf8] text-[#0f2318]"}`}>{step.year}</span>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2318]">{step.title}</h3>
              <p className="mt-3 font-medium leading-7 text-[#3d5c47]">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-wrap grid gap-6 md:grid-cols-2">
        <article className="glass-panel p-6">
          <h2 className="text-3xl font-semibold text-[#0f2318]">Eligibility &amp; Class Overview</h2>
          <ul className="mt-5 space-y-3 font-medium text-[#3d5c47]">
            {eligibility.map((item) => (
              <li key={item.title} className="rounded-xl bg-[#e6f4ea] px-4 py-3">
                <span className="font-extrabold text-[#1a6b3a]">{item.title}:</span> {item.description}
              </li>
            ))}
          </ul>
        </article>
        <article id="documents" className="glass-panel p-6">
          <h2 className="text-3xl font-semibold text-[#0f2318]">Documents Required</h2>
          <ul className="mt-5 space-y-3 font-medium text-[#3d5c47]">
            {documents.map((item) => (
              <li key={item} className="rounded-xl bg-[#e6f4ea] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section id="faq" className="section-wrap">
        <SectionHeader
          eyebrow="Admissions FAQ"
          title="Common Parent Questions"
          description="Quick answers to help you move ahead with confidence."
        />
        <div className="mt-8">
          <FaqAccordion items={admissionFaqs} />
        </div>
      </section>

      <section className="section-wrap">
        <CTASection
          title="Ready to Begin the Admission Journey?"
          description="Contact our admissions team today for class availability and enrollment guidance."
          primary={{ label: "Start Inquiry", href: "/contact" }}
          secondary={{ label: `Call ${site.phones[0]}`, href: `tel:${site.phones[0]}` }}
        />
      </section>
    </div>
  );
}
