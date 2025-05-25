import React from 'react';
import properties from '../../../public/properties/properties.json';
import PropertyContactForm from '@/components/PropertyContactForm';
import PropertyImage from '@/components/PropertyImage';

const PropertyPage = async ({ params }) => {
    const { property_id } = await params;
    const property = properties.at(Number(property_id));
    return (
        <main>
            <div
                className="h-[700px] md:min-h-screen flex items-center justify-start p-8 bg-cover bg-center relative"
                style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/properties/${property.id}/showcase.jpeg)`}}
            >
                <div className="w-full md:w-1/2 max-w-2xl text-white bg-black/30 backdrop-blur-sm p-6 md:p-10">
                    <p className="text-left text-xl md:text-2xl">{property?.location}</p>
                    <h1 className="mb-4 text-4xl md:text-6xl font-bold text-left">{property?.name}</h1>
                    <p className="text-left text-base md:text-xl">
                        {property?.guests} Guests | {property?.beds} Beds | {property?.baths} Baths | {property?.sqft} sqft
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap px-5 md:px-20 -mt-[100px] bg-cover bg-center relative bg-black justify-center">
                <div className="relative w-full">
                    {/* Scrollable area */}
                    <div className="h-[400px] md:h-[700px] overflow-y-auto w-full pb-12 relative z-0">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                            {Array.from({ length: property.numPics }, (_, index) => (
                            <PropertyImage
                                key={index}
                                src={`/properties/${property.id}/pics/${index}.jpeg`}
                                alt={`Property Image ${index + 1}`}
                                className="property-image w-full h-75 object-cover"
                            />
                            ))}
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-center -mt-[100px] p-2 w-full  bg-black relative"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%)',
                        }}
                    >

                        <div className="flex items-center justify-center w-full z-10 text-white">
                            <div className="mr-10 md:w-[32px] md:h-[32px] w-[16px] h-[16px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                fill="#ffffff"
                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                />
                            </svg>
                            </div>
                            <div className="text-md md:text-2xl font-bold">
                            Scroll for more pictures
                            </div>
                            <div className="ml-10 md:w-[32px] md:h-[32px] w-[16px] h-[16px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                fill="#ffffff"
                                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                                />
                            </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="flex flex-wrap min-h-screen px-20 pt-30 bg-cover bg-center relative bg-black justify-center">
                <h1 className='text-white text-2xl font-bold mb-5'>Description</h1>
                <pre className="description whitespace-pre-wrap break-words">{property.description}</pre>
            </div>
            <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-8 pt-30 relative max-w-2xl mx-auto">
                <div className="w-full">
                    <h1 className="mb-4 text-6xl font-bold text-center pb-15">Get in touch</h1>
                    <PropertyContactForm property={property} />
                </div>
            </div>

        </main>
    );
};

export default PropertyPage;
