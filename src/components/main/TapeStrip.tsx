// Tape Strip Component
const TapeStrip = ({ position }: TapeStripProps) => {
  const positions = [
    "top-0 left-1/4 -translate-y-1/2 rotate-12",
    "top-0 right-1/4 -translate-y-1/2 -rotate-12",
    "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-3",
    "top-0 left-1/3 -translate-y-1/2 -rotate-6",
  ];

  return (
    <div
      className={`absolute ${positions[position]} w-20 h-8 bg-gray-400 opacity-50 z-10`}
      style={{
        background:
          "linear-gradient(180deg, rgba(200,200,200,0.6) 0%, rgba(180,180,180,0.4) 100%)",
      }}
    />
  );
};

export default TapeStrip;
