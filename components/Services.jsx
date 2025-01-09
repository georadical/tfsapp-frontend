import React from "react";
import Carousel from "./GenericCarousel";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Forest Inventory",
    description: "Fast, precise inventory using LiDAR technology.",
    imageUrl: "/path-to-image1.jpg",
  },
  {
    title: "Mapping & GIS",
    description: "Accurate mapping solutions for forestry needs.",
    imageUrl: "/path-to-image2.jpg",
  },
  {
    title: "Project Management",
    description: "Expert guidance for forestry projects of any scale.",
    imageUrl: "/path-to-image3.jpg",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
        <Carousel>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
