'use client';

import React, { useState, useEffect, useRef } from 'react';

const WorkshopDesignSection = () => {
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
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-[#fffff0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <div className={`mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight font-['Raleway'] text-left mb-6 sm:mb-8">
            What Design Means to Us
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-['Raleway'] text-left">
            At Ndara Studios, design is more than what you see, it's what you feel, question, and shape. 
            Learners are invited into a space where design becomes a way to express identity, solve real problems, 
            and reimagine the world around them. It's about discovering the voice behind the visuals and using it with purpose.
          </p>
        </div>

        {/* Creative Collage Image */}
        <div className={`transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative">
            <img
              src="/images/workshop1.jpg"
              alt="Creative design collage and mood board"
              className="w-full h-auto rounded-2xl object-cover"
              style={{ 
                maxWidth: '100%',
                maxHeight: '600px',
                height: 'auto'
              }}
            />
          </div>
        </div>

        {/* Second Section - The Experience */}
        <div className={`mt-20 sm:mt-24 lg:mt-32 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight font-['Raleway'] text-left mb-6 sm:mb-8">
            The Experience
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-['Raleway'] text-left mb-12 sm:mb-16 lg:mb-20">
            From the moment they start, learners don't just study design they live it. Through hands-on challenges, 
            interactive feedback, and guided mentorship, each experience is crafted to spark curiosity, build confidence, 
            and nurture creative flow. It's not about being perfect, it's about showing up, exploring boldly, and growing in real time.
          </p>

          {/* Creative Tools Image */}
          <div className="relative">
            <img
              src="/images/workshop2.jpg"
              alt="Creative tools and design supplies"
              className="w-full h-auto rounded-2xl object-cover"
              style={{ 
                maxWidth: '100%',
                maxHeight: '600px',
                height: 'auto'
              }}
            />
          </div>
        </div>

        {/* Third Section - Who It's Built For */}
        <div className={`mt-20 sm:mt-24 lg:mt-32 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight font-['Raleway'] text-left mb-6 sm:mb-8">
            Who It's Built For
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-['Raleway'] text-left mb-12 sm:mb-16 lg:mb-20">
            Whether someone is just starting out, teaching themselves, or rediscovering their creative path, 
            Ndara's design track meets them where they are. It's built for young minds eager to design with feeling, 
            build with clarity, and create with purpose. Everyone leaves with more than just skills, they leave with belief in what they can build.
          </p>

          {/* Team Meeting Image */}
          <div className="relative">
            <img
              src="/images/workshop3.png"
              alt="Team meeting and collaborative workspace"
              className="w-full h-auto rounded-2xl object-cover"
              style={{ 
                maxWidth: '100%',
                maxHeight: '600px',
                height: 'auto'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopDesignSection;
