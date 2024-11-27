"use client"; // Ensure it's a Client Component
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ExpensesPage() {
  const router = useRouter();
  
  // Animation state for the description
  const [showDescription, setShowDescription] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setShowDescription(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2F4A62]">
      
      {/* Top section for Summary and History */}
      <div className="flex w-full max-w-4xl justify-start mt-8 space-x-8">
        {/* Summary Box */}
        <div
          className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-1000 w-1/2 ${
            showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <p className="text-2xl font-bold text-gray-800">Summary of Expenses</p>
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-600">To give:</p>
            <p className="text-lg font-semibold text-gray-600">To take:</p>
          </div>
        </div>
        
        {/* History Box */}
        <div className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-1000 w-1/2 ${
            showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}>
          <p className="text-2xl font-bold text-gray-800">History</p>
          {/* Add historical data or placeholders here */}
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-600">Recent Transactions:</p>
            <p className="text-gray-500">No transactions recorded yet.</p>
          </div>
        </div>
      </div>
      
      {/* Three side-by-side boxes */}
      <div className="flex space-x-8 mt-12">
        {/* Give Box */}
        <div
          className="w-64 h-64 bg-purple-500 text-white flex items-center justify-center text-2xl font-bold rounded-lg cursor-pointer hover:bg-purple-600 transition-colors duration-300"
          onClick={() => router.push('/expenses/give')}
        >
          Give
        </div>
        
        {/* Take Box */}
        <div
          className="w-64 h-64 bg-blue-500 text-white flex items-center justify-center text-2xl font-bold rounded-lg cursor-pointer hover:bg-blue-600 transition-colors duration-300"
          onClick={() => router.push('/expenses/take')}
        >
          Take
        </div>
        
        {/* Split Box */}
        <div
          className="w-64 h-64 bg-green-500 text-white flex items-center justify-center text-2xl font-bold rounded-lg cursor-pointer hover:bg-green-600 transition-colors duration-300"
          onClick={() => router.push('/expenses/split')}
        >
          Split
        </div>
      </div>
    </div>
  );
}
