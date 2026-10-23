import type { Profile } from "@/lib/types";

export function Services({ profile }: { profile: Profile }) {
  return (
    <section id="services" className="page-x py-24 sm:py-32">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-[clamp(3rem,15vw,6rem)] leading-[0.92] font-extrabold tracking-[-0.04em] 2xl:text-[7rem]">
            How can
            <br />
            <span className="text-accent">I help?</span>
          </h2>

          <div className="mt-14 space-y-9">
            {profile.skills.map((group) => (
              <div key={group.category}>
                <h3 className="eyebrow mb-4 text-muted">{group.category}</h3>
                <Chips items={group.skills} />
              </div>
            ))}
          </div>
        </div>

        <ol className="border-t border-line">
          {profile.services.map((service, i) => (
            <li
              key={service.title}
              className="grid grid-cols-[3rem_1fr] border-b border-line py-12 sm:grid-cols-[5.5rem_1fr]"
            >
              <span className="eyebrow pt-3 text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-3xl font-bold tracking-[-0.03em] sm:text-5xl">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="eyebrow rounded-full border border-foreground/25 px-4 py-2.5 text-[0.68rem] text-foreground transition-colors hover:border-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
