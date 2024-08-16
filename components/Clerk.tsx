import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn } from '@clerk/nextjs';
import { useRouter } from 'next/router';

interface ClerkProviderWithRedirectProps {
  children: React.ReactNode;
  publishableKey: string;
}

export function ClerkProviderWithRedirect({ children, publishableKey }: ClerkProviderWithRedirectProps) {
  const router = useRouter();

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <SignedIn>{children}
        <SignIn></SignIn>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
        
      </SignedOut>
    </ClerkProvider>
  );
}
