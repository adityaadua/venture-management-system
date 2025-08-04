// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col">
      <header className="bg-[#014D65] text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">MiV</h1>
        <div className="space-x-4">
          <Link href="/login">
            <span className="bg-white text-[#014D65] px-4 py-2 rounded-md font-medium cursor-pointer">Sign In</span>
          </Link>
          <Link href="/signup">
            <span className="bg-[#00AEEF] px-4 py-2 rounded-md text-white font-medium cursor-pointer">Register</span>
          </Link>
        </div>
      </header>

      <main className="flex flex-col md:flex-row flex-grow p-8 gap-10">
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Mekong Inclusive Ventures</h2>
          <p className="text-lg text-gray-600">
            Your central hub for managing your venture’s growth — from diagnostics to readiness, GEDSI compliance, and capital facilitation — all in one place.
          </p>
          <div className="mt-8 space-y-2 text-sm">
            <p><strong>Contact Details:</strong></p>
            <p>Street 123, Phnom Penh, Cambodia</p>
            <p>Phone Numbers:</p>
            <p>+855 92 563 948</p>
            <p>+855 87 242 060</p>
          </div>
          <div className="mt-4 flex gap-4">
            <a href="#" className="text-blue-500 hover:underline">Facebook</a>
            <a href="#" className="text-blue-400 hover:underline">LinkedIn</a>
          </div>
        </div>

        <div className="md:w-1/2">
          <Image
            src="/assets/hero-banner.jpg"
            alt="Banner"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </main>
    </div>
  );
}
