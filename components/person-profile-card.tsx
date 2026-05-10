import type { PersonProfile } from "@/lib/types";

type PersonProfileCardProps = {
  person: PersonProfile;
  compact?: boolean;
  showImage?: boolean;
  imageClassName?: string;
};

export function PersonProfileCard({ person, compact = false, showImage = true, imageClassName }: PersonProfileCardProps) {
  const defaultImageClass = compact ? "aspect-[4/3] object-cover" : "aspect-square object-cover";

  return (
    <article className="glass-panel group h-full overflow-hidden p-5 sm:p-6" style={{ borderLeft: "4px solid #1a6b3a" }}>
      {showImage ? (
        <div className="relative overflow-hidden rounded-[1.5rem] border-2 border-white bg-[#e6f4ea]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.25),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.15),transparent_40%)]" />
          <div className="relative z-[1] w-full flex items-center justify-center min-h-[240px]">
             {/* Text/Emoji placeholder since real images are missing */}
             <span className="text-6xl opacity-30">👤</span>
          </div>
        </div>
      ) : null}

      <h3 className={`${showImage ? "mt-5" : "mt-1"} text-2xl font-semibold leading-tight text-[#0f2318]`}>{person.name}</h3>
      <p className="mt-1 text-sm font-extrabold text-[#1a6b3a]">{person.role}</p>
      <p className="mt-3 text-sm font-medium leading-7 text-[#3d5c47]">{person.bio}</p>

      {person.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {person.tags.map((tag) => (
            <span
              key={tag}
              className="sticker bg-[#f59e0b] text-[#0f2318]"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
