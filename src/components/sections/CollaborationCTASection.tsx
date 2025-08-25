'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CollaborationCTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#D7FF94]/10 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Main Heading */}
        <div className={`mb-6 sm:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-black font-['Raleway'] leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[48px] leading-tight sm:leading-tight lg:leading-[1.2]" style={{
            fontFamily: 'Raleway',
            fontWeight: 600,
            letterSpacing: '0%'
          }}>
            We're not just imagining a better creative world, we're building it. And we're doing it with the bold, the purposeful, and the impact-driven.
          </h2>
        </div>

        {/* Description Text */}
        <div className={`mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-black font-['Raleway'] leading-relaxed max-w-3xl text-lg sm:text-xl md:text-2xl lg:text-[20px] leading-relaxed sm:leading-relaxed lg:leading-[1.5]" style={{
            fontFamily: 'Raleway',
            fontWeight: 400,
            letterSpacing: '0%'
          }}>
            If your mission aligns with empowering the next generation of designers, storytellers, and digital
            thinkers, this is your call to action.
          </p>
        </div>

        {/* Call-to-Action Button */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 sm:px-10 lg:px-12 py-4 sm:py-5 bg-[#D7FF94] text-black font-semibold rounded-lg hover:bg-[#c4f085] transition-all duration-300 group hover:shadow-lg">
            Get in Touch
            <svg 
              className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
