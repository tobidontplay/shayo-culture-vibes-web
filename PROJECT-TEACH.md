# PROJECT-TEACH

Teaching notes for Midnight Shayo (`tobidontplay/shayo-culture-vibes-web`). Claims here are ones a reader can defend from the tree or from a check on 2026-10-01. If a sentence is weaker than that, it is marked `[LOW]` and it is not a fact to repeat as certainty.

Words used once, in plain language:

- A **component** is a function that returns a piece of the page.
- A **route** is a URL path the router matches. This app has two: `/` and everything else.
- A **section** is a block on the one page, reached with a hash such as `#events`. A hash is not a route.
- A **static file** is a file in `public/` copied as-is. The app does not generate those JPEGs at request time.
- **JSX** is the HTML-like syntax inside TypeScript files.
- **Tailwind** is a CSS tool that keeps only the classes it finds written out in full in the source.
- A **toast** is a small confirmation popup.
- **Scaffold** is the starter kit a generator dumped in. **Product code** is the part that is Midnight Shayo.

## Mental model

The site is a brochure that runs in the browser. Vite builds one HTML file, one CSS file, and one JavaScript file. React paints the page into `<div id="root">`. There is no application server and no database.

```text
Browser
  index.html
    /assets/index-*.js     App
      route "/"            Index
        Navbar Hero Podcast Events DatingSeries Newsletter Footer
      route "*"            NotFound
    /images/events/...     files from public/
```

The page the visitor scrolls is `src/pages/Index.tsx`. It does not fetch events. The event list is a constant in `src/components/EventsSection.tsx`. Adding a gallery means editing that constant and committing images. That is the whole content system.

Two layers sit on top of that brochure:

1. The Lovable / shadcn starter from commit `4fb7c37` (2025-04-11). It brought dozens of unused UI files, a loose TypeScript config, and both toast libraries.
2. The governance docs from 2026-09-25 (`3c48457`, merged as `d09e298`). Specs, ADRs, and `project.yaml` were written **after** the page. They describe it. They did not design it.

`feat-001` says status Done and stage `implemented`. The verification log has no rows, and `verified_by` is null. Under `docs/verification.md`, shipped means tests plus a manual check plus a user opinion. Those are different claims. Use both sentences. Do not collapse them into "it is done."

## Architecture

| Piece | Role | Confidence |
|---|---|---|
| `index.html` | Document, title, share tags, the module script, and `gptengineer.js` | [HIGH] |
| `src/main.tsx` | Mounts `<App />` and imports `index.css` only | [HIGH] |
| `src/App.tsx` | Providers and the router. The comment says to add routes above the `*` route | [HIGH] |
| `src/pages/Index.tsx` | Order: Navbar, Hero, Podcast, Events, Dating series, Newsletter, Footer. The four middle sections are wrapped in `AnimatedReveal` | [HIGH] |
| `src/pages/NotFound.tsx` | Any other path. Logs `console.error` with the path | [HIGH] |
| `EventGallery` | Not on the page until a card with images is chosen. It stays mounted through the close animation, then `selectedEvent` is cleared after 300ms | [HIGH] |
| `public/images` | About 12MB of JPEGs for four events, plus a 1-byte `placeholder.jpg` | [HIGH] |
| `project.yaml` | How an external monitor should start the app. Port 8080 is copied from Vite. Test command is a TODO | [HIGH] |

Data flow for a gallery, from the code:

1. The card click calls `openGallery` only when `event.images.length > 0`.
2. `EventGallery` receives `isOpen`, `onClose`, and the event.
3. It shows `event.images[currentImageIndex]` with `object-fit: contain`.
4. Escape, the X button, and a scrim click on a viewport under 768px call `onClose`.
5. `closeGallery` sets `isOpen` false, then drops the event after 300ms so the fade can finish.

The June 2025 commit message says this replaced a black screen on close. The file comment says CSS transitions were used instead of Framer Motion. `framer-motion` is still in `package.json` and is not imported. That is a leftover dependency, not the animation system.

`AnimatedReveal` and each section both use `IntersectionObserver` at threshold `0.1`. A section can fade as a wrapper and again inside. That is redundant, not a second data source.

## Key decisions

