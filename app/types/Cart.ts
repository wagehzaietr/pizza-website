// types/cart.ts
export interface PizzaItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'classic' | 'premium' | 'vegetarian' | 'spicy';
  image: string;
}

export interface CartItem extends PizzaItem {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: PizzaItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
}