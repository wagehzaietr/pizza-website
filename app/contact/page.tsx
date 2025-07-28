// app/contact/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {/* --- LEFT: Contact Form --- */}
        <Card className="bg-card/50 border-border rounded-2xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-black text-foreground">
              Say <span className="text-orange-500">Ciao!</span>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Craving a slice? Drop us a message and we’ll get back in minutes.
            </p>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We’ll reply shortly 🍕");
              }}
            >
              <Input
                required
                placeholder="Your name"
                className="bg-background/60 border-border rounded-xl"
              />
              <Input
                required
                type="email"
                placeholder="Email address"
                className="bg-background/60 border-border rounded-xl"
              />
              <Textarea
                required
                placeholder="Tell us how we can help..."
                rows={5}
                className="bg-background/60 border-border rounded-xl resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-xl py-3"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* --- RIGHT: Store Info --- */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Visit the Pizzeria
          </h2>

          <Card className="bg-card/50 border-border rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">
                    42 Napoli Lane, Brooklyn, NY 11201
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <Clock className="text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Mon-Thu: 11 AM – 10 PM
                    <br />
                    Fri-Sat: 11 AM – 12 AM
                    <br />
                    Sun: 12 PM – 9 PM
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <Phone className="text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Call us</p>
                  <a
                    href="tel:+13475551234"
                    className="text-sm text-muted-foreground hover:text-orange-400 transition"
                  >
                    (347) 555-PIZZA
                  </a>
                </div>
              </div>

              <Separator />

              <div className="flex items-start gap-4">
                <Mail className="text-orange-500 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a
                    href="mailto:hello@pizzeria.com"
                    className="text-sm text-muted-foreground hover:text-orange-400 transition"
                  >
                    hello@pizzeria.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            variant="outline"
            className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black rounded-xl"
            onClick={() =>
              window.open(
                "https://maps.google.com/?q=42+Napoli+Lane+Brooklyn+NY",
                "_blank"
              )
            }
          >
            Open in Maps
          </Button>
        </div>
      </div>
    </main>
  );
}