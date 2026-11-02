"use client";

import { ArrowUpRight, Play } from "lucide-react";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { useReelPlayer } from "@/components/ui/ReelPlayerProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLenis } from "@/components/ui/SmoothScroll";
import { site } from "@/lib/site";

export function Meet() {
  const lenis = useLenis();
  const { openReel } = useReelPlayer();

  const goToVideos = () => {
    const el = document.querySelector("#videos");
    if (!el) return;
    if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -20 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-36"
    >
      <div className="container-x">
        <SectionLabel index="01">Meet the creator</SectionLabel>

        <div className="mt-12 grid gap-16 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <div className="relative order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[340px]">
              <Reveal>
                <PhoneFrame>
                  <button
                    type="button"
                    onClick={() =>
                      openReel({
                        title: "Intro film",
                        brand: "Manali Jagtap",
                        image: "/images/intro.webp",
                        duration: "0:42",
                        type: "Intro film",
                      })
                    }
                    className="group relative block aspect-[9/16] w-full overflow-hidden text-left"
                    data-cursor="Play intro"
                    aria-label="Open Manali's intro film"
                  >
                    <img
                      src="/images/intro.webp"
                      alt="Manali on a Goa beach at sunset"
                      loading="lazy"
                      className="grade h-full w-full object-cover transition-transform duration-[1100ms] group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/25" />
                    <span className="chip absolute left-3 top-7 border-paper/30 bg-ink/25 text-[7px] text-paper backdrop-blur">
                      Intro film
                    </span>
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="grid size-14 place-items-center rounded-full border border-paper/50 bg-paper/10 text-paper backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:bg-paper group-hover:text-ink">
                        <Play className="ml-0.5 size-4 fill-current" />
                      </span>
                    </div>
                    <div className="absolute inset-x-4 bottom-4">
                      <p className="script text-2xl text-paper">
                        hi, I&apos;m Manali
                      </p>
                      <div className="mt-2 flex items-center justify-between border-t border-paper/20 pt-2">
                        <span className="label text-[7px] text-paper/60">
                          Goa, India
                        </span>
                        <span className="label text-[7px] text-paper/60">
                          0:42
                        </span>
                      </div>
                    </div>
                  </button>
                </PhoneFrame>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="absolute -right-4 top-14 w-24 rotate-[7deg] border-4 border-paper bg-paper shadow-[0_16px_40px_-22px_rgba(23,19,16,0.5)] sm:-right-8 sm:w-28">
                  <img
                    src="/images/about-detail.webp"
                    alt="Manali exploring a travel town with a backpack"
                    className="grade aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                  <p className="label px-1.5 py-1.5 text-[6px] text-ink-soft">
                    somewhere new
                  </p>
                </div>
              </Reveal>
            </div>

            <p className="label mt-6 text-center text-[8px] text-ink-soft">
              Intro film — 0:42 · tap to open
            </p>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="script text-[clamp(2rem,3.4vw,2.9rem)] text-clay">
                Hello, I&apos;m
              </p>
              <h2 className="display-soft mt-1 text-[clamp(2.8rem,5.4vw,4.8rem)] leading-[0.98]">
                Manali Jagtap<span className="text-clay">.</span>
              </h2>
            </Reveal>

            <div className="mt-6 space-y-4">
              {site.bio.map((paragraph, index) => (
                <Reveal key={index} delay={0.08 + index * 0.06}>
                  <p className="body-copy max-w-[36rem]">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.22}>
              <div className="mt-6 flex flex-wrap gap-2">
                {site.tags.map((tag) => (
                  <span key={tag} className="chip text-[8px]">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <dl className="mt-8 border-t border-ink/15">
                <div className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-3">
                  <dt className="label text-[8px] text-ink-soft">Based in</dt>
                  <dd className="text-sm">{site.location}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-3">
                  <dt className="label text-[8px] text-ink-soft">
                    Creating since
                  </dt>
                  <dd className="text-sm">{site.since} — present</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-3">
                  <dt className="label text-[8px] text-ink-soft">Foodie side</dt>
                  <dd className="text-sm">
                    <a
                      href={site.foodInstagram}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="link-line"
                    >
                      {site.foodHandle}
                    </a>
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-3">
                  <dt className="label text-[8px] text-ink-soft">Currently</dt>
                  <dd className="text-sm">{site.availability}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-end justify-between gap-5">
                <div>
                  <p className="script text-4xl">Manali</p>
                  <p className="label mt-1 text-[8px] text-ink-soft">
                    Travel · Lifestyle · UGC
                  </p>
                </div>
                <button
                  type="button"
                  onClick={goToVideos}
                  className="group flex items-center gap-2 text-sm"
                >
                  <span className="link-line">See what I&apos;ve made</span>
                  <ArrowUpRight
                    className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.4}
                  />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
