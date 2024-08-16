// app/components/SignInForm.tsx
import Link from "next/link";
import { FormEvent } from "react";
import { useAuth } from "@clerk/nextjs";
interface SignInFormProps {
  signInWithEmail: ({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) => void;
  clerkError: string;
}

const SignInForm = ({ signInWithEmail, clerkError }: SignInFormProps) => {
  const sessionId = useAuth();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    sessionId.signOut();
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    signInWithEmail({ emailAddress: email, password: password });
  };

  return (
    <div className="justify-center mt-12 grid justify-items-center md:mt-20">
      <div className="h-auto bg-gray rounded-xl md:rounded-3xl w-80 md:w-96">
        <div className="p-6 md:p-8">
          <h1 className="mb-6 text-3xl font-light text-white">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
            {clerkError && (
              <p className="mb-4 text-red-500 text-sm">{clerkError}</p>
            )}
            <button
              type="submit"
              className="w-full bg-slate-500 text-white p-2 rounded hover:bg-slate-600"
            >
              Sign in
            </button>
          </form>
          <p className="text-sm font-light text-center text-white mt-4">
            Don&apos;t have an account?
            <Link className="ml-2 text-slate-200" href="/sign-up">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
