---
id: feat-001
title: "Cultural home page"
status: Done
stage: implemented
target_stage: verified
final_result: "The site is one page that presents Midnight Shayo, its events, and a newsletter block."
acceptance:
  - "index.html title is Midnight Shayo."
  - "Index composes hero, events, dating series, podcast, and newsletter sections."
  - "Unknown paths render NotFound."
  - "Dev server port is 8080."
validation:
  tests: unknown
  manual: unknown
  user_opinion: unknown
  verified_by: null
---

# Feature Spec: Cultural home page
- Status: Done
- Owner: Midnight Shayo
- Linked ADRs: docs/architecture/decisions/001-vite-port-8080.md
- Linked AI Log Entries: [docs/ai-log/entries/0001-2026-09-25-fleet-onboarding.md](../../docs/ai-log/entries/0001-2026-09-25-fleet-onboarding.md)
## 1. Objective
The site is one page that presents Midnight Shayo, its events, and a newsletter block.
## 2. Requirements
### Functional
- index.html title is Midnight Shayo.
- Index composes hero, events, dating series, podcast, and newsletter sections.
- Unknown paths render NotFound.
- Dev server port is 8080.
### Non-Functional
- No test script.
## 3. Technical Plan
- Affected Files: src/pages/Index.tsx, src/components/HeroSection.tsx, src/components/EventsSection.tsx, src/components/EventGallery.tsx, src/components/NewsletterSection.tsx, vite.config.ts
- Data Model Changes: Static content and public images.
- API Changes: None found.
- Steps:
  1. Route / to Index.
  2. Render the sections.
  3. Serve on 8080.
## 4. Verification Plan
No tests. Manual: npm run dev and open the page. Not run in this pass.
## 5. Content Angle
Hook: the whole cultural site is one route and a pile of sections.
## 6. Open Questions
- Does the newsletter submit anywhere?
