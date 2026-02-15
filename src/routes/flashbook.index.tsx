//flashbook.tsx
import { createFileRoute } from "@tanstack/react-router";
import ServiceCard from "@/components/flashbook/ServiceCard";
import { services } from "@/lib/services";

export const Route = createFileRoute("/flashbook/")({
  component: Flashbook,
});

const openingHours = [
  { day: "Monday", hours: "10:00 - 20:00" },
  { day: "Tuesday", hours: "10:00 - 20:00" },
  { day: "Wednesday", hours: "10:00 - 20:00" },
  { day: "Thursday", hours: "10:00 - 20:00" },
  { day: "Friday", hours: "10:00 - 20:00" },
  { day: "Saturday", hours: "10:00 - 20:00" },
  { day: "Sunday", hours: "12:00 - 18:00" },
];

function Flashbook() {
  return (
    <section className="py-16 md:py-24">
      {/* Hero Section */}
      <div className="container mx-auto px-6 text-center mb-12">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Ink with <span className="italic text-gray-400">Intention</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Ready to make it official? Whether you're booking your next tattoo or
          piercing, you're in the right place. Tap below to start your{" "}
          <span className="text-accent font-medium">journey</span> with Spence
          Tattoos.
        </p>
      </div>

      {/* Services Grid - 2x2 on all screens */}
      <div className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {services.map(({ title, image, galleryRoute, serviceType }) => (
            <ServiceCard
              key={title}
              title={title}
              image={image}
              galleryRoute={galleryRoute}
              serviceType={serviceType}
            />
          ))}
        </div>
      </div>

      {/* Opening Hours */}
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto bg-surface/95 rounded-2xl p-6 md:p-8">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            Visit Us
          </h2>
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-6">
            Spence Tattoos
          </h3>
          <p className="text-muted-foreground text-sm mb-4">Opening Hours:</p>
          <ul className="space-y-2">
            {openingHours.map((item) => (
              <li key={item.day} className="flex justify-between text-sm">
                <span className="text-white">{item.day}:</span>
                <span
                  className={
                    item.hours === "Closed"
                      ? "text-accent"
                      : "text-muted-foreground"
                  }>
                  {item.hours}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="block mt-6 text-center text-sm uppercase tracking-wider text-accent hover:text-white border-b border-accent pb-1 w-fit mx-auto transition-colors">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
