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

type Pizza = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'classic' | 'premium' | 'vegetarian' | 'spicy';
  rating: number;
  image: string;
};

// Data
export const bestSellers: BestSellerItem[] = [
  {
    id: 1,
    title: "Pepperoni Pizza",
    description: "Classic pepperoni with mozzarella and tomato sauce.",
    basePrice: 10,
    image: "/hero-img2.jpeg",
  },
  {
    id: 2,
    title: "Margherita Pizza",
    description: "Fresh basil, mozzarella, and rich tomato sauce.",
    basePrice: 9,
    image: "/row-img4.png",
  },
  {
    id: 3,
    title: "BBQ Chicken Pizza",
    description: "Grilled chicken, BBQ sauce, onions, and mozzarella.",
    basePrice: 11,
    image: "/row-img3.png",
  },
  {
    id: 4,
    title: "Veggie Delight",
    description: "Mushrooms, bell peppers, onions, olives, and more.",
    basePrice: 8,
    image: "/row-img2.png",
  },
];

const sizes: SizeOption[] = [
  { label: "Small", multiplier: 1 },
  { label: "Medium", multiplier: 1.5 },
  { label: "Large", multiplier: 2 },
];

export const extras: string[] = [
  "Extra Cheese",
  "Olives",
  "Mushrooms",
  "Bacon",
  "Pineapple",
  "Onions",
  "Spinach",
  "Tomatoes",
  "Chili Flakes",
  "Garlic Sauce",
];

 export const pizzas: Pizza[] = [
    {
      id: '1',
      name: 'Margherita',
      description: 'Classic tomato sauce, mozzarella, and basil',
      price: 10.99,
      category: 'classic',
      rating: 4.8,
      image: '/row-img2.png'
    },
    {
      id: '2',
      name: 'Pepperoni',
      description: 'Tomato sauce, mozzarella, and pepperoni',
      price: 12.99,
      category: 'classic',
      rating: 4.7,
      image: '/row-img4.png'
    },
    {
      id: '3',
      name: 'Truffle Mushroom',
      description: 'Truffle oil, wild mushrooms, and ricotta',
      price: 15.99,
      category: 'premium',
      rating: 4.9,
      image: '/hero-img.png'
    },
    {
      id: '4',
      name: 'Veggie Delight',
      description: 'Bell peppers, onions, mushrooms, olives, and tomatoes',
      price: 13.99,
      category: 'vegetarian',
      rating: 4.6,
      image: '/row-img3.png'
    },
  ];