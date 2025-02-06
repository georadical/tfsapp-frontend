"use client";

import React from 'react';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

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

// Temporary example data
const exampleSections = [
  {
    id: 1,
    title: "Work with tools you already use",
    description: "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
    features: [
      "Continuous integration and deployment",
      "Development workflow",
      "Knowledge management"
    ],
    image: "/images/feature-work.jpg",
    imageAlt: "Team working with development tools"
  },
  {
    id: 2,
    title: "We invest in the world's potential",
    description: "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
    features: [
      "Dynamic reports and dashboards",
      "Templates for everyone",
      "Development workflow",
      "Limitless business automation",
      "Knowledge management"
    ],
    image: "/images/feature-invest.jpg",
    imageAlt: "Investment and growth visualization"
  }
];

const DefaultFeatureList = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {exampleSections.map((section, index) => (
          <FeatureSection
            key={section.id}
            title={section.title}
            description={section.description}
            features={section.features}
            image={section.image}
            imageAlt={section.imageAlt}
            isReversed={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default DefaultFeatureList;
