/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const pathname = usePathname();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const pageName = pathname
    ?.split('/')
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase()) || 'This Page';

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Company Favicon/Logo */}
        <div className={`transition-all duration-1000 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image 
              src="/favicon.ico" 
              alt="GField Company Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Main Message */}
        <div className={`space-y-6 transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            404
          </h1>
          
          <div className="max-w-md mx-auto space-y-4">
            <p className="text-neutral-300 text-xl md:text-2xl">
              <span className="text-red-600 font-semibold">"{pageName}"</span>
            </p>
            
            <p className="text-neutral-400 text-lg">
              This page is currently under development.
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className={`pt-8 transition-all duration-1000 delay-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link 
            href="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}