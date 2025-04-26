"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useContactModal } from "@/context/ContactModalContext";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

const CapabilityStatement = () => {
  const [capabilityData, setCapabilityData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { openModal } = useContactModal();

  useEffect(() => {
    const fetchCapabilityStatement = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/capability-statement/`, {
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
          throw new Error(data.detail || "Failed to fetch capability statement data");
        }

        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("No capability statement data available");
        }

        const capabilityItem = data[0];
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

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  if (!capabilityData) {
    return null;
  }

  return (
    <section id="statements" className="w-full bg-white scroll-mt-[120px] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight pt-16">
              {capabilityData.title}
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 text-lg whitespace-pre-line">
                {capabilityData.description}
              </p>
              <div className="pt-4">
                <button 
                  onClick={openModal}
                  className="inline-block px-8 py-3 text-center text-white bg-accent hover:bg-accent-dark rounded-md transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,126,33,0.3)]"
                >
                  <strong>Contact Us</strong>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src={capabilityData.image}
                alt={capabilityData.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityStatement;