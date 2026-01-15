import { useState } from "react";
import type { FAQAccordionProps } from ".";
import AccordionItem from "./AccordionItem";
// Main FAQ Accordion Component
const FAQAccordion = ({
  title,
  subtitle,
  faqs,
  className = "",
}: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`min-h-screen bg-black text-white p-8 md:p-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          {/* Title */}
          <div>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              {title}
            </h1>
          </div>

          {/* Subtitle */}
          {subtitle && (
            <div className="md:max-w-sm">
              <p className="text-gray-400 text-sm md:text-base">{subtitle}</p>
            </div>
          )}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQAccordion;