| Decision | Evidence | Tradeoff | Confidence |
|---|---|---|---|
| One route | `App.tsx` and the brief | Simple. Every new "page" is a section, or the non-goal is broken | [HIGH] |
| Events live in the component | `EventsSection.tsx` | No CMS to operate. Every edit is a code change. Ids are easy to duplicate | [HIGH] |
| Galleries are static JPEGs | `public/images/events/*` and the shell scripts | Fast to ship. The scripts only run on a machine that still has the HEIC originals | [HIGH] |
| Lightbox uses CSS, not Framer Motion | Comment in `EventGallery.tsx`, commit `1106e98` | Avoids the black-screen bug they were fixing. The dependency was left behind | [HIGH] |
| Custom TikTok SVG | `TikTokIcon.tsx`, commit `b0d2392` | The commit message says "Import TikTok from lucide-react". The diff adds a local SVG instead. Lucide did not export that icon for them | [HIGH] |
| Dev port 8080 | `vite.config.ts`, ADR 001 | A monitor can copy a real number. `strictPort` is not set, so Vite may move if 8080 is taken. ADR marks that as inferred | [HIGH] for the port. [LOW] for whether the owner wants the monitor to fail when 8080 is busy |
| Host `::` | `vite.config.ts` | Dev server listens on all interfaces. Fine for a public static site. Wrong place for secrets. There are no secrets in `src` | [HIGH] |
| Newsletter is local state | `handleSubmit` | The UI looks finished. The write does not happen | [HIGH] |
| TypeScript `strict: false` | `tsconfig.app.json` | The generator's default. Unused state such as `isClosing` is also ignored because the lint rule `@typescript-eslint/no-unused-vars` is off | [HIGH] |
| Specs came after the code | Git dates: product commits in 2025-04 and 2025-06, spec in 2026-09 | Honest history. Do not tell the story as "we specced, then built" for `feat-001` | [HIGH] |

## Technologies

| Technology | What it is doing here | Confidence |
|---|---|---|
| React 18 | Components and `useState` / `useEffect` | [HIGH] |
| Vite 5 | Dev server and production bundle. Live page loads `/assets/index-oZtKieht.js` and `/assets/index-DxuDMyuN.css` | [HIGH] for the tags. [LOW] for which commit produced that hash |
| TypeScript | Types on the event object. The compiler is not in strict mode, so it will not save you from a loose `any` | [HIGH] |
| React Router 6 | `BrowserRouter`. Direct visit to `/events` would be a 404, because events are `#events` on `/` | [HIGH] |
| Tailwind 3 | Utility classes. A class built with a template string, `delay-${index * 100}`, is invisible to the scanner, so the stagger delay is not generated | [HIGH] |
| shadcn/ui | Copy-paste components under `src/components/ui`. Product buttons are CSS classes `btn-primary`, `btn-secondary`, and `btn-accent` in `index.css`, not `<Button>` | [HIGH] |
| Radix toast | The newsletter popup, via `useToast` | [HIGH] |
| TanStack Query | Provider only | [HIGH] |
| ImageMagick | Named in the shell scripts (`convert` or `magick`). Not a runtime dependency | [HIGH] |

## Failure modes

| Mode | What the user sees | Mechanism | Confidence |
|---|---|---|---|
| False join | "Successfully joined!" | `handleSubmit` never sends the email | [HIGH] |
| Dead Spotify chip | Spotify's 404 | `href` is `/show/37i9dQZF1DX0s5kDXi1oC5`. That id returns 200 on `/playlist/37i9dQZF1DX0s5kDXi1oC5` (public playlist "Hit Rewind"). The show path returned 404 | [HIGH] |
| Placeholder cards | Broken image icon | `placeholder.jpg` is a single newline. `onError` assigns that same path again | [HIGH] |
| Duplicate React keys | Two cards can share one identity | Midnight Masquerade and Afrobeats Night both use `id: 5`, and the map key is `event.id` | [HIGH] |
| Upcoming badges on past nights | The list looks current | Status is a hand-written string. Nothing compares it to `Date` | [HIGH] |
| Hero number disagrees with badges | "6 sold-out" vs two Sold Out badges and seven cards | The number is a separate string in `HeroSection.tsx` | [HIGH] |
| Gallery does not open | Click does nothing | Guard `images.length > 0` | [HIGH] |
| Stagger delay missing | Cards appear together | Dynamic Tailwind class | [HIGH] |
| Share preview is the generator's brand | Lovable image, `@lovable_dev` | Tags in `index.html`, confirmed on the live document | [HIGH] |
| Third-party script on the public page | Whatever that script does | `https://cdn.gpteng.co/gptengineer.js` is in the live HTML. The script body was not reviewed | [HIGH] that the tag is there. [LOW] for its behavior |
| 404 feels like another site | Gray page, full reload home | `NotFound.tsx` uses `bg-gray-100` and `<a href="/">` | [HIGH] |
| Next gallery script fails | No new JPEGs | Absolute paths under `/Users/tobi/Documents`. The Love & Lust script writes to `/Users/tobi/Downloads/shayo-culture-vibes-web/...` | [HIGH] |
| `bun install` drifts from npm | Different tree than lockfile readers expect | `bun.lockb` is from the scaffold commit. Later commits changed `package-lock.json` | [MED] |
| Port already taken | Dev server moves | `strictPort` unset. Not observed in this audit | [LOW] |

