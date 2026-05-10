import { IconGlyph } from "@/components/icons";

type ProgramCardProps = {
  title: string;
  description: string;
  icon: string;
  tag?: string;
};

export function ProgramCard({ title, description, icon, tag }: ProgramCardProps) {
  return (
    <article className="play-card transition hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f59e0b]/20 text-[#1a6b3a]">
          <IconGlyph name={icon} />
        </div>
        {tag ? <span className="sticker bg-[#38bdf8] text-[#0f2318]">{tag}</span> : null}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-[#0f2318]">{title}</h3>
      <p className="mt-3 font-medium leading-7 text-[#3d5c47]">{description}</p>
    </article>
  );
}
