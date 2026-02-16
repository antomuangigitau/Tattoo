import { useState } from "react";
import type { FAQAccordionProps } from ".";
import AccordionItem from "./AccordionItem";

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
      className={`bg-black text-white p-8 md:p-16 ${className}`}>
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">

          <div>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">
              {title}
            </h2>
          </div>


          {subtitle && (
            <div className="md:max-w-sm">
              <p className="text-gray-400 text-sm md:text-base">{subtitle}</p>
            </div>
          )}
        </div>


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
