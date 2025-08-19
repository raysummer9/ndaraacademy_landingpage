'use client'

import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] sm:min-h-screen flex items-center px-4 sm:px-6 pt-20 sm:pt-32 pb-6 sm:pb-0 bg-[#fffff0]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Heading */}
        <h1 
          className="text-gray-900 mb-6 sm:mb-8 max-w-full sm:max-w-6xl text-left animate-fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] leading-tight sm:leading-tight lg:leading-[74px] font-['Raleway'] font-semibold"
          style={{ 
            letterSpacing: '0%'
          }}
        >
          We help young creatives grow by turning imagination into purpose, confidence, and skill
        </h1>
        
        {/* Description Paragraph */}
        <p className="text-gray-600 mb-8 sm:mb-12 max-w-full sm:max-w-5xl animate-fade-in-up animation-delay-200 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px] leading-relaxed sm:leading-relaxed lg:leading-[40px] font-['Raleway'] font-medium" style={{
          letterSpacing: '0%'
        }}>
          Ndara is a global creative hub built for the next generation of designers, storytellers, and digital innovators, those ready to grow, explore their voice, and create work that truly matters
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start animate-fade-in-up animation-delay-400">
          <Link 
            href="/community"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#D7FF94] text-gray-900 font-semibold rounded-lg hover:bg-[#c4f085] transition-all duration-300 group hover:shadow-lg"
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
            href="https://learn.ndaraacademy.com/"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-transparent text-gray-900 font-semibold border-2 border-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-300 group hover:shadow-lg"
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
