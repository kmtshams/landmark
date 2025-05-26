'use client';
import React, { useState } from 'react';
import PropertyImage from '@/components/PropertyImage'; // or change to a generic Image component if needed

const PropertyGallery = ({ property }) => {
  const [showAll, setShowAll] = useState(false);
  const totalImages = property.numPics;
  const displayedImages = showAll ? totalImages : Math.min(6, totalImages);

  return (
    <div className="flex flex-wrap px-5 md:px-20 bg-cover bg-center relative bg-black justify-center">
      <div className="relative w-full">
        <div className="w-full pb-12 relative z-0">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {Array.from({ length: displayedImages }, (_, index) => (
              <PropertyImage
                key={index}
                src={`/properties/${property.id}/pics/${index}.jpeg`}
                alt={`Property Image ${index + 1}`}
                className="property-image w-full h-75 object-cover"
              />
            ))}
          </div>
        </div>

        {totalImages > 6 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-5 py-2 border border-white rounded text-white hover:bg-white hover:text-black transition cursor-pointer"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyGallery;
