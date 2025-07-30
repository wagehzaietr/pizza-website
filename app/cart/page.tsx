// app/cart/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";   // <-- NEW
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getCartTotal } = useCart();


  const handleCheckout = () => {
    toast.success("Pizza ordered successfully! 🍕" );
  };

  if (items.length === 0) {
    return (
      <div className="container px-4 mx-auto max-w-6xl text-center py-25">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Your Cart</h1>
        <p className="mb-8 text-lg text-muted-foreground">Looks like your cart is empty.</p>
        <Link href="/menu" prefetch>
          <Button className="bg-primary hover:bg-primary/90">Browse Menu</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-25 px-4 mx-auto max-w-6xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Your Cart</h1>

      <div className="rounded-xl bg-card shadow dark:bg-background border dark:border-gray-700">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 border-b dark:border-gray-700 last:border-0"
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                <Image loading="lazy" height={800} width={800} src={item.image} alt={item.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="flex items-center mt-4 sm:mt-0 gap-4">
              <div className="flex items-center border rounded-md dark:border-gray-600">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="h-8 w-8 p-0"
                >
                  -
                </Button>
                <Input
                  type="text"
                  value={item.quantity}
                  readOnly
                  className="w-10 h-8 text-center border-0 focus-visible:ring-0"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="h-8 w-8 p-0"
                >
                  +
                </Button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-destructive hover:text-destructive"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}

        <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Button variant="outline" onClick={clearCart} className="w-full sm:w-auto">
            Clear Cart
          </Button>

          <div className="text-right w-full sm:w-auto">
            <div className="text-lg font-semibold">
              Total: ${getCartTotal().toFixed(2)}
            </div>
            <Button
              className="mt-3 w-full sm:w-auto bg-primary hover:bg-primary/90"
              onClick={handleCheckout} // <-- NEW
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}