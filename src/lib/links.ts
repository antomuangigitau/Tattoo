export type NavLink = {
  name: string;
  href: string;
};

export const navLinks: Record<string, NavLink[]> = {
  default: [
    { name: "Artist", href: "#artist" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
  ],
  "/flashbook": [
    { name: "Work", href: "/#work" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
  ],
  "/flashbook/tattoo": [
    { name: "Work", href: "/#work" },
    { name: "FAQ", href: "#faq" },
  ],
  "/flashbook/piercing": [
    { name: "Work", href: "/#work" },
    { name: "FAQ", href: "#faq" },
  ],
};

export const links = navLinks.default;
