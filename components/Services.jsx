"use client";

import React, { useState, useEffect } from "react";
import Carousel from "./GenericCarousel";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./services/ServiceModal";
import { useServices } from '@/lib/swr-hooks';

export default function Services() {
  // Use SWR hook for services data instead of the manual fetch
  const { services, isLoading, isError, error } = useServices();
  
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Log the services data for debugging
  useEffect(() => {
    if (services) {
      console.log("Services data fetched:", services);
    }
  }, [services]);

  // Handler for opening the modal with a specific service
  const handleReadMore = (service) => {
    // Log the selected service to verify it has all the expected fields
    console.log("Selected service:", service);
    
    // Store a complete copy of the service object to avoid reference issues
    setSelectedService({...service});
    setIsModalOpen(true);
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  if (isError) {
    return (
      <section id="services" className="w-full bg-gray-100 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-8 sm:mb-10">Our Services</h2>
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error?.message || "Failed to load services"}</span>
            {error?.message?.includes("server") && (
              <p className="text-sm mt-2">
                Please make sure the API server is running
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
        {services && services.length > 0 ? (
          <div className="relative -mx-4 sm:-mx-6 px-4 sm:px-6">
            <Carousel>
              {services.map((service) => (
                <div key={service.id} className="px-3 sm:px-4">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    imageUrl={service.image}
                    onLearnMore={() => handleReadMore(service)}
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

        {/* Service Modal */}
        <ServiceModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      </div>
    </section>
  );
}
