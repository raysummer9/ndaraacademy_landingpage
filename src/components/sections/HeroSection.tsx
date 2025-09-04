'use client'

import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-6 pt-32 sm:pt-40 md:pt-48 lg:pt-48 pb-6 sm:pb-8 md:pb-12 lg:pb-16 bg-[#fffff0]">
      <div className="max-w-7xl mx-auto w-full">
        {/* Hero Content */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          {/* Main Heading */}
          <h1 
            className="text-gray-900 mb-4 sm:mb-6 md:mb-8 max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-4xl text-left animate-fade-in-up text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[60px] leading-tight sm:leading-tight md:leading-tight lg:leading-[74px] font-['Raleway'] font-semibold"
            style={{ 
              letterSpacing: '0%'
            }}
          >
            We help young creatives grow by turning imagination into purpose, confidence, and skill
          </h1>
          
          {/* Description Paragraph */}
          <p className="text-gray-600 mb-6 sm:mb-8 md:mb-12 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-3xl animate-fade-in-up animation-delay-200 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[30px] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[40px] font-['Raleway'] font-medium" style={{
            letterSpacing: '0%'
          }}>
            Ndara is a global creative hub built for the next generation of designers, storytellers, and digital innovators, those ready to grow, explore their voice, and create work that truly matters
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-4 items-start animate-fade-in-up animation-delay-400">
            <Link 
              href="/workshops"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 md:px-8 py-3 sm:py-4 md:py-4 bg-[#1a237e] text-white font-semibold rounded-lg hover:bg-[#283593] transition-all duration-300 group hover:shadow-lg text-sm sm:text-base md:text-base"
            >
              Join a Workshop
              <svg 
                className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link 
              href="/join-our-community"
              className="hidden sm:inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 md:px-8 py-3 sm:py-4 md:py-4 bg-transparent text-gray-900 font-semibold border-2 border-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-300 group hover:shadow-lg text-sm sm:text-base md:text-base"
            >
              Join our Community
              <svg 
                className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mission Section - Integrated */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column - Image */}
          <div className="order-1 md:order-1 lg:order-1 md:col-span-1 lg:col-span-7 animate-fade-in-up animation-delay-200">
            <div className="w-full h-full overflow-hidden rounded-2xl">
              <img
                src="/images/hero-img.jpg"
                alt="Young creative designer working at desk with tablet and laptop"
                className="w-full h-[397px] sm:h-[500px] md:h-[600px] lg:h-[742px] object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column - Mission Statement */}
          <div className="order-2 md:order-2 lg:order-2 md:col-span-1 lg:col-span-5 animate-fade-in-up animation-delay-400">
            <div className="bg-[#D7FF94] rounded-2xl p-6 sm:p-8 md:p-8 lg:p-10 relative w-full flex flex-col justify-between transition-all duration-300 hover:shadow-xl h-[397px] sm:h-[500px] md:h-[600px] lg:h-[742px]">
              {/* Mission Text */}
              <p className="text-gray-900 animate-fade-in-up animation-delay-600 text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[43px] leading-tight sm:leading-tight md:leading-tight lg:leading-[52px] font-['Raleway'] font-medium" style={{
                letterSpacing: '0%'
              }}>
                Our mission is to create programs, digital tools, and community spaces that help young people grow in design, in self-belief, and in purpose.
              </p>
              
              {/* CTA Link */}
              <a 
                href="/join-our-community" 
                className="inline-flex items-center text-sm sm:text-base md:text-base lg:text-lg font-semibold text-gray-900 hover:text-gray-700 transition-all duration-300 group mt-8 sm:mt-10 md:mt-12 mb-6 sm:mb-8 animate-fade-in-up animation-delay-800 hover:translate-x-2"
              >
                Join Community
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>

              {/* Decorative Element - Bottom Right */}
              <div className="absolute bottom-0 right-0 animate-fade-in-up animation-delay-1000">
                <img
                  src="/assets/mission-backdrop.svg"
                  alt="Mission backdrop decoration"
                  className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 lg:w-25 lg:h-25"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
