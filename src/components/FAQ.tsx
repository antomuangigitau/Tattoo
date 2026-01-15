import FAQAccordion from "./faq/FAQAccordion";
import { faqItems } from "./faq/faqitem";

const FAQ = () => {
  return (
    <FAQAccordion
      title="Frequently Asked Questions"
      subtitle="A few things you might want to know before booking."
      faqs={faqItems}
    />
  );
};

export default FAQ;
