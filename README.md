# Manali Jagtap — Creator Portfolio

A multi-category creator portfolio for **Manali Jagtap** — Mumbai-based creator and foodie behind [@manalijagtap_13](https://www.instagram.com/manalijagtap_13/) and [@forking_arounddd](https://www.instagram.com/forking_arounddd/).

Built as a one-page media kit for brands: cover reels, creator portrait, Instagram insights, concept themes, best-performing videos, past partnerships and direct contact actions.

> **Demo note:** photography is placeholder stock. The three brand collab reels (OneGummy, MARS, Casa Regal) are Manali's actual posts and play on-site. The three travel reels in the carousel currently open a private-preview panel until their video files are added. Brand logos are from Instagram/official sources. Dashboard figures are taken from Manali's Instagram screenshots for the 30 days ending 1 Nov 2026.

## Sections

- **Cover** — Portfolio title, name, Instagram + food handles, three vertical reel thumbnails
- **01 Meet the creator** — Hello, I'm Manali, bio and an off-duty portrait
- **02 Insights** — Instagram-style dashboard: views, followers, net followers, viewers, age / top cities / languages, reel-share panel
- **03 Concept themes** — Reviews, Unboxing, GRWM, Fashion & shopping, Travel reels, Stay tours, Café & food
- **04 Best videos** — five phone-framed reels in a draggable arc carousel; in-site player
- **05 Previous partnerships** — real brand logo list with links and collab status, plus a featured Casa Regal stay-tour reel
- **Footer / Contact** — email, Instagram DM, WhatsApp and contact details

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 with a custom cream / teal / terracotta editorial system
- Motion for reveals, parallax, counters and the reel player
- GSAP + ScrollTrigger for the scroll-linked arc flow
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

`startAt` in `lib/site.ts` sets the playback offset in seconds. The player never redirects. Reel cards without a local video (the three travel films) open an in-site “full film on request” panel with a contact CTA.

To make those playable, add their MP4/WebM files to `public/videos/` and add `video`, `webm` and `startAt` to the matching entries in `videos` (`lib/site.ts`).

## Reel arc carousel

The Best Videos section uses a draggable arc carousel of five reels. Cards are positioned on a 15° arc with a radius of four card widths. As the page scrolls, GSAP ScrollTrigger gently flows the whole arc to the right. Drag/swipe horizontally, use the arrow buttons, or focus the carousel and use the left/right arrow keys. The center card is the active reel; tap it to open the in-site player. Edit the `videos` array in `lib/site.ts` to change the five reels.

## Editing content

Everything is in `lib/site.ts`:

- `site` — name, handles, tagline, bio, location, email, phone, availability
- `insights` — dashboard metrics, age brackets, top cities, languages, reel/story views
- `themes` — the seven concept cards
- `videos` — the five carousel reels: titles, brands, types, view counts, images, local video paths, start times
- `moreBrandWork` — the Maybelline in-progress strip
- `partners` — brand logos, profile links and collab status
- `navLinks` — navigation

### Dashboard data

Figures are from Manali's Instagram dashboard for the 30 days ending 1 Nov 2026:

- **525,140 views** · **3,357 followers** · **+95 net followers** · **373,659 viewers**
- **510K reel views** (97% of all views) · **7.4K story views**
- Age: 13–17 1.0%, 18–24 22.1%, 25–34 43.3%, 35–44 20.4%, 45–54 9.1%, 55–64 3.1%, 65+ 1.0%
- Top cities: Mumbai 8.1%, Panvel 7.5%, Navi Mumbai 4.8%, Thane 2.3%, Delhi 2.0%
- Languages: English 68.0%, Hindi 6.8%, Marathi 6.7%
- India accounts for 58.9% of the audience

Update `insights` when new screenshots come in.

### Placeholders to replace

- **Travel reel videos** — three travel cards need local MP4/WebM files before they can play; currently they show the private-preview panel.
- **Brand logos** — OneGummy, Maybelline and Casa Regal use their Instagram avatars; MARS uses the official white wordmark. Add approved logo files if the brand teams provide them.
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
components/sections/ Cover, Meet, Insights, Themes, Videos, Partners, Footer
components/ui/       Nav, Preloader, PhoneFrame, ReelCard, ReelPlayerProvider,
                     ArcCarousel, Cursor, Grain, SmoothScroll, SmoothLink,
                     Marquee, Reveal, Magnetic, SectionLabel, icons
lib/site.ts          all content and dashboard data
public/images/       placeholder campaign imagery and brand logos
public/videos/       local MP4 + WebM reels for in-site playback
```

## Credits

Placeholder photography from [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/) (free-to-use licenses). Brand collab reels belong to Manali Jagtap and the respective brands. Typefaces via Google Fonts through `next/font`.
