import type { CurriculumCardItem } from "@/lib/types";

const skillTags: Record<string, string[]> = {
  "Computer Science": ["Logic", "Digital", "Problem Solving"],
  "Primary Education": ["Literacy", "Numeracy", "Foundation"],
  Science: ["Inquiry", "Experiment", "Discovery"],
  "Public Speaking": ["Confidence", "Expression", "Stage Skill"],
  Mathematics: ["Reasoning", "Concepts", "Application"],
  Languages: ["Reading", "Writing", "Communication"],
};

const tagColors = [
  "bg-[#f59e0b] text-[#0f2318]",
  "bg-[#38bdf8] text-[#0f2318]",
  "bg-[#a78bfa] text-[#0f2318]",
];

export function CurriculumGrid({ items }: { items: CurriculumCardItem[] }) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="group overflow-hidden rounded-[1.5rem] border-2 border-white bg-white shadow-[0_16px_40px_rgba(26,107,58,0.09)] transition duration-300 hover:-translate-y-1"
          style={{ borderLeft: "4px solid #1a6b3a" }}
        >
          {/* Placeholder for image — shows emoji icon when image not found */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e6f4ea] flex items-center justify-center">
            <span className="text-5xl opacity-40">📚</span>
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a6b3a]/10 to-transparent" />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-[#0f2318]">{item.title}</h3>
            <p className="mt-3 text-sm font-medium leading-6 text-[#3d5c47]">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 opacity-90 transition group-hover:opacity-100">
              {(skillTags[item.title] ?? ["Future Ready", "Creative", "Focused"]).map((tag, ti) => (
                <span
                  key={tag}
                  className={`inline-flex -translate-y-1 rounded-lg px-2.5 py-1 text-[11px] font-extrabold transition duration-300 group-hover:translate-y-0 ${
                    tagColors[(index + ti) % tagColors.length]
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
