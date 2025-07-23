import PropertyCard from "@/components/PropertyCard";
import properties from '../../public/properties.json';

export default function Properties() {

  return (
    <main style={{ backgroundImage: "url(/propertiesbg.jpg)" }}>

      <div className="min-h-screen p-8 pt-30  bg-cover bg-center relative bg--[#1f3420]" >
        <h1 className="mb-4 text-3xl md:text-6xl text-center pb-15">Our Landmarks</h1>

        <div className="max-w-6xl mx-auto px-10 py-14 bg-[#69664c]/56 border border-transparent rounded-md">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {properties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </div>


      </div>





    </main>
  );
}
