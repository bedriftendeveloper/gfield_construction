/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img src="/footer-logo.png" alt="Logo" className="h-16 w-auto mb-3" />
            </div>
            <p className="text-gray-400 text-sm">
              Building spaces that stand the test of time
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-400 hover:text-white transition text-sm">
                Home
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition text-sm">
                About Us
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-white transition text-sm">
                Services
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-white transition text-sm">
                Projects
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <div className="flex flex-col gap-2">
              <Link href="/careers" className="text-gray-400 hover:text-white transition text-sm">
                Careers
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition text-sm">
                Contact Us
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded transition"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>Copyright 2025</p>
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}