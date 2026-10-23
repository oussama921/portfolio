import Image from "next/image";
import portrait from "@/assets/oussama.jpg";
import type { Profile } from "@/lib/types";

export function Hero({ profile }: { profile: Profile }) {
  const stats = [
    { value: `${profile.yearsOfExperience}+`, label: "Years shipping software" },
    { value: String(profile.experience.length), label: "Teams & products" },
    { value: String(profile.languages.length), label: "Languages at C2" },
  ];

  return (
    <>
      <section
        id="top"
        className="relative h-svh min-h-[560px] overflow-hidden bg-black text-white"
      >
        {/* Portrait fades into the black background at its edges */}
        <div className="absolute inset-y-0 left-1/2 aspect-square h-full -translate-x-1/2 [mask-image:radial-gradient(closest-side,black_55%,transparent)]">
          <div className="size-full animate-portrait-in">
            <div className="relative size-full animate-float">
              <Image
                src={portrait}
                alt={profile.name}
                fill
                priority
                sizes="100vh"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name marquee running across the portrait; the difference blend shows the photo in negative through the letters */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-[52%] -translate-y-1/2 animate-rise overflow-hidden mix-blend-difference [animation-delay:1.9s]"
        >
          <div className="flex w-max animate-marquee">
            {[0, 1].map((copy) => (
              <span
                key={copy}
                className="pr-[0.3em] text-[15vw] leading-none font-medium tracking-tight whitespace-nowrap sm:text-[11vw]"
              >
                {profile.name} <span className="text-[0.5em] align-middle">●</span>
              </span>
            ))}
          </div>
        </div>
        <h1 className="sr-only">{profile.name}</h1>

        {/* Stacked (title above languages) until there's room for both corners side by side */}
        <div className="page-x absolute inset-x-0 bottom-0 flex flex-col-reverse gap-6 pb-8 sm:pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="animate-rise [animation-delay:2.5s]">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-white/60">
              Speaks
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xl font-light tracking-tight sm:flex-nowrap sm:gap-x-6 sm:text-3xl 2xl:text-4xl">
              {profile.languages.map((lang) => (
                <li key={lang.name} className="flex items-start gap-1.5">
                  {lang.name}
                  <span className="mt-1 rounded-full bg-accent px-1.5 py-0.5 text-[0.55rem] font-semibold tracking-[0.15em] text-white sm:text-[0.6rem]">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.25em]">
              Based in {profile.location}
            </p>
          </div>
          <p className="animate-rise text-3xl leading-[1.05] font-light tracking-tight whitespace-nowrap [animation-delay:2.3s] sm:text-5xl lg:text-right xl:text-6xl 2xl:text-7xl">
            {profile.title}
            <br />
            <span className="text-white/70">Angular · Spring Boot</span>
          </p>
        </div>
      </section>

      <section
        id="about"
        className="page-x pt-24 pb-8 sm:pt-32"
      >
        <p className="eyebrow flex items-center gap-3 text-muted">
          <span aria-hidden className="text-lg text-accent">
            ✱
          </span>
          About
        </p>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-24">
          <p className="font-display text-4xl leading-[1.05] font-bold tracking-[-0.03em] sm:text-5xl">
            I build end-to-end web products: Angular frontends, Spring Boot and
            Node.js services, and the CI/CD and cloud plumbing that ships them.
          </p>
          <div>
            <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="eyebrow inline-flex items-center gap-3 bg-foreground px-7 py-5 text-background transition-opacity hover:opacity-85"
              >
                Get in touch <span aria-hidden>→</span>
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="eyebrow inline-flex items-center gap-3 border border-foreground/25 px-7 py-5 transition-colors hover:border-foreground"
              >
                LinkedIn <span aria-hidden className="text-accent">↗</span>
              </a>
            </div>
          </div>
        </div>

        <dl className="mt-24 grid grid-cols-3 border-t border-line">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-line pt-8 pr-4 not-first:border-l not-first:pl-4 sm:not-first:pl-8"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-5xl font-extrabold tracking-[-0.04em] sm:text-7xl">
                {stat.value}
              </dd>
              <dd className="eyebrow mt-3 text-[0.62rem] text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
