'use client';
import React, { useState } from 'react';
import blurData from '@/public/properties/blur/blurData.json';
import Image from 'next/image';

const PropertyGallery = ({ property }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {property.images.slice(2, showMore ? property.images.length : 5).map((img, idx) => {
          const filename = img.split('/').pop();
          return (
            <div key={idx} className="overflow-hidden">
              <Image
                src={img}
                alt={`${property.title} image ${idx + 1}`}
                width={400}
                height={300}
                className="w-full max-h-[300px] object-cover hover:scale-105 transition"
                placeholder="blur"
                blurDataURL={blurData[filename]}
              />
            </div>
          )
        })}
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
