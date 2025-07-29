

import HeroSection from "@/components/hero-section";
import React from "react";
import BestSellers from "@/components/best-sellers";
import AboutPage from "./about/page";
import WhyChooseUs from "@/components/WhyChooseUs";

function page() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <BestSellers/>
      <WhyChooseUs/>
      <AboutPage/>
    </main>
  );
}

export default page;
