import logo from "../assets/Image_4-removebg-preview_1.webp";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { name: "Work", href: "#gallery" },
    { name: "Artist", href: "#artist" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
  ];

  // Handle scroll effects (background and active section spying)
  useEffect(() => {
    const handleScroll = () => {
      // Navbar background
      setScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      const sections = links.map((link) => link.href.substring(1));
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If top of section is within the top third of viewport or if we've scrolled past it
          if (rect.top <= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      // Special case: if at top of page, clear active
      if (window.scrollY < 100) current = "";

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Remove dependency on links array to avoid re-binding

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md py-3 shadow-md border-b border-white/5"
          : "bg-transparent py-4 md:py-6"
      )}
      role="navigation"
      aria-label="Main Navigation">
      <div className="lg:container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a
          href="#"
          className="flex items-center group z-50 relative"
          aria-label="Spence Tattoos Home"
          onClick={closeMenu}>
          {/* Responsive Logo */}
          <div className="relative h-10 w-10 md:h-16 md:w-16 lg:h-20 lg:w-20 overflow-hidden transition-all duration-300">
            <img
              src={logo}
              alt="Spence Tattoos Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex items-center">
            <span className="text-white/20 text-xl md:text-2xl lg:text-3xl font-thin select-none mx-2">
              /
            </span>
            <span className="italic font-serif text-lg md:text-xl font-bold tracking-widest text-white uppercase group-hover:text-white/80 transition-colors">
              Spence Tattoos
              <span className="text-accent">.</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-8">
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-wide transition-colors relative py-1",
                  isActive
                    ? "text-white font-medium"
                    : "text-white/60 hover:text-white"
                )}
                aria-current={isActive ? "page" : undefined}>
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent animate-fade-in" />
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            className="ml-4 px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 text-sm uppercase tracking-widest rounded-sm">
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white z-50 relative p-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-md"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <MobileNavbar isOpen={isOpen} closeMenu={closeMenu} />
    </nav>
  );
};

export default Navbar;
