import { useEffect } from 'react';
import Checkout from '@/components/Checkout';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';
const CheckoutPage: React.FC = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return; // wait until the user is loaded
    if (!isSignedIn) {
      router.push({
        pathname: '/sign-in',
        query: { redirectTo: '/Cart' }
      });
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    // This code should never be reached due to the useEffect redirection
    return <div>Redirecting to sign-in...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="text-black text-left mb-4 mt-8 font-bold ml-20">
        <Checkout />
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
