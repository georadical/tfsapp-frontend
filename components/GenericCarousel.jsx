import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';


const Carousel = ({ 
  children,
  itemsPerView = {
    mobile: 1,    // < 768px
    tablet: 2,    // >= 768px
    desktop: 3    // >= 1280px
  },
  gap = 'gap-4',
  className = '',
  navigation = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(itemsPerView.mobile);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerView(itemsPerView.mobile);
      } else if (width < 1280) {
        setCardsPerView(itemsPerView.tablet);
      } else {
        setCardsPerView(itemsPerView.desktop);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, [itemsPerView]);

  const nextSlide = () => {
    setCurrentIndex(current => {
      const totalItems = React.Children.count(children);
      return current + cardsPerView >= totalItems ? 0 : current + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(current => {
      const totalItems = React.Children.count(children);
      return current === 0 ? Math.max(0, totalItems - cardsPerView) : current - 1;
    });
  };

  return (
    <div className={`w-full relative ${className}`}>
      <div className="overflow-hidden">
        <div 
          ref={containerRef}
          className={`flex transition-transform duration-500 ease-in-out ${gap}`}
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-full md:w-1/2 xl:w-1/3 p-2"
              style={{ flex: `0 0 ${100 / cardsPerView}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      
      {navigation && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 z-10"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;