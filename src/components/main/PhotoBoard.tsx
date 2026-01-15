import PolaroidPhoto from "./PolaroidPhoto";

const PhotoBoard = ({ title, photos, className = "" }: PhotoBoardProps) => {
  return (
    <section id="gallery" className={`min-h-screen bg-black p-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <h1 className="text-white text-5xl md:text-6xl font-serif text-center mb-12">
            {title}
          </h1>
        )}

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <PolaroidPhoto key={index} {...photo} index={index} />
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <button className="text-accent hover:text-white transition-colors border-b border-accent pb-1 uppercase tracking-widest text-sm">
          View Full Archive
        </button>
      </div>
    </section>
  );
};

export default PhotoBoard;
