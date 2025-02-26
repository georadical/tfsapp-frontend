"use client";

import React, { useState, useEffect } from "react";
import Carousel from "./GenericCarousel";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/services/', {
          headers: {
            'Accept': 'application/json'
          }
        });

        // Check if the response is JSON
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Server is not responding with JSON. Please check if the Django server is running.");
        }

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.detail || "Failed to fetch services");
        }
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (isLoading) {
    return (
      <section id="services" className="w-full bg-gray-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 sm:mb-10">Our Services</h2>
          <div className="flex justify-center items-center min-h-[400px] sm:min-h-[450px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="services" className="w-full bg-gray-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 sm:mb-10">Our Services</h2>
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
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
    <section id="services" className="w-full bg-gray-100 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 sm:mb-10">Our Services</h2>
        {services.length > 0 ? (
          <div className="relative -mx-4 sm:-mx-6 px-4 sm:px-6">
            <Carousel>
              {services.map((service) => (
                <div key={service.id} className="px-3 sm:px-4">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    imageUrl={service.image}
                    onLearnMore={() => console.log(`Learn more about ${service.title}`)}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        ) : (
          <div className="text-center text-gray-600 min-h-[400px] sm:min-h-[450px] flex items-center justify-center">
            <p className="text-lg">No services available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
