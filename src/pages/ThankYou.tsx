import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-4">
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Thank You!</h1>
          <p className="mt-2 text-lg text-gray-600">
            Your order has been successfully placed.
          </p>
          <p className="mt-1 text-gray-500">
            We'll send you an email with your order details.
          </p>
          
          <div className="mt-8 space-y-4">
            <button
              onClick={() => navigate('/orders')}
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
            >
              View Order Status
            </button>
            <button
              onClick={() => navigate('/products')}
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}