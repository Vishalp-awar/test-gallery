import React from 'react';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
// import LoginForm from '@/components/LoginForm'; 
import { useRouter } from 'next/router';
import { RedirectToSignIn, useUser } from '@clerk/nextjs';
import LoginPage from '../LoginPage';


const CartPage: React.FC = () => {
  
  const { cart } = useCart();
  
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        {/* Render the Cart component with the cart items and total */}
        <Cart items={cart} total={total} />
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
