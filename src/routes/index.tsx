import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VERTX — India's Most Advanced Drone Light Shows" },
      {
        name: "description",
        content:
          "VERTX engineers up to 1,000-drone synchronized light shows for corporates, weddings, festivals and stadiums across India.",
      },
      { property: "og:title", content: "VERTX — Drone Light Shows" },
      {
        property: "og:description",
        content:
          "Up to 1,000 drones. 15 minutes of cinematic aerial storytelling. Engineered & flown in-house.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground grain">
      <SiteHeader />
      <main>
        <Hero />
        <Portfolio />
        <UseCases />
        <HowItWorks />
        <FAQ />
        <ContactForm />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}
