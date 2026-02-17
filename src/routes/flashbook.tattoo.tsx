
import PhotoCard from "@/components/flashbook/PhotoCard";
import { createFileRoute } from "@tanstack/react-router";
import { tattooImages } from "@/lib/photos";


export const Route = createFileRoute("/flashbook/tattoo")({
  component: TattooGallery,
});

function TattooGallery() {
  const description = `Explore our tattoo work.Ready to get inked?`;

  return (
    <PhotoCard
      title="Tattoo"
      galleryImages={tattooImages}
      description={description}
    />
  );
}
