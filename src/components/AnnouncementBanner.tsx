import { useState } from "react";

const STORAGE_KEY = "banner_dismissed";

const AnnouncementBanner = () => {
  const [visible, setVisible] = useState(() => {
    return !sessionStorage.getItem(STORAGE_KEY);
  });
  const [exiting, setExiting] = useState(false);

  const dismiss = () => {
    setExiting(true);

    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, 350);
  };

  if (!visible) return null;

  return (
    <div
      className={`announcement-banner ${exiting ? "announcement-exit" : ""}`}
      role="banner"
      aria-label="Limited time offer">
      <div className="fixed left-0 top-0 bottom-0 w-1 bg-accent" />

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-10 py-2.5 sm:py-2 text-center">
        <p className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-white/90">
          <span className="text-amber-400 mr-1.5">⚡</span>
          Limited Time —{" "}
          <span className="text-accent-hover font-extrabold text-sm sm:text-base">
            50% OFF
          </span>{" "}
          All Tattoos &amp; Piercings
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 px-4 py-1 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 hover:scale-105 whitespace-nowrap">
          Book Your Spot
          <span className="arrow-nudge">→</span>
        </a>
      </div>
      <button
        onClick={dismiss}
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10"
        aria-label="Dismiss banner">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round">
          <line x1="1" y1="1" x2="13" y2="13" />
          <line x1="13" y1="1" x2="1" y2="13" />
        </svg>
      </button>
    </div>
  );
};

export default AnnouncementBanner;
