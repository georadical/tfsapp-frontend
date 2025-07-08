"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

// Remove trailing slash if present to avoid double-slash in URLs
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';
const API_BASE_URL = apiUrl.endsWith('/') ? apiUrl.slice(0, -1) : apiUrl;

// Helper function to ensure we always use https URLs for Railway
const ensureHttpsUrl = (url) => {
  if (!url) return '';
  
  // Check if this is a Railway URL
  if (url.includes('tfsapp-production.up.railway.app')) {
    // Extract the path after /uploads/
    const uploadPathMatch = url.match(/\/uploads\/(.*?)$/);
    if (uploadPathMatch && uploadPathMatch[1]) {
      return `https://tfsapp-production.up.railway.app/uploads/${uploadPathMatch[1]}`;
    }
  }
  
  // For other URLs or if pattern matching fails, just replace protocol
  return url.replace(/^http:\/\//i, 'https://');
};

const FeatureSection = ({ title, description, features, image, imageAlt }) => {
  // Dividir las características en dos columnas
  const midpoint = Math.ceil(features.length / 2);
  const firstHalf = features.slice(0, midpoint);
  const secondHalf = features.slice(midpoint);

  // Eliminar la frase "Our expertise includes:" del texto de descripción
  const cleanDescription = description ? description.replace(/Our expertise includes:$/i, '').trim() : '';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Celda 1: Título y descripción */}
      <div className="space-y-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
          {title}
        </h2>
        <p className="text-gray-600 text-lg whitespace-pre-line">
          {cleanDescription}
        </p>
      </div>

      {/* Celda 2: Imagen */}
      <div className="w-full">
        <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
          <Image
            src={ensureHttpsUrl(image)}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Celda 3: Primera mitad de las características */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-primary">Our expertise includes:</h3>
        <ul className="space-y-4">
          {firstHalf.map((feature, index) => (
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

      {/* Celda 4: Segunda mitad de las características */}
      <div className="space-y-6">
        <ul className="space-y-4">
          {secondHalf.map((feature, index) => (
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
    </div>
  );
};

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
            />
          )
        )}
      </div>
    </section>
  );
};

export default DefaultFeatureList;
