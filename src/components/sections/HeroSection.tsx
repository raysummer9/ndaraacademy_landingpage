'use client'

import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 py-16 sm:py-20 pt-24 sm:pt-32 bg-[#fffff0]">
      <div className="max-w-7xl mx-auto pr-0 sm:pr-16 lg:pr-32">
        {/* Main Heading */}
        <h1 
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 max-w-4xl text-center sm:text-left animate-fade-in-up"
          style={{ lineHeight: '1.1' }}
        >
          We help young creatives grow by turning imagination into purpose, confidence, and skill
        </h1>
        
        {/* Description Paragraph */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading mb-8 sm:mb-12 max-w-3xl animate-fade-in-up animation-delay-200">
          Ndara is a global creative hub built for the next generation of designers, storytellers, and digital innovators—those ready to grow, explore their voice, and create work that truly matters
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start animate-fade-in-up animation-delay-400">
          <Link 
            href="/community"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#D7FF94] text-gray-900 font-semibold rounded-lg hover:bg-[#c4f085] transition-all duration-300 group hover:scale-105 hover:shadow-lg"
          >
            Join Community
            <svg 
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <Link 
            href="/programs"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-transparent text-gray-900 font-semibold border-2 border-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-300 group hover:scale-105 hover:shadow-lg"
          >
            Explore Programs
            <svg 
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
