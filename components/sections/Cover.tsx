"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { useRef } from "react";
import { useIntro } from "@/components/ui/IntroContext";
import { Magnetic } from "@/components/ui/Magnetic";
import { Marquee } from "@/components/ui/Marquee";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { useReelPlayer } from "@/components/ui/ReelPlayerProvider";
import { MaskLines } from "@/components/ui/Reveal";
import { useLenis } from "@/components/ui/SmoothScroll";
import { coverStats, site } from "@/lib/site";

const coverReels = [
  {
    image: "/images/cover-aarti.webp",
    place: "Haridwar",
    views: "793K",
    tilt: "-rotate-[1.5deg]",
  },
  {
    image: "/images/partner-featured.webp",
    place: "Casa Regal",
    views: "24.6K",
    video: "/videos/casa-regal.mp4",
    webm: "/videos/casa-regal.webm",
    startAt: 6,
    tilt: "rotate-[0.8deg]",
  },
  {
    image: "/images/video-mars.webp",
    place: "MARS",
    views: "13.1K",
    video: "/videos/mars.mp4",
    webm: "/videos/mars.webm",
    startAt: 2,
    tilt: "-rotate-[0.6deg]",
  },
];

const tickerItems = [
  "Travel stories",
  "Food features",
  "Beauty edits",
  "Fashion hauls",
  "Brand campaigns",
];

