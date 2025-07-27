'use client'

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import { PizzaItem } from '@/app/types/Cart';
import toast from 'react-hot-toast';
import { pizzas } from '../data/data';


export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { addItem, getItemCount } = useCart();
  
  const handleAddToCart = (pizza: PizzaItem) => {
    addItem(pizza);
    toast.success('added');
    setTimeout(() => {
      toast.dismiss();
    }, 3500);
    console.log('Pizza added to cart:', pizza);
  };


  const categories = ['all', 'classic', 'premium', 'vegetarian', 'spicy'];

  const filteredPizzas = pizzas.filter(pizza => {
    const matchesSearch = pizza.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         pizza.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || pizza.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container py-22 relative mx-auto flex max-w-6xl flex-col px-4 lg:block">
      <h1 className="text-3xl font-bold mb-8">Our Pizza Menu</h1>
      
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="w-full md:w-1/2">
          <Input
            type="text"
            placeholder="Search pizzas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeFilter === category ? 'default' : 'outline'}
              className={`${activeFilter === category ? 'bg-orange-500 hover:bg-orange-600' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Pizza Cards Grid */}
      {filteredPizzas.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPizzas.map(pizza => (
            <Card key={pizza.id} className="  hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{pizza.name}</CardTitle>
                <CardDescription className="">{pizza.category.charAt(0).toUpperCase() + pizza.category.slice(1)}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  {/* Replace with your actual image component */}
                  <div className="bg-gray-200  h-48 rounded-md flex items-center justify-center">
                    <Image src={pizza.image} alt={pizza.name} loading='lazy' width={200} height={200} className="w-full h-full object-contain" />
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{pizza.description}</p>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 ">{pizza.rating}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">${pizza.price.toFixed(2)}</span>
               <Button 
                className="bg-orange-500 hover:bg-orange-600"
                onClick={() => handleAddToCart(pizza)}
              >
                Add to Cart
              </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-primary">No pizzas found matching your criteria</h3>
        </div>
      )}
    </div>
  );
}