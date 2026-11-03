import {
  BedDouble,
  MapPinned,
  PackageOpen,
  ShoppingBag,
  Sparkles,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SmoothLink } from "@/components/ui/SmoothLink";
import { themes } from "@/lib/site";

const iconMap = {
  star: Star,
  package: PackageOpen,
  sparkles: Sparkles,
  bag: ShoppingBag,
  map: MapPinned,
  bed: BedDouble,
  food: UtensilsCrossed,
};

export function Themes() {
  return (
    <section id="themes" className="relative py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-8 border-t border-ink/15 pt-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="03">Concept themes</SectionLabel>
            <h2 className="display-soft mt-4 text-[clamp(2.8rem,5.8vw,5rem)] leading-[0.98]">
              What I make,
              <br />
              <em className="italic text-clay">and how it feels.</em>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="body-copy max-w-sm">
              Seven ways to put your brand in the middle of a story people
              actually want to watch. Every concept comes with a hook, a script
              and a shot list.
            </p>
          </div>
        </div>

        <div className="mt-12 grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme, index) => {
            const Icon = iconMap[theme.icon];
            return (
              <Reveal
                key={theme.title}
                delay={(index % 3) * 0.05}
                className="h-full"
              >
                <article className="group flex h-full flex-col border-b border-r border-ink/15 p-6 transition-colors duration-500 hover:bg-paper-2/70 lg:p-7">
                  <div className="flex items-start justify-between">
                    <span className="label text-[8px] text-ink-soft">
                      {theme.number}
                    </span>
                    <span className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors duration-500 group-hover:border-clay/30 group-hover:bg-clay group-hover:text-paper">
                      <Icon className="size-4" strokeWidth={1.4} />
                    </span>
                  </div>
                  <h3 className="display-soft mt-12 text-[clamp(1.5rem,2.2vw,1.9rem)] leading-tight">
                    {theme.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {theme.description}
                  </p>
                </article>
              </Reveal>
            );
          })}

          <Reveal delay={0.1} className="h-full sm:col-span-2">
            <div className="flex h-full flex-col justify-between border-b border-r border-ink/15 bg-teal p-6 text-paper sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <p className="script text-3xl text-gold">something else?</p>
                <span className="label text-[8px] text-paper/40">08</span>
              </div>
              <div className="mt-8">
                <p className="display-soft max-w-sm text-[clamp(1.5rem,2.2vw,1.9rem)] leading-tight">
                  Have a concept that doesn&apos;t fit a box? That&apos;s
                  usually the good one.
                </p>
                <SmoothLink
                  href="#contact"
                  className="label link-line mt-5 inline-block text-[8px] text-paper/70"
                >
                  Tell me the idea
                </SmoothLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
