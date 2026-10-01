# PROJECT-STATE

Audit date: 2026-10-01. Repo: `tobidontplay/shayo-culture-vibes-web`. Tip: `d09e298`. Local `npm run dev` was not started. The public homepage was fetched.

| Tag | Meaning |
|---|---|
| [HIGH] | Seen in this tree, or in an HTTP response on 2026-10-01 |
| [MED] | One inference step from that evidence |
| [LOW] | Not checked, or the check was too weak to rely on |

## Identity

| Field | Value | Confidence |
|---|---|---|
| Product name | Midnight Shayo | [HIGH] |
| Package name | `vite_react_shadcn_ts` version `0.0.0`, private | [HIGH] |
| Repo | `tobidontplay/shayo-culture-vibes-web` | [HIGH] |
| Visibility | Public. GitHub description empty | [HIGH] |
| Default branch | `main` | [HIGH] |
| Homepage field | `https://shayo-culture-vibes-web.vercel.app` | [HIGH] |
| Owner recorded here | GitHub account `tobidontplay` | [HIGH] |
| Personal legal name | Not recorded in this repo | [HIGH] |
| What it is | One-page marketing site for a Nigerian Gen-Z cultural series: podcast, events, a dating-series promo, newsletter | [HIGH] |
| How it was started | Lovable / gpt-engineer scaffold, then a design commit | [HIGH] |
| Lovable project URL | `https://lovable.dev/projects/a37839ae-8452-4e61-8cb9-414738291c8d` | [HIGH] |
| Commit count on `main` | 7 | [HIGH] |
| History shape | Linear product commits, then onboarding commit `3c48457`, then merge `d09e298` (parents `5d827e8` and `3c48457`, tree identical to `3c48457`) | [HIGH] |
| First commit | `4fb7c37` 2025-04-11 `gpt-engineer-app[bot]` scaffold | [HIGH] |
| Design commit | `23a707e` 2025-04-11 `gpt-engineer-app[bot]` | [HIGH] |
| TikTok icon commit | `b0d2392` 2025-04-11 `gpt-engineer-app[bot]` | [HIGH] |
| Gallery commit | `1106e98` 2025-06-05 author date, 2025-06-06 UTC, author `User` | [HIGH] |
| Love & Lust commit | `5d827e8` same author window as the gallery commit | [HIGH] |
| Docs commits | `3c48457` 2025-09-25 and merge `d09e298` 2026-09-26, Cursor agents | [HIGH] |
| Last application code change | 2025-06-05 / 2025-06-06 UTC | [HIGH] |
| `AGENTS.md` identity line | Says five commits and last commit 2025-06-06 | [HIGH] |
| That identity line vs git | Stale. Seven commits. Tip is 2026-09-26 and is docs | [HIGH] |
| Dev port | 8080, host `::`, in `vite.config.ts` | [HIGH] |
| Tests | No test script, no test files | [HIGH] |
| CI | No `.github` directory | [HIGH] |

## Stack

| Layer | Choice | Where | Confidence |
|---|---|---|---|
| Language | TypeScript, `strict` false, `noImplicitAny` false | `tsconfig.app.json` | [HIGH] |
| UI | React 18 | `package.json`, `src/main.tsx` | [HIGH] |
| Build | Vite 5, `@vitejs/plugin-react-swc` | `package.json`, `vite.config.ts` | [HIGH] |
| Router | `react-router-dom` 6, `BrowserRouter` | `src/App.tsx` | [HIGH] |
| Style | Tailwind 3, CSS variables, custom `shayo` palette | `tailwind.config.ts`, `src/index.css` | [HIGH] |
| Component kit | shadcn/ui on Radix, mostly unused | `components.json`, `src/components/ui/` | [HIGH] |
| Class helper | `cn` = `clsx` + `tailwind-merge` | `src/lib/utils.ts` | [HIGH] |
| Motion | CSS transitions and `IntersectionObserver`. `framer-motion` is a dependency and is not imported | `package.json`, `src/` | [HIGH] |
| Data | Hardcoded arrays in components. Files under `public/` | `EventsSection.tsx` | [HIGH] |
| Server | None | `docs/architecture/api.md` and the tree | [HIGH] |
| Database | None | tree | [HIGH] |
| Package manager recorded | npm (`package-lock.json`, README). `bun.lockb` exists from the scaffold commit and was not updated when later commits changed `package-lock.json` | git history | [HIGH] |
| Dev-only plugin | `lovable-tagger` when `mode === 'development'` | `vite.config.ts` | [HIGH] |
| Fonts | Google Fonts: Anton (display), Inter (sans) | `src/index.css` | [HIGH] |
| Host documented for production | Vercel, from the GitHub homepage field. No workflow file in the repo | GitHub API, tree | [HIGH] |

