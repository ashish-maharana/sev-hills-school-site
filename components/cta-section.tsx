import Link from "next/link";

export function CTASection({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] p-8 text-[#0f2318] shadow-[0_24px_64px_rgba(245,158,11,0.22)] sm:p-10"
      style={{ background: "linear-gradient(135deg, #f59e0b 0%, #fb923c 100%)" }}
    >
      <div className="pointer-events-none absolute -left-8 top-8 h-24 w-24 rounded-full bg-[#1a6b3a]/20" />
      <div className="pointer-events-none absolute bottom-5 right-8 h-16 w-16 rotate-45 rounded-[1rem] bg-[#38bdf8]/30" />
      <div className="pointer-events-none absolute right-32 top-6 h-10 w-10 rounded-full bg-white/25" />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight text-[#0f2318] sm:text-5xl">{title}</h2>
          <p className="mt-4 font-semibold leading-7 text-[#0f2318]/80">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            className="relative isolate inline-flex items-center justify-center rounded-xl bg-[#1a6b3a] px-6 py-2.5 text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(26,107,58,0.35)] transition hover:-translate-y-0.5"
            href={primary.href}
          >
            {primary.label}
          </Link>
          {secondary ? (
            <Link
              className="relative isolate inline-flex items-center justify-center rounded-xl border-2 border-[#0f2318]/30 bg-white/30 px-6 py-2.5 text-sm font-extrabold text-[#0f2318] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/50"
              href={secondary.href}
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
