import properties from '../public/properties.json'; 

const CityCard = ({ city }) => {
    // Count properties for this city
    const numProperties = properties.filter(
        (property) => property.location.city === city.city
    ).length;

    return (
        <a href={`/cities/${city.city}`}>
            <div 
                className="w-100 h-140 mt-10 overflow-hidden relative bg-cover bg-center" 
                style={{ 
                    backgroundImage: `linear-gradient(180deg,rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.72) 100%), url(/${city.image})`
                }}
            >
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h2 className="text-white text-3xl font-bold">
                        {city.city}, {city.state}
                    </h2>
                    <p className="text-white text-sm">
                        {numProperties} Landmark Properties
                    </p>
                </div>
            </div>
        </a>
    );
};

export default CityCard;