export function Cover() {
  const { ready } = useIntro();
  const { openReel } = useReelPlayer();
  const lenis = useLenis();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const phonesY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const scrollTo = (target: string) => {
    const element = document.querySelector(target);
    if (!element) return;
    if (lenis) lenis.scrollTo(element as HTMLElement, { offset: -20 });
    else element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="home"
        className="relative overflow-hidden pb-10 pt-24 sm:pt-28 lg:pb-12 lg:pt-32"
      >
        <div className="container-x">
          <motion.div
            className="flex items-center justify-between gap-4 border-b border-ink/15 pb-4"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <p className="label">The Creator Edit — 2026</p>
            <p className="label hidden text-ink-soft sm:block">
              Mumbai, India · Available worldwide
            </p>
            <p className="label text-ink-soft sm:hidden">Mumbai, IN</p>
          </motion.div>

          <div className="grid gap-10 pt-8 lg:grid-cols-12 lg:gap-8 lg:pt-10">
            <div className="relative z-10 lg:col-span-6">
              <motion.p
                className="label text-clay"
                initial={{ opacity: 0, y: 8 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Travel · Food · Beauty · Lifestyle
              </motion.p>

              <h1 className="mt-4">
                <MaskLines
                  play={ready}
                  delay={0.22}
                  lines={[
                    <span key="portfolio" className="display">
                      PORTFOLIO
                    </span>,
                  ]}
                  lineClassName="text-[clamp(3.2rem,7.8vw,7rem)] leading-[0.78]"
                />
                <span className="flex flex-wrap items-end gap-x-5">
                  <MaskLines
                    play={ready}
                    delay={0.34}
                    lines={[
                      <span key="name" className="script text-clay">
                        Manali Jagtap
                      </span>,
                    ]}
                    lineClassName="text-[clamp(2.8rem,6.4vw,5.8rem)] leading-[0.9]"
                  />
                </span>
              </h1>

              <motion.div
                className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2"
                initial={{ opacity: 0, y: 14 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.6 }}
              >
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-1.5"
                  data-cursor="Follow"
                >
                  <span className="label link-line text-[9px]">
                    {site.handle}
                  </span>
                  <ArrowUpRight
                    className="size-3.5 text-ink-soft transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.4}
                  />
                </a>
                <span className="hidden h-3 w-px bg-ink/20 xl:block" />
                <a
                  href={site.foodInstagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label text-[8px] text-ink-soft transition-colors hover:text-ink"
                >
                  foodie: {site.foodHandle}
                </a>
              </motion.div>

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 18 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.72 }}
              >
                <p className="display-soft max-w-[30rem] text-[clamp(1.35rem,2.3vw,1.85rem)] italic leading-[1.35] text-clay">
                  {site.tagline}
                </p>
                <p className="body-copy mt-3 max-w-[31rem]">
                  Travel, food, beauty and lifestyle content for brands that want to
                  feel like a recommendation — not an advertisement.
                </p>
              </motion.div>

              <motion.div
                className="mt-7 flex flex-wrap items-center gap-2"
                initial={{ opacity: 0 }}
                animate={ready ? { opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.82 }}
              >
                {site.tags.map((tag) => (
                  <span key={tag} className="chip text-[8px]">
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div
                className="mt-7 flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 14 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.9 }}
              >
                <Magnetic>
                  <button
                    type="button"
                    onClick={() => scrollTo("#videos")}
                    className="btn btn--solid"
                    data-cursor="Watch"
                  >
                    Watch the reels
                    <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
                  </button>
                </Magnetic>
                <Magnetic>
                  <button
                    type="button"
                    onClick={() => scrollTo("#contact")}
                    className="btn"
                  >
                    Work with me
                  </button>
                </Magnetic>
              </motion.div>
            </div>

            <div className="relative lg:col-span-6">
              <motion.div
                className="mb-4 flex items-center justify-between border-b border-ink/10 pb-3"
                initial={{ opacity: 0 }}
                animate={ready ? { opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.55 }}
              >
                <span className="label text-[8px] text-ink-soft">
                  Recently on the grid
                </span>
                <span className="label text-[8px] text-ink-soft">
                  03 reels
                </span>
              </motion.div>

              <motion.div
                className="grid grid-cols-3 items-start gap-2.5 sm:gap-3"
                style={{ y: phonesY }}
              >
                {coverReels.map((reel, index) => (
                  <motion.button
                    key={reel.place}
                    type="button"
                    onClick={() =>
                      openReel({
                        title: `${reel.place} reel`,
                        brand: reel.place,
                        image: reel.image,
                        views: reel.views,
                        type: "Reel",
                        video: reel.video,
                        webm: reel.webm,
                        startAt: reel.startAt,
                      })
                    }
                    className={`group block text-left ${reel.tilt} ${
                      index === 1 ? "mt-7 sm:mt-10" : index === 2 ? "mt-2" : ""
                    }`}
                    initial={{ opacity: 0, y: 36 }}
                    animate={ready ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.9,
                      delay: 0.6 + index * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    data-cursor="Play reel"
                    aria-label={`Play the ${reel.place} reel`}
                  >
                    <PhoneFrame className="transition-transform duration-700 group-hover:rotate-0 group-hover:scale-[1.02]">
                      <div className="relative aspect-[9/16] overflow-hidden">
                        <img
                          src={reel.image}
                          alt={`${reel.place} reel`}
                          loading="eager"
                          className="grade h-full w-full object-cover transition-transform duration-[1100ms] group-hover:scale-[1.06]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
                        <div className="absolute inset-0 grid place-items-center">
                          <span className="grid size-9 place-items-center rounded-full border border-paper/50 bg-paper/10 text-paper backdrop-blur-sm transition-colors duration-500 group-hover:bg-paper group-hover:text-ink">
                            <Play className="ml-0.5 size-3 fill-current" />
                          </span>
                        </div>
                        <div className="absolute inset-x-2.5 bottom-3 flex items-center justify-between gap-1">
                          <span className="label text-[7px] text-paper/85">
                            {reel.place}
                          </span>
                          <span className="label text-[7px] text-paper/60">
                            {reel.views}
                          </span>
                        </div>
                      </div>
                    </PhoneFrame>
                  </motion.button>
                ))}
              </motion.div>

              <motion.div
                className="mt-5 flex items-center justify-between border-t border-ink/10 pt-3"
                initial={{ opacity: 0 }}
                animate={ready ? { opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 1.05 }}
              >
                <span className="label text-[8px] text-ink-soft">
                  Haridwar · Casa Regal · MARS
                </span>
                <button
                  type="button"
                  onClick={() => scrollTo("#videos")}
                  className="label link-line text-[8px]"
                >
                  See all reels
                </button>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-12 grid grid-cols-2 divide-y divide-ink/10 border-y border-ink/15 sm:grid-cols-4 sm:divide-x sm:divide-y-0"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.1 }}
          >
            {coverStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-3 py-5 sm:px-5 ${
                  index === 0 ? "sm:pl-0" : ""
                }`}
              >
                <p className="display text-[clamp(1.8rem,3vw,2.5rem)] leading-none">
                  {stat.value}
                </p>
                <p className="label mt-2 text-[8px] text-ink-soft">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.button
            type="button"
            onClick={() => scrollTo("#about")}
            className="mt-6 flex items-center gap-2 text-ink-soft transition-colors hover:text-ink"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 1.2 }}
          >
            <span className="label text-[8px]">Scroll to meet the creator</span>
            <motion.span
              animate={ready ? { y: [0, 5, 0] } : {}}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="size-3.5" strokeWidth={1.5} />
            </motion.span>
          </motion.button>
        </div>
      </section>

      <div className="border-y border-teal/20 bg-teal py-4 text-paper">
        <Marquee speed={46}>
          {tickerItems.map((item) => (
            <span key={item} className="flex items-center">
              <span className="display whitespace-nowrap px-6 text-[1.35rem] tracking-[-0.02em] sm:text-[1.75rem]">
                {item}
              </span>
              <span className="text-[1rem] text-gold" aria-hidden="true">
                ✳
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </>
  );
}
