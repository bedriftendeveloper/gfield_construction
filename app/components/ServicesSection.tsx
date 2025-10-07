'use client';

import { useState } from 'react';
import Image from 'next/image';

const services = [
  {
    id: 'infrastructure',
    title: 'Infrastructure Development',
    image: '/mediaFiles/site_image/infras.png'
  },
  {
    id: 'real-estate',
    title: 'Real Estate Development',
    image: '/mediaFiles/site_image/real_es.png'
  },
  {
    id: 'building',
    title: 'Building & Structural Works',
    image: '/mediaFiles/site_image/building_struc.png'
  },
  {
    id: 'supply',
    title: 'Supply Of Construction Materials',
    image: '/mediaFiles/site_image/supply_contrus.png'
  }
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('infrastructure');
  
  const activeService = services.find(s => s.id === activeTab);
  
  return (
    <section id="services" className="relative bg-neutral-950 text-white py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="space-y-10 lg:pr-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Building <span className="text-red-600">Excellence</span>, Shaping{" "}
                <span className="text-red-600">Possibilities</span>
              </h2>
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl">
                At GField Company Limited, we provide end-to-end solutions that turn bold visions into enduring spaces. 
                Our integrated approach combines strategy, design, and execution to ensure every project meets the highest 
                standards of quality, sustainability, and innovation.
              </p>
            </div>
            
            {/* Tabs - Rounded Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ease-in-out cursor-pointer ${
                    activeTab === service.id
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105'
                      : 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:scale-105'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Right - Image Display with Helmet */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[3/2] bg-neutral-900/50 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                key={activeTab}
                src={activeService?.image || ''}
                alt={activeService?.title || ''}
                fill
                className="object-cover transition-all duration-700 ease-in-out"
                priority
              />
              
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Single Helmet - Bottom Right Corner - NO BOUNCING */}
            <div className="absolute -bottom-12 -right-4 lg:-bottom-18 lg:-right-6 z-10">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                <Image
                  src="/mediaFiles/site_image/floating_helmet.png"
                  alt="Safety helmet"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}