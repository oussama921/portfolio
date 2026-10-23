import { formatMonth } from "@/lib/format";
import type { Education, Experience as ExperienceItem } from "@/lib/types";

// Below lg each record is two lines (title + years, then a details line);
// from lg up it becomes a table row. DOM order matches the lg column order.
const row =
  "grid grid-cols-[1fr_auto] gap-x-6 gap-y-1.5 lg:grid-cols-[2.2fr_1.2fr_0.9fr_1fr_1.5rem] lg:items-center lg:gap-6";
const titleCell =
  "col-start-1 row-start-1 text-lg font-semibold tracking-tight sm:text-xl lg:col-start-auto lg:row-start-auto";
const yearsCell =
  "eyebrow col-start-2 row-start-1 pt-1.5 text-right text-[0.7rem] whitespace-nowrap lg:col-start-auto lg:row-start-auto lg:pt-0 lg:text-left lg:text-[0.75rem]";
const wideCell = "hidden text-lg lg:block";
const compactDetails = "col-span-2 row-start-2 opacity-70 lg:hidden";

export function Experience({
  items,
  education,
}: {
  items: ExperienceItem[];
  education: Education[];
}) {
  return (
    <section id="experience" className="page-x py-24 sm:py-32">
      <SectionTitle title="Experience" count={items.length} label="Work history" />

      <div className="eyebrow hidden border-y border-line py-6 text-muted lg:grid lg:grid-cols-[2.2fr_1.2fr_0.9fr_1fr_1.5rem] lg:gap-6">
        <span>Role</span>
        <span>Company</span>
        <span>Years</span>
        <span>Location</span>
      </div>

      <div className="border-t border-line lg:border-t-0">
        {items.map((job) => (
          <details
            key={`${job.company}-${job.start}`}
            className="group border-b border-line"
          >
            <summary
              className={`${row} cursor-pointer list-none py-6 transition-all duration-300 hover:bg-ink hover:px-5 hover:text-white group-open:bg-ink group-open:px-5 group-open:text-white sm:py-7 [&::-webkit-details-marker]:hidden`}
            >
              <span className={titleCell}>{job.role}</span>
              <span className={wideCell}>{job.company}</span>
              <span className={yearsCell}>
                {job.start.slice(0, 4)} — {job.end ? job.end.slice(0, 4) : "Now"}
              </span>
              <span className={wideCell}>{job.location}</span>
              <span
                aria-hidden
                className="hidden text-xl text-accent transition-transform duration-300 group-open:rotate-90 lg:block"
              >
                ↗
              </span>
              <span className={compactDetails}>
                {job.company} · {job.location}
              </span>
            </summary>

            <div className="grid gap-6 bg-ink px-5 pt-2 pb-10 text-white lg:grid-cols-[2.2fr_3.1fr]">
              <p className="eyebrow text-white/50">
                {formatMonth(job.start)} — {job.end ? formatMonth(job.end) : "Present"}
              </p>
              <div>
                <ul className="space-y-3 text-[0.95rem] leading-relaxed text-white/80">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="eyebrow rounded-full border border-white/25 px-3 py-1.5 text-[0.62rem]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        ))}
      </div>

      <div className="mt-28">
        <SectionTitle title="Education" count={education.length} label="Degrees" />
        <div className="border-t border-line">
          {education.map((edu) => (
            <div key={edu.school} className={`${row} border-b border-line py-6 sm:py-7`}>
              <span className={titleCell}>{edu.degree}</span>
              <span className={wideCell}>{edu.school}</span>
              <span className={yearsCell}>
                {edu.start} — {edu.end}
              </span>
              <span className={compactDetails}>{edu.school}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({
  title,
  count,
  label,
}: {
  title: string;
  count: number;
  label: string;
}) {
  return (
    <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
      <h2 className="font-display text-[clamp(2.75rem,13vw,6rem)] leading-none font-extrabold tracking-[-0.04em] 2xl:text-[7rem]">
        {title}
        <sup className="ml-1 align-super font-sans text-lg font-normal tracking-normal text-accent sm:text-2xl">
          ({count})
        </sup>
      </h2>
      <p className="eyebrow flex items-center gap-3 pb-2 text-muted">
        <span aria-hidden className="text-lg text-accent">
          ✱
        </span>
        {label}
      </p>
    </div>
  );
}
