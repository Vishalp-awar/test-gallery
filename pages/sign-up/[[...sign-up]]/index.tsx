// app/page.tsx
"use client";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSignUp, useSession, useAuth, useClerk } from "@clerk/nextjs";
import SignupForm from "@/components/SignUpFrom";
import VerifyForm from "@/components/VerifyForm";

const Signup = () => {
  const { isLoaded, signUp } = useSignUp();
   // Import signOut
  const [clerkError, setClerkError] = useState("");
  const router = useRouter();
  const [verifying, setVerifying] = useState(false);
  const [code, setCode] = useState("");
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');
  const { signOut } = useClerk(); // Get current sessionId

  const signUpWithEmail = async ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress,
        password,
      });
      // Prepare for email verification.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setVerifying(true);
    } catch (err: any) {
      setClerkError(err.errors[0].message);
    }
  };

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;
  
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({ code });
      if (completeSignUp.status === "complete") {
        if (redirectTo === "Cart") {
          router.push("/Cart");
        } else {
          await signOut({redirectUrl:("/sign-in")}) // Prevent automatic redirection
          
        }
      } else {
        console.log("Verification status:", completeSignUp.status);
      }
    } catch (err) {
      console.log("Error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <>
      {!verifying ? (
        <SignupForm signUpWithEmail={signUpWithEmail} clerkError={clerkError} />
      ) : (
        <VerifyForm handleVerify={handleVerify} code={code} setCode={setCode} />
      )}
    </>
  );
};

export default Signup;
