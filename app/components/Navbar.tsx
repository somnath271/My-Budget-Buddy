import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">

      <Link href="/home" className="text-white text-2xl font-bold">
      Smart Assistance
          </Link>

        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          {/* <Link href="/notes" className="text-white hover:text-gray-300">
            Notes
          </Link>
          <Link href="/expenses" className="text-white hover:text-gray-300">
            Expenses
          </Link> */}
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
