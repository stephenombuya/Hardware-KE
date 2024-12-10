import React from 'react';
import ProductCard from './ProductCard';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Premium Portland Cement',
    description: 'High-quality cement suitable for all construction needs. Provides excellent strength and durability.',
    price: 750,
    category: 'Cement',
    images: ['https://images.unsplash.com/photo-1518709766631-a6a7f45921c3'],
    rating: 4.8,
    reviews: [],
    stock: 500
  },
  {
    id: '2',
    name: 'Steel Reinforcement Bars',
    description: 'Grade 60 steel reinforcement bars for structural concrete. Available in various sizes.',
    price: 2500,
    category: 'Steel',
    images: ['https://images.unsplash.com/photo-1518391846015-55a9cc003b25'],
    rating: 4.9,
    reviews: [],
    stock: 1000
  },
  {
    id: '3',
    name: 'Construction Sand',
    description: 'Clean, graded sand perfect for concrete mixing and masonry work.',
    price: 450,
    category: 'Aggregates',
    images: ['https://images.unsplash.com/photo-1589939705384-5185137a7f0f'],
    rating: 4.7,
    reviews: [],
    stock: 2000
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
