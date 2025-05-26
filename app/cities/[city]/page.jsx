import React from 'react';
import cities from '../../../public/cities.json';
import properties from '../../../public/properties.json';
import PropertyCard from "@/components/PropertyCard";

const CityPage = async ({ params }) => {
    const { city } = await params;
    const rawCity = params.city;
    const decodedCity = decodeURIComponent(rawCity);
    const cityData = cities[decodedCity];
    const cityProperties = properties.filter((property) => property.location.city === cityData.city);


    return (
        <main>
            <div
                className="h-[700px] md:min-h-screen flex items-center justify-start p-8 bg-cover bg-center relative"
                style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/${cityData.image})`}}
            >
                <div className="w-full md:w-1/2 max-w-2xl text-white bg-black/30 backdrop-blur-sm p-6 md:p-10 mt-80">
                    <h1 className="mb-4 text-4xl md:text-6xl font-bold text-left">{cityData.city}, {cityData.state}</h1>
                    <p className="text-left text-base md:text-xl">{cityData.description}</p>
                </div>
            </div>

            {cityProperties.length > 0 && (
                <h1 className="mb-4 text-3xl md:text-6xl text-center pb-15">Check out our properties in {cityData.city}.</h1>
            )}

            {cityProperties.length > 0 && (
                <div className="flex flex-wrap space-x-12 items-center justify-center">
                    {cityProperties.map((property, index) => (
                        <PropertyCard key={index} property={property} />
                    ))}
                </div>
            )}

            {cityProperties.length === 0 && (
                <p className="text-center text-base md:text-xl">No properties found in {cityData.city}.</p>
            )}
        </main>
    );
};

export default CityPage;
