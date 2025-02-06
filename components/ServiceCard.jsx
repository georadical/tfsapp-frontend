import React from 'react';

const ServiceCard = ({ 
  title, 
  description, 
  imageUrl, 
  onLearnMore,
  buttonText = 'Read more →',
  bgColor = 'bg-primary-dark',
  buttonColor = 'bg-accent',
  buttonHoverColor = 'hover:bg-accent-light',
}) => (
  <div className="w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
    <div className="relative aspect-[4/3]">
      <img 
        src={imageUrl || "/api/placeholder/400/300"} 
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className={`${bgColor} p-6`}>
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-light text-sm mb-4">{description}</p>
      <button
        onClick={onLearnMore}
        className={`${buttonColor} ${buttonHoverColor} text-white text-sm font-medium py-2 px-4 rounded flex items-center gap-2 transition-colors duration-200`}
      >
        {buttonText}
      </button>
    </div>
  </div>
);

export default ServiceCard;