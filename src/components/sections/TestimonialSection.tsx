'use client';

import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Ndara gave me more than just resources, it gave me clarity. I came in unsure of my creative path, but I found a community that listened, challenged me, and helped me grow. I now create with confidence and purpose.",
    author: "DANIEL M",
    role: "Aspiring Product Designer",
    avatar: "/images/daniel-avatar.jpg"
  },
  {
    id: 2,
    quote: "The mentorship and community at Ndara transformed my approach to design. I learned not just technical skills, but how to think creatively and solve real problems. This place truly nurtures authentic creative voices.",
    author: "SARAH K",
    role: "UX/UI Designer",
    avatar: "/images/daniel-avatar.jpg"
  },
  {
    id: 3,
    quote: "Being part of Ndara's creative community opened doors I never thought possible. The collaborative environment and expert guidance helped me develop my unique style and build a portfolio that truly represents who I am.",
    author: "MICHAEL T",
    role: "Digital Artist",
    avatar: "/images/daniel-avatar.jpg"
  }
];

const processSteps = [
  {
    id: 1,
    number: "001",
    title: "We Listen Deeply",
    description: "Before anything else, we make space for your story, your spark, your struggles, your why. Because real growth starts when someone truly sees and hears you."
  },
  {
    id: 2,
    number: "002", 
    title: "We Shape Together",
    description: "We help make sense of your ideas — with the tools, guidance, and creative space to shape something real, meaningful, and true to you and your community."
  },
  {
    id: 3,
    number: "003",
    title: "We Grow as One",
    description: "We don't disappear after the first step. Through mentorship, learning, and community, we keep building alongside you — because your growth is part of our story too."
  }
];

export default function TestimonialSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef}>
      {/* Testimonial Section */}
      <div className="bg-[#D7FF94] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-start">
            {/* Left Column - Label */}
            <div className={`lg:col-span-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <span className="text-sm font-semibold text-black uppercase tracking-wide">KIND WORDS FROM OUR CREATIVES</span>
              </div>
            </div>

            {/* Right Column - Testimonial Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Quote */}
              <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
              </div>

              {/* Author Info and Navigation */}
              <div className={`flex items-center justify-between transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                    <img 
                      src={testimonials[currentTestimonial].avatar} 
                      alt={testimonials[currentTestimonial].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg">{testimonials[currentTestimonial].author}</h4>
                    <p className="text-black text-sm">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3">
                  <button 
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Testimonial Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === index ? 'bg-black' : 'bg-black/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-12 sm:py-16 lg:py-20 -mt-16 sm:-mt-20 lg:-mt-28">
        <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto bg-white py-12 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12">
          {/* Top Section - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Left Column - Process Label */}
            <div className={`lg:col-span-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-black text-[#D7FF94] px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#D7FF94] rounded-full"></div>
                <span className="text-xs sm:text-sm font-semibold tracking-wide">PROCESS</span>
              </div>
            </div>

            {/* Right Column - Heading and Text */}
            <div className="lg:col-span-9">
              {/* Main Heading */}
              <div className={`mb-6 sm:mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold leading-tight sm:leading-tight lg:leading-tight xl:leading-[62px] max-w-5xl font-['Raleway']" style={{
                  letterSpacing: '0%'
                }}>
                  Creative growth doesn't start with software.
                  It starts with you — your ideas, your roots, your rhythm.
                </h2>
              </div>

              {/* Supporting Text */}
              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-black" style={{
                    fontFamily: 'Raleway',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '30px',
                    letterSpacing: '0%'
                  }}>
                    <b>We're not just building a platform — we're building with you. Our process is rooted in listening, guiding, and creating what truly matters, together.</b>
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    At Ndara, we build creative learning experiences, tools, and spaces that put you at the center. Whether it's storytelling, design, or purpose-driven projects, we're here to help you grow your skills, own your voice, and create work that truly reflects who you are. Every idea we shape starts with understanding, grows with intention, and leads to real impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.id} 
                className={`group transition-all duration-1000 delay-${600 + (index * 100)} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className="mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-[#D7FF94] text-lg sm:text-xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
