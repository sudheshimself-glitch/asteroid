# HANDOFF — Asteroid

Written 2026-10-11 on branch `claude/project-handoff-docs-9gq2xg`, ahead of the owner moving to a new Claude account.
Read this before starting work. `CLAUDE.md` points here.

> **This repo is PUBLIC.** Anything committed here is published. No secrets, tokens or personal details belong in this file. (The one email address below, `hello@asteroid.studio`, is quoted from the public homepage copy.)

**Provenance tags used below**
- **[verified]**: checked directly in the repo or on GitHub on 2026-10-11.
- **[inferred]**: my reading of the evidence; the owner has not confirmed it.
- **[unknown]**: no record exists anywhere I could look. Ask the owner; do not guess.

**How this was assembled.** There were no earlier sessions to read (the only transcript on disk is the one that wrote this), no memory files, no `CLAUDE.md` and no rules/notes files. Everything below comes from git history, every other branch (each fetched and diffed against the default), the 2 PRs on GitHub, and the file contents. Where the owner's preferences simply were not recorded, section 2 and 3 say so rather than inventing any.

---

## 🚨 Read first: leaked credential

A **Framer API key** is hard-coded in `framer-refero-integration.js` on the default branch and on this branch. It was added in commit `866c991` and the repo is public, so **treat the key as compromised**.

- Still present in the working tree of: default branch, this branch, `illustrator-mcp-http-setup-a3p14q`, `refero-mcp-http-transport-gasyrl`, `refero-mcp-integration-bz079b`. [verified]
- Removed from the tree (but still in history) on `refero-setup-xduk0c` (commit `ef3a3f3`). Never present on `asteroid-homepage-framer-m82l4a` (a single root commit that never contained it). [verified]
- Removing it from the files does **not** fix it: it stays readable in git history. **Only revoking/rotating it in Framer fixes it.** Only the owner can do that.
- I did not test whether the key is still live (and should not: it is a leaked credential).
- The new key goes in an environment variable (`FRAMER_API_KEY`), never in a file. See section 7.

---

## 1. Project overview

- **Name / brand:** *Asteroid*. Repo: <https://github.com/sudheshimself-glitch/asteroid> (public, created 2026-08-26). [verified]
- **What the brand is:** a "website build studio" that designs, builds and ships fast, high-converting sites for ambitious brands. Tagline in the homepage: *"We build websites that hit on impact."* [verified, from `index.html`]
- **Two work threads so far:**
  1. **The Asteroid marketing homepage.** A single static file, `index.html`, built around an "orbital trajectory / impact" concept. It exists **only** on branch `claude/asteroid-homepage-framer-m82l4a`. It is *not* on the default branch.
  2. **Design-research and Framer tooling.** The Refero MCP server (design reference research) is configured in `.mcp.json` on the default branch. An exploratory Framer-to-Refero REST script (`framer-refero-integration.js`) is also on the default branch. An Illustrator MCP config exists only on a branch.
- **Goal:** [inferred] ship the Asteroid homepage (the branch name says "framer", and the script targets a Framer project), with design decisions grounded in Refero research. The owner never wrote the goal down anywhere I could find.
- **Client vs. own brand:** [unknown] whether Asteroid is the owner's own studio or a client's. Ask.
- **Repo oddity:** the default branch is `claude/cloud-environment-claude-code-64v42q`. There is no `main`. [verified]

## 2. My rules & preferences

**Nothing was recorded.** No `CLAUDE.md`, rules file or memory existed. The only standing instructions I can attribute to the owner are the ones given for this handoff (2026-10-11):

