import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { FocusBand } from "@/components/focus-band";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { profile } from "@/lib/profile";

export default function Home() {
  return (
    <>
      <Header name={profile.name} />
      <main className="flex-1">
        <Hero profile={profile} />
        <Services profile={profile} />
        <FocusBand words={profile.focus} />
        <Experience items={profile.experience} education={profile.education} />
        <Contact profile={profile} />
      </main>
    </>
  );
}
