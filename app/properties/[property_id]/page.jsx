
import React from 'react';
import properties from '../../../public/properties.json';
import details from '../../../public/details.json';
import cities from '../../../public/cities.json';
import PropertyContactForm from '@/components/PropertyContactForm';
import PropertyImage from '@/components/PropertyImage';
import Details from '@/components/Details';
import PropertyGallery from '@/components/PropertyGallery';
import PropertyAccordion from '@/components/PropertyAccordion';
import Image from 'next/image';
import blurData from '@/public/properties/blur/blurData.json';


const PropertyPage = async ({ params }) => {
    const { property_id } = await params;
    const property = properties.at(Number(property_id));
    console.log("property kh", property)
    return (
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
                            <Image
                                src={property.cover_image}
                                alt={`${property.cover_image}`}
                                width={400}
                                height={300}
                                className="w-full max-h-[300px] object-cover hover:scale-105 transition"
                                placeholder="blur"
                                blurDataURL={blurData[property.cover_image.split('/').pop()]}
                            />
                        </div>
                    </div>
                    <div className='flex-[1.3]'>
                        <div className="overflow-hidden mb-3">
                            <Image
                                src={property.images[0]}
                                alt={`${property.images[0]}`}
                                width={400}
                                height={200}
                                className="w-full max-h-[200px] object-cover hover:scale-105 transition"
                                placeholder="blur"
                                blurDataURL={blurData[property.images[0].split('/').pop()]}
                            />
                        </div>
                        <div className="overflow-hidden">
                            <Image
                                src={property.images[1]}
                                alt={`${property.images[1]}`}
                                width={400}
                                height={200}
                                className="w-full max-h-[210px] object-cover hover:scale-105 transition"
                                placeholder="blur"
                                blurDataURL={blurData[property.images[1].split('/').pop()]}
                            />
                        </div>
                    </div>
                </div>
                <PropertyGallery property={property} />

                <div className="py-18">
                    <PropertyAccordion property={property} />
                </div>
                <div className='pb-18'>
                    <PropertyContactForm property={property} />
                </div>
            </div>
        </main>
    );
};

export default PropertyPage;
