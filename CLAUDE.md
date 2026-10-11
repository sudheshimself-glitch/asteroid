# Asteroid

**Read `HANDOFF.md` before starting work.** It holds the project context, the branch map, current state, next steps, and the gaps still to be confirmed with the owner.

## Standing rules

- Never write passwords, API keys or tokens into any file in this repo: code, config, docs, or `HANDOFF.md`. Refer to the environment variable by name and say where the secret is stored. (Owner's instruction, 2026-10-11.)
- This repo is public. Treat everything committed as published.
- Do not open a pull request unless the owner explicitly asks. (Cloud-environment default.)
- Do not force-push, rewrite history, delete branches, or change repo visibility without being asked.
- If the owner's preferences are not written down here or in `HANDOFF.md`, ask instead of assuming.

## Repo facts

- Default branch is `claude/cloud-environment-claude-code-64v42q` (there is no `main`).
- The homepage (`index.html`) and the `refero-design` skill live only on branch `claude/asteroid-homepage-framer-m82l4a`, which has unrelated history from the default branch.
- Credentials are supplied through environment variables (`FRAMER_API_KEY`, `FRAMER_PROJECT_ID`, `REFERO_TOKEN`, `ILLUSTRATOR_MCP_TOKEN`). See `HANDOFF.md` section 7.
