# Manali Jagtap — UGC Portfolio

A travel/lifestyle UGC portfolio for **Manali Jagtap** — Mumbai-based creator, travel storyteller and foodie behind [@manalijagtap_13](https://www.instagram.com/manalijagtap_13/) and [@forking_aroundddd](https://www.instagram.com/forking_aroundddd/).

Built as a one-page media kit for brands: cover reels, creator intro, Instagram insights, reach statement, concept themes, best-performing videos, circle stats, past partnerships, packages, testimonials and direct contact actions.

> **Demo note:** all photography is placeholder stock. Brand names, quotes, package prices, demographics and the engagement rate are sample content. The headline numbers (525K views, 3,357 followers, +95 net followers, 124 posts, reel view counts) are the figures supplied in the brief. Replace everything with Manali's real data and assets before launch.
>
> OneGummy, MARS Cosmetics and Casa Regal now link to their real collab reels. Maybelline is marked "content in progress", and the top travel reels still point to Manali's profile until individual URLs are added.

## Sections

1. **Cover** — UGC Portfolio title, name, Instagram + food handles, three vertical reel thumbnails with play buttons, stat strip
2. **Meet the creator** — "Hello, I'm Manali", bio, 3+ years, vertical intro reel
3. **Insights** — Instagram-style dashboard: views, followers, net followers, posts, non-follower views, age / locations / gender, highlight badge
4. **Audience reach** — 525K views in 30 days statement slide
5. **Concept themes** — Reviews, Unboxing, GRWM, Shopping haul, Travel reels, Stay tours, Café & food
6. **Best videos** — eight phone-framed reel cards: five travel reels plus OneGummy, MARS and Casa Regal collabs, with the Maybelline collab marked in progress
7. **Key stats** — four circular badges (525K, 793K, 3,357, engagement rate)
8. **Previous partnerships** — real brand logo list with links and collab status, plus a featured Casa Regal stay-tour reel
9. **Featured packages** — Sponsored Post, Brand Ambassador, Video Campaign, Static + Video Campaign
10. **Testimonials** — three brand quote slots
11. **Contact** — Instagram DM, email and WhatsApp actions

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 with a custom cream / teal / terracotta editorial system
- Motion for reveals, parallax, counters and staggered cards
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

## Editing content

Everything is in `lib/site.ts`:

- `site` — name, handles, tagline, bio, location, email, phone, availability
- `coverStats` — the four numbers on the cover
- `insights` — dashboard metrics, age brackets, locations, gender split
- `themes` — the seven concept cards
- `videos` — best reels: titles, brands, types, view counts, images, links
- `moreBrandWork` — the Maybelline in-progress strip
- `keyStats` — the four circle badges
- `partners` — brand logos, profile links and collab status
- `packages` — package names, prices and deliverables
- `testimonials` — three quote slots
- `navLinks` — navigation

### Placeholders to replace

- **Reel URLs** — OneGummy, MARS and Casa Regal use their real collab links. The five travel reels still point to the Instagram profile; replace with individual URLs when available. Maybelline has no reel yet.
- **Insights demographics** — age/location/gender percentages are sample values; replace with screenshots or real numbers.
- **Engagement rate** — `keyStats` uses 9.2% as a placeholder.
- **Package prices** — starting rates are sample INR values.
- **Testimonials** — sample quotes with generic brand attributions; replace with approved quotes before launch.
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
                     KeyStats, Partners, Packages, Testimonials,
                     Contact, Footer
components/ui/       Nav, Preloader, PhoneFrame, ReelCard, Cursor, Grain,
                     SmoothScroll, SmoothLink, Marquee, Reveal, Magnetic,
                     SectionLabel, icons
lib/site.ts          all content and placeholder data
public/images/       dummy campaign imagery
```

## Credits

Placeholder photography from [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/) (free-to-use licenses). Typefaces via Google Fonts through `next/font`.
