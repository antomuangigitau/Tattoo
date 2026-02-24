
import Navbar from "@/components/Navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

import { lazy, Suspense } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnnouncementBanner from "@/components/AnnouncementBanner";

const Footer = lazy(() => import("@/components/Footer"));

const RootLayout = () => (
  <div className="relative bg-background text-text min-h-screen">
    <div className="bg-noise" />
    <AnnouncementBanner />
    <Navbar />

    <Outlet />
    <WhatsAppButton />
    <Suspense fallback={<div className="h-20" />}>
      <Footer />
    </Suspense>

  </div>
);

export const Route = createRootRoute({ component: RootLayout });
