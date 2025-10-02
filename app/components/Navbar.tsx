import Link from 'next/link';

export default function Navbar() {
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
            <Link href="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition">
              About Us
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition">
              Services
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition">
              Projects
            </Link>
            <Link href="/careers" className="text-gray-300 hover:text-white transition">
              Careers
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition">
              Contact Us
            </Link>
          </div>
          
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition">
            Get In Touch
          </button>
        </div>
      </div>
    </nav>
  );
}