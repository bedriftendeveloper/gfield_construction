/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '476416d6-bd45-4a44-97d9-62585aa8af6f',  // later would get it from the env...so like this is a test
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact from ${formData.name} - GField Construction`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative bg-neutral-950 text-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-neutral-400 text-sm font-medium tracking-wide uppercase mb-3">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Let's Build Something Lasting
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12 mb-12 lg:mb-16 flex-wrap">
          <a href="tel:+233243552239" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors">
            <Phone className="w-5 h-5 text-red-600" />
            <span className="text-sm md:text-base">(233) 24 355 2239</span>
          </a>
          <a href="mailto:info@gfieldconstruction.com" className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors">
            <Mail className="w-5 h-5 text-red-600" />
            <span className="text-sm md:text-base">info@gfieldconstruction.com</span>
          </a>
          <div className="flex items-center gap-3 text-neutral-300">
            <MapPin className="w-5 h-5 text-red-600" />
            <span className="text-sm md:text-base">Dzorwulu Accra, Ghana, West Africa</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">Locate Our Office</h3>
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8276446891735!2d-0.1956244!3d5.5970556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14cb2d7f5a40e!2sMadina%2C%20Accra!5e0!3m2!1sen!2sgh!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">Ready To Get Started?</h3>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-red-600 transition-colors resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="p-4 bg-green-600/20 border border-green-600 rounded-lg text-green-400 text-sm">
                  ✓ Thank you! We've received your message and will get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-600/20 border border-red-600 rounded-lg text-red-400 text-sm">
                  ✗ Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Schedule a Chat'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}