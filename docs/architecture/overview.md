# System Architecture Overview
## 1. Purpose
Marketing site for Midnight Shayo, a cultural series. One route, event galleries, and a newsletter section.
## 2. High-Level Diagram
```mermaid
graph TD
    Browser --> Index[src/pages/Index.tsx]\n    Index --> Events[src/components/EventsSection.tsx]\n    Index --> Gallery[src/components/EventGallery.tsx]\n    Index --> Newsletter[src/components/NewsletterSection.tsx]
```
## 3. Components
| Component | Responsibility | Tech | Location |
|---|---|---|---|
| Index | The only real route | React Router | src/pages/Index.tsx |
| Events | Event sections and galleries | React | src/components/EventsSection.tsx, EventGallery.tsx |
| Series | Dating series block | React | src/components/DatingSeriesSection.tsx |
| Newsletter | Signup section | React | src/components/NewsletterSection.tsx |
| Not found | Catch-all route | React Router | src/pages/NotFound.tsx |
## 4. Data Flow
1. Vite serves index.html on port 8080.
2. App.tsx routes / to Index and everything else to NotFound.
3. Index composes the hero, events, galleries, podcast, and newsletter sections.
## 5. Key Decisions
- The dev server port is the one in vite.config.ts. See ADR 001.
## 6. Future Considerations
- Confirm whether the newsletter posts anywhere. The section exists. The handler was not traced.
- Image conversion shell scripts at the repo root are maintainer tools, not the app.
