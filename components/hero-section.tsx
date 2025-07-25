import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "./header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { CircleArrowRight } from "lucide-react";
import SliderItems from "./SliderItems";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44 mt-5">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-ballance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                  Slice into Happiness
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">
                  Craving pizza? We've got you covered with fresh ingredients,
                  endless flavors, and the fastest delivery. Your perfect slice
                  is just a tap away!
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="/menu">
                      <span className="text-nowrap">ORDER NOW</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  >
                    <Link href="#link">
                      <span className="text-nowrap flex justify-center items-center gap-2">
                        Learn more <CircleArrowRight className="size-5 mt-1" />
                      </span>
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                className="-z-10 rounded-4xl object-contain order-first ml-auto h-96 w-full sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-25 lg:order-last lg:h-[540px] lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                src="/hero-img.png"
                alt="Abstract Object"
                height="4000"
                width="3000"
                priority
                loading="eager"
              />
            </div>
          </div>
        </section>
        <section className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">Our most popular</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={10} speed={30} gap={120}>
                  <SliderItems image='/row-img2.png' />
                  <SliderItems image='/row-img3.png' />
                  <SliderItems image='/row-img4.png' />
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
