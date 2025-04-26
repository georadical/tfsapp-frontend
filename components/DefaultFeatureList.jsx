"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

const FeatureSection = ({ title, description, features, image, imageAlt, isReversed }) => (
  <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center py-12 lg:py-16`}>
    {/* Text Content */}
    <div className="flex-1 space-y-6">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
        {title}
      </h2>
      <div className="space-y-6">
        <p className="text-gray-600 text-lg whitespace-pre-line">
          {description}
        </p>
      </div>
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
        const res = await fetch(`${API_BASE_URL}/expertise/`, {
          headers: {
            'Accept': 'application/json'
          }
        });

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Server is not responding with JSON. Please check if the Django server is running.");
        }

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.detail || "Failed to fetch expertise data");
        }
        
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("No expertise data available");
        }

        const expertiseItem = data[0];
        
        setExpertiseData({
          title: expertiseItem.title,
          description: expertiseItem.description,
          image: expertiseItem.image,
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
    <section id="expertise" className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : (
          expertiseData && (
            <FeatureSection
              title={expertiseData.title}
              description={expertiseData.description}
              features={expertiseData.expertise_items}
              image={expertiseData.image}
              imageAlt={expertiseData.title}
              isReversed={false}
            />
          )
        )}
      </div>
    </section>
  );
};

export default DefaultFeatureList;
