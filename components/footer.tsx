import Link from "next/link";
import Image from "next/image";
import { footerLinks, site, socialLinks } from "@/data/site";

type SocialPlatform = (typeof socialLinks)[number]["platform"];

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  const className = "h-4 w-4";

  if (platform === "Facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M13.5 21v-7.7h2.6l.4-3h-3V8.4c0-.86.24-1.45 1.48-1.45h1.58V4.26A21.1 21.1 0 0 0 14.25 4c-2.29 0-3.86 1.4-3.86 3.96v2.21H7.8v3h2.59V21h3.11Z" />
      </svg>
    );
  }

  if (platform === "Instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="17.2" cy="6.8" r="0.7" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (platform === "YouTube") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M21.6 7.2a3 3 0 0 0-2.1-2.12C17.64 4.58 12 4.58 12 4.58s-5.64 0-7.5.5A3 3 0 0 0 2.4 7.2 31.3 31.3 0 0 0 1.9 12a31.3 31.3 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.12c1.86.5 7.5.5 7.5.5s5.64 0 7.5-.5a3 3 0 0 0 2.1-2.12 31.3 31.3 0 0 0 .5-4.8 31.3 31.3 0 0 0-.5-4.8ZM10 15.42V8.58L15.8 12 10 15.42Z" />
      </svg>
    );
  }

  if (platform === "LinkedIn") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M6.7 8.8H3.8V20h2.9V8.8ZM5.25 4A1.69 1.69 0 1 0 5.2 7.38 1.69 1.69 0 0 0 5.25 4Zm15 9.57c0-3.01-1.6-4.41-3.74-4.41a3.22 3.22 0 0 0-2.91 1.6h-.04V8.8h-2.78V20h2.9v-5.55c0-1.46.28-2.88 2.09-2.88 1.78 0 1.8 1.67 1.8 2.97V20h2.9l-.02-6.43Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.53 4h2.75l-6.01 6.87L21.34 20H15.8l-4.34-5.67L6.5 20H3.74l6.43-7.35L3.4 4h5.68l3.92 5.18L17.53 4Zm-.96 14.39h1.52L8.25 5.53H6.62l9.95 12.86Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 bg-[#1a6b3a] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* School info */}
        <section>
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-white/30 bg-white/15">
            <Image src={site.logo} alt={`${site.name} logo`} width={64} height={64} className="h-full w-full object-cover" />
          </div>
          <h2 className="text-xl font-semibold text-white">{site.name}</h2>
          <p className="mt-3 text-sm font-medium leading-7 text-white/75">{site.address}</p>
          <p className="mt-2 text-sm font-medium text-white/75">Email: {site.email}</p>
          <div className="mt-2 text-sm font-medium text-white/75">
            <p>Phone:</p>
            <div className="mt-1 space-y-1">
              {site.phones.map((phone: string) => (
                <p key={phone}>{phone}</p>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="sticker bg-[#f59e0b] text-[#0f2318]">Follow Us</h3>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.platform}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white/80 transition hover:-translate-y-0.5 hover:bg-[#f59e0b] hover:text-[#0f2318] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a6b3a]"
                >
                  <SocialIcon platform={item.platform} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section>
          <h3 className="sticker bg-[#f59e0b] text-[#0f2318]">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.quick.map((item: { label: string; href: string }) => (
              <li key={item.href}>
                <Link className="text-sm font-bold text-white/75 hover:text-[#f59e0b] transition" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Admissions links */}
        <section>
          <h3 className="sticker bg-[#38bdf8] text-[#0f2318]">Admissions</h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.admissions.map((item: { label: string; href: string }) => (
              <li key={item.href}>
                <Link className="text-sm font-bold text-white/75 hover:text-[#38bdf8] transition" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Admissions CTA card */}
        <section className="self-start rounded-[1.5rem] bg-[#f59e0b] p-5 text-[#0f2318] shadow-[0_18px_44px_rgba(245,158,11,0.25)]">
          <h3 className="text-xl font-semibold text-[#0f2318]">Admissions Open</h3>
          <p className="mt-3 text-sm font-semibold leading-7 text-[#0f2318]/80">
            Give your child a confident, future-ready start with Seven Hills English Medium School.
          </p>
          <Link href="/admissions" className="btn-secondary mt-4 !border-[#0f2318] !text-[#0f2318] hover:!bg-white/40 !px-4 !py-2">
            Apply Now
          </Link>
        </section>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs font-bold text-white/50">
        © {new Date().getFullYear()} {site.shortName}. All rights reserved.
      </div>
    </footer>
  );
}
