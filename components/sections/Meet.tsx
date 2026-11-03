"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useLenis } from "@/components/ui/SmoothScroll";
import { site } from "@/lib/site";

export function Meet() {
  const lenis = useLenis();
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
          <div className="order-2 lg:order-1 lg:col-span-5">
            <Reveal>
              <figure className="mx-auto w-full max-w-[430px]">
                <div className="border border-ink/15 bg-paper p-2 shadow-[0_30px_70px_-50px_rgba(23,19,16,0.55)]">
                  <img
                    src="/images/meet-manali.webp"
                    alt="Manali Jagtap laughing and waving on a Mumbai road"
                    loading="lazy"
                    className="grade aspect-[4/5] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-ink/15 pt-3">
                  <span className="label text-[8px] text-ink-soft">
                    Manali, off-duty
                  </span>
                  <span className="label text-[8px] text-ink-soft">
                    Mumbai, India
                  </span>
                </figcaption>
              </figure>
            </Reveal>
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
