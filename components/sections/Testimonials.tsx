import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-sage py-24 text-ink sm:py-32">
      <span
        aria-hidden="true"
        className="script pointer-events-none absolute -right-8 top-6 select-none text-[16rem] leading-none text-ink/[0.04] sm:text-[24rem]"
      >
        words
      </span>

      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="09">Testimonials</SectionLabel>
            <h2 className="display-soft mt-4 text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[0.98]">
              The emails
              <br />
              <em className="italic">after launch.</em>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-sm text-sm leading-relaxed text-ink/65">
              The nicest part of the job is the note that arrives a week after
              the reel goes live. A few of them, from recent collaborations.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 0.07} className="h-full">
              <figure className="flex h-full flex-col border border-ink/15 bg-paper/75 p-6 sm:p-7">
                <div className="flex items-start justify-between">
                  <Quote className="size-5 text-clay" strokeWidth={1.3} />
                  <span className="label text-[7px] text-ink/45">
                    0{index + 1}
                  </span>
                </div>
                <blockquote className="display-soft mt-7 text-[clamp(1.25rem,1.7vw,1.5rem)] leading-[1.35]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-ink/15 pt-5">
                  <span className="script grid size-9 place-items-center rounded-full bg-ink text-sm text-paper">
                    {testimonial.author.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium">
                      {testimonial.author}
                    </span>
                    <span className="label block text-[7px] text-ink/55">
                      {testimonial.role}, {testimonial.brand}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-1 text-[10px] text-ink/55 sm:flex-row sm:items-center sm:justify-between">
          <p>A few notes from recent collaborations.</p>
          <p className="label text-[7px]">More references on request</p>
        </div>
      </div>
    </section>
  );
}
