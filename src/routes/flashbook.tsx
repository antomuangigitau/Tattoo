import { lazy, Suspense } from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";
const FAQ = lazy(() => import("@/components/FAQ"));
const ContactForm = lazy(() => import("@/components/ContactForm"));

export const Route = createFileRoute("/flashbook")({
  component: FlashbookLayout,
});

function FlashbookLayout() {
  return (
    <div className="mt-25">
      <Outlet />
      <Suspense fallback={<div className="h-20" />}>
        <FAQ />
        <ContactForm />
      </Suspense>
    </div>
  );
}
