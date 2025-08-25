'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CollaborationHeadingSection() {
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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-[#fffff0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`order-2 lg:order-1 lg:col-span-7 space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Main Heading */}
            <div className="transition-all duration-1000 delay-200">
              <h1 className="text-black leading-tight font-['Raleway'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] leading-tight sm:leading-tight lg:leading-[74px]" style={{
                fontFamily: 'Raleway',
                fontWeight: 600,
                letterSpacing: '0%'
              }}>
                Let's Build the Future Together
              </h1>
            </div>

            {/* Description Paragraph */}
            <div className="transition-all duration-1000 delay-400">
              <p className="text-black leading-relaxed max-w-2xl font-['Raleway'] text-lg sm:text-xl md:text-2xl lg:text-[20px] leading-relaxed sm:leading-relaxed lg:leading-[30px]" style={{
                fontFamily: 'Raleway',
                fontWeight: 400,
                letterSpacing: '0%'
              }}>
                We believe collaboration is the spark that powers creativity. Join us in shaping a future where young talent thrives, voices are heard, and design becomes a force for good.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-1000 delay-600">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 bg-[#D7FF94] text-black font-semibold rounded-lg hover:bg-[#c4f085] transition-all duration-300 group hover:shadow-lg">
                Become a Partner
                <svg 
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link href="/coming-soon" className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 bg-transparent text-black border-2 border-black font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300 group hover:shadow-lg">
                Download Deck
                <svg 
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - Image with Decorative Elements */}
          <div className={`order-1 lg:order-2 lg:col-span-5 relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/collaboration-meeting.jpg"
                alt="Team collaboration meeting with diverse professionals discussing around a table"
                className="w-full h-full object-cover rounded-2xl"
                style={{
                  width: '100%',
                  maxWidth: '524px',
                  height: 'auto',
                  aspectRatio: '524/478',
                  borderRadius: '16px'
                }}
              />
              {/* Green Gradient Overlay */}
              <div className="absolute inset-0 bg-[#D7FF943D] rounded-2xl" style={{
                borderRadius: '16px'
              }}></div>
            </div>

            {/* Decorative Element - Union */}
            <div className="absolute -bottom-8 sm:-bottom-16 lg:-bottom-32 -left-8 sm:-left-16 lg:-left-32 w-24 h-24 sm:w-32 sm:h-32 lg:w-64 lg:h-64 opacity-100">
              <img
                src="/assets/union.svg"
                alt="Decorative union element"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
