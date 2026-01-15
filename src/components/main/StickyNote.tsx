// Sticky Note Component

const StickyNote = ({
  text,
  color = "yellow",
  position = "right",
}: StickyNoteProps) => {
  const colors: Record<string, string> = {
    yellow: "bg-yellow-300",
    pink: "bg-pink-300",
    blue: "bg-blue-300",
    green: "bg-green-300",
  };

  const positions: Record<string, string> = {
    right: "absolute -right-4 top-1/2 -translate-y-1/2 rotate-6",
    left: "absolute -left-4 top-1/2 -translate-y-1/2 -rotate-6",
    bottom: "absolute left-1/2 -translate-x-1/2 -bottom-4 rotate-3",
  };

  const colorGradients: Record<string, string> = {
    yellow: "linear-gradient(135deg, #fef08a 0%, #fde047 100%)",
    pink: "linear-gradient(135deg, #fbcfe8 0%, #f9a8d4 100%)",
    blue: "linear-gradient(135deg, #bfdbfe 0%, #93c5fd 100%)",
    green: "linear-gradient(135deg, #bbf7d0 0%, #86efac 100%)",
  };

  return (
    <div
      className={`${colors[color]} ${positions[position]} p-3 shadow-lg w-32 min-h-20 flex items-center justify-center`}
      style={{
        background: colorGradients[color],
      }}>
      <p className="text-xs font-handwriting text-gray-800 text-center font-medium leading-tight">
        {text}
      </p>
    </div>
  );
};

export default StickyNote;
