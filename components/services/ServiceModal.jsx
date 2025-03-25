"use client";

import React, { useRef, useEffect } from "react";

/**
 * ServiceModal Component
 * 
 * A reusable modal component for displaying detailed service information.
 * Includes responsive design, close functionality (X button, ESC key, click outside),
 * and smooth animations.
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls visibility of modal
 * @param {Function} props.onClose - Callback to close the modal
 * @param {Object} props.service - Service object containing details
 * @param {string} props.service.title - Service title
 * @param {string} props.service.description - Short service description
 * @param {string} props.service.modal_image - URL to banner image
 * @param {string} props.service.modal_subtitle - Subtitle/subheadline
 * @param {string} props.service.modal_content - Full detailed content
 */
const ServiceModal = ({ isOpen, onClose, service }) => {
  // Ref for modal content to handle click outside
  const modalRef = useRef(null);
  
  // Log the received service object for debugging
  useEffect(() => {
    if (service && isOpen) {
      console.log("ServiceModal received service:", service);
      console.log("Extended fields available:", {
        hasModalSubtitle: Boolean(service.modal_subtitle),
        hasModalContent: Boolean(service.modal_content),
        hasModalImage: Boolean(service.modal_image)
      });
    }
  }, [service, isOpen]);
  
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

  // Function to split description into two lines
  const splitDescriptionInTwoLines = (description) => {
    if (!description) return ['', ''];
    
    // Find the middle word boundary
    const words = description.split(' ');
    const middleIndex = Math.ceil(words.length / 2);
    
    const firstLine = words.slice(0, middleIndex).join(' ');
    const secondLine = words.slice(middleIndex).join(' ');
    
    return [firstLine, secondLine];
  };

  // Don't render anything if modal is not open
  if (!isOpen || !service) {
    return null;
  }

  // Split description into two lines
  const [descriptionLine1, descriptionLine2] = splitDescriptionInTwoLines(service.description);

  // Determine modal image - use modal_image if available, fallback to regular image
  // Explicitly check for existence to avoid false negatives with empty strings
  const modalImage = service.modal_image || service.image || "/api/placeholder/900/400";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl relative animate-fade-in-up"
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
          {/* Top Section - Title and Description */}
          <div className="mb-5 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-[#191e34] mb-2">{service.title}</h2>
            <p className="text-[#303030] text-xs sm:text-sm leading-tight mb-0.5">{descriptionLine1}</p>
            <p className="text-[#303030] text-xs sm:text-sm leading-tight">{descriptionLine2}</p>
          </div>
          
          {/* Modal Banner Image - Edge to edge */}
          <div className="mb-6">
            <div className="w-full h-[280px] overflow-hidden rounded-lg relative">
              <img 
                src={modalImage}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ borderRadius: '0.5rem' }}
                onError={(e) => {
                  e.target.src = "/api/placeholder/900/400";
                  e.target.onerror = null;
                }}
              />
              <div className="absolute inset-0 border border-gray-200 rounded-lg pointer-events-none"></div>
            </div>
          </div>
          
          {/* Middle section - Subtitle */}
          {service.modal_subtitle && (
            <h3 className="text-base sm:text-lg font-semibold text-[#3951a3] mb-3">{service.modal_subtitle}</h3>
          )}
          
          {/* Bottom section - Extended Content */}
          {service.modal_content && (
            <div className="prose prose-sm max-w-none text-[#303030] text-sm leading-relaxed">
              {/* Conditionally render content based on whether it's HTML or plain text */}
              {service.modal_content.includes('<') && service.modal_content.includes('>') ? (
                <div dangerouslySetInnerHTML={{ __html: service.modal_content }} /> 
              ) : (
                service.modal_content.split('\n').map((paragraph, idx) => (
                  paragraph.trim() ? <p key={idx} className="mb-2">{paragraph}</p> : null
                ))
              )}
            </div>
          )}
          
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

export default ServiceModal;
