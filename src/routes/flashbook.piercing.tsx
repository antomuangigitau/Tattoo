import { createFileRoute } from "@tanstack/react-router";
import PhotoCard from "@/components/flashbook/PhotoCard";
import { piercingImages } from "@/lib/photos";
export const Route = createFileRoute("/flashbook/piercing")({
  component: PiercingGallery,
});

function PiercingGallery() {
  return (
    <PhotoCard
      title="Piercing"
      galleryImages={piercingImages}
      description="Explore our piercing work. Ready to get pierced?"
    />
  );
}
