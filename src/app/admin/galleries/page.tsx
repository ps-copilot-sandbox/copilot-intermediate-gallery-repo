import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Hero, SectionContainer, SectionTitle } from "@/components/ui";
import { mockPhotos } from "@/lib/mock-photo-data";

export default function AdminGalleriesPage() {
  return (
    <div className="page-gradient">
      <Hero
        title="All Galleries"
        description="Browse every photo across your galleries"
      />

      <SectionContainer>
        <Link href="/admin" className="nav-link inline-flex items-center gap-2 mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Admin Dashboard
        </Link>
        <SectionTitle title={`All Photos (${mockPhotos.length})`} />
        <GalleryGrid limit={mockPhotos.length} currentPage={1} />
      </SectionContainer>
    </div>
  );
}
