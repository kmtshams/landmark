import Image from "next/image";

export default function Staging() {

  return (
    <main>
      
      <div className="h-[50vh] flex items-center justify-start p-8 bg-cover bg-center relative" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/1.jpg)' }}>
        <div className="max-w-2xl text-white bg-landmark-green/30 backdrop-blur-sm w-1/2 p-10">
          <h1 className="mb-4 text-6xl font-bold">Staging</h1>
          <p className="text-left text-lg">
            Incredible views, modern spaces, pristine cleanliness. Landmark<sup>®</sup> focuses on creating luxury experiences in vibrant communities all around the world.
          </p>
        </div>
      </div>
      <div>
        <h1 className="mb-4 text-6xl font-bold text-center pb-15">Some of our properties.</h1>
      </div>

      
      
    </main>
  );
}
