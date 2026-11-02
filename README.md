# Manali Jagtap — UGC Portfolio

A travel/lifestyle UGC portfolio for **Manali Jagtap** — Mumbai-based creator and foodie behind [@manalijagtap_13](https://www.instagram.com/manalijagtap_13/) and [@forking_aroundddd](https://www.instagram.com/forking_aroundddd/).

Built as a one-page media kit for brands: cover reels, creator intro, Instagram insights, reach statement, concept themes, best-performing videos, circle stats, past partnerships and direct contact actions.

> **Demo note:** photography is placeholder stock. The three brand collab reels (OneGummy, MARS, Casa Regal) are Manali's actual posts and play on-site. The intro film and five travel reels currently open a private-preview panel until their video files are added. Brand logos are from Instagram/official sources, and the email/phone are dummy values. Replace the sample demographics and engagement rate before launch.

## Sections

- **Cover** — UGC Portfolio title, name, Instagram + food handles, three vertical reel thumbnails, stat strip
- **01 Meet the creator** — Hello, I'm Manali, bio, vertical intro film
- **02 Insights** — Instagram-style dashboard: views, followers, net followers, non-follower views, age / locations / gender, highlight badge
- **03 Audience reach** — 525K views in 30 days statement slide
- **04 Concept themes** — Reviews, Unboxing, GRWM, Shopping haul, Travel reels, Stay tours, Café & food
- **05 Best videos** — eight phone-framed reels with views, brand and content type; in-site player
- **06 Key stats** — four circular badges
- **07 Previous partnerships** — real brand logo list with links and collab status, plus a featured Casa Regal stay-tour reel
- **08 Contact** — Instagram DM, email and WhatsApp actions

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 with a custom cream / teal / terracotta editorial system
- Motion for reveals, parallax, counters and the reel player
- Lenis for smooth scrolling
- Bodoni Moda (display), Jost (UI/body), Mrs Saint Delafield (script)

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm start
npm run typecheck
```

Add `?nopreload=1` to skip the intro animation.

## In-site reel player

The three live collab reels are served locally from `public/videos/` as both MP4 and WebM:

| Reel | MP4 | WebM | Starts at |
| --- | --- | --- | --- |
| OneGummy | `onegummy.mp4` | `onegummy.webm` | 2s |
| MARS | `mars.mp4` | `mars.webm` | 2s |
| Casa Regal | `casa-regal.mp4` | `casa-regal.webm` | 6s |

`startAt` in `lib/site.ts` sets the playback offset in seconds. The player never redirects. Reel cards without a local video (the five travel films and the intro film) open an in-site “full film on request” panel with a contact CTA.

To make those playable, add their MP4/WebM files to `public/videos/` and add `video`, `webm` and `startAt` to the matching entries in `videos` (`lib/site.ts`).

## Editing content

Everything is in `lib/site.ts`:

- `site` — name, handles, tagline, bio, location, email, phone, availability
- `coverStats` — the four numbers on the cover
- `insights` — dashboard metrics, age brackets, locations, gender split
- `themes` — the seven concept cards
- `videos` — best reels: titles, brands, types, view counts, images, local video paths, start times
- `moreBrandWork` — the Maybelline in-progress strip
- `keyStats` — the four circle badges
- `partners` — brand logos, profile links and collab status
- `navLinks` — navigation

### Placeholders to replace

- **Travel reel videos** — five travel cards and the intro film need local MP4/WebM files before they can play; currently they show the private-preview panel.
- **Insights demographics** — age/location/gender percentages are sample values; replace with screenshots or real numbers.
- **Engagement rate** — `keyStats` uses 9.2% as a placeholder.
- **Brand logos** — OneGummy, Maybelline and Casa Regal use their Instagram avatars; MARS uses the official white wordmark. Add approved logo files if the brand teams provide them.
- **Email and WhatsApp** — `hello@manalijagtap.com` and `+91 98200 00013` are dummy values.
- **Images** — replace files in `public/images/` (`.webp`) or update image paths in `lib/site.ts`.

## Partnerships

| Brand | Status | Link |
| --- | --- | --- |
| OneGummy | Collab live | [Instagram](https://www.instagram.com/onegummy/) · [reel](https://www.instagram.com/reel/Dc5DnGSzqmT/) |
| MARS Cosmetics | Collab live | [Instagram](https://www.instagram.com/reachedmars/) · [post](https://www.instagram.com/p/Dd0RtuvBbut/) |
| Maybelline New York | Content in progress | [Instagram](https://www.instagram.com/maybelline_ind/) |
| Casa Regal | Collab live | [Website](https://casaregal.in/) · [reel](https://www.instagram.com/reel/DXRqGQOCkkK/) |

## Structure

```
app/                 layout, page composition, global styles
components/sections/ Cover, Meet, Insights, Reach, Themes, Videos,
                     KeyStats, Partners, Contact, Footer
components/ui/       Nav, Preloader, PhoneFrame, ReelCard, ReelPlayerProvider,
                     Cursor, Grain, SmoothScroll, SmoothLink, Marquee, Reveal,
                     Magnetic, SectionLabel, icons
lib/site.ts          all content and placeholder data
public/images/       dummy campaign imagery and brand logos
public/videos/       local MP4 + WebM reels for in-site playback
```

## Credits

Placeholder photography from [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/) (free-to-use licenses). Brand collab reels belong to Manali Jagtap and the respective brands. Typefaces via Google Fonts through `next/font`.