## Components

| Component | Path | Job | Reached from `/` | Confidence |
|---|---|---|---|---|
| App | `src/App.tsx` | Query client, tooltip provider, two toasters, router | `src/main.tsx` | [HIGH] |
| Index | `src/pages/Index.tsx` | Navbar, hero, podcast, events, dating series, newsletter, footer | route `/` | [HIGH] |
| NotFound | `src/pages/NotFound.tsx` | Light-theme 404 and a plain `<a href="/">` | route `*` | [HIGH] |
| Navbar | `src/components/Navbar.tsx` | Logo, hash links, mobile menu, social icons on mobile only | Index | [HIGH] |
| HeroSection | `src/components/HeroSection.tsx` | Title, two CTAs, three stats, marquee | Index | [HIGH] |
| PodcastSection | `src/components/PodcastSection.tsx` | Platform chips and a play graphic | Index, inside `AnimatedReveal` | [HIGH] |
| EventsSection | `src/components/EventsSection.tsx` | Seven cards, two quotes, Instagram CTA, opens gallery | Index, inside `AnimatedReveal` | [HIGH] |
| EventGallery | `src/components/EventGallery.tsx` | Lightbox, arrows, Escape, thumbnails on desktop, dots on mobile | Only if `images.length > 0` | [HIGH] |
| DatingSeriesSection | `src/components/DatingSeriesSection.tsx` | Stay or Sway copy and episode cards | Index, inside `AnimatedReveal` | [HIGH] |
| NewsletterSection | `src/components/NewsletterSection.tsx` | Email form, toast, no request | Index, inside `AnimatedReveal` | [HIGH] |
| Footer | `src/components/Footer.tsx` | Blurb, social, hash links, privacy and terms as `#` | Index | [HIGH] |
| AnimatedReveal | `src/components/AnimatedReveal.tsx` | Fade/slide when 10% visible | Four sections | [HIGH] |
| TikTokIcon | `src/components/icons/TikTokIcon.tsx` | Inline SVG. Lucide had no TikTok icon in the fix commit | Navbar, Footer | [HIGH] |
| Radix toaster | `src/components/ui/toaster.tsx` | Renders the newsletter toast | App | [HIGH] |
| Sonner toaster | `src/components/ui/sonner.tsx` | Mounted. Nothing calls `toast` from `sonner` | App | [HIGH] |
| TooltipProvider | `src/components/ui/tooltip.tsx` | Wraps the tree. No product `Tooltip` | App | [HIGH] |
| Other `ui/*` | 45 files under `src/components/ui/` besides toaster, toast, tooltip, sonner | shadcn primitives. Not imported by product files | No | [HIGH] |
| `use-mobile` | `src/hooks/use-mobile.tsx` | Used by `sidebar.tsx` only | No | [HIGH] |
| `App.css` | `src/App.css` | Vite starter styles. Not imported | No | [HIGH] |

## Capabilities

