"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, CookingPot, ShieldCheck, ThumbsUp, Truck, Utensils } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <CookingPot className="h-10 w-10" />,
      title: "Fresh Ingredients",
      description: "We use only the freshest ingredients sourced from trusted local suppliers.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Fast Delivery",
      description: "Hot pizzas delivered to your doorstep in 30 minutes or less.",
    },
    {
      icon: <ThumbsUp className="h-10 w-10" />,
      title: "Best Quality",
      description: "Our authentic recipes and techniques ensure the best pizza experience.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "Hygiene Guaranteed",
      description: "We follow strict safety protocols in our kitchens for your wellbeing.",
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Free Delivery",
      description: "Enjoy free delivery on all orders over \$25 within our service area.",
    },
    {
      icon: <Utensils className="h-10 w-10" />,
      title: "Special Diet Options",
      description: "Gluten-free, vegan, and vegetarian options available for everyone.",
    },
  ];

  return (
    <section className="py-25 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Why <span className="text-primary bg-orange-100 dark:bg-orange-950/30 px-2 py-1 rounded-md">Choose Us</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We're passionate about crafting the perfect pizza experience for our customers.
            Here's what sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 border-border rounded-2xl overflow-hidden transition-all hover:shadow-md hover:-translate-y-1"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}