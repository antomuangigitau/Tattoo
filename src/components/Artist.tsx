import Asterisk from "lucide-react/dist/esm/icons/asterisk";

const Artist = () => {
  return (
    <section id="artist" className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          <div className="relative">

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 md:mb-8 text-center lg:text-left">
              Meet The Artist
            </h2>


            <div className="relative group w-full max-w-[456px] mx-auto">
              <img
                src="https://res.cloudinary.com/dex9sdigi/image/upload/v1769394944/Robbie_vaba8i.avif"
                alt="Spencer, the tattoo artist"
                className="w-full h-[500px] md:h-[600px] object-cover object-top"
              />


              <h3 className="absolute bottom-8 left-4 md:bottom-12 md:left-8 font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-wider z-10">
                Spence
              </h3>
            </div>
          </div>


          <div className="flex flex-col justify-center space-y-6 lg:pl-8">
            {[
              {
                desc: `Before tattooing, I filled sketchbooks with bold, abstract designs. Black ink felt powerful and timeless. My love for drawing evolved into an obsession with skin as a living canvas.`,
              },
              {
                desc: `Tattooing is more than just skill. It requires discipline. I spent years honing clean lines and bold contrasts. In blackwork, every line has intention, making each piece unforgettable.`,
              },
              {
                desc: `Now, I work from my private home studio, a space designed for focus and creativity. Here, clients feel comfortable and engaged in the process, ensuring every piece is meant to last a lifetime.`,
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <Asterisk className="w-5 h-5 mt-1 mr-3 shrink-0 text-muted-foreground" />
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}


            <div className="relative mt-8 w-[85%] sm:w-[60%] md:w-[50%] lg:w-[60%] self-end">
              <img
                src="https://res.cloudinary.com/dex9sdigi/image/upload/v1768832898/spence_rss90a.avif"
                alt="Spence working on a tattoo"
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />

              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-black font-medium text-sm">
                  10+ Years of Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;
