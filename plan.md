# Project Improvement Plan

## 1. Problem statement
The Photo Gallery & Portfolio app (Next.js 15, React 19, TypeScript, Tailwind 4) works as a mock-data demo. A review found:
- **Bugs** in `UploadZone` and `GalleryGrid`.
- **Accessibility gaps** (unlabeled buttons, hover-only actions, an inaccessible modal).
- **Unfinished features** (placeholder modal, gradient placeholders instead of images, simulated upload).
- **Missing tooling** (no tests, no CI, mismatched ESLint config version).
- **Tight coupling** between mock data and components.

## 2. Approach
Work in four phases. Fix correctness first, then accessibility and UI, then structure, then tooling and docs. Each todo is small enough to ship and verify on its own.

**Verification for every todo:** run `npm run lint` and `npx tsc --noEmit`, then `npm run build`. Check the affected page in `npm run dev`.

**Out of scope:** a real upload backend, storage, authentication, and persistence of likes. These need product decisions first.

## 3. Phases and todos

### Phase 1: Correctness fixes

**1. `fix-upload-zone`** (`src/components/upload/UploadZone.tsx`)
- Add `maxSize: 10 * 1024 * 1024` to `useDropzone`, since the UI promises 10MB.
- Use `fileRejections` to show a per-file error message (too large, wrong type, too many files).
- Use the existing `'error'` status in `UploadedFile` for failures.
- Track the simulated-upload `setInterval` and `setTimeout` handles in a ref. Clear them when a file is removed and on unmount.
- Revoke all remaining object URLs on unmount.
- Replace `Math.random().toString(36)` IDs with `crypto.randomUUID()`.
- Done when: an oversize or non-image file shows an error, and there are no state updates after unmount.

**2. `fix-gallery-pagination`** (`src/components/gallery/GalleryGrid.tsx`)
- Remove the unused `totalPages` and `startIndex`. Slice with `slice(0, currentPage * limit)` and document that the behavior is cumulative.
- Lowercase both sides of the tag comparison in the filter.
- Wrap the filtering in `useMemo` keyed on `selectedTags` and `searchQuery`.
- Cap the animation delay with `Math.min(index, 5) * 0.1`, or key it to the page's new items, so later items don't wait seconds.
- Done when: filtering is case-insensitive, and loading more photos doesn't replay long staggered delays.

### Phase 2: Accessibility and UI

**3. `a11y-gallery`** (depends on 2)
- Add `aria-label` to the like, download, share and close buttons. Add `aria-pressed` to the like button.
- Show the action buttons on `group-focus-within` as well as hover. Keep them visible on touch devices (no hover).
- Give "View Details" a visible focus ring.
- Done when: all controls are reachable and labeled using only the keyboard.

**4. `radix-photo-modal`** (depends on 2)
- Replace the hand-rolled modal with `@radix-ui/react-dialog` (already installed). This gives focus trap, Escape to close, backdrop click and `role="dialog"`.
- Show real details in it: title, tags, photographer, likes, views and downloads.
- Remove the "Placeholder for future implementation" comment.
- Done when: the dialog traps focus, closes on Escape, and returns focus to its trigger.

**5. `refactor-gradients-buttons`** (depends on 2)
- Replace the six-way nested ternary with a `GRADIENTS` array indexed by `index % GRADIENTS.length`.
- Extract an `IconButton` component in `src/components/ui/` using `class-variance-authority` and `clsx`, replacing the repeated `p-2 rounded-full ...` classes.
- Export it from `components/ui/index.ts`.
- Done when: there is no duplicated button class string in `GalleryGrid`.

### Phase 3: Structure

**6. `data-access-layer`** (depends on 2)
- Add `src/lib/photos.ts` exposing `getPhotos()`, which wraps `mockPhotos`.
- `GalleryGrid` receives `photos: Photo[]` as a prop instead of importing mock data.
- Keep pages as server components where possible, and mark only interactive pieces `'use client'`.
- Done when: `GalleryGrid` has no import from `mock-photo-data` apart from the `Photo` type.

**7. `next-image`** (depends on 4)
- Use `next/image` for photos and upload previews. Previews use blob URLs, so use `unoptimized` or a plain `<img>` with a lint-ignore and a reason.
- Add `images.remotePatterns` in `next.config.ts` once image hosts are known.
- Done when: the `no-img-element` lint warning is gone.

**8. `loading-error-boundaries`**
- Add `loading.tsx` and `error.tsx` for the gallery, upload and admin routes.
- Add `metadata` (title, description, Open Graph) to each page and the layout.
- Done when: each route shows a loading skeleton and a recoverable error UI.

### Phase 4: Tooling and docs

**9. `add-tests`** (depends on 1, 2)
- Set up Jest (or Vitest) with React Testing Library, following the repo's `javascript-typescript-jest` skill.
- `GalleryGrid` tests: tag filter, search filter, empty state, load-more visibility.
- `UploadZone` tests: rejects oversize and non-image files, removes a file, cleans up on unmount.
- Add a `test` script to `package.json`.

**10. `lint-deps-ci`** (depends on 9)
- Align `eslint-config-next` (15.4.4) with `next` (15.5.18).
- Replace the deprecated `next lint` with the ESLint CLI (`eslint .`).
- Add `.github/workflows/ci.yml` running install, lint, typecheck, test and build on pull requests.

**11. `update-docs`** (depends on 10)
- Update `README.md` (scripts, structure, testing) and `COMPONENT_USAGE_GUIDE.md` (`IconButton`, the new `GalleryGrid` props, the Dialog).

## 4. Dependency order
```
1 ──────────────────────────────┐
2 ─┬─ 3                         ├─ 9 ─ 10 ─ 11
   ├─ 4 ─ 7                     │
   ├─ 5                         │
   └─ 6 ────────────────────────┘ (6 is independent of 9)
8 (independent)
```

## 5. Risks and notes
- Todos 3, 4, 5 and 6 all edit `GalleryGrid.tsx`, so do them in sequence, not in parallel, to avoid merge conflicts.
- Changing `GalleryGrid`'s props (todo 6) requires updating its callers: the home and gallery pages.
- Radix Dialog may need a small `globals.css` addition for overlay animation.
- Tracking: todos and dependencies live in the session SQL database. This file is the human-readable source of truth.
