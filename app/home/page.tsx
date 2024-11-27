"use client"; // Ensure it's a Client Component
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  
  // Animation state for the description
  const [showDescription, setShowDescription] = useState(false);
  
  // Trigger animation on mount
  useEffect(() => {
    setShowDescription(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2F4A62]">
      
      {/* Animated Description */}
      <div
        className={`text-4xl font-bold text-blue-600 mb-10 transition-all duration-1000 ${
          showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        Welcome to Smart Personal Assistance!
      </div>
      
      {/* Two side-by-side boxes */}
      <div className="flex space-x-8">
        {/* Expenses Box */}
        <div
          className="w-64 h-64 bg-orange-500 text-white flex items-center justify-center text-2xl font-bold rounded-lg cursor-pointer hover:bg-orange-600 transition-colors duration-300"
          onClick={() => router.push('/expenses')}
        >
          Expenses
        </div>
        
        {/* Notes Box */}
        <div
          className="w-64 h-64 bg-green-500 text-white flex items-center justify-center text-2xl font-bold rounded-lg cursor-pointer hover:bg-green-600 transition-colors duration-300"
          onClick={() => router.push('/notes')}
        >
          Notes
        </div>
      </div>
    </div>
  );
}
