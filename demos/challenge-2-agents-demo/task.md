# Demo Task (given verbatim to both runs)

> "Add a sort control to the gallery page: Newest, Most Liked, Most Viewed."

Run once with the default agent, no plan, straight to code.
Run once with the `Plan Agent` first, then implement from that plan.

Ground truth checked before writing this demo (so the comparison stays honest):
- `@radix-ui/react-select` is a listed dependency but **unused anywhere in `src/`** (verified via search) — a real decision point either agent has to face.
- Pagination (`currentPage`) is owned by `gallery/page.tsx`, not `GalleryGrid` — every existing filter (`tags`, `search`) resets it to page 1 on change.
