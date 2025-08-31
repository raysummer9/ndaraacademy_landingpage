'use client';

import React, { useState, useEffect, useRef } from 'react';

const CommunityTestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: 1,
      title: "Digital Learning",
      content: "We design learning experiences that inspire you to create. Think bite-sized lessons, relatable voices, and real-world tools that speak your language. Whether you're just exploring or ready to level up, our courses are built to grow with you, not overwhelm you.",
      smallImage: "/images/what-we-offer1.jpg",
      smallImageAlt: "Person working on laptop"
    },
    {
      id: 2,
      title: "Design Toolkit",
      content: "Need a portfolio prompt, a storytelling guide, or a mindset journal? Our toolkit is designed to fuel your creativity and help you make magic on your own terms. Free, downloadable, and created with intention—because good tools should feel like they were made for you.",
      smallImage: "/images/what-we-offer2.jpg",
      smallImageAlt: "Design workspace with laptop and creative supplies"
    },
    {
      id: 3,
      title: "Creative Community",
      content: "This is where the magic happens. Inside our private space, you'll find people just like you, creators, learners, visionaries figuring things out together. We host challenges, share wins, and ask the messy questions. It's not just a network, it's a creative home.",
      smallImage: "/images/what-we-offer3.jpg",
      smallImageAlt: "Creative community collaboration"
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="what-we-offer" ref={sectionRef} className="min-h-screen bg-[#fffff0] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left">
          
          {/* First Row - Static Large Image */}
          <div className={`transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative h-[550px] p-4">
              <img
                src="/images/image-overlay.png"
                alt="Portrait of a creative professional"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Second Row - Slider Content */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-transparent rounded-2xl p-8 lg:p-12 relative border border-gray-200 shadow-sm">
              <div className="relative overflow-hidden h-[550px]">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-out ${
                      index === currentSlide
                        ? 'opacity-100 translate-x-0'
                        : index < currentSlide
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    }`}
                  >
                    {/* Pagination */}
                    <div className={`text-lg sm:text-xl font-bold text-black mb-6 text-center lg:text-left transition-all duration-1000 ease-out delay-400 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                      {String(index + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
                    </div>

                    {/* Smaller Image - Centered on mobile, right-aligned on desktop */}
                    <div className={`mb-8 flex justify-center lg:justify-end transition-all duration-1000 delay-600 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                      <div className="relative">
                        <img
                          src={slide.smallImage}
                          alt={slide.smallImageAlt}
                          className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#D7FF94] opacity-25 rounded-xl z-10"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 font-['Raleway'] text-center lg:text-left transition-all duration-1000 ease-out delay-800 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}>
                        {slide.title}
                      </h3>
                      
                      <p className={`text-lg sm:text-xl text-black leading-relaxed font-['Raleway'] mb-8 text-center lg:text-left transition-all duration-1000 ease-out delay-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}>
                        {slide.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonialSection;
