# PROJECT-GOALS

Midnight Shayo is a public one-page site. This file separates what the repo already says from what a reader has to infer. It does not add product scope.

## Stated goals

| ID | Goal | Source | Success criteria already written | Confidence |
|---|---|---|---|---|
| G1 | A single-page cultural site. `index.html` describes Midnight Shayo as a movement for Nigerian Gen-Zs. Event galleries live on that page | `specs/project-brief.md` Vision | `npm run dev` serves the page on port 8080. Galleries from the June 2025 commit render on the home page | [HIGH] |
| G2 | The site is one page that presents Midnight Shayo, its events, and a newsletter block | `specs/features/001-cultural-home.md` | Title is Midnight Shayo. Index composes hero, events, dating series, podcast, and newsletter. Unknown paths render `NotFound`. Dev port is 8080 | [HIGH] |
| G3 | A cultural series needs a page for events that is more than a social link | `CASE-STUDY.md` Problem | The page and galleries are in the tree. The case study does not define a metric beyond that | [HIGH] |
| G4 | Someone discovering the events can find them, and an editor can add a gallery | `specs/project-brief.md` Target User | Not written as a checklist. The editor path today is "edit the `events` array and commit JPEGs" | [HIGH] |
| G5 | Ariadne can run, test, and build the repo from `project.yaml` without guessing | `project.yaml`, ADR 001, `AGENTS.md` §10 | `run: npm run dev`, `build: npm run build`, `port: 8080`. `test` is the string `TODO: confirm — no tests detected` | [HIGH] |
| G6 | "Done" means tests, a manual check, and a user opinion, each recorded | `docs/verification.md`, `AGENTS.md` §10 | The verification table has no rows. `feat-001` `verified_by` is null | [HIGH] |
| G7 | Confirm the newsletter has a destination. Confirm the site is still deployed | `TODO.md` Now | Both boxes unchecked in the file. The homepage URL did respond on 2026-10-01. The newsletter still has no destination | [HIGH] |

## Inferred goals

These are readings of the page and the case study. They are not a second spec.

| ID | Goal | Why it is inferred | What would count as success | Confidence |
|---|---|---|---|---|
| I1 | A visitor can join a list and the team can see that address later | Hero CTA "Join the Movement", the form, the success toast, and `CASE-STUDY.md` "A form that goes nowhere reads as finished" | A submit writes somewhere the owner can read, and the toast matches that write | [HIGH] that the page asks for this. [LOW] that the owner still wants email capture |
| I2 | The podcast chip should open Midnight Shayo, not a dead URL | The section calls itself the #1 podcast and offers Spotify | The Spotify href is a show that is this show, and Apple / Google are real or removed | [HIGH] that the current Spotify href is wrong. [LOW] which URL should replace it |
| I3 | Event badges should match the calendar and the hero numbers | The page sells "6 sold-out events" and badges some past dates as Upcoming | One list, unique ids, a status rule, and copy that matches the list | [HIGH] that they do not match today |
| I4 | Share cards should show Midnight Shayo, not the generator that started the repo | `og:image` and `twitter:site` are Lovable defaults on the live page | A real image and a real account, or the tags removed | [MED] |
| I5 | The owner is learning to talk about this repo the way a senior would | `AGENTS.md` persona, learning path, this teaching kit | A reader can say what is real, what is scaffold, and what is unproven without opening every file | [MED] |

## Success criteria

| Criterion | Stated or inferred | Met on 2026-10-01? | Confidence |
|---|---|---|---|
| Dev server port in config is 8080 | stated G1, G2 | The config says 8080. This audit did not start Vite | [HIGH] for the config. [LOW] for a live local server |
| Homepage composition matches the spec | stated G2 | Source and the public rendered text match | [HIGH] |
| Unknown paths render `NotFound` | stated G2 | The route is in `App.tsx`. Not requested | [MED] |
| June 2025 galleries are in the tree | stated G1 | `1106e98` and `5d827e8` added four event folders of JPEGs | [HIGH] |
| Page is more than a social link | stated G3 | Four events have photo sets in the page. Three events are titles only. Podcast and dating series still hand off to other sites | [MED] |
| Newsletter has a destination | stated G7 | No | [HIGH] |
| Site is deployed | stated G7 | The GitHub homepage URL returned this page from Vercel. The deployed git SHA was not identified | [MED] |
| Feature is verified | stated G6 | No. Validation fields are unknown | [HIGH] |
| Subscribe stores an email | inferred I1 | No | [HIGH] |
| Spotify link opens this show | inferred I2 | No. HTTP 404 | [HIGH] |
| Stats and badges agree | inferred I3 | No | [HIGH] |

