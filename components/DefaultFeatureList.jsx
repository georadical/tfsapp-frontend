"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const FeatureSection = ({ title, description, features, image, imageAlt, isReversed, showContactButton }) => (
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
        {showContactButton && (
          <div className="pt-4">
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 text-center text-white bg-primary hover:bg-primary-dark rounded-md transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        )}
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
  const [capabilityData, setCapabilityData] = useState(null);
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

  useEffect(() => {
    const fetchCapabilityStatement = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/capability-statement/', {
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
          throw new Error(data.detail || "Failed to fetch capability statement data");
        }

        // Check if data is an array and has at least one item
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("No capability statement data available");
        }

        const capabilityItem = data[0]; // Get the first item from the array
        setCapabilityData({
          title: capabilityItem.title,
          description: "At Technical Forest Services, we understand that accuracy, speed, and adaptability are critical to successful forestry management. With years of experience working across Australia and international landscapes, we provide reliable data and strategic project management to support decision-making and operational efficiency.\n\nWe offer a highly skilled team and state-of-the-art equipment, ensuring that every project—whether a large-scale forest estate or a specialized crop assessment—is handled with precision and discretion. Your goals define our approach, and we deliver exactly what you need, when you need it.\n\nLet's create smart forestry solutions together.",
          image: capabilityItem.image
        });
      } catch (error) {
        console.error("Error fetching capability statement:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCapabilityStatement();
  }, []);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {isLoading ? (
          <div className="text-center py-12">Loading...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-600">{error}</div>
        ) : (
          <>
            {expertiseData && (
              <FeatureSection
                title={expertiseData.title}
                description={expertiseData.description}
                features={expertiseData.expertise_items}
                image={expertiseData.image}
                imageAlt={expertiseData.title}
                isReversed={false}
              />
            )}
            {capabilityData && (
              <FeatureSection
                title={capabilityData.title}
                description={capabilityData.description}
                features={[]} // Empty array since CapabilityStatement doesn't have bullet points
                image={capabilityData.image}
                imageAlt={capabilityData.title}
                isReversed={true}
                showContactButton={true}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default DefaultFeatureList;
