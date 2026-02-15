import type { NavLink } from "@/lib/links";
import { cn } from "@/lib/utils";

interface MobileNavbarProps {
  isOpen: boolean;
  closeMenu: () => void;
  links: NavLink[];
}
const MobileNavbar = ({ isOpen, closeMenu, links }: MobileNavbarProps) => {
  return (
    <div
      id="mobile-menu"
      className={cn(
        "fixed inset-0 bg-background/95 w-full h-dvh backdrop-blur-xl z-40 lg:hidden flex flex-col items-center justify-start pt-32 space-y-8 transition-all duration-300",
        isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      )}
      onClick={closeMenu}>
      <nav
        className="flex flex-col items-center gap-6"
        onClick={(e) => e.stopPropagation()}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={closeMenu}
            className="text-2xl font-serif text-white hover:text-accent transition-colors">
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          className="mt-4 text-2xl font-serif text-accent border-b border-accent pb-1">
          Book Appointment
        </a>
      </nav>
    </div>
  );
};

export default MobileNavbar;