| ID | Capability | Status | Evidence | Confidence |
|---|---|---|---|---|
| home-route | One dark homepage at `/` | done | `App.tsx`, `Index.tsx`. Public HTML title matches. A rendered fetch listed the same sections | [HIGH] |
| hero | Hero, stats, marquee, two hash CTAs | done | `HeroSection.tsx`. Stats are copy, not a data source | [HIGH] |
| in-page-nav | Hash links to `#podcast`, `#events`, `#dating-series`, `#newsletter` | done | Those ids exist on the sections. Clicks were not driven | [HIGH] |
| mobile-nav | Hamburger menu | done | `Navbar.tsx`. Viewport was not resized in a browser | [MED] |
| podcast-promo | Podcast section with outbound links and a play control | partial | Section renders. Spotify href returned HTTP 404. Apple and Google are `href="#"`. Play graphic is a `div` | [HIGH] |
| event-catalog | Seven events with dates and status badges | partial | Array in `EventsSection.tsx`. Two ids are `5`. Five badges say Upcoming on dates before 2026-10-01. Copy says six sold-out events; two badges say Sold Out | [HIGH] |
| event-gallery | Lightbox for events that have images | partial | Four events have 10 JPEGs plus a thumbnail. Three have `images: []`, so the click handler does nothing. Gallery clicks were not driven in a browser | [HIGH] |
| dating-series-promo | Stay or Sway section and Instagram CTA | partial | Copy and three fake episode cards. Play graphics are not controls. Watch Now goes to Instagram | [HIGH] |
| newsletter-capture | Collect an email for the movement | broken | `handleSubmit` checks a non-empty email, fires a success toast, clears the field. No `fetch`, no URL | [HIGH] |
| social-outbound | Instagram, YouTube, TikTok links | partial | URLs are real strings. Instagram responded 302, YouTube 301, TikTok 403 to a non-browser client. Account health is not proven | [MED] |
| legal-pages | Privacy and terms | absent | Footer links are `href="#"` | [HIGH] |
| not-found | Unknown paths show a 404 | done | Route `*`. The page uses `bg-gray-100` and `console.error`. Not requested in a browser | [MED] |
| seo-share | Title, description, Open Graph, Twitter | partial | Title and description are Midnight Shayo. `og:image` and `twitter:image` are `lovable.dev`. `twitter:site` is `@lovable_dev`. Same tags on the live HTML | [HIGH] |
| image-scripts | Maintainer HEIC conversion scripts | partial | Four shell scripts. Paths are `/Users/tobi/Documents/...`. Outputs for four events are already in `public/` | [HIGH] |
| tests | Automated tests | absent | No script, no `*.test.*` / `*.spec.*` | [HIGH] |
| ci | Continuous integration | absent | No `.github` | [HIGH] |
| http-api | Application HTTP API | absent | No server routes | [HIGH] |
| auth | Accounts and login | absent | No auth code | [HIGH] |
| persistence | Save visitor data | absent | Newsletter state is `useState` only | [HIGH] |
| deployment | Public hosting | partial | Homepage URL returned HTTP 200 from Vercel with this page's shell and a built `/assets/index-*.js`. Git SHA of that deploy was not in the HTML | [HIGH] |
| analytics | Product analytics | absent | No analytics SDK in `src`. `cdn.gpteng.co/gptengineer.js` is on the live page. What that script does was not read | [MED] |

## Endpoints

| Kind | Method / path | Handler | Status | Confidence |
|---|---|---|---|---|
| Client route | `/` | `Index` | done | [HIGH] |
| Client route | `*` | `NotFound` | done | [HIGH] |
| HTTP API | any | none | absent | [HIGH] |
| Static | `/images/events/...` | Vite `public/` | done for the committed JPEGs | [HIGH] |
| Static | `/lovable-uploads/19cdd4a9-6e09-4b9c-a41a-6cde9be8dfa7.png` | Logo PNG, 1080×1080, 96947 bytes | done | [HIGH] |
| Static | `/images/events/placeholder.jpg` | 1 byte, a newline. Live response `content-length: 1` and `content-type: image/jpeg` | broken | [HIGH] |
| Static | `/robots.txt` | Allows all listed crawlers | done | [HIGH] |
| Static | `/favicon.ico` | 16×16 ICO in `public/`. Not linked in `index.html`. Browsers request it by convention | done | [MED] |
| Dev server | `http://[::]:8080` | `vite.config.ts` `server.port` | configured, not started in this audit | [HIGH] |

