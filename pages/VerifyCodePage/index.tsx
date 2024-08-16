// app/verify/page.tsx
"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import VerifyForm from "@/components/VerifyForm";

const VerifyPage = () => {
  const [code, setCode] = useState("");
  const router = useRouter();
  const { user } = useUser();

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();

    if (!user?.primaryEmailAddressId) {
      alert("No primary email address found");
      return;
    }

    try {
      const response = await fetch('/api/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, emailAddressId: user.primaryEmailAddressId }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Code verified successfully");
        router.push("/sign-in"); // Redirect to sign-in page upon successful verification
      } else {
        alert("Invalid code");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <VerifyForm handleVerify={handleVerify} code={code} setCode={setCode} />
  );
};

export default VerifyPage;
