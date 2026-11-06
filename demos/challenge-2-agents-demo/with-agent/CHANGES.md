# With Agent (Plan Agent → implement) — result

Implemented strictly from `PLAN.md` in this folder.

## Diff (conceptual — not applied to real source)

```tsx
// src/app/gallery/page.tsx
const [searchQuery, setSearchQuery] = useState('');
+ const [sortBy, setSortBy] = useState<'newest' | 'likes' | 'views'>('newest');
  const filterRef = useRef<HTMLDivElement>(null);

+ const handleSortChange = (value: 'newest' | 'likes' | 'views') => {
+   setSortBy(value);
+   setCurrentPage(1); // same convention as toggleTag / handleSearchChange
+ };

  // inside the controls row, next to Search and Filters:
+ <select
+   value={sortBy}
+   onChange={(e) => handleSortChange(e.target.value as typeof sortBy)}
+   aria-label="Sort photos"
+   className="rounded-xl border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/80 px-4 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
+ >
+   <option value="newest">Newest</option>
+   <option value="likes">Most Liked</option>
+   <option value="views">Most Viewed</option>
+ </select>

  <GalleryGrid
    selectedTags={selectedTags}
    searchQuery={searchQuery}
    currentPage={currentPage}
+   sortBy={sortBy}
    ...
  />
```

```tsx
// src/components/gallery/GalleryGrid.tsx
interface GalleryGridProps {
  ...
+ sortBy?: 'newest' | 'likes' | 'views';
}

export function GalleryGrid({ ..., sortBy = 'newest' }: GalleryGridProps) {
  const filteredPhotos = mockPhotos.filter(photo => { /* unchanged */ });

+ const sortedPhotos = [...filteredPhotos].sort((a, b) => {
+   if (sortBy === 'likes') return b.likes - a.likes;
+   if (sortBy === 'views') return b.views - a.views;
+   const dateA = a.dateTaken ? new Date(a.dateTaken).getTime() : 0;
+   const dateB = b.dateTaken ? new Date(b.dateTaken).getTime() : 0;
+   return dateB - dateA;
+ });

- const displayedPhotos = filteredPhotos.slice(startIndex, endIndex);
+ const displayedPhotos = sortedPhotos.slice(startIndex, endIndex);
```

## Why this version holds up under review

| Concern from `without-agent/CHANGES.md` | How this version avoids it |
|---|---|
| Orphaned control | Lives in the same row as Search/Filters in `page.tsx` |
| Missing dark mode classes | Reuses the exact class set from the existing search `<input>` |
| Pagination not reset | `handleSortChange` calls `setCurrentPage(1)`, matching existing handlers |
| `Invalid Date` on missing `dateTaken` | Explicit fallback to `0` before comparing |
| Unused dependency ignored/misused | Deliberately *not* introduced — decision is written down in the plan, not left implicit |

Same feature, same model — the only difference is that the second run
answered "what does this repo already do for similar cases?" before writing
code.
