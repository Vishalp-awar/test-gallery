// app/signin/page.tsx
"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSignIn,useSession } from "@clerk/nextjs";
import SigninForm from "@/components/SigninForm";

const Signin = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [clerkError, setClerkError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');
  const session = useSession();
  const signInWithEmail = async ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => {
    if (!isLoaded) return;

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push(redirectTo || "/");
      } else {
        console.log(result);
      }
    } catch (err: any) {
      console.log("Error:", JSON.stringify(err, null, 2));
      setClerkError(err.errors[0].message);
    }
  };

  return (
    <SigninForm signInWithEmail={signInWithEmail} clerkError={clerkError} />
  );
};

export default Signin;
