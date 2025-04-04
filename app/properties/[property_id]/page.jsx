import React from 'react';
import properties from '../../../public/properties/properties.json';
import fs from 'fs';
import path from 'path';

const PropertyPage = async ({ params }) => {
    const { property_id } = await params;
    const property = properties.at(Number(property_id));
    return (
        <main>
            <div className="min-h-screen flex items-center justify-start p-8 bg-red-100 bg-cover bg-center relative" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/properties/${property.id}/showcase.jpeg)` }}>
                <div className="max-w-2xl text-white bg-black/30 backdrop-blur-sm w-1/2 p-10">
                    <p className="text-left text-2xl">{property?.location}</p>
                    <h1 className="mb-4 text-6xl font-bold text-left">{property?.name}</h1>
                    <p className="text-left text-xl">{property?.guests} Guests | {property?.beds} Beds | {property?.baths} Baths | {property?.sqft} sqft</p>
                </div>
            </div>
            <div className="flex flex-wrap min-h-screen p-8 pt-30 bg-cover bg-center relative bg-black">
                <div className="grid grid-cols-2 gap-5">
                    <div className="col-span-1">
                        <h1 className='text-white text-2xl font-bold mb-5'>Description</h1>
                        <pre className="description whitespace-pre-wrap break-words">{property.description}</pre>
                    </div>
                    <div className="col-span-1 grid grid-cols-2 gap-5">
                        {Array.from({ length: property.numPics }, (_, index) => (
                            <img key={index} src={`/properties/${property.id}/pics/${index}.jpeg`} alt={`Property Image ${index + 1}`} className="property-image w-full h-75 object-cover" />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PropertyPage;
