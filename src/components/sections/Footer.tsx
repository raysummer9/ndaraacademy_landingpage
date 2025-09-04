'use client';

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Footer newsletter subscription:', email);
      
      // Send email using PHP endpoint
      const response = await fetch('/api/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Footer Subscriber', // Default name for footer subscribers
          email: email,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setEmail('');
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error(result.error || 'Failed to subscribe');
      }
      
    } catch (error) {
      console.error('Error subscribing from footer:', error);
      alert('There was an error subscribing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#D7FF94] py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12">
          
          {/* Left Section - Brand Identity & Social Media */}
          <div className="lg:col-span-1 text-center md:text-left">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start mb-6">
              <img 
                src="/assets/ndara-academy-logo-blue.png" 
                alt="NDARA Academy Logo" 
                className="h-16 w-auto mb-4 md:mb-3"
              />
            </div>
            
            {/* Mission Statement */}
            <p className="text-black text-sm leading-relaxed mb-6 max-w-xs mx-auto md:mx-0">
              Built for curious minds, creative thinkers, and anyone ready to make design work for people and progress.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-3 mb-6 md:mb-0">
              <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="4" ry="4"/>
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M16.5 7.5V7.5"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Middle-Left Section - About Us Links */}
          <div className="lg:col-span-1 text-center md:text-left">
            <h3 className="text-black font-bold text-lg mb-6">About us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 block py-1">
                  Our story
                </Link>
              </li>
              <li>
                <Link href="/pillars" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 block py-1">
                  Our pillars
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 block py-1">
                  Our workshops
                </Link>
              </li>
              <li>
                <Link href="/collaboration" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 block py-1">
                  Partner with us
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 block py-1">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Middle-Right Section - Resources Links */}
          <div className="lg:col-span-1 text-center md:text-left">
            <h3 className="text-black font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 block py-1">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 block py-1">
                  Terms of services
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 block py-1">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 block py-1">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black text-sm hover:text-gray-700 transition-colors duration-200 block py-1">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Newsletter Subscription */}
          <div className="lg:col-span-1 text-center md:text-left">
            <h3 className="text-black font-bold text-lg mb-6">Subscribe Newsletter</h3>
            <p className="text-black text-sm mb-4 max-w-xs mx-auto md:mx-0">
              Subscribe to our newsletter to get more updates
            </p>
            
            {isSubmitted ? (
              <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-lg max-w-xs mx-auto md:mx-0">
                <p className="text-green-800 text-sm font-medium">
                  ✅ Successfully subscribed! Check your email for confirmation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mb-4 max-w-xs mx-auto md:mx-0">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-black text-sm placeholder-gray-400"
                    required
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
              </form>
            )}
            
            <p className="text-gray-600 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
              By subscribing you agree to with our{' '}
              <Link href="/privacy" className="font-bold text-black hover:underline">
                Privacy Policy
              </Link>{' '}
              and provide consent to receive updates from our company.
            </p>
          </div>
        </div>

        {/* Bottom Section - Copyright & Design Credit */}
        <div className="border-t border-black/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <p className="text-gray-600 text-sm">
              © Ndarastudios. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
