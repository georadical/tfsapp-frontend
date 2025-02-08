"use client";

import React from "react";
import Image from "next/image";

const ValuesCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center text-center">
      {/* Image Container */}
      <div className="relative w-16 h-16 mb-4">
        <img
          src={image}
          alt={`${title} icon`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ValuesCard;
