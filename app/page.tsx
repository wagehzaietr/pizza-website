

import HeroSection from "@/components/hero-section";
import React from "react";
import BestSellers from "@/components/best-sellers";

function page() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <BestSellers/>
    </main>
  );
}

export default page;
