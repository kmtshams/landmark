import PropertyCard from "@/components/PropertyCard";
import properties from '../public/properties/properties.json';


export default function Home() {

  return (
    <main>
      <div
        className="min-h-screen md:h-[50vh] flex items-center justify-start p-6 md:p-8 bg-cover bg-center relative"
        style={{backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/1.jpg)'}}
      >
        <div className="w-full md:w-1/2  max-w-2xl text-white bg-landmark-green/30 backdrop-blur-sm p-6 md:p-10">
          <h1 className="mb-4 text-4xl md:text-6xl font-bold">
            Luxury living with no limits.
          </h1>
          <p className="text-left text-base md:text-lg">
            Incredible views, modern spaces, pristine cleanliness. Landmark<sup>®</sup> focuses on creating luxury experiences in vibrant communities all around the world.
          </p>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-start p-8 bg-red-100 bg-cover bg-center relative" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/3.jpg)' }}>
        <div className="max-w-2xl text-white bg-black/30 backdrop-blur-sm w-1/2 p-10">
          <h1 className="mb-4 text-6xl font-bold">About us</h1>
          <p className="text-left text-lg">
            Incredible views, modern spaces, pristine cleanliness. Landmark<sup>®</sup> focuses on creating luxury experiences in vibrant communities all around the world.
          </p>
        </div>
      </div>

      <div className="min-h-screen p-8  bg-cover bg-center relative bg-landmark-green" >
      <h1 className="mb-4 text-6xl font-bold text-center pb-15">Some of our properties.</h1>

          <div className="flex flex-wrap space-x-12 items-center justify-center">
            {properties.map((property) => (
                <PropertyCard key={property.name} property={property} />
            ))}
          </div>
      </div>

      
    
    </main>
  );
}