- *"Never write passwords, API keys or tokens into these files. Say where each one is stored instead."* (applies to `HANDOFF.md` and `CLAUDE.md`; I'm applying it repo-wide, see `CLAUDE.md`)
- A fresh session should be able to continue *"with zero context loss"*.
- Durable rules should live *"with the project, not the account."*
- Unsure/unverifiable items must be listed so the owner can *"fill the gaps."*

**Environment defaults (not the owner's own words, set by the Claude Code cloud environment):**
- Do not open a pull request unless the owner explicitly asks.
- Develop and push on the branch the session is assigned; never push to another branch without permission.

**Naming / export locations / copy-brand rules / approval gates:** [unknown]. The owner has not stated any. Do not assume. If any exist, the owner should dictate them and they should be added here and in `CLAUDE.md`.

## 3. How I like to work

Only what the evidence supports:

- **Autonomy:** [inferred, weak evidence] fairly high. PR #2 was created and merged about 20 seconds apart (18:39:44 → 18:40:04 UTC on 2026-08-26), and five separate sessions each produced a branch the same day. Whether those sessions were supervised is [unknown].
- **Communication:** [inferred, from this one request only] the owner writes structured, numbered requests and asks for a candid list of what's unverified, so they likely prefer faithful reporting of gaps over a polished-sounding answer.
- **Time zone:** [inferred] IST (+05:30), from the merge commit's timestamp.
- **Tone, confirm-first gates, verification habits:** [unknown].
- *Suggested default (mine, not the owner's):* confirm before anything destructive or outward-facing (force-push, deleting branches, publishing, rotating or using credentials), and look at the rendered page before calling front-end work done.

## 4. Key facts & IDs

### Repo, branches, PRs [verified]

Default branch: `claude/cloud-environment-claude-code-64v42q` (tip `2c9159c`). This handoff branch starts from that tip.

| Branch | Tip | Relationship to default | Contents | Status |
|---|---|---|---|---|
| `claude/cloud-environment-claude-code-64v42q` | `2c9159c` | is the default | `.mcp.json` (Refero over HTTP) + `framer-refero-integration.js` (**contains the leaked key**) | live |
| `claude/project-handoff-docs-9gq2xg` | `2c9159c` + handoff commit | built on default | `HANDOFF.md`, `CLAUDE.md` | this work; not merged anywhere |
| `claude/asteroid-homepage-framer-m82l4a` | `4e242a7` | **unrelated history** (root commit, no common ancestor) | `index.html`, `refero-design` skill under `.agents/skills/`, symlink `.claude/skills/refero-design`, `skills-lock.json` | **the actual homepage**; unmerged |
| `claude/refero-setup-xduk0c` | `ef3a3f3` | 1 ahead, 2 behind | script reads `FRAMER_API_KEY`, `FRAMER_PROJECT_ID`, `REFERO_API_URL`, `REFERO_TOKEN` from env instead of hard-coding | the key fix; unmerged |
| `claude/illustrator-mcp-http-setup-a3p14q` | `9275525` | 1 ahead of default tip | adds an `illustrator` MCP server at `http://localhost:18412/v1/mcp` with `Authorization: Bearer ${ILLUSTRATOR_MCP_TOKEN}`. Latest push in the repo (2026-09-03) | unmerged |
| `claude/refero-mcp-integration-bz079b` | `52162a5` | 4 ahead, 2 behind | Refero server with `Authorization: Bearer ${REFERO_TOKEN}` header | unmerged experiment |
| `claude/refero-mcp-http-transport-gasyrl` | `473f673` | 1 ahead, 2 behind | **PR #1 head.** Differs from default only by a missing trailing newline in `.mcp.json` | stale, superseded |
| `claude/refero-mcp-http-transport-hd8ip6` | `93c1ef4` | merged | **PR #2 head.** Its merge is what put `.mcp.json` on default | done |

- **PR #1** is still **open**, targeting default. It is a duplicate of work already merged via PR #2.
- **PR #2** was merged into default on 2026-08-26 (merge commit `2c9159c`).
- A diff of the homepage branch against default shows `.mcp.json` and the Framer script as "deleted". That is an artifact of the histories being unrelated. Nobody deleted them on purpose.
- No issues are open. No `.gitignore` exists.
- Earlier Claude Code sessions that touched this repo (links are visible only to the account that owns them, so they may not open from the new account): `session_015MEEMUAiGwnbsKJfn62711` (PR #1), `session_0112G2kQXoSqZLuvASceES5W` (PR #2), `session_01Bhg5ftvvdjMtcSnSCThvWE` (key removal). Format: `https://claude.ai/code/<session id>`.

### Services and identifiers

- **Framer project ID:** `LPtzPpiLVfzQOuHBaXEt`. An identifier, not a secret, and already public in the repo. Env var name on the fix branch: `FRAMER_PROJECT_ID`.
- **Refero MCP:** `https://api.refero.design/mcp` (HTTP transport). Tools: `refero_search_styles`, `refero_get_style`, `refero_search_screens`, `refero_get_screen`, `refero_get_similar_screens`, `refero_get_screen_image`, `refero_search_flows`, `refero_get_flow`, `refero_search_apps`, `refero_search_sites`.
- **Illustrator MCP (branch only):** `http://localhost:18412/v1/mcp`.
- **Env var names (values are not in the repo):** `FRAMER_API_KEY`, `FRAMER_PROJECT_ID`, `REFERO_TOKEN`, `REFERO_API_URL` (optional, defaults to `https://api.refero.design`), `ILLUSTRATOR_MCP_TOKEN`. **None of these were set in the cloud container used for this handoff.** [verified]
- **Contact address shown on the homepage:** `hello@asteroid.studio`. [unknown] whether the owner controls this domain.

### Homepage design facts (branch `m82l4a`, `index.html`, 638 lines) [verified]

- Sections: fixed nav → hero (headline, lede, animated orbit `<canvas>`, "telemetry" readout) → "Trusted by" marquee → **Services** (Web Design, Development, E-Commerce, Brand & Content) → **Work / "Recent launches"** (6 cards) → **Process / "From coordinates to launch"** (Discover, Design, Build, Launch) → stats band → testimonial → **Contact CTA** → footer.
- Tokens: light bg `#EEF0F0`, text `#14161A`, accent `#8C6A24`; dark hero `#17191D` / `#0E0F12`; hero accent `#E8B04B`; 3px radius. Dark mode via `prefers-color-scheme` plus a `data-theme` override.
- Fonts (Google Fonts): **Big Shoulders Display** (display), **IBM Plex Sans** (body), **IBM Plex Mono** (labels/numbers).
- Honors `prefers-reduced-motion`. Scroll-reveal via IntersectionObserver. No framework, no build step.
- The commit message says the layout synthesizes patterns from top agency landing pages (bold typographic hero, portfolio grid, manifest-style process/stats), validated against the `refero-design` skill's "anti-AI-slop" rules.

### Gotchas discovered the hard way

1. **Hard-coded credential** in source reached a public repo (see top).
2. **Local-path MCP servers can't work in the cloud.** A `refero-styles` server with an absolute local path was tried and removed because "each session starts a fresh container" (commit `52162a5`).
3. **`localhost` MCP servers will not reach the owner's machine from a cloud session.** The Illustrator config points at `localhost:18412`. [inferred] it will only work in a local Claude Code session with the Illustrator app/bridge running; it was never confirmed working.
4. **Unrelated histories:** the homepage branch cannot be merged normally (it needs `--allow-unrelated-histories`, or copy the files across).
5. **`index.html` is an HTML fragment**: no `<!doctype>`, `<html>`, `<head>` or `<body>`. Browsers will render it, but in quirks mode. Add a proper document shell before shipping it standalone.
6. The script `framer-refero-integration.js` writes to a hard-coded path (`/home/user/asteroid/framer-refero-config.json`), which only exists in this cloud layout.
7. Many account-level plugin MCP servers (the `design`, `marketing`, `small-business` bundles, among others) failed to connect in this environment with `ERR_PROXY_TUNNEL … 403 Forbidden`. The project does not depend on them. `github`, `refero`, `Figma`, `Adobe_for_creativity`, `Magnific` and `Google_Drive` did connect.

## 5. Current state

**Done [verified]**
- Refero MCP is configured at project scope on the default branch (PR #2).
- Homepage v1 written and committed on `m82l4a`; the `refero-design` skill is installed there too.
- A key-removal fix exists on `refero-setup-xduk0c` (unmerged).
- This handoff (`HANDOFF.md` + `CLAUDE.md`) exists on `claude/project-handoff-docs-9gq2xg`, pushed but not merged to default.

**In progress / unmerged**
- Everything not on the default branch: the homepage, the key fix, the Illustrator config, the Refero auth-header experiment.
- Framer-to-Refero script: **exploratory scaffolding only.** It fetches a Framer project, probes a Refero `/api/designs` endpoint, writes a config JSON and prints "next steps". There is no evidence it ever ran successfully, and both endpoints (`api.framer.com/v1/projects/{id}`, Refero `/api/designs`) are unverified guesses.

**Blocked**
- Key rotation (owner must do it in Framer).
- Anything needing `REFERO_TOKEN`, `FRAMER_API_KEY` or `ILLUSTRATOR_MCP_TOKEN`: not set anywhere I can see.

**Open questions (owner to answer)**
1. Is Asteroid the owner's own studio or a client project? What is the actual goal (live site? Framer build? portfolio piece)?
2. Should the homepage end up in **Framer**, or stay static HTML?
3. Are the homepage's clients, stats and testimonial real? See the next point.
4. Is the Illustrator MCP meant for local sessions only?
5. Which branch should become the default, given the odd `claude/...` default?

**⚠ Homepage content looks like placeholder copy, not real facts [inferred].** The six "clients" (Lumen Outdoor, Solace Clinics, Northbound Capital, Ferro & Oak, Halide Coffee, Vantage Legal), their results ("+64% conversion", "3.2x organic traffic"…), the stats ("120+ sites launched", "98 avg. Lighthouse", "4.9/5"), and the testimonial (Priya Nandan, Northbound Capital) have no source anywhere in the repo. Do not ship them as real claims without the owner confirming each one. The social links in the footer are `#` placeholders.

## 6. Next steps (priority order)

1. **Owner: rotate/revoke the Framer API key** in Framer. Then store the new one as `FRAMER_API_KEY` (section 7). No code change fixes this.
2. **Land the key removal:** merge or cherry-pick `ef3a3f3` from `refero-setup-xduk0c` into the default branch so the live tree stops carrying the key. Ask the owner first about (a) scrubbing git history (needs a force-push; destructive, so do not do it unasked) and (b) making the repo private.
3. **Merge this handoff branch** into the default branch (needs a PR or merge, which the owner must ask for) so a fresh session on default sees `HANDOFF.md` and `CLAUDE.md`. Alternatively, start the new session from this branch.
4. **Bring the homepage into the main line.** Merge `m82l4a` with `--allow-unrelated-histories` or copy its files, and decide on default-branch naming at the same time.
5. **Finish the homepage** once the owner answers the open questions: add a proper `<!doctype>`/`<html>`/`<head>`/`<body>`, replace or confirm placeholder clients/stats/testimonial, real contact address, real social links. Then view it in a browser at phone and desktop widths. If the "98 Lighthouse" claim stays, measure it.
6. **Decide the Framer script's fate:** validate the endpoints and build it out, or delete it.
7. **Housekeeping (ask before deleting anything):** close stale PR #1; prune superseded branches (`gasyrl`, `bz079b`, `hd8ip6`); add a `.gitignore` (at least `framer-refero-config.json`, which the script generates).
8. **Illustrator MCP:** do not merge the `localhost` config into the cloud default unless the owner confirms it is wanted.

## 7. Tools & setup

| Dependency | Used for | Where configured | Re-authorise on the new account? |
|---|---|---|---|
| **GitHub MCP** (`mcp__github__*`) | PRs, branches, repo reads | Claude account connector; scoped to `sudheshimself-glitch/asteroid` | **Yes.** Reconnect GitHub at <https://claude.ai/connect-github> and make sure the Claude GitHub App is installed on the repo (<https://github.com/apps/claude/installations/select_target>). |
| **Refero MCP** | design research (styles/screens/flows) | `.mcp.json` on default branch (HTTP, no auth header) | **Probably.** It connected in this session, but which auth it uses (account sign-in vs. `REFERO_TOKEN`) is [unknown]. Re-check on first use. |
| **`refero-design` skill** | research-first design methodology | files on `m82l4a` only; source `referodesign/refero_skill` (`skills-lock.json`) | **Not on default.** Reinstall with `npx skills add https://github.com/referodesign/refero_skill --skill refero-design` (ask the owner before running it), or work from `m82l4a`. |
| **Framer REST API** | the exploratory script | env vars `FRAMER_API_KEY`, `FRAMER_PROJECT_ID` | **Yes. New key needed after rotation.** There is no Framer MCP configured. |
| **Illustrator MCP** | local Illustrator bridge | `illustrator-mcp-http-setup-a3p14q` only; `ILLUSTRATOR_MCP_TOKEN` | Local sessions only; the token location is [unknown]. |
| Figma, Adobe, Magnific, Google Drive MCPs | available in the account | account connectors | Account-level. **No evidence they were used in this project.** |

**Where secrets live.** None are stored in the repo, and none are set in the cloud container used for this handoff. For cloud sessions the secure place is the environment settings: *cloud environment menu in the session title bar → Edit → Network secrets (a.k.a. API credentials) where offered, otherwise an environment variable.* A new session then picks it up. Never paste a key into chat or a file. Where the owner kept the original keys on their side (password manager, Framer dashboard, etc.) is [unknown].

**Account-level skills** (the `anthropic-skills:*` and plugin bundles) belong to the old account and will not follow automatically.

## 8. Do not

- **Do not hard-code keys, tokens or project credentials** in source, config or docs. That is how the Framer key got into a public repo. Use env vars and name them.
- **Do not paste, print or echo a secret** into chat, logs or files, and do not test the leaked key.
- **Do not add local-path or `localhost` MCP servers** to the shared config and assume they work in cloud sessions.
- **Do not open PRs, force-push, delete branches, rewrite history, or make the repo private/public** without the owner explicitly asking.
- **Do not treat "files removed" as "secret removed."** History still has it until the key is rotated.
- **Do not trust the homepage's client names, stats or testimonial** as real.
- **Do not read the branch diffs naively** (see unrelated histories above).
- **Do not invent the owner's preferences.** If section 2 or 3 is silent, ask.

## 9. Unverified / gaps to fill

- Whether the Framer key is still active; whether the Framer and Refero endpoints used by the script exist.
- Which auth Refero MCP requires, and whether `REFERO_TOKEN` is needed in practice.
- Whether the Illustrator MCP ever worked, and where its token lives.
- Whether any homepage content is real; whether `asteroid.studio` is the owner's domain.
- Whether the homepage was ever viewed in a browser, deployed, or published anywhere.
- The owner's own rules, naming, export locations, approval gates, verification habits.
- Everything the earlier sessions discussed beyond what their commit messages and PR bodies say. Those conversations were not readable from here.
