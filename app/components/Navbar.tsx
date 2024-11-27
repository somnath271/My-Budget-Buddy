"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-white/20 backdrop-blur-sm p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Image
                src="/search-icon.svg"
                alt="Search"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-6 ml-6">
          <button className="hover:bg-white/20 p-2 rounded-full transition-colors">
            <Image
              src="/notification-icon.svg"
              alt="Notifications"
              width={24}
              height={24}
            />
          </button>
          <button className="hover:bg-white/20 p-2 rounded-full transition-colors">
            <Image
              src="/profile-icon.svg"
              alt="Profile"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
