import { IconGlyph } from "@/components/icons";

type GlowCardProps = {
  title: string;
  description: string;
  icon: string;
  tag?: string;
  variant?: "card" | "flat";
};

export function GlowCard({ title, description, icon, tag, variant = "card" }: GlowCardProps) {
  if (variant === "flat") {
    return (
      <article className="flex gap-4">
        <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f59e0b]/15 text-[#1a6b3a] ring-2 ring-white">
          <IconGlyph name={icon} />
        </div>
        <div>
          {tag ? <span className="sticker mb-3 bg-[#38bdf8] text-[#0f2318]">{tag}</span> : null}
          <h3 className="text-xl font-semibold text-[#0f2318]">{title}</h3>
          <p className="mt-3 font-medium leading-7 text-[#3d5c47]">{description}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="play-card group transition hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(26,107,58,0.16)]">
      {/* Corner blob — sky blue instead of yellow */}
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#38bdf8]/40 transition group-hover:bg-[#f59e0b]/50" />
      <div className="relative">
        {tag ? (
          <span className="sticker bg-[#38bdf8] text-[#0f2318]">{tag}</span>
        ) : null}
        {/* Icon bubble — amber background */}
        <div className="mt-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#f59e0b]/15 text-[#1a6b3a] ring-2 ring-white">
          <IconGlyph name={icon} />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#0f2318]">{title}</h3>
        <p className="mt-3 font-medium leading-7 text-[#3d5c47]">{description}</p>
      </div>
    </article>
  );
}
