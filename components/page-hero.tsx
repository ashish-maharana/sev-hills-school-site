"use client";

import Link from "next/link";
import type { HeroContent } from "@/lib/types";

export function PageHero({ content }: { content: HeroContent }) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-[#1a6b3a] text-white shadow-[0_24px_70px_rgba(26,107,58,0.24)]">
      {/* Overlay pattern */}
      <div className="hero-grid-overlay pointer-events-none absolute inset-0" />

      {/* Diagonal cut at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16"
        style={{ background: "linear-gradient(to bottom right, transparent 49%, #f0f9ff 50%)" }}
      />

      {/* Floating decorations */}
      <div className="pointer-events-none absolute -left-6 top-10 h-20 w-20 rounded-full bg-[#f59e0b]/40" />
      <div className="pointer-events-none absolute right-10 top-6 h-10 w-10 rotate-45 rounded-[0.75rem] bg-[#38bdf8]/50" />
      <div className="pointer-events-none absolute bottom-16 left-[40%] h-12 w-12 rounded-full bg-[#f97316]/40" />
      <div className="pointer-events-none absolute right-20 bottom-24 h-6 w-6 rotate-12 rounded-full bg-[#a78bfa]/60" />

      <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-12 pb-20 lg:pb-20">
        <div className="max-w-3xl">
          <p className="sticker bg-[#f59e0b] text-[#0f2318]">{content.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.06] text-white sm:text-6xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-white/88 sm:text-lg">
            {content.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="btn-primary" href={content.primaryCta.href}>
              {content.primaryCta.label}
            </Link>
            {content.secondaryCta ? (
              <Link
                className="relative isolate inline-flex items-center justify-center rounded-xl border-2 border-white/40 bg-white/10 px-6 py-2.5 text-sm font-extrabold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a6b3a]"
                href={content.secondaryCta.href}
              >
                {content.secondaryCta.label}
              </Link>
            ) : null}
          </div>
          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            {["700+ families", "30+ staff", "Joyful learning"].map((item, index) => (
              <span
                key={item}
                className={`rounded-xl px-4 py-3 text-sm font-extrabold text-[#0f2318] shadow-lg ${
                  index === 0
                    ? "bg-[#f59e0b]"
                    : index === 1
                    ? "bg-[#38bdf8]"
                    : "bg-[#a78bfa]"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {content.imageSrc ? (
          <div className="relative mx-auto w-full max-w-xl">
            {/* Floating labels */}
            <div className="absolute -left-4 top-6 z-[10] rounded-xl bg-[#f97316] px-4 py-2 text-sm font-extrabold text-white shadow-xl">
              Discover
            </div>
            <div className="absolute -right-2 bottom-10 z-[10] rounded-xl bg-[#f59e0b] px-4 py-2 text-sm font-extrabold text-[#0f2318] shadow-xl">
              Thrive
            </div>
            
            {/* Stable image container with aspect ratio */}
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2.5rem] border-[10px] border-white/20 bg-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.2)]">
              {/* Fallback emoji / icon placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="text-7xl opacity-40 grayscale filter">🏫</span>
                <span className="text-xs font-bold uppercase tracking-widest text-white/40">Seven Hills Campus</span>
              </div>

              {/* Actual image — only shows if it loads, otherwise hidden */}
              <img
                src={content.imageSrc}
                alt={content.imageAlt ?? content.title}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-0"
                onLoad={(e) => { e.currentTarget.classList.remove("opacity-0"); }}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
