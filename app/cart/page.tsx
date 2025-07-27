// app/cart/page.tsx
"use client";

import { Button } from '@/components/ui/button';
import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getCartTotal } = useCart();
  
  if (items.length === 0) {
    return (
      <div className="container py-25 text-center p-6 relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <p className="mb-8">Your cart is empty</p>
        <Link href="/menu">
          <Button className="bg-orange-500 hover:bg-orange-600">
            <Link prefetch={true} href="/menu">Browse Menu</Link>
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container py-25 p-6 relative mx-auto flex max-w-6xl flex-col px-6 lg:block ">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="bg-white dark:bg-background rounded-lg shadow p-6">
        {items.map(item => (
          <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded mr-4 flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">${item.price.toFixed(2)}</p>
              </div>
            </div>
            
            <div className="flex items-center mt-4 sm:mt-0">
              <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-0 h-8"
                >
                  -
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-0 h-8"
                >
                  +
                </Button>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="ml-4 text-red-500 hover:text-red-700 dark:text-red-400"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
        
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
          <Button variant="outline" onClick={clearCart} className="mb-4 sm:mb-0">
            Clear Cart
          </Button>
          
          <div className="text-right">
            <div className="text-lg font-semibold">
              Total: ${getCartTotal().toFixed(2)}
            </div>
            <Button className="mt-4 bg-orange-500 hover:bg-orange-600">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}