import ContactFormInfo from "./contact/ContactFormInfo";
import { contactInfo } from "./contact/contactinfo";
import type { ContactFormData } from "./contact/contactTypes";

// Example Usage Demo
const ContactForm = () => {
  const handleSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <ContactFormInfo
      title="Let's Create Something Permanent."
      subtitle="Custom tattoos are available by appointment only. Share your idea and I'll create a design made to last a lifetime."
      contactInfo={contactInfo}
      onSubmit={handleSubmit}
    />
  );
};

export default ContactForm;