## External Dependencies

| Dependency | Used for | Runtime? | Confidence |
|---|---|---|---|
| `react`, `react-dom` | UI | yes | [HIGH] |
| `react-router-dom` | Two routes | yes | [HIGH] |
| `vite`, Tailwind, PostCSS | Build and CSS | build | [HIGH] |
| Radix toast + `@/hooks/use-toast` | Newsletter confirmation | yes | [HIGH] |
| `@tanstack/react-query` | `QueryClientProvider` only. No `useQuery` | bundled, idle | [HIGH] |
| `sonner`, `next-themes` | Mounted toaster. No `ThemeProvider`. No Sonner toast calls | bundled, idle | [HIGH] |
| `framer-motion` | Declared. Zero imports | no | [HIGH] |
| Radix packages other than toast/tooltip, plus `react-hook-form`, `zod`, `recharts`, `embla-carousel-react`, `cmdk`, `vaul`, `date-fns`, `react-day-picker`, `input-otp` | Only referenced from unused `ui/*` | no, unless a future import pulls them | [HIGH] |
| `https://fonts.googleapis.com` | Anton and Inter | yes, from CSS | [HIGH] |
| `https://cdn.gpteng.co/gptengineer.js` | Script tag in `index.html` and in the live document | yes | [HIGH] |
| `https://lovable.dev/opengraph-image-p98pqg.png` | Share image | when a crawler loads the tag | [HIGH] |
| `https://open.spotify.com/show/37i9dQZF1DX0s5kDXi1oC5` | Podcast chip | HTTP 404 on 2026-10-01 | [HIGH] |
| `https://open.spotify.com/playlist/37i9dQZF1DX0s5kDXi1oC5` | Same id, playlist path. Search titles it "Hit Rewind" | HTTP 200. Not linked by the site | [HIGH] |
| `https://youtube.com/@midnightshayo` | Listen Now and a chip | HTTP 301 to a client | [MED] |
| `https://www.instagram.com/midnightshayopod`, `/stayorsway`, `/zumnan` | Social and CTAs | HTTP 302 to a client | [MED] |
| `https://www.tiktok.com/@midnightshayo` | Icon links | HTTP 403 to a client | [LOW] |
| ImageMagick `convert` / `magick` on a Mac | One-shot scripts | no, not in the app | [HIGH] |
| Vercel | Serves the homepage URL | yes for that URL | [HIGH] |

## Data Model

| Entity | Stored | Fields | Confidence |
|---|---|---|---|
| Event | `const events` in `EventsSection.tsx` | `id: number`, `name`, `date` (display string, not ISO), `description`, `status: 'upcoming' \| 'sold-out'`, `thumbnail`, `images: string[]` | [HIGH] |
| Event ids in that array | same file | 1 Midnight All Day, 2 MAD: Detty December, 3 Love & Lust, 4 Summer Shayo, 5 Midnight Masquerade, 5 Afrobeats Night, 6 End of Year Bash | [HIGH] |
| Testimonial | same file | `quote`, `author` (`Sarah N.`, `Tunde K.`) | [HIGH] |
| Podcast platform | `PodcastSection.tsx` | `name`, `url` | [HIGH] |
| Dating episode card | `DatingSeriesSection.tsx` | `title`, `description`. Three generic episodes | [HIGH] |
| Newsletter subscriber | nowhere | email string in React state until submit, then cleared | [HIGH] |
| Database / ORM / CMS | none | — | [HIGH] |
| Env file | `project.yaml` names `.env.local`. No `.env*` in the tree. No `import.meta.env` in `src` | — | [HIGH] |

