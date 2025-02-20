"use client";

import React from "react";
import Image from 'next/image';

export default function Hero() {
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
            <a
              href="#services"
              className="w-full sm:w-auto text-center bg-primary text-white py-3 px-8 text-base lg:text-lg font-medium rounded-md hover:bg-primary-dark transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(79,70,229,0.3)]"
            >
              <strong>Contact Us</strong>
            </a>
            <a
              href="#expertise"
              className="w-full sm:w-auto text-center bg-gray-light text-gray-dark border border-gray-dark py-3 px-8 text-base lg:text-lg font-medium rounded-md hover:bg-gray-dark hover:text-white transition-colors duration-200"
            >
              Expertise
            </a>
          </div>
          
          {/* Divider and Additional Content Section */}
          <div className="mt-8 lg:mt-12">
            <div className="border-t border-primary-light/20 mb-6 lg:mb-8"></div>
            <div className="space-y-4 lg:space-y-6">
              <p className="text-lg lg:text-xl font-bold text-gray-dark tracking-wide">Our clients:</p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-x-12 lg:gap-y-8">
                {/* Logo 1 - Estilo tecnología */}
                <div className="flex items-center h-8 sm:h-10">
                  <svg className="h-full w-auto" viewBox="0 0 180 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="180" height="60" fill="#2A3B4D" fillOpacity="0.8"/>
                    <path d="M40 30L140 30" stroke="white" strokeWidth="4"/>
                    <circle cx="90" cy="30" r="15" fill="white"/>
                  </svg>
                </div>
                {/* Logo 2 - Estilo corporativo */}
                <div className="flex items-center h-8 sm:h-10">
                  <svg className="h-full w-auto" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="120" height="60" fill="#2A3B4D" fillOpacity="0.8"/>
                    <circle cx="60" cy="30" r="20" stroke="white" strokeWidth="4" fill="none"/>
                    <rect x="45" y="25" width="30" height="10" fill="white"/>
                  </svg>
                </div>
                {/* Logo 3 - Estilo minimalista */}
                <div className="flex items-center h-8 sm:h-10">
                  <svg className="h-full w-auto" viewBox="0 0 150 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="150" height="60" fill="#2A3B4D" fillOpacity="0.8"/>
                    <path d="M30 15L75 45L120 15" stroke="white" strokeWidth="4" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
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
