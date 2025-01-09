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
    <section className="w-full bg-white py-12 mt-48">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            {heroData.title}
          </h1>
          <p style={{ fontSize: "12px" }} className="text-gray-600 mb-6">{heroData.subtitle}</p>
          <div className="flex space-x-4 mt-6">
            <a style={{fontSize: "14px", borderRadius: "3px" }}
              href="#services"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Our Services
            </a>
            <a style={{fontSize: "14px", borderRadius: "3px" }}
              href="#expertise"
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300"
            >
              Expertise
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroData.image}
            alt="Hero"
            className="w-full object-cover"
            style={{ borderRadius: "5px" }}
          />
        </div>
      </div>
    </section>
  );
}
