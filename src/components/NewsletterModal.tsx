'use client';

import React, { useState, useEffect } from 'react';

/**
 * NewsletterModal Component
 * 
 * Note: This component uses the contact form EmailJS template instead of a dedicated
 * newsletter template to ensure that the name and email are properly included in the
 * received emails. The contact form template is known to work correctly with the
 * from_name and from_email variables.
 */

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Newsletter form data:', formData);
      
      // Send email using PHP endpoint
      const response = await fetch('/api/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '' });
        
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
        }, 2000);
      } else {
        throw new Error(result.error || 'Failed to subscribe');
      }
      
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('There was an error subscribing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl">
        {/* Top Section with Newsletter Image */}
        <div className="relative h-80 overflow-hidden">
          {/* Newsletter Background Image */}
          <img
            src="/assets/newsletter-img.jpg"
            alt="Newsletter background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-[#D7FF9466] opacity-60"></div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Bottom Section - Content */}
        <div className="p-8 space-y-6 rounded-t-[60px] -mt-16 relative bg-white min-h-[320px]">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Successfully Subscribed!</h3>
              <p className="text-gray-600">Thank you for joining our newsletter.</p>
            </div>
          ) : (
            <>
              {/* Heading */}
              <h2 className="text-2xl font-bold text-gray-900 font-['Raleway']">
                Stay ahead in design <span className="italic">& tech!</span>
              </h2>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                Get the latest updates on new courses, events, and learning tips, straight to your inbox.
              </p>
              
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Name"
                    required
                    className="w-full px-5 py-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-gray-900"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Email address"
                    required
                    className="w-full px-5 py-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-gray-900"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1a237e] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#283593] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
