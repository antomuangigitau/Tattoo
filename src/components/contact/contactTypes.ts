// Type definitions
import type { ComponentType } from "react";
export interface ContactInfo {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  link?: string;
}

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  tattooIdea?: string;
}

export interface ContactFormProps {
  title: string;
  subtitle?: string;
  contactInfo: ContactInfo[];
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

// export interface ContactCardProps {
//   icon: ComponentType<{ className?: string }>;
//   label: string;
//   value: string;
//   link?: string;
// }