## Conventions

| Convention | Where it shows up | Confidence |
|---|---|---|
| Product sections are `*Section.tsx` in `src/components` | Hero, Podcast, Events, DatingSeries, Newsletter | [HIGH] |
| Section ids | `podcast`, `events`, `dating-series`, `newsletter` | [HIGH] |
| Brand colors | `shayo.purple` `#9b87f5`, `shayo.pink` `#D946EF`, `shayo.orange` `#F97316`, `shayo.dark` `#121212`, `shayo.black` `#000000` | [HIGH] |
| Display type | Anton via `font-display`. Body is Inter | [HIGH] |
| Image folders | `public/images/events/<slug>/{thumbnail.jpg,image1.jpg…image10.jpg}` | [HIGH] |
| Alias `@` | `src/` via Vite and `tsconfig` | [HIGH] |
| Do not add a feature without a spec | `AGENTS.md` §4. The original page predates that rule | [HIGH] |
| Do not mark a feature accepted without the user | `AGENTS.md` §10 | [HIGH] |
| Agent log after every session | `docs/ai-log/entries/` | [HIGH] |

## Open questions

The full list is in `PROJECT-GOALS.md`. The ones that change a defense of the page:

| Question | Safe statement until it is answered | Confidence |
|---|---|---|
| Where does email go? | Say the form does not send. Do not say a provider is wired | [HIGH] |
| Which nights are real? | Say four folders of photos exist, and three cards have no photos. Do not invent attendance | [HIGH] |
| Are the stats true? | Say the page states them. Say the repo does not cite a source | [HIGH] |
| Which SHA is on Vercel? | Say the homepage serves this design. Do not name a commit as production | [LOW] if you guess a SHA |

## Claims that are `[LOW]`

Repeat these only as unknowns.

| Claim | Why it is `[LOW]` |
|---|---|
| TikTok `@midnightshayo` is a live brand account | A non-browser client got HTTP 403. That is not a proof of absence or presence |
| The deployed bundle hash equals `main` at `d09e298` | The HTML does not contain a git SHA. Content matches. The hash was not rebuilt here |
| What `gptengineer.js` executes | The tag was seen. The file was not read |
| "#1", "55+ countries", and "6 sold-out events" are true in the world | They are strings in JSX |
| Sarah N. and Tunde K. are real attendees | They are strings in JSX |
| A local `npm run dev` paints the page | Not started |
| Gallery keyboard, mobile menu, and form toast work in a browser | Not driven |
| Vite will refuse to start if 8080 is taken | `strictPort` is absent. Behavior not observed |
| The GitHub account's personal name | Not written in the repo. Do not invent one |

## Tutor checkpoints

Ask these. The defendable answer is the one in the right column.

| Ask | Answer the student should be able to defend | Confidence |
|---|---|---|
| How many routes are there? | Two. `/` and `*`. Sections are hashes | [HIGH] |
| Where is the event list stored? | A constant in `EventsSection.tsx`, plus JPEGs in `public/` | [HIGH] |
| What happens on Subscribe? | Prevent default, toast, clear state. No network call | [HIGH] |
| Why is the Spotify button a defect and not a style issue? | The show URL returned HTTP 404 on 2026-10-01. The same id is a playlist | [HIGH] |
| Why did the spec not come first? | Product commits are 2025-04-11 and 2025-06-05. The spec file arrives with the 2026-09-25 onboarding commit | [HIGH] |
| What is the difference between Done and verified here? | Frontmatter status Done, stage implemented, `verified_by` null, verification table empty | [HIGH] |
| Name one piece of scaffold that still ships | Any of: unused shadcn tree, idle QueryClient, Sonner mounted with no calls, Lovable share tags, `gptengineer.js`, `framer-motion` unused | [HIGH] |
| What is the blocking gap? | Newsletter false success. It does not stop the page from being read | [HIGH] |
| What must you not claim? | A production SHA, the world-truth of the stats, the behavior of the third-party script | [LOW] until checked |

## How a senior says this in one breath

Midnight Shayo is a public Vite brochure with one real route, four photo galleries, and a subscribe button that congratulates the visitor for a write the code never performs. The June 2025 commits are the product. The September 2026 commits are the operating manual, written afterward. Treat the manual as a map, and treat `verified_by: null` as the map telling you it has not been walked.
