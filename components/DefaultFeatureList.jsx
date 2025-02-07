"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const FeatureSection = ({ title, description, features, image, imageAlt, isReversed }) => (
  <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center py-12 lg:py-16`}>
    {/* Text Content */}
    <div className="flex-1 space-y-6">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
        {title}
      </h2>
      <p className="text-gray-600 text-lg">
        {description}
      </p>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li 
            key={index}
            className="flex items-start gap-3 group"
          >
            <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1 transition-colors duration-300 group-hover:text-primary-dark" />
            <span className="text-gray-600 transition-colors duration-300 group-hover:text-gray-900">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* Image */}
    <div className="flex-1 w-full relative">
      <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  </div>
);

const DefaultFeatureList = () => {
  const [expertiseData, setExpertiseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpertise = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/expertise/', {
          headers: {
            'Accept': 'application/json'
          }
        });

        // Check if the response is JSON
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Server is not responding with JSON. Please check if the Django server is running.");
        }

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.detail || "Failed to fetch expertise data");
        }
        
        // La API devuelve un array, tomamos el primer elemento
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("No expertise data available");
        }

        const expertiseItem = data[0]; // Tomamos el primer elemento del array
        
        setExpertiseData({
          title: expertiseItem.title,
          description: expertiseItem.description,
          image: expertiseItem.image, // La imagen ya viene con la URL completa
          expertise_items: expertiseItem.expertise_items
        });
      } catch (error) {
        console.error("Error fetching expertise:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExpertise();
  }, []);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* First section remains static */}
        <FeatureSection
          title="Work with tools you already use"
          description="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
          features={["Continuous integration and deployment", "Development workflow", "Knowledge management"]}
          image="/images/feature-work.jpg"
          imageAlt="Team working with development tools"
          isReversed={false}
        />

        {/* Dynamic expertise section */}
        {isLoading ? (
          <div className="py-12 text-center text-gray-600">
            <div className="animate-pulse">Loading expertise data...</div>
          </div>
        ) : error ? (
          <div className="py-12 text-center text-red-600">
            <p className="font-semibold">Error loading expertise data</p>
            <p className="text-sm mt-2">{error}</p>
            {error.includes("server") && (
              <p className="text-sm mt-2">
                Please make sure the Django server is running at http://127.0.0.1:8000
              </p>
            )}
          </div>
        ) : expertiseData && (
          <FeatureSection
            title={expertiseData.title}
            description={expertiseData.description}
            features={expertiseData.expertise_items}
            image={expertiseData.image}
            imageAlt={`${expertiseData.title} illustration`}
            isReversed={true}
          />
        )}
      </div>
    </section>
  );
};

export default DefaultFeatureList;
