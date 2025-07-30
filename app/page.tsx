


import React from "react";
import BestSellers from "@/components/best-sellers";
import AboutPage from "./about/page";
import WhyChooseUs from "@/components/WhyChooseUs";
import dynamic from "next/dynamic";
import GlobalLoading from "./loading";

const HeroSection = dynamic(() => import("@/components/hero-section"), {
  loading: () => <GlobalLoading />,
});

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
