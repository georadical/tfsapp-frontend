"use client";

import React, { useRef, useEffect } from "react";

/**
 * LegalModal Component
 * 
 * A reusable modal component for displaying legal content (Privacy Policy and Terms & Conditions).
 * Includes responsive design, close functionality (X button, ESC key, click outside),
 * and smooth animations.
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls visibility of modal
 * @param {Function} props.onClose - Callback to close the modal
 * @param {Object} props.content - Content object containing legal information
 * @param {string} props.content.title - Title of the legal content (e.g., "Privacy Policy")
 * @param {string} props.content.body - Full detailed content of the legal document
 */
const LegalModal = ({ isOpen, onClose, content }) => {
  // Ref for modal content to handle click outside
  const modalRef = useRef(null);
  
  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  // Don't render anything if modal is not open
  if (!isOpen || !content) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative animate-fade-in-up overflow-y-auto max-h-[90vh]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Content wrapper */}
        <div className="px-6 py-6">
          {/* Top Section - Title */}
          <div className="mb-5 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-[#191e34] mb-2">{content.title}</h2>
          </div>
          
          {/* Content Section */}
          <div className="prose prose-sm max-w-none text-[#303030] text-sm leading-relaxed mb-5 text-justify">
            {/* Conditionally render content based on whether it's HTML or plain text */}
            {content.body.includes('<') && content.body.includes('>') ? (
              <div dangerouslySetInnerHTML={{ __html: content.body }} className="text-justify" /> 
            ) : (
              content.body.split('\n').map((paragraph, idx) => (
                paragraph.trim() ? <p key={idx} className="mb-2 text-justify">{paragraph}</p> : null
              ))
            )}
          </div>
          
          {/* Action button */}
          <div className="mt-5 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#ec9932] hover:bg-[#d88824] text-white rounded-md font-medium text-sm transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
