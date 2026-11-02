import { ArrowUpRight } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { SmoothLink } from "@/components/ui/SmoothLink";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { insights } from "@/lib/site";

const places = [
  "Mumbai",
  "Goa",
  "Rishikesh",
  "Haridwar",
  "Karjat",
  "Pune",
  "Udaipur",
];

export function Reach() {
  return (
    <section id="reach" className="relative overflow-hidden bg-teal text-paper">
      <img
        src="/images/reach-bg.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-teal via-teal/90 to-teal/50" />

      <div className="container-x relative py-24 sm:py-28 lg:py-32">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-paper/15 pb-5">
          <SectionLabel index="03" light>
            Audience reach
          </SectionLabel>
          <span className="label text-[8px] text-paper/45">
            Instagram · last 30 days
          </span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="script text-[clamp(2rem,4vw,3.2rem)] text-gold">
              the reach
            </p>
            <h2 className="display mt-1 text-[clamp(6rem,20vw,18rem)] leading-[0.78]">
              525K
            </h2>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-t border-paper/20 pt-3">
              <p className="display-soft text-[clamp(1.6rem,3vw,2.4rem)] italic">
                views in 30 days.
              </p>
              <p className="label text-[8px] text-paper/45">
                ~{insights.dailyAverage} a day
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-relaxed text-paper/70">
              That&apos;s thousands of people meeting your brand while
              they&apos;re already dreaming about their next trip, table or
              stay. Not interrupting the scroll — becoming part of it.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-paper/15 pt-5">
              <div>
                <p className="display text-2xl leading-none">
                  {insights.nonFollowerPct}
                </p>
                <p className="label mt-2 text-[7px] text-paper/45">
                  non-follower views
                </p>
              </div>
              <div>
                <p className="display text-2xl leading-none">
                  {insights.profileVisits}
                </p>
                <p className="label mt-2 text-[7px] text-paper/45">
                  profile visits
                </p>
              </div>
              <div>
                <p className="display text-2xl leading-none">
                  {insights.followers}
                </p>
                <p className="label mt-2 text-[7px] text-paper/45">
                  followers
                </p>
              </div>
              <div>
                <p className="display text-2xl leading-none">
                  {insights.posts}
                </p>
                <p className="label mt-2 text-[7px] text-paper/45">
                  posts published
                </p>
              </div>
            </div>

            <SmoothLink
              href="#insights"
              className="group mt-7 inline-flex items-center gap-2 text-paper/70 transition-colors hover:text-paper"
            >
              <span className="label link-line text-[8px]">
                See the full dashboard
              </span>
              <ArrowUpRight
                className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.4}
              />
            </SmoothLink>
          </div>
        </div>
      </div>

      <div className="relative border-t border-paper/15 py-4">
        <Marquee speed={50}>
          {places.map((place) => (
            <span key={place} className="flex items-center">
              <span className="display whitespace-nowrap px-6 text-[1.1rem] text-paper/55 sm:text-[1.3rem]">
                {place}
              </span>
              <span className="text-[0.65rem] text-gold/70" aria-hidden="true">
                ✳
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
