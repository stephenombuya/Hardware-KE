import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <div className="text-center py-12">
        <button
          onClick={() => navigate('/products')}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
        >
          View All Products
        </button>
      </div>
    </div>
  );
}