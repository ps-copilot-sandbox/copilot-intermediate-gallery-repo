'use client';

import { useEffect, useState } from 'react';
import { Heart, Download, Share2, Eye, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Photo, mockPhotos } from '@/lib/mock-photo-data';

interface GalleryGridProps {
  limit?: number;
  className?: string;
  onLoadMore?: () => void;
  isLoading?: boolean;
  selectedTags?: string[];
  searchQuery?: string;
  currentPage?: number;
}

export function GalleryGrid({ 
  limit = 6, 
  className = "", 
  onLoadMore,
  isLoading = false,
  selectedTags = [],
  searchQuery = "",
  currentPage = 1
}: GalleryGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!selectedPhoto) {
      return;
    }

    const originalBodyOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhoto]);

  // Filter photos based on selected tags and search query
  const filteredPhotos = mockPhotos.filter(photo => {
    // Filter by tags
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => photo.tags.includes(tag.toLowerCase()));
    
    // Filter by search query
    const matchesSearch = searchQuery === "" ||
      photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (photo.photographer && photo.photographer.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesTags && matchesSearch;
  });

  // Calculate pagination
  const totalPhotos = filteredPhotos.length;
  const photosPerPage = limit;
  const startIndex = 0;
  const endIndex = currentPage * photosPerPage;
  const displayedPhotos = filteredPhotos.slice(startIndex, endIndex);
  const hasMore = endIndex < totalPhotos;

  const toggleLike = (photoId: string) => {
    setLikedPhotos(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(photoId)) {
        newLiked.delete(photoId);
      } else {
        newLiked.add(photoId);
      }
      return newLiked;
    });
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative card-elevated overflow-hidden"
          >
            {/* Photo Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* Placeholder colored rectangles since we don't have actual images */}
              <div 
                className={`w-full h-full ${
                  index % 6 === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                  index % 6 === 1 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                  index % 6 === 2 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                  index % 6 === 3 ? 'bg-gradient-to-br from-pink-400 to-pink-600' :
                  index % 6 === 4 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                  'bg-gradient-to-br from-red-400 to-red-600'
                }`}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedPhoto(photo)}
                    className="btn-secondary"
                  >
                    View Details
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => toggleLike(photo.id)}
                  className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                    likedPhotos.has(photo.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${likedPhotos.has(photo.id) ? 'fill-current' : ''}`} />
                </button>
                <button className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 backdrop-blur-sm transition-colors">
                  <Download className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 backdrop-blur-sm transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Photo Info */}
            <div className="p-4">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2 truncate">
                {photo.title}
              </h3>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {photo.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-full"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
                {photo.tags.length > 3 && (
                  <span className="text-xs text-slate-500 px-2 py-1">
                    +{photo.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    {photo.likes + (likedPhotos.has(photo.id) ? 1 : 0)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {photo.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    {photo.downloads}
                  </span>
                </div>
              </div>

              {/* Photographer */}
              {photo.photographer && (
                <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  by {photo.photographer}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {displayedPhotos.length === 0 && (
        <div className="text-center py-16">
          <div className="bg-slate-100 dark:bg-slate-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Eye className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
            {selectedTags.length > 0 || searchQuery ? 'No photos match your filters' : 'No photos yet'}
          </h3>
          <p className="text-slate-500 dark:text-slate-400">
            {selectedTags.length > 0 || searchQuery 
              ? 'Try adjusting your search terms or selected tags' 
              : 'Upload your first photos to get started'
            }
          </p>
        </div>
      )}

      {/* Load More Button */}
      {hasMore && onLoadMore && (
        <div className="text-center mt-12">
          <button
            onClick={onLoadMore}
            disabled={isLoading}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Loading...' : 'Load More Photos'}
          </button>
          <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Showing {displayedPhotos.length} of {totalPhotos} photos
          </div>
        </div>
      )}

      {/* Photo Detail Modal - Placeholder for future implementation */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white dark:bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-photo-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 id="gallery-photo-modal-title" className="text-2xl font-bold">
                  {selectedPhoto.title}
                </h2>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  ✕
                </button>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Photo details and larger view would be implemented here.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
