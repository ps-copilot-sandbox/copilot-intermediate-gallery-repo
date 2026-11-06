# Implementation Plan — Gallery Sort Control

_(Generated using `.github/agents/Plan.agent.md` — no code written yet, plan only.)_

## Overview
Add a sort control (Newest / Most Liked / Most Viewed) to the gallery page,
placed in the existing search/filter control row, following the same
"change resets pagination to page 1" convention already used by tag and
search filtering.

## Requirements
- Sort control must sit next to the existing `Search` and `Filters` controls
  in `gallery/page.tsx`, not inside `GalleryGrid`.
- Changing sort resets `currentPage` to `1`, matching `toggleTag`,
  `clearAllTags`, and `handleSearchChange`.
- No new UI dependency: `@radix-ui/react-select` is installed but unused
  anywhere in `src/` — introducing it for one control adds an unproven pattern.
  Use a native `<select>` styled with the same class conventions as the
  existing search `<input>` (border/bg/dark: variants), so it looks native to
  this codebase, not bolted on.
- `Photo.dateTaken` is optional — sorting by "Newest" must treat photos
  without a date as least-recent, not `Invalid Date`.
- Must keep dark mode parity (`dark:` variant for every new class, per
  project convention).

## Implementation Steps
1. `gallery/page.tsx`: add `sortBy` state (`'newest' | 'likes' | 'views'`,
   default `'newest'`) and a `handleSortChange` that sets it and calls
   `setCurrentPage(1)`, mirroring `handleSearchChange`.
2. `gallery/page.tsx`: render a `<select>` in the existing controls row,
   styled with the same class set as the search input, with
   `aria-label="Sort photos"`.
3. Pass `sortBy` down as a prop into `<GalleryGrid />`.
4. `GalleryGrid.tsx`: add `sortBy` to `GalleryGridProps` (default `'newest'`),
   sort `filteredPhotos` into a new `sortedPhotos` array before the existing
   pagination slice — do not mutate `filteredPhotos` in place.
5. Guard the date comparator: fall back to `0` (epoch) when `dateTaken` is
   missing, so undated photos sort last under "Newest" instead of producing
   `NaN` comparisons.

## Testing
- Manual: switch each sort option, confirm order changes and page resets to 1.
- Manual: confirm dark mode classes render correctly in dark theme.
- Edge case: a mock photo with `dateTaken` omitted still sorts predictably
  under "Newest" (goes last, not randomly placed).
- Regression: existing tag/search filtering still combines correctly with the
  new sort (filter first, then sort, then paginate).
