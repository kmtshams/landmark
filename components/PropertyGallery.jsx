'use client';
import React, { useState } from 'react';
import PropertyImage from '@/components/PropertyImage'; // or change to a generic Image component if needed

const PropertyGallery = ({ property }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    // <div className="flex flex-wrap px-5 md:px-20 bg-cover bg-center relative justify-center">
    //   <div className="relative w-full">
    //     <div className="w-full pb-12 relative z-0">
    //       <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
    //         {Array.from({ length: displayedImages }, (_, index) => (
    //           <PropertyImage
    //             key={index}
    //             src={`/properties/${property.id}/pics/${index}.jpeg`}
    //             alt={`Property Image ${index + 1}`}
    //             className="property-image w-full h-75 object-cover"
    //           />
    //         ))}
    //       </div>
    //     </div>

    //     {totalImages > 6 && (
    //       <div className="flex justify-center">
    //         <button
    //           onClick={() => setShowAll(!showAll)}
    //           className="px-5 py-2 border border-white rounded text-white hover:bg-white hover:text-black transition cursor-pointer"
    //         >
    //           {showAll ? 'Show Less' : 'Show More'}
    //         </button>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {property.images.slice(3, showMore ? property.images.length : 6).map((img, idx) => (
          <div key={idx} className="overflow-hidden">
            <img
              src={img}
              alt={`${property.title} image ${idx + 1}`}
              className="w-full max-h-[300px] object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {
        property.images.length > 6 &&
        <div className="flex justify-center mt-18">
          <button className="bg-[#6e6a56] text-white px-5 py-2 rounded-md text-sm hover:bg-[#5f5b46]"
            onClick={() => {
              setShowMore((prev) => !prev)
            }}
          >
            {
              showMore ? 'Show less' : 'Show more'
            }
          </button>
        </div>
      }
    </>
  );
};

export default PropertyGallery;
