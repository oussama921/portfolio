// Big scrolling band of core technologies, separated by accent squares.
export function FocusBand({ words }: { words: string[] }) {
  return (
    <div
      aria-label={words.join(", ")}
      className="overflow-hidden border-y border-line py-7 sm:py-9"
    >
      <div className="flex w-max animate-marquee items-center [animation-duration:45s]">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden className="flex items-center">
            {words.map((word) => (
              <li key={word} className="flex items-center">
                <span className="font-display text-5xl font-extrabold tracking-[-0.01em] uppercase [font-stretch:125%] sm:text-7xl">
                  {word}
                </span>
                <span className="mx-8 size-2.5 bg-accent sm:mx-14 sm:size-3" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
