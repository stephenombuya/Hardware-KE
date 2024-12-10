import React from 'react';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../store/useCart';
import { useAuth } from '../store/useAuth';

export default function Navbar() {
  const navigate = useNavigate();
  const { items } = useCart();
  const { isAuthenticated } = useAuth();

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 lg:hidden" />
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Hardware KE
            </Link>
          </div>
          
          <div className="hidden lg:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-orange-500">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-orange-500">Products</Link>
            <Link to="/contact" className="text-gray-600 hover:text-orange-500">Contact</Link>
          </div>

          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate(isAuthenticated ? '/profile' : '/auth')}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <User className="h-6 w-6 text-gray-600" />
            </button>
            <button 
              onClick={() => navigate('/cart')}
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}