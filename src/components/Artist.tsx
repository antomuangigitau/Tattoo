import { Asterisk } from "lucide-react";

const Artist = () => {
  return (
    <section id="artist" className="py-24 bg-surface relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group cursor-none">
            <div className="absolute inset-0 bg-accent/20 translate-x-4 translate-y-4 border border-accent/30 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <img
              src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1000&auto=format&fit=crop"
              alt="Spencer, the tattoo artist"
              className="relative z-10 w-full h-150 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="place-self-end">
            <h4 className="text-white z-10 font-serif absolute top-22 left-2/5 capitalize text-7xl mb-4">
              Meet <br />
              The Artist
            </h4>
            <h2 className="z-10 absolute bottom-1/8 left-1/6 font-serif font-bold tracking-widest text-white uppercase text-4xl md:text-6xl mb-8 letter-spacing-wide">
              Spence
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over a decade of experience in fine-line and illustrative
              blackwork, I believe a tattoo is a collaboration between memory
              and skin. My studio is a sanctuary for those seeking art that ages
              as gracefully as they do.
            </p>

            <div className="space-y-6">
              {[
                {
                  desc: `Before the needle ever touches skin, my art begins in sketchbooks 
      filled with bold, abstract designs. I have always believed that black 
      ink is powerful and timeless. This lifelong love for drawing naturally 
      evolved into an obsession with treating the skin as a living canvas, 
      a philosophy at the very heart of my practice.`,
                },
                {
                  desc: `Every session takes place in my private home studio. A space intentionally 
      designed for focus and creativity. Here, clients can relax and feel engaged in 
      a collaborative process, ensuring comfort and trust from the first consultation 
      to the final result.`,
                },
                {
                  desc: `Each design is created with bold, timeless intention and crafted through 
      disciplined technique, ensuring not just beauty, but a piece truly meant to 
      last a lifetime.`,
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <Asterisk className="w-10 h-10 mt-1 mr-3 shrink-0 text-muted-foreground" />
                  <p className="text-white text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;
