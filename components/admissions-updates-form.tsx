import type { AdmissionsUpdatesContent } from "@/lib/types";

export function AdmissionsUpdatesForm({ content }: { content: AdmissionsUpdatesContent }) {
  return (
    <section className="rounded-[2rem] bg-[#1a6b3a] p-7 text-white shadow-[0_24px_64px_rgba(26,107,58,0.22)] sm:p-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">{content.title}</h2>
        <p className="mt-4 text-sm font-semibold leading-7 text-white/85">{content.description}</p>

        <form action="#" className="mt-7 space-y-3" aria-label="Admissions and updates subscription form">
          {content.fields.map((field) => (
            <label key={field.name} className="block">
              <span className="sr-only">{field.label}</span>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 text-sm font-bold text-white placeholder:text-white/60 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/30"
              />
            </label>
          ))}
          <label className="block">
            <span className="sr-only">{content.message.label}</span>
            <textarea
              name={content.message.name}
              rows={4}
              placeholder={content.message.placeholder}
              className="w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 text-sm font-bold text-white placeholder:text-white/60 outline-none transition focus:border-white/40 focus:ring-2 focus:ring-white/30"
            />
          </label>
          <button
            type="submit"
            className="btn-primary !bg-[#f59e0b] !text-[#0f2318] hover:!bg-[#fbbf24] focus-visible:!ring-white"
          >
            {content.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
