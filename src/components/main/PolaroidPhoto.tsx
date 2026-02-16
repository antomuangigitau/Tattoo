import StickyNote from "./StickyNote";
import TapeStrip from "./TapeStrip";

const PolaroidPhoto = ({
  image,
  date,
  stickyNote,
  rotation = 0,
  index,
  alt,
}: PolaroidPhotoProps) => {
  const randomRotations = [-8, -4, -2, 2, 4, 6, 8, -6];
  const appliedRotation =
    rotation || randomRotations[index % randomRotations.length];

  return (
    <div
      className="relative"
      style={{
        transform: `rotate(${appliedRotation}deg)`,
        transition: "transform 0.3s ease",
      }}>
      <TapeStrip position={index % 4} />

      <div
        className="bg-white p-3 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:rotate-0 cursor-pointer"
        style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }}>
        <div className="bg-gray-200 aspect-square mb-3 overflow-hidden">
          <img
            src={image}
            alt={alt || "Polaroid"}
            className="w-full h-full object-cover"
          />
        </div>

        {date && (
          <p className="text-center font-handwriting text-gray-800 text-sm">
            {date}
          </p>
        )}
      </div>

      {stickyNote && <StickyNote {...stickyNote} />}
    </div>
  );
};

export default PolaroidPhoto;
