import React from 'react';
import { Package } from 'lucide-react';
import { formatCurrency } from '../utils/currency';
import { Order } from '../types';

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Order #{order.id}</p>
            <p className="text-sm text-gray-500">
              {new Date(order.date).toLocaleDateString()}
            </p>
          </div>
          <div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                order.status === 'delivered'
                  ? 'bg-green-100 text-green-800'
                  : order.status === 'processing'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6">
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <div>
                <p className="font-medium">{item.product.name}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <p className="font-medium">
                {formatCurrency(item.product.price * item.quantity)}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Total</p>
            <p className="font-semibold">{formatCurrency(order.total)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}