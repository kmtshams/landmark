import React from 'react';
import cities from '../../../public/cities.json';
import properties from '../../../public/properties.json';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import PropertyCard from '@/components/PropertyCard';

const CityPage = async ({ params }) => {
    const { city } = await params;
    const rawCity = params.city;
    const decodedCity = decodeURIComponent(rawCity);
    const cityData = cities[decodedCity];
    const cityProperties = properties.filter((property) => property.location.city === cityData.city);

    const mapImage = () => {
        if (cityData.city === 'Irvine') {
            return {
                imgUrl: '/properties/irvine/irvine_map.png',
                mapUrl: 'https://www.google.com/maps/place/Irvine,+CA/@33.6865146,-117.9381964,11z/data=!3m1!4b1!4m6!3m5!1s0x80dcdd0e689140e3:0xa77ab575604a9a39!8m2!3d33.6845673!4d-117.8265049!16zL20vMGQ3azF6?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D'
            };
        }
        else if (cityData.city === 'San Diego') {
            return {
                imgUrl: '/properties/san_diego/san_diego_map.png',
                mapUrl: 'https://www.google.com/maps/place/San+Diego,+CA/@32.7249485,-117.2041912,12.17z/data=!4m6!3m5!1s0x80d9530fad921e4b:0xd3a21fdfd15df79!8m2!3d32.715738!4d-117.1610838!16zL20vMDcxdnI?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D'

            };
        }
        else if (cityData.city === 'Los Angeles') {
            return {
                imgUrl: '/properties/los_angeles/los_angeles_map.png',
                mapUrl: 'https://www.google.com/maps/place/Los+Angeles,+CA/@34.0522672,-118.4480415,10.87z/data=!4m6!3m5!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!8m2!3d34.0549076!4d-118.242643!16s%2Fm%2F030qb3t?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D'

            };
        }
        else if (cityData.city === 'Seattle') {
            return {
                imgUrl: '/properties/seattle/seattle_map.png',
                mapUrl: 'https://www.google.com/maps/place/Seattle,+WA/@47.5962844,-122.2073887,8.25z/data=!4m6!3m5!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6061389!4d-122.3328481!16zL20vMGQ5anI?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D'
            };
        }
        else {
            return ''
        }
    }


    return (
        // <main>
        //     <div
        //         className="h-[700px] md:min-h-screen flex items-center justify-start p-8 bg-cover bg-center relative"
        //         style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/${cityData.image})`}}
        //     >
        //         <div className="w-full md:w-1/2 max-w-2xl text-white bg-black/30 backdrop-blur-sm p-6 md:p-10 mt-80">
        //             <h1 className="mb-4 text-4xl md:text-6xl font-bold text-left">{cityData.city}, {cityData.state}</h1>
        //             <p className="text-left text-base md:text-xl">{cityData.description}</p>
        //         </div>
        //     </div>

        //     {cityProperties.length > 0 && (
        //         <h1 className="mb-4 text-3xl md:text-6xl text-center pb-15">Check out our properties in {cityData.city}.</h1>
        //     )}

        //     {cityProperties.length > 0 && (
        //         <div className="flex flex-wrap space-x-12 items-center justify-center">
        //             {cityProperties.map((property, index) => (
        //                 <PropertyCard key={index} property={property} />
        //             ))}
        //         </div>
        //     )}

        //     {cityProperties.length === 0 && (
        //         <p className="text-center text-base md:text-xl">No properties found in {cityData.city}.</p>
        //     )}
        // </main>
        <div className="pt-16 bg-[#69664c]/85 min-h-screen text-white font-sans">
            {/* About Section */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="relative inline-block bg-[#ad997b] text-white font-bold uppercase px-4 py-2 mb-2 text-sm md:text-2xl">
                    {cityData.city}, {cityData.state}
                    <span className="absolute top-0 right-[-15px] w-0 h-0 border-t-[24px] border-b-[24px] border-l-[15px] border-t-transparent border-b-transparent border-l-[#ad997b]"></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <p className="text-2xl leading-relaxed col-span-2 pt-10">
                        {cityData.description}
                    </p>
                    <div className='relative'>
                        <img
                            src={cityData.image}
                            alt={cityData.image}
                            className="w-full rounded-md object-cover"
                        />
                        <div className="absolute left-3 bottom-3 text-white">
                            <h3
                                className="text-2xl font-bold"
                                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
                            >
                                {cityData.city}, {cityData.state}
                            </h3>
                            <p
                                style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}
                            >
                                {cityData.numProperties} Landmark Properties
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Properties Section */}
            <section className="max-w-6xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Property 1 */}
                    {
                        cityProperties.length > 0 ?
                            cityProperties.map((p, i) => (
                                // <div
                                //     key={`property_${i}`}
                                //     className="bg-white text-black rounded-lg shadow-md overflow-hidden h-[350px] relative hover:scale-105 transition cursor-pointer">
                                //     <img src={p.cover_image} alt="Property 1" className="w-full h-full object-cover" />
                                //     <div className="p-3 absolute bottom-0">
                                //         <h3 className="text-base font-bold text-white drop-shadow-md"
                                //             style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
                                //         >{p.name}</h3>
                                //         <p className="text-sm text-white drop-shadow-md"
                                //             style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
                                //         >{p.location.city}, {p.location.state}</p>
                                //         <p className="text-sm text-white drop-shadow-md"
                                //             style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
                                //         >{p.beds + " Beds " + p.baths + " Baths " + p.sqft + ' sqft'}</p>
                                //     </div>
                                // </div>
                                <PropertyCard key={i} property={p} />
                            ))
                            : null
                    }
                </div>
                {
                    cityProperties.length > 4 &&
                    <div className="flex justify-center mt-6">
                        <button className="bg-[#8d7d5c] text-white px-6 py-2 rounded-md font-medium hover:bg-[#9c8a67]">
                            Show more
                        </button>
                    </div>
                }
            </section>

            {/* Contact Section */}
            <section className="py-12">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact us</h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-2 rounded-md bg-[#69664c] border border-gray-400 text-white placeholder-gray-300"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 rounded-md bg-[#69664c] border border-gray-400 text-white placeholder-gray-300"
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full px-4 py-2 rounded-md bg-[#69664c] border border-gray-400 text-white placeholder-gray-300"
                            />
                            <textarea
                                rows={3}
                                placeholder="Message"
                                className="w-full px-4 py-2 rounded-md bg-[#69664c] border border-gray-400 text-white placeholder-gray-300"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-[#8d7d5c] text-white px-6 py-2 rounded-md font-medium hover:bg-[#9c8a67]"
                            >
                                Send
                            </button>
                        </form>
                    </div>

                    {/* Map & Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">{cityData.city}, {cityData.state}</h3>
                        <a href={mapImage().mapUrl} target='_blank'>
                            <img
                                src={mapImage().imgUrl}
                                alt="Map"
                                className="w-full rounded-md mb-4"
                            />
                        </a>
                        <div className="space-y-3 text-sm text-white"
                            style={{ listStyleType: 'none' }}
                        >
                            <li className="flex gap-2 items-center space-x-2">
                                <FaPhoneAlt className="text-lg" />
                                <span>(949) 257-2019</span>
                            </li>
                            <li className="flex gap-2 items-center space-x-2">
                                <MdEmail className="text-lg" />
                                <span>info@staylandmark.com</span>
                            </li>
                            <li className="flex gap-2 items-center space-x-2">
                                <FaInstagram className="text-lg" />
                                <span>@landmarkresidences</span>
                            </li>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CityPage;
