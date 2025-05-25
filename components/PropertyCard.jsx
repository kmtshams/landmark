'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const PropertyCard = ({ property }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={`/properties/${property.id}`}>
            <div 
                className="w-75 h-110 mt-10 overflow-hidden relative bg-cover bg-center" 
                style={{ 
                    backgroundImage: isHovered 
                        ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(/properties/${property.id}/showcase.jpeg)`
                        : `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/properties/${property.id}/showcase.jpeg)`
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="absolute bottom-0 left-0 right-0 p-4 ">
                    {isHovered && (
                        <div className="text-white text-sm mb-10 border-b border-white pb-4">
                            "This property is amazing! Great location and amenities."
                            <div className="flex items-center mt-2">
                                <img src={`/properties/${property.id}/reviewer.jpeg`} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                                <div className="flex justify-between w-full p-2">
                                    <span>
                                        <div className="text-xs">{property.review.name}</div>
                                        <div className="text-xs">{property.review.date}</div>
                                    </span>
                                    <span className="text-white text-xs">
                                        {[...Array(property.review.rating)].map((_, index) => (
                                            <span key={index}>★</span>
                                        ))}
                                        {[...Array(5 - property.review.rating)].map((_, index) => (
                                            <span key={index}>☆</span>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                    <h2 className="text-white text-lg font-bold">{property.name}</h2>
                    <h3 className="text-white text-sm">{property.location?.city}, {property.location?.state}</h3>
                    <span className="text-white text-xs pr-2">{property.beds} Beds</span>
                    <span className="text-white text-xs pr-2">{property.baths} Baths</span>
                    <span className="text-white text-xs">{property.sqft} sqft</span>
                    
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;
