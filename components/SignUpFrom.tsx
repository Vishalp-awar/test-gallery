// app/components/SignUpForm.tsx
import Link from "next/link";

interface SignUpFormProps {
  signUpWithEmail: ({emailAddress, password }:{emailAddress: string, password: string}) => void
  clerkError: string
}

const SignupForm = ({signUpWithEmail, clerkError}: SignUpFormProps) => {
  return (
    <div className="justify-center mt-12 grid justify-items-center md:mt-20">
      <div className="h-auto bg-emerald-200 rounded-xl md:rounded-3xl w-80 md:w-96">
        <div className="p-6 md:p-8">
          <h1 className="mb-6 text-3xl font-light text-white">
            Sign Up
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const target = e.target as typeof e.target & {
                email: {value: string};
                password: {value: string};
              };
              const email = target.email.value;
              const password = target.password.value;
              signUpWithEmail({emailAddress: email, password: password});
            }}
          >
           <div className="mb-4">
        <label className="block text-gray-700">Email</label>
         
             <input
                placeholder="Email address"
          type="email"
          name="email"
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
        </div>
        <div className="mb-6">
        <label className="block text-gray-700">Password</label>
        
        <input
         placeholder="Password"
          type="password"
          name="password"
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
        </div>
          
            <h2 className="text-red mb-8">
              {clerkError && <p>{clerkError}</p>}
            </h2>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              
            >
              Create an account
            </button>
          </form>
          <p className="text-sm font-light text-center text-white">
            Already have an acccount?
            <Link className="ml-2 text-slate-200" href="/sign-in">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm
