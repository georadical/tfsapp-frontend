"use client";

import React, { useEffect, useState } from "react";
import ValuesCard from "./ValuesCard";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

const ValuesSection = () => {
  const [values, setValues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/values/`, {
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
          throw new Error(data.detail || "Failed to fetch values data");
        }

        setValues(data);
      } catch (error) {
        console.error("Error fetching values:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchValues();
  }, []); // Empty dependency array means this effect runs once on mount

  if (isLoading) {
    return (
      <section className="w-full bg-gray-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="animate-pulse h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse bg-white rounded-lg p-6 shadow">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-gray-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center text-red-600">
            <h2 className="text-xl font-semibold mb-2">Error loading values</h2>
            <p className="text-sm">{error}</p>
            {error.includes("server") && (
              <p className="text-sm mt-2">
                Please make sure the Django server is running at http://127.0.0.1:8000
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-gray-100 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our core values shape every decision we make and guide our interactions with clients, partners, and each other. They are the foundation of our commitment to excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <ValuesCard
              key={value.id}
              title={value.title}
              description={value.short_description}
              image={value.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
