'use client';

import { useState, useEffect, useRef } from 'react';

interface Pillar {
  id: number;
  title: string;
  image: string;
  alt: string;
}

const pillars: Pillar[] = [
  {
    id: 1,
    title: "Art",
    image: "/images/pillars/art.jpg",
    alt: "Art and design creative work"
  },
  {
    id: 2,
    title: "Design",
    image: "/images/pillars/design.jpg",
    alt: "Design and creativity"
  },
  {
    id: 3,
    title: "Technology",
    image: "/images/pillars/technology.jpg",
    alt: "Technology and innovation"
  },
  {
    id: 4,
    title: "Media",
    image: "/images/pillars/media.jpg",
    alt: "Media and content creation"
  }
];

export default function PillarsSection() {
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
    <section ref={sectionRef} className="py-12 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-left mb-12 sm:mb-16 pl-0 md:pl-6 lg:pl-12 xl:pl-20 pr-0 md:pr-6 lg:pr-16 xl:pr-40">
          {/* Pillars Label */}
          <div className={`inline-flex items-center gap-2 bg-black text-[#D7FF94] px-4 py-2 rounded-full mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-2 h-2 bg-[#D7FF94] rounded-full"></div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide">OUR PILLARS</span>
          </div>
          
          {/* Main Heading */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold text-black max-w-5xl leading-tight sm:leading-[62px] mb-6 sm:mb-8 font-['Raleway']">
              Digital creativity isn't one-size-fits-all
              — we explore it through four bold
              pillars.
            </h2>
          </div>
          
          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button className="inline-flex items-center gap-3 bg-[#D7FF94] text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#c4f085] transition-all duration-300 group hover:shadow-lg">
              All Projects
              <svg 
                className="w-4 sm:w-5 h-4 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Pillars Grid */}
        <div>
          {/* Mobile Slider */}
          <div className="md:hidden">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {pillars.map((pillar, index) => (
                <div 
                  key={pillar.id}
                  className="group cursor-pointer flex-shrink-0 w-80"
                >
                  <div className={`relative overflow-hidden rounded-2xl bg-gray-100 h-full transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: `${600 + (index * 100)}ms` }}>
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={pillar.image}
                        alt={pillar.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                        
                        {/* Circular Action Button */}
                        <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300">
                          <svg 
                            className="w-4 h-4 text-white" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M17 8l4 4m0 0l-4 4m4-4H3" 
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            <div className={`flex justify-center gap-2 mt-6 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {pillars.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-gray-300 rounded-full"
                ></div>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 sm:gap-8 pl-6 sm:pl-12 lg:pl-20 pr-6 sm:pr-16 lg:pr-40">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.id}
                className="group cursor-pointer"
              >
                <div className={`relative overflow-hidden rounded-2xl bg-gray-100 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: `${600 + (index * 150)}ms` }}>
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{pillar.title}</h3>
                      
                      {/* Circular Action Button */}
                      <button className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300">
                        <svg 
                          className="w-4 sm:w-5 h-4 sm:h-5 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M17 8l4 4m0 0l-4 4m4-4H3" 
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
