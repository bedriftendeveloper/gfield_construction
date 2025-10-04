'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CareersSection() {
  return (
    <section className="relative bg-neutral-900 text-white py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-neutral-400 text-sm font-medium tracking-wide uppercase">
                Careers
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Build Your Future With Us
              </h2>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl">
                Join a team that transforms bold ideas into enduring spaces. At GField, you will collaborate with 
                driven professionals, grow your skills, and make a lasting impact in communities and 
                industries worldwide.
              </p>
            </div>
            
            <div>
              <Link 
                href="/careers"
                className="inline-block px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105"
              >
                See Open Positions
              </Link>
            </div>
          </div>
          
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
            <div className="absolute top-0 right-0 w-48 sm:w-56 lg:w-64 z-30 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/careers/first.png"
                  alt="Growing Together"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 px-4 py-2 bg-white text-neutral-900 rounded-full text-xs sm:text-sm font-medium inline-block shadow-lg">
                Growing Together
              </div>
            </div>
            
            <div className="absolute top-20 left-0 sm:left-8 w-44 sm:w-52 lg:w-60 z-20 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/careers/second.png"
                  alt="Innovation in Action"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 px-4 py-2 bg-white text-neutral-900 rounded-full text-xs sm:text-sm font-medium inline-block shadow-lg">
                Innovation in Action
              </div>
            </div>
            
            <div className="absolute bottom-0 right-12 sm:right-16 lg:right-20 w-52 sm:w-60 lg:w-72 z-10 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/careers/third.png"
                  alt="Collaborating on Site"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 px-4 py-2 bg-red-600 text-white rounded-full text-xs sm:text-sm font-medium inline-block shadow-lg">
                Collaborating on Site
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
