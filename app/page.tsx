

import HeroSection from "@/components/hero-section";
import React from "react";
import BestSellers from "@/components/best-sellers";
import AboutPage from "./about/page";

function page() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <BestSellers/>
      <AboutPage/>
    </main>
  );
}

export default page;
