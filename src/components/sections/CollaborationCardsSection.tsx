'use client';

import { useState, useEffect, useRef } from 'react';

interface CollaborationCard {
  id: number;
  title: string;
  description: string;
}

const collaborationCards: CollaborationCard[] = [
  {
    id: 1,
    title: "Sponsor a Creative",
    description: "Fund hands-on design experiences that help young creatives solve real-world problems."
  },
  {
    id: 2,
    title: "Fund a Cohort",
    description: "Support access to our digital courses and learning tracks for underrepresented talent."
  },
  {
    id: 3,
    title: "Mentor Emerging Creatives",
    description: "Share your time, wisdom, and experience with the next wave of creative minds."
  },
  {
    id: 4,
    title: "Co-Create Branded Programs",
    description: "Let's launch something powerful together – co-branded projects that educate, empower, and elevate."
  },
  {
    id: 5,
    title: "Invest in Our Platform",
    description: "Help us grow our private app, community spaces, and toolkits built to fuel young creators."
  }
];

export default function CollaborationCardsSection() {
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
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {collaborationCards.map((card, index) => (
            <div
              key={card.id}
              className={`bg-white rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Icon */}
              <div className="mb-6 sm:mb-8">
                <img
                  src="/assets/collaboration-cards.svg"
                  alt="Collaboration icon"
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4 sm:mb-6 font-['Raleway']">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed font-['Raleway']">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
