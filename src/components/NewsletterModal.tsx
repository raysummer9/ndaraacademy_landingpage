'use client';

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      // Use EmailJS for newsletter subscription
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: 'Newsletter subscription request',
          to_email: 'admin@ndaraacademy.com',
          subject: 'New Newsletter Subscription',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '' });
        
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
        }, 2000);
      } else {
        throw new Error('Failed to send email');
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    placeholder="Email address"
                    required
                    className="w-full px-5 py-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-gray-900"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-[#D7FF94] font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
