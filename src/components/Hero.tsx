import CurvedMask from "./CurvedMask";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-25 overflow-hidden">
      <div className="container flex justify-center mx-auto px-6 gap-12">
        {/* Text Content */}
        <div className="z-10  order md:order-1 text-center animate-slide-up">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-8">
            Turn your <span className="italic text-gray-400">Skin</span>
            <br />
            into <span className="text-accent">Art.</span>
          </h1>
          <p className="text-white text-base max-w-2xl mx-auto mb-2 font-light tracking-wide">
            A calm, guided process focused on clarity, comfort, and timeless
            design. <br />
            <span>
              No rush. No pressure. Just work you'll be proud to wear.
            </span>
          </p>
        </div>
      </div>
      {/* Visual Carousel (Tilted Cards) */}
      <CurvedMask />

      {/* Background Gradient */}
      {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-surface to-transparent -z-10" /> */}

      <div className="flex justify-center gap-4 z-10 mb-12 animate-slide-up-delay">
        <a href="">
          <Button variant="default">Book an Appointment</Button>
        </a>
        <a href="">
          <Button variant="outline">View the Flashbook</Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;

//  <div className="relative order-1 md:order-2 h-[400px] md:h-[600px] flex items-center justify-center animate-fade-in">
//           <div className="absolute w-64 h-80 md:w-80 md:h-96 bg-gray-800 rotate-6 rounded-sm overflow-hidden shadow-2xl border border-white/10 z-10 hover:rotate-0 transition-transform duration-500">
//             <img
//               src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1000&auto=format&fit=crop"
//               alt="Tattoo Work 1"
//               className="w-full h-full object-cover opacity-80"
//             />
//           </div>
//           <div className="absolute w-64 h-80 md:w-80 md:h-96 bg-gray-800 -rotate-6 rounded-sm overflow-hidden shadow-2xl border border-white/10 z-0 translate-x-12 translate-y-8 grayscale hover:grayscale-0 transition-all duration-500">
//             <img
//               src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1000&auto=format&fit=crop"
//               alt="Tattoo Work 2"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
