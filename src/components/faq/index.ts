//Type definitions
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  title: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

export interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}
