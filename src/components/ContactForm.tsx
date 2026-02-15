import { useState } from "react";
import ContactFormInfo from "./contact/ContactFormInfo";
import { contactInfo } from "./contact/contactinfo";
import type { ContactFormData } from "./contact/contactTypes";

// Example Usage Demo
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://hook.eu1.make.com/c2pgzw6ao1608ymrue26qgh678tviph9",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.fullName,
            phone: data.phoneNumber,
            message: data.tattooIdea,
          }),
        },
      );

      if (response.ok || response.status === 200) {
        alert("Message sent successfully! We'll get back to you soon.");
        // Reset form here if needed
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
