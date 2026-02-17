import { images } from "@/lib/heroData";

const CurvedMask = () => {
  return (
    <div className="py-18 overflow-hidden">
      <div className="hidden md:flex justify-center gap-4 overflow-hidden rounded-t-[15%] shadow-lg">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            srcSet={img.srcSet}
            alt={`Tattoo gallery work specimen ${i + 1}`}
            loading="lazy"
            sizes="240px"
            style={{
              transform: "perspective(1000px) rotateX(2deg)",
              transformOrigin: "center top",
            }}
            className="w-48 aspect-3/4 object-cover rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      <div className="md:hidden">
        <div className="flex justify-center gap-4 overflow-hidden pb-4">
          {images.slice(0, 4).map((img, i) => (
            <div
              key={i}
              className="
                shrink-0 
                snap-center
                w-40  
                transform
                rounded-xl
                overflow-hidden
                shadow-2xl
                hover:scale-105
                transition-transform duration-300
              "
              style={{
                transform: "perspective(800px) rotateX(5deg)",
                transformOrigin: "center top",
              }}>
              <img
                src={img.src}
                srcSet={img.srcSet}
                sizes="240px"
                alt={`Tattoo gallery work specimen ${i + 1} (mobile view)`}
                loading="lazy"
                className="w-full aspect-3/4 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurvedMask;
