'use client';

import { useState, useEffect, useRef } from 'react';

interface FeatureBlock {
  id: number;
  title: string;
  description: string;
  icon: string;
  isComingSoon?: boolean;
  isHorizontal?: boolean;
}

const featureBlocks: FeatureBlock[] = [
  {
    id: 1,
    title: "Your space, your pace.",
    description: "Soon, you'll be able to connect, team, and create from anywhere, all in one private creative hub.",
    icon: "card1",
    isComingSoon: true
  },
  {
    id: 2,
    title: "Grow through doing.",
    description: "Take part in fun, skill-building challenges that push your creativity and get you noticed.",
    icon: "card2"
  },
  {
    id: 3,
    title: "Team up. Build big.",
    description: "Work on real briefs, connect with fellow creatives, and bring your ideas to life, together.",
    icon: "card3"
  },
  {
    id: 4,
    title: "Level up, your way.",
    description: "Access tools, templates, and honest feedback from our team to help your work go from \"okay\" to unforgettable.",
    icon: "card4"
  },
  {
    id: 5,
    title: "Learn from those who've done it.",
    description: "Tap into live sessions and Q&As with experienced creatives and industry leaders from around the world.",
    icon: "card5",
    isHorizontal: true
  }
];

const getIconSVG = (iconName: string) => {
  switch (iconName) {
    case 'card1':
      return (
        <img src="/assets/card1.svg" alt="Card 1 icon" className="w-32 h-32" />
      );
    case 'card2':
      return (
        <img src="/assets/card2.svg" alt="Card 2 icon" className="w-32 h-32" />
      );
    case 'card3':
      return (
        <img src="/assets/card3.svg" alt="Card 3 icon" className="w-32 h-32" />
      );
    case 'card4':
      return (
        <img src="/assets/card4.svg" alt="Card 4 icon" className="w-32 h-32" />
      );
    case 'card5':
      return (
        <img src="/assets/card5.svg" alt="Card 5 icon" className="w-32 h-32" />
      );
    default:
      return null;
  }
};

export default function CommunityFeaturesSection() {
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
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-[#fffff0] relative">
      {/* Left Gradient */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#D7FF94] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 lg:gap-6 justify-items-center">
          {/* First 4 cards */}
          {featureBlocks.slice(0, 4).map((block, index) => (
            <div
              key={block.id}
              className={`transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Left Column: Black section on top, Green section on bottom */}
              {index % 2 === 0 ? (
                <div className="bg-black rounded-lg overflow-hidden w-full" style={{ height: '600px' }}>
                  {/* Black Section - 2/3 height */}
                  <div className="p-6 sm:p-8 relative" style={{ height: '400px' }}>
                    <div className="flex items-start justify-between h-full">
                      <div className="relative">
                        {/* Main Icon - Direct SVG display */}
                        <div className="w-40 h-40 flex items-center justify-center">
                          {getIconSVG(block.icon)}
                        </div>
                      </div>
                      {block.isComingSoon && (
                        <div className="flex items-center gap-2 text-[#D7FF94] text-sm self-end">
                          <span>coming soon</span>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Green Section - 1/3 height */}
                  <div className="bg-[#D7FF94] p-6 sm:p-8 flex flex-col justify-end" style={{ height: '200px' }}>
                    <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-black mb-4 font-['Raleway'] text-left">
                      {block.title}
                    </h3>
                    <p className="text-lg sm:text-base text-black leading-relaxed font-['Raleway'] text-left">
                      {block.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-[#D7FF94] rounded-lg overflow-hidden w-full" style={{ height: '600px' }}>
                  {/* Green Section - 1/3 height */}
                  <div className="p-6 sm:p-8 flex flex-col justify-start" style={{ height: '200px' }}>
                    <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-black mb-4 font-['Raleway'] text-left">
                      {block.title}
                    </h3>
                    <p className="text-lg sm:text-base text-black leading-relaxed font-['Raleway'] text-left">
                      {block.description}
                    </p>
                  </div>
                  
                  {/* Black Section - 2/3 height */}
                  <div className="bg-black p-6 sm:p-8 relative" style={{ height: '400px' }}>
                    <div className="flex items-end justify-end h-full">
                      <div className="relative">
                        {/* Main Icon - Direct SVG display */}
                        <div className="w-40 h-40 flex items-center justify-center">
                          {getIconSVG(block.icon)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* Last card - full width */}
          {featureBlocks.slice(4).map((block, index) => (
            <div
              key={block.id}
              className={`w-full md:col-span-2 transition-all duration-1000 delay-${(index + 3) * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Special horizontal layout for last card */}
              {block.isHorizontal ? (
                <div className="bg-black rounded-lg overflow-hidden flex w-full" style={{ height: '353px' }}>
                  {/* Black Section - Left side */}
                  <div className="p-6 sm:p-8 relative flex-shrink-0" style={{ width: '40%' }}>
                    <div className="relative">
                      {/* Main Icon - Direct SVG display */}
                      <div className="w-40 h-40 flex items-center justify-center">
                        {getIconSVG(block.icon)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Green Section - Right side */}
                  <div className="bg-[#D7FF94] p-6 sm:p-8 flex flex-col justify-center flex-grow">
                    <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-black mb-4 font-['Raleway'] text-left">
                      {block.title}
                    </h3>
                    <p className="text-lg sm:text-base text-black leading-relaxed font-['Raleway'] text-left">
                      {block.description}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
