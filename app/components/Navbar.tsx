'use client';

import Link from 'next/link';

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img 
              src="/mediaFiles/companies_logo.png" 
              alt="GFIELD" 
              className="h-10 w-auto" 
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition">
              About Us
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition">
              Services
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition">
              Projects
            </button>
            <button onClick={() => scrollToSection('careers')} className="text-gray-300 hover:text-white transition">
              Careers
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition">
              Contact Us
            </button>
          </div>
          
          <button onClick={() => scrollToSection('contact')} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition">
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  );
}