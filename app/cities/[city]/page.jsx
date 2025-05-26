import React from 'react';
import cities from '../../../public/cities.json';


const CityPage = async ({ params }) => {
    const { city } = await params;
    console.log("params", params)
    console.log("city", city)
    const rawCity = params.city;
    console.log("rawCity", rawCity)
    const decodedCity = decodeURIComponent(rawCity);
    console.log("decodedCity", decodedCity)
    const cityData = cities[decodedCity];
    console.log("cityData", cityData)

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
        </main>
    );
};

export default CityPage;
