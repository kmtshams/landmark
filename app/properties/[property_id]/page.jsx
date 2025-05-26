import React from 'react';
import properties from '../../../public/properties.json';
import details from '../../../public/details.json';
import cities from '../../../public/cities.json';
import PropertyContactForm from '@/components/PropertyContactForm';
import PropertyImage from '@/components/PropertyImage';
import Details from '@/components/Details';
import PropertyGallery from '@/components/PropertyGallery';


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
                    <p className="text-left text-xl md:text-2xl">{property?.location?.city}, {property?.location?.state}</p>
                    <h1 className="mb-4 text-4xl md:text-6xl font-bold text-left">{property?.name}</h1>
                    <p className="text-left text-base md:text-xl">
                        {property?.guests} Guests | {property?.beds} Beds | {property?.baths} Baths | {property?.sqft} sqft
                    </p>
                </div>
            </div>
          
            <PropertyGallery property={property} />

            <div className="flex flex-wrap px-20 pt-20 bg-cover bg-center relative bg-black justify-center">
                <Details details={[{summary:"Overview", description: property.description}, ...details]} />
            </div>
            <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-8 pt-30 relative max-w-2xl mx-auto">
                <div className="w-full">
                    <h1 className="mb-4 text-6xl  text-center pb-15">Get in touch</h1>
                    <PropertyContactForm />
                </div>
            </div>

        </main>
    );
};

export default PropertyPage;
