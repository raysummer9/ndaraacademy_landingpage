'use client';

import { useState, useEffect } from 'react';

export const useNewsletterModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasShownModal, setHasShownModal] = useState(false);

  useEffect(() => {
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem('newsletter-modal-shown');
    
    if (!hasSeenModal) {
      // Show modal after 4 seconds
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        setHasShownModal(true);
        localStorage.setItem('newsletter-modal-shown', 'true');
      }, 4000); // 4 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const resetModal = () => {
    localStorage.removeItem('newsletter-modal-shown');
    setHasShownModal(false);
  };

  return {
    isModalOpen,
    closeModal,
    resetModal,
    hasShownModal
  };
};
