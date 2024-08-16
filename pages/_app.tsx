import { AppProps } from 'next/app';
import '../styles/globals.css';
import { CartProvider } from '@/context/CartContext';
import { ClerkProvider } from '@clerk/nextjs';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ClerkProvider>
      <CartProvider>
        <ComponentWrapper Component={Component} pageProps={pageProps} />
      </CartProvider>
    </ClerkProvider>
  );
}

function ComponentWrapper({ Component, pageProps }: { Component: any, pageProps: any }) {
  // Any logic you need with `useUser` can be placed here
  return <Component {...pageProps} />;
}

export default MyApp;
