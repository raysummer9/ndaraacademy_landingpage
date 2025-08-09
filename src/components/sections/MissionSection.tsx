import React from 'react';

const MissionSection = () => {
  return (
    <section className="py-3 sm:py-12 bg-[#fffff0]">
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Left Column - Image (60% width) */}
          <div className="order-1 lg:order-1 lg:col-span-7 flex items-stretch animate-fade-in-up animation-delay-200">
            <div className="w-full h-full flex items-stretch overflow-hidden rounded-2xl">
              <img
                src="/images/hero-img.jpg"
                alt="Young creative designer working at desk with tablet and laptop"
                className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column - Mission Statement (40% width) */}
          <div className="order-2 lg:order-2 lg:col-span-5 flex items-stretch animate-fade-in-up animation-delay-400">
            <div className="bg-[#D7FF94] rounded-2xl p-8 lg:p-10 relative w-full flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
              {/* Mission Text */}
              <p className="text-xl lg:text-4xl text-gray-900 leading-relaxed animate-fade-in-up animation-delay-600">
                Our mission is to create programs, digital tools, and community spaces that help young people grow — in design, in self-belief, and in purpose.
              </p>
              
              {/* CTA Link */}
              <a 
                href="#community" 
                className="inline-flex items-center text-base lg:text-lg font-semibold text-gray-900 hover:text-gray-700 transition-all duration-300 group mt-12 mb-8 animate-fade-in-up animation-delay-800 hover:translate-x-2"
              >
                Join Community
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>

              {/* Decorative Element - Bottom Right */}
              <div className="absolute bottom-0 right-0 opacity-20 animate-fade-in-up animation-delay-1000">
                <img
                  src="/assets/mission-backdrop.svg"
                  alt="Mission backdrop decoration"
                  className="w-25 h-25"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
