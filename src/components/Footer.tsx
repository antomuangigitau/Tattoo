import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-surface border-t border-white/5 py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-left">
        <h3 className="font-serif text-2xl font-bold tracking-widest">
          SPENCE TATTOOS
        </h3>
        <p className="text-muted-foreground text-xs mt-2">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>

      <div className="flex gap-6">
        <a
          href="#"
          className="text-muted-foreground hover:text-white transition-colors">
          <Instagram size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
