import type { ContactFormProps } from "./contactTypes";
import ContactCard from "./ContactCard";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const FormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, hyphens, and apostrophes",
    ),
  phoneNumber: z
    .string()
    .regex(/^[\d\s\-+()]+$/, "Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 digits"),
  tattooIdea: z.string().optional(),
});

type FormInput = z.infer<typeof FormSchema>;

const ContactFormInfo = ({
  isSubmit,
  title,
  subtitle,
  contactInfo,
  onSubmit,
  className = "",
}: ContactFormProps) => {
  const {
    register,
    handleSubmit,

  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      tattooIdea: "",
    },
  });
  const handleFormSubmit = (data: FormInput) => {
    if (onSubmit) {
      onSubmit(data);
    }
  };
  return (
    <form
      id="contact"
      onSubmit={handleSubmit(handleFormSubmit)}
      className={`min-h-screen bg-black text-white p-8 md:p-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-400 text-base md:text-lg max-w-md">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} {...info} />
            ))}
          </div>

          <div className="border border-gray-800 rounded-3xl p-8 md:p-10">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  {...register("fullName")}
                  className="w-full bg-transparent border border-gray-700 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                  placeholder=""
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  {...register("phoneNumber")}
                  className="w-full bg-transparent border border-gray-700 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                  placeholder=""
                />
              </div>

              <div>
                <label
                  htmlFor="tattooIdea"
                  className="block text-sm text-gray-400 mb-2">
                  Tattoo Idea
                </label>
                <textarea
                  id="tattooIdea"
                  {...register("tattooIdea")}
                  rows={6}
                  className="w-full bg-transparent border border-gray-700 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                  placeholder=""
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-gray-200 hover:bg-white text-black font-medium py-4 rounded-full transition-colors duration-200">
                {isSubmit ? "Submitting" : "Submit Information"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactFormInfo;
