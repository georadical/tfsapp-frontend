"use client";

import React, { useEffect } from "react";
import Image from 'next/image';
import OrganisationSection from './OrganisationSection';
import { useContactModal } from '@/context/ContactModalContext';
import { useHeroSection } from '@/lib/swr-hooks';
import { API_BASE } from '@/lib/api';

export default function Hero() {
  const { openModal } = useContactModal();
  
  // Use SWR hook to fetch hero section data
  const { heroData, isLoading, isError, error } = useHeroSection();

  // Log the data for debugging - moved before conditionals
  useEffect(() => {
    if (heroData) {
      console.log("Hero section data fetched:", heroData);
    }
  }, [heroData]);

  // Loading state
  if (isLoading) {
    return (
      <section className="w-full bg-white pt-48 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (isError) {
    return (
      <section className="w-full bg-white pt-48 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p className="font-bold">Error loading hero content</p>
            <p>{error?.message || "Failed to load content"}</p>
          </div>
        </div>
      </section>
    );
  }

  // Fallback data if API returns empty or missing fields
  const title = heroData?.title || "Precision Forestry Solutions";
  const subtitle = heroData?.subtitle || "Empowering sustainable forest management through advanced technology and expert services.";
  
  // Format the image URL properly to work with the configured remotePatterns
  let imageUrl = "/api/placeholder/800/600"; // Default fallback
  if (heroData?.image) {
    const fileName = heroData.image.split('/uploads/').pop();
    imageUrl = `${process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '').replace(/\/api$/, '')}/uploads/${fileName}`;
  }

  return (
    <section className="w-full bg-white pt-48 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-4">
        {/* Text Content */}
        <div className="flex-1 max-w-2xl w-full lg:max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {title}
          </h1>
          <p className="text-gray-dark mb-6 text-sm sm:text-base" style={{ fontSize: "16px" }}>{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-6 mt-6">
            <button
              onClick={openModal}
              className="w-full sm:w-auto text-center bg-accent text-white py-3 px-8 text-base lg:text-lg font-medium rounded-md hover:bg-accent-dark transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,126,33,0.3)]"
            >
              <strong>{heroData?.cta_text || "Contact Us"}</strong>
            </button>
            <a
              href="#expertise"
              className="w-full sm:w-auto text-center bg-gray-light text-gray-dark border border-gray-dark py-3 px-8 text-base lg:text-lg font-medium rounded-md hover:bg-gray-dark hover:text-white transition-colors duration-200"
            >
              {heroData?.secondary_cta_text || "Expertise"}
            </a>
          </div>
          
          {/* Organisation Section */}
          <OrganisationSection />
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full lg:max-w-xl">
          <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src={imageUrl}
              alt={heroData?.image_alt || "Forest management and technology"}
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
