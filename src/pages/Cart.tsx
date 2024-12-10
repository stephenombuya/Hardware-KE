import React from 'react';
import { Trash2 } from 'lucide-react';
import { useCart } from '../store/useCart';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { items, removeItem, updateQuantity } = useCart();
  const navigate = useNavigate();

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">Your cart is empty</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center gap-4 border-b py-4"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p className="text-gray-500">KSh {item.product.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.product.id, parseInt(e.target.value))
                      }
                      className="w-20 border rounded px-2 py-1"
                    />
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-500"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>KSh {total}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold mb-4">
                <span>Total</span>
                <span>KSh {total}</span>
              </div>
              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-orange-500 text-white py-2 rounded-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}