import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative h-[600px] bg-gray-900">
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
        alt="Construction site"
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-5xl font-bold mb-6">Building Dreams, Delivering Quality</h1>
          <p className="text-xl mb-8">Your trusted partner in construction materials and hardware supplies</p>
          <button 
            onClick={() => navigate('/products')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
