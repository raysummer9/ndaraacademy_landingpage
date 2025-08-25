'use client';

import React, { useState, useEffect, useRef } from 'react';

const CommunityTestimonialSection = () => {
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
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left">
          {/* Left Panel - Main Image */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              <img
                src="/images/image-overlay.png"
                alt="Portrait of a creative professional"
                className="w-full h-auto rounded-2xl object-contain"
                style={{ aspectRatio: '4/5' }}
              />
            </div>
          </div>

          {/* Right Panel - Content */}
          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-transparent rounded-2xl p-8 lg:p-12 relative">
              {/* Pagination */}
              <div className={`text-lg sm:text-xl font-bold text-black mb-6 text-center lg:text-left transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                01/03
              </div>

              {/* Smaller Image - Centered on mobile, right-aligned on desktop */}
              <div className={`mb-8 flex justify-center lg:justify-end transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Person working on laptop"
                  className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 font-['Raleway'] text-center lg:text-left transition-all duration-1000 delay-800 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  Digital Learning
                </h3>
                
                <p className={`text-lg sm:text-xl text-black leading-relaxed font-['Raleway'] mb-8 text-center lg:text-left transition-all duration-1000 delay-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  We design learning experiences that inspire you to create. Think bite-sized lessons, 
                  relatable voices, and real-world tools that speak your language. Whether you're just 
                  exploring or ready to level up, our courses are built to grow with you, not overwhelm you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonialSection;
