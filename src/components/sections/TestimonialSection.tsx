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
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Process Label */}
          <div className={`inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
            <span className="text-sm font-semibold tracking-wide">PROCESS</span>
          </div>

          {/* Main Heading */}
          <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight max-w-6xl">
              Creative growth doesn't start with{' '}
              <span className="underline decoration-blue-500 decoration-4">software.</span>{' '}
              It starts with{' '}
              <span className="underline decoration-blue-500 decoration-4">you – your ideas,</span>{' '}
              <span className="underline decoration-blue-500 decoration-4">your roots,</span>{' '}
              <span className="underline decoration-blue-500 decoration-4">your rhythm.</span>
            </h2>
          </div>

          {/* Supporting Text */}
          <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <p className="text-lg text-gray-800 leading-relaxed">
                We're not just building a platform — we're building with you. Our process is rooted in listening, guiding, and creating what truly matters, together.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                At Ndara, we build creative learning experiences, tools, and spaces that put you at the center. Whether it's storytelling, design, or purpose-driven projects, we're here to help you grow your skills, own your voice, and create work that truly reflects who you are. Every idea we shape starts with understanding, grows with intention, and leads to real impact.
              </p>
            </div>
          </div>

          {/* Process Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {processSteps.map((step, index) => (
              <div key={step.id} className="group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
