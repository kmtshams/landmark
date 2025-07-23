
import React from 'react';
import properties from '../../../public/properties.json';
import details from '../../../public/details.json';
import cities from '../../../public/cities.json';
import PropertyContactForm from '@/components/PropertyContactForm';
import PropertyImage from '@/components/PropertyImage';
import Details from '@/components/Details';
import PropertyGallery from '@/components/PropertyGallery';
import PropertyAccordion from '@/components/PropertyAccordion';


const PropertyPage = async ({ params }) => {
    const { property_id } = await params;
    const property = properties.at(Number(property_id));
    console.log("property kh", property)
    return (
        // <main className='bg-[#e0dcd2]'>
        //     <div
        //         className="h-[700px] md:min-h-screen flex items-center justify-start p-8 bg-cover bg-center relative"
        //         style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/properties/${property.id}/showcase.jpeg)` }}
        //     >
        //         <div className="w-full md:w-1/2 max-w-2xl text-white bg-black/30 backdrop-blur-sm p-6 md:p-10 mt-80">
        //             <p className="text-left text-xl md:text-2xl">{property?.location?.city}, {property?.location?.state}</p>
        //             <h1 className="mb-4 text-4xl md:text-6xl font-bold text-left">{property?.name}</h1>
        //             <p className="text-left text-base md:text-xl">
        //                 {property?.guests} Guests | {property?.beds} Beds | {property?.baths} Baths | {property?.sqft} sqft
        //             </p>
        //         </div>
        //     </div>

        //     <PropertyGallery property={property} />

        //     <div className="flex flex-wrap px-20 pt-20 bg-cover bg-center relative bg-black justify-center">
        //         <Details details={[{ summary: "Overview", description: property.description }, ...details]} />
        //     </div>
        //     <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-8 pt-30 relative max-w-2xl mx-auto">
        //         <div className="w-full">
        //             <h1 className="mb-4 text-6xl  text-center pb-15">Get in touch</h1>
        //             <PropertyContactForm />
        //         </div>
        //     </div>

        // </main>
        <main className='bg-[#e0dcd2] pt-[150px]'>
            <div className="max-w-6xl mx-auto">

                {/* Images Grid */}
                <div className='flex gap-3 mb-3'>
                    <div className='flex-[1.3]'>
                        <div className="bg-[#6c583b]/59 text-white p-4 mb-3">
                            <h2 className="text-3xl font-bold">{property.name}</h2>
                            <p className="text-sm">{property.location.city}, {property.location.state}</p>
                            <p className="text-sm">
                                {property.guests} Guests | {property.beds} Beds | {property.baths} Baths | {property.sqft} sqft
                            </p>
                        </div>
                        <div className="overflow-hidden">
                            <img
                                src={property.images[0]}
                                alt={`${property.images[0]}`}
                                className="w-full max-h-[300px] object-cover hover:scale-105 transition"
                            />
                        </div>
                    </div>
                    <div className='flex-[1.3]'>
                        <div className="overflow-hidden mb-3">
                            <img
                                src={property.images[1]}
                                alt={`${property.images[1]}`}
                                className="w-full max-h-[200px] object-cover hover:scale-105 transition"
                            />
                        </div>
                        <div className="overflow-hidden">
                            <img
                                src={property.images[2]}
                                alt={`${property.images[2]}`}
                                className="w-full max-h-[210px] object-cover hover:scale-105 transition"
                            />
                        </div>
                    </div>
                </div>
                <PropertyGallery property={property} />

                <div className="py-18">
                    <PropertyAccordion property={property} />
                </div>
                <div className='pb-18'>
                    <PropertyContactForm />
                </div>
            </div>
        </main>
    );
};

export default PropertyPage;
