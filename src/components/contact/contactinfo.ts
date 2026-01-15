import { MailIcon, InstagramIcon, LocationIcon } from "./icons";
import type { ContactInfo } from "./contactTypes";

export const contactInfo: ContactInfo[] = [
  {
    icon: MailIcon,
    label: "Email me at",
    value: "leespenser5@gmail.com",
    link: "mailto:leespenser5@gmail.com",
  },
  {
    icon: InstagramIcon,
    label: "Follow me on Instagram",
    value: "@spence_tattoos_",
    link: "https://instagram.com/spence_tattoos_",
  },
  {
    icon: LocationIcon,
    label: "Tattooing at",
    value:
      "Kwame Nkrumah street Clairbourn Towers 4th floor room D4, Thika, Kenya",
  },
];
