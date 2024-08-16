import React from 'react';
import { Order } from '@/data/orders';

interface OrderDetailComponentProps {
  order: Order;
}

const OrderDetailComponent: React.FC<OrderDetailComponentProps> = ({ order }) => {
  return (
    <div className="container mx-auto mt-10 p-4 flex flex-col items-center">
      {/* Wrapper with black border */}
      <div className="w-full max-w-4xl border-2 border-black rounded-lg p-6 space-y-6">
        {/* Order Details Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6  bg-slate-800 text-white text-center">Order Details</h1>
          <div className="mb-4">
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
            <p><strong>Status:</strong> {order.status}</p>
          </div>
        </div>
        {/* Items Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4  bg-slate-800 text-white text-center">Items</h2>
          <ul>
            {order.items.map((item) => (
              <li key={item.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
                <p className="font-semibold"><strong>{item.name}</strong></p>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailComponent;
