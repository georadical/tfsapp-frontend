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
  <div className="w-full sm:w-[360px] mx-auto overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
    <div className="relative w-full h-[300px] sm:h-[350px]">
      <img 
        src={imageUrl || "/api/placeholder/400/300"} 
        alt={title}
        className="w-full h-full object-cover object-center"
        style={{
          objectPosition: '50% 50%'
        }}
        loading="lazy"
        onError={(e) => {
          e.target.src = "/api/placeholder/400/300";
          e.target.onerror = null;
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
    <div className={`${bgColor} p-6 sm:p-7 h-[220px] flex flex-col`}>
      <div className="flex-1 min-h-0 flex flex-col">
        <div className="h-[60px]">
          <h2 className="text-xl sm:text-2xl font-bold text-white line-clamp-2">{title}</h2>
        </div>
        <div className="h-[84px] mt-3">
          <p className="text-gray-light text-sm sm:text-base line-clamp-3">{description}</p>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={onLearnMore}
          className={`${buttonColor} ${buttonHoverColor} w-full text-white text-sm sm:text-base font-medium py-2.5 px-5 rounded-md flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  </div>
);

export default ServiceCard;