### Event rows

| id | Name | Date string | Badge | Images on disk | Confidence |
|---|---|---|---|---|---|
| 1 | Midnight All Day | June 22, 2024 | sold-out | 10 JPEG + thumbnail | [HIGH] |
| 2 | MAD: Detty December | December 20, 2024 | upcoming | 10 JPEG + thumbnail. `image7.jpg` is 1648841 bytes. Thumbnail is 766702 bytes, same size as `image1.jpg` | [HIGH] |
| 3 | Love & Lust | April 12, 2025 | upcoming | 10 JPEG + thumbnail | [HIGH] |
| 4 | Summer Shayo | August 17, 2024 | sold-out | 10 JPEG + thumbnail | [HIGH] |
| 5 | Midnight Masquerade | October 31, 2024 | upcoming | `images: []`, thumbnail path is the 1-byte placeholder | [HIGH] |
| 5 | Afrobeats Night | November 25, 2024 | upcoming | same | [HIGH] |
| 6 | End of Year Bash | December 28, 2024 | upcoming | same | [HIGH] |

## Tests

| Check | Command / method | Result | Confidence |
|---|---|---|---|
| Unit / integration | none in `package.json` | absent | [HIGH] |
| Test files | search for `*.test.*`, `*.spec.*` | none | [HIGH] |
| Lint | `npm run lint` | not run. `node_modules` not installed for this audit | [HIGH] |
| Production build | `npm run build` | not run | [HIGH] |
| Local dev | `npm run dev` on port 8080 | not started. Task forbade starting servers | [HIGH] |
| `docs/verification.md` | table | header only, zero rows | [HIGH] |
| Feature `feat-001` validation | frontmatter | `tests: unknown`, `manual: unknown`, `user_opinion: unknown`, `verified_by: null`, `stage: implemented` | [HIGH] |
| Public homepage | GET `https://shayo-culture-vibes-web.vercel.app` | HTTP 200, title Midnight Shayo, asset script, gptengineer script, Lovable share tags | [HIGH] |
| Rendered section text | fetch of that URL | Headings and the seven event names match the source. Footer year in the rendered text was 2026 | [HIGH] |
| Gallery click, form submit, mobile menu, 404 click | browser | not done | [HIGH] |
| Placeholder asset | HEAD the live URL | HTTP 200, 1 byte | [HIGH] |
| Love & Lust thumbnail | HEAD the live URL | HTTP 200, 77505 bytes, matches the file in git | [HIGH] |
| Spotify show URL | HEAD | HTTP 404 | [HIGH] |
| Spotify playlist URL with the same id | HEAD | HTTP 200 | [HIGH] |

## Dead code

| Item | Why it is dead | Confidence |
|---|---|---|
| 45 files in `src/components/ui/` other than `toast.tsx`, `toaster.tsx`, `tooltip.tsx`, `sonner.tsx` | No import from `src/pages` or `src/components` outside `ui/` | [HIGH] |
| `src/components/ui/use-toast.ts` | Re-export. No importers | [HIGH] |
| `src/hooks/use-mobile.tsx` | Only imported by `sidebar.tsx` | [HIGH] |
| `src/App.css` | Not imported by `main.tsx` | [HIGH] |
| `public/placeholder.svg` | No reference in `src` or `index.html` | [HIGH] |
| `framer-motion` | No import | [HIGH] |
| `QueryClient` | Created and provided. No query | [HIGH] |
| Sonner `Toaster` | Mounted. Newsletter uses the other toaster | [HIGH] |
| `isClosing` in `EventsSection.tsx` | `useState(false)`. Never read, never set true | [HIGH] |
| `.text-stroke`, `.reveal`, `.reveal.active` | Defined in `index.css`. No class usage in `src` | [HIGH] |
| `shayo.blue` | In the Tailwind theme. No `shayo-blue` class in `src` | [HIGH] |
| Tailwind `content` globs `./pages`, `./components`, `./app` | Those directories are not in this repo. `./src/**` is the glob that matches | [HIGH] |
| Sidebar color tokens | Theme references `--sidebar-*`. `:root` in `index.css` does not set them | [MED] |

