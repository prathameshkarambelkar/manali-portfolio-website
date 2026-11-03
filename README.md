# Manali Jagtap — Travel & Lifestyle Portfolio

A travel/lifestyle portfolio for **Manali Jagtap** — Mumbai-based creator and foodie behind [@manalijagtap_13](https://www.instagram.com/manalijagtap_13/) and [@forking_aroundddd](https://www.instagram.com/forking_aroundddd/).

Built as a one-page media kit for brands: cover reels, creator portrait, Instagram insights, concept themes, best-performing videos, past partnerships and direct contact actions.

> **Demo note:** photography is placeholder stock. The three brand collab reels (OneGummy, MARS, Casa Regal) are Manali's actual posts and play on-site. The five travel reels currently open a private-preview panel until their video files are added. Brand logos are from Instagram/official sources, and the email/phone are dummy values. Dashboard figures are taken from Manali's Instagram screenshots for the 30 days ending 1 Nov 2026.

## Sections

- **Cover** — Travel Portfolio title, name, Instagram + food handles, three vertical reel thumbnails, stat strip
- **01 Meet the creator** — Hello, I'm Manali, bio and an off-duty portrait
- **02 Insights** — Instagram-style dashboard: views, followers, net followers, viewers, age / top cities / languages, reel-share highlight
- **03 Concept themes** — Reviews, Unboxing, GRWM, Shopping haul, Travel reels, Stay tours, Café & food
- **04 Best videos** — eight phone-framed reels with views, brand and content type; in-site player
- **05 Previous partnerships** — real brand logo list with links and collab status, plus a featured Casa Regal stay-tour reel
- **06 Contact** — Instagram DM, email and WhatsApp actions

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

`startAt` in `lib/site.ts` sets the playback offset in seconds. The player never redirects. Reel cards without a local video (the five travel films) open an in-site “full film on request” panel with a contact CTA.

To make those playable, add their MP4/WebM files to `public/videos/` and add `video`, `webm` and `startAt` to the matching entries in `videos` (`lib/site.ts`).

## Editing content

Everything is in `lib/site.ts`:

- `site` — name, handles, tagline, bio, location, email, phone, availability
- `coverStats` — the four numbers on the cover
- `insights` — dashboard metrics, age brackets, top cities, languages, reel/story views
- `themes` — the seven concept cards
- `videos` — best reels: titles, brands, types, view counts, images, local video paths, start times
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

- **Travel reel videos** — five travel cards need local MP4/WebM files before they can play; currently they show the private-preview panel.
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
components/sections/ Cover, Meet, Insights, Themes, Videos, Partners, Contact
components/ui/       Nav, Preloader, PhoneFrame, ReelCard, ReelPlayerProvider,
                     Cursor, Grain, SmoothScroll, SmoothLink, Marquee, Reveal,
                     Magnetic, SectionLabel, icons
lib/site.ts          all content and dashboard data
public/images/       placeholder campaign imagery and brand logos
public/videos/       local MP4 + WebM reels for in-site playback
```

## Credits

Placeholder photography from [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/) (free-to-use licenses). Brand collab reels belong to Manali Jagtap and the respective brands. Typefaces via Google Fonts through `next/font`.
