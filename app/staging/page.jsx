import Image from "next/image";

export default function Staging() {

  return (
    <main>
      
      <div className="h-[50vh] md:min-h-screen flex items-center justify-start p-8 bg-cover bg-center relative" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(/1.jpg)' }}>
        <div className="max-w-2xl text-white bg-landmark-green/30 backdrop-blur-sm w-1/2 p-10 mt-80">
          <h1 className="mb-4 text-6xl font-bold">Staging</h1>
          <p className="text-left text-lg">
            Like Landmark property designs?
          </p>
          <p className="text-left text-lg">
            Our staging services are coming soon!
          </p>
        </div>
      </div>
     

      
      
    </main>
  );
}
