"use client";

import React from "react";
import Image from 'next/image';
import OrganisationSection from './OrganisationSection';
import { useContactModal } from '@/context/ContactModalContext';

export default function Hero() {
  const { openModal } = useContactModal();

  // Temporary static data until the backend endpoint is ready
  const heroData = {
    title: "Precision Forestry Solutions",
    subtitle: "Empowering sustainable forest management through advanced technology and expert services. We deliver accurate data and strategic insights to optimize your forestry operations."
  };

  return (
    <section className="w-full bg-white pt-48 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-4">
        {/* Text Content */}
        <div className="flex-1 max-w-2xl w-full lg:max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {heroData.title}
          </h1>
          <p className="text-gray-dark mb-6 text-sm sm:text-base" style={{ fontSize: "16px" }}>{heroData.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-6 mt-6">
            <button
              onClick={openModal}
              className="w-full sm:w-auto text-center bg-accent text-white py-3 px-8 text-base lg:text-lg font-medium rounded-md hover:bg-accent-dark transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,126,33,0.3)]"
            >
              <strong>Contact Us</strong>
            </button>
            <a
              href="#expertise"
              className="w-full sm:w-auto text-center bg-gray-light text-gray-dark border border-gray-dark py-3 px-8 text-base lg:text-lg font-medium rounded-md hover:bg-gray-dark hover:text-white transition-colors duration-200"
            >
              Expertise
            </a>
          </div>
          
          {/* Organisation Section */}
          <OrganisationSection />
        </div>

        {/* Image Section */}
        <div className="flex-1 w-full lg:max-w-xl">
          <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src="http://127.0.0.1:8000/uploads/hero_images/IMG_0381.jpeg"
              alt="Forest management and technology"
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
