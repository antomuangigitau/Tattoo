
import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";
import Artist from "@/components/Artist";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Quote from "@/components/Quote";
import PhotoData from "@/components/PhotoData";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <Hero />
      <Artist />
      <PhotoData />
      <ProcessTimeline />
      <FAQ />
      <Quote />
      <ContactForm />
    </>
  ),
});
