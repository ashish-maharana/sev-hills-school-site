import type { TimelineItem } from "@/lib/types";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="divide-y-2 divide-[#1a6b3a]/10 rounded-[1.5rem] bg-white/55 px-5">
      {items.map((item, index) => (
        <li key={item.title} className="py-6">
          <div className={`sticker mb-3 ${index % 2 === 0 ? "bg-[#f59e0b] text-[#0f2318]" : "bg-[#38bdf8] text-[#0f2318]"}`}>
            {item.year}
          </div>
          <h3 className="text-xl font-semibold text-[#0f2318]">{item.title}</h3>
          <p className="mt-3 font-medium leading-7 text-[#3d5c47]">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
