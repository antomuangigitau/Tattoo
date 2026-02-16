import { useState } from "react";
import ContactFormInfo from "./contact/ContactFormInfo";
import { contactInfo } from "./contact/contactinfo";
import type { ContactFormData } from "./contact/contactTypes";

const phoneNumber = "254797803255";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    const message = `
  🖋️ New Tattoo Inquiry

      Name: ${data.fullName}
      Phone: ${data.phoneNumber}

      Idea:
        ${data.tattooIdea}
        `.trim();

    const whatsappUrl =
      `https://wa.me/${phoneNumber}?text=` + encodeURIComponent(message);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setIsSubmitting(false);
  };

  return (
    <ContactFormInfo
      title="Let's Create Something Permanent."
      subtitle="Custom tattoos are available by appointment only. Share your idea and I'll create a design made to last a lifetime."
      contactInfo={contactInfo}
      onSubmit={handleSubmit}
      isSubmit={isSubmitting}
    />
  );
};

export default ContactForm;
