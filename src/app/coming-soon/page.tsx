'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ComingSoonPage() {

  return (
    <div className="min-h-screen bg-[#fffff0] flex flex-col">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D7FF94] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#D7FF94] rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-8 py-20 sm:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-12 sm:mb-16">
            <img 
              src="/assets/ndara-logo-black.png" 
              alt="Ndara Academy" 
              className="h-12 sm:h-16 mx-auto"
            />
          </div>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-8 sm:mb-12">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide">COMING SOON</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black leading-tight sm:leading-tight lg:leading-tight mb-6 sm:mb-8 font-['Raleway']">
            Something Amazing is Coming Soon!
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12 sm:mb-16 font-['Raleway']">
            We're working hard to bring you an incredible experience. 
            Join our community to be the first to know when we launch.
          </p>



          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <Link 
              href="/"
              className="bg-[#D7FF94] text-black px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#c4f085] transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center w-fit"
            >
              Join the Community
            </Link>
            <Link 
              href="/"
              className="bg-transparent text-black border-2 border-black px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center w-fit"
            >
              Back to Home
            </Link>
          </div>


        </div>
      </div>

      {/* Footer */}
      <div className="py-8 px-6 sm:px-8 text-center text-sm text-gray-500 border-t border-gray-200">
        <p>© 2024 Ndara Academy. All rights reserved.</p>
      </div>
    </div>
  );
}
