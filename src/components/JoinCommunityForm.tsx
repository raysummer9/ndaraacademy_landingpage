'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  whyJoin: string;
}

const JoinCommunityForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    whyJoin: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      // TODO: Implement form submission logic
      console.log('Form data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        bio: '',
        whyJoin: ''
      });
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to the Community!</h2>
          <p className="text-gray-600">Thank you for joining us. We'll be in touch soon with your Discord & Telegram invites.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 md:p-12 lg:p-16">
      {/* Form Container */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden relative min-h-[900px]">
        {/* Decorative Star Elements */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-15 lg:h-15 z-10">
          <img src="/assets/star.svg" alt="Decorative star" className="w-full h-full" />
        </div>
        <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-15 lg:h-15 z-10 rotate-180">
          <img src="/assets/star.svg" alt="Decorative star" className="w-full h-full" />
        </div>

        {/* Header Section */}
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 text-center">
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 font-['Raleway'] leading-tight">
            Join the Ndara community, learn, connect, grow.
          </h1>
          
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Fill in your details below to join our vibrant community on Discord & Telegram. We'd love to know you better!
          </p>
        </div>

        {/* Form Section */}
        <div className="px-6 sm:px-8 md:px-12 lg:px-16 pb-6 sm:pb-8 md:pb-12 lg:pb-16">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 md:space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {/* Left Column */}
              <div className="space-y-6 sm:space-y-8">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="What should we call you?"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7FF94] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500 bg-white"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-3">
                    Phone Number <span className="text-gray-500 font-normal italic">(optional but helpful)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Drop your WhatsApp/phone contact."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7FF94] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500 bg-white"
                  />
                </div>

                {/* Bio Field */}
                <div>
                  <label htmlFor="bio" className="block text-sm font-semibold text-gray-900 mb-3">
                    Short Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Tell us a little about yourself in 2-3 lines."
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7FF94] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500 resize-none bg-white"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6 sm:space-y-8">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Where can we reach you?"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7FF94] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500 bg-white"
                  />
                </div>

                {/* Location Field */}
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-900 mb-3">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Where are you based?"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7FF94] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500 bg-white"
                  />
                </div>

                {/* Why Join Field */}
                <div>
                  <label htmlFor="whyJoin" className="block text-sm font-semibold text-gray-900 mb-3">
                    Why do you want to join?
                  </label>
                  <textarea
                    id="whyJoin"
                    name="whyJoin"
                    value={formData.whyJoin}
                    onChange={handleInputChange}
                    placeholder="What excites you about being part of the Ndara community?"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7FF94] focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500 resize-none bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 sm:pt-8 md:pt-12">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D7FF94] text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-[#C7EF84] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-sm"
              >
                {isSubmitting ? 'Registering...' : 'Register & Connect'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunityForm;
