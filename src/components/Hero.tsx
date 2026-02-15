import { Link } from "@tanstack/react-router";
import CurvedMask from "./CurvedMask";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative pt-25 overflow-hidden">
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
        <a href="#contact">
          <Button variant="default">Book an Appointment</Button>
        </a>
        <Link to="/flashbook">
          <Button variant="outline">View the Flashbook</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
