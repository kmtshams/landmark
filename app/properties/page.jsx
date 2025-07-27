'use client'
import PropertyCard from "@/components/PropertyCard";
import properties from '../../public/properties.json';
import { useLazyBackground } from "@/utils/useLazyBackground";

export default function Properties() {
  const bg1 = useLazyBackground("/propertiespage/propertiesbg.jpg");
  return (
    <main>
      <div className="min-h-screen p-8 pt-30  bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <h1 className="mb-4 text-3xl md:text-6xl text-center pb-15">Our Landmarks</h1>

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-[#69664c]/56 px-10 py-14 rounded-md">
            {properties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </div>


      </div>
    </main>
  );
}
