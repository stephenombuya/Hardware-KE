import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

export default function Products() {
  const [category, setCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  const filteredProducts = PRODUCTS.filter((product) => {
    const categoryMatch = category === 'all' || product.category === category;
    const priceMatch =
      priceRange === 'all' ||
      (priceRange === 'under1000' && product.price < 1000) ||
      (priceRange === '1000to5000' && product.price >= 1000 && product.price <= 5000) ||
      (priceRange === 'over5000' && product.price > 5000);

    return categoryMatch && priceMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">All Products</h1>
        <div className="flex gap-4">
          <select
            className="border rounded-lg px-4 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="Cement">Cement</option>
            <option value="Steel">Steel</option>
            <option value="Aggregates">Aggregates</option>
            <option value="Tools">Tools</option>
          </select>
          <select
            className="border rounded-lg px-4 py-2"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="under1000">Under KSh 1,000</option>
            <option value="1000to5000">KSh 1,000 - 5,000</option>
            <option value="over5000">Over KSh 5,000</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}