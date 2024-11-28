"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A1F4DB] to-[#40C9A2] p-8">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-8 text-xl font-semibold mb-12">
          <button className="text-black border-b-2 border-black pb-2">All</button>
          <button className="text-black/70 hover:text-black transition-colors">Expenses</button>
          <button className="text-black/70 hover:text-black transition-colors">Notes</button>
          <button className="text-black/70 hover:text-black transition-colors">Events</button>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Notes Card */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 flex items-center space-x-6 hover:bg-white/30 transition-all cursor-pointer"
               onClick={() => router.push('/notes')}>
            <div className="w-24 h-24 relative">
              <Image
                src="/notebook-icon.svg"
                alt="Notes"
                width={96}
                height={96}
                className="text-[#2C7A7B]"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Notes</h3>
              <p className="text-black/70">
                Capture and organize your thoughts effortlessly.
              </p>
            </div>
          </div>

          {/* Expense Tracking Card */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 flex items-center space-x-6 hover:bg-white/30 transition-all cursor-pointer"
               onClick={() => router.push('/expenses')}>
            <div className="w-24 h-24 relative">
              <Image
                src="/expense-icon.svg"
                alt="Expense Tracking"
                width={96}
                height={96}
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Expense Tracking</h3>
              <p className="text-black/70">
                Manage your finances and track spending with ease.
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mt-8">
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Image src="/note-icon.svg" alt="Notes" width={24} height={24} />
              <div className="bg-white/50 rounded-lg p-2 flex-1">recent notes</div>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="/expense-small-icon.svg" alt="Expenses" width={24} height={24} />
              <div className="bg-white/50 rounded-lg p-2 flex-1">recent expenses</div>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="/clock-icon.svg" alt="Reminder" width={24} height={24} />
              <div className="bg-white/50 rounded-lg p-2 flex-1">reminder</div>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="/eye-icon.svg" alt="Recent View" width={24} height={24} />
              <div className="bg-white/50 rounded-lg p-2 flex-1">recent view</div>
            </div>
            <div className="flex items-center space-x-4">
              <Image src="/trash-icon.svg" alt="Recently Deleted" width={24} height={24} />
              <div className="bg-white/50 rounded-lg p-2 flex-1">recently deleted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}