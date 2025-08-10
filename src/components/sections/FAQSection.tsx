'use client';

import { useState, useEffect, useRef } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What exactly is Ndara Studios?",
    answer: "Ndara is your creative village — a space where young people learn, grow, and connect through creativity, mentorship, and meaningful community experiences."
  },
  {
    id: 2,
    question: "How do I get started?",
    answer: "Getting started is simple! Join our community, explore our programs, and connect with fellow creatives. We'll guide you through every step of your creative journey."
  },
  {
    id: 3,
    question: "Can I collaborate with other creatives?",
    answer: "Absolutely! Collaboration is at the heart of what we do. You'll have opportunities to work with other creatives on projects, share ideas, and build meaningful connections."
  },
  {
    id: 4,
    question: "Is it free to join the community?",
    answer: "Yes! Joining our community is completely free. We believe creativity should be accessible to everyone, regardless of their financial situation."
  },
  {
    id: 5,
    question: "Do I need to be experienced to join?",
    answer: "No experience required! We welcome creatives at all levels, from beginners to experienced professionals. Our community is designed to support growth at every stage."
  },
  {
    id: 6,
    question: "How much does it cost to be part of the community?",
    answer: "The community is free to join. Some advanced sessions, workshops, or programs might have a small fee — but the goal is access, not barriers."
  }
];

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([1, 6]); // First and last items open by default
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

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#D7FF94]/20 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left - Question Label */}
          <div className="mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-2 bg-black text-[#D7FF94] px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-[#D7FF94]">
              <div className="w-2 h-2 bg-[#D7FF94] rounded-full"></div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">GOT QUESTIONS?</span>
            </div>
          </div>

          {/* Right - Main Heading */}
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-['Raleway']">
              We're here to make<br />
              things clear for you.
            </h2>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {faqItems.slice(0, 3).map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="border-b border-gray-200 pb-6">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 font-['Raleway']">
                      {item.question}
                    </h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openItems.includes(item.id) 
                        ? 'bg-[#D7FF94] text-gray-800' 
                        : 'bg-black text-[#D7FF94]'
                    }`}>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openItems.includes(item.id) ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openItems.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-['Raleway']">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {faqItems.slice(3, 6).map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-1000 delay-${(index + 3) * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="border-b border-gray-200 pb-6">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-4 font-['Raleway']">
                      {item.question}
                    </h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openItems.includes(item.id) 
                        ? 'bg-[#D7FF94] text-gray-800' 
                        : 'bg-black text-[#D7FF94]'
                    }`}>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openItems.includes(item.id) ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openItems.includes(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-['Raleway']">
                      {item.answer}
                    </p>
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
