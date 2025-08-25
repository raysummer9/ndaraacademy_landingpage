'use client';

import React, { useState, useEffect, useRef } from 'react';

const WorkshopHeadingSection = () => {
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
    <section ref={sectionRef} className="pt-40 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 bg-[#fffff0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Pill */}
        <div className={`mb-8 sm:mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-black text-[#D7FF94] px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#D7FF94] rounded-full"></div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide">DESIGN AT NDARA</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className={`mb-8 sm:mb-12 lg:mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight font-['Raleway'] text-left max-w-4xl">
            Design with meaning.<br />
            Shape with purpose.
          </h1>
        </div>

        {/* Two Content Panels */}
        <div className={`flex flex-col lg:flex-row gap-2 lg:gap-6 transition-all duration-1000 delay-400 items-stretch ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Left Panel - Image */}
          <div className="lg:w-[55%] rounded-2xl overflow-hidden h-auto min-h-[400px] lg:h-[742px]">
            <img
              src="/images/workshop.png"
              alt="Workshop design illustration"
              className="w-full h-full object-cover rounded-2xl"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Right Panel - Text on Black Background */}
          <div className="lg:w-[45%] bg-black rounded-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden flex items-start h-auto min-h-[400px] lg:h-[742px]">
            {/* Decorative geometric shape */}
            <div className="absolute bottom-2 right-2 opacity-20">
              <img
                src="/assets/workshop-element.svg"
                alt="Workshop decorative element"
                className="w-15 h-15"
              />
            </div>

            {/* Text Content */}
            <div className="relative z-10">
              <p className="text-white text-4xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-medium leading-tight font-['Raleway'] text-left">
                Design isn't just
                how it looks,
                it's how it listens,
                learns, and
                leaves a mark.
              </p>
            </div>
          </div>
        </div>

        {/* Top Right Decorative Element */}
        <div className={`absolute top-20 right-8 opacity-20 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-20' : 'opacity-0'
        }`}>
          <img
            src="/assets/union-bg.svg"
            alt="Union decorative element"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkshopHeadingSection;
