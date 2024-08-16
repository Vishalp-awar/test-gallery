// pages/register.tsx
import React from 'react';
import RegisterForm from '@/components/RegistrationForm';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Register: React.FC = () => {
  const router = useRouter();

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <RegisterForm />
        <p className="mt-4 text-sm">
          Already registered?{' '}
          <a href="/LoginPage" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Register;
