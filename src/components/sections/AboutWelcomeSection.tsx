'use client';

import { useState, useEffect, useRef } from 'react';

export default function AboutWelcomeSection() {
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
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-l from-[#D7FF94]/30 to-white relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-black text-center max-w-5xl mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] leading-tight sm:leading-tight lg:leading-[66px] font-['Raleway'] font-medium" style={{
            letterSpacing: '0%'
          }}>
            Welcome to Ndara, where creativity feels like home. We're building a space where young creatives can explore, mess up, learn, and
            show up as their full selves.
          </h1>
        </div>

        {/* Body Text */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-600 text-center max-w-4xl mx-auto" style={{
            fontFamily: 'Raleway',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '26px',
            letterSpacing: '0%'
          }}>
            At Ndara, we're a team of dreamers, builders, and believers in young creative power. We don't just make things, we shape experiences that help people find their voice and grow with purpose. Every tool, course, or community space we create is rooted in empathy and designed to spark real transformation. This isn't about chasing trends, it's about rewriting the story, together.
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="bg-[#D7FF94] text-black px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#c4f085] transition-all duration-300 hover:shadow-lg">
            Explore our Programs
          </button>
          <button 
            onClick={() => {
              document.getElementById('what-we-offer')?.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="bg-transparent text-black border-2 border-black px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:shadow-lg"
          >
            What we offer
          </button>
        </div>
      </div>
    </section>
  );
}
