'use client';

import { useState, useEffect, useRef } from 'react';

export default function AboutHeadingSection() {
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
    <section ref={sectionRef} className="pt-20 sm:pt-32 lg:pt-40 xl:pt-48 pb-16 sm:pb-20 lg:pb-24 xl:pb-32 bg-[#fffff0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Heading */}
        <div className={`text-center mt-16 sm:mt-0 mb-8 sm:mb-10 lg:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-black text-center max-w-6xl mx-auto" style={{
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 8vw, 90px)',
            lineHeight: '1.1',
            letterSpacing: '0%'
          }}>
            Our Story: Where purpose<br className="hidden sm:block" />
            meets possibility
          </h1>
        </div>

        {/* Descriptive Paragraph */}
        <div className={`text-center mb-16 sm:mb-20 lg:mb-24 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-600 text-center max-w-4xl mx-auto px-4 sm:px-0" style={{
            fontFamily: 'Raleway',
            fontWeight: 400,
            fontSize: 'clamp(1rem, 4vw, 20px)',
            lineHeight: '1.5',
            letterSpacing: '0%'
          }}>
            Ndara was born from a simple belief: every young creative deserves a space to grow, be seen, and belong. Our journey is rooted in nurturing talent, championing identity, and building a future where creativity becomes a tool for self-belief, not just skill.
          </p>
        </div>

        {/* Three Square Images */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-end transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left Image - Abstract spheres */}
          <div className="group">
            <div className="aspect-square overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
              <img
                src="/images/about/spheres.jpg"
                alt="Abstract glossy spheres with red glow"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Middle Image - Young woman portrait */}
          <div className="group sm:col-span-1.5">
            <div className="aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
              <img
                src="/images/about/portrait-1.jpg"
                alt="Young woman with freckles and gold earrings"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Image - Woman in profile */}
          <div className="group">
            <div className="aspect-square overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100">
              <img
                src="/images/about/portrait-2.jpg"
                alt="Young woman in profile with dramatic red lighting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
