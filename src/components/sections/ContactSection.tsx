'use client';

import React, { useState, useEffect, useRef } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Form data:', formData);
      
      // Use PHP endpoint for email sending
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#fffff0]">
      {/* Header Section with Background Image */}
      <div className="relative w-full overflow-hidden h-[300px] sm:h-[350px] lg:h-[430px]">
        <img
          src="/images/contact.png"
          alt="Contact header background"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white font-['Raleway'] text-center w-full">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gradient-to-r from-[#D7FF94]/30 to-[#D7FF94]/50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column - Contact Information */}
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Get in Touch Button */}
              <div className="mb-8">
                <button className="inline-flex items-center gap-3 bg-black text-[#D7FF94] px-6 py-3 rounded-lg font-medium">
                  <div className="w-3 h-3 bg-[#D7FF94] rounded-full"></div>
                  <span>GET IN TOUCH</span>
                </button>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 font-['Raleway']">
                Contact our support team
              </h2>

              {/* Description */}
              <p className="text-xl sm:text-xl text-gray-600 mb-12 leading-relaxed font-['Raleway']">
                Whether you're a young creative with questions, a brand looking to collaborate, 
                or just curious about what we do, we're always open to a good conversation. 
                Drop us a message, and someone from our team will be in touch soon.
              </p>

              {/* Location Heading */}
              <h3 className="text-3xl font-bold text-black mb-6 font-['Raleway']">
                London
              </h3>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-['Raleway']">
                    167-169 Great Portland Street, 5th Floor, London, W1W 5PF
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-['Raleway']">
                    +44-7769383945
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-['Raleway']">
                    info@ndarastudios.com
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="bg-[#D7FF94]/20 backdrop-blur-sm rounded-2xl p-8 lg:p-12 relative overflow-hidden min-h-[400px] lg:min-h-[600px]">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center rounded-2xl"
                  style={{
                    backgroundImage: 'url(/assets/contact-bg.jpg)',
                    opacity: 0.1
                  }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-[#D7FF94] rounded-full"></div>
                  <div className="absolute bottom-8 left-8 w-24 h-24 bg-[#D7FF94] rounded-full"></div>
                </div>

                {/* Form Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <div className="w-16 h-16 bg-[#D7FF94] rounded-full flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 font-['Raleway']">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-300 font-['Raleway'] mb-8">
                        Thank you for reaching out. We've sent you a confirmation email and will get back to you soon.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-[#D7FF94] text-black font-medium py-3 px-6 rounded-lg hover:bg-[#D7FF94]/80 transition-colors duration-200 font-['Raleway']"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col h-full">
                      <div className="space-y-6 flex-grow">
                        <div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            required
                            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border-0 focus:ring-2 focus:ring-[#D7FF94] focus:outline-none font-['Raleway'] placeholder-gray-400"
                          />
                        </div>

                        <div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your email"
                            required
                            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border-0 focus:ring-2 focus:ring-[#D7FF94] focus:outline-none font-['Raleway'] placeholder-gray-400"
                          />
                        </div>

                        <div>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Start a conversation"
                            rows={6}
                            required
                            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border-0 focus:ring-2 focus:ring-[#D7FF94] focus:outline-none font-['Raleway'] resize-none placeholder-gray-400"
                          ></textarea>
                        </div>
                      </div>

                      <div className="mt-16">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#D7FF94] text-black font-medium py-3 px-6 rounded-lg hover:bg-[#D7FF94]/80 transition-colors duration-200 font-['Raleway'] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            "Let's Get Started"
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
