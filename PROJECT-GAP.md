# PROJECT-GAP

Each row is one capability from `PROJECT-STATE.md`. Status words are `done`, `partial`, `broken`, `planned`, `absent`. A gap is what is still missing for that capability to be true for a visitor or for an editor.

Audit date: 2026-10-01. Local server not started. Public homepage was fetched.

## Gap table

| ID | Capability | Status | Have | Missing | Gap size | Confidence |
|---|---|---|---|---|---|---|
| home-route | Homepage at `/` | done | Route, sections, and a Vercel response whose text matches those sections | A recorded manual row in `docs/verification.md`. Local port 8080 not started here | small | [HIGH] |
| hero | Hero block | done | Markup, palette, marquee, two working hash targets | A source for the three numbers on the cards | small for render, large for truth of the numbers | [HIGH] |
| in-page-nav | Hash navigation | done | Nav, footer, and section ids agree | A browser pass that the fixed header does not cover the headings | small | [MED] |
| mobile-nav | Mobile menu | done | State, button, links that close the menu. Social icons are in the mobile panel only | A narrow-viewport check | small | [MED] |
| podcast-promo | Podcast promotion | partial | Copy, YouTube URL, section id | A Spotify URL that is not HTTP 404. Apple and Google are `#`. The play circle is not a control. No episode id, title, or embed | large | [HIGH] |
| event-catalog | Event list | partial | Seven hardcoded rows and two sold-out photo sets | Unique ids. A status rule against the date. Copy that matches the badges. Real thumbnails for the three empty rows. Owner confirmation of which nights happened | large | [HIGH] |
| event-gallery | Lightbox | partial | `EventGallery.tsx` and 40 gallery JPEGs plus 4 thumbnails for four events | Clicks not exercised here. Empty arrays never open. Placeholder file is 1 byte. Desktop scrim click does not close (`isMobile && onClose`). `isClosing` is unused | medium | [HIGH] |
| dating-series-promo | Stay or Sway | partial | Section, Instagram URL, three text cards | No video, no episode URLs. Play icons are decorative | medium | [HIGH] |
| newsletter-capture | Email capture | broken | Form, required email, success toast | Any destination. The toast text is "Successfully joined!" | large | [HIGH] |
| social-outbound | Social links | partial | Five profile URLs in the components | Proof the TikTok profile loads for a person. Instagram and YouTube only returned redirects to a script | medium | [MED] |
| legal-pages | Privacy and terms | absent | Two footer labels | Pages, or removal of the labels | medium | [HIGH] |
| not-found | 404 | done | Catch-all route and a simple page | The page is a light theme and a full document load via `<a>`. Not requested on the host | small | [MED] |
| seo-share | Share metadata | partial | Title and description | Midnight Shayo image and Twitter account. Live HTML still points at Lovable | medium | [HIGH] |
| image-scripts | HEIC conversion | partial | Scripts and the JPEGs they were meant to produce | Portable paths. `convert_love_and_lust.sh` writes outside the repo root it assumes. Scripts are not part of `npm run build` | medium for the next gallery, none for the four already committed | [HIGH] |
| tests | Tests | absent | A sentence in `project.yaml` that says none were found. Brief lists a suite as out of scope. `TODO.md` lists tests as Someday | A decision that those three sentences agree, then either a real command or a permanent `test: null` | large for the monitor, none if the brief still rules | [HIGH] |
| ci | CI | absent | Nothing | A workflow, if the owner wants one | medium | [HIGH] |
| http-api | HTTP API | absent | `docs/architecture/api.md` says so | Nothing, unless Q1 chooses a backend | none until Q1 | [HIGH] |
| auth | Auth | absent | No accounts in the spec | Nothing | none | [HIGH] |
| persistence | Persistence | absent | In-memory email state | A store, if Q1 keeps the form | large only if the form stays | [HIGH] |
| deployment | Deployment | partial | A live Vercel URL on the GitHub repo | The git SHA that built `/assets/index-oZtKieht.js`. A pipeline in this repo. A verification row | medium | [HIGH] |
| analytics | Analytics | absent | A third-party script tag whose body was not reviewed | A named product decision: keep the Lovable script, or remove it | medium | [MED] |

## Three biggest gaps

| Rank | Gap | Why it is one of the three | Confidence |
|---|---|---|---|
| 1 | `newsletter-capture` is broken | It is the only thing the page asks the visitor to give. The toast says the join worked. Nothing is stored. `TODO.md` puts this first. `CASE-STUDY.md` names it as the change the author would make | [HIGH] |
| 2 | `event-catalog` does not match its own marketing | Seven cards, two sold-out badges, a hero that says six sold-out events, five Upcoming badges on dates that were already past when the June 2025 commits landed, two rows with the same id, and a thumbnail file that is not an image | [HIGH] |
| 3 | The proof around the page is thinner than the page | Spotify 404, Lovable share tags on the live document, no tests, no CI, `feat-001` marked Done with `verified_by: null`, and `docs/verification.md` empty. A visitor can still read the page | [HIGH] |

## Blocking gap

| Field | Value |
|---|---|
| ID | `newsletter-capture` |
| Status | broken |
| Blocks | The call to action "Join the Movement". A visitor who submits an address is told they joined. The address is discarded. There is no list to be on |
| Does not block | Reading the homepage, opening the four real galleries in principle, or following YouTube and Instagram |
| Why this one and not the event list | The event list is wrong in places and still shows four real photo sets. The form is the only action that claims a write. A wrong badge is a content bug. A success toast with no write is a false confirmation |
| Why this one and not "no tests" | The brief currently lists a test suite as out of scope. The form is in the shipped UI and in `TODO.md` Now |
| Smallest repair, not done in this pass | Either post the address to a real endpoint and toast that result, or delete the input and point "Join the Movement" at a channel that exists. Both need Q1 |
| Confidence | [HIGH] |

## How to read a row

| Word | Use it when |
|---|---|
| done | The behavior is in the tree and nothing important is missing for that behavior |
| partial | A visitor gets some of it, and a named piece is missing or false |
| broken | The UI asserts an outcome the code does not perform |
| planned | A doc asks for it and the code does not have it yet |
| absent | Neither the product code nor a current plan implements it |
