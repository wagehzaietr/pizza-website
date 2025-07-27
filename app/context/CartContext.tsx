// context/CartContext.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PizzaItem, CartItem, CartContextType } from '@/app/types/Cart';
import toast from 'react-hot-toast';

// Create the context with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// Provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Load cart from localStorage on initial render
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('pizzaCart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('pizzaCart', JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [items]);
  
  // Add an item to the cart
  const addItem = (item: PizzaItem) => {
    setItems(prevItems => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };
  
  // Remove an item from the cart
  const removeItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
    toast.success('item removed');
  };
  
  // Update item quantity
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  // Clear the entire cart
  const clearCart = () => {
    setItems([]);
    localStorage.removeItem('pizzaCart');
    toast.success('cart cleared');
  };
  
  // Calculate total price
  const getCartTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  // Get total number of items
  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };
  
  // Context value
  const value: CartContextType = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getCartTotal,
    getItemCount
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}