"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "@/components/ui/button"; // Replace with your own <button> if needed
import { bestSellers, extras } from "@/app/data/data";
import Image from "next/image";

type PizzaSize = "Small" | "Medium" | "Large";

interface BestSellerItem {
  id: number;
  title: string;
  description: string;
  basePrice: number;
  image: string;
}

interface SizeOption {
  label: PizzaSize;
  multiplier: number;
}

const sizes: SizeOption[] = [
  { label: "Small", multiplier: 1 },
  { label: "Medium", multiplier: 1.5 },
  { label: "Large", multiplier: 2 },
];

export default function BestSellers() {
  const [selected, setSelected] = useState<BestSellerItem | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [size, setSize] = useState<PizzaSize>("Medium");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  const handleAddToCart = (item: BestSellerItem) => {
    setSelected(item);
    setSize("Medium");
    setSelectedExtras([]);
    setIsOpen(true);
  };

  const toggleExtra = (extra: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extra) ? prev.filter((e) => e !== extra) : [...prev, extra]
    );
  };

  const getTotalPrice = (): number => {
    if (!selected) return 0;
    const multiplier = sizes.find((s) => s.label === size)?.multiplier ?? 1;
    return selected.basePrice * multiplier;
  };

  return (
    <div className="p-6 relative mx-auto flex max-w-6xl flex-col px-4 lg:block ">
      <h2 className="text-3xl text-center md:text-start md:text-3xl font-bold mb-4">
        Best Sellers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl shadow-md p-4 flex flex-col items-center bg-white border-1 dark:border-white/10 dark:bg-card/50"
          >
            {/* PRICE IN TOP RIGHT */}
            <div className="absolute top-3 right-3 z-10">
              <span className="bg-primary text-white px-2 py-1 rounded-full font-bold shadow">
                ${item.basePrice.toFixed(2)}
              </span>
            </div>
            <Image
              width={800}
              height={800}
              loading="lazy"
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover rounded-xl mb-2"
            />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-2 text-center">
              {item.description}
            </p>
            {/* <p className="text-lg font-bold mb-3">${item.basePrice.toFixed(2)}</p> */}
            <Button onClick={() => handleAddToCart(item)}>Order</Button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 ">
          <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-card">
            <Dialog.Title className="text-xl font-bold mb-4">
              Customize Your {selected?.title}
            </Dialog.Title>

            {/* Size Selector */}
            <div className="mb-4 ">
              <p className="font-semibold mb-1">Select Size:</p>
              <div className="flex gap-3 ">
                {sizes.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => setSize(s.label)}
                    className={`px-3 py-1 rounded-full border ${
                      size === s.label
                        ? "bg-primary text-white dark:bg-primary/90"
                        : "border-gray-300"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Extras Selector */}
            <div className="mb-4">
              <p className="font-semibold mb-1">Extras:</p>
              <div className="h-24 overflow-y-auto grid grid-cols-2 gap-2 pr-1">
                {extras.map((extra: string) => (
                  <label
                    key={extra}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={selectedExtras.includes(extra)}
                      onChange={() => toggleExtra(extra)}
                    />
                    <span>{extra}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">
                Total: ${getTotalPrice().toFixed(2)}
              </p>
              <Button onClick={() => setIsOpen(false)}>Confirm</Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
