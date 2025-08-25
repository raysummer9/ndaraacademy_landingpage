'use client';

import { useState, useEffect, useRef } from 'react';

const features = [
  {
    id: 1,
    text: "Mobile-first and globally accessible",
    icon: (
      <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 2,
    text: "Interdisciplinary and mentorship-led",
    icon: (
      <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 3,
    text: "Project-based, not just theory-based",
    icon: (
      <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    id: 4,
    text: "Community-driven and culturally grounded",
    icon: (
      <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    )
  }
];

export default function WhyNdaraSection() {
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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Why NDARA Label */}
        <div className={`inline-flex items-center gap-2 sm:gap-3 bg-black text-[#D7FF94] px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#D7FF94] rounded-full"></div>
          <span className="text-xs sm:text-sm font-semibold tracking-wide">WHY NDARA ?</span>
        </div>

        {/* Main Heading */}
        <div className={`text-left mb-8 sm:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold text-black leading-tight sm:leading-tight lg:leading-tight xl:leading-[62px] max-w-5xl font-['Raleway']">
            Millions of young creatives feel disconnected from the creative economy. We're here to change that.
          </h2>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="flex items-start gap-2.5 sm:gap-3 group"
            >
              {/* Checkmark Icon */}
              <div className="flex-shrink-0 w-8 h-8 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="/assets/check-circle.svg" 
                  alt="Check mark" 
                  className="w-5 h-5 sm:w-5 sm:h-5"
                />
              </div>
              
              {/* Feature Text */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed pt-0.5">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
