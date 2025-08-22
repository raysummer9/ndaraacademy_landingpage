'use client';

import { useState, useEffect, useRef } from 'react';

export default function CTASection() {
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
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* CTA Section */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Contact Us Label */}
          <div className={`inline-flex items-center gap-2 sm:gap-3 bg-black text-[#D7FF94] px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#D7FF94] rounded-full"></div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide">CONTACT US</span>
          </div>

          {/* Main Heading */}
          <div className={`mb-8 sm:mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-semibold text-black leading-tight sm:leading-tight lg:leading-tight xl:leading-[62px] max-w-4xl mx-auto font-['Raleway']">
              If you're passionate about storytelling, design, or helping young creatives thrive, we'd love to hear from you.
            </h2>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a 
              href="/community"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D7FF94] text-black px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#c4f085] transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center"
            >
              Join the Community
            </a>
            <a 
              href="/contact"
              className="bg-transparent text-black border-2 border-black px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center"
            >
              Partner with Us
            </a>
          </div>
        </div>

        {/* Social Media & Footer Section */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Separator Line */}
          <div className="border-t border-black mb-12 sm:mb-16"></div>

          {/* Social Media Links */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
            {/* Instagram */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#D7FF94]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Instagram</h3>
              <p className="text-gray-600">@ndarastudios</p>
            </div>

            {/* Twitter */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#D7FF94]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Twitter</h3>
              <p className="text-gray-600">@ndarastudios</p>
            </div>

            {/* Facebook */}
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#D7FF94]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Facebook</h3>
              <p className="text-gray-600">@ndarastudios</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>@Ndarastudios. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
