"use client"
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ThankYou = () => {
  const router = useRouter();

  // Redirect to homepage after 5 seconds (optional)
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-orange-500 mb-6">Thank You!</h1>
        <p className="text-gray-700 text-lg mb-4">Your enquiry has been successfully submitted. We will get back to you soon.</p>
        <p className="text-gray-500 mb-8">You will be redirected to the homepage in a few seconds.</p>
        
        <Link href="/" className="inline-block bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 transition duration-300">
         
            Go Back to Homepage
          
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
