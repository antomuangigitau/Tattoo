import img1 from "@/assets/ai_modified.webp";
import img2 from "@/assets/lion3.webp";
import img3 from "@/assets/black.webp";
import img4 from "@/assets/back.webp";
import img5 from "@/assets/familia.webp";
import img6 from "@/assets/familia_2.webp";
import img7 from "@/assets/lion.webp";

const images = [img1, img2, img3, img4, img5, img6, img7];

const CurvedMask = () => {
  return (
    <div className="py-18 overflow-hidden">
      {/* Desktop view */}
      <div className="hidden md:flex justify-center gap-4 overflow-hidden rounded-t-[15%] shadow-lg">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Tattoo gallery work specimen ${i + 1}`}
            loading="lazy"
            style={{
              transform: "perspective(1000px) rotateX(2deg)",
              transformOrigin: "center top",
            }}
            className="w-48 aspect-3/4 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Mobile view - fixed size, no shrinking */}
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
                src={img}
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
