import React from 'react';
import OrderTable from '@/components/OrderTable';
import orders from '@/data/orders';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const UserAccounts: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-6 text-center">My Orders</h1>
          <OrderTable orders={orders} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserAccounts;
