import type { Profile } from "@/lib/types";

export function Contact({ profile }: { profile: Profile }) {
  const { contact } = profile;

  return (
    <section id="contact" className="bg-ink text-white">
      <div className="page-x pt-24 sm:pt-32">
        <p className="eyebrow flex items-center gap-3 text-white/70">
          <span aria-hidden className="text-lg text-accent">
            ✱
          </span>
          Available for new opportunities
        </p>

        <h2 className="mt-10 font-display text-[clamp(2.75rem,12.5vw,10.5rem)] leading-[0.9] font-extrabold tracking-[-0.045em]">
          Let&apos;s build
          <br />
          something <span className="text-accent">great</span>
        </h2>

        <div className="mt-20 flex flex-col gap-12 pb-24 lg:flex-row lg:items-end lg:justify-between sm:pb-32">
          <p className="max-w-md text-xl leading-relaxed text-white/60">
            A role, a product, or an idea that still needs its first commit. If
            you think we can build it together, let&apos;s talk.
          </p>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
            <a
              href={`mailto:${contact.email}`}
              className="text-2xl font-semibold [overflow-wrap:anywhere] transition-colors hover:text-accent lg:whitespace-nowrap xl:text-3xl"
            >
              {contact.email}
            </a>
            <a
              href={`mailto:${contact.email}?subject=Hello%20Oussama`}
              className="eyebrow inline-flex items-center gap-4 border border-white/30 px-8 py-6 whitespace-nowrap transition-colors hover:border-white hover:bg-white hover:text-ink"
            >
              Start a conversation <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10">
        <div className="eyebrow page-x flex flex-col gap-4 py-8 text-white/60 sm:flex-row sm:justify-between">
          <span>Built by {profile.name}</span>
          <div className="flex gap-8">
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
              {contact.phone}
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
