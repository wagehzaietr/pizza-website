"use client";

import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-7";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Fullscreen } from "lucide-react";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-react";

function page() {
  return (
    <main className="min-h-screen">
      <HeroHeader />
      <HeroSection/>
      <IntegrationsSection />
    </main>
  );
}

export default page;
