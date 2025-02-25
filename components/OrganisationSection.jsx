"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

export default function OrganisationSection() {
  const [sectionData, setSectionData] = useState(null);
  const [organisations, setOrganisations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch section title
        const sectionResponse = await fetch(`${API_BASE_URL}/cms/organisation-section/`);
        
        if (!sectionResponse.ok) {
          throw new Error(`Failed to fetch section data: ${sectionResponse.status}`);
        }
        const sectionResult = await sectionResponse.json();
        setSectionData(sectionResult[0]);

        // Fetch organisations
        const organisationsResponse = await fetch(`${API_BASE_URL}/cms/organisation-logos/`);
        
        if (!organisationsResponse.ok) {
          throw new Error(`Failed to fetch organisation data: ${organisationsResponse.status}`);
        }
        const organisationsResult = await organisationsResponse.json();
        setOrganisations(organisationsResult);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="mt-8 lg:mt-12">
        <div className="border-t border-primary-light/20 mb-6 lg:mb-8"></div>
        <div className="text-gray-600">Loading organisations...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 lg:mt-12">
        <div className="border-t border-primary-light/20 mb-6 lg:mb-8"></div>
        <div className="text-red-600">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 lg:mt-12">
      <div className="border-t border-primary-light/20 mb-6 lg:mb-8"></div>
      <div className="space-y-4 lg:space-y-6">
        {sectionData && (
          <p className="text-lg lg:text-xl font-bold text-gray-dark tracking-wide">
            {sectionData.title}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-x-12 lg:gap-y-8">
          {organisations.map((org) => (
            <a
              key={org.id}
              href={org.organisation_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center h-12 sm:h-16 transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-full w-[160px]">
                <Image
                  src={org.organisation_logo}
                  alt={org.organisation_name}
                  fill
                  sizes="160px"
                  className="object-contain"
                  priority
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
