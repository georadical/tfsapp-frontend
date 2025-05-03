"use client";

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const OrganisationCarousel = ({ organisations }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="organisation-carousel relative px-4">
      <Slider {...settings}>
        {organisations.map((org) => (
          <div key={org.id} className="px-2">
            <a
              href={org.organisation_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-[80px] transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-full w-full">
                <Image
                  src={ensureHttpsUrl(org.organisation_logo)}
                  alt={org.organisation_name || 'Organization logo'}
                  fill
                  sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, 200px"
                  className="object-contain"
                  priority
                />
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OrganisationCarousel;
