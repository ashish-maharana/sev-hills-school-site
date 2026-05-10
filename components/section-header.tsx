export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="sticker bg-[#f59e0b] text-[#0f2318]">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f2318] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base font-medium leading-7 text-[#3d5c47]">{description}</p>
      ) : null}
    </div>
  );
}