## What works E2E

E2E here means a visitor path, not a test runner. Local browser driving was not done.

| Path | What was observed | Confidence |
|---|---|---|
| Open the public homepage | Vercel returned the shell. Rendered text included the hero, podcast, seven events, Stay or Sway, newsletter, and footer year 2026 | [HIGH] |
| Logo file on that host | PNG 96947 bytes | [HIGH] |
| One real gallery thumbnail on that host | Love & Lust thumbnail 77505 bytes | [HIGH] |
| Hash targets exist for the nav labels | Section ids are in the components that the homepage text came from | [HIGH] |
| Four galleries have files the lightbox is written to show | 10 JPEGs each, JPEG magic bytes checked locally | [HIGH] |
| Newsletter button can show a toast | Code path only. Not clicked | [MED] |
| 404 page | Code path only. Not requested | [MED] |
| Full click-through of gallery, subscribe, and mobile nav | Not run | [LOW] |

## What is broken

| Defect | Where | Severity | Confidence |
|---|---|---|---|
| Subscribe reports success and stores nothing | `NewsletterSection.tsx` `handleSubmit` | [HIGH] | [HIGH] |
| Spotify chip returns 404. The id is the Hit Rewind playlist id on a `/show/` path | `PodcastSection.tsx` | [HIGH] | [HIGH] |
| Apple Podcasts and Google Podcasts go to `#` | same file | [HIGH] | [HIGH] |
| Play and episode graphics do not play anything | `PodcastSection.tsx`, `DatingSeriesSection.tsx` | [MED] | [HIGH] |
| `placeholder.jpg` is one newline byte. `onError` sets the same URL, so a broken thumbnail retries itself | `public/images/events/placeholder.jpg`, `EventsSection.tsx` | [HIGH] | [HIGH] |
| Two events share `id: 5`, and that id is the React `key` | `EventsSection.tsx` | [MED] | [HIGH] |
| Five events are badged Upcoming though every date string is before 2026-10-01. Love & Lust was already before the commit that added it (2025-06-05) | `EventsSection.tsx` | [HIGH] | [HIGH] |
| Hero and events copy say six sold-out events. The array has two `sold-out` badges and seven cards | `HeroSection.tsx`, `EventsSection.tsx` | [HIGH] | [HIGH] |
| Cards with an empty `images` array do not open a gallery | `openGallery` guard | [MED] | [HIGH] |
| `delay-${index * 100}` is not a full class string, so Tailwind will not emit those delays | `EventsSection.tsx`, `DatingSeriesSection.tsx` | [MED] | [HIGH] |
| Share image and Twitter site are still Lovable defaults, including on the live HTML | `index.html` | [HIGH] | [HIGH] |
| Third-party `gptengineer.js` ships in the public document | `index.html`, live HTML | [MED] | [HIGH] |
| Privacy and terms are `#` | `Footer.tsx` | [MED] | [HIGH] |
| 404 page does not use the dark site or the client router | `NotFound.tsx` | [LOW] | [HIGH] |
| Conversion scripts point at another machine's disk. `convert_love_and_lust.sh` writes to `/Users/tobi/Downloads/shayo-culture-vibes-web/...` | repo root `convert_*.sh` | [MED] | [HIGH] |
| `feat-001` prose and frontmatter say Done while every validation field is unknown | `specs/features/001-cultural-home.md` | [MED] | [HIGH] |
| `AGENTS.md` still says five commits | `AGENTS.md` §1 | [LOW] | [HIGH] |
