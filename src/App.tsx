import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Artist from "./components/Artist";

// Lazy loaded components
const ProcessTimeline = lazy(() => import("./components/ProcessTimeline"));
const FAQ = lazy(() => import("./components/FAQ"));
const Quote = lazy(() => import("./components/Quote"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const Footer = lazy(() => import("./components/Footer"));
const PhotoData = lazy(() => import("./components/PhotoData"));

// --- Main App ---
function App() {
  return (
    <div className="relative bg-background text-text min-h-screen">
      {/* Noise Texture Overlay */}
      <div className="bg-noise" />

      <Navbar />
      <Hero />
      <Artist />
      <Suspense fallback={<div className="h-20" />}>
        <PhotoData />
        <ProcessTimeline />
        <FAQ />
        <Quote />
        <ContactForm />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
