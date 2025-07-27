'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blurData from '@/public/properties/blur/blurData.json';

const PropertyCard = ({ property }) => {
    const coverImage = property.cover_image;
    const filename = coverImage.split('/').pop();
    return (
        <Link href={`/properties/${property.id}`}>
            <div
                className="bg-white text-black rounded-lg shadow-md overflow-hidden h-[350px] relative hover:scale-105 transition cursor-pointer">
                {/* <img src={property.cover_image} alt="Property 1" className="w-full h-full object-cover" /> */}
                <Image
                    src={coverImage}
                    alt={property.name}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL={blurData[filename]}
                />
                <div className="p-3 absolute bottom-0">
                    <h3 className="text-base font-bold text-white drop-shadow-md"
                        style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
                    >{property.name}</h3>
                    <p className="text-sm text-white drop-shadow-md"
                        style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
                    >{property.location.city}, {property.location.state}</p>
                    <p className="text-sm text-white drop-shadow-md"
                        style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
                    >{property.beds + " Beds " + property.baths + " Baths " + property.sqft + ' sqft'}</p>
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;
