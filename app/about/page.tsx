"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Pizza, Flame, ChefHat, HeartHandshake } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const { resolvedTheme } = useTheme();

  return (
    <section className="container mx-auto px-4 max-w-6xl py-25">
      {/* Hero */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
          Crafted with <span className="text-orange-500">Flame</span> & Passion
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
          We’re not just making pizza—we’re building memories, one slice at a
          time.
        </p>
      </header>

      <Separator />

      {/* Story */}
      <div className="my-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            Our Story
          </h2>
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            Pizzeria started in a tiny kitchen in Dasmascus with one stone oven and
            a dream: to serve honest, fire-kissed pizza that tastes like home.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            Today we keep the same fire burning—hand-tossed dough, San-Marzano
            tomatoes, fresh mozzarella—delivered straight to your table.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <Image
            width={800}
            height={800}
            loading="lazy"
            src="/about-img.webp"
            alt="Brick oven pizza"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Features */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
        {[
          {
            icon: <Pizza className="h-8 w-8" />,
            title: "Hand-Tossed",
            desc: "Every pie is stretched by hand, never pressed.",
          },
          {
            icon: <Flame className="h-8 w-8" />,
            title: "900° Oven",
            desc: "Blistered crusts in 90 seconds—just like Naples.",
          },
          {
            icon: <ChefHat className="h-8 w-8" />,
            title: "Master Pizzaiolos",
            desc: "Trained in the old-world art of dough + fire.",
          },
          {
            icon: <HeartHandshake className="h-8 w-8" />,
            title: "Community First",
            desc: "We give back 5¢ of every slice to local schools.",
          },
        ].map((feat) => (
          <Card
            key={feat.title}
            className="bg-slate-50 dark:bg-card/50 border-0 shadow-md hover:shadow-xl transition-shadow"
          >
            <CardContent className="flex flex-col items-center text-center p-6 bg-card/50">
              <div className="mb-3 text-orange-500">{feat.icon}</div>
              <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">
                {feat.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {feat.desc}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <footer className="text-center">
        <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
          Ready to taste the difference?
        </h3>
        <Link href="/menu">
          <Button
            size="lg"
            className={`font-semibold rounded-full px-8 py-3 transition-all hover:scale-105
              ${
                resolvedTheme === "dark"
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-black text-white hover:bg-slate-800"
              }`}
          >
            Explore the Menu
          </Button>
        </Link>
        
      </footer>
    </section>
  );
}