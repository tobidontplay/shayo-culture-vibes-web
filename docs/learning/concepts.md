# Concepts Learned
Running glossary. Every new concept gets a row.
Mastery starts at 0 until a quiz in docs/learning/quiz-log.jsonl raises it.

| Concept | Plain-English | Why It Matters | Date | Mastery | Last Reviewed | Next Review | Related Files |
|---|---|---|---|---|---|---|---|
| Configured dev port | The port in the Vite config is the port the tool will try to open. | It is the only port a monitor should copy. Defaults are guesses. | 2026-09-25 | 0 | null | null | vite.config.ts |
| False-success form | A form that shows a success message without sending or storing the input. | The visitor believes they joined. The product has no record. The toast is the bug. | 2026-10-01 | 0 | null | null | src/components/NewsletterSection.tsx |
| Scaffold versus product | Generator files that compile into the repo but are not on the path from `main.tsx` to the page. | Counting files overstates the product. Trace imports. | 2026-10-01 | 0 | null | null | src/components/ui/ |
| Tailwind sees source text | Tailwind emits a class only when the full class string appears in the source. A template like `` delay-${n} `` is invisible. | Stagger delays written that way never ship, and the page still looks fine enough to miss it. | 2026-10-01 | 0 | null | null | src/components/EventsSection.tsx |
| Implemented versus verified | A feature file can say Done while `verified_by` is null and the verification log is empty. | "Done" in prose is not the repo's definition of shipped. | 2026-10-01 | 0 | null | null | specs/features/001-cultural-home.md |
