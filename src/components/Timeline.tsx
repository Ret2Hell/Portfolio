import type { ExperienceData } from "../constants";

export const Timeline = ({ data }: { data: ExperienceData[] }) => {
  return (
    <section className="c-space mx-auto mt-2 max-w-7xl md:mt-4" aria-labelledby="experience-title">
      <h2 id="experience-title" className="text-heading">
        Professional Experience
      </h2>

      <div className="mt-10 border-t border-white/10 md:mt-14">
        {data.map((item, index) => (
          <article
            key={`${item.company}-${item.date}`}
            className="group grid gap-7 border-b border-white/10 py-9 md:grid-cols-[18rem_minmax(0,1fr)] md:gap-12 md:py-11 lg:grid-cols-[21rem_minmax(0,1fr)] lg:gap-16"
          >
            <header>
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.2em] text-neutral-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-8 bg-neutral-800 transition-colors duration-300 group-hover:bg-lavender/60" />
                <p className="text-sm text-neutral-500">{item.date}</p>
              </div>

              <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                {item.title}
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-lavender transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lavender"
                  aria-label={`${item.company} on LinkedIn (opens in a new tab)`}
                >
                  {item.company}
                  <svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </a>
                {item.location && (
                  <>
                    <span className="text-neutral-700">/</span>
                    <span className="text-sm text-neutral-500">{item.location}</span>
                  </>
                )}
              </div>
            </header>

            <ul className="space-y-4 md:border-l md:border-white/8 md:pl-10 lg:pl-12">
              {item.contents.map((content) => (
                <li key={content} className="grid grid-cols-[0.35rem_1fr] gap-4 text-neutral-400">
                  <span className="mt-[0.7rem] h-1.5 w-1.5 rounded-full bg-lavender/70" />
                  <span className="leading-7">{content}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
