"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse bg-slate-200/75 dark:bg-slate-800/50 rounded",
        className
      )}
    />
  );
}

export default function loading() {
  return (
    <section className="container mx-auto px-4 max-w-6xl py-25">
      {/* Hero */}
      <header className="text-center mb-12">
        <Skeleton className="mx-auto h-12 md:h-16 w-3/4 max-w-2xl mb-4" />
        <Skeleton className="mx-auto h-5 w-1/2 max-w-lg" />
      </header>

      <Separator />

      {/* Story */}
      <div className="my-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Story Text */}
        <div>
          <Skeleton className="h-9 w-1/2 mb-4" />
          <Skeleton className="h-5 w-full mb-3" />
          <Skeleton className="h-5 w-3/4 mb-2" />
          <Skeleton className="h-5 w-2/3" />
        </div>
        {/* Story Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <Skeleton className="h-64 md:h-80 w-full" />
        </div>
      </div>

      {/* Features */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
        {[...Array(4)].map((_, i) => (
          <Card
            key={i}
            className="bg-slate-50 dark:bg-card/50 border-0 shadow-md"
          >
            <CardContent className="flex flex-col items-center text-center p-6 bg-card/50">
              <Skeleton className="mb-3 h-8 w-8 bg-orange-300/70 dark:bg-orange-500/80" />
              <Skeleton className="h-6 w-1/2 mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <footer className="text-center">
        <Skeleton className="mx-auto h-7 w-2/3 max-w-md mb-4" />
        <Skeleton className="mx-auto h-12 w-44 rounded-full bg-orange-400/80 dark:bg-orange-600/80" />
      </footer>
    </section>
  );
}