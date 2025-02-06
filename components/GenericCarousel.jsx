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
  const [slideWidth, setSlideWidth] = useState(0);
  const containerRef = useRef(null);
  const totalItems = React.Children.count(children);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      // Actualizar cards per view
      if (width < 768) {
        setCardsPerView(itemsPerView.mobile);
      } else if (width < 1280) {
        setCardsPerView(itemsPerView.tablet);
      } else {
        setCardsPerView(itemsPerView.desktop);
      }
      
      // Actualizar ancho del slide
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const gapSize = 24; // 24px de gap
        const availableWidth = containerWidth - (gapSize * (cardsPerView - 1));
        const cardWidth = Math.floor(availableWidth / cardsPerView);
        setSlideWidth(cardWidth);
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [itemsPerView, cardsPerView]);

  useEffect(() => {
    // Reset index cuando cambia el tamaño
    const maxIndex = Math.max(0, totalItems - cardsPerView);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerView, totalItems, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex(current => {
      const maxIndex = Math.max(0, totalItems - cardsPerView);
      return current >= maxIndex ? 0 : current + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(current => {
      const maxIndex = Math.max(0, totalItems - cardsPerView);
      return current <= 0 ? maxIndex : current - 1;
    });
  };

  const showNavigation = totalItems > cardsPerView;

  const getTransform = () => {
    const gapSize = 24;
    const offset = currentIndex * (slideWidth + gapSize);
    return `translateX(-${offset}px)`;
  };

  return (
    <div className={`w-full relative ${className}`}>
      <div className="overflow-hidden">
        <div 
          ref={containerRef}
          className={`flex transition-transform duration-500 ease-out`}
          style={{
            transform: getTransform(),
            gap: '24px'
          }}
        >
          {React.Children.map(children, (child) => (
            <div 
              className="flex-shrink-0"
              style={{ 
                width: `${slideWidth}px`
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      
      {showNavigation && navigation && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 z-10 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 z-10 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;