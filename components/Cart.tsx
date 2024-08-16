import React from 'react';
import Link from 'next/link';
import { SignedIn } from '@clerk/nextjs';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Props {
  items: CartItem[];
  total: number;
}

const Cart: React.FC<Props> = ({ items, total }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h1>

      {/* Card for empty cart */}
      {items.length === 0 && (
        <div className="bg-white rounded-lg shadow-md p-8 mb-4 mx-auto max-w-lg">
          <p className="text-center">Your cart is empty.</p>
        </div>
      )}

      {/* Card for non-empty cart */}
      {items.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-4 max-w-lg mx-auto">
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <ul className="divide-y divide-gray-200">
              {items.map(item => (
                <li key={item.id} className="flex justify-between items-center py-2 px-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 h-12 w-12">
                      <img
                        className="h-12 w-12 rounded-md object-cover"
                        src={`path/to/your/images/${item.id}.jpg`} // Adjust based on your image path
                        alt={item.name}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="text-gray-600">${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between mt-4">
            <span className="font-bold text-xl">Total:</span>
            <span className="font-bold text-xl">${total.toFixed(2)}</span>
          </div>
          <div className="mt-6 text-center">
            <Link href="/checkout" className="border border-slate-800 bg-slate-200 hover:bg-slate-600 hover:text-white text-black font-semibold py-2 px-4 rounded">Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
