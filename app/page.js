import PropertyCard from "@/components/PropertyCard";
import properties from '../public/properties.json';
import Link from 'next/link';

export default function Home() {

  return (
    <main>
      <div
        className="min-h-screen md:h-[50vh] flex items-center justify-start p-6 md:p-8 bg-cover bg-center relative"
        style={{backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/1.jpg)'}}
      >
        <div className="w-full md:w-1/2  max-w-2xl text-white bg-landmark-green/30 backdrop-blur-sm p-6 md:p-10 mt-80">
          <h1 className="mb-4 text-4xl md:text-6xl font-bold">
            Luxury living with no limits.
          </h1>
          <p className="text-left text-base md:text-lg">
            Incredible views, modern spaces, pristine cleanliness. Landmark<sup>®</sup> focuses on creating luxury experiences in vibrant communities all around the world.
          </p>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-start p-8 bg-red-100 bg-cover bg-center relative" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/3.jpg)' }}>
        <div className="max-w-2xl text-white bg-black/30 backdrop-blur-sm w-1/2 p-10 mt-80">
          <h1 className="mb-4 text-6xl font-bold">About us</h1>
          <p className="text-left text-lg">
            Incredible views, modern spaces, pristine cleanliness. Landmark<sup>®</sup> focuses on creating luxury experiences in vibrant communities all around the world.
          </p>
        </div>
      </div>

      <div className="min-h-screen p-8  bg-cover bg-center relative bg-landmark-green" >
      <h1 className="mb-4 text-6xl text-center pb-15">Some of our properties.</h1>

          <div className="flex flex-wrap space-x-12 items-center justify-center">
            {properties.slice(0, 6).map((property) => (
                <PropertyCard key={property.name} property={property} />
            ))}
          </div>
          <div className="flex justify-center mt-15">
            <a href="/properties" className="px-5 py-3 border border-white rounded text-white hover:bg-white hover:text-black transition cursor-pointer">
              <span>See All</span> {" "} <span>→</span>
            </a>
          </div>
      </div>

      <div className="min-h-screen p-8 pt-30 bg-cover bg-center relative bg-landmark-green" >
        <h1 className="mb-4 text-6xl text-center">Real people are looking after you!</h1>
        <h2 className="text-center text-2xl">Never feel left alone with a problem, our team will accommodate</h2>
        <h2 className="text-center text-2xl">whatever request is needed to make your stay perfect.</h2>
        <img src="/4.png" alt="" className="w-full px-[2rem] pt-10" />
        <div className="flex justify-center flex-wrap items-start gap-15">
          <div className="w-[400px] flex items-center ">
            <img src="/phone.svg" alt="" className="w-full w-15 h-15 mr-5" />
            <div>
              <h2 className="text-2xl font-bold ">Personal Assistant</h2>
              <p className="text-md text-gray-400">Lockouts, check-in problems, noise complaints - our team works around the clock to look after you.</p>
            </div>
          </div>
          <div className="w-[400px] flex items-center">
            <img src="/wrench.svg" alt="" className="w-full w-15 h-15 mr-5" />
            <div>
              <h2 className="text-2xl font-bold ">Maintenance</h2>
              <p className="text-md text-gray-400">We resolve all issues in the unit immediately to ensure the property is flawlessly maintained.</p>
            </div>
          </div>
          <div className="w-[400px] flex items-center">
            <img src="/cleaning.svg" alt="" className="w-full w-15 h-15 mr-5" />
            <div>
              <h2 className="text-2xl font-bold ">Cleaning Staff</h2>
              <p className="text-md text-gray-400">We take immense pride in our housekeeping team. They leave no corner untouched.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="max-h-[40vh] px-30 py-10 flex items-start justify-start flex-col bg-cover bg-center relative bg-landmark-green" 
      style={{backgroundImage: 'linear-gradient(260deg,rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.72) 100%), url(/5.webp)'}}
      >
        <h1 className="mb-4 text-3xl font-bold">Live, Work, Stay in Luxury.</h1>
        <p className="text-lg max-w-[300px]">Landmark<sup>®</sup> properties offer a unique blend of comfort and luxury.</p>
        <a href="/contact" className="mt-5 px-3 py-3 border border-white rounded text-white hover:bg-white hover:text-black transition cursor-pointer">
          <span>Get Started</span> {" "} <span>→</span>
        </a>
      </div>
    
    </main>
  );
}