## Non-goals

| Non-goal | Source | Confidence |
|---|---|---|
| A second product surface. The router has one page | `specs/project-brief.md` Out of Scope | [HIGH] |
| A test suite | same file, Out of Scope | [HIGH] as a stated line |
| A test suite is also listed under Someday in `TODO.md`, and `specs/agent-rules.md` asks for tests on new logic | conflict with the brief | [HIGH] that the files disagree |
| An HTTP API, a database, or accounts | not requested anywhere. Also absent in the tree | [HIGH] for absence. [MED] as a lasting non-goal |
| Replacing Instagram, YouTube, or TikTok as the place media lives | the page links out instead of hosting players | [MED] |

## Target user

| User | Need | What the repo gives them | Confidence |
|---|---|---|---|
| A person discovering the events | See what Midnight Shayo is and open proof of past events | One scrolling page, four photo galleries, outbound social links | [HIGH] |
| An editor adding a gallery | A place to put the next event | Edit `events` in `EventsSection.tsx`, put JPEGs in `public/images/events/<folder>/`, or run a script that only works on a machine with those HEIC files | [HIGH] |
| A future agent | Run and test without guessing | `project.yaml` has run, build, and port. Test is an explicit TODO. Verification log is empty | [HIGH] |
| A tutor | Quiz from documents that match the tree | This kit. If a doc and the code disagree, the code is the source | [HIGH] |
| The owner, a CS student practicing senior judgment | Say what is done without inflating it | `feat-001` says Done. The verification rule says it is not shipped | [HIGH] |

## Stage

| Lens | Stage | Why | Confidence |
|---|---|---|---|
| Feature frontmatter `feat-001` | `implemented`, target `verified` | Written 2026-09-25. `verified_by: null` | [HIGH] |
| Product | Public brochure | The homepage URL serves the page. The only visitor write is discarded | [HIGH] |
| Engineering maturity | Early | No tests, no CI, TypeScript strictness off, content hardcoded, scaffold still in the bundle | [HIGH] |
| Not this | Accepted or shipped, under the repo's own rule | `docs/verification.md` requires tests, manual, and opinion. None are recorded | [HIGH] |

## Questions for the user

| # | Question | Why it changes the next edit | Blocking the current CTA? |
|---|---|---|---|
| Q1 | Where should a newsletter address go, or should the form be removed? | The toast currently claims a join that did not happen | yes |
| Q2 | Which Spotify, Apple, and Google URLs are the real show? | The Spotify chip 404s. Apple and Google are `#` | no, the page still renders |
| Q3 | As of today, which of the seven events are real, which are still upcoming, and which placeholders should be deleted? | Badges, the "6 sold-out" line, and the broken thumbnail depend on this | no |
| Q4 | Are "#1 Spotify Nigeria", "55+ countries", and "6 sold-out events" claims you want published? What is the source? | They are on the live page with no source in the repo | no |
| Q5 | Are the two quotes from Sarah N. and Tunde K. approved? | They are presented as attendee quotes | no |
| Q6 | Is `https://shayo-culture-vibes-web.vercel.app` still the production URL, and which commit should it track? | It responded. The SHA was not on the page | no |
| Q7 | Should `gptengineer.js`, the Lovable Open Graph image, and `twitter:site` `@lovable_dev` stay on the public page? | They are in the live HTML | no |
| Q8 | Should Privacy and Terms become pages, or come off the footer? | Both are `#` | no |
| Q9 | Is a test suite still out of scope, as the brief says, or in scope, as `TODO.md` Someday and the agent rules say? | An agent will otherwise invent tests or skip them | no |
| Q10 | Should the Vite dev server keep `host: "::"` (all interfaces)? | ADR 001 already flags this. `strictPort` is not set | no |
| Q11 | Who adds the next gallery, and should the event list move out of the component into a data file? | The list is a React constant. Two rows share id 5 | no |
