import { Link } from "@tanstack/react-router";

interface PhotoCardProps {
  title: string;
  galleryImages: string[];
  description: string;
}
const PhotoCard = ({ title, galleryImages, description }: PhotoCardProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <Link
            to="/flashbook"
            className="text-muted-foreground hover:text-white text-sm uppercase tracking-wider mb-4 inline-block">
            <span className="arrow-nudge">←</span> Back to flashbook
          </Link>
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              {title} <span className="italic text-gray-400">Gallery</span>
            </h1>
            <p className="text-muted-foreground mt-4 text-sm">{description}</p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="aspect-auto overflow-hidden rounded-lg group">
              <img
                src={img}
                loading="lazy"
                alt={`Tattoo work ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoCard;
