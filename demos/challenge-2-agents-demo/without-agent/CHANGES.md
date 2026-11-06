# Without Agent — direct implementation, no plan

Prompt was answered by editing `GalleryGrid.tsx` only — the agent never opened
`gallery/page.tsx`, so it had no idea pagination and other filters live there.

## Diff (conceptual — not applied to real source)

```tsx
// src/components/gallery/GalleryGrid.tsx
export function GalleryGrid({ ... }: GalleryGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());
+ const [sortBy, setSortBy] = useState('newest');

  const filteredPhotos = mockPhotos.filter(photo => { /* unchanged */ });

+ const sortedPhotos = [...filteredPhotos].sort((a, b) => {
+   if (sortBy === 'likes') return b.likes - a.likes;
+   if (sortBy === 'views') return b.views - a.views;
+   return new Date(b.dateTaken).getTime() - new Date(a.dateTaken).getTime();
+ });

  return (
    <div className={`w-full ${className}`}>
+     <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border p-2 mb-4">
+       <option value="newest">Newest</option>
+       <option value="likes">Most Liked</option>
+       <option value="views">Most Viewed</option>
+     </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
-       {displayedPhotos.map((photo, index) => (
+       {sortedPhotos.slice(0, currentPage * limit).map((photo, index) => (
```

## Problems found in review (things a reviewer/hooks would catch)

1. **Visually orphaned control** — the `<select>` renders above the photo grid,
   disconnected from the existing Search/Filters row in `gallery/page.tsx`. Every
   other control lives in that row; this one doesn't.
2. **No dark mode classes** — every other element in this codebase pairs a
   light class with a `dark:` variant (see `copilot-instructions.md`). This
   `<select>` has neither.
3. **Pagination not reset** — `toggleTag`, `clearAllTags`, and `handleSearchChange`
   in `page.tsx` all call `setCurrentPage(1)` when their filter changes. This
   new sort control can't do that — it doesn't own `currentPage` and nobody
   wired a callback for it. Result: sort silently behaves differently from
   every other filter in the app.
3. **`dateTaken` is optional in the `Photo` type** (`dateTaken?: string`), but
   `new Date(b.dateTaken)` is called unguarded — `new Date(undefined)` produces
   `Invalid Date`, and `Invalid Date` comparisons are `NaN`, so "Newest" sort
   order becomes silently unstable for any photo missing a date.
4. **Ignored an existing, installed dependency** — `@radix-ui/react-select` is
   in `package.json` but was never even considered; a plain unstyled `<select>`
   was used instead, with no `aria-label`.

None of this fails a build or a type check — it just quietly ships an
inconsistent, subtly buggy feature.
