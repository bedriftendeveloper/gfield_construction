'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-neutral-900 text-white py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-neutral-400 text-sm uppercase tracking-wider mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Where Vision Becomes Structure
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto">
            Transforming bold ideas into landmark spaces and vibrant communities
          </p>
        </div>

        {/* Featured Project - Pinnacle Tower */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16 mt-12">
          {/* Single Large Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg group">
            <Image
              src="/projectMediaFile/Pini_top.png"
              alt="Pinnacle Tower"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">Pinnacle Tower</h3>
            
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Rising sixty stories above the city skyline, Pinnacle Tower embodies GField's vision of bold design 
              and spatial transformation. Its glass and steel curtain wall system captures the light of every season, 
              making it a dynamic beacon in the urban landscape.
            </p>
            
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              Inside, amenities rival those, luxury residences, and elegant retail spaces have been seamlessly 
              integrated to create a vertical community that celebrates connection, culture, and comfort.
            </p>
            
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              From concept to completion, GField delivered Pinnacle Tower with advanced green technologies, 
              energy-efficient systems, and sustainable materials, all working together for the city of tomorrow.
            </p>
            
            <Link 
              href="/projects" 
              className="inline-block text-red-600 hover:text-red-500 font-semibold transition-colors"
            >
              Read More →
            </Link>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mb-8">
          <p className="text-xl md:text-2xl lg:text-3xl font-light">
            Explore More GField Projects That{" "}
            <span className="text-red-600 font-semibold">Shape Skylines</span> And{" "}
            <span className="text-red-600 font-semibold">Communities</span>
          </p>
          <Link 
            href="/projects" 
            className="inline-block mt-4 text-red-600 hover:text-red-500 font-semibold transition-colors"
          >
            See More →
          </Link>
        </div>

        {/* Project Grid with Animations */}
        <div ref={sectionRef} className="grid md:grid-cols-3 gap-6">
          {/* Metropolitan Link Boulevard - Slide from Left */}
          <div 
            className={`group relative overflow-hidden rounded-lg bg-neutral-800 transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            <div className="relative h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
              <Image
                src="/projectMediaFile/metro.png"
                alt="Metropolitan Link Boulevard"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-lg md:text-xl font-bold mb-2">Metropolitan Link Boulevard</h4>
                <p className="text-neutral-300 text-xs md:text-sm">
                  A state-of-the-art expressway and eco-efficient freeway surrounded by natural landscapes
                </p>
              </div>
            </div>
          </div>

          {/* Cedar Height - Slide from Right with Top Caption */}
          <div 
            className={`group relative overflow-hidden rounded-lg bg-neutral-800 transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <div className="relative h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
              <Image
                src="/projectMediaFile/ceder.png"
                alt="Cedar Height"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/90 to-transparent p-6 pt-8">
                <h4 className="text-lg md:text-xl font-bold mb-2">Cedar Height</h4>
                <p className="text-neutral-300 text-xs md:text-sm">
                  A modern residential complex that blends luxury, comfort, and sustainability
                </p>
              </div>
            </div>
          </div>

          {/* Summit Convention Center - Slide from Left */}
          <div 
            className={`group relative overflow-hidden rounded-lg bg-neutral-800 transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            <div className="relative h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
              <Image
                src="/projectMediaFile/summit.png"
                alt="Summit Convention Center"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-lg md:text-xl font-bold mb-2">Summit Convention Center</h4>
                <p className="text-neutral-300 text-xs md:text-sm">
                  World-class meeting facilities with advanced technologies and elegant design for every event
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}