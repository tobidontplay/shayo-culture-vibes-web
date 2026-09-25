# ADR 001: Dev server port is 8080
- Date: 2026-09-25
- Status: Accepted
## Context
Ariadne should not guess a port. This repo is one of the few that sets one.
## Decision
project.yaml port is 8080, copied from vite.config.ts server.port.
## Consequences
- Positive: The monitor and the config match.
- Negative: Port 8080 may already be taken on a laptop. strictPort is not set, so Vite might move. [INFERRED — confirm] that you want Ariadne to require 8080.
- Neutral: Production hosting can use another port. This value is the dev server.
## Alternatives Considered
- Alternative A: Leave port null like the other Vite apps. Rejected because the config is explicit.
- Alternative B: Use 5173 because it is Vite's default. Rejected because this config overrides it.
