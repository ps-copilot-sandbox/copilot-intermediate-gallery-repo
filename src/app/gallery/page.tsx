'use client';

import { useState, useEffect, useRef } from "react";
import { Search, Filter, Grid, List, ChevronDown, X } from "lucide-react";
import { GalleryGrid, type SortOption } from "@/components/gallery/GalleryGrid";
import { Hero, SectionContainer, SectionTitle } from "@/components/ui";
import { AVAILABLE_TAGS } from "@/lib/mock-tag-data";

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const filterRef = useRef<HTMLDivElement>(null);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLoadMore = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setCurrentPage(prev => prev + 1);
    setIsLoading(false);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    // Reset to first page when filters change
    setCurrentPage(1);
  };

  const clearAllTags = () => {
    setSelectedTags([]);
    setCurrentPage(1);
  };

  // Reset page when search changes
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleSortChange = (value: SortOption) => {
    setSortBy(value);
    setCurrentPage(1);
  };
  return (
    <div className="page-gradient">
      <Hero 
        title="Photo Gallery"
        description="Browse and discover amazing photography"
      />

      <SectionContainer className="mb-4">
        {/* Filters and Search */}
        <div className="card-base p-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search photos..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/80 pl-11 pr-4 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm hover:shadow-md"
                  aria-label="Search photos"
                />
              </div>
            </div>

            {/* Filter Controls */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value as SortOption)}
                className="form-select w-auto"
                aria-label="Sort photos"
              >
                <option value="newest">Newest</option>
                <option value="likes">Most Liked</option>
                <option value="views">Most Viewed</option>
              </select>
              <div className="relative" ref={filterRef}>
                <button 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="btn-secondary flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                  {selectedTags.length > 0 && (
                    <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-0.5 ml-1">
                      {selectedTags.length}
                    </span>
                  )}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Filter Dropdown */}
                {isFilterOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 card-base border border-slate-300 dark:border-slate-600 shadow-lg z-10">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-slate-900 dark:text-white">Filter by Tags</h3>
                        {selectedTags.length > 0 && (
                          <button
                            onClick={clearAllTags}
                            className="nav-link-active text-sm"
                          >
                            Clear all
                          </button>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                        {AVAILABLE_TAGS.map(tag => (
                          <label
                            key={tag}
                            className="flex items-center gap-2 p-2 rounded-lg hover-bg cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedTags.includes(tag)}
                              onChange={() => toggleTag(tag)}
                              className="rounded border-slate-300 text-blue-500 focus:ring-blue-500"
                            />
                            <span className="text-sm text-slate-700 dark:text-slate-300 capitalize">
                              {tag}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex border border-slate-300 dark:border-slate-600 rounded-lg overflow-hidden">
                <button className="p-2 bg-blue-500 text-white">
                  <Grid className="h-4 w-4" />
                </button>
                <button className="p-2 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600">
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Selected Tags Display */}
          {selectedTags.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Active filters:
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedTags.map(tag => (
                  <span
                    key={tag}
                    className="status-badge status-active inline-flex items-center gap-1"
                  >
                    {tag}
                    <button
                      onClick={() => toggleTag(tag)}
                      className="hover:bg-blue-200 dark:hover:bg-blue-800 rounded-full p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle title="Gallery" />
        {/* Gallery Grid */}
        <GalleryGrid 
          limit={6}
          currentPage={currentPage}
          onLoadMore={handleLoadMore}
          isLoading={isLoading}
          selectedTags={selectedTags}
          searchQuery={searchQuery}
          sortBy={sortBy}
        />
      </SectionContainer>
    </div>
  );
}
