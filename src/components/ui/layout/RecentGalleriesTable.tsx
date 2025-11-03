"use client";
import React from "react";
import { motion } from "framer-motion";
import { Eye, Edit, Trash2 } from "lucide-react";

/**
 * Minimal shape for a gallery used by the RecentGalleriesTable component.
 */
export interface RecentGallery {
  id: number | string;
  name: string;
  type?: string;
  photos?: number;
  views?: number;
  status?: string;
  lastUpdated?: string;
}

export interface RecentGalleriesTableProps {
  /** Array of galleries to display */
  galleries?: RecentGallery[];
  /** Optional className to apply to the card wrapper */
  className?: string;
  /** Called when the view action is triggered */
  onView?: (g: RecentGallery) => void;
  /** Called when the edit action is triggered */
  onEdit?: (g: RecentGallery) => void;
  /** Called when the delete action is triggered */
  onDelete?: (g: RecentGallery) => void;
}

/**
 * RecentGalleriesTable
 *
 * A reusable, accessible table used in the admin dashboard to show recent galleries.
 * - Responsive with overflow-x handling
 * - Dark mode aware via Tailwind classes
 * - Uses Framer Motion for subtle row entrance animations
 * - Exposes callbacks for view/edit/delete actions
 */
export function RecentGalleriesTable({
  galleries = [],
  className = "",
  onView,
  onEdit,
  onDelete,
}: RecentGalleriesTableProps) {
  const handleView = (g: RecentGallery) => onView?.(g);
  const handleEdit = (g: RecentGallery) => onEdit?.(g);
  const handleDelete = (g: RecentGallery) => onDelete?.(g);

  return (
    <div className={`overflow-hidden rounded-xl ${className}`.trim()}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] table-fixed" role="table" aria-label="Recent galleries">
          <thead className="bg-slate-50 dark:bg-slate-700">
            <tr>
              <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">Gallery Name</th>
              <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">Type</th>
              <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">Photos</th>
              <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">Views</th>
              <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">Status</th>
              <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">Last Updated</th>
              <th className="text-left py-3 px-6 font-medium text-slate-700 dark:text-slate-300">Actions</th>
            </tr>
          </thead>

          <motion.tbody initial="hidden" animate="visible">
            {galleries.length === 0 && (
              <tr>
                <td colSpan={7} className="py-6 px-6 text-center text-slate-600 dark:text-slate-400">No galleries found.</td>
              </tr>
            )}

            {galleries.map((gallery, idx) => (
              <motion.tr
                key={gallery.id}
                className="table-row border-t border-slate-100 dark:border-slate-700"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03, duration: 0.22 }}
              >
                <td className="py-4 px-6">
                  <div className="font-medium text-slate-900 dark:text-white">{gallery.name}</div>
                </td>

                <td className="py-4 px-6">
                  <span className="text-slate-600 dark:text-slate-400">{gallery.type}</span>
                </td>

                <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{gallery.photos ?? 0}</td>

                <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{(gallery.views ?? 0).toLocaleString?.() ?? gallery.views}</td>

                <td className="py-4 px-6">
                  <span
                    className={
                      `status-badge ${
                        gallery.status === 'Active' || gallery.status === 'Published' ? 'status-active' : 'status-draft'
                      }`
                    }
                  >
                    {gallery.status}
                  </span>
                </td>

                <td className="py-4 px-6 text-slate-600 dark:text-slate-400">{gallery.lastUpdated}</td>

                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleView(gallery)}
                      aria-label={`View ${gallery.name}`}
                      className="btn-icon"
                      title="View"
                    >
                      <Eye className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => handleEdit(gallery)}
                      aria-label={`Edit ${gallery.name}`}
                      className="btn-icon btn-icon-success"
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => handleDelete(gallery)}
                      aria-label={`Delete ${gallery.name}`}
                      className="btn-icon btn-icon-danger"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentGalleriesTable;
