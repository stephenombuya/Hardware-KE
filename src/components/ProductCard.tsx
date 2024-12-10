import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../store/useCart';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ product, quantity: 1 });
  };

  return (
    <div 
      onClick={() => navigate(`/products/${product.id}`)}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 fill-current text-yellow-400" />
          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description.slice(0, 100)}...</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">KSh {product.price.toLocaleString()}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}