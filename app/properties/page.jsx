import PropertyCard from "@/components/PropertyCard";
import properties from '../../public/properties.json';

export default function Properties() {

  return (
    <main>
      
      <div className="min-h-screen p-8 pt-30  bg-cover bg-center relative bg--[#1f3420]" >
      <h1 className="mb-4 text-3xl md:text-6xl text-center pb-15">All of our luxury properties.</h1>

          <div className="flex flex-wrap space-x-12 items-center justify-center">
            {properties.map((property, index) => (
                <PropertyCard key={index} property={property} />
            ))}
          </div>

          
      </div>

      

      
      
    </main>
  );
}
