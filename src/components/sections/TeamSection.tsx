'use client';

import { useState, useEffect, useRef } from 'react';

const teamMembers = [
  {
    id: 1,
    name: "FAITH OGUNDARE",
    role: "Founder & CEO",
    image: "/images/team/faith-ogundare.jpg", // Placeholder - will be provided later
    cardStyle: "border-green-200 shadow-green-100"
  },
  {
    id: 2,
    name: "DORCAS ETIM",
    role: "CPO",
    image: "/images/team/dorcas-etim.jpg", // Placeholder - will be provided later
    cardStyle: "border-pink-200 shadow-pink-100"
  },
  {
    id: 3,
    name: "PROMISE CHIME",
    role: "CTO",
    image: "/images/team/promise-chime.jpg", // Placeholder - will be provided later
    cardStyle: "border-gray-300 shadow-gray-100"
  },
  {
    id: 4,
    name: "ADEOLA BALOGUN",
    role: "Community Manager",
    image: "/images/team/adeola-balogun.jpg", // Placeholder - will be provided later
    cardStyle: "border-blue-200 shadow-blue-100"
  },
  {
    id: 5,
    name: "KINGSLEY ABE",
    role: "Graphics Designer",
    image: "/images/team/kingsley-abe.jpg", // Placeholder - will be provided later
    cardStyle: "border-purple-200 shadow-purple-100"
  },
  {
    id: 6,
    name: "ADEOLA TAIWO",
    role: "Content Manager",
    image: "/images/team/adeola-taiwo.jpg", // Placeholder - will be provided later
    cardStyle: "border-orange-200 shadow-orange-100"
  }
];

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMember, setCurrentMember] = useState(0);
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

  const nextMember = () => {
    setCurrentMember((prev) => Math.min(prev + 1, teamMembers.length - 3));
  };

  const prevMember = () => {
    setCurrentMember((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#D7FF94]/20 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6">
        {/* Header Section */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left Column - Team Label */}
            <div className={`lg:col-span-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-black text-[#D7FF94] px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#D7FF94] rounded-full"></div>
                <span className="text-xs sm:text-sm font-semibold tracking-wide">THE TEAM</span>
              </div>
            </div>

            {/* Right Column - Heading and Description */}
            <div className="lg:col-span-9">
              {/* Main Heading */}
              <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold text-black leading-tight sm:leading-tight lg:leading-tight xl:leading-[62px] max-w-5xl font-['Raleway'] mb-4 sm:mb-6 text-left">
                  Meet Our People
                </h2>
              </div>
              
              {/* Description */}
              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl text-left">
                  We're a small team with big hearts, united by purpose and powered by creativity. From designers to storytellers, builders to believers, we're all in on helping young creatives grow. Get to know the humans behind the vision, and the passion behind every pixel.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        <div className={`relative transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Mobile - Stacked Cards */}
          <div className="block sm:hidden">
            <div className="grid grid-cols-1 gap-6">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                    {/* Member Image */}
                    <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 bg-gray-200">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback for missing images
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm" style={{ display: 'none' }}>
                        {member.name}
                      </div>
                    </div>
                    
                    {/* Member Info */}
                    <div className="text-center">
                      <h3 className="font-bold text-black text-lg sm:text-xl mb-2">{member.name}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop - Carousel Cards */}
          <div className="hidden sm:block">
            <div className="flex justify-center overflow-hidden">
              <div className="flex gap-6 sm:gap-8 max-w-4xl transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentMember * (320 + 24)}px)` }}>
                {teamMembers.map((member, index) => (
                  <div 
                    key={member.id}
                    className="flex-shrink-0 w-full sm:w-80 group"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                      {/* Member Image */}
                      <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 bg-gray-200">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback for missing images
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) {
                              fallback.style.display = 'flex';
                            }
                          }}
                        />
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm" style={{ display: 'none' }}>
                          {member.name}
                        </div>
                      </div>
                      
                      {/* Member Info */}
                      <div className="text-center">
                        <h3 className="font-bold text-black text-lg sm:text-xl mb-2">{member.name}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Desktop Only */}
            <button 
              onClick={prevMember}
              className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 shadow-lg"
              disabled={currentMember === 0}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={nextMember}
              className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 shadow-lg"
              disabled={currentMember === teamMembers.length - 3}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Team Member Indicators - Desktop Only */}
        <div className="hidden sm:flex justify-center gap-2 mt-8">
          {Array.from({ length: teamMembers.length - 2 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMember(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentMember === index ? 'bg-black' : 'bg-black/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
