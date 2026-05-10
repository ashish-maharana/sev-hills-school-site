"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, site } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-[#1a6b3a] bg-white/92 backdrop-blur-xl shadow-[0_2px_16px_rgba(26,107,58,0.08)]">
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border-2 border-[#1a6b3a] bg-[#e6f4ea] shadow-[0_4px_14px_rgba(26,107,58,0.18)]">
            <span className="text-xl font-extrabold leading-none text-[#1a6b3a]">SH</span>
          </span>
          <div className="hidden sm:block">
            <span className="block text-base font-extrabold leading-tight text-[#0f2318] lg:text-lg">
              {site.name}
            </span>
            <span className="block text-xs font-semibold text-[#2d9653]">{site.location}</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-extrabold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3a] rounded-xl ${
                  active
                    ? "text-[#1a6b3a] bg-[#e6f4ea]"
                    : "text-[#3d5c47] hover:text-[#1a6b3a] hover:bg-[#f0f9f4]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-1 left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-[#1a6b3a]" />
                )}
              </Link>
            );
          })}
          <Link href="/admissions" className="btn-primary ml-3 !py-2 !text-xs !rounded-xl">
            Apply Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#1a6b3a]/20 bg-white text-[#1a6b3a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a6b3a]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div className="border-t-2 border-[#1a6b3a]/10 bg-white px-4 py-4 lg:hidden">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-extrabold transition ${
                      active
                        ? "bg-[#e6f4ea] text-[#1a6b3a]"
                        : "text-[#3d5c47] hover:bg-[#f0f9f4] hover:text-[#1a6b3a]"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {active && <span className="h-2 w-2 rounded-full bg-[#1a6b3a]" />}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 border-t border-[#1a6b3a]/10 pt-4">
            <Link href="/admissions" className="btn-primary w-full justify-center !rounded-xl" onClick={() => setOpen(false)}>
              Apply Now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
