"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    async function fetchHero() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/hero/");
        if (!res.ok) throw new Error("Failed to fetch hero data");
        const data = await res.json();
        setHeroData(data);
      } catch (error) {
        console.error("Error fetching hero data:", error);
      }
    }
    fetchHero();
  }, []);

  if (!heroData) return null; // No renderiza nada hasta que lleguen los datos

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
              className="w-full sm:w-auto text-center bg-primary text-white py-3 px-8 text-base lg:text-lg font-medium rounded-md hover:bg-primary-light transition-colors duration-200"
            >
              Our Services
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
              <p className="text-base text-gray-dark font-medium tracking-wide">Our clients:</p>
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
                  <svg className="h-full w-auto" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="90" height="60" fill="#2A3B4D" fillOpacity="0.8"/>
                    <path d="M20 40L45 20L70 40" stroke="white" strokeWidth="4" fill="none"/>
                  </svg>
                </div>
                {/* Logo 4 - Estilo moderno */}
                <div className="flex items-center h-8 sm:h-10">
                  <svg className="h-full w-auto" viewBox="0 0 150 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="150" height="60" fill="#2A3B4D" fillOpacity="0.8"/>
                    <circle cx="45" cy="30" r="15" fill="white"/>
                    <circle cx="105" cy="30" r="15" fill="white"/>
                    <rect x="45" y="25" width="60" height="10" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end self-stretch pl-0 lg:pl-2 mt-8 lg:mt-0">
          <div className="relative h-full flex items-center w-full">
            <img
              src={heroData.image}
              alt="Hero"
              className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover object-center rounded-md"
              style={{ maxWidth: "650px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
