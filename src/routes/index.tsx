
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import Artist from "@/components/Artist";


const ProcessTimeline = lazy(() => import("@/components/ProcessTimeline"));
const FAQ = lazy(() => import("@/components/FAQ"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const Quote = lazy(() => import("@/components/Quote"));
const PhotoData = lazy(() => import("@/components/PhotoData"));

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <Hero />
      <Artist />
      <Suspense fallback={<div className="h-20" />}>
        <PhotoData />
        <ProcessTimeline />
        <FAQ />
        <Quote />
        <ContactForm />
      </Suspense>
    </>
  ),
});
